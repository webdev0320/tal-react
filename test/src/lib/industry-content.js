import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { cleanContent, extractFaqs, extractSubtitle, stripTags } from './wp-content.js';

const CONTENT_DIR = path.join(process.cwd(), 'wp-extracted-pages');

const INDUSTRY_SLUGS = [
  'it-professionals',
  'real-estate',
  'ecommerce',
  'construction',
  'automobile',
  'restaurants',
  'wholesellers-retailers',
  'healthcare-professionals',
  'leisure-industry',
  'non-uk-resident-taxation',
  'logistics',
  'expatriates',
  'charities',
];

function normalizeExtractedText(text) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\u00c2\u00a0/g, ' ')
    .replace(/\u00e2\u20ac\u2122/g, "'")
    .replace(/\u00e2\u20ac\u0153|\u00e2\u20ac\u009d/g, '"')
    .replace(/\u00e2\u20ac\u201c/g, '-')
    .replace(/\u00e2\u20ac\u201d/g, '-');
}

function extractTitle(text) {
  const match = text.match(/^Title:\s*(.+?)\s*$/m);
  return match ? match[1].trim() : null;
}

function removeTitleLine(text) {
  return text.replace(/^Title:\s*.+?\s*\n+/i, '');
}

function cleanIndustryContent(html) {
  let content = cleanContent(html);

  content = content.replace(
    /<h2[^>]*>\s*Our Clients and Collaborative Partners\s*<\/h2>[\s\S]*?(?=<button|<h2|$)/i,
    '',
  );
  content = content.replace(/<h2[^>]*>\s*Our Clients and Collaborative Partners\s*<\/h2>/gi, '');
  content = content.replace(/<p[^>]*>\s*Services\s*<\/p>/gi, '');
  content = content.replace(/<p[^>]*>\s*Why Choose Us\s*<\/p>/gi, '');
  content = content.replace(/<h2[^>]*>\s*Our Recent Google Reviews\s*<\/h2>[\s\S]*?(?=<h2[^>]*>\s*FAQs\s*<\/h2>|$)/i, '');
  content = content.replace(/<h2[^>]*>\s*FAQs\s*<\/h2>[\s\S]*$/i, '');

  return content.trim();
}

export function listIndustryContentSlugs() {
  return INDUSTRY_SLUGS;
}

export async function getContentBySlug(slug) {
  if (!INDUSTRY_SLUGS.includes(slug)) return null;

  const filePath = path.join(CONTENT_DIR, `${slug}.txt`);

  try {
    return await readFile(filePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

export async function getIndustryContentBySlug(slug) {
  const raw = await getContentBySlug(slug);
  if (!raw) return null;

  const normalized = normalizeExtractedText(raw);
  const body = removeTitleLine(normalized);
  const contentHtml = cleanIndustryContent(body);
  const firstHeading = contentHtml.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/i);

  return {
    rawContent: normalized,
    title: extractTitle(normalized) || (firstHeading ? stripTags(firstHeading[1]) : null),
    subtitle: extractSubtitle(body),
    contentHtml,
    faqs: extractFaqs(body),
  };
}
