import Link from 'next/link';
import AutoLinks from '../../src/components/AutoLinks';
import Breadcrumbs from '../../src/components/Breadcrumbs';
import { BUSINESS } from '../../src/lib/schema';

export const metadata = {
    title: 'Referenzen: Webdesign, SEO & Google Ads aus Hamburg',
    description: 'Zehn echte Projekte mit Zahlen: Blitz Hamburg von 24 auf 374 Google-Klicks im Monat, KinderAlbum von 23 auf 792, DYBeauty mit 2,4-mal mehr Impressionen.',
    alternates: {
        canonical: 'https://webseite.hamburg/referenzen',
    },
    openGraph: {
        title: 'Referenzen: Webdesign, SEO & Google Ads aus Hamburg',
        description: 'Zehn echte Projekte mit Zahlen: Blitz Hamburg von 24 auf 374 Google-Klicks im Monat, KinderAlbum von 23 auf 792, DYBeauty mit 2,4-mal mehr Impressionen.',
        url: 'https://webseite.hamburg/referenzen',
        type: 'website',
    },
};

const caseStudies = [
    {
        slug: 'blitz-hamburg',
        image: '/referenzen/cards/blitz-hamburg.webp',
        alt: 'Illustration: Browserfenster mit Kostenschätzer, Blitzsymbol und steigender Kurve',
        category: 'WEBDESIGN + GOOGLE ADS + SEO',
        title: 'Von 24 auf 374 Google-Klicks im Monat',
        client: 'Blitz Hamburg',
        excerpt: 'Entrümpelung und Sanierung in Hamburg. Neue Website, Google Ads und Ratgeber zu Sperrmüll und Entrümpelungskosten. Nach dem Relaunch im Mai 2026 stiegen die organischen Klicks von 24 (April) auf 374 (September 2026).',
        metric: '24 auf 374 Google-Klicks / Monat',
    },
    {
        slug: 'kinderalbum',
        image: '/referenzen/cards/kinderalbum.webp',
        alt: 'Illustration: gestapelte Fotorahmen hinter einem Schutzschild mit Vorhängeschloss und KI-Funke',
        category: 'SAAS-PRODUKT + SEO',
        title: 'DSGVO-Schulfotos: 23 auf 792 Google-Klicks',
        client: 'KinderAlbum',
        excerpt: 'DSGVO-konforme Foto-Plattform für Schulen, Kitas und Fotografen, mit Ratgebern zu den Fragen, die Eltern googeln. Organische Klicks 23 (Februar) auf 792 (September 2026), 14 Konten mit neuen Alben im September.',
        metric: '23 auf 792 Google-Klicks / Monat',
    },
    {
        slug: 'dybeauty',
        image: '/referenzen/cards/dybeauty.webp',
        alt: 'Illustration: drei Kosmetikflakons auf einem Produktraster mit Einkaufstasche und steil steigender Kurve',
        category: 'E-COMMERCE SEO',
        title: '2,4-mal mehr Google-Impressionen',
        client: 'DYBeauty',
        excerpt: 'K-Beauty Shopify-Shop. Rechtstexte, 723 Produkttitel, Produktdaten und Ratgeber. Impressionen 23.353 (Februar) auf 56.651 (September 2026), Klicks ohne Markennamen 446 auf 810.',
        metric: '23.353 auf 56.651 Impressionen / Monat',
    },
    {
        slug: 'gl-sommer',
        image: '/referenzen/cards/gl-sommer.webp',
        alt: 'Illustration: Browserfenster mit GaLaBau-Website, Standort-Pin und steigendes Balkendiagramm',
        category: 'WEBSITE + SEO-AUDIT + GOOGLE ADS',
        title: 'Google Ads umgebaut, ehrlich gezählt',
        client: 'GL Sommer GmbH',
        excerpt: 'Garten- und Landschaftsbau in Hamburg. Website modernisiert, SEO-Audit, Google Ads von Smart auf Search umgebaut. Kosten je Kontaktaktion 27,15 EUR (Januar bis März) auf 11,06 EUR (April bis September 2026).',
        metric: '11,06 EUR je Kontaktaktion',
    },
    {
        slug: 'pest-control-saas',
        image: '/referenzen/cards/pest-control-saas.webp',
        alt: 'Illustration: vernetzte Sechseck-Module einer Software-Architektur mit Smartphone im Vordergrund',
        category: 'SAAS-PRODUKTENTWICKLUNG',
        title: 'Enterprise-Architektur für Schädlingsbekämpfung',
        client: 'Pest Control SaaS',
        excerpt: 'Multi-Tenant SaaS mit Hexagonaler Architektur, DDD, Offline-PWA für Techniker und EU-Biozid-Verordnung-Compliance. 6 Bounded Contexts, 27 API-Routen, 0 Architektur-Verletzungen.',
        metric: '6 DDD-Module, 0 Architektur-Verletzungen',
    },
    {
        slug: 'solovei-beauty',
        image: '/referenzen/cards/solovei-beauty.webp',
        alt: 'Illustration: Browserfenster mit Globus und drei Inhaltsblöcken, die per Cursor angeordnet werden',
        category: 'WEBDESIGN + CMS',
        title: '3 Sprachen, null Abhängigkeit vom Entwickler',
        client: 'Solovei Beauty Coworking',
        excerpt: 'Beauty-Coworking in Hamburg. Dreisprachige Website mit Payload CMS, CI/CD Pipeline und der Freiheit, alles selbst zu pflegen. 5.000 Impressionen in 8 Wochen.',
        metric: '5.000 Impressionen in 8 Wochen',
    },
    {
        slug: 'manetec',
        image: '/referenzen/cards/manetec.webp',
        alt: 'Illustration: Hotelgebäude unter der Lupe mit Prüfringen und Häkchen-Siegel',
        category: 'WEBDESIGN + KI',
        title: 'Schädlingsbekämpfung trifft KI-Risikoanalyse',
        client: 'Manetec Hamburg',
        excerpt: 'Website für professionelle Schädlingsbekämpfung in Hotels und Gastronomie, mit KI-gestützter Risikoanalyse via Gemini, HACCP-Compliance und industrieller Ästhetik.',
        metric: 'KI-Risikoanalyse als Lead-Tool',
    },
    {
        slug: 'typeexplore-ai',
        image: '/referenzen/cards/typeexplore-ai.webp',
        alt: 'Illustration: isometrische Tastatur mit abhebenden Tasten, KI-Funke und Konfetti',
        category: 'KI-PRODUKT',
        title: 'KI-Tipptrainer: Lernen beim Tippen',
        client: 'TypeExplore AI',
        excerpt: 'Tippen lernen mit KI-generierten Lektionen zu jedem Thema. Gemini API, sichere Backend-Proxy-Architektur, Echtzeit-WPM-Tracking. Und Konfetti.',
        metric: 'Gemini 2.5-flash + Konfetti',
    },
    {
        slug: 'mit-kinder',
        image: '/referenzen/cards/mit-kinder.webp',
        alt: 'Illustration: aufgefaltete Stadtkarte mit Standort-Pins und schwebender Chat-Blase',
        category: 'KI-PLATTFORM',
        title: 'Aktivitätsplattform für Familien mit KI-Chatbot',
        client: 'mit-kinder.de',
        excerpt: 'Hexagonale Architektur, Gemini-Chatbot mit Standort- und Zeitbewusstsein, interaktive Karte. Für Eltern, die samstags um 14 Uhr nicht wissen, was sie mit den Kindern machen sollen.',
        metric: 'Hexagonal + Gemini + 75 Tests',
    },
    {
        slug: 'glucksmomente-events',
        image: '/referenzen/cards/glucksmomente-events.webp',
        alt: 'Illustration: Eventbogen mit Ballontraube und geschwungenen Bändern',
        category: 'WEBDESIGN',
        title: 'Aquarell-Ästhetik für Eventplanerin',
        client: 'Glücksmomente Events',
        excerpt: 'Individuelle Event-Website für Josy Eberlein in Hamburg: React + GSAP Scroll-Animationen, Aquarell-Design, drei handverlesene Schriftarten. Warmherzig und professionell.',
        metric: 'GSAP-Animationen + Aquarell-Design',
    },
];

export default function ReferenzenPage() {
    const collectionJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Referenzen: Webdesign, SEO & Google Ads aus Hamburg',
        description: 'Zehn echte Projekte mit Zahlen: Blitz Hamburg von 24 auf 374 Google-Klicks im Monat, KinderAlbum von 23 auf 792, DYBeauty mit 2,4-mal mehr Impressionen.',
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
            <AutoLinks path="/referenzen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Referenzen' }]} />
                    <div className="subpage-hero-split">
                        <div>
                            <p className="section-kicker animate-up">Referenzen</p>
                            <h1 className="subpage-title animate-up">Referenzen: echte Projekte, echte Ergebnisse.</h1>
                            <p className="subpage-intro animate-up">
                                Keine Stockfotos, keine erfundenen Zahlen. Hier sehen Sie, was ich für Unternehmen in Hamburg konkret erreicht habe, mit messbaren Ergebnissen und echten Daten.
                            </p>
                        </div>
                        <div className="subpage-hero-media animate-up">
                            <img src="/hero-referenzen.svg" alt="Illustration: drei gestaffelte Browserfenster mit roter Steigungskurve und ein Pokal als Zeichen für Projektergebnisse" width="1200" height="900" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="wissen-grid-section section light-bg">
                <div className="container">
                    <div className="wissen-grid">
                        {caseStudies.map((study, i) => (
                            <Link key={study.slug} href={`/referenzen/${study.slug}`} className={`wissen-card animate-up delay-${(i % 3) + 1}`}>
                                <div className="wissen-card-media">
                                    <img src={study.image} alt={study.alt} width="760" height="494" loading={i < 3 ? 'eager' : 'lazy'} decoding="async" />
                                </div>
                                <div className="wissen-card-meta">
                                    <span className="wissen-card-category">{study.category}</span>
                                </div>
                                <p style={{ fontWeight: 700, color: 'var(--color-accent, #2563eb)', fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 var(--space-xs)' }}>{study.metric}</p>
                                <h2 className="wissen-card-title">
                                    <span>{study.client}</span>
                                </h2>
                                <p className="wissen-card-excerpt">{study.excerpt}</p>
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
                        <p className="section-kicker">Ähnliche Ergebnisse gewünscht?</p>
                        <h2 className="section-title">Kostenloses Erstgespräch.</h2>
                        <p className="offer-framing">Lassen Sie uns über Ihr Projekt sprechen. Ich analysiere Ihre Situation und zeige Ihnen, was konkret möglich ist. Kostenlos und unverbindlich.</p>
                        <div className="cta-actions mt-4">
                            <Link href="/kontakt" className="button button-primary button-large" data-umami-event="cta-click" data-umami-event-location="referenzen-cta">Jetzt Gespräch vereinbaren</Link>
                        </div>
                    </div>
                </div>
            </section>
            </AutoLinks>
        </>
    );
}
