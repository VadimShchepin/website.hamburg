#!/usr/bin/env node
/**
 * Wrap the two analysis paragraphs of each Branchenseite into a subpage-split
 * so the third photo sits beside real copy instead of floating as decoration.
 */
import { readFile, writeFile } from 'node:fs/promises';

const SPLITS = [
    {
        file: 'app/leistungen/webdesign-steuerberater/page.jsx',
        heading: 'Der Markt: viele Kanzleien, wenig Nachwuchs',
        newHeading: 'Wie steht der Markt für Steuerberater in Hamburg?',
        img: '/leistungen/branchen/steuerberater/mandat.webp',
        alt: 'Steuerberater notiert am Schreibtisch Zahlen, daneben Unterlagen, Taschenrechner und Laptop',
        caption: 'Qualität der Anfragen schlägt Menge. Wer klar sagt, für wen er arbeitet, bekommt passendere Mandate.',
        reverse: false,
    },
    {
        file: 'app/leistungen/webdesign-gastronomie/page.jsx',
        heading: 'Wie wählen Gäste heute ein Restaurant aus?',
        img: '/leistungen/branchen/gastronomie/speisekarte.webp',
        alt: 'Zwei Gaeste sitzen in einer Restaurantnische und sehen sich die Speisekarte an',
        caption: '53 Prozent der Gäste sehen sich die Speisekarte online an, bevor sie sich für ein Lokal entscheiden.',
        reverse: true,
    },
    {
        file: 'app/leistungen/webdesign-hotels/page.jsx',
        heading: 'Wie buchen Gäste in Deutschland tatsächlich?',
        img: '/leistungen/branchen/hotels/buchung.webp',
        alt: 'Gast sitzt am Schreibtisch eines Hotelzimmers am Laptop und bucht online',
        caption: 'Der Direktkanal ist der größte Buchungsweg und trotzdem oft der schlechtest ausgestattete.',
        reverse: false,
    },
    {
        file: 'app/leistungen/webdesign-immobilienmakler/page.jsx',
        heading: 'Wo suchen Eigentümer und Käufer wirklich?',
        img: '/leistungen/branchen/makler/objekt.webp',
        alt: 'Immobilienmaklerin bespricht mit einem Paar Unterlagen in einer leeren, hellen Wohnung',
        caption: 'Portale bringen Nachfrage. Die eigene Website bringt den Auftrag vom Eigentümer.',
        reverse: true,
    },
];

let problems = 0;

for (const s of SPLITS) {
    let src = await readFile(s.file, 'utf8');
    const esc = s.heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(
        `(<h2 className="animate-up">${esc}</h2>\\n)` +
        `\\s*<p className="animate-up">\\n([\\s\\S]*?)\\n\\s*</p>\\n` +
        `\\s*<p className="animate-up">\\n([\\s\\S]*?)\\n\\s*</p>\\n`
    );
    const m = src.match(re);
    if (!m) {
        console.error(`MISS ${s.file}: ${s.heading}`);
        problems++;
        continue;
    }
    const p1 = m[2].trim();
    const p2 = m[3].trim();
    const cls = `subpage-split${s.reverse ? ' is-reverse' : ''} animate-up`;
    const headingOut = s.newHeading
        ? `<h2 className="animate-up">${s.newHeading}</h2>\n`
        : m[1];
    const block =
`${headingOut}                    <div className="${cls}">
                        <div className="sp-split-media">
                            <img src="${s.img}" alt="${s.alt}" width="1200" height="900" loading="lazy" decoding="async" />
                            <p className="sp-split-caption">${s.caption}</p>
                        </div>
                        <div className="sp-split-body">
                            <p>
                                ${p1}
                            </p>
                            <p>
                                ${p2}
                            </p>
                        </div>
                    </div>
`;
    src = src.replace(re, block);
    await writeFile(s.file, src);
    console.log(`split added ${s.file}`);
}

console.log(problems ? `\n${problems} split(s) missed` : '\nall splits added');
