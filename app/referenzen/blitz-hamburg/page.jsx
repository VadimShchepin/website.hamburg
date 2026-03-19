import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';
import { BUSINESS } from '../../../src/lib/schema';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/blitz-hamburg`;

export const metadata = {
    title: 'Blitz Hamburg Case Study | Von Null auf stabile Auftragslage in 3 Monaten',
    description: 'Wie ein Hamburger Handwerksbetrieb durch Website-Neubau, Google Ads und SEO in 3 Monaten 5.000+ Impressionen, Top-Positionen und kontinuierliche Kundenanfragen erreicht hat.',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Blitz Hamburg Case Study | Von Null auf stabile Auftragslage',
        description: 'Website-Neubau, Google Ads und lokale SEO fur einen Handwerksbetrieb. 5.000+ Impressionen, 2x Conversion-Steigerung, alle Lighthouse-Scores uber 97.',
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
            <span className="cs-ba-arrow">→</span>
            <span className="cs-ba-after">{after}</span>
        </div>
    );
}

function TimelineStep({ num, title, description }) {
    return (
        <div className="cs-timeline-step animate-up">
            <div className="cs-timeline-num">{num}</div>
            <div className="cs-timeline-content">
                <strong>{title}</strong>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function BlitzHamburgCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Blitz Hamburg: Von Null auf stabile Auftragslage in 3 Monaten',
        description: 'Case Study: Wie ein Hamburger Handwerksbetrieb durch Website-Neubau, Google Ads und lokale SEO in 3 Monaten messbare Ergebnisse erzielt hat.',
        url: PAGE_URL,
        datePublished: '2026-03-19',
        dateModified: '2026-03-19',
        author: {
            '@type': 'Person',
            name: 'Vadim Shchepin',
            url: `${SITE_URL}/ueber-uns`,
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
        },
        image: `${SITE_URL}/logo_red.webp`,
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: `${SITE_URL}/referenzen/blitz-hamburg` },
            { '@type': 'ListItem', position: 3, name: 'Blitz Hamburg', item: PAGE_URL },
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
                        { label: 'Referenzen' },
                        { label: 'Blitz Hamburg' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">Webdesign + Google Ads + SEO</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        Blitz Hamburg: Von Null auf stabile Auftragslage in 3 Monaten.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Ein Hamburger Handwerksbetrieb fur Entrumpelung und Sanierung — komplett neue Website, gezielte Google Ads und lokale SEO. Das Ergebnis: Top-Positionen, qualifizierte Anfragen und messbares Wachstum.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> · 19. Marz 2026
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid animate-up">
                        <MetricCard value="5.000+" label="Impressionen" detail="in 3 Monaten" />
                        <MetricCard value="~2 €" label="CPC" detail="Sanierung & Entrumpelung" />
                        <MetricCard value="33%+" label="Auktionsgewinnrate" detail="Google Ads" />
                        <MetricCard value="90%" label="Obere Anzeigenposition" detail="Upper Ads Block" />
                        <MetricCard value="2x" label="Conversion-Steigerung" detail="Google Business Profil" />
                        <MetricCard value="97+" label="Lighthouse Score" detail="Alle Kategorien" />
                    </div>
                </div>
            </section>

            {/* The Challenge */}
            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Ausgangssituation</h2>
                    <p className="animate-up">
                        Blitz Hamburg ist ein Handwerksbetrieb, der Entrumpelung, Haushaltsauflosung und Sanierung in Hamburg anbietet. Vor dem Projekt: keine professionelle Website, keine Online-Sichtbarkeit, Stagnation bei der Kundengewinnung. Der gesamte Markt wurde von Wettbewerbern dominiert, die seit Jahren etablierte Online-Prasenz hatten.
                    </p>
                    <p className="animate-up">
                        Die Herausforderung: In einem wettbewerbsintensiven lokalen Markt — mit Keywords wie <strong>„Entrumpelung Hamburg"</strong> (2.400 monatliche Suchen, CPC 18,41 €) und <strong>„Haushaltsauflosung Hamburg"</strong> (1.600 monatliche Suchen, CPC 20,25 €) — von Null auf eine stabile Auftragslage zu kommen. Und zwar schnell.
                    </p>

                    <h2 className="animate-up">Die Losung: Drei Saulen</h2>
                    <p className="animate-up">
                        Statt isolierter Massnahmen haben wir ein integriertes System aufgebaut: eine technisch uberlegene Website, prazise Google Ads-Kampagnen und strategische lokale SEO — alles aufeinander abgestimmt.
                    </p>

                    {/* Pillar 1: Website */}
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        1. High-Performance Website von Grund auf
                    </h3>
                    <p className="animate-up">
                        Die Website wurde komplett neu entwickelt — keine Templates, kein WordPress. Individueller Code, optimiert fur maximale Geschwindigkeit und Conversion. Jede Seite ist auf eine konkrete Suchabsicht ausgerichtet.
                    </p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>14 optimierte Seiten</h3>
                            <p>Jede Seite zielt auf ein spezifisches Keyword und eine konkrete Nutzerabsicht. Startseite, Leistungsseiten, Stadtteil-Landingpages und Kontakt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>104 Stadtteil-Bilder</h3>
                            <p>KI-generierte, stadtteilspezifische Bilder fur alle 104 Hamburger Stadtteile. Jedes Bild zeigt den echten Charakter des Viertels — ein einzigartiges visuelles Signal.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>AI-Kostenschatzer</h3>
                            <p>Ein Gemini-basiertes Tool, das Kunden sofort eine Preisschatzung gibt. Senkt die Hemmschwelle fur Anfragen und qualifiziert Leads vor dem Erstgesprach.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Lighthouse 97+</h3>
                            <p>Alle vier Lighthouse-Kategorien uber 97 Punkte. Erreicht durch Pre-Rendering, WebP-Bilder, WOFF2-Fonts und optimiertes JavaScript.</p>
                        </div>
                    </div>

                    {/* Performance Before/After */}
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Technische Optimierung: Vorher → Nachher
                    </h3>
                    <div className="cs-before-after animate-up">
                        <BeforeAfter label="Performance Score" before="35/100" after="88/100" />
                        <BeforeAfter label="SEO Score" before="43/100" after="78/100" />
                        <BeforeAfter label="JS-Bundle" before="944 KB" after="228 KB (-76%)" />
                        <BeforeAfter label="Bilder" before="PNG (unkomprimiert)" after="WebP (optimiert)" />
                        <BeforeAfter label="Schriftart" before="TTF (391 KB)" after="WOFF2 (66 KB, -83%)" />
                        <BeforeAfter label="Rendering" before="Client-Side Only" after="Pre-Rendered HTML" />
                    </div>

                    {/* Pillar 2: Google Ads */}
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        2. Prazise Google Ads-Kampagnen
                    </h3>
                    <p className="animate-up">
                        Wahrend die organische Sichtbarkeit aufgebaut wird, liefern Google Ads sofortige, qualifizierte Anfragen. Die Kampagnen sind hochspezifisch auf lokale Suchabsichten ausgerichtet — nicht breite Keywords, sondern exakte Dienstleistungen in Hamburg.
                    </p>

                    <div className="cs-ads-results animate-up">
                        <div className="cs-ads-stat">
                            <div className="cs-ads-stat-header">
                                <span className="cs-ads-stat-value">~2 €</span>
                                <span className="cs-ads-stat-label">Cost per Click</span>
                            </div>
                            <p>Bei einem Markt-CPC von 18-20 € fur die organischen Keywords. Die Ads-Kampagnen erreichen Klicks zu einem Bruchteil der Kosten, weil sie auf Long-Tail-Varianten und stadteilspezifische Suchbegriffe zielen.</p>
                        </div>
                        <div className="cs-ads-stat">
                            <div className="cs-ads-stat-header">
                                <span className="cs-ads-stat-value">33%+</span>
                                <span className="cs-ads-stat-label">Auktionsgewinnrate</span>
                            </div>
                            <p>Jede dritte Auktion wird gewonnen — bei gleichzeitig niedrigen Kosten. Das bedeutet: hohe Qualitat der Anzeigen, relevante Landingpages und starke Quality Scores.</p>
                        </div>
                        <div className="cs-ads-stat">
                            <div className="cs-ads-stat-header">
                                <span className="cs-ads-stat-value">90%</span>
                                <span className="cs-ads-stat-label">Obere Anzeigenposition</span>
                            </div>
                            <p>90% aller Anzeigeneinblendungen erscheinen im oberen Ads-Block — dort, wo die hochsten Klickraten sind. Kein „unten auf der Seite"-Platzierungen.</p>
                        </div>
                    </div>

                    {/* Pillar 3: Local SEO */}
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        3. Lokale SEO-Strategie
                    </h3>
                    <p className="animate-up">
                        Parallel zu den Ads wurde eine langfristige SEO-Strategie implementiert. Der Kern: stadteilspezifische Landingpages, die den gesamten Hamburger Markt abdecken — systematisch und datenbasiert.
                    </p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>93 Stadtteil-Seiten</h3>
                            <p>Individuelle Landingpages fur 93 Hamburger Stadtteile. Jede Seite mit lokalem Bezug, stadtteilspezifischem Bild und relevanten Keywords.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Google Business optimiert</h3>
                            <p>Profil vollstandig optimiert: korrekte Kategorien, Offnungszeiten, Fotos, regelmasige Beitrage. Ergebnis: Conversion-Rate verdoppelt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Proof-basierte Seiten</h3>
                            <p>Vorher/Nachher-Fotos, echte Google-Bewertungen und konkrete Projektreferenzen direkt auf den Landingpages. Vertrauen vor dem Klick.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Keyword-Daten als Basis</h3>
                            <p>Jede Seite basiert auf echten Suchdaten: Suchvolumen, CPC, Wettbewerbsdichte. Keine Vermutungen — nur datenbasierte Entscheidungen.</p>
                        </div>
                    </div>

                    {/* Results */}
                    <h2 className="animate-up">Die Ergebnisse nach 3 Monaten</h2>
                    <p className="animate-up">
                        Von einer komplett neuen Domain — ohne Geschichte, ohne Backlinks, ohne bestehende Rankings — zu messbarem Wachstum:
                    </p>

                    <div className="cs-results-grid animate-up">
                        <div className="cs-result-card">
                            <span className="cs-result-icon">📈</span>
                            <h3>5.000+ Impressionen</h3>
                            <p>Organische Sichtbarkeit in Google innerhalb von 3 Monaten. 3-5% CTR auf relevante Suchanfragen — fur eine komplett neue Domain ein starker Wert.</p>
                        </div>
                        <div className="cs-result-card">
                            <span className="cs-result-icon">📞</span>
                            <h3>Kontinuierliche Anfragen</h3>
                            <p>Statt Stagnation: ein stetiger Strom qualifizierter Kundenanfragen. Die Seiten sind auf High-Intent-Keywords optimiert — wer sucht, will buchen.</p>
                        </div>
                        <div className="cs-result-card">
                            <span className="cs-result-icon">⭐</span>
                            <h3>5.0 Sterne, 24 Bewertungen</h3>
                            <p>500+ zufriedene Kunden. Die Google-Bewertungen werden aktiv genutzt als Vertrauenssignal auf der Website und in den Ads.</p>
                        </div>
                        <div className="cs-result-card">
                            <span className="cs-result-icon">💰</span>
                            <h3>Reales Geschaftswachstum</h3>
                            <p>Das Unternehmen wachst — im Vergleich zur Stagnation davor. Die Kombination aus schneller Website, gezielten Ads und organischer Sichtbarkeit hat ein planbares Wachstumssystem geschaffen.</p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <h2 className="animate-up">Der Projektverlauf: 112 Tage</h2>
                    <div className="cs-timeline animate-up">
                        <TimelineStep
                            num="01"
                            title="MVP & Grundstruktur"
                            description="Kernseiten aufgebaut: Startseite, Leistungsseiten, Kontakt. Erste Google Ads-Kampagnen gestartet. Sofortige Sichtbarkeit durch bezahlte Suche."
                        />
                        <TimelineStep
                            num="02"
                            title="Stadtteil-Expansion"
                            description="93 Stadtteil-Landingpages erstellt. 104 KI-generierte Stadtteil-Bilder integriert. Interne Verlinkungsstruktur aufgebaut. Google Business Profil optimiert."
                        />
                        <TimelineStep
                            num="03"
                            title="Performance-Optimierung"
                            description="Pre-Rendering implementiert. JS-Bundle von 944 KB auf 228 KB reduziert. Bilder zu WebP konvertiert. Lighthouse-Scores auf 97+ gebracht."
                        />
                        <TimelineStep
                            num="04"
                            title="AI-Features & Feinschliff"
                            description="Gemini-basierter Kostenschatzer integriert. Proof-Elemente (Vorher/Nachher, Bewertungen) auf Landingpages. Ads-Kampagnen optimiert. Conversion-Tracking verfeinert."
                        />
                    </div>

                    {/* Project Stats */}
                    <h2 className="animate-up">Projekt in Zahlen</h2>
                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">63</span>
                            <span className="subpage-stat-label">Commits</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">14</span>
                            <span className="subpage-stat-label">Seiten</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">188</span>
                            <span className="subpage-stat-label">Assets</span>
                        </div>
                    </div>
                    <div className="subpage-stats animate-up" style={{ marginTop: 0 }}>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">104</span>
                            <span className="subpage-stat-label">Stadtteil-Bilder</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">93</span>
                            <span className="subpage-stat-label">Stadtteil-Seiten</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">112</span>
                            <span className="subpage-stat-label">Tage Entwicklung</span>
                        </div>
                    </div>

                    {/* Key Takeaway */}
                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Eine schnelle, konversionsorientierte Website ist die Grundlage — aber erst die Kombination mit gezielten Ads und systematischer lokaler SEO schafft ein planbares Wachstumssystem. Blitz Hamburg zeigt: Auch ohne bestehende Online-Prasenz kann ein lokaler Handwerksbetrieb in wenigen Monaten eine stabile Auftragslage aufbauen — wenn Technik, Daten und Strategie zusammenspielen.
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
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Individuelle Websites, die schnell laden und Besucher zu Kunden machen. Ab 2.000 €.</p>
                        </Link>
                        <Link href="/leistungen/google-ads" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Google Ads Management</h3>
                            <p>Gezielte Kampagnen fur lokale Unternehmen. Maximale Sichtbarkeit bei minimierten Kosten. Ab 500 €/Mt.</p>
                        </Link>
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO fur lokale Unternehmen</h3>
                            <p>Langfristige organische Sichtbarkeit durch technische und inhaltliche Optimierung. Ab 1.000 €/Mt.</p>
                        </Link>
                        <Link href="/leistungen/website-audit" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Website-Audit</h3>
                            <p>Kostenlose Erstanalyse: Performance, SEO und Conversion-Potenzial Ihrer aktuellen Website.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Ahnliche Ergebnisse fur Ihr Unternehmen? Kostenloses Erstgesprach — ich analysiere Ihre Situation und zeige Ihnen, was konkret moglich ist." />
        </>
    );
}
