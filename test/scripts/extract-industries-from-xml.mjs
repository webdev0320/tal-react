/**
 * Extracts industry pages from public/pages.xml into public/wp-data/industries/*.json
 * Run: node scripts/extract-industries-from-xml.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseStringPromise } from 'xml2js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const xmlPath = path.join(ROOT, 'public', 'pages.xml');
const outDir = path.join(ROOT, 'public', 'wp-data', 'industries');

function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const xml = fs.readFileSync(xmlPath, 'utf8');
const parsed = await parseStringPromise(xml);
const items = parsed.rss.channel[0].item || [];

fs.mkdirSync(outDir, { recursive: true });

let count = 0;

for (const item of items) {
  const postType = item['wp:post_type']?.[0];
  const status = item['wp:status']?.[0];
  const link = item.link?.[0] || '';

  if (postType !== 'page' || status !== 'publish') continue;
  if (!link.includes('/industries/')) continue;

  const slugMatch = link.match(/\/industries\/([^/]+)\/?$/);
  if (!slugMatch) continue;

  const slug = slugMatch[1];
  const title = stripTags(item.title?.[0] || slug);
  const content = item['content:encoded']?.[0] || '';
  const date = item.pubDate?.[0] || '';

  fs.writeFileSync(
    path.join(outDir, `${slug}.json`),
    JSON.stringify({ title, content, date }, null, 2),
    'utf8',
  );

  count += 1;
  console.log(`✓ industries/${slug}.json (${content.length} chars)`);
}

console.log(`Done. Extracted ${count} industry pages.`);
