import Breadcrumbs from '../../src/components/Breadcrumbs';
import FaqPageClient from './FaqPageClient';

const SITE_URL = 'https://webseite.hamburg';

const faqCategories = [
    {
        name: 'Webdesign & Website-Erstellung',
        questions: [
            { q: 'Was kostet eine professionelle Website?', a: 'Der Website-Start mit bewaehrtem Layout und Ihren Texten beginnt ab 1.500 Euro. Eine individuell gestaltete Conversion Landingpage ab 2.900 Euro, eine mehrseitige Unternehmenswebsite ab 4.500 Euro. Der finale Preis hängt von Umfang, Funktionen und individuellen Anforderungen ab. Im kostenlosen Erstgespräch erhalten Sie eine konkrete Einschätzung.' },
            { q: 'Wie lange dauert die Erstellung einer Website?', a: 'Der Website-Start ist in 2 bis 5 Arbeitstagen online. Eine individuell gestaltete Landingpage ist typischerweise in 2-3 Wochen fertig, eine mehrseitige Website in 4-6 Wochen. Die genaue Dauer hängt von Ihrem Feedback-Tempo und dem Umfang des Projekts ab.' },
            { q: 'Verwenden Sie WordPress oder einen Baukasten?', a: 'Nein. Jede Website wird individuell mit modernen Technologien wie React und Next.js entwickelt. Das bedeutet maximale Geschwindigkeit (PageSpeed 90-100), volle Flexibilität und keine Abhängigkeit von Plugins oder Page-Buildern.' },
            { q: 'Ist meine Website auch auf dem Handy optimiert?', a: 'Ja. Jede Website ist vollständig responsive und wird auf allen Geräten getestet: Smartphone, Tablet und Desktop. Über 60% der Zugriffe kommen mobil, daher ist Mobile-Optimierung keine Option, sondern Standard.' },
            { q: 'Was passiert nach dem Launch der Website?', a: 'Sie erhalten volle Zugänge zu allen Konten und Daten. Bei Bedarf biete ich laufende Betreuung, SEO-Optimierung oder Google Ads Management an. Es gibt keinen Lock-in, alles gehört Ihnen.' },
            { q: 'Kann ich meine Website selbst bearbeiten?', a: 'Ja, wenn gewuenscht integriere ich ein CMS (Content Management System), mit dem Sie Texte, Bilder und Seiten selbst ändern können. Für rein statische Seiten übernehme ich Änderungen schnell und unkompliziert.' },
        ],
    },
    {
        name: 'SEO & Suchmaschinenoptimierung',
        questions: [
            { q: 'Wie schnell sehe ich SEO-Ergebnisse?', a: 'Erste messbare Verbesserungen zeigen sich typischerweise nach 4-8 Wochen. Die volle Wirkung von SEO-Maßnahmen entfaltet sich nach 3-6 Monaten. SEO ist eine nachhaltige Strategie: kein Sprint, sondern ein Marathon mit wachsendem Ertrag.' },
            { q: 'Was ist der Unterschied zwischen SEO und Google Ads?', a: 'SEO bringt organischen (kostenlosen) Traffic durch bessere Rankings in den Suchergebnissen. Google Ads sind bezahlte Anzeigen, die sofort sichtbar sind. Idealerweise nutzen Sie beides: Ads für sofortige Ergebnisse, SEO für nachhaltiges Wachstum.' },
            { q: 'Was kostet SEO pro Monat?', a: 'SEO-Betreuung beginnt ab 1.000 Euro pro Monat. Die Mindestlaufzeit betraegt 3 Monate, danach ist der Vertrag monatlich kündbar. Im Preis enthalten sind technisches SEO, Content-Optimierung, Keyword-Tracking und monatliches Reporting.' },
            { q: 'Brauche ich lokales SEO?', a: 'Wenn Ihre Kunden aus Hamburg oder der Region kommen: definitiv ja. Lokales SEO sorgt dafür, dass Sie bei Suchanfragen wie "Handwerker Hamburg" oder "Webdesigner in meiner Nähe" gefunden werden, sowohl in der Google-Suche als auch auf Google Maps.' },
            { q: 'Was ist technisches SEO?', a: 'Technisches SEO umfasst alle maßnahmen, die sicherstellen, dass Google Ihre Website richtig crawlen und indexieren kann: Ladegeschwindigkeit, Mobile-Optimierung, saubere URL-Struktur, strukturierte Daten, XML-Sitemap und mehr.' },
        ],
    },
    {
        name: 'AI SEO & KI-Sichtbarkeit',
        questions: [
            { q: 'Was ist AI SEO?', a: 'AI SEO optimiert Ihre Online-Präsenz für KI-basierte Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews. Diese Systeme synthetisieren Antworten aus Webquellen. AI SEO stellt sicher, dass Ihr Unternehmen als vertrauenswürdige Quelle zitiert wird.' },
            { q: 'Ist AI SEO für mein Unternehmen relevant?', a: 'Wenn Ihre Zielgruppe online nach Informationen oder Dienstleistungen sucht, dann ja. Immer mehr Menschen nutzen ChatGPT, Perplexity oder Google AI statt klassischer Suchergebnisse. Wer dort nicht auftaucht, wird unsichtbar.' },
            { q: 'Wie unterscheidet sich AI SEO von normalem SEO?', a: 'Klassisches SEO optimiert für Googles Ranking-Algorithmus. AI SEO optimiert für die Quellenauswahl von KI-Modellen. Das bedeutet: strukturierte Daten, faktische Konsistenz, Autoritaetssignale und Informationsdichte sind entscheidender als Backlinks.' },
            { q: 'Was kostet AI SEO?', a: 'Drei Schritte: Zuerst eine kostenlose KI-Kurzanalyse, 15 Minuten, in denen wir live nachsehen, ob Sie in KI-Antworten genannt werden. Danach ein einmaliger AI Visibility Sprint ab 1.500 Euro: Analyse, Optimierung Ihrer wichtigsten Seiten, strukturierte Daten, Crawler-Konfiguration und eine Messung vorher und nachher, mit Ergebnis in 10 bis 14 Tagen. Eine laufende Betreuung mit Monitoring und neuen Inhalten gibt es danach optional ab 600 Euro pro Monat, monatlich kündbar.' },
        ],
    },
    {
        name: 'Google Ads',
        questions: [
            { q: 'Was kostet Google Ads Management?', a: 'Das Kampagnen-Setup kostet ab 700 Euro einmalig, die laufende Betreuung ab 500 Euro pro Monat. Das Werbebudget kommt separat dazu und läuft über Ihr eigenes Google-Konto. Ich empfehle ein Mindestbudget von 500 Euro pro Monat für messbare Ergebnisse.' },
            { q: 'Wie schnell funktioniert Google Ads?', a: 'Google Ads können innerhalb weniger Tage erste Anfragen generieren. Die volle Optimierung der Kampagnen dauert 2-4 Wochen, da ausreichend Daten für datengetriebene Entscheidungen gesammelt werden müssen.' },
            { q: 'Gehört das Google Ads Konto mir?', a: 'Ja. Das Konto läuft auf Ihren Namen, Sie haben jederzeit vollen Zugang und können das Konto bei Vertragsende ohne Einschränkungen weiter nutzen. Kein Lock-in, keine versteckten Abhaengigkeiten.' },
            { q: 'Wie messen Sie den Erfolg von Google Ads?', a: 'Jeder Anruf, jede Formular-Anfrage und jede Conversion wird präzise gemessen. Sie erhalten monatliche Reports mit Kosten pro Lead, Return on Investment und konkreten Optimierungsvorschlaegen.' },
        ],
    },
    {
        name: 'Zusammenarbeit & Ablauf',
        questions: [
            { q: 'Wie läuft die Zusammenarbeit ab?', a: 'Sie arbeiten direkt mit dem Gruender Vadim Shchepin. Kein Account-Manager, kein Zwischenmann. Nach dem Erstgespräch erstelle ich ein Konzept, wir stimmen es gemeinsam ab, und dann geht es in die Umsetzung. Kurze Wege, schnelle Ergebnisse.' },
            { q: 'Sind Sie eine Agentur oder ein Einzelunternehmer?', a: 'Hinter AISEO steht Vadim Shchepin als Einzelunternehmer, kein Agentur-Netzwerk. Sie arbeiten direkt mit mir: Ich mache die Analyse, baue die Website, betreue SEO und Ads. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder Fotografie, hole ich geprüfte Spezialisten dazu. Ihr Ansprechpartner und der Verantwortliche für das Ergebnis bleibe ich.' },
            { q: 'Gibt es eine Ergebnis-Garantie?', a: 'Ja. Ich arbeite bis zur Zufriedenheit, ohne Aufpreis. Wenn etwas nicht passt, wird es angepasst. Das ist Teil des Service, nicht ein Extra.' },
            { q: 'Arbeiten Sie nur mit Unternehmen aus Hamburg?', a: 'Der Schwerpunkt liegt auf lokalen Unternehmen in Hamburg, aber die Zusammenarbeit ist ortsunabhaengig. Webdesign, SEO und Google Ads funktionieren remote genauso gut. Entscheidend ist nicht der Standort, sondern das Ergebnis.' },
            { q: 'Was ist die kostenlose Website-Analyse?', a: 'Eine ausfuehrliche Analyse Ihrer aktuellen Website: Performance, SEO-Status, Conversion-Potenzial und Wettbewerber-Vergleich. Sie erhalten konkrete Handlungsempfehlungen mit Prioritäten, kostenlos und unverbindlich. Kein Haken, kein Verkaufsgespräch.' },
        ],
    },
];

// Flatten all questions for FAQPage schema
const allQuestions = faqCategories.flatMap(cat => cat.questions);

export const metadata = {
    title: 'Häufige Fragen zu Preisen, Ablauf & Zusammenarbeit',
    description: 'Antworten auf die häufigsten Fragen zu Webdesign, SEO, AI SEO, Google Ads und der Zusammenarbeit mit AISEO Hamburg.',
    alternates: { canonical: `${SITE_URL}/faq` },
    openGraph: {
        title: 'Häufig gestellte Fragen | AISEO Hamburg',
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
                    <div className="subpage-hero-split">
                        <div>
                            <h1 className="subpage-title">Häufig gestellte Fragen</h1>
                            <p className="subpage-desc">Antworten auf die wichtigsten Fragen zu Webdesign, SEO, AI SEO, Google Ads und der Zusammenarbeit.</p>
                        </div>
                        <div className="subpage-hero-media animate-up">
                            <img src="/hero-faq.svg" alt="Illustration: zwei Sprechblasen, die vordere mit rotem Fragezeichen, die hintere mit Antworttext" width="1200" height="900" />
                        </div>
                    </div>
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
