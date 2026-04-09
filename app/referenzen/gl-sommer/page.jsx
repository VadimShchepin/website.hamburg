import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/gl-sommer`;

export const metadata = {
    title: 'GL Sommer Case Study | SEO-Audit, Google Ads & Redesign fur GaLaBau Hamburg',
    description: 'Wie GL Sommer GmbH durch Website-Modernisierung, SEO-Audit und Google Ads 728 lokale Aktionen und 1.113 Klicks pro Monat bei nur 529 EUR Werbebudget erreicht hat.',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'GL Sommer Case Study | GaLaBau Hamburg — SEO + Google Ads',
        description: 'Website-Modernisierung, SEO-Audit von 34/100 aufwarts, Google Ads mit 728 lokalen Aktionen bei 529 EUR/Monat. Case Study mit echten Daten.',
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

export default function GlSommerCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'GL Sommer GmbH: SEO-Audit, Redesign und Google Ads fur GaLaBau Hamburg',
        description: 'Wie ein etabliertes Garten- und Landschaftsbau-Unternehmen durch Website-Modernisierung, SEO-Optimierung und Google Ads messbar mehr Kundenanfragen generiert.',
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
        image: `${SITE_URL}/referenzen/Gl-sommer-hero.webp`,
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: `${SITE_URL}/referenzen` },
            { '@type': 'ListItem', position: 3, name: 'GL Sommer', item: PAGE_URL },
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
                        { label: 'GL Sommer' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">SEO + Google Ads + Redesign</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        GL Sommer GmbH: 728 lokale Aktionen pro Monat fur Hamburgs GaLaBau-Unternehmen.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Ein etabliertes Garten- und Landschaftsbau-Unternehmen mit uber 1.650 Projekten seit 2010 — Website modernisiert, SEO-Audit von 34/100 aufwarts optimiert, Google Ads gestartet. Das Ergebnis: 728 lokale Aktionen und 19 Conversions pro Monat bei nur 529 &euro; Werbebudget.
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
                        <MetricCard value="728" label="Lokale Aktionen" detail="pro Monat" />
                        <MetricCard value="67.888" label="Impressionen" detail="Google Ads / Monat" />
                        <MetricCard value="1.113" label="Klicks" detail="Google Ads / Monat" />
                        <MetricCard value="529 &euro;" label="Werbebudget" detail="pro Monat" />
                        <MetricCard value="19" label="Conversions" detail="pro Monat" />
                        <MetricCard value="34 &rarr; ?" label="SEO-Score" detail="Audit-Start bei 34/100" />
                    </div>
                </div>
            </section>

            {/* Website Screenshot */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="cs-image-showcase animate-up">
                        <Image
                            src="/referenzen/Gl-sommer-hero.webp"
                            alt="GL Sommer GmbH Website — Hero-Bereich mit Garten- und Landschaftsbau Leistungen in Hamburg"
                            width={1200}
                            height={712}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">Die modernisierte Website: gl-sommer.de — Startseite mit klarem Leistungsangebot und Vertrauenssignalen.</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Ausgangssituation</h2>
                    <p className="animate-up">
                        GL Sommer GmbH ist seit 2010 im Garten- und Landschaftsbau in Hamburg tatig — Terrassenverlegung, Pflasterarbeiten, Zaunbau, Gartenpflege. Uber 1.650 abgeschlossene Projekte und ausgezeichnete Google-Bewertungen. Ein Unternehmen mit echtem Ruf und echter Expertise.
                    </p>
                    <p className="animate-up">
                        Aber die digitale Prasenz hielt nicht Schritt. Die bestehende WordPress-Elementor-Website hatte strukturelle SEO-Probleme, veraltete Inhalte und keine aktive Strategie zur Kundengewinnung uber Google. Das SEO-Audit ergab einen Score von <strong>34 von 100</strong> — mit kritischen Lucken bei Title Tags, Meta Descriptions, H1-Struktur, Alt-Texten und Sicherheitsheadern.
                    </p>

                    <h2 className="animate-up">Die Losung: Modernisierung + SEO + Ads</h2>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        1. Website-Modernisierung
                    </h3>
                    <p className="animate-up">
                        Kein kompletter Neubau — sondern gezielte Modernisierung. Das bestehende Design wurde beibehalten, aber grundlegend verbessert: klarere Seitenstruktur, bessere Mobile-Experience, schnellere Ladezeiten. Neue <strong>Referenz-Seiten</strong> wurden erstellt, um abgeschlossene Projekte professionell zu prasentieren — das wichtigste Vertrauenssignal im B2B-Gartenbau.
                    </p>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        2. Vollstandiges SEO-Audit & Optimierung
                    </h3>
                    <p className="animate-up">
                        Das technische Audit deckte systematische Probleme auf, die Seite fur Seite behoben wurden:
                    </p>

                    <div className="cs-before-after animate-up" style={{ marginTop: 'var(--space-md)' }}>
                        <BeforeAfter label="H1-Tags" before="Fehlten auf allen Unterseiten" after="Keyword-optimiert pro Seite" />
                        <BeforeAfter label="Title Tags" before="Auto-generiert mit Pipe" after="Handgeschrieben, klickstark" />
                        <BeforeAfter label="Meta Descriptions" before="Nicht vorhanden" after="150-160 Zeichen, mit CTA" />
                        <BeforeAfter label="Alt-Texte" before="24 Bilder ohne Alt-Text" after="Beschreibend, auf Deutsch" />
                        <BeforeAfter label="Datenschutz" before="Falscher Firmenname" after="Korrekt: GL Sommer GmbH" />
                        <BeforeAfter label="Sicherheitsheader" before="Nicht konfiguriert" after="HSTS, X-Frame, Referrer-Policy" />
                    </div>

                    <div className="cs-image-showcase animate-up" style={{ marginTop: 'var(--space-md)' }}>
                        <Image
                            src="/referenzen/Gl-sommer-leistungen.webp"
                            alt="GL Sommer Leistungen — Gartenpflege und Garten- & Landschaftsbau Ubersicht"
                            width={1200}
                            height={781}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">Die Leistungs-Ubersicht: Klare Kategorien fur Gartenpflege und Landschaftsbau mit direktem Zugang zu Details.</p>
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        3. Content-Strategie aus echten Suchdaten
                    </h3>
                    <p className="animate-up">
                        Die GSC-Daten zeigten, wo GL Sommer bereits stark war — und wo die Lucken lagen. <strong>&bdquo;Pflasterarbeiten Hamburg&ldquo;</strong> war bereits auf Position 2,78. Aber zentrale B2B-Begriffe wie &bdquo;Garten und Landschaftsbau Hamburg&ldquo; standen noch auf Seite 2. Gezielte Service-Landingpages und Referenz-Inhalte wurden erstellt, um diese Lucken zu schliessen.
                    </p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Position 2,78</h3>
                            <p>&bdquo;Pflasterarbeiten Hamburg&ldquo; — Top 3 bei einem hochrelevanten Dienstleistungs-Keyword mit starker lokaler Kaufabsicht.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Referenz-Seiten</h3>
                            <p>Abgeschlossene Projekte professionell dokumentiert — mit Fotos, Leistungsbeschreibung und Projektdetails. Das Vertrauenssignal Nr. 1 im GaLaBau.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Lokale SEO-Signale</h3>
                            <p>Google Business Profil optimiert, konsistente NAP-Daten, lokale Schema-Markup-Integration fur Hamburg und Umgebung.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Keyword-Cluster</h3>
                            <p>Gartenpflege, Galabau, Terrassenbau, Pflasterarbeiten — jedes Cluster mit eigener Landingpage und gezieltem Content.</p>
                        </div>
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        4. Google Ads — lokale Anfragen generieren
                    </h3>
                    <p className="animate-up">
                        Parallel zur SEO-Arbeit wurde eine Google Ads-Kampagne gestartet, die auf Hamburger Gartenpflege- und Landschaftsbau-Suchanfragen mit lokaler Kaufabsicht zielt. Ergebnis: effiziente Lead-Generierung bei niedrigem Budget.
                    </p>

                    <div className="cs-ads-results animate-up">
                        <div className="cs-ads-stat">
                            <div className="cs-ads-stat-header">
                                <span className="cs-ads-stat-value">728</span>
                                <span className="cs-ads-stat-label">Lokale Aktionen / Monat</span>
                            </div>
                            <p>Wegbeschreibungen, Anrufe, Interaktionen mit dem Google Business Profil — Nutzer, die aktiv nach einem lokalen Dienstleister suchen und handeln.</p>
                        </div>
                        <div className="cs-ads-stat">
                            <div className="cs-ads-stat-header">
                                <span className="cs-ads-stat-value">~0,73 &euro;</span>
                                <span className="cs-ads-stat-label">Kosten pro lokaler Aktion</span>
                            </div>
                            <p>Bei 529 &euro; Monatsbudget und 728 lokalen Aktionen — eine extrem effiziente Akquise fur einen lokalen Handwerksbetrieb.</p>
                        </div>
                        <div className="cs-ads-stat">
                            <div className="cs-ads-stat-header">
                                <span className="cs-ads-stat-value">19</span>
                                <span className="cs-ads-stat-label">Conversions / Monat</span>
                            </div>
                            <p>Direkte Anfragen und Kontaktaufnahmen uber die Ads-Kampagne — bei einem Kosten-pro-Conversion von ca. 27,80 &euro;.</p>
                        </div>
                    </div>

                    {/* Results */}
                    <h2 className="animate-up">Die Ergebnisse — Marz 2026</h2>

                    <div className="cs-results-grid animate-up">
                        <div className="cs-result-card">
                            <h3>67.888 Impressionen</h3>
                            <p>Die Anzeigen werden Zehntausende Male pro Monat in Hamburg und Umgebung ausgespielt — maximale lokale Sichtbarkeit.</p>
                        </div>
                        <div className="cs-result-card">
                            <h3>1.113 Klicks</h3>
                            <p>Uber 1.100 qualifizierte Besucher pro Monat uber Google Ads — Nutzer mit konkreter Gartenpflege- oder Landschaftsbau-Suchabsicht.</p>
                        </div>
                        <div className="cs-result-card">
                            <h3>20 Anrufklicks</h3>
                            <p>Direkte Anrufe aus den Anzeigen — die starkste Conversion-Art fur einen lokalen Dienstleister.</p>
                        </div>
                        <div className="cs-result-card">
                            <h3>SEO-Audit: 34/100 &rarr; aufwarts</h3>
                            <p>Vom kritischen Ausgangszustand systematisch verbessert: Title Tags, Meta Descriptions, H1-Struktur, Alt-Texte, Sicherheit, Schema.</p>
                        </div>
                    </div>

                    {/* Key Takeaway */}
                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Ein etabliertes Unternehmen muss seine Website nicht komplett neu bauen — aber die digitale Prasenz muss zum Geschaft passen. GL Sommer zeigt: Gezielte Modernisierung, systematische SEO-Optimierung und effiziente Google Ads konnen aus einer bestehenden Website eine echte Akquise-Maschine machen. 728 lokale Aktionen pro Monat fur 529 &euro; — das ist planbare, skalierbare Kundengewinnung.
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
                            <h3>SEO fur lokale Unternehmen</h3>
                            <p>Langfristige organische Sichtbarkeit durch technische und inhaltliche Optimierung. Ab 1.000 &euro;/Mt.</p>
                        </Link>
                        <Link href="/leistungen/google-ads" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Google Ads Management</h3>
                            <p>Gezielte Kampagnen fur lokale Unternehmen. Maximale Sichtbarkeit bei minimierten Kosten. Ab 500 &euro;/Mt.</p>
                        </Link>
                        <Link href="/leistungen/website-audit" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Website-Audit</h3>
                            <p>Kostenlose Erstanalyse: Performance, SEO und Conversion-Potenzial Ihrer aktuellen Website.</p>
                        </Link>
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Individuelle Websites, die schnell laden und Besucher zu Kunden machen. Ab 2.000 &euro;.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Ahnliche Ergebnisse fur Ihr Unternehmen? Kostenloses Erstgesprach — ich analysiere Ihre aktuelle Website und zeige Ihnen, wo das Potenzial liegt." />
        </>
    );
}
