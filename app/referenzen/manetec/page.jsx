import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/manetec`;

export const metadata = {
    title: 'Manetec Case Study | Schadlingsbekampfung fur Hotels mit KI-Risikoanalyse',
    description: 'Website fur professionelle Schadlingsbekampfung in der Hamburger Hotellerie und Gastronomie. React + Gemini API fur automatisierte Risikoanalyse.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Manetec Hamburg | Schadlingsbekampfung mit KI-Risikoanalyse',
        description: 'React + Framer Motion + Gemini API: Industrielle Asthetik fur professionelle Schadlingsbekampfung.',
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

export default function ManetecCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Manetec Hamburg: Schadlingsbekampfung trifft KI-Risikoanalyse',
        description: 'Case Study: Website fur Schadlingsbekampfung in Hotels und Gastronomie mit KI-gestutzter Risikoanalyse.',
        url: PAGE_URL,
        datePublished: '2026-04-03',
        dateModified: '2026-04-03',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: `${SITE_URL}/ueber-uns` },
        publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: `${SITE_URL}/referenzen` },
            { '@type': 'ListItem', position: 3, name: 'Manetec', item: PAGE_URL },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Referenzen', href: '/referenzen' },
                        { label: 'Manetec' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">Webdesign + KI</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        Manetec: Wenn Schadlingsbekampfung auf kunstliche Intelligenz trifft. Klingt absurd. Funktioniert hervorragend.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Eine Website fur professionelle Schadlingsbekampfung in Hamburger Hotels und Restaurants, mit KI-gestutzter Risikoanalyse, HACCP-Compliance und einem Design, das so ernst und prazise ist wie die Arbeit selbst. Weil auch Schadlingsbekampfer eine Website verdienen, die nicht nach 2008 aussieht.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 3. April 2026
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid animate-up">
                        <MetricCard value="Gemini" label="KI-Risikoanalyse" detail="Automatisierte Bewertung" />
                        <MetricCard value="HACCP" label="Compliance" detail="Hotellerie & Gastronomie" />
                        <MetricCard value="0px" label="Border-Radius" detail="Industrielle Asthetik" />
                        <MetricCard value="JSON" label="Schema-Output" detail="Strukturierte KI-Antworten" />
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Ausgangssituation</h2>
                    <p className="animate-up">
                        Manetec ist spezialisiert auf Schadlingsbekampfung fur Hotels und Gastronomiebetriebe in Hamburg. Das ist keine Branche, in der man mit bunten Farben und lustigen Icons arbeitet. Hier geht es um HACCP-Normen, Gesundheitsamts-Inspektionen und die Tatsache, dass eine einzige Kakerlake in einer Hotelkuche den Ruf eines 4-Sterne-Hauses ruinieren kann.
                    </p>
                    <p className="animate-up">
                        Die bisherige Online-Prasenz? Nennen wir es diplomatisch: ausbaufahig. Ein Hotelmanager, der einen professionellen Schadlingsbekampfer sucht, erwartet Seriositat. Nicht eine Website, die wie ein Schulprojekt aussieht.
                    </p>

                    <h2 className="animate-up">Die Losung</h2>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>KI-Risikoanalyse</h3>
                            <p>Das Herzstuck: Ein KI-Assistent, der den Betriebstyp, die Grosse und spezifische Faktoren abfragt und dann eine professionelle Risikoeinschatzung generiert. Risikostufe (niedrig/mittel/hoch/kritisch), Zusammenfassung und konkrete Empfehlungen, alles via Gemini 2.5-flash mit JSON-Schema-Validierung.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Industrielle Asthetik</h3>
                            <p>Null Border-Radius. Scharfe Kanten. Playfair Display fur Autoritat, Lato fur Lesbarkeit. Das Design sagt: &bdquo;Wir meinen es ernst.&ldquo; Weil ein Hotel keinen Schadlingsbekampfer will, dessen Website aussieht wie ein Kindergeburtstag.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Farbcodierte Risikostufen</h3>
                            <p>Die KI-Ausgabe wird visuell aufbereitet: Grun fur niedrig, Gelb fur mittel, Orange fur hoch, Rot fur kritisch. Ein Hotelmanager sieht auf einen Blick, wie dringend der Handlungsbedarf ist. Psychologie trifft UX.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Framer Motion Animationen</h3>
                            <p>Subtile, professionelle Entrance-Animationen. Nichts Flashiges, das ware der Branche unangemessen. Aber genug Bewegung, um die Seite lebendig wirken zu lassen.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Warum KI hier Sinn macht</h2>
                    <p className="animate-up">
                        Man konnte argumentieren: Braucht ein Schadlingsbekampfer wirklich KI auf der Website? Die Antwort: Ja. Und zwar nicht als Gimmick, sondern als Lead-Qualifizierung. Ein Hotelmanager, der den KI-Assistenten nutzt und &bdquo;hohes Risiko&ldquo; angezeigt bekommt, hat plotzlich echte Dringlichkeit und greift zum Telefon. Das ist kein Chatbot-Widget. Das ist ein Verkaufsinstrument, das sich als nutzliches Tool tarnt.
                    </p>
                    <p className="animate-up">
                        Die strukturierte JSON-Ausgabe (mit Schema-Validierung durch Gemini) stellt sicher, dass die Antworten immer im richtigen Format ankommen: Risikostufe als Enum, Zusammenfassung als Fliesstext, Empfehlungen als Liste. Keine halluzinierten Tabellen, keine kaputten Layouts. Vorhersagbar, zuverlassig, professionell.
                    </p>

                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            KI ist kein Feature, das man auf jede Website kleben sollte. Aber wenn sie ein echtes Problem lost, in diesem Fall: &bdquo;Wie dringend brauche ich Schadlingsbekampfung?&ldquo;, dann ist sie mehr als ein Gimmick. Sie ist ein Wettbewerbsvorteil. Manetec zeigt: Auch in &bdquo;traditionellen&ldquo; Branchen kann KI den Unterschied machen. Man muss sie nur richtig einsetzen.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Website mit KI-Integration?</p>
                        <h2 className="section-title animate-up">Relevante Leistungen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Individuelle Websites mit KI-Integration, fur jede Branche.</p>
                        </Link>
                        <Link href="/leistungen/google-ads" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Google Ads</h3>
                            <p>Gezielte Kampagnen fur B2B-Dienstleister.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Website fur Ihr Unternehmen? Auch wenn Ihre Branche nicht &bdquo;sexy&ldquo; klingt: gerade dann macht professionelles Webdesign den grossten Unterschied. Sprechen wir daruber." />
        </>
    );
}
