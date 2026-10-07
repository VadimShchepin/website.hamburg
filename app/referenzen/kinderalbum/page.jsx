import Link from 'next/link';
import AutoLinks from '../../../src/components/AutoLinks';
import Image from 'next/image';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';
import CaseChart from '../../../src/components/CaseChart';
import '../../../src/styles/case-study.css';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/kinderalbum`;

const TITLE = 'KinderAlbum: DSGVO-Schulfotos, 23 auf 792 Google-Klicks';
const DESCRIPTION = 'Fallstudie KinderAlbum (dsgvoschulfotos.de): DSGVO-konforme Foto-Plattform für Schulen und Kitas. Organische Google-Klicks von 23 (Februar) auf 792 (September 2026).';

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'KinderAlbum Case Study: von 23 auf 792 Google-Klicks im Monat',
        description: 'Eine DSGVO-Plattform für Schulfotos und Ratgeber zu den Fragen, die Eltern und Schulen wirklich googeln. Mit Grafiken, Quellen und ehrlichen Grenzen.',
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

export default function KinderAlbumCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'KinderAlbum: von 23 auf 792 organische Google-Klicks im Monat',
        description: DESCRIPTION,
        url: PAGE_URL,
        datePublished: '2026-03-20',
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
        image: `${SITE_URL}/referenzen/KinderAlbum.webp`,
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
            <AutoLinks path="/referenzen/kinderalbum">
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
                        <span className="wissen-card-time">SaaS-Produkt + SEO</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        KinderAlbum: von 23 auf 792 Google-Klicks im Monat, und Schulen, die wirklich Fotos hochladen.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Klassenfotos landen in Deutschland oft in WhatsApp-Gruppen, und irgendwann fragt jemand: Darf man das überhaupt? Für genau diese Frage habe ich KinderAlbum gebaut, eine DSGVO-konforme Foto-Plattform für Schulen, Kitas und Fotografen unter dsgvoschulfotos.de. Und dann die Antworten so aufgeschrieben, dass Google sie findet.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 20. März 2026, aktualisiert am 7. Oktober 2026
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid cs-metrics-4 animate-up">
                        <MetricCard value="792" label="Organische Klicks" detail="September 2026 (Februar 2026: 23)" />
                        <MetricCard value="6,2" label="Ø Google-Position" detail="September 2026, alle Suchanfragen" />
                        <MetricCard value="32.887" label="Impressionen" detail="September 2026 (Februar 2026: 777)" />
                        <MetricCard value="14" label="Konten mit neuen Alben" detail="September 2026 (April 2026: 2)" />
                    </div>
                </div>
            </section>

            {/* Website Screenshot */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="cs-image-showcase animate-up">
                        <Image
                            src="/referenzen/KinderAlbum.webp"
                            alt="KinderAlbum: DSGVO-konforme Schulfoto-Plattform mit Bereichen für Lehrkräfte und Eltern"
                            width={1200}
                            height={781}
                            quality={85}
                            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                        <p className="cs-image-caption">KinderAlbum unter dsgvoschulfotos.de: Fotos teilen mit Einwilligung, Rollen und Protokoll.</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="subpage-content section light-bg cs-story">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Ausgangslage</h2>
                    <p className="animate-up">
                        Schulen und Kitas teilen Fotos über Messenger, USB-Sticks oder offene Cloud-Ordner. Eltern wissen nicht, wer die Bilder ihrer Kinder sieht, und Schulen können Einwilligungen kaum nachweisen. Das Thema ist heikel, die Suchenden sind verunsichert, und Google kannte dsgvoschulfotos.de im Februar 2026 kaum: 23 Klicks und 777 Impressionen im ganzen Monat, bei gerade einmal 14 Suchanfragen, die die Search Console überhaupt auflistete.
                    </p>

                    <h2 className="animate-up">Was ich gemacht habe</h2>
                    <h3 className="animate-up" style={{ marginTop: 'var(--space-md)', fontSize: '1.3rem' }}>
                        1. Ein Produkt, bei dem Datenschutz die Architektur ist
                    </h3>
                    <p className="animate-up">
                        KinderAlbum ist keine Foto-App mit Cookie-Banner, sondern von der Datenbank an auf Einwilligung gebaut. Lehrkräfte verwalten Klassen und Alben, Eltern sehen nur Fotos, für die eine aktive Einwilligung vorliegt, Fotografen haben einen eigenen Bereich mit Galerie-Link und optionaler PIN.
                    </p>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Zeitversionierte Einwilligung</h3>
                            <p>Eine Einwilligung wird nie überschrieben. Jede Änderung erzeugt einen neuen Datensatz mit Zeitstempel, die Historie bleibt nachvollziehbar.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>76 Row-Level-Security-Policies</h3>
                            <p>PostgreSQL-Regeln auf 19 Tabellen trennen Schulen auf Datenbankebene. Ein Fehler im Code kann keine Fotos über Schulgrenzen hinweg zeigen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Protokoll</h3>
                            <p>Anmeldungen, Downloads und Änderungen an Einwilligungen werden protokolliert. Bei einer Datenschutzanfrage liegt die Spur vor.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Private Speicherung</h3>
                            <p>Fotos liegen in privaten Speichern und werden nur über signierte, ablaufende Links ausgeliefert.</p>
                        </div>
                    </div>
                    <p className="animate-up">
                        Wie die Galerie schnell und sicher wurde, steht ausführlich in <Link href="/wissen/case-study-fotogalerie-performance">der Case Study zur Galerie-Performance</Link> und in <Link href="/wissen/dsgvo-fotoplattform-sicherheit-performance">DSGVO-Fotoplattform: Sicherheit und Performance</Link>.
                    </p>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        2. Ratgeber und Vorlagen zu den Fragen, die wirklich gestellt werden
                    </h3>
                    <p className="animate-up">
                        Vor allem im März und Juni 2026 habe ich die Inhalte ausgebaut: Ratgeber zu Fotos von Kindern ohne Einwilligung, zu Kindergartenfotos und Datenschutz, zum Finden alter Klassenfotos, eine Vorlage für die Einwilligung zu Schulfotos und ein ehrlicher Vergleich mit Family Album. Jede Seite beantwortet die Frage vollständig, auch wenn die Antwort nicht &quot;kaufen Sie KinderAlbum&quot; lautet.
                    </p>

                    {/* Results */}
                    <h2 className="animate-up">Was passiert ist</h2>
                    <p className="animate-up">
                        Im März 2026 kamen 52 organische Klicks, im Mai 302, im Juni 570 und im September 2026 792, bei 32.887 Impressionen und einer durchschnittlichen Position von 6,2. Nur 36 der 792 Klicks im September kamen über den Namen KinderAlbum oder die Domain. Der Rest kam über Fragen. Die Search Console listete im September 2026 497 verschiedene Suchanfragen, im Februar waren es 14.
                    </p>

                    <CaseChart
                        slug="kinderalbum-organische-klicks"
                        title="Organische Google-Klicks auf dsgvoschulfotos.de pro Monat"
                        alt="Säulendiagramm: organische Google-Klicks auf dsgvoschulfotos.de. Dezember 2025 8, Februar 2026 23, nach dem Inhaltsausbau ab März 2026 Anstieg auf 570 im Juni und 792 im September 2026."
                        source="Quelle: Google Search Console (dsgvoschulfotos.de), Dezember 2025 bis September 2026, abgerufen am 7. Oktober 2026."
                        note="Inhaltsausbau (Ratgeber, Vorlagen) vor allem im März und Juni 2026 laut Git-Historie."
                    />

                    <p className="animate-up">
                        Sichtbarkeit ist schön, Nutzung ist besser. Deshalb zähle ich Konten, die in einem Monat mindestens 10 Fotos in eine Galerie hochgeladen haben, ohne meine eigenen Test- und Betreiberkonten: 2 im April 2026, 8 im Juni und Juli, 4 im August und 14 im September 2026. Dahinter stehen Schulen, Kitas, einzelne Klassen und Fotografen. Insgesamt liegen 10.466 Fotos in Galerien (Stand 7. Oktober 2026, einschließlich Testkonten).
                    </p>

                    <CaseChart
                        slug="kinderalbum-aktive-konten"
                        title="Konten mit neuen Fotoalben pro Monat (mindestens 10 Fotos, ohne Testkonten)"
                        alt="Säulendiagramm: Konten mit neuen Fotoalben bei KinderAlbum. März 2026 0, April 2, Mai 2, Juni 8, Juli 8, August 4, September 2026 14."
                        source="Quelle: Produktionsdatenbank von KinderAlbum (Galerie-Uploads), März bis September 2026, abgerufen am 7. Oktober 2026."
                        note="Erkennbare Test- und Betreiberkonten sind ausgeschlossen. Kleine Zahlen: ein einzelnes Konto mehr oder weniger ist sichtbar."
                    />

                    <p className="animate-up">
                        Und die KI-Suche? Früher stand hier, KinderAlbum sei die Nummer eins in ChatGPT und Perplexity. Dafür habe ich keinen datierten, wiederholbaren Test, deshalb steht es hier nicht mehr. Was ich belegen kann: Im April 2026 kamen 12 Besuche direkt von chatgpt.com, im Februar 2026 3 von perplexity.ai (Umami, Monate mit weniger als 3 Besuchen sind nicht erfasst).
                    </p>

                    {/* Fun facts */}
                    <div className="cs-funfacts animate-up">
                        <h2>Fun Facts aus den Daten</h2>
                        <ol>
                            <li>
                                <strong>Die Frage mit dem flauen Gefühl.</strong> Die meistgeklickte Suchanfrage ohne Markennamen im September 2026 war &quot;fotos von kindern ohne einwilligung strafe&quot;: 13 Klicks auf Position 1,6. Die Ratgeber-Seite dazu brachte im selben Monat 83 Klicks.
                            </li>
                            <li>
                                <strong>Deutschland sucht seine alten Klassenfotos.</strong> &quot;klassenfotos finden ohne anmeldung&quot; brachte im September 2026 11 Klicks, &quot;wo kann man alte klassenfotos finden&quot; wurde 129 Mal eingeblendet. Nostalgie ist ein erstaunlich starkes Suchmotiv.
                            </li>
                            <li>
                                <strong>Der Schulkalender ist der eigentliche Algorithmus.</strong> Im Juli 2026, zum Ende des Schuljahres, wurden 2.005 einzelne Fotos aus Galerien heruntergeladen, im August 699. Im September, mit dem neuen Schuljahr, legten 14 Konten neue Alben an, so viele wie in keinem Monat davor.
                            </li>
                            <li>
                                <strong>Der Name spricht sich herum.</strong> Im April 2026 kam noch kein einziger Klick über den Namen KinderAlbum. Im September 2026 brachte &quot;kinderalbum app&quot; 24 Klicks, auf Position 1,1.
                            </li>
                        </ol>
                    </div>

                    <h2 className="animate-up">Was ich gelernt habe</h2>
                    <p className="animate-up">
                        In einem Thema mit Unsicherheit gewinnt nicht die lauteste Produktseite, sondern die ruhigste Antwort. Eltern und Lehrkräfte suchen zuerst nach Regeln, Strafen und Vorlagen, erst danach nach einer Lösung. Wer die erste Frage gut beantwortet, darf die zweite auch beantworten.
                    </p>
                    <p className="animate-up">
                        Und: Ein Produkt muss halten, was der Ratgeber verspricht. Die Seiten bringen Besucher, aber hochgeladen wird nur, wenn Einwilligung, Rollen und Galerie im Alltag funktionieren.
                    </p>

                    <div className="cs-limits animate-up">
                        <p><strong>Ehrliche Grenzen:</strong> Die Kurven zeigen, was nach dem Inhaltsausbau passiert ist, nicht zwingend warum. Saison, Schuljahr und Google-Updates sind nicht herausgerechnet.</p>
                        <p>Quellen: Google Search Console, Umami und die Produktionsdatenbank von KinderAlbum, abgerufen am 7. Oktober 2026. Die Kontozahlen sind klein, ich zeige sie trotzdem, weil sie echte Nutzung messen.</p>
                    </div>

                    {/* Key Takeaway */}
                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Ein sauber gebautes Produkt plus ehrliche Antworten auf die Fragen der Zielgruppe: Bei KinderAlbum wurden daraus 792 organische Klicks im September 2026, nach 23 im Februar, und 14 Konten, die im September neue Fotoalben angelegt haben.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Ähnliches Projekt geplant?</p>
                        <h2 className="section-title animate-up">Relevante Leistungen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO</h3>
                            <p>Ratgeber-Seiten zu den Fragen Ihrer Zielgruppe und die technische Grundlage dafür. Ab 1.000 &euro; im Monat.</p>
                        </Link>
                        <Link href="/leistungen/ai-seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>AI SEO</h3>
                            <p>Inhalte so aufbereiten, dass ChatGPT, Perplexity und Google AI Overviews sie verstehen und zitieren können.</p>
                        </Link>
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Websites und Web-Apps, die schnell laden und Datenschutz ernst nehmen.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Ihre Zielgruppe hat Fragen, bevor sie kauft? Im kostenlosen Erstgespräch zeige ich Ihnen, welche davon Sie bei Google beantworten sollten." />
            </AutoLinks>
        </>
    );
}
