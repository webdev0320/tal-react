const Tesseract = require('tesseract.js');
const path = require('path');
const fs = require('fs');

const images = [
  'taxation-cryptocurrency.png',
  'taxation-film-tax-relief.png',
  'taxation-let-property-campaign.png',
  'taxation-personal-income-tax-professionals-and-chartered-accountants.png',
  'taxation-worldwide-disclosure-facility.png'
];

async function runOCR() {
  for (const imgName of images) {
    const imagePath = path.join(__dirname, 'src', 'assets', imgName);
    const outputName = imgName.replace('.png', '_ocr.txt');
    const outputPath = path.join(__dirname, outputName);

    if (fs.existsSync(outputPath)) {
      console.log(`${outputPath} already exists, skipping.`);
      continue;
    }

    console.log(`Running OCR on ${imgName}...`);
    try {
      const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
      fs.writeFileSync(outputPath, text);
      console.log(`Successfully wrote OCR results to ${outputName}`);
    } catch (err) {
      console.error(`Error processing ${imgName}:`, err);
    }
  }
  console.log('All OCR processing complete!');
}

runOCR();
