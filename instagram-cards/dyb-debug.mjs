import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
await page.goto('https://dybeauty.de/collections/usolab?preview_theme_id=183473176912', { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
await page.waitForTimeout(3000);
const info = await page.evaluate(() => {
  const link = document.querySelector('link[href*="dyb-product-cards"]');
  const btn = document.querySelector('.ecom-collection__product-submit');
  const item = document.querySelector('.ecom-collection__product-item');
  const builder = btn ? !!btn.closest('.ecom-builder') : null;
  let sheetRules = null, sheetErr = null;
  try {
    const sheet = [...document.styleSheets].find(s => s.href && s.href.includes('dyb-product-cards'));
    sheetRules = sheet ? sheet.cssRules.length : 'sheet-not-found';
  } catch(e) { sheetErr = e.message; }
  return {
    linkHref: link ? link.href : 'NO LINK',
    sheetRules, sheetErr,
    builderAncestor: builder,
    btnBg: btn ? getComputedStyle(btn).backgroundColor : 'no btn',
    btnRadius: btn ? getComputedStyle(btn).borderRadius : '-',
    itemBorder: item ? getComputedStyle(item).borderWidth : 'no item',
    itemRadius: item ? getComputedStyle(item).borderRadius : '-',
    itemClasses: item ? item.className : '-',
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
