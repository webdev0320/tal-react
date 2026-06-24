/**
 * Generates static Accounts sub-page view components from wp-data JSON + page config.
 * Run: node scripts/generate-accounts-pages.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const PAGES = [
  { configFile: 'bookkeeping-services.js', componentName: 'BookkeepingServices' },
  { configFile: 'statutory-accounts.js', componentName: 'StatutoryAccounts' },
  { configFile: 'management-accounts.js', componentName: 'ManagementAccounts' },
  { configFile: 'payroll-services.js', componentName: 'PayrollServices' },
  { configFile: 'hmrc-self-assessment-tax-returns-accountant.js', componentName: 'SelfAssessment' },
  { configFile: 'auto-enrolment-pension-contributions.js', componentName: 'Pensions' },
  { configFile: 'consolidated-accounts.js', componentName: 'ConsolidatedAccounts' },
  { configFile: 'financial-forecasting.js', componentName: 'FinancialForecasting' },
  { configFile: 'cash-flow-forecasting.js', componentName: 'CashFlowForecasting' },
];

const SKIP_SECTIONS = [
  /^Our Clients and Collaborative Partners/i,
  /^Our Recent Google Reviews/i,
  /^Get in Touch$/i,
  /^Send Us a Message$/i,
  /^Other Areas In London We Serve/i,
  /^FAQs on/i,
  /^Email Address:/i,
];

const SKIP_INLINE = [
  /^Bookkeeping$/i,
  /^Statutory Accounts$/i,
  /^Management Accounts$/i,
  /^Payroll Services$/i,
  /^Self-Assessment/i,
  /^Pension/i,
  /^Consolidated Accounts$/i,
  /^Financial Forecasting/i,
  /^Cashflow forecasting/i,
];

function loadConfig(configFile) {
  const raw = fs.readFileSync(path.join(ROOT, 'src/data/accountsPages', configFile), 'utf8');
  const slug = raw.match(/"slug":\s*"([^"]+)"/)?.[1];
  const title = raw.match(/"title":\s*"([^"]+)"/)?.[1];
  const subtitle = raw.match(/"subtitle":\s*"([^"]*)"/)?.[1] ?? '';
  const heroImage = raw.match(/"heroImage":\s*"([^"]+)"/)?.[1] ?? '';
  const pagePath = raw.match(/"path":\s*"([^"]+)"/)?.[1] ?? '';
  const faqs = [];
  const faqBlock = raw.match(/"faqs":\s*\[([\s\S]*?)\]\s*,\s*"sectionImages"/);
  if (faqBlock) {
    const qMatches = [...faqBlock[1].matchAll(/"q":\s*"((?:\\.|[^"\\])*)"/g)];
    const aMatches = [...faqBlock[1].matchAll(/"a":\s*"((?:\\.|[^"\\])*)"/g)];
    for (let i = 0; i < qMatches.length; i++) {
      faqs.push({
        q: JSON.parse(`"${qMatches[i][1]}"`),
        a: JSON.parse(`"${aMatches[i][1]}"`),
      });
    }
  }
  return { slug, title, subtitle, heroImage, path: pagePath, faqs };
}

function decodeHtml(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\u00a0/g, ' ')
    .replace(/\\u2013/g, '–')
    .replace(/\\u2014/g, '—')
    .replace(/\\u2019/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeLink(href) {
  if (!href) return href;
  return href
    .replace(/^https?:\/\/(www\.)?taxaccolega\.co\.uk/i, '')
    .replace(/\/$/, '') || '/';
}

function htmlToJsx(html) {
  let s = html;
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<\/p>\s*<p/gi, '</p><p');
  s = s.replace(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
    const link = normalizeLink(href);
    const inner = decodeHtml(text.replace(/<[^>]+>/g, ''));
    if (link.startsWith('http')) {
      return `<a href="${href}" target="_blank" rel="noreferrer" className="text-brand-orange fw-semibold text-decoration-none">${escapeJsx(inner)}</a>`;
    }
    return `<Link href="${link}" className="text-brand-orange fw-semibold text-decoration-none">${escapeJsx(inner)}</Link>`;
  });
  s = s.replace(/<strong>([\s\S]*?)<\/strong>/gi, (_, t) => `<strong className="text-brand-dark">${escapeJsx(decodeHtml(t))}</strong>`);
  s = s.replace(/<b>([\s\S]*?)<\/b>/gi, (_, t) => `<strong className="text-brand-dark">${escapeJsx(decodeHtml(t))}</strong>`);
  s = s.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => {
    const text = decodeHtml(inner.replace(/<[^>]+>/g, ' '));
    if (!text || text === ' ') return '';
    return `<p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>${inner.trim()}</p>`;
  });
  return s;
}

function escapeJsx(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function extractBullets(text) {
  const bullets = [];
  const lines = text.split(/\n|<br\s*\/?>/i);
  for (const line of lines) {
    const cleaned = decodeHtml(line.replace(/<[^>]+>/g, ''));
    const match = cleaned.match(/^[●•]\s*(.+)/);
    if (match) bullets.push(match[1].trim());
  }
  if (bullets.length === 0) {
    const inline = [...text.matchAll(/●\s*([^<\n]+)/g)].map((m) => decodeHtml(m[1].trim()));
    return inline;
  }
  return bullets;
}

function parseTable(html) {
  const headers = [...html.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/gi)].map((m) => decodeHtml(m[1].replace(/<[^>]+>/g, '')));
  const rows = [];
  const rowMatches = [...html.matchAll(/<tr>([\s\S]*?)<\/tr>/gi)];
  for (const row of rowMatches) {
    const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) => decodeHtml(m[1].replace(/<[^>]+>/g, '')));
    if (cells.length) rows.push(cells);
  }
  if (!headers.length && !rows.length) return null;
  return { headers, rows };
}

function renderTable(table, title) {
  const cols = table.headers.length || (table.rows[0]?.length ?? 0);
  const lines = [];
  if (title) {
    lines.push(`          <h4 className="text-brand-dark fw-bold text-center mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>${escapeJsx(title)}</h4>`);
  }
  lines.push(`          <div className="row justify-content-center mb-5">`);
  lines.push(`            <div className="col-lg-10">`);
  lines.push(`              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">`);
  lines.push(`                <table className="table table-hover align-middle mb-0 bg-white">`);
  lines.push(`                  <thead style={{ background: '#1d3c45', color: '#fff' }}>`);
  lines.push(`                    <tr>`);
  for (const h of table.headers) {
    lines.push(`                      <th className="py-3 px-4 text-white border-0 fw-bold">${escapeJsx(h)}</th>`);
  }
  lines.push(`                    </tr>`);
  lines.push(`                  </thead>`);
  lines.push(`                  <tbody>`);
  table.rows.forEach((row, i) => {
    const bg = i % 2 === 1 ? " style={{ background: '#fcfcfc' }}" : '';
    lines.push(`                    <tr className="border-bottom"${bg}>`);
    row.forEach((cell, ci) => {
      const cls = ci === 0 ? 'fw-bold text-brand-dark' : 'text-secondary';
      lines.push(`                      <td className="py-3 px-4 ${cls}">${escapeJsx(cell)}</td>`);
    });
    lines.push(`                    </tr>`);
  });
  lines.push(`                  </tbody>`);
  lines.push(`                </table>`);
  lines.push(`              </div>`);
  lines.push(`            </div>`);
  lines.push(`          </div>`);
  return lines.join('\n');
}

function renderBullets(bullets) {
  if (!bullets.length) return '';
  const lines = [`              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">`];
  for (const b of bullets) {
    lines.push(`                <li className="d-flex align-items-start"><CheckIcon /><span>${escapeJsx(b)}</span></li>`);
  }
  lines.push(`              </ul>`);
  return lines.join('\n');
}

function renderParagraphs(paragraphs) {
  const lines = [];
  let bulletBuffer = [];

  const flushBullets = () => {
    if (bulletBuffer.length) {
      lines.push(renderBullets(bulletBuffer));
      bulletBuffer = [];
    }
  };

  for (const p of paragraphs) {
    const text = decodeHtml(p.replace(/<[^>]+>/g, ' ')).trim();
    const bulletMatch = text.match(/^[●•]\s*(.+)/);
    if (bulletMatch) {
      bulletBuffer.push(bulletMatch[1].trim());
      continue;
    }
    flushBullets();
    const jsx = htmlToJsx(p);
    if (jsx.trim()) lines.push(`              ${jsx}`);
  }
  flushBullets();
  return lines.join('\n');
}

function parseContent(html) {
  const cleaned = html
    .replace(/<h2[^>]*>\s*Our Clients[\s\S]*?(?=<h2[^>]*>\s*Bookkeeping and Accounting)/i, '')
    .replace(/<h2[^>]*>\s*Our Recent Google Reviews[\s\S]*?(?=<h2[^>]*>\s*What's Included|<h2[^>]*>\s*What)/i, '')
    .replace(/<h2[^>]*>\s*Get in Touch[\s\S]*?(?=<h2[^>]*>\s*When You|<h2[^>]*>\s*Speak to|<h3[^>]*>\s*Speak to)/i, '')
    .replace(/<h2[^>]*>\s*Other Areas[\s\S]*?(?=<h2[^>]*>\s*FAQs|$)/i, '')
    .replace(/<h2[^>]*>\s*FAQs[\s\S]*$/i, '')
    .replace(/<h2[^>]*>\s*Email Address:[\s\S]*$/i, '');

  const blocks = [];
  const regex = /(<h2[^>]*>[\s\S]*?)(?=<h2[^>]*>|$)/gi;
  let introMatch = cleaned.match(/^([\s\S]*?)(?=<h2)/i);
  if (introMatch) {
    const introHtml = introMatch[1];
    const introPs = [...introHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => m[0]);
    const introText = introPs.map((p) => decodeHtml(p.replace(/<[^>]+>/g, ''))).join(' ').trim();
    if (introPs.length && introText) {
      blocks.push({ type: 'intro', paragraphs: introPs });
    }
  }

  let match;
  const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2[^>]*>|$)/gi;
  while ((match = h2Regex.exec(cleaned)) !== null) {
    const title = decodeHtml(match[1].replace(/<[^>]+>/g, ''));
    if (SKIP_SECTIONS.some((re) => re.test(title))) continue;
    if (SKIP_INLINE.some((re) => re.test(title))) continue;

    let body = match[2];
    const imgMatch = body.match(/<figure[^>]*class="account-section-image"[^>]*>[\s\S]*?<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/i)
      || body.match(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/i);
    const image = imgMatch ? { src: imgMatch[1], alt: decodeHtml(imgMatch[2] || title) } : null;
    body = body.replace(/<figure[\s\S]*?<\/figure>/gi, '');

    const tableMatch = body.match(/<table[\s\S]*?<\/table>/i);
    let table = null;
    if (tableMatch) {
      table = parseTable(tableMatch[0]);
      body = body.replace(/<table[\s\S]*?<\/table>/i, '');
    }

    const h3Parts = body.split(/<h3[^>]*>/i);
    const subsections = [];
    if (h3Parts.length > 1) {
      const leadParagraphs = [...h3Parts[0].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => m[0]);
      if (leadParagraphs.length) {
        subsections.push({ title: null, paragraphs: leadParagraphs });
      }
      for (let i = 1; i < h3Parts.length; i++) {
        const closeIdx = h3Parts[i].indexOf('</h3>');
        const subTitle = decodeHtml(h3Parts[i].slice(0, closeIdx).replace(/<[^>]+>/g, ''));
        const subBody = h3Parts[i].slice(closeIdx + 5);
        const paragraphs = [...subBody.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => m[0]);
        subsections.push({ title: subTitle, paragraphs });
      }
    } else {
      const paragraphs = [...body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => m[0]);
      subsections.push({ title: null, paragraphs });
    }

    blocks.push({ type: 'section', title, image, subsections, table });
  }

  return blocks;
}

function extractFaqsFromHtml(html) {
  const faqs = [];
  const faqSection = html.match(/<h2[^>]*>\s*FAQs[\s\S]*$/i);
  if (!faqSection) return faqs;
  const block = faqSection[0];
  const pairs = [...block.matchAll(/<h3[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>[\s\S]*?<\/h3>\s*<p>([\s\S]*?)<\/p>/gi)];
  for (const m of pairs) {
    faqs.push({
      q: decodeHtml(m[1].replace(/<[^>]+>/g, '')),
      a: decodeHtml(m[2].replace(/<[^>]+>/g, '')),
    });
  }
  return faqs;
}

function getQuickNav(currentPath) {
  const links = [
    { title: 'Bookkeeping', link: '/accounts/bookkeeping-services' },
    { title: 'Statutory Accounts', link: '/accounts/statutory-accounts' },
    { title: 'Management Accounts', link: '/accounts/management-accounts' },
    { title: 'Payroll Services', link: '/accounts/payroll-services' },
    { title: 'Self-Assessment', link: '/accounts/hmrc-self-assessment-tax-returns-accountant' },
    { title: 'Pension & Auto Enrolment', link: '/accounts/auto-enrolment-pension-contributions' },
    { title: 'Consolidated Accounts', link: '/accounts/consolidated-accounts' },
    { title: 'Financial Forecasting', link: '/accounts/financial-forecasting' },
    { title: 'Cashflow Forecasting', link: '/accounts/cash-flow-forecasting' },
  ];
  const norm = (p) => p.replace(/\/$/, '');
  return links.filter((l) => norm(l.link) !== norm(currentPath)).slice(0, 3);
}

function renderSection(block, index) {
  const altBg = index % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
  const imageLeft = index % 2 === 1;
  const lines = [];

  lines.push(`      <section className="py-5 ${altBg}">`);
  lines.push(`        <div className="container">`);

  if (block.image) {
    lines.push(`          <div className="row g-5 align-items-center">`);
    if (imageLeft) {
      lines.push(`            <div className="col-lg-5 order-2 order-lg-1">`);
      lines.push(`              <div className="p-2 border rounded-4 shadow-lg bg-white">`);
      lines.push(`                <img src="${block.image.src}" alt="${escapeJsx(block.image.alt)}" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />`);
      lines.push(`              </div>`);
      lines.push(`            </div>`);
      lines.push(`            <div className="col-lg-7 order-1 order-lg-2">`);
    } else {
      lines.push(`            <div className="col-lg-7">`);
    }
  } else {
    lines.push(`          <div className="row g-5">`);
    lines.push(`            <div className="col-lg-10 mx-auto">`);
  }

  lines.push(`              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>`);
  lines.push(`                ${escapeJsx(block.title)}`);
  lines.push(`              </h2>`);

  for (const sub of block.subsections) {
    if (sub.title) {
      lines.push(`              <h3 className="text-brand-orange fw-bold mb-3">${escapeJsx(sub.title)}</h3>`);
    }
    lines.push(renderParagraphs(sub.paragraphs));
  }

  if (block.image) {
    lines.push(`            </div>`);
    if (!imageLeft) {
      lines.push(`            <div className="col-lg-5">`);
      lines.push(`              <div className="p-2 border rounded-4 shadow-lg bg-white">`);
      lines.push(`                <img src="${block.image.src}" alt="${escapeJsx(block.image.alt)}" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />`);
      lines.push(`              </div>`);
      lines.push(`            </div>`);
    }
  } else {
    lines.push(`            </div>`);
  }

  lines.push(`          </div>`);

  if (block.table && block.table.rows.length) {
    lines.push(renderTable(block.table));
  }

  lines.push(`        </div>`);
  lines.push(`      </section>`);
  return lines.join('\n');
}

function renderIntro(block) {
  const lines = [];
  lines.push(`      <section className="py-5 bg-white">`);
  lines.push(`        <div className="container">`);
  lines.push(`          <div className="row g-5">`);
  lines.push(`            <div className="col-lg-10 mx-auto">`);
  lines.push(`              <div className="text-secondary d-flex flex-column gap-1 fs-6" style={{ lineHeight: 1.8 }}>`);
  lines.push(renderParagraphs(block.paragraphs));
  lines.push(`              </div>`);
  lines.push(`            </div>`);
  lines.push(`          </div>`);
  lines.push(`        </div>`);
  lines.push(`      </section>`);
  return lines.join('\n');
}

function generatePage(config, componentName) {
  const jsonPath = path.join(ROOT, 'public/wp-data/accounts', `${config.slug}.json`);
  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const blocks = parseContent(json.content || '');
  const faqs = config.faqs.length ? config.faqs : extractFaqsFromHtml(json.content || '');
  const quickNav = getQuickNav(config.path);
  const breadcrumbLabel = config.title;

  const heroStyle = config.heroImage
    ? `backgroundImage: 'linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(${config.heroImage})', backgroundSize: 'cover', backgroundPosition: 'center'`
    : `background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)'`;

  const sectionJsx = [];
  let sectionIndex = 0;
  let linksBarInserted = false;
  for (const block of blocks) {
    if (block.type === 'intro') {
      const introText = block.paragraphs.map((p) => decodeHtml(p.replace(/<[^>]+>/g, ''))).join(' ').trim();
      if (config.subtitle && introText === config.subtitle.trim()) continue;
      sectionJsx.push(renderIntro(block));
      if (!linksBarInserted) {
        sectionJsx.push('      <AccountsLinksBar />');
        linksBarInserted = true;
      }
    } else {
      sectionJsx.push(renderSection(block, sectionIndex));
      sectionIndex++;
      if (!linksBarInserted) {
        sectionJsx.push('      <AccountsLinksBar />');
        linksBarInserted = true;
      }
    }
  }
  if (!linksBarInserted) sectionJsx.push('      <AccountsLinksBar />');

  const faqJsx = faqs.length
    ? faqs
        .map(
          (faq, idx) => `                  <div key={${idx}} className="accordion-item border rounded-3 mb-3 overflow-hidden shadow-sm">
                    <button
                      className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center"
                      onClick={() => setActiveFaqIndex(activeFaqIndex === ${idx} ? null : ${idx})}
                      style={{
                        backgroundColor: activeFaqIndex === ${idx} ? '#1d3c45' : 'white',
                        color: activeFaqIndex === ${idx} ? 'white' : '#1a2332',
                        border: 'none',
                        fontWeight: 600,
                        transition: 'all 0.3s',
                      }}
                    >
                      <span>${escapeJsx(faq.q)}</span>
                      <i className={\`fas fa-chevron-\${activeFaqIndex === ${idx} ? 'up' : 'down'} ms-3 text-brand-orange\`}></i>
                    </button>
                    {activeFaqIndex === ${idx} && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        ${escapeJsx(faq.a)}
                      </div>
                    )}
                  </div>`
        )
        .join('\n')
    : '';

  const quickNavItems = quickNav
    .map(
      (item) => `                    { title: '${escapeJsx(item.title)}', link: '${item.link}' }`
    )
    .join(',\n');

  const faqSection = faqs.length
    ? `
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Knowledge Base</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Frequently Asked Questions
              </h2>
              <div className="accordion-custom">
${faqJsx}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 p-4 text-center text-white" style={{ background: '#1d3c45' }}>
                <h4 className="fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Helpline Desk</h4>
                <p className="text-white-50 mb-4 small">Need help with your accounts? Speak directly to our team today.</p>
                <div className="d-flex flex-column gap-3 mb-4 text-start">
                  <a href="tel:02081270728" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded bg-white bg-opacity-10">
                    <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small" style={{ fontSize: '0.75rem' }}>Call Office</span>
                      <span className="fw-bold" style={{ fontSize: '0.95rem' }}>020 8127 0728</span>
                    </div>
                  </a>
                  <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded bg-white bg-opacity-10">
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small" style={{ fontSize: '0.75rem' }}>Whatsapp Chat</span>
                      <span className="fw-bold" style={{ fontSize: '0.95rem' }}>074 7117 0484</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`
    : '';

  const subtitleBlock = config.subtitle
    ? `<p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                ${escapeJsx(config.subtitle)}
              </p>`
    : '';

  return `"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import AccountsLinksBar from '../components/AccountsLinksBar';
import { CheckIcon } from '../components/accounts/AccountsPageIcons';

const ${componentName} = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  const quickNav = [
${quickNavItems}
  ];

  return (
    <div className="bg-light min-h-screen">
      <header className="position-relative text-white overflow-hidden py-5" style={{ ${heroStyle}, minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2, paddingTop: '5rem' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Accounts Services
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                ${escapeJsx(config.title)}
              </h1>
              ${subtitleBlock}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">CONTACT US</a>
                <a href="/schedule-a-phone-call-or-video-meeting" className="btn btn-outline-light px-4 py-2">Schedule a Call</a>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">${escapeJsx(breadcrumbLabel)}</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
              <div className="p-4 rounded-4 shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                <h5 className="text-white fw-bold mb-4 text-center border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Navigation</h5>
                <div className="d-flex flex-column gap-3">
                  {quickNav.map((item, idx) => (
                    <Link key={idx} href={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-brand-dark" style={{ fontSize: '0.95rem' }}>{item.title}</span>
                        <span className="text-brand-orange fw-bold">READ MORE &raquo;</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white border-bottom py-3">
        <div className="container px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item"><Link href="/" className="text-decoration-none" style={{ color: '#D2601A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none" style={{ color: '#D2601A' }}>Accounts</Link></li>
              <li className="breadcrumb-item active text-secondary">${escapeJsx(breadcrumbLabel)}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="d-block d-lg-none py-3 bg-white border-bottom shadow-sm">
        <div className="container">
          <div className="row g-2">
            {quickNav.map((item, idx) => (
              <div className="col-4" key={idx}>
                <Link href={item.link} className="btn btn-sm btn-outline-dark w-100 text-truncate fw-semibold" style={{ fontSize: '0.75rem' }}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

${sectionJsx.join('\n\n')}

      <Partners />

      <ReviewsSlider />

      <section id="contact-block" className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Contact</span>
              <h2 className="text-brand-dark display-5 mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Get in Touch</h2>
              <p className="text-secondary mb-4">Connect directly with our customer response desk or drop by our physical consultation offices.</p>
              <div className="d-flex flex-column gap-3">
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="fas fa-phone-alt fs-5"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Phone Number</span>
                    <a href="tel:02081270728" className="fw-bold text-brand-dark text-decoration-none fs-5">020 8127 0728</a>
                  </div>
                </div>
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="fab fa-whatsapp fs-4"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Whatsapp Chat</span>
                    <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="fw-bold text-brand-dark text-decoration-none fs-5">074 7117 0484</a>
                  </div>
                </div>
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-brand-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="fas fa-envelope fs-5"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Email Support</span>
                    <a href="mailto:info@taxaccolega.co.uk" className="fw-bold text-brand-dark text-decoration-none fs-5">info@taxaccolega.co.uk</a>
                  </div>
                </div>
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="fas fa-map-marker-alt fs-5"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Office Address</span>
                    <span className="fw-bold text-brand-dark fs-6">187a London Road, Croydon, Surrey, CR0 2RJ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card p-4 p-md-5 border-0 shadow-lg rounded-4 bg-white h-100">
                <h3 className="mb-2 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Send Us a Message</h3>
                <p className="text-secondary small mb-4">Request a call back or drop details of your accounts enquiry.</p>
                {formSubmitted ? (
                  <div className="alert alert-success py-4 rounded-3" role="alert">
                    <h6 className="alert-heading fw-bold mb-1">Enquiry Successfully Dispatched!</h6>
                    <p className="mb-0 small">Thank you. An expert advisor will reply within 2 working hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Name <span className="text-danger">*</span></label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Email <span className="text-danger">*</span></label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" placeholder="Your Email" required />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-control" placeholder="Contact Number" />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Message <span className="text-danger">*</span></label>
                        <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" className="form-control" placeholder="How can we assist you today?" required></textarea>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-brand w-100 py-3 fw-bold">Submit Message</button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
${faqSection}

      <Partners />
    </div>
  );
};

export default ${componentName};
`;
}

// Create shared icons component
const iconsPath = path.join(ROOT, 'src/components/accounts/AccountsPageIcons.jsx');
fs.mkdirSync(path.dirname(iconsPath), { recursive: true });
fs.writeFileSync(
  iconsPath,
  `"use client";

export const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const WarningIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
`
);

for (const page of PAGES) {
  const config = loadConfig(page.configFile);
  const output = generatePage(config, page.componentName);
  const outPath = path.join(ROOT, 'src/views', `${page.componentName}.jsx`);
  fs.writeFileSync(outPath, output);
  console.log(`Generated ${page.componentName}.jsx (${config.slug})`);
}

console.log('Done.');
