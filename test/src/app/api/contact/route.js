import { NextResponse } from 'next/server';

import { sendSmtpMail } from '../../../lib/smtp-mail';

export const runtime = 'nodejs';

const ADMIN_EMAIL = 'mohammad.arbaz001@gmail.com';

function clean(value) {
  return String(value || '').trim();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const message = clean(body.message);
    const source = clean(body.source);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    const submittedAt = new Date().toISOString();
    const text = [
      'New website contact form submission',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Source: ${source || 'Website contact form'}`,
      `Submitted At: ${submittedAt}`,
      '',
      'Message:',
      message,
    ].join('\n');

    await sendSmtpMail({
      to: ADMIN_EMAIL,
      subject: `Website enquiry from ${name}`,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please call or email us directly.' },
      { status: 500 },
    );
  }
}
