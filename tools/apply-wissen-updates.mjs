#!/usr/bin/env node
/**
 * Refresh the five Wissen articles: photo hero + figure, front-loaded titles,
 * schema image, question-form H2s and a grounded FAQ block with FAQPage schema.
 * Every answer below is taken from facts already sourced in the article body.
 */
import { readFile, writeFile } from 'node:fs/promises';

const PAGES = [
    {
        file: 'app/wissen/seo-kosten-hamburg/page.jsx',
        hero: '/wissen/fotos/seo-kosten-hamburg.webp',
        heroAlt: 'Blick durch einen Kanal der Hamburger Speicherstadt mit Backsteinspeichern auf beiden Seiten',
        figure: '/wissen/fotos/seo-kosten-budget.webp',
        figureAlt: 'Laptop auf einem Schreibtisch zeigt ein Dashboard mit Balken- und Liniendiagrammen, daneben eine Tasse Kaffee',
        faqTitle: 'Häufige Fragen zu SEO-Kosten in Hamburg',
        faq: [
            ['Was kostet SEO in Hamburg pro Monat?', 'Für lokale Unternehmen liegen die Monatsbudgets bei 800 bis 2.500 Euro bei Freelancern und kleinen Anbietern und bei 2.000 bis 5.000 Euro bei Agenturen, jeweils netto und mit einer Laufzeit von mindestens drei bis sechs Monaten. Bei mir beginnt laufende SEO-Betreuung bei 1.000 Euro pro Monat mit drei Monaten Mindestlaufzeit und danach monatlicher Kündbarkeit.'],
            ['Wie lange dauert es, bis SEO wirkt?', 'Google Search Central nennt für die meisten Fälle vier Monate bis zu einem Jahr, bis Verbesserungen umgesetzt sind und Wirkung zeigen. Eine Ahrefs-Auswertung zeigt, dass nur etwa 1,74 Prozent neu veröffentlichter Seiten innerhalb von zwölf Monaten die Top 10 erreichen, und dass die erfolgreichen Seiten dafür im Schnitt zwei bis sechs Monate brauchen.'],
            ['Was bekomme ich für 1.000 Euro im Monat konkret?', 'Ein Monatsbudget ist Arbeitszeit. Bei einem Stundensatz von 100 Euro sind 1.000 Euro etwa zehn Stunden: zwei Stunden technische Prüfung und Behebung, drei bis vier Stunden Inhalte, eine Stunde lokale Signale, ein bis zwei Stunden Analyse und eine Stunde Abstimmung. Wer für 299 Euro im Monat vollumfängliche Betreuung verspricht, verkauft rechnerisch zweieinhalb Stunden.'],
            ['Woran erkenne ich unseriöse SEO-Angebote?', 'Google nennt in seiner Dokumentation ausdrücklich Warnsignale. Die wichtigsten: Ranking-Garantien, eine behauptete Sonderbeziehung zu Google, keine Angabe der enthaltenen Arbeitsstunden, Berichte statt Arbeit, Analytics- und Search-Console-Konten, die der Agentur gehören statt Ihnen, gekaufte Linkpakete und lange Vertragsbindung ohne Ausstieg.'],
            ['Wann lohnt sich SEO nicht?', 'In vier Fällen: wenn Sie Aufträge in zwei Wochen brauchen, dann ist Google Ads das richtige Werkzeug; wenn Ihre Website keine Anfragen erzeugt, dann kommt zuerst Conversion-Optimierung; wenn Sie keine Kapazität für neue Kunden haben; und wenn Ihr Angebot noch gar nicht gesucht wird, weil es dafür kein Suchvolumen gibt.'],
        ],
        edits: [
            ['<h2>Die drei üblichen Abrechnungsmodelle</h2>', '<h2>Wie rechnen SEO-Dienstleister ab?</h2>'],
            ['<h2>Wie lange es dauert, und was Google dazu sagt</h2>', '<h2>Wie lange dauert es, bis SEO wirkt?</h2>'],
            ['<h2>Woran Sie unseriöse Angebote erkennen</h2>', '<h2>Woran erkenne ich unseriöse SEO-Angebote?</h2>'],
            ['<h2>Wann SEO die falsche Investition ist</h2>', '<h2>Wann lohnt sich SEO nicht?</h2>'],
        ],
    },
    {
        file: 'app/wissen/google-business-profile-optimieren/page.jsx',
        hero: '/wissen/fotos/gbp-maps.webp',
        heroAlt: 'Hand haelt ein Smartphone, auf dem eine Karte mit einem markierten Standort zu sehen ist',
        figure: '/wissen/fotos/gbp-unterwegs.webp',
        figureAlt: 'Mann tippt unterwegs auf einer Strasse etwas in sein Smartphone ein',
        faqTitle: 'Häufige Fragen zum Google-Unternehmensprofil',
        faq: [
            ['Wie optimiere ich mein Google-Unternehmensprofil?', 'Google nennt drei Faktoren für das lokale Ranking: Relevanz, Entfernung und Bekanntheit. Praktisch heißt das: die exakteste Hauptkategorie wählen, jede Leistung einzeln anlegen, Öffnungszeiten inklusive Feiertagen pflegen, echte Fotos ergänzen, einen kurzen Beitrag pro Woche einstellen und auf jede Bewertung antworten. Das kostet 15 bis 20 Minuten pro Woche.'],
            ['Darf ich Suchbegriffe in den Namen des Profils schreiben?', 'Nein. Google verlangt, dass der Name im Profil dem echten Geschäftsnamen entspricht, also dem, der am Laden, auf dem Briefkopf und in der Gewerbeanmeldung steht. Zusätzliche Suchbegriffe sind ein Richtlinienverstoß und einer der häufigsten Gründe für eine Profilsperrung. Stadtteile und Leistungen gehören in die Website, in die Leistungsbeschreibung und in die Beiträge.'],
            ['Wie viele Google-Bewertungen brauche ich?', 'Zehn bis fünfzehn echte Bewertungen bringen einen lokalen Dienstleister in Hamburg in den meisten Branchen schon in eine gute Position, weil viele Wettbewerber bei drei stehen. Wichtiger als die Menge ist die Aktualität: Laut BrightLocal 2026 achten 74 Prozent der Verbraucher vor allem auf Bewertungen aus den letzten drei Monaten, 31 Prozent verlangen mindestens 4,5 Sterne und 89 Prozent erwarten, dass Inhaber antworten.'],
            ['Brauche ich eine Adresse, wenn ich zu meinen Kunden fahre?', 'Nein. Wenn Sie kein Ladenlokal haben, das während der Öffnungszeiten besetzt ist, verlangt Google, dass Sie die Adresse ausblenden und stattdessen ein Einzugsgebiet angeben. Postfächer, virtuelle Büros und unbesetzte Coworking-Adressen sind nicht erlaubt. Als Einzugsgebiet reicht meist Hamburg plus die angrenzenden Gebiete, in denen Sie wirklich arbeiten.'],
            ['Mein Profil wurde gesperrt, was mache ich jetzt?', 'In vier Schritten: erst die Ursache finden, in fast allen Fällen ist es der Name mit Suchbegriffen, eine Adresse ohne Kundenverkehr, mehrere Profile für dieselbe Adresse oder ein auffälliger Bewertungszuwachs. Dann den Verstoß beheben, bevor Sie Einspruch einlegen. Danach Nachweise sammeln, also Gewerbeanmeldung, Fotos von Schild und Eingang, Briefkopf und Rechnungen mit Adresse. Zuletzt Einspruch stellen und warten.'],
        ],
        edits: [
            ["title: 'Mehr Anrufe aus Google Maps | Unternehmensprofil',", "title: 'Google-Unternehmensprofil optimieren: Anleitung Hamburg',"],
            ["description: 'Der Hamburg-Leitfaden zum Google-Unternehmensprofil: offizielle Ranking-Faktoren, Bewertungsregeln, Sperrfallen und eine Routine, die 20 Minuten pro Woche dauert.',", "description: 'Google-Unternehmensprofil optimieren: offizielle Ranking-Faktoren, Bewertungsregeln, Sperrfallen und eine Routine, die 20 Minuten pro Woche dauert.',"],
            ["title: 'Mehr Anrufe aus Google Maps | Unternehmensprofil',", "title: 'Google-Unternehmensprofil optimieren: Anleitung Hamburg',"],
            ['<h2>Die drei Faktoren, die Google offiziell nennt</h2>', '<h2>Welche Ranking-Faktoren nennt Google offiziell?</h2>'],
            ['<h2>Der teure Fehler mit dem Namen</h2>', '<h2>Darf ich Suchbegriffe in den Profilnamen schreiben?</h2>'],
            ['<h2>Bewertungen: was Verbraucher 2026 erwarten</h2>', '<h2>Was erwarten Verbraucher 2026 von Bewertungen?</h2>'],
            ['<h2>Die Wochenroutine: 20 Minuten</h2>', '<h2>Wie pflege ich das Profil in 20 Minuten pro Woche?</h2>'],
        ],
    },
    {
        file: 'app/wissen/webdesign-agentur-oder-freelancer/page.jsx',
        hero: '/wissen/fotos/freelancer-hero.webp',
        heroAlt: 'Entwickler arbeitet an einem Schreibtisch vor einem grossen Fenster am Monitor',
        duo: [
            ['/wissen/fotos/freelancer-schreibtisch.webp', 'Einzelner Entwickler arbeitet in einem mit Pflanzen eingerichteten Arbeitszimmer am Monitor', 'Freelancer: ein Ansprechpartner, kurze Entscheidungswege, ein Kalender.'],
            ['/wissen/fotos/agentur-team.webp', 'Agenturteam sitzt in einem hellen Besprechungsraum vor einem Flipchart mit Notizzetteln', 'Agentur: Projektleitung, Vertretung, Struktur, und die Kosten dafür.'],
        ],
        faqTitle: 'Häufige Fragen zu Agentur, Freelancer und Baukasten',
        faq: [
            ['Agentur oder Freelancer: was ist günstiger?', 'Ein Freelancer liegt bei Projektpreisen von 2.000 bis 12.000 Euro, eine Agentur bei 8.000 bis 30.000 Euro und mehr. Der Grund ist keine Qualitätsfrage, sondern Kostenstruktur: Agenturen finanzieren Projektleitung, Qualitätssicherung und Vertrieb mit. Die Marktstudie Freelancer-Kompass nennt für den DACH-Raum einen durchschnittlichen Stundensatz von rund 104 Euro (2025) beziehungsweise 103 Euro (2026), der Median im IT-Bereich liegt bei etwa 95 Euro.'],
            ['Wann ist eine Agentur die richtige Wahl?', 'Ab etwa 15.000 Euro Budget, bei mehreren Sprachen, mehreren Standorten oder wenn Ihr Einkauf einen Rahmenvertrag mit Vertretungsregelung braucht. Ein Freelancer passt bei Projekten zwischen 2.000 und 12.000 Euro, wenn Sie schnelle Entscheidungen und einen festen Ansprechpartner wollen.'],
            ['Wie sichere ich das Ausfallrisiko bei einem Freelancer ab?', 'Mit vier Maßnahmen, die fast nichts kosten: Der Quellcode liegt in einem Repository, das Ihnen gehört, etwa bei GitHub oder GitLab. Alle Zugänge zu Hosting, DNS, CMS, Analytics und Ads liegen in Ihrem eigenen Passwortmanager. Die Domain läuft auf Ihren Namen, bei einer .de-Domain als DENIC-Inhaber. Und im Vertrag steht eine Zeile, wer im Ausfall übernimmt.'],
            ['Wem gehört die Website nach dem Projekt?', 'Das Urheberrecht an Design und Code bleibt nach deutschem Recht beim Menschen, der es geschaffen hat, Sie erwerben Nutzungsrechte. Steht im Vertrag nicht, welche, greift die Zweckübertragungsregel aus § 31 Absatz 5 UrhG: Sie bekommen im Zweifel nur die Rechte, die für den konkreten Vertragszweck nötig sind. Auch die Herausgabe des Quellcodes schuldet der Auftragnehmer nur, wenn sie vereinbart wurde oder für die vertragsgemäße Nutzung unumgänglich ist.'],
            ['Wie lange dauert ein Website-Projekt?', 'Ein Baukasten ist in einem bis vierzehn Tagen fertig, ein Freelancer-Projekt in drei bis acht Wochen, ein Agenturprojekt in zwei bis sechs Monaten. Der Unterschied liegt weniger in der Arbeitsmenge als in den Entscheidungswegen: direkt beim Freelancer, über eine Projektleitung bei der Agentur.'],
        ],
        edits: [
            ["title: 'Agentur oder Freelancer? Preise & Risiken 2026',", "title: 'Webdesign: Agentur oder Freelancer? Preise & Risiken 2026',"],
            ["title: 'Agentur oder Freelancer? Preise & Risiken 2026',", "title: 'Webdesign: Agentur oder Freelancer? Preise & Risiken 2026',"],
            ['<h2>Was die drei Wege 2026 kosten</h2>', '<h2>Was kosten Baukasten, Freelancer und Agentur 2026?</h2>'],
            ['<h2>Das Ausfallrisiko beim Solo-Anbieter, ehrlich gerechnet</h2>', '<h2>Wie sichere ich das Ausfallrisiko beim Freelancer ab?</h2>'],
            ['<h2>Wann welche Option die richtige ist</h2>', '<h2>Wann ist welche Option die richtige?</h2>'],
        ],
    },
    {
        file: 'app/wissen/website-baukasten-oder-eigene-website/page.jsx',
        hero: '/wissen/fotos/baukasten-hero.webp',
        heroAlt: 'Designer arbeitet an einem hellen Schreibtisch mit Grafiktablett und Monitor an einem Layout',
        figure: '/wissen/fotos/baukasten-eigenbau.webp',
        figureAlt: 'Blick von oben auf einen Schreibtisch, an dem jemand Code auf zwei Bildschirmen schreibt',
        faqTitle: 'Häufige Fragen zu Baukasten und eigener Website',
        faq: [
            ['Was kostet ein Website-Baukasten im Monat?', 'Bei Jahreszahlung liegen die Einstiegstarife bei etwa 11 bis 17 Euro im Monat, die für Unternehmen meist nötigen Business-Tarife bei etwa 17 bis 69 Euro. Über fünf Jahre summiert sich das je Anbieter auf rund 1.000 bis 4.100 Euro, bei Shopify für Shops auf rund 4.000 bis 17.000 Euro. Bei monatlicher Zahlung liegen die Preise durchweg höher.'],
            ['Ist eine eigene Website teurer als ein Baukasten?', 'Über fünf Jahre gerechnet nicht zwangsläufig. Eine individuelle Website kostet 2.900 Euro einmalig plus etwa 10 bis 15 Euro Betrieb im Monat, also rund 3.500 bis 3.800 Euro in fünf Jahren. Das liegt im Bereich eines mittleren Baukasten-Tarifs. Der Unterschied ist nicht der Preis, sondern was am Ende der fünf Jahre Ihnen gehört.'],
            ['Kann ich meine Baukasten-Website später umziehen?', 'Die Website selbst in der Regel nicht. Wix schreibt in seinem Hilfebereich, dass eine Wix-Website nicht anderswo gehostet werden kann; exportieren lassen sich nur Daten wie Medien, CMS-Sammlungen und Produktlisten als CSV. Squarespace erlaubt einen XML-Export, ohne Layout-Stile, eigenes CSS und interaktive Elemente. Die Domain ist dagegen unproblematisch: Der Auth-Code für den Transfer ist kostenlos.'],
            ['Sind Baukasten-Websites schlecht für SEO?', 'Nein. Google sagt zwei Dinge, die man zusammen lesen muss: Die Wahl des Systems ist kein Ranking-Faktor, bewertet wird das ausgelieferte Ergebnis. Und die Core Web Vitals sind Teil der Page-Experience-Signale. Im Core Web Vitals Technology Report des HTTP Archive liegen gehostete Baukästen im Mittelfeld bis oberen Bereich, während selbst gehostete WordPress-Installationen extrem streuen. Der Vergleich lautet also nicht Baukasten gegen individuell, sondern schlecht umgesetzt gegen gut umgesetzt.'],
            ['Wann ist ein Baukasten die richtige Wahl?', 'Wenn das Gesamtbudget klein ist, die Seite vor allem als digitale Visitenkarte dient, Sie die Pflege selbst übernehmen wollen und Sie keinen Anspruch darauf haben, über Google planbar Neukunden zu gewinnen. Eine schnelle Baukasten-Seite ist einer langsamen Eigenentwicklung in jedem Fall vorzuziehen.'],
        ],
        edits: [
            ["title: 'Wix & Jimdo: was der Baukasten wirklich kostet',", "title: 'Website-Baukasten oder eigene Website? Kostenvergleich',"],
            ["description: 'Was ein Website-Baukasten über fünf Jahre kostet, was beim Umzug verloren geht und wann er trotzdem die richtige Wahl ist. Mit Preisvergleich 2026.',", "description: 'Website-Baukasten oder eigene Website? Was Wix, Jimdo und Squarespace über fünf Jahre kosten, was beim Umzug verloren geht und wann der Baukasten reicht.',"],
            ["title: 'Wix & Jimdo: was der Baukasten wirklich kostet',", "title: 'Website-Baukasten oder eigene Website? Kostenvergleich',"],
            ['<h2>Die Monatspreise, Stand August 2026</h2>', '<h2>Was kostet ein Website-Baukasten im Monat?</h2>'],
            ['<h2>Der Umzug: was Sie wirklich mitnehmen können</h2>', '<h2>Kann ich meine Baukasten-Website später umziehen?</h2>'],
            ['<h2>Performance: kein Vorurteil, sondern messbar</h2>', '<h2>Sind Baukasten-Websites schlecht für SEO?</h2>'],
            ['<h2>Wann der Baukasten die richtige Entscheidung ist</h2>', '<h2>Wann ist ein Baukasten die richtige Wahl?</h2>'],
        ],
    },
    {
        file: 'app/wissen/website-nicht-bei-google-gefunden/page.jsx',
        hero: '/wissen/fotos/indexierung-hero.webp',
        heroAlt: 'Mann sitzt abends vor einem Monitor und sucht nach der Ursache eines Problems',
        figure: '/wissen/fotos/indexierung-pruefen.webp',
        figureAlt: 'Blick von oben auf einen Schreibtisch mit Laptop, Notizbuch und einem Bericht, jemand tippt auf der Tastatur',
        faqTitle: 'Häufige Fragen zur Indexierung bei Google',
        faq: [
            ['Warum wird meine Website nicht bei Google gefunden?', 'Bevor Sie etwas ändern, brauchen Sie eine Diagnose, und die dauert zwanzig Minuten: Markensuche nach dem exakten Firmennamen, eine Stichprobe über site:ihredomain.de, das URL-Prüftool der Search Console für eine konkrete Adresse und der Seitenindexierungsbericht. Wichtig zur Einordnung, und zwar von Google selbst: Google crawlt nicht alle Seiten des Webs und indexiert nicht alle, die gecrawlt werden. Dass nicht jede Seite im Index ist, ist normal. Kritisch wird es, wenn wichtige Seiten fehlen.'],
            ['Was bedeutet "Gefunden, zurzeit nicht indexiert"?', 'Google kennt die Adresse, hat sie aber noch nicht gecrawlt. Google nennt als typischen Grund, dass das Crawlen verschoben wurde, um die Website nicht zu überlasten. In der Praxis steckt dahinter meistens Priorisierung: Die URL ist Google nicht wichtig genug, um sie jetzt abzurufen. Das ist fast immer ein Verlinkungsproblem.'],
            ['Was bedeutet "Gecrawlt, zurzeit nicht indexiert"?', 'Der Googlebot war da, hat den Inhalt gelesen und sich entschieden, ihn nicht aufzunehmen. Das ist in der Regel kein technisches Problem, sondern ein Qualitäts- oder Redundanzsignal. Wenn dieser Status bei vielen Seiten auftritt, deutet das auf ein Muster hin: austauschbare Texte, sehr ähnliche Seiten oder dünne Inhalte, die es online schon hundertfach gibt.'],
            ['Muss ich mein Crawl-Budget optimieren?', 'Für kleine und mittelgroße Websites ist das Crawl-Budget laut Google kein Thema. Relevant wird es erst bei Websites mit mehr als einer Million Adressen, deren Inhalte sich moderat ändern, oder bei mehr als 10.000 Adressen mit sehr häufigen Änderungen, etwa Nachrichtenportalen und Marktplätzen. Wenn Ihre Website 40 Seiten hat, hat sie kein Crawl-Budget-Problem, sondern ein Verlinkungs- oder Qualitätsproblem.'],
            ['Wie bekomme ich meine Seiten schneller in den Index?', 'Der 48-Stunden-Plan: Search Console einrichten, noindex und robots.txt inklusive HTTP-Header prüfen, Canonical-Tags auf Startseite, einer Leistungsseite und einem Artikel prüfen, Sitemap mit ausschließlich kanonischen 200er-Adressen einreichen, die interne Verlinkung reparieren, sodass jede wichtige Seite mindestens zwei interne Links aus thematisch passenden Seiten hat, die wichtigsten Seiten manuell zur Indexierung anfordern, neue Adressen über die Bing Webmaster Tools und IndexNow melden, dann zwei Wochen warten und den Bericht erneut vergleichen.'],
        ],
        edits: [
            ["title: '12 Gründe, warum Google Ihre Website nicht zeigt',", "title: 'Website nicht bei Google gefunden? 12 Gründe + Lösungen',"],
            ["title: '12 Gründe, warum Google Ihre Website nicht zeigt',", "title: 'Website nicht bei Google gefunden? 12 Gründe + Lösungen',"],
            ['<h2>Zuerst: Wie stellen Sie überhaupt fest, was los ist?</h2>', '<h2>Wie stelle ich fest, ob meine Seiten indexiert sind?</h2>'],
            ['<h2>Der Crawl-Budget-Mythos</h2>', '<h2>Muss ich mein Crawl-Budget optimieren?</h2>'],
            ['<h2>Der 48-Stunden-Plan</h2>', '<h2>Wie bekomme ich meine Seiten schneller in den Index?</h2>'],
            ['<h2>Wenn alles indexiert ist und trotzdem niemand kommt</h2>', '<h2>Alles indexiert und trotzdem kein Besucher: warum?</h2>'],
        ],
    },
];

const jsx = (s) => s.replace(/"/g, '&quot;');
let problems = 0;

for (const page of PAGES) {
    let src = await readFile(page.file, 'utf8');
    const apply = (from, to, label) => {
        const hit = typeof from === 'string' ? src.includes(from) : from.test(src);
        if (!hit) {
            console.error(`MISS ${page.file}: ${label ?? String(from).slice(0, 70)}`);
            problems++;
            return;
        }
        src = src.replace(from, to);
    };

    for (const [from, to] of page.edits) apply(from, to);

    // Hero photo, framed
    apply(/heroImage="\/wissen\/hero-[a-z-]+\.svg"/, `heroImage="${page.hero}"`, 'heroImage');
    apply(/heroAlt="[^"]*"/, `heroAlt="${jsx(page.heroAlt)}"\n                heroFramed`, 'heroAlt');

    // Inline figure -> photo, or a duo for the comparison article
    if (page.duo) {
        apply(
            /<figure className="article-figure">\s*<img src="\/wissen\/[a-z-]+\.svg"[^>]*\/>\s*<figcaption>([\s\S]*?)<\/figcaption>\s*<\/figure>/,
            `<div className="subpage-duo">\n${page.duo.map(([img, alt, cap]) =>
`                    <figure>
                        <img src="${img}" alt="${jsx(alt)}" width="1000" height="750" loading="lazy" decoding="async" />
                        <figcaption>${cap}</figcaption>
                    </figure>`).join('\n')}\n                </div>`,
            'duo figure'
        );
    } else {
        apply(
            /<img src="\/wissen\/[a-z-]+\.svg"([^>]*?)\/>/,
            `<img src="${page.figure}" alt="${jsx(page.figureAlt)}" width="1600" height="900" loading="lazy" decoding="async" />`,
            'figure image'
        );
    }

    // Article schema image + og:image
    apply(
        /(\n\s*)inLanguage: 'de',/,
        `$1image: 'https://webseite.hamburg${page.hero}',$1inLanguage: 'de',`,
        'schema image'
    );
    apply(
        /(\n\s*)type: 'article',/,
        `$1type: 'article',$1images: [{ url: 'https://webseite.hamburg${page.hero}', width: 1200, height: 900 }],`,
        'og image'
    );

    // FAQ block: import, data, render
    apply(
        "import ArticleLayout from '../../../src/components/ArticleLayout';",
        "import ArticleLayout from '../../../src/components/ArticleLayout';\nimport FaqSection from '../../../src/components/FaqSection';",
        'FaqSection import'
    );
    const faqConst = `const faqItems = [\n${page.faq.map(([q, a]) =>
        `    { q: ${JSON.stringify(q)}, a: ${JSON.stringify(a)} },`).join('\n')}\n];\n\nexport default function`;
    apply(/export default function/, faqConst, 'faqItems const');
    apply(
        '            </ArticleLayout>',
        `            </ArticleLayout>\n            <FaqSection title="${jsx(page.faqTitle)}" items={faqItems} />`,
        'FaqSection render'
    );

    await writeFile(page.file, src);
    console.log(`updated ${page.file}`);
}

console.log(problems ? `\n${problems} replacement(s) missed` : '\nall replacements applied');
