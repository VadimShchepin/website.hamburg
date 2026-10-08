import Breadcrumbs from '../../src/components/Breadcrumbs';
import ServiceCta from '../../src/components/ServiceCta';
import AutoLinks from '../../src/components/AutoLinks';
import FaqPageClient from './FaqPageClient';

const SITE_URL = 'https://webseite.hamburg';

const faqCategories = [
    {
        name: 'Webdesign & Website-Erstellung',
        questions: [
            { q: 'Was kostet eine professionelle Website?', a: 'Der Website-Start mit bewährtem Layout und Ihren Texten beginnt ab 1.500 Euro, eine individuell gestaltete Conversion Landingpage ab 2.900 Euro, eine mehrseitige Unternehmenswebsite ab 4.500 Euro. Der finale Preis hängt von Umfang und Funktionen ab. Im kostenlosen Erstgespräch erhalten Sie einen Festpreis.' },
            { q: 'Wie lange dauert die Erstellung einer Website?', a: 'Der Website-Start ist in 2 bis 5 Arbeitstagen online. Eine individuell gestaltete Landingpage ist typischerweise in 2 bis 3 Wochen fertig, eine mehrseitige Website in 4 bis 6 Wochen. Die genaue Dauer hängt von Ihrem Feedback-Tempo und dem Umfang ab.' },
            { q: 'Verwenden Sie WordPress oder einen Baukasten?', a: 'Standardmäßig nicht. Ich programmiere Websites individuell, meist mit Next.js, ohne Baukasten und ohne gekauftes Theme. Das bringt PageSpeed-Werte von 90 bis 100 und keine Abhängigkeit von Plugins oder Page-Buildern. Wollen Sie viele Inhalte selbst pflegen, binde ich ein CMS ein.' },
            { q: 'Ist meine Website auch auf dem Handy optimiert?', a: 'Ja. Jede Website wird zuerst für das Smartphone gebaut und auf Smartphone, Tablet und Desktop getestet, denn ein großer Teil lokaler Suchen kommt vom Handy. Telefonnummer und Kontaktweg sind dort mit einem Tipp erreichbar.' },
            { q: 'Was passiert nach dem Launch der Website?', a: 'Sie erhalten volle Zugänge zu allen Konten und Daten. Bei Bedarf biete ich laufende Betreuung, SEO-Optimierung oder Google Ads Management an. Es gibt keinen Lock-in, alles gehört Ihnen.' },
            { q: 'Kann ich meine Website selbst bearbeiten?', a: 'Ja, wenn gewünscht integriere ich ein CMS (Content-Management-System), mit dem Sie Texte, Bilder und Seiten selbst ändern können. Bei rein statischen Seiten übernehme ich Änderungen schnell und unkompliziert.' },
        ],
    },
    {
        name: 'SEO & Suchmaschinenoptimierung',
        questions: [
            { q: 'Wie schnell sehe ich SEO-Ergebnisse?', a: 'Erste messbare Verbesserungen zeigen sich typischerweise nach 4 bis 8 Wochen, die volle Wirkung nach 3 bis 6 Monaten. Deshalb gilt für SEO eine Mindestlaufzeit von 3 Monaten, danach ist die Betreuung monatlich kündbar.' },
            { q: 'Was ist der Unterschied zwischen SEO und Google Ads?', a: 'SEO bringt organischen (kostenlosen) Traffic durch bessere Rankings in den Suchergebnissen. Google Ads sind bezahlte Anzeigen, die sofort sichtbar sind. Idealerweise nutzen Sie beides: Ads für sofortige Ergebnisse, SEO für nachhaltiges Wachstum.' },
            { q: 'Was kostet SEO pro Monat?', a: 'SEO-Betreuung beginnt ab 1.000 Euro pro Monat. Die Mindestlaufzeit beträgt 3 Monate, danach ist der Vertrag monatlich kündbar. Enthalten sind technisches SEO, Content-Optimierung, Pflege des Google-Unternehmensprofils, Keyword-Tracking und ein monatlicher Report.' },
            { q: 'Brauche ich lokales SEO?', a: 'Wenn Ihre Kunden aus Hamburg oder der Region kommen: definitiv ja. Lokales SEO sorgt dafür, dass Sie bei Suchanfragen wie "Handwerker Hamburg" oder "Webdesigner in meiner Nähe" gefunden werden, sowohl in der Google-Suche als auch auf Google Maps.' },
            { q: 'Was ist technisches SEO?', a: 'Technisches SEO umfasst alle Maßnahmen, die sicherstellen, dass Google Ihre Website richtig crawlen und indexieren kann: Ladegeschwindigkeit, Mobile-Optimierung, saubere URL-Struktur, strukturierte Daten, XML-Sitemap und eine korrekte Indexierung aller wichtigen Seiten.' },
        ],
    },
    {
        name: 'AI SEO & KI-Sichtbarkeit',
        questions: [
            { q: 'Was ist AI SEO?', a: 'AI SEO optimiert Ihre Online-Präsenz für KI-basierte Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews. Diese Systeme fassen Antworten aus Webquellen zusammen. AI SEO sorgt dafür, dass Ihr Unternehmen dort als vertrauenswürdige Quelle erkennbar ist und zitiert werden kann. Eine Nennung garantieren kann seriös niemand.' },
            { q: 'Ist AI SEO für mein Unternehmen relevant?', a: 'Wenn Ihre Zielgruppe online nach Informationen oder Dienstleistungen sucht, dann ja. Immer mehr Menschen nutzen ChatGPT, Perplexity oder Google AI statt klassischer Suchergebnisse. Wer dort nicht auftaucht, wird unsichtbar.' },
            { q: 'Wie unterscheidet sich AI SEO von normalem SEO?', a: 'Klassisches SEO zielt auf Positionen in der Trefferliste, AI SEO darauf, in KI-Antworten als Quelle genannt zu werden. Die Grundlage ist dieselbe: eine indexierte, schnelle, klar strukturierte Website. Dazu kommen Inhalte mit klaren Definitionen und belegten Zahlen, die KI-Systeme sauber zitieren können.' },
            { q: 'Was kostet AI SEO?', a: 'Drei Schritte: Zuerst eine kostenlose KI-Kurzanalyse, 15 Minuten, in denen wir live nachsehen, ob Sie in KI-Antworten genannt werden. Danach ein einmaliger AI Visibility Sprint ab 1.500 Euro: Analyse, Optimierung Ihrer wichtigsten Seiten, strukturierte Daten, Crawler-Konfiguration und eine Messung vorher und nachher, mit Ergebnis in 10 bis 14 Tagen. Eine laufende Betreuung mit Monitoring und neuen Inhalten gibt es danach optional ab 600 Euro pro Monat, monatlich kündbar.' },
        ],
    },
    {
        name: 'Google Ads',
        questions: [
            { q: 'Was kostet Google Ads Management?', a: 'Das Kampagnen-Setup kostet ab 700 Euro einmalig, die laufende Betreuung ab 500 Euro pro Monat. Das Werbebudget kommt separat dazu und läuft über Ihr eigenes Google-Konto. Ich empfehle ein Mindestbudget von 500 Euro pro Monat für messbare Ergebnisse.' },
            { q: 'Wie schnell funktioniert Google Ads?', a: 'Google Ads können innerhalb weniger Tage erste Anfragen bringen. Die Optimierung der Kampagnen dauert 2 bis 4 Wochen, weil erst genug Daten für belastbare Entscheidungen entstehen müssen.' },
            { q: 'Gehört das Google Ads Konto mir?', a: 'Ja. Das Konto läuft auf Ihren Namen, Sie haben jederzeit vollen Zugang und nutzen es bei Vertragsende ohne Einschränkungen weiter. Kein Lock-in, keine versteckten Abhängigkeiten.' },
            { q: 'Wie messen Sie den Erfolg von Google Ads?', a: 'Jeder Anruf, jede Formular-Anfrage und jede Conversion wird gemessen. Sie erhalten monatliche Reports mit Kosten pro Anfrage, Rendite und konkreten Optimierungsvorschlägen.' },
        ],
    },
    {
        name: 'Zusammenarbeit & Ablauf',
        questions: [
            { q: 'Wie läuft die Zusammenarbeit ab?', a: 'Sie arbeiten direkt mit mir, Vadim Shchepin. Kein Account-Manager, kein Zwischenmann. Nach dem Erstgespräch erstelle ich ein Konzept, wir stimmen es gemeinsam ab, dann geht es in die Umsetzung. Kurze Wege, schnelle Ergebnisse.' },
            { q: 'Sind Sie eine Agentur oder ein Einzelunternehmer?', a: 'Ich bin Einzelunternehmer, kein Agentur-Netzwerk. Sie arbeiten direkt mit mir: Ich mache die Analyse, baue die Website, betreue SEO und Ads. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder Fotografie, hole ich geprüfte Spezialisten dazu. Ihr Ansprechpartner und der Verantwortliche für das Ergebnis bleibe ich.' },
            { q: 'Was passiert, wenn das Ergebnis nicht stimmt?', a: 'Dann arbeite ich nach, ohne Aufpreis. Ein bestimmtes Ranking oder eine feste Zahl an Anfragen kann seriös niemand garantieren, das schreibt auch Google selbst. Zusagen kann ich transparente Arbeit, monatliche Zahlen und Nachbesserung, bis die vereinbarten Leistungen stimmen.' },
            { q: 'Arbeiten Sie nur mit Unternehmen aus Hamburg?', a: 'Der Schwerpunkt liegt auf Unternehmen in Hamburg und dem Umland, die Zusammenarbeit funktioniert aber ortsunabhängig. Webdesign, SEO und Google Ads lassen sich remote genauso gut umsetzen, Treffen in Hamburg sind nach Absprache möglich.' },
            { q: 'Was ist die kostenlose Website-Analyse?', a: 'Eine ausführliche Analyse Ihrer aktuellen Website: Performance, SEO-Status, Conversion-Potenzial und Wettbewerber-Vergleich. Sie erhalten innerhalb von 2 bis 3 Werktagen konkrete Handlungsempfehlungen mit Prioritäten, kostenlos und unverbindlich.' },
            { q: 'Wie hängen webseite.hamburg und aiseo.hamburg zusammen?', a: 'Beide Seiten gehören zu mir, Vadim Shchepin. Auf webseite.hamburg geht es um Websites, SEO und Google Ads für Unternehmen. Auf aiseo.hamburg geht es um Sichtbarkeit in KI-Antworten wie ChatGPT oder Perplexity. Ihr Ansprechpartner ist in beiden Fällen derselbe.' },
        ],
    },
];

// Flatten all questions for FAQPage schema
const allQuestions = faqCategories.flatMap(cat => cat.questions);

export const metadata = {
    title: 'FAQ: Preise, Ablauf & Zusammenarbeit | webseite.hamburg',
    description: 'Antworten auf häufige Fragen zu Webdesign, SEO, AI SEO und Google Ads: Preise, Laufzeiten, Ablauf und wem Konten und Website gehören. Direkt vom Entwickler.',
    alternates: { canonical: `${SITE_URL}/faq` },
    openGraph: {
        siteName: 'webseite.hamburg',
        locale: 'de_DE',
        title: 'FAQ: Preise, Ablauf & Zusammenarbeit | webseite.hamburg',
        description: 'Antworten auf die häufigsten Fragen zu Webdesign, SEO, AI SEO und Google Ads.',
        url: `${SITE_URL}/faq`,
    },
};

export default function FaqPage() {
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allQuestions.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
        })),
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE_URL}/faq` },
        ],
    };

    return (
        <>
            <AutoLinks path="/faq">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <section className="subpage-hero section is-compact">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
                    <div className="subpage-hero-split">
                        <div>
                            <p className="section-kicker">FAQ</p>
                            <h1 className="subpage-title">Häufige Fragen zu Webdesign, SEO und Google Ads</h1>
                            <p className="subpage-intro">Antworten auf die wichtigsten Fragen zu Webdesign, SEO, AI SEO, Google Ads und der Zusammenarbeit.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section faq-page-body">
                <div className="container">
                    <FaqPageClient categories={faqCategories} />
                </div>
            </section>
            <ServiceCta
                title="Ihre Frage war nicht dabei?"
                text="Rufen Sie an oder schreiben Sie mir. Ich antworte innerhalb von 24 Stunden, ehrlich und ohne Verkaufsgespräch."
                primaryLabel="Frage stellen"
                location="faq-cta"
            />
            </AutoLinks>
        </>
    );
}
