import Link from 'next/link';
import AutoLinks from '../../../src/components/AutoLinks';
import Image from 'next/image';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import SubpageToc from '../../../src/components/SubpageToc';
import ServiceCta from '../../../src/components/ServiceCta';
import CaseChart from '../../../src/components/CaseChart';
import '../../../src/styles/case-study.css';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/blitz-hamburg`;
const IMG = '/referenzen/blitz-hamburg';

const TITLE = 'Blitz Hamburg: 24 auf 374 Google-Klicks nach Relaunch';
const DESCRIPTION = 'Fallstudie Blitz Hamburg: neue Website, Google Ads und Ratgeber-Seiten. Organische Google-Klicks von 24 (April 2026) auf 374 (September 2026), mit Quellen.';

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        siteName: 'webseite.hamburg',
        locale: 'de_DE',
        title: 'Blitz Hamburg Case Study: von 24 auf 374 Google-Klicks im Monat',
        description: 'Relaunch im Mai 2026, Ratgeber zu Sperrmüll und Entrümpelungskosten, durchschnittliche Google-Position von 21,1 auf 10,5. Alle Zahlen mit Monat und Quelle.',
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

export default function BlitzHamburgCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Blitz Hamburg: von 24 auf 374 organische Google-Klicks im Monat',
        description: DESCRIPTION,
        url: PAGE_URL,
        datePublished: '2026-03-19',
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
        image: `${SITE_URL}/referenzen/Blitz-hero.webp`,
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: `${SITE_URL}/referenzen` },
            { '@type': 'ListItem', position: 3, name: 'Blitz Hamburg', item: PAGE_URL },
        ],
    };

    return (
        <>
            <AutoLinks path="/referenzen/blitz-hamburg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            {/* Hero */}
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Referenzen', href: '/referenzen' },
                        { label: 'Blitz Hamburg' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">Webdesign + Google Ads + SEO</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        Blitz Hamburg: von 24 auf 374 Google-Klicks im Monat, seit dem Relaunch im Mai 2026.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Ein Hamburger Betrieb für Entrümpelung und Sanierung, eine junge Domain und ein Markt voller alteingesessener Wettbewerber. Heute findet Hamburg Blitz vor allem über eine Frage, die jeder irgendwann stellt: Wohin mit dem Sperrmüll?
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 19. März 2026, aktualisiert am 7. Oktober 2026
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid cs-metrics-4 animate-up">
                        <MetricCard value="374" label="Organische Klicks" detail="September 2026 (April 2026: 24)" />
                        <MetricCard value="10,5" label="Ø Google-Position" detail="September 2026 (April 2026: 21,1)" />
                        <MetricCard value="75.263" label="Impressionen" detail="September 2026 (April 2026: 2.652)" />
                        <MetricCard value="87" label="Kontaktklicks" detail="September 2026, Untergrenze (März 2026: 57)" />
                    </div>
                </div>
            </section>

            {/* Website Screenshot */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="cs-image-showcase animate-up">
                        <Image
                            src="/referenzen/Blitz-hero.webp"
                            alt="Startseite von blitz-hamburg.de mit Hero-Bereich für Sanierung und Entrümpelung in Hamburg"
                            width={1200}
                            height={781}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">blitz-hamburg.de: schnell, mobil zuerst gedacht, Anruf und WhatsApp immer in Reichweite.</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="subpage-content section light-bg cs-story">
                <div className="container subpage-body">
                    <SubpageToc />
                    <h2 className="animate-up">Die Ausgangslage</h2>
                    <p className="animate-up">
                        Blitz Hamburg bietet Entrümpelung, Haushaltsauflösung, Sanierung und Bodenverlegung in Hamburg an. Die Domain blitz-hamburg.de ist seit Ende 2025 in der Google Search Console. Eine neue Domain hat bei Google keine Geschichte, keine Links und kein Vertrauen. Entsprechend bescheiden war der Start: Im April 2026 kamen 24 Klicks aus der normalen Google-Suche, bei einer durchschnittlichen Position von 21,1. Das ist Seite drei. Dort sucht niemand.
                    </p>

                    <h2 className="animate-up">Was ich gemacht habe</h2>
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-md)', fontSize: '1.3rem' }}>
                        1. Eine schnelle Website mit kurzen Wegen zum Kontakt
                    </h3>
                    <p className="animate-up">
                        Die erste Version habe ich von Grund auf gebaut, ohne Baukasten und ohne WordPress: Leistungsseiten, Einsatzgebiete mit Bildern für die Hamburger Stadtteile, eine Projekt-Galerie mit echten Vorher-Nachher-Fotos und den Blitz-Check, einen KI-Kostenschätzer mit Fotoupload. Anruf und WhatsApp sind auf jeder Seite einen Daumen entfernt.
                    </p>
                    <div className="cs-before-after animate-up">
                        <BeforeAfter label="Performance (Lighthouse)" before="35/100" after="99/100" />
                        <BeforeAfter label="SEO (Lighthouse)" before="43/100" after="100/100" />
                        <BeforeAfter label="JS-Bundle" before="944 KB" after="228 KB" />
                        <BeforeAfter label="Schriftdatei" before="TTF, 391 KB" after="WOFF2, 66 KB" />
                    </div>
                    <div className="cs-image-showcase animate-up" style={{ marginTop: 'var(--space-md)' }}>
                        <Image
                            src={`${IMG}/ai-check.webp`}
                            alt="Blitz-Check: KI-Kostenschätzer mit Fotoupload und Projektbeschreibung"
                            width={1094}
                            height={673}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">Der Blitz-Check: Projekt beschreiben, Foto hochladen, Preisrahmen bekommen.</p>
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        2. Google Ads für die Zeit, in der Google die Seite noch nicht kennt
                    </h3>
                    <p className="animate-up">
                        Seit Februar 2026 läuft eine Suchkampagne für Entrümpelung und Haushaltsauflösung in Hamburg. Sie bringt Anfragen, solange die organische Sichtbarkeit noch wächst. Was die Klicks dort kosten, steht ehrlich weiter unten, und die ausführliche Auswertung von 90 Tagen aus diesem Konto finden Sie im Artikel <Link href="/wissen/google-ads-kosten">Google Ads Kosten: 90 Tage aus einem echten Konto</Link>.
                    </p>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        3. Relaunch am 3. Mai 2026 mit Ratgebern statt Werbesprech
                    </h3>
                    <p className="animate-up">
                        Am 3. Mai 2026 ging die neue Version online, mit einer Reihe von Ratgeber-Seiten zu Fragen, die Hamburger wirklich googeln: Sperrmüll in Hamburg, was eine Entrümpelung kostet, wohin mit Bauschutt und Steinen aus dem Garten, Gartenhaus-Abriss, Asbest erkennen, Einbauküche ausbauen. Jede Seite beantwortet die Frage zuerst und erwähnt Blitz erst danach. Wer nur wissen will, wie die Sperrmüllabholung funktioniert, bekommt die Antwort. Wer merkt, dass er das nicht allein schleppen will, findet den Anruf-Button.
                    </p>

                    {/* Results */}
                    <h2 className="animate-up">Was passiert ist</h2>
                    <p className="animate-up">
                        Im Mai 2026 kamen 61 organische Klicks, im Juni 147, im Juli 289 und im August 406. Der August 2026 ist bisher der Rekordmonat, der stärkste einzelne Tag war der 31. August 2026 mit 28 Klicks. Im September 2026 waren es 374 Klicks bei 75.263 Impressionen. Rund 94 Prozent dieser Klicks (352 von 374) kamen über Suchanfragen ohne den Namen Blitz. Das heißt: Die Leute kannten die Firma vorher nicht, sie haben eine Frage gestellt und Blitz gefunden.
                    </p>

                    <CaseChart
                        slug="blitz-organische-klicks"
                        title="Organische Google-Klicks auf blitz-hamburg.de pro Monat"
                        alt="Säulendiagramm: organische Google-Klicks von Blitz Hamburg pro Monat. Dezember 2025 bis April 2026 zwischen 6 und 32 Klicks, nach dem Relaunch im Mai 2026 Anstieg auf 406 im August und 374 im September 2026."
                        source="Quelle: Google Search Console (blitz-hamburg.de), Dezember 2025 bis September 2026, abgerufen am 7. Oktober 2026."
                        note="Nur Klicks aus der normalen Google-Suche, ohne Anzeigen. Relaunch am 3. Mai 2026."
                    />

                    <p className="animate-up">
                        Die durchschnittliche Position verbesserte sich von 21,1 im April 2026 auf 10,5 im September 2026. Das ist ein Mittelwert über alle Suchanfragen, bei denen Blitz eingeblendet wurde, also nicht der Platz für ein einzelnes Wort. Er zeigt aber die Richtung: von Seite drei an den Rand von Seite eins.
                    </p>

                    <CaseChart
                        slug="blitz-position"
                        title="Durchschnittliche Google-Position von blitz-hamburg.de (oben ist besser)"
                        alt="Liniendiagramm: durchschnittliche Google-Position von Blitz Hamburg. Januar 2026 38,2, April 2026 21,1, danach stetige Verbesserung auf 10,5 im September 2026."
                        source="Quelle: Google Search Console (blitz-hamburg.de), Januar bis September 2026, abgerufen am 7. Oktober 2026."
                        note="Durchschnitt aller Einblendungen, nicht die Position eines einzelnen Suchbegriffs."
                    />

                    <p className="animate-up">
                        Und die Kontakte? Klicks auf Anrufen, WhatsApp und E-Mail lagen im März 2026 bei 57, im Mai und Juni 2026 bei 30 und 24 und ab Juli 2026 bei 83, 78 und 87 (September). Diese Zahlen sind eine Untergrenze, denn gezählt wird nur, wer der Statistik zugestimmt hat. Und ein Klick auf den Anruf-Button ist noch kein Auftrag. Wie viele Aufträge daraus wurden, weiß nur Blitz selbst, deshalb steht hier dazu keine Zahl.
                    </p>

                    <CaseChart
                        slug="blitz-kontaktklicks"
                        title="Kontaktklicks auf blitz-hamburg.de pro Monat (Anruf, WhatsApp, E-Mail)"
                        alt="Säulendiagramm: Kontaktklicks auf blitz-hamburg.de. März 2026 57, April 42, Mai 30, Juni 24, Juli 83, August 78, September 2026 87."
                        source="Quelle: Umami-Statistik von blitz-hamburg.de, März bis September 2026, abgerufen am 7. Oktober 2026."
                        note="Alle Kanäle, auch Besucher aus Anzeigen. Untergrenze: gezählt wird nur nach Cookie-Zustimmung."
                    />

                    {/* Fun facts */}
                    <div className="cs-funfacts animate-up">
                        <h2>Fun Facts aus den Daten</h2>
                        <ol>
                            <li>
                                <strong>Hamburg googelt Sperrmüll.</strong> Die Suchanfrage mit den meisten Klicks im September 2026 war &quot;sperrmüll hamburg&quot; (12 Klicks, 3.339 Impressionen). Die Ratgeber-Seite zum Sperrmüll brachte allein 124 Klicks, mehr als die Startseite mit 73.
                            </li>
                            <li>
                                <strong>Platz zwei: der Recyclinghof.</strong> &quot;recyclinghof bahrenfeld kosten&quot; brachte im September 2026 10 Klicks, die Schreibweise mit Punkt &quot;recyclinghof bahrenfeld.kosten&quot; noch einmal 7. Wer selbst fahren will, ist nicht sofort Kunde. Aber er kennt Blitz jetzt.
                            </li>
                            <li>
                                <strong>Hamburg schreibt lieber, als anzurufen.</strong> Im August 2026 überholten die WhatsApp-Klicks erstmals die Anrufe (37 zu 31), im September 2026 wieder (42 zu 40).
                            </li>
                            <li>
                                <strong>Vom Nischenwissen zur Vielfalt.</strong> Im April 2026 listete die Search Console 222 verschiedene Suchanfragen, für die blitz-hamburg.de eingeblendet wurde, im September 2026 waren es 2.339. Darunter Perlen wie &quot;gehwegplatten entsorgen hamburg&quot; auf Position 3,2.
                            </li>
                        </ol>
                    </div>

                    <h2 className="animate-up">Was ich gelernt habe</h2>
                    <p className="animate-up">
                        Eine junge Domain gewinnt nicht über das Wort, das alle wollen. &quot;entrümpelung hamburg&quot; stand im September 2026 im Schnitt auf Position 14,6. Gewonnen hat Blitz über die Fragen davor: Was kostet das, wohin damit, was darf in den Sperrmüll. Wer diese Fragen ehrlich beantwortet, wird gefunden, bevor jemand eine Firma sucht.
                    </p>
                    <p className="animate-up">
                        Zweite Lektion: Klicks bei Google Ads werden teurer. In der Suchkampagne kostete ein Klick im März 2026 im Schnitt 2,57 EUR, im September 2026 5,20 EUR (Google Ads). Jeder Klick, der organisch kommt, muss nicht gekauft werden. Genau deshalb lohnt sich der Ratgeber-Aufbau neben den Anzeigen.
                    </p>

                    <div className="cs-limits animate-up">
                        <p><strong>Ehrliche Grenzen:</strong> Die Kurven zeigen, was nach dem Relaunch passiert ist, nicht zwingend warum. Saison, Nachfrage und Google-Updates sind nicht herausgerechnet.</p>
                        <p>Quellen: Google Search Console, Umami und Google Ads von blitz-hamburg.de, abgerufen am 7. Oktober 2026. Auftragszahlen und Umsatz liegen mir nicht vor, deshalb nenne ich keine.</p>
                    </div>

                    {/* Key Takeaway */}
                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Eine schnelle Website ist die Grundlage, Anzeigen überbrücken die ersten Monate, und Ratgeber-Seiten zu echten Fragen bringen die Besucher, die man nicht mehr pro Klick bezahlen muss. Bei Blitz Hamburg wurden daraus 374 organische Klicks im September 2026, nach 24 im April.
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
                        <Link href="/leistungen/webdesign-handwerker" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Website für Handwerker</h3>
                            <p>Schnelle Websites mit kurzen Wegen zu Anruf und WhatsApp, gebaut für Betriebe in Hamburg.</p>
                        </Link>
                        <Link href="/leistungen/google-ads" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Google Ads Betreuung</h3>
                            <p>Suchkampagnen für lokale Unternehmen, mit sauberer Messung der Kontakte. Ab 500 &euro; im Monat.</p>
                        </Link>
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO für lokale Unternehmen</h3>
                            <p>Ratgeber-Seiten und technische Grundlagen, die dauerhaft Besucher bringen. Ab 1.000 &euro; im Monat.</p>
                        </Link>
                        <Link href="/leistungen/website-audit" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Website-Audit</h3>
                            <p>Kostenlose Erstanalyse: Performance, SEO und Conversion-Potenzial Ihrer aktuellen Website.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Sie wollen wissen, welche Fragen Ihre Kunden googeln, bevor sie anrufen? Im kostenlosen Erstgespräch schaue ich mir Ihre Seite und Ihre Suchdaten an." />
            </AutoLinks>
        </>
    );
}
