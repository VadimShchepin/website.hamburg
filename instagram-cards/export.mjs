#!/usr/bin/env node
/**
 * Export Instagram cards from cards*.html as PNG at native Instagram sizes.
 *
 * Usage:
 *   node export.mjs                    # exports all cards*.html in this dir
 *   node export.mjs cards.html         # single file
 *   node export.mjs --format=jpg       # jpg instead of png
 *
 * Output: ./out/<source-name>/<index>-<class>.png
 *
 * Install once: npm i -D playwright && npx playwright install chromium
 */

import { chromium } from 'playwright';
import { readdirSync, mkdirSync, existsSync, rmSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, basename, extname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Native Instagram dimensions
const SIZES = {
  story:    { width: 1080, height: 1920 },  // 9:16 — Stories & Highlight covers
  carousel: { width: 1080, height: 1350 },  // 4:5 — Feed carousel
  thumb:    { width: 1080, height: 1080 },  // 1:1 — Highlight thumbnails
};

// Parse CLI args
const args = process.argv.slice(2);
const format = (args.find(a => a.startsWith('--format=')) || '--format=png').split('=')[1];
const files = args.filter(a => !a.startsWith('--'));

const htmlFiles = files.length
  ? files.map(f => resolve(__dirname, f))
  : readdirSync(__dirname)
      .filter(f => /^cards.*\.html$/.test(f))
      .map(f => join(__dirname, f));

if (!htmlFiles.length) {
  console.error('No cards*.html files found.');
  process.exit(1);
}

const outRoot = join(__dirname, 'out');
mkdirSync(outRoot, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 1 });
const page = await ctx.newPage();

for (const htmlPath of htmlFiles) {
  const name = basename(htmlPath, extname(htmlPath));
  const dir = join(outRoot, name);
  if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });

  console.log(`\n→ ${basename(htmlPath)}`);

  // Set viewport big enough for the biggest single card + margin
  await page.setViewportSize({ width: 1200, height: 2100 });
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });

  // Inject override: force real Instagram sizes on every card
  await page.addStyleTag({ content: `
    .story, .carousel, .thumb {
      box-shadow: none !important;
      margin: 0 !important;
    }
    .story  { width: ${SIZES.story.width}px    !important; height: ${SIZES.story.height}px    !important; }
    .carousel { width: ${SIZES.carousel.width}px !important; height: ${SIZES.carousel.height}px !important; }
    .thumb  { width: ${SIZES.thumb.width}px    !important; height: ${SIZES.thumb.height}px    !important; }
    /* Hide everything but the cards so fonts still load but layout is clean */
    body { background: #fff !important; }
  `});

  // Wait for fonts
  await page.evaluate(() => document.fonts.ready);

  // Find all cards in document order
  const handles = await page.$$('.story, .carousel, .thumb');
  console.log(`  ${handles.length} cards`);

  let i = 1;
  for (const el of handles) {
    const cls = await el.evaluate(n => {
      // Prefer semantic label: "cover", "dark", "green" etc.
      const classes = [...n.classList];
      const base = classes.includes('story') ? 'story'
                 : classes.includes('thumb') ? 'thumb'
                 : 'carousel';
      const variant = classes.filter(c => !['story','carousel','thumb','frame','cover','cta-big'].includes(c)).join('-');
      const isCover = classes.includes('cover') ? '-cover' : '';
      return `${base}${isCover}${variant ? '-' + variant : ''}`;
    });

    const idx = String(i).padStart(2, '0');
    const file = join(dir, `${idx}-${cls}.${format}`);

    // scrollIntoView so element is in viewport before screenshot
    await el.scrollIntoViewIfNeeded();
    await el.screenshot({
      path: file,
      type: format === 'jpg' ? 'jpeg' : 'png',
      ...(format === 'jpg' ? { quality: 92 } : {}),
      omitBackground: false,
    });

    process.stdout.write(`  ${idx} ${cls}\r`);
    i++;
  }
  console.log(`  ✓ saved to ${dir}`);
}

await browser.close();
console.log('\nDone.');
