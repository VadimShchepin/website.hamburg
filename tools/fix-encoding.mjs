#!/usr/bin/env node
/** Repair the handful of lines a perl -CSD pass double-encoded. */
import { readFile, writeFile } from 'node:fs/promises';

const FIXES = [
    ['app/leistungen/webdesign-gastronomie/page.jsx', 'GÃ¤ste', 'Gäste'],
    ['app/leistungen/webdesign-gastronomie/page.jsx', 'GetrÃ¤nke', 'Getränke'],
    ['app/leistungen/webdesign-immobilienmakler/page.jsx', 'KÃ¼che', 'Küche'],
    ['app/leistungen/webdesign-steuerberater/page.jsx', 'ArbeitsplÃ¤tze', 'Arbeitsplätze'],
    ['app/wissen/webdesign-agentur-oder-freelancer/page.jsx', 'groÃen Fenster', 'großen Fenster'],
];

for (const [file, from, to] of FIXES) {
    const src = await readFile(file, 'utf8');
    if (!src.includes(from)) {
        console.error(`no change: ${file} (${JSON.stringify(from)})`);
        continue;
    }
    await writeFile(file, src.split(from).join(to));
    console.log(`fixed ${file}: ${to}`);
}
