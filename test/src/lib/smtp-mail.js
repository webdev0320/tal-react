import net from 'node:net';
import tls from 'node:tls';

function encodeBase64(value) {
  return Buffer.from(value, 'utf8').toString('base64');
}

function escapeData(value) {
  return String(value).replace(/\r?\n/g, '\r\n').replace(/^\./gm, '..');
}

function readResponse(socket) {
  return new Promise((resolve, reject) => {
    let buffer = '';

    const onData = (chunk) => {
      buffer += chunk.toString('utf8');
      const lines = buffer.split(/\r?\n/).filter(Boolean);
      const lastLine = lines[lines.length - 1];

      if (/^\d{3}\s/.test(lastLine)) {
        cleanup();
        resolve(buffer);
      }
    };

    const onError = (error) => {
      cleanup();
      reject(error);
    };

    const cleanup = () => {
      socket.off('data', onData);
      socket.off('error', onError);
    };

    socket.on('data', onData);
    socket.on('error', onError);
  });
}

async function command(socket, line, expectedCodes) {
  socket.write(`${line}\r\n`);
  const response = await readResponse(socket);
  const code = Number(response.slice(0, 3));

  if (!expectedCodes.includes(code)) {
    throw new Error(`SMTP command failed: ${line} -> ${response.trim()}`);
  }

  return response;
}

function connect({ host, port, secure }) {
  return new Promise((resolve, reject) => {
    const socket = secure
      ? tls.connect({ host, port, servername: host })
      : net.connect({ host, port });

    socket.once('error', reject);
    socket.once(secure ? 'secureConnect' : 'connect', () => {
      socket.off('error', reject);
      resolve(socket);
    });
  });
}

async function upgradeToTls(socket, host) {
  return new Promise((resolve, reject) => {
    const secureSocket = tls.connect({ socket, servername: host }, () => {
      secureSocket.off('error', reject);
      resolve(secureSocket);
    });
    secureSocket.once('error', reject);
  });
}

export async function sendSmtpMail({ to, subject, text, replyTo }) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const secure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || port === 465;

  if (!host || !from) {
    throw new Error('SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER/SMTP_FROM, and SMTP_PASS.');
  }

  let socket = await connect({ host, port, secure });

  try {
    await readResponse(socket);
    let ehlo = await command(socket, `EHLO ${process.env.SMTP_HELO || 'taxaccolega.co.uk'}`, [250]);

    if (!secure && /STARTTLS/i.test(ehlo)) {
      await command(socket, 'STARTTLS', [220]);
      socket = await upgradeToTls(socket, host);
      ehlo = await command(socket, `EHLO ${process.env.SMTP_HELO || 'taxaccolega.co.uk'}`, [250]);
    }

    if (user && pass) {
      if (/AUTH PLAIN/i.test(ehlo)) {
        await command(socket, `AUTH PLAIN ${encodeBase64(`\0${user}\0${pass}`)}`, [235]);
      } else {
        await command(socket, 'AUTH LOGIN', [334]);
        await command(socket, encodeBase64(user), [334]);
        await command(socket, encodeBase64(pass), [235]);
      }
    }

    await command(socket, `MAIL FROM:<${from}>`, [250]);
    await command(socket, `RCPT TO:<${to}>`, [250, 251]);
    await command(socket, 'DATA', [354]);

    const headers = [
      `From: Taxaccolega Website <${from}>`,
      `To: ${to}`,
      `Subject: ${subject.replace(/\r?\n/g, ' ')}`,
      replyTo ? `Reply-To: ${replyTo}` : null,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
    ].filter(Boolean);

    socket.write(`${headers.join('\r\n')}\r\n\r\n${escapeData(text)}\r\n.\r\n`);
    await readResponse(socket);
    await command(socket, 'QUIT', [221]);
  } finally {
    socket.destroy();
  }
}
