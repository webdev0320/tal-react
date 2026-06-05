const fs = require('fs');
const content = fs.readFileSync('d:/projects/tal-react/test/public/wp-data/taxation/capital-gains-tax-accountants-harrow.json', 'utf8');
const data = JSON.parse(content);
const match = data.content.match(/<h[1-6][^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([\s\S]*?)<\/h[1-6]>/i);
if (match) {
  console.log('Title found:', match[1].trim());
} else {
  console.log('Not found in raw either');
}
