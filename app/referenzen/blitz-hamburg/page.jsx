import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/blitz-hamburg`;
const IMG = '/referenzen/blitz-hamburg';

export const metadata = {
    title: 'Blitz Hamburg Case Study | Von Null auf stabile Auftragslage in 3 Monaten',
    description: 'Wie ein Hamburger Handwerksbetrieb durch Website-Neubau, Google Ads und SEO in 3 Monaten 5.000+ Impressionen, Top-Positionen und kontinuierliche Kundenanfragen erreicht hat.',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Blitz Hamburg Case Study | Von Null auf stabile Auftragslage',
        description: 'Website-Neubau, Google Ads und lokale SEO fur einen Handwerksbetrieb. 5.000+ Impressionen, 2x Conversion-Steigerung, Lighthouse 99/100/100/100.',
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
        image: `${SITE_URL}${IMG}/website.webp`,
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: PAGE_URL },
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
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 19. Marz 2026
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid animate-up">
                        <MetricCard value="5.000+" label="Impressionen" detail="in 3 Monaten" />
                        <MetricCard value="~2 &euro;" label="CPC" detail="Sanierung & Entrumpelung" />
                        <MetricCard value="33%+" label="Auktionsgewinnrate" detail="Google Ads" />
                        <MetricCard value="90%" label="Obere Anzeigenposition" detail="Upper Ads Block" />
                        <MetricCard value="2x" label="Conversion-Steigerung" detail="Google Business Profil" />
                        <MetricCard value="99+" label="Lighthouse Score" detail="Alle Kategorien" />
                    </div>
                </div>
            </section>

            {/* Website Screenshot */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="cs-image-showcase animate-up">
                        <Image
                            src={`${IMG}/website.webp`}
                            alt="Blitz Hamburg Website — Startseite mit Hero-Bereich, Kontaktdaten und Leistungsubersicht"
                            width={1470}
                            height={956}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">Die fertige Website: blitz-hamburg.de — schnell, mobiloptimiert, konversionsorientiert.</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Ausgangssituation</h2>
                    <p className="animate-up">
                        Blitz Hamburg ist ein Handwerksbetrieb, der Entrumpelung, Haushaltsauflosung, Sanierung und Bodenverlegung in Hamburg anbietet. Vor dem Projekt: keine professionelle Website, keine Online-Sichtbarkeit, Stagnation bei der Kundengewinnung. Der gesamte Markt wurde von Wettbewerbern dominiert, die seit Jahren etablierte Online-Prasenz hatten.
                    </p>
                    <p className="animate-up">
                        Die Herausforderung: In einem wettbewerbsintensiven lokalen Markt — mit Keywords wie <strong>&bdquo;Entrumpelung Hamburg&ldquo;</strong> (2.400 monatliche Suchen, CPC 18,41 &euro;) und <strong>&bdquo;Haushaltsauflosung Hamburg&ldquo;</strong> (1.600 monatliche Suchen, CPC 20,25 &euro;) — von Null auf eine stabile Auftragslage zu kommen. Und zwar schnell.
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
                        Die Website wurde komplett neu entwickelt — keine Templates, kein WordPress. Individueller Code, optimiert fur maximale Geschwindigkeit und Conversion. Uber 18 Seiten, jede auf eine konkrete Suchabsicht ausgerichtet: 4 Leistungsseiten (Entrumpelung, Haushaltsauflosung, Sanierung, Bodenverlegung), eine Einsatzgebiete-Seite mit Stadtteil-Ubersicht, eine Projekt-Galerie mit Vorher/Nachher-Fotos, 5 SEO-Ratgeber-Artikel und mehr.
                    </p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>18+ optimierte Seiten</h3>
                            <p>Leistungsseiten, Einsatzgebiete, Projekt-Galerie, Preise, FAQ, Ratgeber-Artikel — jede Seite zielt auf ein spezifisches Keyword und eine konkrete Nutzerabsicht.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>104 Stadtteil-Bilder</h3>
                            <p>KI-generierte, stadtteilspezifische Bilder fur alle 104 Hamburger Stadtteile. Jedes Bild zeigt den echten Charakter des Viertels — ein einzigartiges visuelles Signal auf der Einsatzgebiete-Seite.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>AI-Kostenschatzer (Blitz-Check)</h3>
                            <p>Ein Gemini-basiertes Tool, das Kunden sofort eine Preisschatzung gibt — inklusive Fotoupload. Senkt die Hemmschwelle fur Anfragen und qualifiziert Leads vor dem Erstgesprach.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>5 SEO-Ratgeber</h3>
                            <p>Informationsseiten zu Entrumpelung Kosten, Haushaltsauflosung Kosten, Wohnungsauflosung, Kellerentrumpelung und Entrumpelungsfirma finden — reiner organischer Traffic.</p>
                        </div>
                    </div>

                    {/* AI Check Screenshot */}
                    <div className="cs-image-showcase animate-up" style={{ marginTop: 'var(--space-md)' }}>
                        <Image
                            src={`${IMG}/ai-check.webp`}
                            alt="Blitz-Check: AI-basierter Kostenschatzer mit Fotoupload und Projektbeschreibung"
                            width={1094}
                            height={673}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">Der Blitz-Check: Kunden beschreiben ihr Projekt und laden ein Foto hoch — die KI schatzt sofort den Preis.</p>
                    </div>

                    {/* Trust & Conversion Architecture */}
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Gebaut fur Vertrauen und Conversion
                    </h3>
                    <p className="animate-up">
                        Jede Seite ist strategisch aufgebaut: Der Besucher sieht sofort, was Blitz Hamburg macht, warum sie die richtige Wahl sind und wie er Kontakt aufnehmen kann. Die Seitenstruktur folgt einem klaren Conversion-Pfad — vom Problem uber den Beweis zur Anfrage.
                    </p>
                    <p className="animate-up">
                        Vertrauenssignale sind uberall prasent: echte Vorher/Nachher-Fotos, Google-Bewertungen direkt auf den Seiten, Festpreis-Garantie, transparente Preise und ein sofortiger Kontakt uber Telefon, WhatsApp oder Formular. Das Ergebnis: Besucher, die auf einer Blitz-Hamburg-Seite landen, wissen innerhalb von Sekunden, dass sie hier richtig sind — und handeln entsprechend. Die Seiten sind nicht einfach schon, sie sind strategisch durchdacht und liefern messbare Ergebnisse.
                    </p>

                    {/* Lighthouse Screenshot */}
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Lighthouse: 99 / 100 / 100 / 100
                    </h3>
                    <p className="animate-up">
                        Alle vier Lighthouse-Kategorien im grunen Bereich — Performance 99, Accessibility 100, Best Practices 100, SEO 100. Erreicht durch Pre-Rendering, WebP-Bilder, WOFF2-Fonts und optimiertes JavaScript.
                    </p>
                    <div className="cs-image-showcase animate-up" style={{ maxWidth: '500px' }}>
                        <Image
                            src={`${IMG}/lighthouse-score.webp`}
                            alt="Google Lighthouse Scores: Performance 99, Accessibility 100, Best Practices 100, SEO 100"
                            width={454}
                            height={430}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                    </div>

                    {/* Performance Before/After */}
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Technische Optimierung: Vorher &rarr; Nachher
                    </h3>
                    <div className="cs-before-after animate-up">
                        <BeforeAfter label="Performance Score" before="35/100" after="99/100" />
                        <BeforeAfter label="SEO Score" before="43/100" after="100/100" />
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
                        Wahrend die organische Sichtbarkeit aufgebaut wird, liefern Google Ads sofortige, qualifizierte Anfragen. Die Kampagnen sind hochspezifisch auf lokale Suchabsichten ausgerichtet — nicht breite Keywords, sondern exakte Dienstleistungen in Hamburg mit gezielten Landingpages fur jede Kampagne.
                    </p>

                    <div className="cs-ads-results animate-up">
                        <div className="cs-ads-stat">
                            <div className="cs-ads-stat-header">
                                <span className="cs-ads-stat-value">~2 &euro;</span>
                                <span className="cs-ads-stat-label">Cost per Click</span>
                            </div>
                            <p>Bei einem Markt-CPC von 18-20 &euro; fur die organischen Keywords. Die Ads-Kampagnen erreichen Klicks zu einem Bruchteil der Kosten, weil sie auf Long-Tail-Varianten und spezifische Suchbegriffe zielen.</p>
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
                            <p>90% aller Anzeigeneinblendungen erscheinen im oberen Ads-Block — dort, wo die hochsten Klickraten sind. Keine &bdquo;unten auf der Seite&ldquo;-Platzierungen.</p>
                        </div>
                    </div>

                    {/* Pillar 3: Local SEO + Google Business */}
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        3. Lokale SEO & Google Business Optimierung
                    </h3>
                    <p className="animate-up">
                        Parallel zu den Ads wurde eine langfristige SEO-Strategie implementiert: eine Einsatzgebiete-Seite mit allen Hamburger Stadtteilen, gezielte Ads-Landingpages fur die wichtigsten Gebiete, und 5 reine SEO-Ratgeber-Artikel, die auf informationelle Suchanfragen abzielen. Dazu ein vollstandig optimiertes Google Business Profil.
                    </p>

                    {/* Before/After Screenshot */}
                    <div className="cs-image-showcase animate-up" style={{ marginTop: 'var(--space-md)' }}>
                        <Image
                            src={`${IMG}/before-after.webp`}
                            alt="Vorher/Nachher-Galerie: Sanierungsprojekt mit Wandsanierung — vorher beschadigte Wande, nachher frisch renoviert"
                            width={1164}
                            height={838}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">Die Projekt-Galerie zeigt echte Vorher/Nachher-Fotos — Vertrauen durch Transparenz.</p>
                    </div>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Google Business 2x Conversion</h3>
                            <p>Profil vollstandig optimiert: korrekte Kategorien, Offnungszeiten, Fotos, regelmasige Beitrage. Ergebnis: Conversion-Rate verdoppelt, 5.0 Sterne bei 24 Bewertungen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Einsatzgebiete mit 104 Bildern</h3>
                            <p>Eine zentrale Ubersichtsseite mit allen Hamburger Stadtteilen. Jeder Stadtteil mit KI-generiertem Bild, das den echten Charakter des Viertels zeigt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Proof-basierte Seiten</h3>
                            <p>Vorher/Nachher-Fotos, echte Google-Bewertungen und konkrete Projektreferenzen direkt auf den Seiten. Vertrauen vor dem Klick.</p>
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

                    {/* Events Screenshot */}
                    <div className="cs-image-showcase animate-up" style={{ marginTop: 'var(--space-md)' }}>
                        <Image
                            src={`${IMG}/events.webp`}
                            alt="Conversion-Events der letzten 30 Tage: Anrufe, E-Mails, WhatsApp-Nachrichten, Formular-Anfragen und Rechner-Nutzungen"
                            width={1117}
                            height={677}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">Conversion-Events der letzten 30 Tage: Anrufe, E-Mails, WhatsApp, Formulare, Google-Bewertungen und Rechner-Nutzungen — alles getrackt.</p>
                    </div>

                    <div className="cs-results-grid animate-up">
                        <div className="cs-result-card">
                            <h3>5.000+ Impressionen</h3>
                            <p>Organische Sichtbarkeit in Google innerhalb von 3 Monaten. 3-5% CTR auf relevante Suchanfragen — fur eine komplett neue Domain ein starker Wert.</p>
                        </div>
                        <div className="cs-result-card">
                            <h3>Kontinuierliche Anfragen</h3>
                            <p>Statt Stagnation: ein stetiger Strom qualifizierter Kundenanfragen uber mehrere Kanale — Anrufe, WhatsApp, E-Mail und Kontaktformular.</p>
                        </div>
                        <div className="cs-result-card">
                            <h3>5.0 Sterne, 24 Bewertungen</h3>
                            <p>500+ zufriedene Kunden. Die Google-Bewertungen werden aktiv genutzt als Vertrauenssignal auf der Website und in den Ads.</p>
                        </div>
                        <div className="cs-result-card">
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
                            description="Kernseiten aufgebaut: Startseite, Leistungsseiten, Kontakt, Preise. Erste Google Ads-Kampagnen gestartet. Sofortige Sichtbarkeit durch bezahlte Suche."
                        />
                        <TimelineStep
                            num="02"
                            title="Content & SEO-Expansion"
                            description="Einsatzgebiete-Seite mit 104 KI-generierten Stadtteil-Bildern. 5 SEO-Ratgeber-Artikel erstellt. Gezielte Landingpages fur Ads-Kampagnen. Google Business Profil optimiert."
                        />
                        <TimelineStep
                            num="03"
                            title="Performance-Optimierung"
                            description="Pre-Rendering implementiert. JS-Bundle von 944 KB auf 228 KB reduziert. Bilder zu WebP konvertiert. Lighthouse-Scores auf 99/100/100/100 gebracht."
                        />
                        <TimelineStep
                            num="04"
                            title="AI-Features & Feinschliff"
                            description="Gemini-basierter Blitz-Check (Kostenschatzer mit Fotoupload) integriert. Projekt-Galerie mit Vorher/Nachher-Fotos. Ads-Kampagnen optimiert. Conversion-Tracking uber alle Kanale verfeinert."
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
                            <span className="subpage-stat-value">18+</span>
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
                            <span className="subpage-stat-value">5</span>
                            <span className="subpage-stat-label">SEO-Ratgeber</span>
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
                            <p>Individuelle Websites, die schnell laden und Besucher zu Kunden machen. Ab 2.000 &euro;.</p>
                        </Link>
                        <Link href="/leistungen/google-ads" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Google Ads Management</h3>
                            <p>Gezielte Kampagnen fur lokale Unternehmen. Maximale Sichtbarkeit bei minimierten Kosten. Ab 500 &euro;/Mt.</p>
                        </Link>
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO fur lokale Unternehmen</h3>
                            <p>Langfristige organische Sichtbarkeit durch technische und inhaltliche Optimierung. Ab 1.000 &euro;/Mt.</p>
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
