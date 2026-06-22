const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await page.goto('http://localhost:3000/services/staff-augmentation', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const cards = page.locator('div.relative.min-h-\\[300px\\]');

  await page.evaluate(() => {
    document.querySelectorAll('path').forEach((p) => {
      const fill = p.getAttribute('fill');
      if (fill === '#d6d6e3') p.setAttribute('fill', '#6f4e37');
    });
  });
  await cards.nth(1).screenshot({ path: 'C:/Users/Iftek/AppData/Local/Temp/segment-test1.png' });

  await browser.close();
})();
