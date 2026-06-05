const Tesseract = require('tesseract.js');
const path = require('path');
const fs = require('fs');

const images = [
  { file: 'taxation-company-tax-return.png', out: 'ocr_company_tax_return.txt' },
  { file: 'taxation-vat-accountants.png', out: 'ocr_vat_accountants.txt' },
  { file: 'taxation-inheritance-tax.png', out: 'ocr_inheritance_tax.txt' },
  { file: 'taxation-tax-investigation.png', out: 'ocr_tax_investigation.txt' },
  { file: 'taxation-capital-gains-tax.png', out: 'ocr_capital_gains_tax.txt' },
  { file: 'taxation-estate-tax-planning.png', out: 'ocr_estate_tax_planning.txt' },
  { file: 'taxation-tax-advisors.png', out: 'ocr_tax_advisors.txt' },
  { file: 'taxation-emi-schemes.png', out: 'ocr_emi_schemes.txt' },
  { file: 'taxation-seis-tax-relief.png', out: 'ocr_seis_tax_relief.txt' },
  { file: 'taxation-non-uk-resident.png', out: 'ocr_non_uk_resident.txt' },
];

async function runAll() {
  for (const { file, out } of images) {
    const imgPath = path.join(__dirname, 'src', 'assets', file);
    const outPath = path.join(__dirname, out);
    if (fs.existsSync(outPath)) { console.log(`Skip: ${out}`); continue; }
    console.log(`OCR: ${file}...`);
    try {
      const { data: { text } } = await Tesseract.recognize(imgPath, 'eng');
      fs.writeFileSync(outPath, text);
      console.log(`Done: ${out}`);
    } catch(e) { console.error(`Error ${file}:`, e.message); }
  }
  console.log('ALL DONE');
}
runAll();
