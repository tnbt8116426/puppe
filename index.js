const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 0});
  const page = await browser.newPage();
  // await page.setViewport({width: 1400, height: 2700})
  await page.goto('http://books.toscrape.com/');
  await page.screenshot({path: 'bookstore.png'});

  await browser.close();
})();
