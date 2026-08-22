#!/usr/bin/env node
/**
 * Build a numbered contact sheet from remote image URLs so candidates can be
 * judged visually in one pass instead of one request per image.
 *
 * Usage: node tools/contact-sheet.mjs <out.jpg> <id:url> [<id:url> ...]
 * Each argument is "<label>:<url>" (label shown in the corner of the tile).
 */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const [out, ...pairs] = process.argv.slice(2);
if (!out || pairs.length === 0) {
    console.error('usage: node tools/contact-sheet.mjs <out.jpg> <label:url> ...');
    process.exit(1);
}

const TILE_W = 400;
const TILE_H = 300;
const COLS = 4;

const items = pairs.map((p) => {
    const i = p.indexOf(':');
    return { label: p.slice(0, i), url: p.slice(i + 1) };
});

const tiles = await Promise.all(items.map(async (item, idx) => {
    let buf;
    try {
        const res = await fetch(item.url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        buf = Buffer.from(await res.arrayBuffer());
    } catch (err) {
        console.error(`skip ${item.label}: ${err.message}`);
        return null;
    }
    const base = await sharp(buf).resize(TILE_W, TILE_H, { fit: 'cover' }).toBuffer();
    const badge = Buffer.from(
        `<svg width="${TILE_W}" height="${TILE_H}">
            <rect x="0" y="0" width="118" height="34" fill="#e2001a"/>
            <text x="8" y="25" font-family="sans-serif" font-size="22" font-weight="bold" fill="#ffffff">#${idx + 1} ${item.label.slice(0, 3)}</text>
        </svg>`
    );
    return { idx, label: item.label, buf: await sharp(base).composite([{ input: badge, top: 0, left: 0 }]).toBuffer() };
}));

const good = tiles.filter(Boolean);
const rows = Math.ceil(good.length / COLS);
const sheet = sharp({
    create: {
        width: COLS * TILE_W,
        height: rows * TILE_H,
        channels: 3,
        background: '#111111',
    },
});

const composite = good.map((t, i) => ({
    input: t.buf,
    left: (i % COLS) * TILE_W,
    top: Math.floor(i / COLS) * TILE_H,
}));

await writeFile(out, await sheet.composite(composite).jpeg({ quality: 82 }).toBuffer());
console.log(`${out}: ${good.length} tiles`);
good.forEach((t, i) => console.log(`#${i + 1} -> ${t.label}`));
