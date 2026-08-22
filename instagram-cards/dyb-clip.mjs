import { chromium } from 'playwright';
const url = process.argv[2];
const out = process.argv[3];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
await page.waitForTimeout(3000);
// dismiss cookie banner if present
for (const t of ['Akzeptieren','Ablehnen','Accept']) {
  const b = page.locator(`button:has-text("${t}")`).first();
  if (await b.isVisible().catch(()=>false)) { await b.click().catch(()=>{}); break; }
}
await page.waitForTimeout(1000);
const grid = page.locator('.ecom-collection__product--wrapper-items').first();
await grid.scrollIntoViewIfNeeded().catch(()=>{});
await page.waitForTimeout(2000);
await page.screenshot({ path: out });
await browser.close();
console.log('saved', out);
