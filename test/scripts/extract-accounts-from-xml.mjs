import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';

const PAGES = {
  'bookkeeping-services': 'bookkeeping-services',
  'statutory-accounts': 'statutory-accounts',
  'management-accounts': 'management-accounts',
  'payroll-services': 'payroll-services',
  'hmrc-self-assessment-tax-returns-accountant': 'self-assessment-tax-return-accountants',
  'auto-enrolment-pension-contributions': 'auto-enrolment-pension-contributions',
  'consolidated-accounts': 'consolidated-accounts',
  'financial-forecasting': 'financial-forecasting',
  'cash-flow-forecasting': 'cash-flow-forecasting',
};

const PARTNER_IMG = /2023\/06\/(A|ACCA|BTC|Croydon|Dext|Go|Intuit|Lewisham|Simply|SME|TAXCALC|Three|VT|XERO|Xpert|Google)/;

function getMetaValue(item, key) {
  return (
    item['wp:postmeta']?.find((meta) => meta['wp:meta_key']?.[0] === key)?.['wp:meta_value']?.[0] || ''
  );
}

function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractHeroImage(item) {
  const data = getMetaValue(item, '_elementor_data');
  const match = data.match(
    /"background_image"\s*:\s*\{\s*"url"\s*:\s*"https:\\\/\\\/www\.taxaccolega\.co\.uk\\\/wp-content\\\/uploads\\\/([^"]+)"/,
  );
  return match ? `/images/${match[1].replace(/\\\//g, '/')}` : '';
}

function extractSectionImages(item) {
  const data = getMetaValue(item, '_elementor_data');
  const urls = [...data.matchAll(
    /https:\\\/\\\/www\.taxaccolega\.co\.uk\\\/wp-content\\\/uploads\\\/([^"]+)"/g,
  )]
    .map((m) => m[1].replace(/\\\//g, '/').replace(/\\u2029/g, ''))
    .filter((u) => !u.includes('placeholder') && !PARTNER_IMG.test(u));

  const unique = [...new Set(urls)];
  const hero = extractHeroImage(item).replace('/images/', '');
  return unique
    .filter((u) => u !== hero)
    .filter((u) => u.includes('Services-Accounts-') || u.includes('2024/') || u.includes('edit.'))
    .map((u) => `/images/${u}`);
}

function extractSubtitle(rawContent) {
  const match = rawContent.match(/<h1[^>]*>[\s\S]*?<\/h1>\s*<p[^>]*>([\s\S]*?)<\/p>/i);
  return match ? stripTags(match[1]) : '';
}

function extractTitle(item, rawContent) {
  const wpTitle = (item.title?.[0] || '').replace(/\s*official\s*$/i, '').trim();
  const linkedH1 = rawContent.match(/<h1[^>]*>\s*<a[^>]*>([\s\S]*?)<\/a>\s*<\/h1>/i);
  if (linkedH1) return stripTags(linkedH1[1]);

  const h1 = rawContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) {
    const text = stripTags(h1[1]);
    if (text.length > 8 && !/verification|checkout|payment/i.test(text)) return text;
  }

  return wpTitle;
}

function remapImages(html) {
  return html
    .replace(/https?:\/\/(?:www\.)?taxaccolega\.co\.uk\/wp-content\/uploads\//g, '/images/')
    .replace(/srcset="[^"]*"/gi, '')
    .replace(/\s+sizes="[^"]*"/gi, '');
}

function cleanContent(html) {
  let content = html;
  content = content.replace(/<!--[\s\S]*?-->/g, '');
  content = content.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '');
  content = content.replace(/<a[^>]*href="\/contact-us[^"]*"[^>]*>[\s\S]*?<\/a>/gi, '');
  content = content.replace(/<p>\[rank_math_breadcrumb\]<\/p>/gi, '');
  content = content.replace(/\[rank_math_breadcrumb\]/g, '');
  content = content.replace(/\[insert phone number\]/gi, '020 8127 0728');
  content = content.replace(/\[[^\]]+\]/g, '');

  const endMarkers = [
    /<h2[^>]*>\s*Personal Details/i,
    /<h2[^>]*>\s*Checkout/i,
    /<h2[^>]*>\s*Secure Payment/i,
    /<form[^>]*id="[^"]*payment/i,
    /<!DOCTYPE html>/i,
  ];

  for (const marker of endMarkers) {
    const idx = content.search(marker);
    if (idx !== -1) content = content.slice(0, idx);
  }

  content = content.replace(/<img[^>]+src=["'][^"']*2023\/06\/(?:A|ACCA|BTC|Croydon|Dext|Go|Intuit|Lewisham|Simply|SME|TAXCALC|Three|VT|XERO|Xpert|Google)[^"']*["'][^>]*>/gi, '');
  content = remapImages(content);

  return content.trim();
}

function injectSectionImages(html, images) {
  if (!images.length) return html;

  let imageIndex = 0;
  return html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (full, attrs, inner) => {
    const heading = stripTags(inner);
    if (!heading || heading.length < 12) return full;
    if (/^5\.0\s*\|/.test(heading)) return full;
    if (/^(Barking|Beckenham|Bexley|Phone Number|Whatsapp|Email|Address|Send Us)/i.test(heading)) return full;

    const image = images[imageIndex];
    if (!image) return full;

    imageIndex += 1;
    const alt = heading.slice(0, 120);
    return `${full}\n<figure class="account-section-image"><img src="${image}" alt="${alt.replace(/"/g, '')}" loading="lazy" /></figure>`;
  });
}

function extractFaqs(content) {
  const faqs = [];
  const section = content.match(/<h2[^>]*>\s*FAQs[^<]*<\/h2>([\s\S]*?)(?=<h2[^>]*>\s*(?:Other Areas|Personal Details|Get in Touch|Speak to)|$)/i);
  if (!section) return faqs;

  [...section[1].matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi)].forEach((pair) => {
    const q = stripTags(pair[1]);
    const a = stripTags(pair[2]);
    if (!q || !a) return;
    if (q.length > 180 || a.length > 1200) return;
    if (/email address|personal details|role in the company|identity documents|checkout|secure payment/i.test(q)) return;
    faqs.push({ q, a });
  });

  return faqs;
}

const xml = fs.readFileSync('public/pages.xml', 'utf8');
const result = await xml2js.parseStringPromise(xml);
const items = result.rss.channel[0].item || [];

const outDir = path.join('public', 'wp-data', 'accounts');
const configDir = path.join('src', 'data', 'accountsPages');
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(configDir, { recursive: true });

for (const [routeSlug, xmlSlug] of Object.entries(PAGES)) {
  const item = items.find((entry) => entry['wp:post_name']?.[0] === xmlSlug);
  if (!item) {
    console.error(`Missing: ${xmlSlug}`);
    continue;
  }

  const rawContent = item['content:encoded']?.[0] || '';
  const title = extractTitle(item, rawContent);
  const subtitle = extractSubtitle(rawContent);
  const heroImage = extractHeroImage(item);
  const sectionImages = extractSectionImages(item);
  let content = cleanContent(rawContent);
  content = injectSectionImages(content, sectionImages);
  const faqs = extractFaqs(rawContent);

  fs.writeFileSync(
    path.join(outDir, `${routeSlug}.json`),
    JSON.stringify({ title, content }),
    'utf8',
  );

  const config = {
    slug: routeSlug,
    title,
    subtitle,
    heroImage,
    path: `/accounts/${routeSlug}`,
    faqs,
    sectionImages,
  };

  fs.writeFileSync(
    path.join(configDir, `${routeSlug}.js`),
    `const page = ${JSON.stringify(config, null, 2)};\n\nexport default page;\n`,
    'utf8',
  );

  const imgs = [...content.matchAll(/src=["'](\/images\/[^"']+)["']/g)].map((m) => m[1]);
  console.log(`✓ ${routeSlug}: ${content.length} chars, hero=${heroImage.split('/').pop()}, sectionImgs=${sectionImages.length}, inlineImgs=${imgs.length}, faqs=${faqs.length}`);
}

console.log('Done.');
