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
        slug: 'gl-sommer',
        category: 'SEO + GOOGLE ADS + REDESIGN',
        title: '728 lokale Aktionen pro Monat',
        client: 'GL Sommer GmbH',
        excerpt: 'Hamburgs etabliertes GaLaBau-Unternehmen — Website modernisiert, SEO-Audit von 34/100 aufwarts optimiert, Google Ads gestartet. 1.113 Klicks und 728 lokale Aktionen bei nur 529 EUR Monatsbudget.',
        metric: '728 lokale Aktionen / Monat bei 529 EUR',
    },
    {
        slug: 'dybeauty',
        category: 'E-COMMERCE SEO',
        title: 'Organischen Traffic verdoppelt in 90 Tagen',
        client: 'DYBeauty',
        excerpt: 'K-Beauty Shopify-Shop ohne SEO-Grundlage — 723 Produkte optimiert, Google Merchant Center aufgebaut, Content-Strategie implementiert. Ergebnis: Traffic verdoppelt, 78.500 Impressionen.',
        metric: '2x organischer Traffic in 90 Tagen',
    },
    {
        slug: 'blitz-hamburg',
        category: 'WEBDESIGN + GOOGLE ADS + SEO',
        title: 'ROI in 7 Wochen, ~40 Kunden/Monat',
        client: 'Blitz Hamburg',
        excerpt: 'Ein Hamburger Handwerksbetrieb ohne Online-Prasenz — komplett neue Website mit KI-Kostenschatzer, gezielte Google Ads und lokale SEO. Investition in 7 Wochen zuruckgeholt, heute ~40 Kunden pro Monat.',
        metric: 'ROI in 7 Wochen',
    },
    {
        slug: 'pest-control-saas',
        category: 'SAAS-PRODUKTENTWICKLUNG',
        title: 'Enterprise-Architektur fur Schadlingsbekampfung',
        client: 'Pest Control SaaS',
        excerpt: 'Multi-Tenant SaaS mit Hexagonaler Architektur, DDD, Offline-PWA fur Techniker und EU-Biozid-Verordnung-Compliance. 6 Bounded Contexts, 27 API-Routen, 0 Architektur-Verletzungen.',
        metric: '6 DDD-Module, 0 Architektur-Verletzungen',
    },
    {
        slug: 'kinderalbum',
        category: 'SAAS-PRODUKT + AI SEO',
        title: 'DSGVO-Schulfotos-Plattform — #1 in ChatGPT',
        client: 'KinderAlbum',
        excerpt: 'Vollstandige DSGVO-konforme Plattform fur Schulfotos mit echten Nutzern, 76 RLS-Policies, zeitversionierter Einwilligung und Fotografen-Workflow. #1 in ChatGPT und Perplexity.',
        metric: '#1 in KI-Suchmaschinen + echte Nutzer',
    },
    {
        slug: 'solovei-beauty',
        category: 'WEBDESIGN + CMS',
        title: '3 Sprachen, null Abhangigkeit vom Entwickler',
        client: 'Solovei Beauty',
        excerpt: 'Beauty-Coworking in Hamburg — dreisprachige Website mit Payload CMS, CI/CD Pipeline und der Freiheit, alles selbst zu pflegen. 5.000 Impressionen in 8 Wochen.',
        metric: '5.000 Impressionen in 8 Wochen',
    },
    {
        slug: 'manetec',
        category: 'WEBDESIGN + KI',
        title: 'Schadlingsbekampfung trifft KI-Risikoanalyse',
        client: 'Manetec Hamburg',
        excerpt: 'Website fur professionelle Schadlingsbekampfung in Hotels und Gastronomie — mit KI-gestutzter Risikoanalyse via Gemini, HACCP-Compliance und industrieller Asthetik.',
        metric: 'KI-Risikoanalyse als Lead-Tool',
    },
    {
        slug: 'typeexplore-ai',
        category: 'KI-PRODUKT',
        title: 'KI-Tipptrainer — Lernen beim Tippen',
        client: 'TypeExplore AI',
        excerpt: 'Tippen lernen mit KI-generierten Lektionen zu jedem Thema. Gemini API, sichere Backend-Proxy-Architektur, Echtzeit-WPM-Tracking. Und Konfetti.',
        metric: 'Gemini 2.5-flash + Konfetti',
    },
    {
        slug: 'mit-kinder',
        category: 'KI-PLATTFORM',
        title: 'Aktivitatsplattform fur Familien mit KI-Chatbot',
        client: 'mit-kinder.de',
        excerpt: 'Hexagonale Architektur, Gemini-Chatbot mit Standort- und Zeitbewusstsein, interaktive Karte. Fur Eltern, die samstags um 14 Uhr nicht wissen, was sie mit den Kindern machen sollen.',
        metric: 'Hexagonal + Gemini + 75 Tests',
    },
    {
        slug: 'glucksmomente-events',
        category: 'WEBDESIGN',
        title: 'Aquarell-Asthetik fur Eventplanerin',
        client: 'Glucksmomente Events',
        excerpt: 'Individuelle Event-Website fur Josy Eberlein in Hamburg — React + GSAP Scroll-Animationen, Aquarell-Design, drei handverlesene Schriftarten. Warmherzig und professionell.',
        metric: 'GSAP-Animationen + Aquarell-Design',
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
