import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Webdesign für Handwerker Hamburg | Websites, die Aufträge bringen',
    description: 'Websites für Handwerksbetriebe in Hamburg: mobile-first, Telefon- und WhatsApp-Button, Google-Maps-Sichtbarkeit. Mehr Anfragen, weniger Aufwand. Ab 2.000 €.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign-handwerker',
    },
    openGraph: {
        title: 'Webdesign für Handwerker Hamburg | Websites, die Aufträge bringen',
        description: 'Websites für Handwerksbetriebe in Hamburg: mobile-first, Telefon- und WhatsApp-Button, Google-Maps-Sichtbarkeit. Mehr Anfragen, weniger Aufwand.',
        url: 'https://webseite.hamburg/leistungen/webdesign-handwerker',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet eine Website für einen Handwerksbetrieb?', a: 'Ein One-Pager mit allen wichtigen Informationen, Kontaktdaten und Google-Optimierung gibt es ab 2.000 €. Eine mehrseitige Website mit Leistungsseiten, Referenzen und CMS ab 3.000 €. Sie erhalten ein konkretes Festpreis-Angebot nach dem kostenlosen Erstgespräch.' },
    { q: 'Brauche ich als Handwerker wirklich eine eigene Website?', a: 'Ja. Ihre Kunden suchen „Elektriker Hamburg" oder „Maler in der Nähe" und erwarten eine professionelle Website. Laut Think with Google besuchen 76 % der Menschen, die lokal mit dem Smartphone suchen, innerhalb eines Tages ein Geschäft. Ohne eigene Website verlieren Sie diese Anfragen an die Konkurrenz, die online sichtbar ist.' },
    { q: 'Wie lange dauert die Erstellung?', a: 'Ein One-Pager ist in 2–3 Wochen fertig, eine mehrseitige Website in 4–6 Wochen. Ich weiß, dass Sie als Handwerker wenig Zeit haben, deshalb halte ich den Abstimmungsaufwand so gering wie möglich.' },
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
            { '@type': 'Offer', name: 'One-Pager', price: '2000', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Mehrseitige Website', price: '3000', priceCurrency: 'EUR' },
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

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Leistungen', href: '/leistungen' },
                        { label: 'Webdesign für Handwerker' },
                    ]} />
                    <p className="section-kicker animate-up">Webdesign für Handwerker</p>
                    <h1 className="subpage-title animate-up">Websites für Handwerksbetriebe in Hamburg: mehr Aufträge, weniger Aufwand.</h1>
                    <p className="subpage-intro animate-up">
                        Sie sind Handwerker, kein Webdesigner. Ihre Zeit steckt in Baustellen und Kunden, nicht in Websites. Aber Ihre nächsten Kunden suchen gerade „Elektriker Hamburg" oder „Maler in der Nähe". Ich sorge dafür, dass diese Anfragen bei Ihnen landen.
                    </p>
                    <ServiceMeta />
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was kostet eine Handwerker-Website?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Eine Handwerker-Website kostet bei mir <strong>ab 2.000 €</strong> (One-Pager) bzw. <strong>ab 3.000 €</strong> (mehrseitig) zum Festpreis. Sie ist mobile-first, in rund einer Sekunde geladen und für lokale Suchen wie „Elektriker Hamburg" optimiert, mit Telefon- und WhatsApp-Button direkt im Blickfeld. Laut Think with Google besuchen 76 % der Menschen, die lokal mit dem Smartphone suchen, innerhalb eines Tages ein Geschäft.</p>
                    </div>

                    <h2 className="animate-up">Warum Handwerker eine professionelle Website brauchen</h2>
                    <p className="animate-up">Mundpropaganda ist gut, reicht aber nicht mehr. Wer einen Handwerker braucht, sucht heute zuerst bei Google, oft vom Smartphone. Laut Think with Google besuchen 76 % der Menschen, die lokal suchen, innerhalb eines Tages ein Geschäft, und 28 % der „in der Nähe"-Suchen enden mit einem Kauf.</p>
                    <p className="animate-up">Das heißt: Ihre zukünftigen Kunden suchen jetzt gerade nach einem Handwerker wie Ihnen. Wenn Sie online nicht sichtbar sind, existieren Sie für diese Kunden nicht, und der Auftrag geht an den Wettbewerber mit Website, selbst wenn Ihre Arbeit besser ist.</p>

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
                            <p>Ladezeit unter einer Sekunde, Lighthouse 90–100. Kein Warten, kein Absprung. <a href="/wissen/warum-langsame-websites-kunden-kosten">Google belohnt schnelle Seiten</a> mit besseren Rankings, und Ihre Kunden bleiben.</p>
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

                    <h2 className="animate-up">Was kostet eine Handwerker-Website?</h2>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>One-Pager</h3>
                            <div className="sp-price-value">ab 2.000 &euro;</div>
                            <p>Kompakte Website mit allem, was ein Handwerksbetrieb braucht. Ideal als Einstieg oder wenn Sie schnell online sichtbar sein wollen.</p>
                            <ul className="sp-price-includes">
                                <li>1 Seite, vollständig responsiv</li>
                                <li>Telefon & WhatsApp-Button</li>
                                <li>Google-Maps-Integration</li>
                                <li>SEO-Grundoptimierung</li>
                                <li>SSL & DSGVO-konform</li>
                                <li>Lighthouse 90–100</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Mehrseitige Website</h3>
                            <div className="sp-price-value">ab 3.000 &euro;</div>
                            <p>Vollständige Website mit Leistungsseiten, Referenzen und optionalem CMS. Für Handwerksbetriebe, die wachsen wollen.</p>
                            <ul className="sp-price-includes">
                                <li>5+ Seiten</li>
                                <li>Eigene Leistungsseiten für jedes Gewerk</li>
                                <li>Referenzen & Kundenstimmen</li>
                                <li>CMS für eigene Inhaltspflege</li>
                                <li>Erweiterte SEO-Optimierung</li>
                                <li>Conversion-Tracking & Analytics (GA4)</li>
                                <li>Lighthouse 90–100</li>
                                <li>Schulung zur Bedienung</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Der Ablauf</h2>
                    <p className="animate-up">Einfach, klar und ohne Fachchinesisch. Sie brauchen keine Vorbereitung, nur 30 Minuten Zeit für ein Gespräch.</p>
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
