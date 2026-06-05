const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport to a desktop size
  await page.setViewport({ width: 1200, height: 800 });
  
  // Go to the amazon seller page
  await page.goto('http://localhost:5175/amazon-seller', { waitUntil: 'networkidle2' });
  
  // Evaluate the layout of the form columns
  const layoutInfo = await page.evaluate(() => {
    const cols = Array.from(document.querySelectorAll('#contact-form .col-6'));
    if (cols.length < 2) return { error: 'Could not find two .col-6 elements' };
    
    const rect1 = cols[0].getBoundingClientRect();
    const rect2 = cols[1].getBoundingClientRect();
    
    return {
      col1: { y: rect1.y, width: rect1.width },
      col2: { y: rect2.y, width: rect2.width },
      isSameRow: Math.abs(rect1.y - rect2.y) < 10 // Same Y coordinate means they are side by side
    };
  });
  
  console.log(JSON.stringify(layoutInfo, null, 2));
  await browser.close();
})();
