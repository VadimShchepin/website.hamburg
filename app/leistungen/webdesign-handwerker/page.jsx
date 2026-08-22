import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import WebsiteShowcase from '../../../src/components/WebsiteShowcase';
import { BUSINESS } from '../../../src/lib/schema';

const showcaseSlides = [
    {
        client: 'Blitz Hamburg',
        note: 'Handwerksbetrieb für Entrümpelung und Sanierung, ROI in 7 Wochen',
        url: 'blitz-hamburg.de/entruempelung',
        href: '/referenzen/blitz-hamburg',
        desktop: '/leistungen/branchen/handwerker/web-blitz2.webp',
        mobile: '/leistungen/branchen/handwerker/web-blitz2-mobil.webp',
        alt: 'Leistungsseite von Blitz Hamburg mit Telefon- und WhatsApp-Button direkt im Blickfeld',
    },
    {
        client: 'GL Sommer GmbH',
        note: 'Garten- und Landschaftsbau, 728 lokale Aktionen pro Monat',
        url: 'gl-sommer.de',
        href: '/referenzen/gl-sommer',
        desktop: '/leistungen/branchen/handwerker/web-sommer.webp',
        mobile: '/leistungen/branchen/handwerker/web-sommer-mobil.webp',
        alt: 'Startseite von GL Sommer mit Angebotsanfrage und Anruf-Button im ersten Bildschirm',
    },
    {
        client: 'Blitz Hamburg',
        note: 'Startseite mit Festpreis-Garantie und 5,0 Sterne bei Google',
        url: 'blitz-hamburg.de',
        href: '/referenzen/blitz-hamburg',
        desktop: '/leistungen/branchen/handwerker/web-blitz.webp',
        mobile: '/leistungen/branchen/handwerker/web-blitz-mobil.webp',
        alt: 'Startseite von Blitz Hamburg mit Teamfoto und zwei Kontaktmöglichkeiten',
    },
];

export const metadata = {
    title: 'Mehr Aufträge | Webdesign für Handwerker Hamburg',
    description: 'Websites für Handwerksbetriebe in Hamburg: mobile-first, Telefon- und WhatsApp-Button, Google-Maps-Sichtbarkeit. Mehr Anfragen, weniger Aufwand. Ab 1.500 €.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign-handwerker',
    },
    openGraph: {
        title: 'Mehr Aufträge | Webdesign für Handwerker Hamburg',
        description: 'Websites für Handwerksbetriebe in Hamburg: mobile-first, Telefon- und WhatsApp-Button, Google-Maps-Sichtbarkeit. Mehr Anfragen, weniger Aufwand.',
        url: 'https://webseite.hamburg/leistungen/webdesign-handwerker',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet eine Website für einen Handwerksbetrieb?', a: 'Der Website-Start mit bewährtem Layout, Ihren Texten und Google-Optimierung gibt es ab 1.500 €. Eine individuell gestaltete Seite ab 2.900 €. Eine mehrseitige Website mit Leistungsseiten, Referenzen und CMS ab 4.500 €. Sie erhalten ein konkretes Festpreis-Angebot nach dem kostenlosen Erstgespräch.' },
    { q: 'Brauche ich als Handwerker wirklich eine eigene Website?', a: 'Ja. Ihre Kunden suchen „Elektriker Hamburg" oder „Maler in der Nähe" und erwarten eine professionelle Website. Laut Think with Google besuchen 76 % der Menschen, die lokal mit dem Smartphone suchen, innerhalb eines Tages ein Geschäft. Ohne eigene Website verlieren Sie diese Anfragen an die Konkurrenz, die online sichtbar ist.' },
    { q: 'Wie lange dauert die Erstellung?', a: 'Der Website-Start ist in 2 bis 5 Arbeitstagen online, eine individuell gestaltete Seite in 2 bis 3 Wochen, eine mehrseitige Website in 4 bis 6 Wochen. Ich weiß, dass Sie als Handwerker wenig Zeit haben, deshalb halte ich den Abstimmungsaufwand so gering wie möglich.' },
    { q: 'Kann ich die Website selbst aktualisieren?', a: 'Ja, wenn Sie das wünschen. Ich richte ein einfaches CMS ein und zeige Ihnen in rund 30 Minuten, wie Sie Texte, Bilder und Referenzfotos selbst anpassen. Keine technischen Vorkenntnisse nötig.' },
    { q: 'Hilft die Website auch bei Google Maps?', a: 'Ja. Ich optimiere Ihre Website für lokale Suchergebnisse und helfe bei der Einrichtung bzw. Optimierung Ihres Google Business Profile. So erscheinen Sie sowohl in der Google-Suche als auch auf Google Maps, wenn Kunden in Ihrer Nähe suchen.' },
    { q: 'Was passiert nach dem Launch?', a: 'Nach dem Go-live richte ich Tracking ein, damit Sie sehen, wie viele Anfragen über die Website kommen. Auf Wunsch betreue ich Ihre Website langfristig mit Updates und Optimierungen, während Sie sich auf Ihre Aufträge konzentrieren.' },
];

export default function WebdesignHandwerkerPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign für Handwerksbetriebe Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/webdesign-handwerker',
        description: 'Websites für Handwerksbetriebe in Hamburg: mobile-first, Telefon- und WhatsApp-Button, Google-Maps-Sichtbarkeit.',
        offers: [
            { '@type': 'Offer', name: 'Website-Start', price: '1500', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Conversion Landingpage', price: '2900', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Unternehmenswebsite', price: '4500', priceCurrency: 'EUR' },
        ],
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Webdesign für Handwerker', item: 'https://webseite.hamburg/leistungen/webdesign-handwerker' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section is-showcase">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Leistungen', href: '/leistungen' },
                        { label: 'Webdesign für Handwerker' },
                    ]} />
                    <div className="hero-showcase-grid">
                        <div className="hero-showcase-copy">
                            <p className="section-kicker animate-up">Webdesign für Handwerker</p>
                            <h1 className="subpage-title animate-up">Websites für Handwerksbetriebe in Hamburg: mehr Aufträge, weniger Aufwand.</h1>
                            <p className="subpage-intro animate-up">
                                Sie sind Handwerker, kein Webdesigner. Ihre Zeit steckt in Baustellen und Kunden, nicht in Websites. Aber Ihre nächsten Kunden suchen gerade „Elektriker Hamburg" oder „Maler in der Nähe". Ich sorge dafür, dass diese Anfragen bei Ihnen landen.
                            </p>
                            <div className="hero-proof animate-up">
                                <span>Festpreis</span>
                                <span>Mobile-First</span>
                                <span>Lighthouse 90 bis 100</span>
                            </div>
                            <ServiceMeta />
                        </div>
                        <div className="animate-up">
                            <WebsiteShowcase slides={showcaseSlides} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body is-inset">
                    <h2 className="animate-up">Was kostet eine Handwerker-Website?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Eine Handwerker-Website kostet bei mir <strong>ab 1.500 €</strong> (Website-Start), <strong>ab 2.900 €</strong> (One-Pager) bzw. <strong>ab 4.500 €</strong> (mehrseitig) zum Festpreis. Sie ist mobile-first, in rund einer Sekunde geladen und für lokale Suchen wie „Elektriker Hamburg" optimiert, mit Telefon- und WhatsApp-Button direkt im Blickfeld. Laut Think with Google besuchen 76 % der Menschen, die lokal mit dem Smartphone suchen, innerhalb eines Tages ein Geschäft.</p>
                    </div>

                    <h2 className="animate-up">Warum Handwerker eine professionelle Website brauchen</h2>
                    <div className="subpage-split animate-up">
                        <div className="sp-split-media">
                            <img src="/leistungen/branchen/handwerker/anruf.webp" alt="Maler in Arbeitskleidung schaut auf einem Balkon auf sein Smartphone" width="1200" height="900" loading="lazy" />
                            <p className="sp-split-caption">Der nächste Auftrag beginnt auf einem Smartphone. Die Frage ist nur, bei wem er ankommt.</p>
                        </div>
                        <div className="sp-split-body">
                            <p>Mundpropaganda ist gut, reicht aber nicht mehr. Wer einen Handwerker braucht, sucht heute zuerst bei Google, oft vom Smartphone. Laut Think with Google besuchen 76 % der Menschen, die lokal suchen, innerhalb eines Tages ein Geschäft, und 28 % der „in der Nähe"-Suchen enden mit einem Kauf.</p>
                            <p>Das heißt: Ihre zukünftigen Kunden suchen jetzt gerade nach einem Handwerker wie Ihnen. Wenn Sie online nicht sichtbar sind, existieren Sie für diese Kunden nicht, und der Auftrag geht an den Wettbewerber mit Website, selbst wenn Ihre Arbeit besser ist.</p>
                        </div>
                    </div>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">76%</span>
                            <span className="subpage-stat-label">der lokalen Smartphone-Suchen führen innerhalb eines Tages zu einem Geschäftsbesuch (Think with Google)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">28%</span>
                            <span className="subpage-stat-label">der „in der Nähe"-Suchen enden mit einem Kauf (Think with Google)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">99/100</span>
                            <span className="subpage-stat-label">Lighthouse-Score beim Referenzprojekt Blitz Hamburg</span>
                        </div>
                    </div>

                    <h2 className="animate-up">Was eine Handwerker-Website können muss</h2>
                    <p className="animate-up">Handwerker brauchen keine Website mit 50 Seiten, sondern eine, die funktioniert: schnell, mobil und auffindbar, mit einem Ziel, dass der Kunde anruft.</p>

                    <figure className="subpage-figure is-band animate-up">
                        <img src="/leistungen/branchen/handwerker/mobil.webp" alt="Handwerker in Latzhose und Helm bedient sein Smartphone in einer Zimmerei" width="1800" height="760" loading="lazy" />
                        <figcaption>Auf der Baustelle wird nicht am Schreibtisch gesucht. Deshalb wird zuerst fürs Smartphone gebaut.</figcaption>
                    </figure>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Sofort sichtbare Kontaktdaten</h3>
                            <p>Telefonnummer und WhatsApp-Button direkt im Blickfeld. Kein Suchen, kein Scrollen, und auf dem Handy wird die Nummer mit einem Tipp zum Anruf-Button.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Mobile-First</h3>
                            <p>Ihre Kunden suchen unterwegs: auf der Baustelle, im Auto, beim Kunden. Die Website wird zuerst fürs Smartphone gebaut und sieht auf jedem Bildschirm gut aus.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Google Maps & lokale Sichtbarkeit</h3>
                            <p>Ihre Website wird für <a href="/wissen/lokales-seo-hamburg-guide">lokale Suchergebnisse</a> optimiert. Zusammen mit Ihrem Google Business Profile erscheinen Sie in der Google-Suche und auf Google Maps, wo Kunden suchen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Schnelle Ladezeit</h3>
                            <p>Ladezeit unter einer Sekunde, Lighthouse 90 bis 100. Kein Warten, kein Absprung. <a href="/wissen/warum-langsame-websites-kunden-kosten">Google belohnt schnelle Seiten</a> mit besseren Rankings, und Ihre Kunden bleiben.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Referenz: Blitz Hamburg</h2>
                    <p className="animate-up">Blitz Hamburg ist ein Handwerksbetrieb für Entrümpelung in Hamburg. Nach dem Website-Relaunch stiegen die Online-Anfragen deutlich, bei stabiler Auftragslage über Monate.</p>
                    <ul className="check-list animate-up">
                        <li>5.000+ Impressionen in den ersten 3 Monaten</li>
                        <li>Lighthouse-Score 99/100</li>
                        <li>Stabile Auftragslage durch kontinuierliche Online-Anfragen</li>
                    </ul>
                    <p className="animate-up">
                        <Link href="/referenzen/blitz-hamburg" className="cta-link">Zur Referenz: Blitz Hamburg &rarr;</Link>
                    </p>

                    <h2 className="animate-up">Was im Preis enthalten ist</h2>
                    <div className="subpage-pricing-compare is-three animate-up">
                        <div className="subpage-price-col">
                            <h3>Website-Start</h3>
                            <div className="sp-price-value">ab 1.500 &euro;</div>
                            <p>Der schnelle Einstieg: eine Seite auf Basis eines bewährten Layouts, mit Ihren Texten und Fotos. In 2 bis 5 Arbeitstagen online.</p>
                            <ul className="sp-price-includes">
                                <li>1 Seite, vollständig responsiv</li>
                                <li>Bewährtes Layout statt individuellem Design</li>
                                <li>Ihre Texte und Fotos werden übernommen</li>
                                <li>Kontaktformular, SSL & DSGVO-konform</li>
                                <li>SEO-Grundsetup, Lighthouse 90 bis 100</li>
                                <li>Fertig in 2 bis 5 Arbeitstagen</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col">
                            <h3>Conversion Landingpage</h3>
                            <div className="sp-price-value">ab 2.900 &euro;</div>
                            <p>Individuell gestaltete Seite für Ihren Betrieb, auf Anfragen ausgelegt. Fertig in 2 bis 3 Wochen.</p>
                            <ul className="sp-price-includes">
                                <li>1 Seite, vollständig responsiv</li>
                                <li>Individuelles Design statt Vorlage</li>
                                <li>Telefon & WhatsApp-Button</li>
                                <li>Google-Maps-Integration</li>
                                <li>SEO-Grundoptimierung</li>
                                <li>SSL & DSGVO-konform</li>
                                <li>Lighthouse 90 bis 100</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Unternehmenswebsite</h3>
                            <div className="sp-price-value">ab 4.500 &euro;</div>
                            <p>Vollständige Website mit Leistungsseiten, Referenzen und optionalem CMS. Für Handwerksbetriebe, die wachsen wollen.</p>
                            <ul className="sp-price-includes">
                                <li>5+ Seiten</li>
                                <li>Eigene Leistungsseiten für jedes Gewerk</li>
                                <li>Referenzen & Kundenstimmen</li>
                                <li>CMS für eigene Inhaltspflege</li>
                                <li>Erweiterte SEO-Optimierung</li>
                                <li>Conversion-Tracking & Analytics (GA4)</li>
                                <li>Lighthouse 90 bis 100</li>
                                <li>Schulung zur Bedienung</li>
                            </ul>
                        </div>
                    </div>

                    <div className="subpage-duo animate-up">
                        <figure>
                            <img src="/leistungen/branchen/handwerker/angebot.webp" alt="Handwerker notiert ein Angebot auf dem Klemmbrett, daneben sein roter Werkzeugkasten" width="1000" height="750" loading="lazy" />
                            <figcaption>Sie kalkulieren zum Festpreis, ich auch.</figcaption>
                        </figure>
                        <figure>
                            <img src="/leistungen/branchen/handwerker/handschlag.webp" alt="Handwerker und Kunde geben sich in einer Küche die Hand" width="1000" height="750" loading="lazy" />
                            <figcaption>Keine Stundenzettel, keine Überraschung am Ende.</figcaption>
                        </figure>
                    </div>

                    <h2 className="animate-up">Der Ablauf</h2>
                    <div className="subpage-split is-reverse animate-up">
                        <div className="sp-split-media">
                            <img src="/leistungen/branchen/handwerker/beratung.webp" alt="Handwerker mit Werkzeuggürtel zeigt einer Kundin etwas auf einem Tablet" width="1600" height="900" loading="lazy" />
                            <p className="sp-split-caption">Sie erklären mir Ihr Gewerk, ich erkläre Ihnen die Website. Beides ohne Fachchinesisch.</p>
                        </div>
                        <div className="sp-split-body">
                            <p>Einfach, klar und ohne Fachchinesisch. Sie brauchen keine Vorbereitung, nur 30 Minuten Zeit für ein Gespräch.</p>
                            <p>Danach übernehme ich Struktur, Design, Entwicklung und Google-Setup. Sie geben Feedback, wenn es etwas zu entscheiden gibt, und bleiben ansonsten auf der Baustelle.</p>
                        </div>
                    </div>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Kostenloses Gespräch</strong><p>Wir besprechen, was Sie brauchen und was Ihre Kunden suchen. Ich analysiere Ihre aktuelle Online-Situation und zeige, was möglich ist. Unverbindlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Konzept</strong><p>Ich erstelle Seitenstruktur und Aufbau Ihrer Website. Sie sehen vorab, wie alles aussehen wird, bevor die Entwicklung startet.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Entwicklung</strong><p>Ihre Website wird individuell gebaut: schnell, mobiloptimiert und für Google sichtbar. Sie erhalten regelmäßige Updates und geben jederzeit Feedback.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Launch</strong><p>Die Website geht live, Tracking wird eingerichtet, und Sie sehen ab Tag 1, wie viele Besucher und Anfragen reinkommen. Sie kümmern sich um die Aufträge, ich um die Website.</p></div></div>
                    </div>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Think with Google, Consumer Insights zu „near me"-Suchen: 76 % Geschäftsbesuch innerhalb eines Tages, 28 % Kauf. <a href="https://www.thinkwithgoogle.com/" rel="nofollow noopener" target="_blank">thinkwithgoogle.com</a></li>
                            <li>Referenzprojekt Blitz Hamburg, gemessen mit Google Lighthouse (Score 99/100). <a href="/referenzen/blitz-hamburg">Zur Referenz</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Häufige Fragen von Handwerkern" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Sie sind Handwerker in Hamburg und wollen mehr Aufträge über Ihre Website? Lassen Sie uns sprechen, kostenlos und unverbindlich. Ich zeige Ihnen, was für Ihren Betrieb möglich ist." />
        </>
    );
}
