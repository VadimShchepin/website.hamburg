import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/typeexplore-ai`;

export const metadata = {
    title: 'TypeExplore AI Case Study | KI-Tipptrainer mit Gemini API',
    description: 'EdTech-App: Tippen lernen mit KI-generierten Lektionen zu jedem Thema. React + Express + Gemini API. Sichere Architektur, Echtzeit-Feedback.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'TypeExplore AI | KI-Tipptrainer — Lernen beim Tippen',
        description: 'React + Gemini API: KI generiert Tipp-Lektionen zu jedem Thema. Sichere Backend-Proxy-Architektur.',
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

export default function TypeExploreCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'TypeExplore AI: KI-Tipptrainer mit Gemini API',
        description: 'Case Study: EdTech-App zum Tippen lernen mit KI-generierten Lektionen.',
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
            { '@type': 'ListItem', position: 3, name: 'TypeExplore AI', item: PAGE_URL },
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
                        { label: 'TypeExplore AI' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">KI-Produkt</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        TypeExplore AI: Tippen lernen uber Quantenphysik. Oder Borschtsch. Die KI ist flexibel.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Ein Tipptrainer, der nicht langweilig ist — weil die KI Lektionen uber jedes Thema generiert, das Sie sich vorstellen konnen. Sie tippen, Sie lernen, und am Ende sind Sie schneller als vorher. In jeder Hinsicht.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 3. April 2026
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cs-metrics-grid animate-up">
                        <MetricCard value="Gemini" label="2.5-flash" detail="KI-Lektionsgenerierung" />
                        <MetricCard value="WPM" label="Echtzeit-Tracking" detail="Worter pro Minute" />
                        <MetricCard value="0" label="API-Keys im Browser" detail="Sichere Proxy-Architektur" />
                        <MetricCard value="Konfetti" label="Bei Abschluss" detail="Drei-Burst-Animation" />
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Das Problem</h2>
                    <p className="animate-up">
                        Tipptrainer sind seit 1995 nicht weiterentwickelt worden. Man tippt &bdquo;asdf jklo&ldquo; hundert Mal und fragt sich, warum man das nicht einfach lassen kann. Die Motivation halt genau so lange, bis der erste Satz &bdquo;Der schnelle braune Fuchs&ldquo; erscheint. Dann schliesst man das Fenster und macht etwas Sinnvolles.
                    </p>
                    <p className="animate-up">
                        Die Idee war simpel: Was, wenn man stattdessen uber Themen tippt, die einen tatsachlich interessieren? Astronomie, Kochen, Geschichte, Programmierung — egal was. Die KI generiert den Text, Sie tippen ihn ab, und am Ende haben Sie nicht nur schneller getippt, sondern auch etwas gelernt.
                    </p>

                    <h2 className="animate-up">Die Losung</h2>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>KI-generierte Lektionen</h3>
                            <p>Geben Sie ein Thema ein — &bdquo;Japanische Teezubereitung&ldquo;, &bdquo;Warum der Himmel blau ist&ldquo;, &bdquo;Die Geschichte der Schreibmaschine&ldquo; — und Gemini 2.5-flash erzeugt einen perfekt formatierten Ubungstext. Kein Thema zu absurd.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Sichere API-Architektur</h3>
                            <p>Der Gemini API-Key liegt auf dem Express-Backend. Das Frontend sieht ihn nie. Klingt selbstverstandlich? Sie wurden staunen, wie viele Apps ihren API-Key im Browser-JavaScript haben. Bei uns: null.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Virtuelle Tastatur</h3>
                            <p>Farbcodiert nach Fingerzonen fur Touch-Typing-Visualisierung. Der nachste zu tippende Buchstabe wird hervorgehoben. Fehler werden sofort markiert. Man sieht in Echtzeit, wo die Finger sein sollten.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Konfetti als Belohnung</h3>
                            <p>Lektion abgeschlossen? Drei-Burst-Konfetti-Animation. Weil positive Verstarkung funktioniert — fragen Sie jeden Psychologen. Oder jeden Hund.</p>
                        </div>
                    </div>

                    <h3 className="animate-up" style={{ marginTop: 'var(--space-lg)', fontSize: '1.3rem' }}>
                        Technische Details, die niemand sieht (aber die wichtig sind)
                    </h3>
                    <p className="animate-up">
                        Text-Normalisierung fur KI-Output (smarte Anfuhrungszeichen und Gedankenstriche von Gemini mussen in Standard-Zeichen konvertiert werden, sonst stimmt die Fehlererkennung nicht). LocalStorage-Caching, damit dieselbe Lektion nicht zweimal generiert wird. Rate-Limiting: 2 Gratis-Lektionen, dann E-Mail-Registrierung. Mobile-Erkennung: Auf dem Handy macht eine virtuelle Tastatur-Anzeige keinen Sinn, also wird sie ausgeblendet.
                    </p>
                    <p className="animate-up">
                        Das sind die Details, die den Unterschied machen zwischen &bdquo;funktioniert technisch&ldquo; und &bdquo;funktioniert fur echte Menschen&ldquo;.
                    </p>

                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Die beste Technologie ist die, die man nicht bemerkt. Der Nutzer tippt, lernt und hat Spass. Dass im Hintergrund ein Express-Proxy den API-Key schutzt, Gemini den Text normalisiert und localStorage die Lektionen cached — das muss niemand wissen. Ausser Sie lesen gerade diese Case Study. Dann wissen Sie es jetzt.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">KI-Produkt geplant?</p>
                        <h2 className="section-title animate-up">Relevante Leistungen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Von der Idee zum fertigen Produkt — KI-Integration inklusive.</p>
                        </Link>
                        <Link href="/leistungen/ai-seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>AI SEO</h3>
                            <p>Damit Ihr KI-Produkt auch gefunden wird.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="KI-Produkt geplant? Ich baue Anwendungen mit Gemini, Claude und anderen LLMs — von der API-Architektur bis zum fertigen Produkt. Und ja, es gibt Konfetti." />
        </>
    );
}
