import Breadcrumbs from '../../src/components/Breadcrumbs';
import FaqPageClient from './FaqPageClient';

const SITE_URL = 'https://webseite.hamburg';

const faqCategories = [
    {
        name: 'Webdesign & Website-Erstellung',
        questions: [
            { q: 'Was kostet eine professionelle Website?', a: 'Ein One-Pager beginnt ab 2.000 Euro, eine mehrseitige Website ab 3.000 Euro. Der finale Preis haengt von Umfang, Funktionen und individuellen Anforderungen ab. Im kostenlosen Erstgesprach erhalten Sie eine konkrete Einschaetzung.' },
            { q: 'Wie lange dauert die Erstellung einer Website?', a: 'Ein One-Pager ist typischerweise in 2-3 Wochen fertig, eine mehrseitige Website in 4-6 Wochen. Die genaue Dauer haengt von Ihrem Feedback-Tempo und dem Umfang des Projekts ab.' },
            { q: 'Verwenden Sie WordPress oder einen Baukasten?', a: 'Nein. Jede Website wird individuell mit modernen Technologien wie React und Next.js entwickelt. Das bedeutet maximale Geschwindigkeit (PageSpeed 90-100), volle Flexibilitaet und keine Abhaengigkeit von Plugins oder Page-Buildern.' },
            { q: 'Ist meine Website auch auf dem Handy optimiert?', a: 'Ja. Jede Website ist vollstaendig responsive und wird auf allen Geraeten — Smartphone, Tablet und Desktop — getestet. Ueber 60% der Zugriffe kommen mobil, daher ist Mobile-Optimierung keine Option, sondern Standard.' },
            { q: 'Was passiert nach dem Launch der Website?', a: 'Sie erhalten volle Zugaenge zu allen Konten und Daten. Bei Bedarf bieten wir laufende Betreuung, SEO-Optimierung oder Google Ads Management an. Es gibt keinen Lock-in — alles gehoert Ihnen.' },
            { q: 'Kann ich meine Website selbst bearbeiten?', a: 'Ja, wenn gewuenscht integrieren wir ein CMS (Content Management System), mit dem Sie Texte, Bilder und Seiten selbst aendern koennen. Fuer rein statische Seiten uebernehmen wir Aenderungen schnell und unkompliziert.' },
        ],
    },
    {
        name: 'SEO & Suchmaschinenoptimierung',
        questions: [
            { q: 'Wie schnell sehe ich SEO-Ergebnisse?', a: 'Erste messbare Verbesserungen zeigen sich typischerweise nach 4-8 Wochen. Die volle Wirkung von SEO-Massnahmen entfaltet sich nach 3-6 Monaten. SEO ist eine nachhaltige Strategie — kein Sprint, sondern ein Marathon mit wachsendem Ertrag.' },
            { q: 'Was ist der Unterschied zwischen SEO und Google Ads?', a: 'SEO bringt organischen (kostenlosen) Traffic durch bessere Rankings in den Suchergebnissen. Google Ads sind bezahlte Anzeigen, die sofort sichtbar sind. Idealerweise nutzen Sie beides: Ads fuer sofortige Ergebnisse, SEO fuer nachhaltiges Wachstum.' },
            { q: 'Was kostet SEO pro Monat?', a: 'SEO-Betreuung beginnt ab 1.000 Euro pro Monat. Die Mindestlaufzeit betraegt 3 Monate, danach ist der Vertrag monatlich kuendbar. Im Preis enthalten sind technisches SEO, Content-Optimierung, Keyword-Tracking und monatliches Reporting.' },
            { q: 'Brauche ich lokales SEO?', a: 'Wenn Ihre Kunden aus Hamburg oder der Region kommen: definitiv ja. Lokales SEO sorgt dafuer, dass Sie bei Suchanfragen wie „Handwerker Hamburg" oder „Webdesigner in meiner Naehe" gefunden werden — in der Google-Suche und auf Google Maps.' },
            { q: 'Was ist technisches SEO?', a: 'Technisches SEO umfasst alle massnahmen, die sicherstellen, dass Google Ihre Website richtig crawlen und indexieren kann: Ladegeschwindigkeit, Mobile-Optimierung, saubere URL-Struktur, strukturierte Daten, XML-Sitemap und mehr.' },
        ],
    },
    {
        name: 'AI SEO & KI-Sichtbarkeit',
        questions: [
            { q: 'Was ist AI SEO?', a: 'AI SEO optimiert Ihre Online-Praesenz fuer KI-basierte Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews. Diese Systeme synthetisieren Antworten aus Webquellen — AI SEO stellt sicher, dass Ihr Unternehmen als vertrauenswuerdige Quelle zitiert wird.' },
            { q: 'Ist AI SEO fuer mein Unternehmen relevant?', a: 'Wenn Ihre Zielgruppe online nach Informationen oder Dienstleistungen sucht, dann ja. Immer mehr Menschen nutzen ChatGPT, Perplexity oder Google AI statt klassischer Suchergebnisse. Wer dort nicht auftaucht, wird unsichtbar.' },
            { q: 'Wie unterscheidet sich AI SEO von normalem SEO?', a: 'Klassisches SEO optimiert fuer Googles Ranking-Algorithmus. AI SEO optimiert fuer die Quellenauswahl von KI-Modellen. Das bedeutet: strukturierte Daten, faktische Konsistenz, Autoritaetssignale und Informationsdichte sind entscheidender als Backlinks.' },
            { q: 'Was kostet AI SEO?', a: 'AI SEO beginnt ab 1.200 Euro pro Monat. Es kann als Upgrade zum bestehenden SEO-Paket oder als eigenstaendige Leistung gebucht werden. Enthalten sind ein Sichtbarkeits-Audit, strukturierte Daten, Content-Optimierung und laufendes Monitoring.' },
        ],
    },
    {
        name: 'Google Ads',
        questions: [
            { q: 'Was kostet Google Ads Management?', a: 'Die Management-Fee betraegt ab 500 Euro pro Monat. Das Werbebudget kommt separat dazu und laeuft ueber Ihr eigenes Google-Konto. Wir empfehlen ein Mindestbudget von 500 Euro pro Monat fuer messbare Ergebnisse.' },
            { q: 'Wie schnell funktioniert Google Ads?', a: 'Google Ads koennen innerhalb weniger Tage erste Anfragen generieren. Die volle Optimierung der Kampagnen dauert 2-4 Wochen, da ausreichend Daten fuer datengetriebene Entscheidungen gesammelt werden muessen.' },
            { q: 'Gehoert das Google Ads Konto mir?', a: 'Ja. Das Konto laeuft auf Ihren Namen, Sie haben jederzeit vollen Zugang und koennen das Konto bei Vertragsende ohne Einschraenkungen weiter nutzen. Kein Lock-in, keine versteckten Abhaengigkeiten.' },
            { q: 'Wie messen Sie den Erfolg von Google Ads?', a: 'Jeder Anruf, jede Formular-Anfrage und jede Conversion wird praezise gemessen. Sie erhalten monatliche Reports mit Kosten pro Lead, Return on Investment und konkreten Optimierungsvorschlaegen.' },
        ],
    },
    {
        name: 'Zusammenarbeit & Ablauf',
        questions: [
            { q: 'Wie laeuft die Zusammenarbeit ab?', a: 'Sie arbeiten direkt mit dem Gruender Vadim Shchepin — kein Account-Manager, kein Zwischenmann. Nach dem Erstgesprach erstelle ich ein Konzept, wir stimmen es gemeinsam ab, und dann geht es in die Umsetzung. Kurze Wege, schnelle Ergebnisse.' },
            { q: 'Gibt es eine Ergebnis-Garantie?', a: 'Ja. Ich arbeite bis zur Zufriedenheit, ohne Aufpreis. Wenn etwas nicht passt, wird es angepasst — das ist Teil des Service, nicht ein Extra.' },
            { q: 'Arbeiten Sie nur mit Unternehmen aus Hamburg?', a: 'Der Schwerpunkt liegt auf lokalen Unternehmen in Hamburg, aber die Zusammenarbeit ist ortsunabhaengig. Webdesign, SEO und Google Ads funktionieren remote genauso gut. Entscheidend ist nicht der Standort, sondern das Ergebnis.' },
            { q: 'Was ist die kostenlose Website-Analyse?', a: 'Eine ausfuehrliche Analyse Ihrer aktuellen Website: Performance, SEO-Status, Conversion-Potenzial und Wettbewerber-Vergleich. Sie erhalten konkrete Handlungsempfehlungen mit Prioritaeten — kostenlos und unverbindlich. Kein Haken, kein Verkaufsgesprach.' },
        ],
    },
];

// Flatten all questions for FAQPage schema
const allQuestions = faqCategories.flatMap(cat => cat.questions);

export const metadata = {
    title: 'Haufig gestellte Fragen (FAQ)',
    description: 'Antworten auf die haufigsten Fragen zu Webdesign, SEO, AI SEO, Google Ads und der Zusammenarbeit mit AISEO Hamburg.',
    alternates: { canonical: `${SITE_URL}/faq` },
    openGraph: {
        title: 'Haufig gestellte Fragen — AISEO Hamburg',
        description: 'Antworten auf die haufigsten Fragen zu Webdesign, SEO, AI SEO und Google Ads.',
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
                    <h1 className="subpage-title">Haufig gestellte Fragen</h1>
                    <p className="subpage-desc">Antworten auf die wichtigsten Fragen zu Webdesign, SEO, AI SEO, Google Ads und der Zusammenarbeit.</p>
                </div>
            </section>
            <section className="section">
                <div className="container" style={{ maxWidth: 780 }}>
                    <FaqPageClient categories={faqCategories} />
                </div>
            </section>
        </>
    );
}
