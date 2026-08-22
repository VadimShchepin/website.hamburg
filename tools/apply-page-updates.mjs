#!/usr/bin/env node
/**
 * Apply the mechanical part of the Branchenseiten refresh: front-loaded titles,
 * schema image, photo heroes, inset body, band figures and question-form H2s.
 * Every replacement is asserted, so a stale anchor fails loudly instead of
 * silently skipping.
 */
import { readFile, writeFile } from 'node:fs/promises';

const PAGES = [
    {
        file: 'app/leistungen/webdesign-steuerberater/page.jsx',
        hero: 'steuerberater/kanzlei.webp',
        heroAlt: 'Steuerberater bespricht am Schreibtisch seiner Kanzlei Unterlagen, im Hintergrund die Arbeitsplaetze des Teams',
        band: 'steuerberater/schreibtisch.webp',
        bandAlt: 'Blick von oben auf einen Kanzleitisch mit Laptop, Taschenrechner und Unterlagen, zwei Personen besprechen Zahlen',
        proof: ['Festpreis ab 2.900 €', '§ 57a StBerG beachtet', 'Karriereseite inklusive'],
        edits: [
            ["title: 'Mandanten & Bewerber | Steuerberater-Website Hamburg',",
             "title: 'Steuerberater-Website Hamburg: Webdesign für Kanzleien',"],
            ["description: 'Websites für Steuerberater in Hamburg: Mandantengewinnung, Karriereseite gegen den Fachkräftemangel, § 57a StBerG beachtet. Ab 2.900 Euro.',",
             "description: 'Was kostet eine Steuerberater-Website? Ab 2.900 Euro zum Festpreis: Mandantengewinnung, Karriereseite gegen den Fachkräftemangel, § 57a StBerG beachtet.',"],
            ["title: 'Mandanten & Bewerber | Steuerberater-Website Hamburg',",
             "title: 'Steuerberater-Website Hamburg: Webdesign für Kanzleien',"],
            ["description: 'Websites für Steuerberater in Hamburg: Mandantengewinnung, Karriereseite gegen den Fachkräftemangel, berufsrechtlich sauber.',",
             "description: 'Was kostet eine Steuerberater-Website? Ab 2.900 Euro zum Festpreis, mit Karriereseite gegen den Fachkräftemangel.',"],
            ["Viele Steuerkanzleien haben kein Mandantenproblem, sondern ein Personalproblem. Beides landet auf derselben Website. Deshalb baue ich Kanzleiseiten so, dass sie zwei Zielgruppen bedienen: Unternehmer, die einen neuen Berater suchen, und Fachkräfte, die einen neuen Arbeitgeber prüfen.",
             "Eine Steuerberater-Website in Hamburg muss zwei Zielgruppen gleichzeitig bedienen: Unternehmer, die einen neuen Berater suchen, und Fachkräfte, die einen neuen Arbeitgeber prüfen. Denn viele Steuerkanzleien haben kein Mandantenproblem, sondern ein Personalproblem, und beides landet auf derselben Seite."],
            ['<h2 className="animate-up">Was kostet eine Steuerberater-Website?</h2>',
             '<h2 className="animate-up">Was kostet eine Steuerberater-Website in Hamburg?</h2>'],
            ['<h2 className="animate-up">Werberecht: was auf die Kanzleiseite darf</h2>',
             '<h2 className="animate-up">Was darf laut Werberecht auf die Kanzleiseite?</h2>'],
            ['<h2 className="animate-up">Der Ablauf</h2>',
             '<h2 className="animate-up">Wie läuft ein Kanzlei-Website-Projekt ab?</h2>'],
        ],
    },
    {
        file: 'app/leistungen/webdesign-gastronomie/page.jsx',
        hero: 'gastronomie/gastraum.webp',
        heroAlt: 'Gaeste sitzen an einem Tisch in einem warm beleuchteten Restaurant und essen zu Abend',
        band: 'gastronomie/abendgeschaeft.webp',
        bandAlt: 'Gaeste an einem Holztisch an der Bar eines Restaurants am Abend, vor ihnen Getraenke und Essen',
        proof: ['Festpreis ab 1.500 €', 'Reservierung ohne Provision', 'Mobil zuerst gebaut'],
        edits: [
            ["title: 'Volle Tische | Restaurant-Website ab 1.500 €',",
             "title: 'Restaurant-Website Hamburg: Webdesign für Gastronomie',"],
            ["description: 'Websites für Restaurants und Cafés in Hamburg: Speisekarte mobil lesbar, Reservierung ohne Provision, Google Maps gepflegt. Ab 1.500 Euro.',",
             "description: 'Was kostet eine Restaurant-Website? Ab 1.500 Euro zum Festpreis: Speisekarte mobil lesbar, Reservierung ohne Provision, Google Maps gepflegt.',"],
            ["title: 'Volle Tische | Restaurant-Website ab 1.500 €',",
             "title: 'Restaurant-Website Hamburg: Webdesign für Gastronomie',"],
            ["description: 'Websites für Restaurants und Cafés in Hamburg: Speisekarte mobil lesbar, Reservierung ohne Provision, Google Maps gepflegt.',",
             "description: 'Was kostet eine Restaurant-Website? Ab 1.500 Euro zum Festpreis, mit mobiler Speisekarte und Reservierung ohne Provision.',"],
            ["Ein Gast steht um 18:40 Uhr in der Schanze, hat Hunger und ein Handy in der Hand. Er entscheidet in etwa zwanzig Sekunden. In diesen zwanzig Sekunden muss Ihre Seite drei Dinge zeigen: was es gibt, was es kostet, ob noch ein Tisch frei ist. Alles andere ist Dekoration.",
             "Eine Restaurant-Website in Hamburg hat etwa zwanzig Sekunden. So lange braucht ein Gast, der um 18:40 Uhr in der Schanze steht, Hunger hat und ein Handy in der Hand hält. In diesen zwanzig Sekunden muss Ihre Seite drei Dinge zeigen: was es gibt, was es kostet, ob noch ein Tisch frei ist. Alles andere ist Dekoration."],
            ['<h2 className="animate-up">Was kostet eine Restaurant-Website?</h2>',
             '<h2 className="animate-up">Was kostet eine Restaurant-Website in Hamburg?</h2>'],
            ['<h2 className="animate-up">Wie Gäste heute ein Restaurant auswählen</h2>',
             '<h2 className="animate-up">Wie wählen Gäste heute ein Restaurant aus?</h2>'],
            ['<h2 className="animate-up">Was auf eine Gastro-Website gehört</h2>',
             '<h2 className="animate-up">Was gehört auf eine Gastronomie-Website?</h2>'],
            ['<h2 className="animate-up">Der Ablauf</h2>',
             '<h2 className="animate-up">Wie läuft ein Gastro-Website-Projekt ab?</h2>'],
        ],
    },
    {
        file: 'app/leistungen/webdesign-hotels/page.jsx',
        hero: 'hotels/zimmer.webp',
        heroAlt: 'Helles Hotelzimmer mit grossem Fenster, Sesseln und Blick ueber die Stadt',
        band: 'hotels/suite.webp',
        bandAlt: 'Langes Hotelzimmer mit Fensterfront, Bett und warmem Abendlicht',
        proof: ['Festpreis ab 2.900 €', 'Buchungsmaschine angebunden', 'Google-Buchungslinks'],
        edits: [
            ["title: 'Direktbuchungen statt Provision | Hotel-Website',",
             "title: 'Hotel-Website Hamburg: Direktbuchungen statt Provision',"],
            ["description: 'Hotel-Websites in Hamburg mit Direktbuchung: schnelle Buchungsstrecke, Google-Buchungslinks, weniger Portalprovision. Ab 2.900 Euro.',",
             "description: 'Was kostet eine Hotel-Website mit Direktbuchung? Ab 2.900 Euro zum Festpreis: schnelle Buchungsstrecke, Google-Buchungslinks, weniger Portalprovision.',"],
            ["title: 'Direktbuchungen statt Provision | Hotel-Website',",
             "title: 'Hotel-Website Hamburg: Direktbuchungen statt Provision',"],
            ["description: 'Hotel-Websites in Hamburg mit Direktbuchung: schnelle Buchungsstrecke, Google-Buchungslinks, weniger Portalprovision.',",
             "description: 'Was kostet eine Hotel-Website mit Direktbuchung? Ab 2.900 Euro zum Festpreis, mit angebundener Buchungsmaschine.',"],
            ["Jede Buchung über ein Portal kostet Provision. Jede Buchung über Ihre eigene Seite kostet einen Bruchteil davon. Der Unterschied entscheidet sich an einer einzigen Stelle: Wie schnell kommt ein Gast von Ihrer Startseite zu einem Preis für sein Datum.",
             "Eine Hotel-Website in Hamburg entscheidet über Ihren Deckungsbeitrag: Jede Buchung über ein Portal kostet Provision, jede Buchung über Ihre eigene Seite einen Bruchteil davon. Der Unterschied entscheidet sich an einer einzigen Stelle, nämlich daran, wie schnell ein Gast von Ihrer Startseite zu einem Preis für sein Datum kommt."],
            ['<h2 className="animate-up">Was kostet eine Hotel-Website?</h2>',
             '<h2 className="animate-up">Was kostet eine Hotel-Website in Hamburg?</h2>'],
            ['<h2 className="animate-up">Wie in Deutschland tatsächlich gebucht wird</h2>',
             '<h2 className="animate-up">Wie buchen Gäste in Deutschland tatsächlich?</h2>'],
            ['<h2 className="animate-up">Was eine Hotel-Website leisten muss</h2>',
             '<h2 className="animate-up">Was muss eine Hotel-Website leisten?</h2>'],
            ['<h2 className="animate-up">Der Ablauf</h2>',
             '<h2 className="animate-up">Wie läuft ein Hotel-Website-Projekt ab?</h2>'],
        ],
    },
    {
        file: 'app/leistungen/webdesign-immobilienmakler/page.jsx',
        hero: 'makler/besichtigung.webp',
        heroAlt: 'Immobilienmaklerin zeigt einem Paar die Kueche einer helle Wohnung bei der Besichtigung',
        band: 'makler/hamburg.webp',
        bandAlt: 'Hamburger Hafenrand mit Backsteinspeichern, Booten und den Neubauten der Hafencity',
        proof: ['Festpreis ab 2.900 €', '§ 87 GEG sauber gelöst', 'Maklersoftware angebunden'],
        edits: [
            ["title: 'Mehr Eigentümer-Anfragen | Makler-Website Hamburg',",
             "title: 'Makler-Website Hamburg: Webdesign für Immobilienmakler',"],
            ["description: 'Websites für Immobilienmakler in Hamburg: Eigentümer gewinnen statt Portale füttern, Pflichtangaben nach § 87 GEG sauber gelöst. Ab 2.900 Euro.',",
             "description: 'Was kostet eine Makler-Website? Ab 2.900 Euro zum Festpreis: Eigentümer gewinnen statt Portale füttern, Pflichtangaben nach § 87 GEG sauber gelöst.',"],
            ["title: 'Mehr Eigentümer-Anfragen | Makler-Website Hamburg',",
             "title: 'Makler-Website Hamburg: Webdesign für Immobilienmakler',"],
            ["description: 'Websites für Immobilienmakler in Hamburg: Eigentümer gewinnen statt Portale füttern, Pflichtangaben sauber gelöst.',",
             "description: 'Was kostet eine Makler-Website? Ab 2.900 Euro zum Festpreis, auf Eigentümer-Akquise statt Portalpflege gebaut.',"],
            ["Käufer finden Objekte auf den Portalen, daran ändert keine Website etwas. Die Frage, wem ein Eigentümer seine Immobilie anvertraut, entscheidet sich woanders: bei der Recherche nach dem Namen, den er auf dem Schild in der Nachbarschaft gelesen hat.",
             "Eine Makler-Website in Hamburg gewinnt keine Käufer, sondern Eigentümer. Käufer finden Objekte auf den Portalen, daran ändert keine Website etwas. Die Frage, wem ein Eigentümer seine Immobilie anvertraut, entscheidet sich woanders: bei der Recherche nach dem Namen, den er auf dem Schild in der Nachbarschaft gelesen hat."],
            ['<h2 className="animate-up">Was kostet eine Makler-Website?</h2>',
             '<h2 className="animate-up">Was kostet eine Makler-Website in Hamburg?</h2>'],
            ['<h2 className="animate-up">Wo Suchende wirklich suchen</h2>',
             '<h2 className="animate-up">Wo suchen Eigentümer und Käufer wirklich?</h2>'],
            ['<h2 className="animate-up">Was eine Makler-Website leisten muss</h2>',
             '<h2 className="animate-up">Was muss eine Makler-Website leisten?</h2>'],
            ['<h2 className="animate-up">Der Ablauf</h2>',
             '<h2 className="animate-up">Wie läuft ein Makler-Website-Projekt ab?</h2>'],
        ],
    },
];

let problems = 0;

for (const page of PAGES) {
    let src = await readFile(page.file, 'utf8');
    const apply = (from, to, label) => {
        const hit = typeof from === 'string' ? src.includes(from) : from.test(src);
        if (!hit) {
            console.error(`MISS ${page.file}: ${label ?? String(from).slice(0, 60)}`);
            problems++;
            return;
        }
        src = src.replace(from, to);
    };

    for (const [from, to] of page.edits) apply(from, to);

    // og:image
    apply(
        "        type: 'website',\n    },\n};",
        `        type: 'website',\n        images: [{ url: 'https://webseite.hamburg/leistungen/branchen/${page.hero}', width: 1200, height: 900 }],\n    },\n};`,
        'openGraph images'
    );

    // Service schema image
    apply(
        "        offers: [",
        `        image: 'https://webseite.hamburg/leistungen/branchen/${page.hero}',\n        offers: [`,
        'schema image'
    );

    // hero proof chips + photo hero
    const proofBlock = `                        <div className="hero-proof animate-up">\n${page.proof.map((p) => `                            <span>${p}</span>`).join('\n')}\n                        </div>\n                        <ServiceMeta />`;
    apply('                        <ServiceMeta />', proofBlock, 'hero proof');

    apply(
        /<div className="subpage-hero-media animate-up">\s*<img src="\/leistungen\/branchen\/hero-[a-z]+\.svg"[^>]*\/>/,
        `<div className="subpage-hero-media hero-media-framed animate-up">\n                            <img src="/leistungen/branchen/${page.hero}" alt="${page.heroAlt}" width="1200" height="900" fetchPriority="high" decoding="async" />`,
        'hero media'
    );

    apply('<div className="container subpage-body">', '<div className="container subpage-body is-inset">', 'is-inset');

    apply(
        /<figure className="subpage-figure animate-up">\s*<img src="\/leistungen\/branchen\/[a-z]+\.svg"[^>]*\/>/,
        `<figure className="subpage-figure is-band animate-up">\n                        <img src="/leistungen/branchen/${page.band}" alt="${page.bandAlt}" width="1800" height="760" loading="lazy" decoding="async" />`,
        'band figure'
    );

    await writeFile(page.file, src);
    console.log(`updated ${page.file}`);
}

console.log(problems ? `\n${problems} replacement(s) missed` : '\nall replacements applied');
