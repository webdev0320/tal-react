const fs = require('fs');
const path = require('path');

const stripTags = (html) =>
  html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();

// Updated logic: ONLY use linked h1 pattern
const extractHeading = (html) => {
  const linkedH1 = html.match(/<h1[^>]*>\s*<a[^>]*>([\s\S]*?)<\/a>\s*<\/h1>/i);
  if (linkedH1) return stripTags(linkedH1[1]);
  return null;
};

// Test specific pages
const testPages = [
  ['public/wp-data/taxation/capital-gains-tax-accountants-harrow.json', 'capital-gains (has linked h1)'],
  ['public/wp-data/amazon-seller.json', 'amazon-seller (no linked h1 → fallback to data.title)'],
];

testPages.forEach(([filePath, note]) => {
  const full = path.resolve(__dirname, filePath);
  if (!fs.existsSync(full)) { console.log(`\n[MISSING] ${filePath}`); return; }
  const data = JSON.parse(fs.readFileSync(full, 'utf8'));
  const heading = extractHeading(data.content) || data.title || 'Our Services';
  console.log(`\n[${note}]`);
  console.log(`  data.title  : ${data.title}`);
  console.log(`  Hero heading: ${heading}`);
  console.log(`  Source      : ${extractHeading(data.content) ? 'linked-H1' : 'data.title fallback'}`);
});

// Full scan summary
const wpDataDir = path.resolve(__dirname, 'public/wp-data');
let withLinkedH1 = 0, withFallback = 0;

function scan(dir) {
  fs.readdirSync(dir).forEach(name => {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) return scan(full);
    if (!name.endsWith('.json')) return;
    const data = JSON.parse(fs.readFileSync(full, 'utf8'));
    if (extractHeading(data.content)) withLinkedH1++;
    else withFallback++;
  });
}

scan(wpDataDir);
console.log(`\n--- FULL SCAN SUMMARY ---`);
console.log(`Pages using linked H1 as heading : ${withLinkedH1}`);
console.log(`Pages using data.title (fallback): ${withFallback}`);
console.log(`Total                             : ${withLinkedH1 + withFallback}`);
