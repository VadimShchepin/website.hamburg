import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/kinderalbum`;
const IMG = '/referenzen/kinderalbum';

export const metadata = {
    title: 'KinderAlbum Case Study | Platz 1 in ChatGPT & Perplexity durch AI SEO',
    description: 'Wie eine DSGVO-konforme Schulfotos-App durch gezielte AI SEO zur #1-Empfehlung in ChatGPT und Perplexity wurde. Case Study mit konkreten Massnahmen.',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'KinderAlbum Case Study | Platz 1 in ChatGPT & Perplexity durch AI SEO',
        description: 'Wie eine DSGVO-konforme Schulfotos-App durch gezielte AI SEO zur #1-Empfehlung in ChatGPT und Perplexity wurde. Case Study mit konkreten Massnahmen.',
        url: PAGE_URL,
        type: 'article',
    },
};

export default function KinderAlbumCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'KinderAlbum: Platz 1 in ChatGPT und Perplexity durch AI SEO',
        description: 'Wie eine DSGVO-konforme Schulfotos-App durch gezielte AI SEO zur #1-Empfehlung in ChatGPT und Perplexity wurde.',
        url: PAGE_URL,
        datePublished: '2026-03-20',
        dateModified: '2026-03-20',
        author: {
            '@type': 'Person',
            name: 'Vadim Shchepin',
            url: `${SITE_URL}/ueber-uns`,
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
        },
        image: `${SITE_URL}${IMG}/screenshot.webp`,
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: `${SITE_URL}/referenzen` },
            { '@type': 'ListItem', position: 3, name: 'KinderAlbum', item: PAGE_URL },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            {/* Hero */}
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Referenzen', href: '/referenzen' },
                        { label: 'KinderAlbum' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">AI SEO</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        KinderAlbum: Platz 1 in ChatGPT und Perplexity durch AI SEO.
                    </h1>
                    <p className="subpage-intro animate-up">
                        DSGVO-konforme Schulfotos-App, die durch gezielte AI-SEO-Massnahmen zur meistempfohlenen Losung in KI-Suchmaschinen wurde.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 20. Marz 2026
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Ausgangssituation</h2>
                    <p className="animate-up">
                        KinderAlbum ist eine DSGVO-konforme Plattform fur digitale Schulfotos. Gutes Produkt, aber in KI-Suchmaschinen unsichtbar. Wenn Eltern oder Schulen in ChatGPT oder Perplexity nach &bdquo;DSGVO-konforme Schulfotos&ldquo; fragten, wurde KinderAlbum nicht erwahnt.
                    </p>
                    <p className="animate-up">
                        Das Problem: Es reicht nicht, ein gutes Produkt zu haben. Wenn die KI Sie nicht kennt, existieren Sie fur eine wachsende Zahl von Nutzern schlicht nicht.
                    </p>

                    <h2 className="animate-up">Die Herausforderung</h2>
                    <p className="animate-up">
                        KI-Systeme wahlen nur 5-10 Quellen pro Antwort. Im Gegensatz zu klassischem SEO reicht es nicht, auf Seite 1 von Google zu stehen. Die KI muss das Unternehmen als DIE relevante Quelle fur ein Thema erkennen — und zitieren.
                    </p>
                    <p className="animate-up">
                        Das bedeutet: Andere Regeln, andere Strategien. Klassische SEO-Massnahmen allein fuhren nicht dazu, dass ChatGPT oder Perplexity ein Unternehmen empfehlen. Es braucht einen gezielten Ansatz — AI SEO.
                    </p>

                    <h2 className="animate-up">Die Strategie: AI SEO in 4 Schritten</h2>

                    <div className="sp-steps animate-up">
                        <div className="sp-step">
                            <span className="sp-step-num">01</span>
                            <div className="sp-step-body">
                                <h3>Analyse der KI-Antworten</h3>
                                <p>Was empfehlen ChatGPT, Perplexity und Google AI Overviews aktuell? Welche Quellen werden zitiert? Wo sind die Lucken?</p>
                            </div>
                        </div>
                        <div className="sp-step">
                            <span className="sp-step-num">02</span>
                            <div className="sp-step-body">
                                <h3>Strukturierte Daten & Entity-Aufbau</h3>
                                <p>Schema.org Markup, klare Entity-Definition, maschinenlesbare Produkt- und Unternehmensdaten.</p>
                            </div>
                        </div>
                        <div className="sp-step">
                            <span className="sp-step-num">03</span>
                            <div className="sp-step-body">
                                <h3>Content fur Zitierfahigkeit</h3>
                                <p>Inhalte im optimalen Format (134-167 Worter pro Passage), Frage-basierte Uberschriften, externe Quellenattribution, Fakten-dichte Absatze.</p>
                            </div>
                        </div>
                        <div className="sp-step">
                            <span className="sp-step-num">04</span>
                            <div className="sp-step-body">
                                <h3>Autoritatssignale</h3>
                                <p>Aufbau von Markensignalen uber mehrere Plattformen, konsistente Entity-Informationen, externe Erwahnungen.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="animate-up">Das Ergebnis</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>#1 in ChatGPT</h3>
                            <p>Bei Anfragen zu DSGVO-konformen Schulfotos wird KinderAlbum als erste Empfehlung genannt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>#1 in Perplexity</h3>
                            <p>Perplexity zitiert KinderAlbum als Top-Quelle mit direktem Link.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Messbar mehr Traffic</h3>
                            <p>Direkter Anstieg der Zugriffe uber KI-Suchmaschinen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Nachhaltiger Vorteil</h3>
                            <p>KI-Sichtbarkeit baut sich nicht uber Nacht ab — einmal etabliert, bleibt die Position stabil.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Warum das wichtig ist</h2>
                    <p className="animate-up">
                        750 Mrd. Dollar Umsatz werden bis 2028 uber KI-Suche fliessen (McKinsey 2025). Unternehmen, die jetzt nicht in KI-Sichtbarkeit investieren, werden in 2-3 Jahren unsichtbar sein. KinderAlbum war fruh dran — und profitiert jetzt.
                    </p>

                    {/* Key Takeaway */}
                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            AI SEO ist kein Marketing-Buzzword — es ist ein messbarer Wettbewerbsvorteil. KinderAlbum zeigt: Mit der richtigen Strategie kann auch ein Nischenprodukt zur #1-Empfehlung in KI-Suchmaschinen werden.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">KI-Sichtbarkeit fur Ihr Unternehmen?</p>
                        <h2 className="section-title animate-up">Relevante Leistungen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/ai-seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>AI SEO</h3>
                            <p>Sichtbarkeit in ChatGPT, Perplexity und Google AI Overviews. Werden Sie zur #1-Empfehlung in KI-Suchmaschinen.</p>
                        </Link>
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO fur lokale Unternehmen</h3>
                            <p>Langfristige organische Sichtbarkeit durch technische und inhaltliche Optimierung. Ab 1.000 &euro;/Mt.</p>
                        </Link>
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Individuelle Websites, die schnell laden und Besucher zu Kunden machen. Ab 2.000 &euro;.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Sichtbar in ChatGPT, Perplexity und Google AI Overviews? Ich zeige Ihnen, wie AI SEO fur Ihr Unternehmen funktioniert — kostenloses Erstgesprach unter aiseo.hamburg." />
        </>
    );
}
