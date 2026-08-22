import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1500 } });
await page.goto('https://dybeauty.de/collections/usolab?preview_theme_id=183473176912', { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
await page.waitForTimeout(3000);
for (const t of ['Akzeptieren','Ablehnen','Accept']) {
  const b = page.locator(`button:has-text("${t}")`).first();
  if (await b.isVisible().catch(()=>false)) { await b.click().catch(()=>{}); break; }
}
await page.waitForTimeout(1500);
await page.screenshot({ path: '/tmp/dyb-redesign/v2-grid.png' });
// hover the first purchasable card
const card = page.locator('.ecom-collection__product-item:has(.ecom-collection__product-submit)').first();
await card.hover().catch(()=>{});
await page.waitForTimeout(800);
await card.screenshot({ path: '/tmp/dyb-redesign/v2-hover.png' }).catch(()=>{});
await browser.close();
console.log('done');
