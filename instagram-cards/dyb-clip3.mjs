import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1500 } });
await page.goto('https://dybeauty.de/collections/usolab?preview_theme_id=183473176912', { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
await page.waitForTimeout(3000);
for (const t of ['Akzeptieren','Ablehnen','Accept']) {
  const b = page.locator(`button:has-text("${t}")`).first();
  if (await b.isVisible().catch(()=>false)) { await b.click().catch(()=>{}); break; }
}
await page.waitForTimeout(1000);
const card = page.locator('.ecom-collection__product-item:has(.ecom-collection__product-submit)').first();
// resting state
await card.screenshot({ path: '/tmp/dyb-redesign/v3-rest.png' });
// card hover state (bordered red)
await card.hover();
await page.waitForTimeout(600);
await card.screenshot({ path: '/tmp/dyb-redesign/v3-cardhover.png' });
// direct button hover (filled red)
await card.locator('.ecom-collection__product-submit').hover();
await page.waitForTimeout(600);
await card.screenshot({ path: '/tmp/dyb-redesign/v3-btnhover.png' });
await browser.close();
console.log('done');
