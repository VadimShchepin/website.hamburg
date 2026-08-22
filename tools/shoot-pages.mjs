#!/usr/bin/env node
/**
 * Screenshot the refreshed pages so the new photo layouts can be reviewed.
 * Playwright is resolved from a sibling project (not a dependency here).
 */
import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';

const require = createRequire('/Users/vadim/projects/clean-service-nord/');
const { chromium } = require('playwright');

const BASE = 'http://localhost:3111';
const PAGES = [
    ['anwaelte', '/leistungen/webdesign-anwaelte'],
    ['gastronomie', '/leistungen/webdesign-gastronomie'],
    ['hotels', '/leistungen/webdesign-hotels'],
    ['makler', '/leistungen/webdesign-immobilienmakler'],
    ['steuerberater', '/leistungen/webdesign-steuerberater'],
    ['seo-kosten', '/wissen/seo-kosten-hamburg'],
    ['gbp', '/wissen/google-business-profile-optimieren'],
    ['agentur', '/wissen/webdesign-agentur-oder-freelancer'],
    ['baukasten', '/wissen/website-baukasten-oder-eigene-website'],
    ['indexierung', '/wissen/website-nicht-bei-google-gefunden'],
];

await mkdir('/tmp/shots', { recursive: true });
// The sibling project's Playwright expects a browser build that isn't cached;
// point it at the newest chromium in the shared cache instead.
const browser = await chromium.launch({
    executablePath: `${process.env.HOME}/Library/Caches/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-mac-arm64/chrome-headless-shell`,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

for (const [name, path] of PAGES) {
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    // Let the scroll-reveal animations settle so nothing is captured at opacity 0.
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);
    await page.screenshot({ path: `/tmp/shots/${name}-hero.png` });
    await page.screenshot({ path: `/tmp/shots/${name}-full.png`, fullPage: true });
    const broken = await page.evaluate(() =>
        [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.currentSrc || i.src)
    );
    console.log(`${name}: ${broken.length ? 'BROKEN ' + broken.join(', ') : 'all images loaded'}`);
}

await browser.close();
