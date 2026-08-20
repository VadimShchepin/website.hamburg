import Link from 'next/link';
import Breadcrumbs from '../../src/components/Breadcrumbs';
import { BUSINESS } from '../../src/lib/schema';

export const metadata = {
    title: 'Wissen | Webdesign, SEO & Ads Guides',
    description: 'Fachartikel zu Webdesign, SEO, AI SEO und Google Ads für lokale Unternehmen. Praxiswissen, keine Theorie, geschrieben für Unternehmer in Hamburg.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen',
    },
    openGraph: {
        title: 'Wissen | Webdesign, SEO & Ads Guides',
        description: 'Fachartikel zu Webdesign, SEO, AI SEO und Google Ads für lokale Unternehmen. Praxiswissen, keine Theorie.',
        url: 'https://webseite.hamburg/wissen',
        type: 'website',
    },
};

const articles = [
    {
        slug: 'website-nicht-bei-google-gefunden',
        category: 'SEO',
        title: 'Website nicht bei Google zu finden? Die 12 häufigsten Ursachen',
        excerpt: 'Im Mai 2026 waren von 34 Seiten dieser Website nur etwa 10 im Google-Index. Was die Ursache war, wie Sie es bei sich prüfen und was Google offiziell zu nicht indexierten Seiten sagt.',
        readTime: '12 Min.',
    },
    {
        slug: 'google-business-profile-optimieren',
        category: 'SEO',
        title: 'Google-Unternehmensprofil optimieren: der Hamburg-Leitfaden',
        excerpt: 'Die drei Ranking-Faktoren, die Google selbst nennt, die Namensregel, an der Profile gesperrt werden, und eine Pflegeroutine, die 20 Minuten pro Woche dauert.',
        readTime: '12 Min.',
    },
    {
        slug: 'seo-kosten-hamburg',
        category: 'SEO',
        title: 'Was kostet SEO in Hamburg? Preise, Modelle und was Sie dafür bekommen',
        excerpt: 'Was in einem Monatsbudget von 1.000 Euro an Arbeitsstunden steckt, wie lange es laut Google dauert, und warum SEO manchmal die falsche Investition ist.',
        readTime: '11 Min.',
    },
    {
        slug: 'webdesign-agentur-oder-freelancer',
        category: 'WEBDESIGN',
        title: 'Agentur, Freelancer oder Baukasten: Wer soll Ihre Website bauen?',
        excerpt: 'Stundensätze, Projektpreise, Ausfallrisiko und Vertragsfallen im Vergleich. Geschrieben von einem Solo-Entwickler, mitsamt der Frage, wann das die falsche Wahl ist.',
        readTime: '11 Min.',
    },
    {
        slug: 'website-baukasten-oder-eigene-website',
        category: 'WEBDESIGN',
        title: 'Wix, Jimdo oder eigene Website: Was der Baukasten wirklich kostet',
        excerpt: 'Monatspreise 2026, die Fünf-Jahres-Rechnung und was beim Umzug verloren geht. Inklusive der Fälle, in denen der Baukasten die vernünftigere Wahl ist.',
        readTime: '10 Min.',
    },
    {
        slug: 'case-study-fotogalerie-performance',
        category: 'PERFORMANCE',
        title: 'Case Study: 1.200 Fotos pro Album, wie 2.408 versteckte Requests eine Galerie ausbremsten',
        excerpt: 'Echte Produktionszahlen: Ein N+1-Problem bei signierten URLs erzeugte 2.408 HTTP-Requests pro Seitenaufruf. Nach Batch-Signierung: ~12 Requests und 0,98 s Antwortzeit.',
        readTime: '9 Min.',
    },
    {
        slug: 'dsgvo-fotoplattform-sicherheit-performance',
        category: 'SICHERHEIT',
        title: 'DSGVO-Fotoplattform für Schulen: Was Sicherheit wirklich kostet',
        excerpt: 'QR-Code + PIN statt Accounts, Row Level Security, signierte URLs. Und der Preis: 723 Bildfehler in 72 Stunden, bis vorgenerierte WebP-Varianten kamen. Eine ehrliche Architektur-Case-Study.',
        readTime: '8 Min.',
    },
    {
        slug: 'warum-langsame-websites-kunden-kosten',
        category: 'WEBDESIGN',
        title: 'Warum langsame Websites Sie jeden Tag Kunden kosten',
        excerpt: 'Jede Sekunde Ladezeit kostet Sie 7% Conversion-Rate. Erfahren Sie, wie Sie die Geschwindigkeit Ihrer Website messen und mit konkreten Maßnahmen verbessern können.',
        readTime: '6 Min.',
    },
    {
        slug: 'lokales-seo-hamburg-guide',
        category: 'SEO',
        title: 'Lokales SEO in Hamburg: Der komplette Leitfaden für 2026',
        excerpt: 'Von Google Business Profile bis lokale Keywords: alles, was Sie wissen müssen, um in Hamburg bei Google gefunden zu werden. Mit Schritt-für-Schritt-Anleitung.',
        readTime: '12 Min.',
    },
    {
        slug: 'ai-seo-was-unternehmen-jetzt-wissen-muessen',
        category: 'AI SEO',
        title: 'AI SEO: Was Unternehmen jetzt wissen müssen',
        excerpt: 'ChatGPT, Perplexity, Google AI Overviews verändern die Suche. Wie Sie sicherstellen, dass Ihr Unternehmen in KI-Antworten als Quelle erscheint.',
        readTime: '8 Min.',
    },
    {
        slug: 'google-ads-fehler-lokale-unternehmen',
        category: 'GOOGLE ADS',
        title: 'Die 7 teuersten Google Ads Fehler lokaler Unternehmen',
        excerpt: 'Von falschen Keywords bis fehlendem Conversion-Tracking: diese Fehler verbrennen Ihr Werbebudget. Und wie Sie sie vermeiden.',
        readTime: '7 Min.',
    },
    {
        slug: 'website-conversion-optimierung',
        category: 'CONVERSION',
        title: 'Mehr Anfragen ohne mehr Traffic: Conversion-Optimierung erklärt',
        excerpt: 'Warum mehr Besucher nicht die Lösung ist. Wie Sie mit der gleichen Besucherzahl durch bessere Struktur und klarere Nutzerführung deutlich mehr Anfragen generieren.',
        readTime: '9 Min.',
    },
    {
        slug: 'website-relaunch-checkliste',
        category: 'WEBDESIGN',
        title: 'Website-Relaunch Checkliste: Was Sie vorher wissen müssen',
        excerpt: 'Ein Relaunch kann Ihre Online-Präsenz transformieren oder Ihre Rankings zerstören. Die wichtigsten Punkte, die Sie vor, während und nach dem Relaunch beachten müssen.',
        readTime: '10 Min.',
    },
    {
        slug: 'webdesign-kosten',
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
                    <p className="section-kicker animate-up">Wissen</p>
                    <h1 className="subpage-title animate-up">Praxiswissen für Ihr Online-Wachstum.</h1>
                    <p className="subpage-intro animate-up">
                        Keine Theorie, keine Floskeln. Hier finden Sie konkrete Anleitungen, Analysen und Einblicke zu Webdesign, SEO, AI SEO und Google Ads, geschrieben für Unternehmer, die verstehen wollen, was wirklich funktioniert.
                    </p>
                </div>
            </section>

            <section className="wissen-grid-section section light-bg">
                <div className="container">
                    <div className="wissen-grid">
                        {articles.map((article, i) => (
                            <Link key={article.slug} href={`/wissen/${article.slug}`} className={`wissen-card animate-up delay-${(i % 3) + 1}`}>
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
