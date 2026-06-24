/**
 * Parses wp-data industry JSON into structured page configs and writes
 * src/data/industryPages/{slug}.js + index.js
 *
 * Run: node scripts/generate-industry-pages.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const JSON_DIR = path.join(ROOT, 'public', 'wp-data', 'industries');
const CONFIG_DIR = path.join(ROOT, 'src', 'data', 'industryPages');

const PARTNER_IMG = /2023\/06\/(A|ACCA|BTC|Croydon|Chamber|Dext|Go|Intuit|Lewisham|Simply|SME|TAXCALC|Three|VT|XERO|Xpert|Google)/i;

const SKIP_SECTIONS = [
  /^Our Clients and Collaborative Partners/i,
  /^Our Recent Google Reviews/i,
  /^Get in Touch$/i,
  /^Send Us a Message$/i,
  /^Contact\s*-?\s*Us$/i,
  /^FAQs$/i,
  /^Secure Payment$/i,
  /^Personal Details/i,
  /^Checkout$/i,
  /^Services$/i,
  /^Why Choose Us$/i,
  /^Email Address:/i,
  /^Phone Number$/i,
  /^Whatsapp$/i,
  /^Address$/i,
];

const NAV_LINKS = [
  { title: 'IT Professionals', slug: 'it-professionals' },
  { title: 'Real Estate', slug: 'real-estate' },
  { title: 'E-Commerce', slug: 'ecommerce' },
  { title: 'Construction', slug: 'construction' },
  { title: 'Automobile', slug: 'automobile' },
  { title: 'Restaurants', slug: 'restaurants' },
  { title: 'Wholesalers & Retailers', slug: 'wholesellers-retailers' },
  { title: 'Healthcare', slug: 'healthcare-professionals' },
  { title: 'Leisure Industry', slug: 'leisure-industry' },
  { title: 'Non-UK Resident Tax', slug: 'non-uk-resident-taxation' },
  { title: 'Logistics', slug: 'logistics' },
  { title: 'Expatriates', slug: 'expatriates' },
  { title: 'Charities', slug: 'charities' },
];

function decodeHtml(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(html) {
  return decodeHtml(html.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, ' '));
}

function remapImageUrl(url) {
  return url
    .replace(/https?:\/\/(?:www\.)?taxaccolega\.co\.uk\/wp-content\/uploads\//i, '/images/')
    .replace(/\\\//g, '/');
}

function isPartnerImage(src) {
  return PARTNER_IMG.test(src) || /Googleeeeeeeeeeee/i.test(src);
}

function trimContent(html) {
  let content = html.replace(/<!--[\s\S]*?-->/g, '');

  const endMarkers = [
    /<!DOCTYPE html>/i,
    /<h2[^>]*>\s*Personal Details/i,
    /<h2[^>]*>\s*Checkout/i,
    /<h2[^>]*>\s*Secure Payment/i,
    /<button[^>]*id="openPopupBtn"/i,
  ];

  for (const marker of endMarkers) {
    const idx = content.search(marker);
    if (idx !== -1) content = content.slice(0, idx);
  }

  return content;
}

function extractHeroImage(html) {
  const intro = html.split(/<h2[^>]*>/i)[0] || html;
  const matches = [...intro.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi)];

  for (const match of matches) {
    const src = remapImageUrl(match[1]);
    if (!isPartnerImage(src) && !/Googleeeee/i.test(src)) {
      return src;
    }
  }

  return '';
}

function extractSubtitle(html) {
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];

  for (const match of paragraphs) {
    if (/\[rank_math_breadcrumb\]/i.test(match[1])) continue;
    const text = stripTags(match[1]);
    if (text.length >= 15 && !/^contact/i.test(text)) return text;
  }

  return '';
}

function extractParagraphs(body) {
  const paragraphs = [];
  const bullets = [];

  for (const match of body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)) {
    const raw = match[1];
    const lines = raw.split(/<br\s*\/?>/i);

    for (const line of lines) {
      const text = stripTags(line);
      const bulletMatch = text.match(/^[●•]\s*(.+)/);
      if (bulletMatch) {
        bullets.push(bulletMatch[1].trim());
        continue;
      }
      if (text.length > 1) paragraphs.push(text);
    }
  }

  return { paragraphs, bullets };
}

function extractSectionImage(body, title) {
  const matches = [...body.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?[^>]*>/gi)];

  for (const match of matches) {
    const src = remapImageUrl(match[1]);
    if (isPartnerImage(src)) continue;
    return { src, alt: decodeHtml(match[2] || title) };
  }

  return null;
}

function extractCta(body) {
  const matches = [...body.matchAll(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];

  for (const match of matches) {
    const text = stripTags(match[2]);
    const href = match[1]
      .replace(/^https?:\/\/(?:www\.)?taxaccolega\.co\.uk/i, '')
      .replace(/\/$/, '') || '/';

    if (!text || text.length > 40) continue;
    if (/contact|find out|learn more|book|call/i.test(text)) {
      return { text, href: href.startsWith('http') ? match[1] : href };
    }
  }

  return { text: 'Contact Us', href: '/contact-us' };
}

function extractFaqs(html) {
  const faqs = [];
  const section = html.match(/<h2[^>]*>\s*FAQs[^<]*<\/h2>([\s\S]*?)(?=<h2[^>]*>\s*(?:Contact|Get in Touch)|$)/i);
  if (!section) return faqs;

  const pairs = [
    ...section[1].matchAll(/<h3[^>]*>[\s\S]*?(?:<a[^>]*>)?([\s\S]*?)(?:<\/a>)?\s*<\/h3>\s*<p>([\s\S]*?)<\/p>/gi),
  ];

  for (const pair of pairs) {
    const q = stripTags(pair[1]).replace(/^\d+\.\s*/, '');
    const a = stripTags(pair[2]);
    if (!q || !a || q.length > 200) continue;
    if (/email address|personal details|checkout|secure payment|phone:/i.test(q)) continue;
    if (/^(address|email|phone no|opening hours|whatsapp)$/i.test(q)) continue;
    faqs.push({ q, a });
  }

  return faqs;
}

function parseSections(html) {
  const cleaned = trimContent(html);
  const sections = [];
  const seenTitles = new Set();
  const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2[^>]*>|$)/gi;
  let match;

  while ((match = h2Regex.exec(cleaned)) !== null) {
    const title = stripTags(match[1]);
    if (!title || title.length < 4) continue;
    if (SKIP_SECTIONS.some((re) => re.test(title))) continue;

    const normalizedTitle = title.toLowerCase().replace(/\s+/g, ' ');
    if (seenTitles.has(normalizedTitle)) continue;
    seenTitles.add(normalizedTitle);

    const body = match[2]
      .replace(/<figure[\s\S]*?<\/figure>/gi, '')
      .replace(/<img[^>]+>/gi, '');

    const { paragraphs, bullets } = extractParagraphs(body);
    if (!paragraphs.length && !bullets.length) continue;

    sections.push({
      title,
      paragraphs,
      bullets,
      image: extractSectionImage(match[2], title),
      cta: extractCta(match[2]),
    });
  }

  return sections;
}

function getQuickNav(currentSlug) {
  return NAV_LINKS.filter((item) => item.slug !== currentSlug)
    .slice(0, 3)
    .map((item) => ({ title: item.title, link: `/industries/${item.slug}` }));
}

function extractContentImages(html) {
  return [...html.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi)]
    .map((match) => remapImageUrl(match[1]))
    .filter((src) => !isPartnerImage(src) && !/Googleeeee/i.test(src));
}

function assignSectionImages(sections, images) {
  let imageIndex = 0;

  for (const section of sections) {
    if (section.image) {
      imageIndex += 1;
      continue;
    }

    if (images[imageIndex]) {
      section.image = { src: images[imageIndex], alt: section.title };
      imageIndex += 1;
    }
  }
}

function buildPageConfig(slug, json) {
  const rawContent = json.content || '';
  const title = stripTags(json.title || slug);
  const subtitle = extractSubtitle(rawContent) || `Specialist accounting support for ${title.toLowerCase()}.`;
  const contentImages = extractContentImages(rawContent);
  const heroImage = contentImages[0] || '';
  const sections = parseSections(rawContent);
  assignSectionImages(sections, contentImages);
  const faqs = extractFaqs(rawContent);

  return {
    slug,
    title,
    subtitle,
    heroImage,
    path: `/industries/${slug}`,
    quickNav: getQuickNav(slug),
    sections,
    faqs,
  };
}

fs.mkdirSync(CONFIG_DIR, { recursive: true });

const slugs = fs
  .readdirSync(JSON_DIR)
  .filter((file) => file.endsWith('.json'))
  .map((file) => file.replace(/\.json$/, ''))
  .sort();

const indexExports = [];

for (const slug of slugs) {
  const json = JSON.parse(fs.readFileSync(path.join(JSON_DIR, `${slug}.json`), 'utf8'));
  const config = buildPageConfig(slug, json);

  fs.writeFileSync(
    path.join(CONFIG_DIR, `${slug}.js`),
    `const page = ${JSON.stringify(config, null, 2)};\n\nexport default page;\n`,
    'utf8',
  );

  indexExports.push(slug);
  console.log(
    `✓ ${slug}: hero=${config.heroImage ? 'yes' : 'gradient'}, sections=${config.sections.length}, faqs=${config.faqs.length}`,
  );
}

const indexContent = `${indexExports
  .map((slug) => `import ${slug.replace(/-/g, '_')} from './${slug}.js';`)
  .join('\n')}

export const industryPages = {
${indexExports.map((slug) => `  '${slug}': ${slug.replace(/-/g, '_')},`).join('\n')}
};

export const industrySlugs = ${JSON.stringify(indexExports, null, 2)};
`;

fs.writeFileSync(path.join(CONFIG_DIR, 'index.js'), indexContent, 'utf8');
console.log(`Done. Generated ${slugs.length} industry page configs.`);
