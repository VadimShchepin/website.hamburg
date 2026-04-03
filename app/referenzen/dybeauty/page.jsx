import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/dybeauty`;

export const metadata = {
    title: 'DYBeauty Case Study | Organischen Traffic verdoppelt in 90 Tagen',
    description: 'Wie ein K-Beauty Shopify-Shop durch SEO-Audit, 723 Produktoptimierungen, Google Merchant Center und Content-Strategie den organischen Traffic in 3 Monaten verdoppelt hat.',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'DYBeauty Case Study | Organischen Traffic verdoppelt in 90 Tagen',
        description: 'K-Beauty E-Commerce: 723 Produkte optimiert, 78.500 Impressionen, Traffic verdoppelt. SEO-Audit, Google Merchant Center, Content-Strategie.',
        url: PAGE_URL,
        type: 'article',
    },
};

function MetricCard({ value, label, detail }) {
    return (
        <div className="cs-metric">
            <span className="cs-metric-value">{value}</span>
            <span className="cs-metric-label">{label}</span>
            {detail && <span className="cs-metric-detail">{detail}</span>}
        </div>
    );
}

function BeforeAfter({ label, before, after }) {
    return (
        <div className="cs-ba-row">
            <span className="cs-ba-label">{label}</span>
            <span className="cs-ba-before">{before}</span>
            <span className="cs-ba-arrow">&rarr;</span>
            <span className="cs-ba-after">{after}</span>
        </div>
    );
}

export default function DybeautyCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'DYBeauty: Organischen Traffic verdoppelt in 90 Tagen',
        description: 'Wie ein K-Beauty Shopify-Shop durch SEO-Audit, 723 Produktoptimierungen und Content-Strategie den organischen Traffic verdoppelt hat.',
        url: PAGE_URL,
        datePublished: '2026-04-03',
        dateModified: '2026-04-03',
        author: {
            '@type': 'Person',
            name: 'Vadim Shchepin',
            url: `${SITE_URL}/ueber-uns`,
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
        },
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: `${SITE_URL}/referenzen` },
            { '@type': 'ListItem', position: 3, name: 'DYBeauty', item: PAGE_URL },
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
                        { label: 'DYBeauty' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">E-Commerce SEO</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        DYBeauty: Organischen Traffic verdoppelt in 90 Tagen.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Ein K-Beauty Shopify-Shop, der fast ausschliesslich uber Instagram lief — ohne SEO-Grundlage, ohne deutsche Rechtstexte, ohne Google Merchant Center. 723 Produkte optimiert, Content-Strategie aufgebaut, organischen Traffic verdoppelt.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 3. April 2026
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid animate-up">
                        <MetricCard value="2x" label="Organischer Traffic" detail="verdoppelt in 90 Tagen" />
                        <MetricCard value="1.860" label="Organische Klicks" detail="in 3 Monaten" />
                        <MetricCard value="78.500" label="Impressionen" detail="in 3 Monaten" />
                        <MetricCard value="11,5" label="Durchschn. Position" detail="Tendenz steigend" />
                        <MetricCard value="723" label="Produkte optimiert" detail="SEO-Titel & Attribute" />
                        <MetricCard value="80/100" label="SEO-Score" detail="Technisches Audit" />
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Ausgangssituation</h2>
                    <p className="animate-up">
                        DYBeauty verkauft koreanische Kosmetik in Deutschland — eine wachsende Nische mit echtem Wettbewerb. Der Shop hatte treue Instagram-Kunden, aber Google kannte ihn praktisch nicht.
                    </p>
                    <p className="animate-up">
                        Das erste Audit zeigte fundamentale Probleme: Produktbeschreibungen waren ChatGPT-generierter Fulltext ohne Suchintention. Kein einziger SEO-Titel war optimiert. Produktdaten waren unvollstandig — fehlende EANs, Grossen, Inhaltsstoffe. Kein Google Merchant Center. Und rechtlich war der Shop fur den deutschen Markt nicht betriebsbereit: kein Impressum, keine Datenschutzerklarung, kein Widerrufsrecht. Der Shop war nicht einmal auf Deutsch als Standardsprache konfiguriert.
                    </p>
                    <p className="animate-up">
                        Gute Produkte. Keine Infrastruktur.
                    </p>

                    <h2 className="animate-up">Die Losung: Systematischer Aufbau</h2>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        1. Rechtliche Grundlage & Technisches Fundament
                    </h3>
                    <p className="animate-up">
                        Bevor SEO-Massnahmen greifen konnten, musste der Shop ein legitimer deutscher Online-Handel sein. Alle gesetzlich vorgeschriebenen Seiten wurden erstellt — Impressum, Datenschutzerklarung, Widerrufsbelehrung. Deutsch wurde als Standard-Shopsprache konfiguriert. Ein vollstandiges technisches SEO-Audit identifizierte samtliche strukturellen Lucken.
                    </p>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        2. 723 Produkte. 40 Collections. Jeder Titel neu geschrieben.
                    </h3>
                    <p className="animate-up">
                        Nicht per Template. Nicht per KI generiert. Jeder SEO-Titel basiert auf echtem Suchvolumen und Wettbewerbsanalyse fur den deutschen K-Beauty-Markt. Produktattribute — EANs, Grossen, Varianten, Inhaltsstoffe — wurden uber den gesamten Katalog erganzt. Das machte die Produkte fur Google Shopping qualifizierbar und verbesserte die Katalogqualitatssignale site-weit.
                    </p>

                    <div className="cs-before-after animate-up" style={{ marginTop: 'var(--space-md)' }}>
                        <BeforeAfter label="SEO-Titel" before="Generisch / ChatGPT" after="Keyword-optimiert pro Produkt" />
                        <BeforeAfter label="Produktdaten" before="Unvollstandig" after="EANs, Grossen, Varianten" />
                        <BeforeAfter label="Rechtstexte" before="Nicht vorhanden" after="Impressum, DSGVO, Widerruf" />
                        <BeforeAfter label="Shopsprache" before="Nicht konfiguriert" after="Deutsch als Standard" />
                        <BeforeAfter label="Google Merchant" before="Nicht vorhanden" after="Feed live & aktiv" />
                        <BeforeAfter label="SEO-Score" before="Niedrig" after="80 / 100" />
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        3. Google Merchant Center — von Null aufgebaut
                    </h3>
                    <p className="animate-up">
                        Der Produkt-Feed wurde erstmalig eingerichtet, verifiziert und bei Google Merchant Center eingereicht. Damit wurde der Shopping-Kanal geooffnet, der vorher schlicht nicht existierte — ein komplett neuer Akquisitionsweg fur organischen und bezahlten Traffic.
                    </p>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        4. Content-Strategie & Ubersetzungen
                    </h3>
                    <p className="animate-up">
                        Neue Blog-Artikel auf Basis von Keyword-Recherche und Content-Gap-Analyse gegen deutsche K-Beauty-Wettbewerber. Automatisierte, hochwertige deutsche Ubersetzungen fur den gesamten zweisprachigen Katalog — als Ersatz fur die bisherigen inkonsistenten maschinellen Ubersetzungen, die Vertrauenssignale beschadigt hatten.
                    </p>

                    {/* Results */}
                    <h2 className="animate-up">Die Ergebnisse nach 3 Monaten</h2>
                    <p className="animate-up">
                        Der organische Traffic hat sich verdoppelt. Die Impressionen zeigen eine klare Beschleunigung ab Mitte Marz 2026 — der Punkt, an dem technische Fixes, Produktdaten-Optimierung und Content gleichzeitig greifen.
                    </p>

                    <div className="cs-results-grid animate-up">
                        <div className="cs-result-card">
                            <h3>1.860 organische Klicks</h3>
                            <p>Verdoppelt gegenuber dem Vorzeitraum. Von einer Domain, die vorher praktisch keine Google-Sichtbarkeit hatte.</p>
                        </div>
                        <div className="cs-result-card">
                            <h3>78.500 Impressionen</h3>
                            <p>Google zeigt den Shop fur Tausende relevanter Suchanfragen — das Fundament fur weiteres Wachstum.</p>
                        </div>
                        <div className="cs-result-card">
                            <h3>Position 11,5 — Tendenz steigend</h3>
                            <p>Durchschnittliche Position auf Seite 2, mit klarer Aufwartsbewegung Richtung Seite 1. Die Kurve zeigt steil nach oben.</p>
                        </div>
                        <div className="cs-result-card">
                            <h3>Google Merchant Center aktiv</h3>
                            <p>723 Produkte im Shopping-Feed. Ein komplett neuer Kanal, der vorher nicht existierte.</p>
                        </div>
                    </div>

                    {/* Key Takeaway */}
                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Ein Instagram-getriebener Shop kann nicht auf SEO umschalten, ohne die Grundlagen zu legen. Rechtstexte, Produktdaten, technisches SEO und Content-Strategie mussen zusammenspielen. DYBeauty zeigt: Wenn die Infrastruktur stimmt, kommt der Traffic — und er wachst exponentiell.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Ahnliches Projekt geplant?</p>
                        <h2 className="section-title animate-up">Leistungen, die zum Einsatz kamen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO fur E-Commerce</h3>
                            <p>Technisches SEO, Produktoptimierung und Content-Strategie fur Online-Shops. Ab 1.000 &euro;/Mt.</p>
                        </Link>
                        <Link href="/leistungen/website-audit" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Website-Audit</h3>
                            <p>Kostenlose Erstanalyse: Performance, SEO und Conversion-Potenzial Ihrer aktuellen Website.</p>
                        </Link>
                        <Link href="/leistungen/ai-seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>AI SEO</h3>
                            <p>Sichtbarkeit in ChatGPT, Perplexity und Google AI Overviews. Werden Sie zur #1-Empfehlung.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="E-Commerce SEO fur Ihren Shop? Ich analysiere Ihren Shop und zeige Ihnen, wo das grosste Wachstumspotenzial liegt — kostenlos und unverbindlich." />
        </>
    );
}
