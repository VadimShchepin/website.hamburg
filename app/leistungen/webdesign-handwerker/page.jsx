import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Webdesign fur Handwerker Hamburg | Websites die Auftrage bringen',
    description: 'Professionelle Websites fur Handwerksbetriebe in Hamburg. Mehr Anfragen durch schnelle, mobiloptimierte Websites mit Google-Sichtbarkeit. Ab 2.000 Euro.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign-handwerker',
    },
    openGraph: {
        title: 'Webdesign fur Handwerker Hamburg | Websites die Auftrage bringen',
        description: 'Professionelle Websites fur Handwerksbetriebe in Hamburg. Mehr Anfragen durch schnelle, mobiloptimierte Websites mit Google-Sichtbarkeit. Ab 2.000 Euro.',
        url: 'https://webseite.hamburg/leistungen/webdesign-handwerker',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Brauche ich als Handwerker wirklich eine eigene Website?', a: 'Ja — 46% aller Google-Suchen haben lokale Absicht. Ihre Kunden suchen "Elektriker Hamburg" oder "Maler in der Nahe" und erwarten eine professionelle Website. Ohne eigene Website verlieren Sie diese Anfragen an die Konkurrenz, die online sichtbar ist.' },
    { q: 'Was kostet eine Website fur einen Handwerksbetrieb?', a: 'Ein One-Pager mit allen wichtigen Informationen, Kontaktdaten und Google-Optimierung gibt es ab 2.000 Euro. Eine mehrseitige Website mit Leistungsseiten, Referenzen und CMS ab 3.000 Euro. Sie erhalten ein konkretes Angebot nach dem kostenlosen Erstgesprach.' },
    { q: 'Wie lange dauert die Erstellung?', a: 'Ein One-Pager ist in 2-3 Wochen fertig, eine mehrseitige Website in 4-6 Wochen. Ich weiss, dass Sie als Handwerker wenig Zeit haben — deshalb halte ich den Abstimmungsaufwand so gering wie moglich.' },
    { q: 'Kann ich die Website selbst aktualisieren?', a: 'Ja, wenn Sie das wunschen. Ich richte ein einfaches CMS ein und zeige Ihnen in 30 Minuten, wie Sie Texte, Bilder und Referenzfotos selbst anpassen konnen. Keine technischen Vorkenntnisse notig.' },
    { q: 'Hilft die Website auch bei Google Maps?', a: 'Ja. Ich optimiere Ihre Website fur lokale Suchergebnisse und helfe bei der Einrichtung bzw. Optimierung Ihres Google Unternehmensprofils. So erscheinen Sie sowohl in der Google-Suche als auch auf Google Maps, wenn Kunden in Ihrer Nahe suchen.' },
    { q: 'Was passiert nach dem Launch?', a: 'Nach dem Go-live richte ich Tracking ein, damit Sie sehen, wie viele Anfragen uber die Website kommen. Auf Wunsch betreue ich Ihre Website langfristig mit Updates und Optimierungen — Sie konzentrieren sich auf Ihre Auftrage.' },
];

export default function WebdesignHandwerkerPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign fur Handwerksbetriebe Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/webdesign-handwerker',
        description: 'Professionelle Websites fur Handwerksbetriebe in Hamburg. Mehr Anfragen durch schnelle, mobiloptimierte Websites mit Google-Sichtbarkeit.',
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
            { '@type': 'ListItem', position: 3, name: 'Webdesign fur Handwerker', item: 'https://webseite.hamburg/leistungen/webdesign-handwerker' },
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
                        { label: 'Webdesign fur Handwerker' },
                    ]} />
                    <p className="section-kicker animate-up">Webdesign fur Handwerker</p>
                    <h1 className="subpage-title animate-up">Websites fur Handwerksbetriebe in Hamburg — mehr Auftrage, weniger Aufwand.</h1>
                    <p className="subpage-intro animate-up">
                        Sie sind Handwerker, kein Webdesigner. Ihre Zeit steckt in Baustellen, Kunden und Material — nicht in Websites. Aber Ihre nachsten Kunden suchen gerade "Elektriker Hamburg" oder "Maler in der Nahe". Ohne professionelle Website gehen diese Anfragen an die Konkurrenz. Ich sorge dafur, dass sie bei Ihnen landen.
                    </p>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Warum Handwerker eine professionelle Website brauchen</h2>
                    <p className="animate-up">Mundpropaganda ist gut — aber sie reicht nicht mehr. 46% aller Google-Suchen haben lokale Absicht. Und 88% der lokalen Suchanfragen auf dem Smartphone fuhren innerhalb von 24 Stunden zu einer Aktion: einem Anruf, einer Wegbeschreibung oder einem Besuch vor Ort.</p>
                    <p className="animate-up">Das bedeutet: Ihre zukunftigen Kunden suchen jetzt gerade nach einem Handwerker wie Ihnen. Wenn Sie online nicht sichtbar sind, existieren Sie fur diese Kunden nicht. Die Auftrage gehen an den Wettbewerber, der eine Website hat — selbst wenn Ihre Arbeit besser ist.</p>
                    <ul className="check-list animate-up">
                        <li>46% aller Google-Suchen haben lokale Absicht</li>
                        <li>88% der lokalen Smartphone-Suchen fuhren zu einer Aktion in 24 Stunden</li>
                        <li>Ohne Website verlieren Sie Kunden, die Sie nie kennenlernen</li>
                        <li>Mundpropaganda allein reicht nicht mehr — Kunden prufen immer online</li>
                    </ul>

                    <h2 className="animate-up">Was eine Handwerker-Website konnen muss</h2>
                    <p className="animate-up">Handwerker brauchen keine komplizierte Website mit 50 Seiten. Sie brauchen eine, die funktioniert: schnell, mobil, auffindbar — und mit einem Ziel: dass der Kunde anruft.</p>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Sofort sichtbare Kontaktdaten</h3>
                            <p>Telefonnummer und WhatsApp-Button direkt im Blickfeld. Kein Suchen, kein Scrollen — Ihr Kunde soll Sie mit einem Tipp erreichen konnen. Auf dem Handy wird die Nummer zum Anruf-Button.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Mobile-First</h3>
                            <p>Uber 70% Ihrer Kunden suchen auf dem Smartphone — unterwegs, auf der Baustelle, im Auto. Die Website wird zuerst fur Mobilgerate gebaut und sieht auf jedem Bildschirm perfekt aus.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Google Maps & lokale Sichtbarkeit</h3>
                            <p>Ihre Website wird fur lokale Suchergebnisse optimiert. In Kombination mit Ihrem Google Unternehmensprofil erscheinen Sie dort, wo Kunden suchen: in der Google-Suche und auf Google Maps.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Schnelle Ladezeit</h3>
                            <p>Unter 1 Sekunde Ladezeit. Kein Warten, kein Absprung. Google belohnt schnelle Websites mit besseren Rankings — und Ihre Kunden bleiben, statt zur Konkurrenz zu klicken.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Referenz: Blitz Hamburg</h2>
                    <p className="animate-up">Blitz Hamburg ist ein Handwerksbetrieb fur Entrumpelung in Hamburg. Nach dem Website-Relaunch stiegen die Online-Anfragen deutlich — bei vollig stabiler Auftragslage uber Monate.</p>
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
                                <li>1 Seite, vollstandig responsiv</li>
                                <li>Telefon & WhatsApp-Button</li>
                                <li>Google Maps Integration</li>
                                <li>SEO-Grundoptimierung</li>
                                <li>SSL & DSGVO-konform</li>
                                <li>PageSpeed 90-100</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Mehrseitige Website</h3>
                            <div className="sp-price-value">ab 3.000 &euro;</div>
                            <p>Vollstandige Website mit Leistungsseiten, Referenzen und optionalem CMS. Fur Handwerksbetriebe, die wachsen wollen.</p>
                            <ul className="sp-price-includes">
                                <li>5+ Seiten</li>
                                <li>Eigene Leistungsseiten fur jedes Gewerk</li>
                                <li>Referenzen & Kundenstimmen</li>
                                <li>CMS fur eigene Inhaltspflege</li>
                                <li>Erweiterte SEO-Optimierung</li>
                                <li>Conversion Tracking & Analytics</li>
                                <li>PageSpeed 90-100</li>
                                <li>Schulung zur Bedienung</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Der Ablauf</h2>
                    <p className="animate-up">Einfach, klar und ohne Fachchinesisch. Sie brauchen keine Vorbereitung — nur 30 Minuten Zeit fur ein Gesprach.</p>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Kostenloses Gesprach</strong><p>Wir besprechen, was Sie brauchen und was Ihre Kunden suchen. Ich analysiere Ihre aktuelle Online-Situation und zeige Ihnen, was moglich ist. Unverbindlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Konzept</strong><p>Ich erstelle die Seitenstruktur und den Aufbau Ihrer Website. Sie sehen vorab, wie alles aussehen wird — bevor die Entwicklung startet.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Entwicklung</strong><p>Ihre Website wird individuell gebaut — schnell, mobiloptimiert und fur Google sichtbar. Sie erhalten regelmasige Updates und konnen jederzeit Feedback geben.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Launch</strong><p>Die Website geht live, Tracking wird eingerichtet, und Sie sehen ab Tag 1, wie viele Besucher und Anfragen reinkommen. Sie kummern sich um die Auftrage — ich um die Website.</p></div></div>
                    </div>
                </div>
            </section>

            <FaqSection title="Haufige Fragen von Handwerkern" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Sie sind Handwerker in Hamburg und wollen mehr Auftrage uber Ihre Website? Lassen Sie uns sprechen — kostenlos und unverbindlich. Ich zeige Ihnen, was fur Ihren Betrieb moglich ist." />
        </>
    );
}
