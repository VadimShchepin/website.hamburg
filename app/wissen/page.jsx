import Link from 'next/link';
import Breadcrumbs from '../../src/components/Breadcrumbs';
import { BUSINESS } from '../../src/lib/schema';

export const metadata = {
    title: 'Praxiswissen zu Webdesign, SEO & Google Ads',
    description: 'Fachartikel zu Webdesign, SEO, AI SEO und Google Ads für lokale Unternehmen. Praxiswissen, keine Theorie, geschrieben für Unternehmer in Hamburg.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen',
    },
    openGraph: {
        title: 'Praxiswissen zu Webdesign, SEO & Google Ads',
        description: 'Fachartikel zu Webdesign, SEO, AI SEO und Google Ads für lokale Unternehmen. Praxiswissen, keine Theorie.',
        url: 'https://webseite.hamburg/wissen',
        type: 'website',
    },
};

const articles = [
    {
        slug: 'barrierefreie-website-pflicht',
        image: '/wissen/cards/barrierefreie-website-pflicht.svg',
        alt: 'Illustration: Browser-Fenster mit dem Barrierefreiheits-Symbol, davor ein rotes Amtssiegel',
        category: 'RECHT',
        title: 'Barrierefreie Website: Wer muss, wer nicht, und was das BFSG wirklich verlangt',
        excerpt: 'Das BFSG gilt seit dem 28. Juni 2025. Welche Angebote erfasst sind, wo die Kleinstunternehmensausnahme greift, welche Paragrafen zählen und was bei Verstößen droht.',
        readTime: '12 Min.',
    },
    {
        slug: 'website-barrierefrei-machen',
        image: '/wissen/cards/website-barrierefrei-machen.svg',
        alt: 'Illustration: Browser-Fenster mit drei Prueffeldern und einer Lupe, ein Fokusrahmen rot',
        category: 'RECHT',
        title: 'Website barrierefrei machen: WCAG 2.2 in der Praxis',
        excerpt: 'Sechs Fehlerarten machen 96 Prozent aller Verstöße aus, fünf davon behebt man an einem Tag. Mit Aufwandstabelle, Tastaturtest und der Wahrheit über Overlay-Widgets.',
        readTime: '13 Min.',
    },
    {
        slug: 'google-ads-kosten',
        image: '/wissen/cards/google-ads-kosten.svg',
        alt: 'Illustration: Auktionshammer ueber einem Suchfeld, darunter drei Muenzstapel, der hoechste rot',
        category: 'GOOGLE ADS',
        title: 'Google Ads Kosten: 90 Tage aus einem echten Konto',
        excerpt: '2.991 Euro, 1.032 Klicks, 42 Anfragen. Echte Klickpreise, echte Kosten je Anfrage und der Beweis, dass der Klick für 1 Euro die teuerste Anfrage produziert hat.',
        readTime: '11 Min.',
    },
    {
        slug: 'wordpress-alternativen',
        image: '/wissen/cards/wordpress-alternativen.svg',
        alt: 'Illustration: Mauer aus gleichen Bausteinen neben drei unterschiedlichen Alternativbausteinen, einer rot',
        category: 'WEBDESIGN',
        title: 'WordPress-Alternativen: wann ein Wechsel sich lohnt und wann nicht',
        excerpt: 'Erst die Diagnose, dann das System. Die drei Familien von Alternativen, eine Zuordnung nach Fall und die Kostenwahrheit über den Wechsel, samt Nachteilen meiner eigenen Bauweise.',
        readTime: '12 Min.',
    },
    {
        slug: 'wordpress-sicherheit-wartung',
        image: '/wissen/cards/wordpress-sicherheit-wartung.svg',
        alt: 'Illustration: Schutzschild mit Schloss vor einem Browser-Fenster, ein Plugin-Baustein rot und rissig',
        category: 'SICHERHEIT',
        title: 'WordPress absichern und warten: was wirklich schützt',
        excerpt: '11.334 neue Schwachstellen 2025, davon 91 Prozent in Plugins und sechs im Kern. Median bis zum ersten Angriff: fünf Stunden. Was das für Ihren Update-Rhythmus bedeutet.',
        readTime: '11 Min.',
    },
    {
        slug: 'impressum-datenschutzerklaerung-pflicht',
        image: '/wissen/cards/impressum-datenschutzerklaerung-pflicht.svg',
        alt: 'Illustration: zwei gestapelte Dokumentseiten mit einem roten Stempel darueber',
        category: 'RECHT',
        title: 'Impressum und Datenschutzerklärung: welche Pflichtangaben eine Website 2026 braucht',
        excerpt: 'Die Impressumspflicht steht seit Mai 2024 in § 5 DDG, nicht mehr im TMG. Alle Pflichtangaben, Art. 13 DSGVO, § 25 TDDDG und der Browsertest, der Ihre echte Verarbeitungsliste zeigt.',
        readTime: '11 Min.',
    },
    {
        slug: 'website-abmahnung-vermeiden',
        image: '/wissen/cards/website-abmahnung-vermeiden.svg',
        alt: 'Illustration: geoeffneter Briefumschlag mit roter Innenklappe, daneben ein Browser-Fenster mit Datenabfluss',
        category: 'RECHT',
        title: 'Abmahnung wegen der Website: was 2026 wirklich riskant ist',
        excerpt: 'Das Google-Fonts-Urteil des LG München, die Rangliste der realen Risiken mit Behebungsaufwand und die vier Maßnahmen, die den größten Teil davon an einem Tag abstellen.',
        readTime: '10 Min.',
    },
    {
        slug: 'onlineshop-kosten',
        image: '/wissen/cards/onlineshop-kosten.svg',
        alt: 'Illustration: Einkaufswagen vor einem Browser-Fenster mit rotem Preisschild',
        category: 'E-COMMERCE',
        title: 'Onlineshop Kosten 2026: was wirklich zusammenkommt',
        excerpt: 'Die Plattform ist der kleinste Posten. Aktuelle Listenpreise, Transaktionsgebühren, gesetzliche Pflichten und zwei Rechenbeispiele über drei Jahre.',
        readTime: '11 Min.',
    },
    {
        slug: 'webflow-oder-wordpress',
        image: '/wissen/cards/webflow-oder-wordpress.svg',
        alt: 'Illustration: Balkenwaage mit Baukastenbloecken und einem Zahnrad, der Zeiger rot',
        category: 'WEBDESIGN',
        title: 'Webflow oder WordPress: welches System zu welchem Projekt passt',
        excerpt: 'Aktuelle Webflow-Preise, die WordPress-Gesamtrechnung über drei Jahre, das Ausstiegsrisiko und der Sonderfall TYPO3. Von jemandem, der beides nicht verkauft.',
        readTime: '10 Min.',
    },
    {
        slug: 'website-umzug-hosting-deutschland',
        image: '/wissen/cards/website-umzug-hosting-deutschland.svg',
        alt: 'Illustration: zwei Serverschraenke mit einem Pfeil dazwischen und einem roten Schild',
        category: 'TECHNIK',
        title: 'Hosting in Deutschland und Website umziehen: worauf es wirklich ankommt',
        excerpt: 'Warum der Serverstandort weniger entscheidet als der Auftragsverarbeitungsvertrag, wie der Data-Privacy-Framework-Streit aktuell steht und die Umzugsreihenfolge, die Rankings erhält.',
        readTime: '10 Min.',
    },
    {
        slug: 'website-nicht-bei-google-gefunden',
        image: '/wissen/cards/website-nicht-bei-google-gefunden.webp',
        alt: 'Illustration: gestapelte Webseiten hinter einem durchgestrichenen Auge, davor eine Lupe',
        category: 'SEO',
        title: 'Website nicht bei Google zu finden? Die 12 häufigsten Ursachen',
        excerpt: 'Im Mai 2026 waren von 34 Seiten dieser Website nur etwa 10 im Google-Index. Was die Ursache war, wie Sie es bei sich prüfen und was Google offiziell zu nicht indexierten Seiten sagt.',
        readTime: '12 Min.',
    },
    {
        slug: 'google-business-profile-optimieren',
        image: '/wissen/cards/google-business-profile-optimieren.webp',
        alt: 'Illustration: Standort-Pin auf einem Ladengeschaeft, umgeben von Sternen und einer Uhr',
        category: 'SEO',
        title: 'Google-Unternehmensprofil optimieren: der Hamburg-Leitfaden',
        excerpt: 'Die drei Ranking-Faktoren, die Google selbst nennt, die Namensregel, an der Profile gesperrt werden, und eine Pflegeroutine, die 20 Minuten pro Woche dauert.',
        readTime: '12 Min.',
    },
    {
        slug: 'seo-kosten-hamburg',
        image: '/wissen/cards/seo-kosten-hamburg.webp',
        alt: 'Illustration: Waage, die einen Muenzstapel gegen ein steigendes Liniendiagramm abwaegt',
        category: 'SEO',
        title: 'Was kostet SEO in Hamburg? Preise, Modelle und was Sie dafür bekommen',
        excerpt: 'Was in einem Monatsbudget von 1.000 Euro an Arbeitsstunden steckt, wie lange es laut Google dauert, und warum SEO manchmal die falsche Investition ist.',
        readTime: '11 Min.',
    },
    {
        slug: 'webdesign-agentur-oder-freelancer',
        image: '/wissen/cards/webdesign-agentur-oder-freelancer.webp',
        alt: 'Illustration: drei Podeste mit Buerogebaeude, Einzelarbeitsplatz und Baukastenbloecken im Vergleich',
        category: 'WEBDESIGN',
        title: 'Agentur, Freelancer oder Baukasten: Wer soll Ihre Website bauen?',
        excerpt: 'Stundensätze, Projektpreise, Ausfallrisiko und Vertragsfallen im Vergleich. Geschrieben von einem Solo-Entwickler, mitsamt der Frage, wann das die falsche Wahl ist.',
        readTime: '11 Min.',
    },
    {
        slug: 'website-baukasten-oder-eigene-website',
        image: '/wissen/cards/website-baukasten-oder-eigene-website.webp',
        alt: 'Illustration: zusammengesetzte Baukasten-Bloecke einer Website mit Preisschild und Vorhaengeschloss',
        category: 'WEBDESIGN',
        title: 'Website-Baukasten oder eigene Website: Was Wix und Jimdo wirklich kosten',
        excerpt: 'Monatspreise 2026, die Fünf-Jahres-Rechnung und was beim Umzug verloren geht. Inklusive der Fälle, in denen der Baukasten die vernünftigere Wahl ist.',
        readTime: '10 Min.',
    },
    {
        slug: 'case-study-fotogalerie-performance',
        image: '/wissen/cards/case-study-fotogalerie-performance.webp',
        alt: 'Illustration: Raster aus Fotokacheln, dessen wirre Verbindungslinien in einer sauberen Leitung buendeln, daneben eine Stoppuhr',
        category: 'PERFORMANCE',
        title: 'Case Study: 1.200 Fotos pro Album, wie 2.408 versteckte Requests eine Galerie ausbremsten',
        excerpt: 'Echte Produktionszahlen: Ein N+1-Problem bei signierten URLs erzeugte 2.408 HTTP-Requests pro Seitenaufruf. Nach Batch-Signierung: ~12 Requests und 0,98 s Antwortzeit.',
        readTime: '9 Min.',
    },
    {
        slug: 'dsgvo-fotoplattform-sicherheit-performance',
        image: '/wissen/cards/dsgvo-fotoplattform-sicherheit-performance.webp',
        alt: 'Illustration: grosses Schutzschild mit QR-Code-Kachel und Zifferntastatur davor',
        category: 'SICHERHEIT',
        title: 'DSGVO-Fotoplattform für Schulen: Was Sicherheit wirklich kostet',
        excerpt: 'QR-Code + PIN statt Accounts, Row Level Security, signierte URLs. Und der Preis: 723 Bildfehler in 72 Stunden, bis vorgenerierte WebP-Varianten kamen. Eine ehrliche Architektur-Case-Study.',
        readTime: '8 Min.',
    },
    {
        slug: 'warum-langsame-websites-kunden-kosten',
        image: '/wissen/cards/warum-langsame-websites-kunden-kosten.webp',
        alt: 'Illustration: Browserfenster mit halb gefuelltem Ladebalken, daneben eine Stoppuhr und ein wegfuehrender Pfeil',
        category: 'WEBDESIGN',
        title: 'Warum langsame Websites Sie jeden Tag Kunden kosten',
        excerpt: 'Jede Sekunde Ladezeit kostet Sie 7% Conversion-Rate. Erfahren Sie, wie Sie die Geschwindigkeit Ihrer Website messen und mit konkreten Maßnahmen verbessern können.',
        readTime: '6 Min.',
    },
    {
        slug: 'lokales-seo-hamburg-guide',
        image: '/wissen/cards/lokales-seo-hamburg-guide.webp',
        alt: 'Illustration: Stadtkarte eines Hafenviertels mit zentralem Standort-Pin und schwebenden Suchergebnissen',
        category: 'SEO',
        title: 'Lokales SEO in Hamburg: Der komplette Leitfaden für 2026',
        excerpt: 'Von Google Business Profile bis lokale Keywords: alles, was Sie wissen müssen, um in Hamburg bei Google gefunden zu werden. Mit Schritt-für-Schritt-Anleitung.',
        readTime: '12 Min.',
    },
    {
        slug: 'ai-seo-was-unternehmen-jetzt-wissen-muessen',
        image: '/wissen/cards/ai-seo-was-unternehmen-jetzt-wissen-muessen.webp',
        alt: 'Illustration: grosse Antwortkachel mit KI-Funke, verbunden mit drei Quellenkarten',
        category: 'AI SEO',
        title: 'AI SEO: Was Unternehmen jetzt wissen müssen',
        excerpt: 'ChatGPT, Perplexity, Google AI Overviews verändern die Suche. Wie Sie sicherstellen, dass Ihr Unternehmen in KI-Antworten als Quelle erscheint.',
        readTime: '8 Min.',
    },
    {
        slug: 'google-ads-fehler-lokale-unternehmen',
        image: '/wissen/cards/google-ads-fehler-lokale-unternehmen.webp',
        alt: 'Illustration: Anzeigenpanel ueber einem Trichter, aus dessen Riss Muenzen herausfallen',
        category: 'GOOGLE ADS',
        title: 'Die 7 teuersten Google Ads Fehler lokaler Unternehmen',
        excerpt: 'Von falschen Keywords bis fehlendem Conversion-Tracking: diese Fehler verbrennen Ihr Werbebudget. Und wie Sie sie vermeiden.',
        readTime: '7 Min.',
    },
    {
        slug: 'website-conversion-optimierung',
        image: '/wissen/cards/website-conversion-optimierung.webp',
        alt: 'Illustration: Trichter, in den wenige Pfeile eintreten und aus dem viele in ein Formular mit Button austreten',
        category: 'CONVERSION',
        title: 'Mehr Anfragen ohne mehr Traffic: Conversion-Optimierung erklärt',
        excerpt: 'Warum mehr Besucher nicht die Lösung ist. Wie Sie mit der gleichen Besucherzahl durch bessere Struktur und klarere Nutzerführung deutlich mehr Anfragen generieren.',
        readTime: '9 Min.',
    },
    {
        slug: 'website-relaunch-checkliste',
        image: '/wissen/cards/website-relaunch-checkliste.webp',
        alt: 'Illustration: alte Website, die per Pfeil in eine neue uebergeht, davor eine Checkliste',
        category: 'WEBDESIGN',
        title: 'Website-Relaunch Checkliste: Was Sie vorher wissen müssen',
        excerpt: 'Ein Relaunch kann Ihre Online-Präsenz transformieren oder Ihre Rankings zerstören. Die wichtigsten Punkte, die Sie vor, während und nach dem Relaunch beachten müssen.',
        readTime: '10 Min.',
    },
    {
        slug: 'webdesign-kosten',
        image: '/wissen/cards/webdesign-kosten.webp',
        alt: 'Illustration: drei Preisschilder in aufsteigender Groesse vor einem Browserfenster',
        category: 'WEBDESIGN',
        title: 'Webdesign Kosten 2026: Was eine professionelle Website wirklich kostet',
        excerpt: 'Von 500 bis 50.000 Euro: was bestimmt den Preis einer Website? Ehrlicher Kostenguide mit Preisbeispielen, versteckten Kosten und Tipps für die richtige Entscheidung.',
        readTime: '10 Min.',
    },
];

export default function WissenPage() {
    const collectionJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Wissen - AISEO Hamburg',
        description: 'Fachartikel zu Webdesign, SEO, AI SEO und Google Ads für lokale Unternehmen. Praxiswissen, keine Theorie.',
        url: 'https://webseite.hamburg/wissen',
        publisher: BUSINESS,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://webseite.hamburg/wissen' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Wissen' }]} />
                    <div className="subpage-hero-split">
                        <div>
                            <p className="section-kicker animate-up">Wissen</p>
                            <h1 className="subpage-title animate-up">Praxiswissen für Ihr Online-Wachstum.</h1>
                            <p className="subpage-intro animate-up">
                                Keine Theorie, keine Floskeln. Hier finden Sie konkrete Anleitungen, Analysen und Einblicke zu Webdesign, SEO, AI SEO und Google Ads, geschrieben für Unternehmer, die verstehen wollen, was wirklich funktioniert.
                            </p>
                        </div>
                        <div className="subpage-hero-media animate-up">
                            <img src="/wissen/hero-wissen.svg" alt="Illustration: aufgeschlagenes Buch, aus dem ein Browserfenster und eine rote Lupe aufsteigen" width="1200" height="900" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="wissen-grid-section section light-bg">
                <div className="container">
                    <div className="wissen-grid">
                        {articles.map((article, i) => (
                            <Link key={article.slug} href={`/wissen/${article.slug}`} className={`wissen-card animate-up delay-${(i % 3) + 1}`}>
                                <div className="wissen-card-media">
                                    <img src={article.image} alt={article.alt} width="760" height="494" loading={i < 3 ? 'eager' : 'lazy'} decoding="async" />
                                </div>
                                <div className="wissen-card-meta">
                                    <span className="wissen-card-category">{article.category}</span>
                                    <span className="wissen-card-time">{article.readTime}</span>
                                </div>
                                <h2 className="wissen-card-title">
                                    <span>{article.title}</span>
                                </h2>
                                <p className="wissen-card-excerpt">{article.excerpt}</p>
                                <span className="wissen-card-link">
                                    Artikel lesen
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sp-cta section">
                <div className="container">
                    <div className="cta-box bull-boundary animate-up">
                        <p className="section-kicker">Lieber direkt loslegen?</p>
                        <h2 className="section-title">Kostenlose Website-Analyse.</h2>
                        <p className="offer-framing">Statt nur zu lesen: lassen Sie mich Ihre Website analysieren. Performance, SEO, Conversion-Potenzial. Kostenlos und ehrlich.</p>
                        <div className="cta-actions mt-4">
                            <Link href="/kontakt" className="button button-primary button-large" data-umami-event="cta-click" data-umami-event-location="wissen-cta">Jetzt Analyse anfordern</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
