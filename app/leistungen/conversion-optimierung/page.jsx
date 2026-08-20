import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Mehr Anfragen bei gleichem Traffic | Conversion',
    description: 'Conversion-Optimierung für Unternehmen in Hamburg: mehr Anfragen aus dem Traffic, den Sie schon haben. Analyse kostenlos, Umsetzung ab 1.200 Euro.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/conversion-optimierung',
    },
    openGraph: {
        title: 'Mehr Anfragen bei gleichem Traffic | Conversion',
        description: 'Mehr Anfragen ohne mehr Besucher. Conversion-Optimierung für lokale Unternehmen in Hamburg: Analyse, Priorisierung, Umsetzung, Messung.',
        url: 'https://webseite.hamburg/leistungen/conversion-optimierung',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet Conversion-Optimierung?', a: 'Die Analyse ist kostenlos, die Umsetzung startet bei 1.200 Euro einmalig. Der genaue Festpreis hängt vom Umfang ab: eine einzelne Landingpage ist ein überschaubarer Sprint, ein kompletter Anfrageweg über mehrere Seiten ist mehr Arbeit. Sie kennen den Preis nach der Analyse und bevor Sie sich entscheiden. Keine Stundenzettel, keine Überraschungen.' },
    { q: 'Wie schnell sehe ich Ergebnisse?', a: 'Anders als bei SEO wirken die Änderungen sofort, sobald sie live sind. Ob die Wirkung messbar ist, hängt an Ihren Besucherzahlen: bei wenigen hundert Besuchern im Monat braucht es ein paar Monate, bis sich ein Unterschied sauber vom Zufall trennen lässt. Bei mehreren tausend sehen Sie es innerhalb weniger Wochen.' },
    { q: 'Brauche ich dafür eine neue Website?', a: 'Meistens nicht. Conversion-Optimierung arbeitet mit dem, was da ist: Struktur, Reihenfolge, Formulare, Ladezeit, Vertrauenselemente. Wenn die technische Basis so alt ist, dass jede Änderung teurer wird als ein Neubau, sage ich Ihnen das offen. Dann ist ein Relaunch der ehrlichere Weg.' },
    { q: 'Woher wissen Sie, was funktioniert?', a: 'Aus Ihren Daten, nicht aus meinem Geschmack. Ich schaue mir an, wo Besucher abspringen, welche Seiten Anfragen erzeugen und welche nicht, wie sich Mobil- und Desktop-Nutzung unterscheiden. Dazu kommen belegte Grundlagen aus der Forschung zu Formularen und Ladezeiten. Was ich nicht belegen kann, verkaufe ich Ihnen nicht als Gewissheit.' },
    { q: 'Machen Sie auch A/B-Tests?', a: 'Wenn genug Traffic da ist, ja. Ein A/B-Test braucht eine Mindestmenge an Besuchern, sonst misst er Rauschen und nicht Wirkung. Für die meisten lokalen Unternehmen in Hamburg ist die Menge zu klein. Dort ist es ehrlicher, offensichtliche Schwachstellen direkt zu beheben und die Anfragen über die Zeit zu vergleichen.' },
    { q: 'Lohnt sich das bei wenig Traffic?', a: 'Oft mehr als zusätzliche Werbung. Wenn 200 Menschen im Monat auf Ihrer Seite landen und zwei davon anfragen, ist der Hebel nicht mehr Besucher, sondern die 198. Der Nachweis dauert bei kleinen Zahlen länger, aber die Änderungen kosten einmalig statt monatlich.' },
    { q: 'Was ist der Unterschied zu Webdesign?', a: 'Webdesign baut die Website. Conversion-Optimierung verbessert eine Website, die es schon gibt, entlang der Frage: warum fragt jemand nicht an? Wenn Sie neu bauen, ist Conversion-Optimierung Teil des Projekts. Wenn Ihre Seite steht und zu wenig bringt, ist das hier der günstigere Eingriff.' },
];

export default function ConversionOptimierungPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Conversion-Optimierung Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/conversion-optimierung',
        description: 'Conversion-Optimierung für Unternehmen in Hamburg: Analyse der Nutzerwege, Priorisierung nach Wirkung, Umsetzung und Messung.',
        offers: { '@type': 'Offer', price: '1200', priceCurrency: 'EUR' },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Conversion-Optimierung', item: 'https://webseite.hamburg/leistungen/conversion-optimierung' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'Conversion-Optimierung' }]} />
                    <div className="subpage-hero-split">
                        <div>
                        <p className="section-kicker animate-up">Conversion-Optimierung</p>
                        <h1 className="subpage-title animate-up">Mehr Anfragen aus dem Traffic, den Sie schon haben.</h1>
                        <p className="subpage-intro animate-up">
                            Die meisten Websites haben kein Besucherproblem, sondern ein Abschlussproblem. Bevor Sie mehr Geld in Werbung stecken, lohnt sich der Blick darauf, warum die Menschen, die schon da sind, wieder gehen.
                        </p>
                        <ServiceMeta />
                        </div>
                        <div className="subpage-hero-media animate-up">
                            <img src="/leistungen/hero-conversion.svg" alt="Illustration: Trichter, in den Besucher gehen und aus dem eine rote Anfrage herauskommt" width="1200" height="900" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was Conversion-Optimierung konkret bedeutet</h2>
                    <div className="subpage-takeaway animate-up">
                        <p><strong>Conversion-Optimierung</strong> (auch CRO, Conversion Rate Optimierung) verbessert das Verhältnis von Besuchern zu Anfragen. Statt mehr Menschen auf die Seite zu holen, sorgt sie dafür, dass mehr der vorhandenen Besucher tatsächlich anrufen, schreiben oder ein Formular abschicken. Die Arbeit besteht aus vier Teilen: Analyse der Nutzerwege, Priorisierung nach Wirkung, Umsetzung und Messung.</p>
                    </div>

                    <h2 className="animate-up">Warum das oft günstiger ist als mehr Werbung</h2>
                    <p className="animate-up">Rechnen Sie es an Ihrem eigenen Fall durch. Wenn von 500 Besuchern im Monat fünf anfragen, liegt Ihre Conversion Rate bei 1 Prozent. Um die Anfragen zu verdoppeln, haben Sie zwei Wege: 500 zusätzliche Besucher kaufen, jeden Monat wieder. Oder dafür sorgen, dass aus denselben 500 Besuchern zehn Anfragen werden. Der erste Weg kostet dauerhaft, der zweite einmalig. Warum Geschwindigkeit dabei eine so große Rolle spielt, steht im Beitrag <a href="/wissen/warum-langsame-websites-kunden-kosten">warum langsame Websites Kunden kosten</a>.</p>

                    <h2 className="animate-up">Woran es bei lokalen Websites meistens liegt</h2>
                    <p className="animate-up">Die Ursachen wiederholen sich. In fast jeder Analyse tauchen dieselben sechs Punkte auf:</p>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Die Seite ist zu langsam</h3>
                            <p>Jede zusätzliche Sekunde Ladezeit kostet Abschlüsse, und zwar messbar. Auf dem Handy im Mobilfunknetz ist der Effekt am größten, und genau dort kommen die meisten lokalen Anfragen her.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Kein klarer nächster Schritt</h3>
                            <p>Wer oben auf der Seite nicht in drei Sekunden erkennt, was er als Nächstes tun soll, tut gar nichts. Ein sichtbarer, eindeutiger Handlungsaufruf schlägt fünf gleichwertige Optionen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Telefonnummer nicht antippbar</h3>
                            <p>Bei lokalen Dienstleistern ist der Anruf oft der wichtigste Weg. Eine Nummer, die auf dem Handy kein Anruf-Link ist, verliert genau die Anfragen mit der höchsten Kaufabsicht.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Formulare fragen zu viel</h3>
                            <p>Jedes zusätzliche Pflichtfeld kostet Abschlüsse. Für den ersten Kontakt braucht es selten mehr als Name, Kontaktweg und eine Zeile zum Anliegen. Den Rest klären Sie im Gespräch.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Kein Vertrauensbeleg in Sichtweite</h3>
                            <p>Bewertungen, echte Fotos, Referenzen und rechtliche Angaben gehören dorthin, wo entschieden wird, also neben das Formular und nicht nur auf eine eigene Unterseite.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Mobil rutscht der Aufruf nach unten</h3>
                            <p>Ein Layout, das am Desktop stimmt, schiebt auf dem Handy oft den Handlungsaufruf unter drei Bildschirmhöhen Fließtext. Was niemand sieht, klickt auch niemand.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">So gehe ich vor</h2>
                    <ul className="check-list animate-up">
                        <li><strong>1. Analyse:</strong> Ich schaue mir an, über welche Seiten Besucher hereinkommen, wo sie abspringen und wie sich Handy und Desktop unterscheiden. Dazu eine technische Messung von Ladezeit und Core Web Vitals sowie ein Durchgang durch den kompletten Anfrageweg, so wie ein Kunde ihn erlebt.</li>
                        <li><strong>2. Priorisierung:</strong> Sie bekommen eine Liste, sortiert nach Wirkung geteilt durch Aufwand. Oben stehen die Punkte, die viel bringen und wenig kosten. Sie entscheiden, was umgesetzt wird, nicht ich.</li>
                        <li><strong>3. Umsetzung:</strong> Ich setze die Punkte um, die Sie freigeben. Als Entwickler mache ich das selbst, es geht also kein Zwischenschritt über eine Agentur und eine externe Programmierung verloren.</li>
                        <li><strong>4. Messung:</strong> Vorher und nachher, an denselben Kennzahlen. Wenn eine Änderung nichts bringt, steht das genauso im Report wie die, die gewirkt hat.</li>
                    </ul>

                    <h2 className="animate-up">Conversion-Optimierung oder mehr Traffic?</h2>
                    <p className="animate-up">Nicht jedes Problem ist ein Conversion-Problem. Der ehrliche Vergleich:</p>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr><th>Situation</th><th>Der richtige Hebel</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Viele Besucher, kaum Anfragen</th><td>Conversion-Optimierung</td></tr>
                                <tr><th>Kaum Besucher, aber gute Abschlussquote</th><td><Link href="/leistungen/seo">SEO</Link> oder <Link href="/leistungen/google-ads">Google Ads</Link></td></tr>
                                <tr><th>Weder Besucher noch Anfragen</th><td>Erst Sichtbarkeit, dann Conversion</td></tr>
                                <tr><th>Technisch veraltete Seite</th><td><Link href="/leistungen/webdesign">Relaunch</Link>, Optimierung wäre Flickwerk</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="animate-up">Wenn Sie nicht wissen, in welcher Zeile Sie stehen: genau das klärt die kostenlose Analyse.</p>

                    <h2 className="animate-up">Was Sie bekommen</h2>
                    <div className="subpage-single-price animate-up">
                        <div className="sp-price-value">ab 1.200 &euro; einmalig</div>
                        <p>Die Analyse vorab ist kostenlos. Den Festpreis kennen Sie, bevor Sie sich entscheiden. Keine Mindestlaufzeit, keine monatliche Bindung.</p>
                        <ul className="sp-price-includes">
                            <li>Analyse des kompletten Anfragewegs, Handy und Desktop</li>
                            <li>Messung von Ladezeit und Core Web Vitals</li>
                            <li>Priorisierte Liste nach Wirkung und Aufwand</li>
                            <li>Umsetzung der freigegebenen Punkte</li>
                            <li>Sauberes Tracking, damit Anfragen überhaupt zählbar sind</li>
                            <li>Vorher-Nachher-Vergleich an denselben Kennzahlen</li>
                        </ul>
                    </div>

                    <h2 className="animate-up">Belege aus eigenen Projekten</h2>
                    <p className="animate-up">Statt allgemeiner Versprechen zwei nachrechenbare Fälle aus der eigenen Arbeit: eine Fotogalerie, die von mehreren Sekunden auf unter eine Sekunde kam, nachzulesen in der <a href="/wissen/case-study-fotogalerie-performance">Case Study zur Galerie-Performance</a>, und ein Shop, dessen organischer Traffic sich in 90 Tagen verdoppelt hat, dokumentiert unter <a href="/referenzen/dybeauty">DYBeauty</a>. Wenn Sie tiefer einsteigen wollen, erklärt der Beitrag <a href="/wissen/website-conversion-optimierung">mehr Anfragen ohne mehr Traffic</a> die Denkweise dahinter.</p>
                </div>
            </section>

            <FaqSection title="Fragen zur Conversion-Optimierung" items={faqItems} />
            <RelatedServices exclude="conversion-optimierung" />
            <ServiceCta text="Lassen Sie mich Ihren Anfrageweg einmal durchgehen. Ich sage Ihnen ehrlich, ob das Problem bei den Besuchern liegt oder bei der Seite, kostenlos und unverbindlich." />
        </>
    );
}
