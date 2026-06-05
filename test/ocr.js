const Tesseract = require('tesseract.js');
const path = require('path');
const fs = require('fs');

const imagePath = path.join(__dirname, 'src', 'assets', 'packages-contractor-ltd-pricing.png');

Tesseract.recognize(
  imagePath,
  'eng'
).then(({ data: { text } }) => {
  fs.writeFileSync('ocr_output_contractor.txt', text);
  console.log("DONE");
}).catch(err => {
  console.error("Error:", err);
});
