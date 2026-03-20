import Link from 'next/link';
import Breadcrumbs from '../../src/components/Breadcrumbs';
import { BUSINESS } from '../../src/lib/schema';

export const metadata = {
    title: 'Referenzen & Case Studies | AISEO Hamburg',
    description: 'Echte Ergebnisse fur echte Unternehmen. Case Studies aus Hamburg: Webdesign, SEO, Google Ads und AI SEO — mit messbaren Ergebnissen.',
    alternates: {
        canonical: 'https://webseite.hamburg/referenzen',
    },
    openGraph: {
        title: 'Referenzen & Case Studies | AISEO Hamburg',
        description: 'Echte Ergebnisse fur echte Unternehmen. Case Studies aus Hamburg: Webdesign, SEO, Google Ads und AI SEO — mit messbaren Ergebnissen.',
        url: 'https://webseite.hamburg/referenzen',
        type: 'website',
    },
};

const caseStudies = [
    {
        slug: 'blitz-hamburg',
        category: 'WEBDESIGN + GOOGLE ADS + SEO',
        title: 'Von Null auf stabile Auftragslage',
        client: 'Blitz Hamburg',
        excerpt: 'Ein Hamburger Handwerksbetrieb ohne Online-Prasenz — komplett neue Website, gezielte Google Ads und lokale SEO. Das Ergebnis: Top-Positionen und kontinuierliche Kundenanfragen.',
        metric: '5.000+ Impressionen in 3 Monaten',
    },
    {
        slug: 'kinderalbum',
        category: 'AI SEO',
        title: 'Platz 1 in ChatGPT & Perplexity',
        client: 'KinderAlbum',
        excerpt: 'Eine DSGVO-konforme Schulfotos-App, die durch gezielte AI-SEO-Massnahmen zur meistempfohlenen Losung in KI-Suchmaschinen wurde.',
        metric: '#1 in KI-Suchmaschinen',
    },
    {
        slug: 'solovei-beauty',
        category: 'WEBDESIGN + LOKALE SEO',
        title: '5.000 Impressionen in 8 Wochen',
        client: 'Solovei Beauty',
        excerpt: 'Ein Beauty-Studio in Hamburg — neue Website mit lokaler SEO-Strategie. Sichtbarkeit von Null auf 5.000 Impressionen in nur 8 Wochen.',
        metric: '5.000 Impressionen in 8 Wochen',
    },
];

export default function ReferenzenPage() {
    const collectionJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Referenzen & Case Studies - AISEO Hamburg',
        description: 'Echte Ergebnisse fur echte Unternehmen. Case Studies aus Hamburg: Webdesign, SEO, Google Ads und AI SEO — mit messbaren Ergebnissen.',
        url: 'https://webseite.hamburg/referenzen',
        publisher: BUSINESS,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: 'https://webseite.hamburg/referenzen' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Referenzen' }]} />
                    <p className="section-kicker animate-up">Referenzen</p>
                    <h1 className="subpage-title animate-up">Echte Projekte. Echte Ergebnisse.</h1>
                    <p className="subpage-intro animate-up">
                        Keine Stockfotos, keine erfundenen Zahlen. Hier sehen Sie, was ich fur Unternehmen in Hamburg konkret erreicht habe — mit messbaren Ergebnissen und echten Daten.
                    </p>
                </div>
            </section>

            <section className="wissen-grid-section section light-bg">
                <div className="container">
                    <div className="wissen-grid">
                        {caseStudies.map((study, i) => (
                            <Link key={study.slug} href={`/referenzen/${study.slug}`} className={`wissen-card animate-up delay-${(i % 3) + 1}`}>
                                <div className="wissen-card-meta">
                                    <span className="wissen-card-category">{study.category}</span>
                                </div>
                                <h2 className="wissen-card-title">
                                    <span>{study.client}: {study.title}</span>
                                </h2>
                                <p className="wissen-card-excerpt">{study.excerpt}</p>
                                <p className="wissen-card-excerpt" style={{ fontWeight: 600, marginTop: 'var(--space-xs)' }}>{study.metric}</p>
                                <span className="wissen-card-link">
                                    Case Study lesen
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
                        <p className="section-kicker">Ahnliche Ergebnisse gewunscht?</p>
                        <h2 className="section-title">Kostenloses Erstgesprach.</h2>
                        <p className="offer-framing">Lassen Sie uns uber Ihr Projekt sprechen. Ich analysiere Ihre Situation und zeige Ihnen, was konkret moglich ist — kostenlos und unverbindlich.</p>
                        <div className="cta-actions mt-4">
                            <Link href="/kontakt" className="button button-primary button-large">Jetzt Gesprach vereinbaren</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
