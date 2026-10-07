import Link from 'next/link';
import AutoLinks from '../../../src/components/AutoLinks';
import Image from 'next/image';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';
import CaseChart from '../../../src/components/CaseChart';
import '../../../src/styles/case-study.css';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/dybeauty`;

const TITLE = 'DYBeauty: Shopify-SEO, 2,4-mal mehr Google-Impressionen';
const DESCRIPTION = 'Fallstudie DYBeauty: SEO für einen K-Beauty Shopify-Shop. 723 Produkte überarbeitet, Google-Impressionen von 23.353 (Februar) auf 56.651 (September 2026).';

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'DYBeauty Case Study: Shopify-SEO für koreanische Kosmetik',
        description: 'Impressionen 23.353 auf 56.651, Klicks ohne Markennamen 446 auf 810 (Februar bis September 2026). Was ich am Shop geändert habe und was die Zahlen nicht beweisen.',
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
        headline: 'DYBeauty: von 23.353 auf 56.651 Google-Impressionen im Monat',
        description: DESCRIPTION,
        url: PAGE_URL,
        datePublished: '2026-04-03',
        dateModified: '2026-10-07',
        author: {
            '@type': 'Person',
            name: 'Vadim Shchepin',
            url: `${SITE_URL}/ueber-uns`,
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
        },
        image: `${SITE_URL}/referenzen/dybeauty.webp`,
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
            <AutoLinks path="/referenzen/dybeauty">
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
                        DYBeauty: von 23.353 auf 56.651 Google-Impressionen im Monat.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Koreanische Kosmetik hat eine treue, sehr gut informierte Kundschaft. Die fragt Google Dinge wie &quot;Was ist der Unterschied zwischen Dr. Althea 345 und 147?&quot;. Seit März 2026 sorge ich dafür, dass dybeauty.de darauf eine Antwort hat, und für 723 Produkte einen Titel, nach dem tatsächlich jemand sucht.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 3. April 2026, aktualisiert am 7. Oktober 2026
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid cs-metrics-4 animate-up">
                        <MetricCard value="56.651" label="Impressionen" detail="September 2026 (Februar 2026: 23.353)" />
                        <MetricCard value="810" label="Klicks ohne Marke" detail="September 2026 (Februar 2026: 446)" />
                        <MetricCard value="4.224" label="Suchanfragen" detail="September 2026 (Februar 2026: 2.010)" />
                        <MetricCard value="723" label="Produkte überarbeitet" detail="Arbeit ab 16. März 2026" />
                    </div>
                </div>
            </section>

            {/* Website Screenshot */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="cs-image-showcase animate-up">
                        <Image
                            src="/referenzen/dybeauty.webp"
                            alt="DYBeauty Shopify-Shop: Startseite mit Produktkategorien für koreanische Kosmetik"
                            width={1200}
                            height={706}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">dybeauty.de: koreanische Kosmetik für den deutschen Markt, gebaut auf Shopify.</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="subpage-content section light-bg cs-story">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Ausgangslage</h2>
                    <p className="animate-up">
                        DYBeauty verkauft koreanische Kosmetik in Deutschland. Google kannte den Shop schon: Im Februar 2026 kamen 536 Klicks aus der organischen Suche, 90 davon über den Namen. Das Fundament war aber dünn. Die Produkttexte waren generisch und ohne Bezug zu dem, was Menschen suchen, kein SEO-Titel war bearbeitet, Produktdaten wie EAN, Größe und Inhaltsstoffe fehlten oft, und die Rechtstexte für den deutschen Markt waren nicht vollständig. Gute Produkte, wackelige Infrastruktur.
                    </p>

                    <h2 className="animate-up">Was ich gemacht habe</h2>
                    <p className="animate-up">
                        Die Arbeit begann am 16. März 2026. Die Reihenfolge war bewusst unspektakulär: erst das Fundament, dann die Inhalte.
                    </p>
                    <div className="cs-before-after animate-up">
                        <BeforeAfter label="Rechtstexte" before="unvollständig" after="Impressum, Datenschutz, Widerruf" />
                        <BeforeAfter label="Shopsprache" before="nicht konfiguriert" after="Deutsch als Standard" />
                        <BeforeAfter label="SEO-Titel" before="generisch" after="723 Produkte, 40 Kollektionen" />
                        <BeforeAfter label="Produktdaten" before="lückenhaft" after="EAN, Größen, Varianten" />
                        <BeforeAfter label="Übersetzungen" before="uneinheitlich" after="einheitlich auf Deutsch" />
                    </div>
                    <p className="animate-up">
                        Jeder SEO-Titel orientiert sich an echten Suchbegriffen für K-Beauty in Deutschland, nicht an einer Vorlage. Dazu kamen Ratgeber-Artikel im Shop-Blog, ausgewählt nach Keyword-Recherche und nach den Lücken bei deutschen Wettbewerbern.
                    </p>

                    {/* Results */}
                    <h2 className="animate-up">Was passiert ist</h2>
                    <p className="animate-up">
                        Zuerst wenig. Von April bis Juni 2026 lagen die Impressionen zwischen 25.049 und 34.177, also kaum über dem Februar. Ab Juli 2026 ging es deutlich nach oben: 44.926, dann 50.743 im August und 56.651 im September 2026. Shop-SEO braucht Geduld, besonders wenn hunderte Produktseiten neu bewertet werden müssen.
                    </p>

                    <CaseChart
                        slug="dybeauty-impressionen"
                        title="Google-Impressionen von dybeauty.de pro Monat"
                        alt="Säulendiagramm: Google-Impressionen von dybeauty.de. Januar 2026 26.231, Februar 23.353, nach Start der SEO-Arbeit im März zunächst seitwärts, ab Juli Anstieg auf 56.651 im September 2026."
                        source="Quelle: Google Search Console (dybeauty.de), Januar bis September 2026, abgerufen am 7. Oktober 2026."
                        note="Search-Console-Daten liegen erst ab 22. Dezember 2025 vor. Start der SEO-Arbeit: 16. März 2026."
                    />

                    <p className="animate-up">
                        Spannender als Impressionen sind Klicks von Menschen, die DYBeauty noch nicht kannten. Klicks über Suchanfragen ohne den Namen dybeauty stiegen von 446 im Februar 2026 auf 810 im September 2026. Alle Klicks zusammen: 536 im Februar, 865 im September 2026.
                    </p>

                    <CaseChart
                        slug="dybeauty-klicks-ohne-marke"
                        title="Google-Klicks auf dybeauty.de ohne Marken-Suchen, pro Monat"
                        alt="Säulendiagramm: organische Klicks auf dybeauty.de ohne Suchanfragen mit dem Namen dybeauty. Februar 2026 446, April bis Juni rund 450 bis 470, dann 665 im Juli, 713 im August und 810 im September 2026."
                        source="Quelle: Google Search Console (dybeauty.de), Januar bis September 2026, abgerufen am 7. Oktober 2026."
                        note="Gesamtklicks minus erkennbare Marken-Suchanfragen. Anonymisierte Suchanfragen zählen als ohne Marke."
                    />

                    {/* Fun facts */}
                    <div className="cs-funfacts animate-up">
                        <h2>Fun Facts aus den Daten</h2>
                        <ol>
                            <li>
                                <strong>Die große Cremefrage.</strong> Der Blog-Ratgeber zu Dr. Althea 345 und 147 wurde im September 2026 3.851 Mal in Google eingeblendet und 33 Mal geklickt. Die Suchanfrage &quot;dr althea 345 und 147 unterschied&quot; allein: 124 Einblendungen, Position 3,5.
                            </li>
                            <li>
                                <strong>K-Beauty spricht viele Sprachen.</strong> &quot;dr hedison кушон&quot; wurde im September 2026 147 Mal eingeblendet. Die Kundschaft sucht auch auf Russisch und Ukrainisch, und ein russischsprachiger Ratgeber zu PDRN brachte im selben Monat 17 Klicks.
                            </li>
                            <li>
                                <strong>Eine Marke als Zugpferd.</strong> Die Kollektionsseite von USOLAB holte im September 2026 119 Klicks, mehr als jede andere Seite außer der Startseite (176). &quot;usolab&quot; war mit 31 Klicks die stärkste Suchanfrage ohne den Shopnamen.
                            </li>
                            <li>
                                <strong>Doppelt so viele Fragen.</strong> Die Search Console listete im Februar 2026 2.010 verschiedene Suchanfragen, im September 2026 4.224.
                            </li>
                        </ol>
                    </div>

                    <h2 className="animate-up">Was ich gelernt habe</h2>
                    <p className="animate-up">
                        Ratgeber bringen Sichtbarkeit, Kollektionsseiten bringen Klicks. Die Artikel sorgen für viele Einblendungen bei Fragen, die Klicks kommen am zuverlässigsten dort, wo jemand eine Marke schon im Kopf hat und sie kaufen will.
                    </p>
                    <p className="animate-up">
                        Und die durchschnittliche Position ist eine trügerische Zahl. Sie lag im Februar 2026 bei 11,3 und im September 2026 bei 13,7, obwohl der Shop in dieser Zeit deutlich sichtbarer wurde. Wer für doppelt so viele Suchanfragen eingeblendet wird, steht bei vielen neuen Begriffen erst einmal weiter hinten, und das drückt den Schnitt.
                    </p>

                    <div className="cs-limits animate-up">
                        <p><strong>Ehrliche Grenzen:</strong> Die Kurven zeigen, was nach Beginn der Arbeit passiert ist, nicht zwingend warum. Saison, Nachfrage und Google-Updates sind nicht herausgerechnet. Die Sitzungen aus der organischen Suche (Google Analytics 4) stiegen schon ab Oktober 2025, also vor meinem Start, und die Klicks über den Namen dybeauty fielen von 146 im Juni auf 37 im Juli 2026. Ein Teil des Anstiegs ohne Marke kann eine Verschiebung sein. Organisch gewonnene Käufe sind mit 3 bis 12 im Monat zu wenige für eine Umsatzaussage.</p>
                        <p>Quellen: Google Search Console und Google Analytics 4 von dybeauty.de, abgerufen am 7. Oktober 2026. Startdatum laut Changelog: 16. März 2026.</p>
                    </div>

                    {/* Key Takeaway */}
                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Ein Shop wird nicht über Nacht sichtbar. Bei DYBeauty kamen erst Rechtstexte, Sprache und Produktdaten, dann Titel und Ratgeber, und nach rund vier Monaten die Kurve: 56.651 Impressionen und 810 Klicks ohne Markennamen im September 2026.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Ähnliches Projekt geplant?</p>
                        <h2 className="section-title animate-up">Leistungen, die zum Einsatz kamen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/e-commerce-entwicklung" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>E-Commerce</h3>
                            <p>Shopify, Shopware, WooCommerce: Shops aufbauen, erweitern und sauber an Google anbinden.</p>
                        </Link>
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO für Online-Shops</h3>
                            <p>Produktdaten, Titel, Kollektionen und Ratgeber, die gefunden werden. Ab 1.000 &euro; im Monat.</p>
                        </Link>
                        <Link href="/wissen/onlineshop-kosten" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Was kostet ein Onlineshop?</h3>
                            <p>Preise, Plattformen und laufende Kosten im Überblick.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Ihr Shop hat gute Produkte, aber Google zeigt ihn selten? Im kostenlosen Erstgespräch schaue ich mir Ihre Produktseiten und Suchdaten an." />
            </AutoLinks>
        </>
    );
}
