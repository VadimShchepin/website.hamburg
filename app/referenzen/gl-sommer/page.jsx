import Link from 'next/link';
import AutoLinks from '../../../src/components/AutoLinks';
import Image from 'next/image';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';
import CaseChart from '../../../src/components/CaseChart';
import '../../../src/styles/case-study.css';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/gl-sommer`;

const TITLE = 'GL Sommer GmbH: SEO und Google Ads für GaLaBau in Hamburg';
const DESCRIPTION = 'Fallstudie GL Sommer GmbH: Website modernisiert, SEO-Audit, Google Ads von Smart auf Search umgebaut. Kosten je Kontaktaktion 27,15 EUR (Jan bis Mär) auf 11,06 EUR (Apr bis Sep 2026).';

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        siteName: 'webseite.hamburg',
        locale: 'de_DE',
        title: 'GL Sommer Case Study: Google Ads umgebaut, ehrlich gerechnet',
        description: 'Von der Smart-Kampagne zu Search-Kampagnen: Kosten je Kontaktaktion 27,15 auf 11,06 EUR, mit allen Haken, die dazugehören. GaLaBau in Hamburg.',
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
        headline: 'GL Sommer GmbH: Google Ads umgebaut, Kosten je Kontaktaktion von 27,15 auf 11,06 EUR',
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
            <AutoLinks path="/referenzen/gl-sommer">
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
                        <span className="wissen-card-time">Website + SEO-Audit + Google Ads</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        GL Sommer GmbH: Google Ads umgebaut, Kosten je Kontakt von 27,15 auf 11,06 EUR.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Ein etablierter Garten- und Landschaftsbauer in Hamburg, seit 2010 im Geschäft. Die Website brauchte eine Modernisierung, die Anzeigen einen Umbau. Diese Seite erzählt, was das gebracht hat, und warum hier früher eine viel größere Zahl stand, die ich gestrichen habe.
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
                        <MetricCard value="11,06 &euro;" label="Je Kontaktaktion" detail="April bis September 2026 (Januar bis März: 27,15 EUR)" />
                        <MetricCard value="629" label="Kontaktaktionen" detail="April bis September 2026 (Januar bis März: 83)" />
                        <MetricCard value="154" label="Strenge Conversions" detail="April bis September 2026, je 45,19 EUR" />
                        <MetricCard value="23,34 &euro;" label="Je Kontaktaktion" detail="September 2026, steigt seit Juli" />
                    </div>
                </div>
            </section>

            {/* Website Screenshot */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="cs-image-showcase animate-up">
                        <Image
                            src="/referenzen/Gl-sommer-hero.webp"
                            alt="Startseite von gl-sommer.de mit Leistungen im Garten- und Landschaftsbau in Hamburg"
                            width={1200}
                            height={712}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">gl-sommer.de nach der Modernisierung: klares Leistungsangebot und Kontakt im ersten Bildschirm.</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="subpage-content section light-bg cs-story">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Ausgangslage</h2>
                    <p className="animate-up">
                        GL Sommer baut Terrassen, verlegt Pflaster, setzt Zäune und pflegt Gärten in Hamburg. Die WordPress-Website hatte strukturelle SEO-Probleme, das Audit zu Beginn ergab 34 von 100 Punkten. Google Ads liefen schon länger, mindestens seit Januar 2024. Von Januar bis März 2026 lief eine Smart-Kampagne, bei der Google fast alles selbst entscheidet. Sie kostete in diesen drei Monaten 27,15 EUR je Kontaktaktion.
                    </p>

                    <h2 className="animate-up">Was ich gemacht habe</h2>
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-md)', fontSize: '1.3rem' }}>
                        1. Website modernisiert statt neu gebaut
                    </h3>
                    <p className="animate-up">
                        Das Design blieb, die Struktur wurde klarer: bessere mobile Darstellung, schnellere Seiten und neue Referenz-Seiten, auf denen abgeschlossene Projekte mit Fotos gezeigt werden. Im Gartenbau will jeder zuerst sehen, wie die Terrasse beim Nachbarn geworden ist.
                    </p>
                    <div className="cs-image-showcase animate-up" style={{ marginTop: 'var(--space-md)' }}>
                        <Image
                            src="/referenzen/Gl-sommer-leistungen.webp"
                            alt="Leistungsübersicht von GL Sommer: Gartenpflege sowie Garten- und Landschaftsbau"
                            width={1200}
                            height={781}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">Die Leistungsübersicht: Gartenpflege und Landschaftsbau mit direktem Weg zu den Details.</p>
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        2. SEO-Audit, Seite für Seite abgearbeitet
                    </h3>
                    <div className="cs-before-after animate-up">
                        <BeforeAfter label="H1-Überschriften" before="fehlten auf Unterseiten" after="eine pro Seite" />
                        <BeforeAfter label="Title Tags" before="automatisch erzeugt" after="handgeschrieben" />
                        <BeforeAfter label="Meta Descriptions" before="nicht vorhanden" after="pro Seite geschrieben" />
                        <BeforeAfter label="Alt-Texte" before="24 Bilder ohne" after="beschreibend, auf Deutsch" />
                        <BeforeAfter label="Sicherheitsheader" before="nicht gesetzt" after="HSTS, X-Frame, Referrer-Policy" />
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        3. Google Ads von Smart auf Search umgebaut
                    </h3>
                    <p className="animate-up">
                        Ab dem 31. März 2026 liefen statt der Smart-Kampagne eigene Suchkampagnen mit Begriffen, bei denen jemand wirklich einen Gartenbauer in Hamburg sucht, mit passenden Anzeigentexten und sauberer Zählung der Kontakte.
                    </p>

                    {/* Results */}
                    <h2 className="animate-up">Was passiert ist</h2>
                    <p className="animate-up">
                        Von April bis September 2026 kostete eine Kontaktaktion im Schnitt 11,06 EUR, nach 27,15 EUR in den Smart-Monaten Januar bis März. In absoluten Zahlen: 629 Kontaktaktionen in sechs Monaten statt 83 in drei. Der beste Monat war der Juni 2026 mit 7,38 EUR je Kontaktaktion.
                    </p>

                    <CaseChart
                        slug="glsommer-kosten-pro-kontakt"
                        title="Werbekosten je Kontaktaktion bei GL Sommer (niedriger ist besser)"
                        alt="Säulendiagramm: Google-Ads-Kosten je Kontaktaktion bei GL Sommer. Herbst 2025 mit Search und Performance Max zwischen 4,8 und 14 EUR, Smart-Kampagne Januar bis März 2026 zwischen 21 und 42 EUR, neue Search-Kampagnen ab April 2026 zwischen 7,4 und 13 EUR, im September 2026 wieder 23 EUR."
                        source="Quelle: Google-Ads-Konto von GL Sommer, September 2025 bis September 2026, abgerufen am 7. Oktober 2026."
                        note="Kosten geteilt durch die Conversion-Aktion Kontakt (1). Sie kann mehrere Kontakte pro Klick zählen."
                    />

                    <p className="animate-up">
                        Jetzt der Teil, den man in Fallstudien selten liest. Erstens: Von September bis Dezember 2025 lagen die damaligen Search- und Performance-Max-Kampagnen bei 7,02 EUR je Kontaktaktion, also günstiger als meine. Der Umbau hat vor allem die teure Smart-Phase beendet, keinen Allzeitrekord aufgestellt. Zweitens: Seit Juli 2026 steigen die Kosten wieder, im September 2026 auf 23,34 EUR. Auch das gehört in die Grafik.
                    </p>

                    <CaseChart
                        slug="glsommer-kontakte"
                        title="Kontaktaktionen aus Google Ads pro Monat, weit und streng gezählt"
                        alt="Liniendiagramm: Kontaktaktionen aus Google Ads bei GL Sommer. Weite Zählung Kontakt (1): rund 200 im Herbst 2025, 20 bis 32 in den Smart-Monaten, 172 im Juni 2026 und 56 im September 2026. Strenge Zählung Ads Conversion ab Februar 2026: höchstens 34 pro Monat."
                        source="Quelle: Google-Ads-Konto von GL Sommer, September 2025 bis September 2026, abgerufen am 7. Oktober 2026."
                        note="Die strenge Aktion Ads Conversion zählt höchstens einmal pro Klick und existiert erst seit Februar 2026."
                    />

                    {/* Fun facts */}
                    <div className="cs-funfacts animate-up">
                        <h2>Fun Facts aus den Daten</h2>
                        <ol>
                            <li>
                                <strong>Im Juni denkt Hamburg an den Garten.</strong> 172 Kontaktaktionen im Juni 2026, 56 im September 2026. Die Saison ist im Werbekonto deutlicher zu sehen als in jedem Kalender.
                            </li>
                            <li>
                                <strong>Weniger Klicks, mehr Kontakte.</strong> Im März 2026 brachte die Smart-Kampagne 1.322 Klicks und 31 Kontaktaktionen. Im Juni 2026 brachten die neuen Kampagnen 818 Klicks und 172 Kontaktaktionen.
                            </li>
                            <li>
                                <strong>Hamburg kennt den Namen.</strong> 25 der 108 organischen Google-Klicks im September 2026 kamen über &quot;gl sommer&quot; und &quot;gl sommer gmbh&quot;, jeweils auf Position 1.
                            </li>
                            <li>
                                <strong>Google ist nachsichtig.</strong> Auch bei &quot;napflasterarbeiten hamburg&quot; zeigte Google im September 2026 GL Sommer, auf Position 1,3 (3 Einblendungen). Tippfehler im Suchfeld sind offenbar kein Hindernis.
                            </li>
                        </ol>
                    </div>

                    <h2 className="animate-up">Was ich gelernt habe</h2>
                    <p className="animate-up">
                        Hier stand früher eine viel größere Zahl: über 700 &quot;lokale Aktionen&quot; in einem Monat. Sie stammte aus einem einzigen Monat, März 2026, aus der Smart-Kampagne vor meinem Umbau. Und 597 dieser Aktionen waren Interaktionen mit dem Unternehmensprofil bei Google, keine Anfragen. Ich habe die Zahl gestrichen. Die Lehre daraus gebe ich jedem Kunden mit: Bevor man eine Conversion feiert, schaut man nach, was sie eigentlich zählt.
                    </p>
                    <p className="animate-up">
                        Deshalb stehen oben zwei Zählweisen. &quot;Kontakt (1)&quot; ist weit und kann mehrere Kontakte pro Klick zählen. Die strenge &quot;Ads Conversion&quot; zählt höchstens einmal pro Klick: 154 von April bis September 2026, also 45,19 EUR je Conversion. Die Wahrheit liegt irgendwo dazwischen, und wie viele echte Aufträge daraus wurden, weiß nur GL Sommer.
                    </p>
                    <p className="animate-up">
                        Und SEO? Die organischen Klicks sind seit März 2026 stabil, ohne klaren Trend: 131 im April, 108 im September 2026. &quot;pflasterarbeiten hamburg&quot; stand schon im Februar 2026, als ich anfing, auf Position 2,4. Das war eine Stärke von GL Sommer, kein Ergebnis meiner Arbeit, und so steht es hier jetzt auch.
                    </p>

                    <div className="cs-limits animate-up">
                        <p><strong>Ehrliche Grenzen:</strong> Der Umbau fiel in die Gartensaison. Saison und Umbau lassen sich mit diesen Daten nicht sauber trennen, die Kurven zeigen einen Zusammenhang, keinen Beweis.</p>
                        <p>Quellen: Google-Ads-Konto und Google Search Console von GL Sommer, abgerufen am 7. Oktober 2026. Search-Console-Daten liegen erst ab 16. Februar 2026 vor.</p>
                    </div>

                    {/* Key Takeaway */}
                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Ein Werbekonto sauber aufzubauen bringt messbar etwas: 11,06 EUR statt 27,15 EUR je Kontaktaktion. Aber die wichtigste Arbeit war, die Zählung ehrlich zu machen. Erst dann sieht man, ob ein Euro Werbung eine Anfrage bringt oder nur einen Profilaufruf.
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
                        <Link href="/leistungen/google-ads" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Google Ads Betreuung</h3>
                            <p>Suchkampagnen statt Blackbox, mit ehrlicher Zählung der Kontakte. Ab 500 &euro; im Monat.</p>
                        </Link>
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO für lokale Unternehmen</h3>
                            <p>Technische Grundlagen und Inhalte, die in Hamburg gefunden werden. Ab 1.000 &euro; im Monat.</p>
                        </Link>
                        <Link href="/leistungen/website-audit" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Website-Audit</h3>
                            <p>Kostenlose Erstanalyse: Performance, SEO und Conversion-Potenzial Ihrer aktuellen Website.</p>
                        </Link>
                        <Link href="/wissen/google-business-profile-optimieren" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Google-Unternehmensprofil</h3>
                            <p>Was ein gepflegtes Profil bringt und was seine Zahlen wirklich messen.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Sie sind nicht sicher, was Ihre Google-Ads-Conversions eigentlich zählen? Im kostenlosen Erstgespräch schaue ich mit Ihnen in Ihr Konto." />
            </AutoLinks>
        </>
    );
}
