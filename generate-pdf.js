const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///c:/Users/austi/OneDrive/Documents/GitHub/Portfolio-Resume/resume.html');
  await page.pdf({ path: 'resume.pdf', format: 'A4' });
  await browser.close();
})();