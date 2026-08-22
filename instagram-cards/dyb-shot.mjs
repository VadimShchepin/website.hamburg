import { chromium } from 'playwright';
const url = process.argv[2];
const out = process.argv[3];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
await page.waitForTimeout(3000);
// scroll a bit to trigger lazy images, then back
await page.evaluate(() => window.scrollTo(0, 1200));
await page.waitForTimeout(1500);
await page.evaluate(() => window.scrollTo(0, 2400));
await page.waitForTimeout(1500);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1000);
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log('saved', out);
