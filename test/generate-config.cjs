const fs = require('fs');

const targetSlugs = [
  'it-professionals', 'real-estate', 'ecommerce', 'construction', 
  'automobile', 'restaurants', 'wholesellers-retailers', 'healthcare-professionals',
  'leisure-industry', 'non-uk-resident-taxation', 'logistics', 'expatriates', 'charities'
];

let configStr = 'export const industriesConfig = {\n';

targetSlugs.forEach(slug => {
  let data;
  try {
    data = JSON.parse(fs.readFileSync('public/wp-data/industries/' + slug + '.json', 'utf8'));
  } catch (e) {
    return;
  }
  
  const content = data.content || '';
  
  const titleMatch = content.match(/<h1[^>]*style="color:#1d3c45[^>]*>([\s\S]*?)<\/h1>/i);
  let pageTitle = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : data.title;
  
  const subMatch = content.match(/<h1[^>]*style="color:#d2601a[^>]*>([\s\S]*?)<\/h1>/i);
  let pageSub = subMatch ? subMatch[1].replace(/<[^>]+>/g, '').trim() : 'Expert Services';
  
  let pureText = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  
  let sec1Title = 'How we can help';
  let helpMatch = pureText.match(/How do we help \?([\s\S]*?)(Why Choose|Our Clients|FAQs|$)/i);
  let helpText = helpMatch ? helpMatch[1].trim() : pureText.substring(0, 800);
  
  let p1 = helpText.substring(0, 400);
  let p2 = helpText.substring(400, 800);
  
  if (!pageSub) pageSub = 'Expert Services';
  
  configStr += `  '${slug}': {\n`;
  configStr += `    title: \`${pageTitle.replace(/`/g, '')}\`,\n`;
  configStr += `    subtitle: \`${pageSub.replace(/`/g, '')}\`,\n`;
  configStr += `    breadcrumbs: ['Industries', \`${pageTitle.replace(/`/g, '')}\`],\n`;
  configStr += `    sec1: {\n`;
  configStr += `      title: \`${sec1Title}\`,\n`;
  configStr += `      para1: \`${p1.replace(/`/g, '').trim()}${p1.length >= 400 ? '...' : ''}\`,\n`;
  configStr += `      para2: \`${p2.replace(/`/g, '').trim()}${p2.length >= 400 ? '...' : ''}\`,\n`;
  configStr += `      img: '/wp-content/uploads/2025/08/TAL-aboust-us.webp',\n`;
  configStr += `      btnText: 'Contact Us',\n`;
  configStr += `      btnLink: '#contact-form'\n`;
  configStr += `    },\n`;
  configStr += `    sec2: {\n`;
  configStr += `      title: 'Our Expertise',\n`;
  configStr += `      para: 'We provide specialized accounting solutions tailored to your industry to help you maximize your business potential while remaining fully compliant with HMRC regulations.',\n`;
  configStr += `      img: '/images/2024/06/Softwares-1-1-2-e1755614597248.webp',\n`;
  configStr += `      btnText: 'Find Out More',\n`;
  configStr += `      btnLink: '#contact-form'\n`;
  configStr += `    },\n`;
  configStr += `    faqs: []\n`;
  configStr += `  },\n`;
});

configStr += '};\n';
fs.writeFileSync('src/data/industriesConfig.js', configStr);
console.log('Successfully generated industriesConfig.js');
