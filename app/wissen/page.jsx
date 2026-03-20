import Link from 'next/link';
import Breadcrumbs from '../../src/components/Breadcrumbs';
import { BUSINESS } from '../../src/lib/schema';

export const metadata = {
    title: 'Wissen | Webdesign, SEO & Ads Guides',
    description: 'Fachartikel zu Webdesign, SEO, AI SEO und Google Ads fur lokale Unternehmen. Praxiswissen, keine Theorie — geschrieben fur Unternehmer in Hamburg.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen',
    },
    openGraph: {
        title: 'Wissen | Webdesign, SEO & Ads Guides',
        description: 'Fachartikel zu Webdesign, SEO, AI SEO und Google Ads fur lokale Unternehmen. Praxiswissen, keine Theorie.',
        url: 'https://webseite.hamburg/wissen',
        type: 'website',
    },
};

const articles = [
    {
        slug: 'warum-langsame-websites-kunden-kosten',
        category: 'WEBDESIGN',
        title: 'Warum langsame Websites Sie jeden Tag Kunden kosten',
        excerpt: 'Jede Sekunde Ladezeit kostet Sie 7% Conversion-Rate. Erfahren Sie, wie Sie die Geschwindigkeit Ihrer Website messen und verbessern konnen — mit konkreten Massnahmen.',
        readTime: '6 Min.',
    },
    {
        slug: 'lokales-seo-hamburg-guide',
        category: 'SEO',
        title: 'Lokales SEO in Hamburg: Der komplette Leitfaden fur 2026',
        excerpt: 'Von Google Business Profile bis lokale Keywords — alles, was Sie wissen mussen, um in Hamburg bei Google gefunden zu werden. Mit Schritt-fur-Schritt-Anleitung.',
        readTime: '12 Min.',
    },
    {
        slug: 'ai-seo-was-unternehmen-jetzt-wissen-muessen',
        category: 'AI SEO',
        title: 'AI SEO: Was Unternehmen jetzt wissen mussen',
        excerpt: 'ChatGPT, Perplexity, Google AI Overviews verandern die Suche. Wie Sie sicherstellen, dass Ihr Unternehmen in KI-Antworten als Quelle erscheint.',
        readTime: '8 Min.',
    },
    {
        slug: 'google-ads-fehler-lokale-unternehmen',
        category: 'GOOGLE ADS',
        title: 'Die 7 teuersten Google Ads Fehler lokaler Unternehmen',
        excerpt: 'Von falschen Keywords bis fehlendem Conversion-Tracking — diese Fehler verbrennen Ihr Werbebudget. Und wie Sie sie vermeiden.',
        readTime: '7 Min.',
    },
    {
        slug: 'website-conversion-optimierung',
        category: 'CONVERSION',
        title: 'Mehr Anfragen ohne mehr Traffic: Conversion-Optimierung erklart',
        excerpt: 'Warum mehr Besucher nicht die Losung ist. Wie Sie mit der gleichen Besucherzahl deutlich mehr Anfragen generieren — durch bessere Struktur und klarere Nutzerfuhrung.',
        readTime: '9 Min.',
    },
    {
        slug: 'website-relaunch-checkliste',
        category: 'WEBDESIGN',
        title: 'Website-Relaunch Checkliste: Was Sie vorher wissen mussen',
        excerpt: 'Ein Relaunch kann Ihre Online-Prasenz transformieren — oder Ihre Rankings zerstoren. Die wichtigsten Punkte, die Sie vor, wahrend und nach dem Relaunch beachten mussen.',
        readTime: '10 Min.',
    },
    {
        slug: 'webdesign-kosten',
        category: 'WEBDESIGN',
        title: 'Webdesign Kosten 2026: Was eine professionelle Website wirklich kostet',
        excerpt: 'Von 500 bis 50.000 Euro — was bestimmt den Preis einer Website? Ehrlicher Kostenguide mit Preisbeispielen, versteckten Kosten und Tipps fur die richtige Entscheidung.',
        readTime: '10 Min.',
    },
];

export default function WissenPage() {
    const collectionJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Wissen - AISEO Hamburg',
        description: 'Fachartikel zu Webdesign, SEO, AI SEO und Google Ads fur lokale Unternehmen. Praxiswissen, keine Theorie.',
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
                    <h1 className="subpage-title animate-up">Praxiswissen fur Ihr Online-Wachstum.</h1>
                    <p className="subpage-intro animate-up">
                        Keine Theorie, keine Floskeln. Hier finden Sie konkrete Anleitungen, Analysen und Einblicke zu Webdesign, SEO, AI SEO und Google Ads — geschrieben fur Unternehmer, die verstehen wollen, was wirklich funktioniert.
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
                        <p className="offer-framing">Statt nur zu lesen — lassen Sie mich Ihre Website analysieren. Performance, SEO, Conversion-Potenzial. Kostenlos und ehrlich.</p>
                        <div className="cta-actions mt-4">
                            <Link href="/kontakt" className="button button-primary button-large">Jetzt Analyse anfordern</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
