import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Hotel-Website Hamburg: Direktbuchungen statt Provision',
    description: 'Was kostet eine Hotel-Website mit Direktbuchung? Ab 2.900 Euro zum Festpreis: schnelle Buchungsstrecke, Google-Buchungslinks, weniger Portalprovision.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign-hotels',
    },
    openGraph: {
        title: 'Hotel-Website Hamburg: Direktbuchungen statt Provision',
        description: 'Was kostet eine Hotel-Website mit Direktbuchung? Ab 2.900 Euro zum Festpreis, mit angebundener Buchungsmaschine.',
        url: 'https://webseite.hamburg/leistungen/webdesign-hotels',
        type: 'website',
        images: [{ url: 'https://webseite.hamburg/leistungen/branchen/hotels/zimmer.webp', width: 1200, height: 900 }],
    },
};

const faqItems = [
    { q: 'Was kostet eine Hotel-Website?', a: 'Eine individuell gestaltete Hotel-Website beginnt bei 2.900 Euro, mehrseitig mit Zimmerseiten, Angebotspaketen, Tagungsbereich und angebundener Buchungsmaske ab 4.500 Euro. Die Anbindung Ihrer Buchungsmaschine ist im Projekt enthalten, die Lizenzkosten der Buchungsmaschine selbst zahlen Sie direkt an den Anbieter, meist 50 bis 250 Euro im Monat.' },
    { q: 'Darf ich auf meiner Website günstiger sein als auf Booking.com?', a: 'Ja. Bestpreisklauseln sind in Deutschland kartellrechtlich untersagt, der Bundesgerichtshof hat das am 18. Mai 2021 letztinstanzlich für enge Bestpreisklauseln entschieden (KVR 54/20), der Europäische Gerichtshof hat am 19. September 2024 in der Sache C-264/23 nachgezogen. Zusätzlich verbietet Artikel 5 Absatz 3 des Digital Markets Act benannten Gatekeepern, Hotels bei eigenen Vertriebswegen zu beschränken. Booking Holdings ist seit dem 13. Mai 2024 als Gatekeeper benannt.' },
    { q: 'Wie viel spare ich pro Direktbuchung?', a: 'Portalprovisionen liegen je nach Programm bei etwa 15 bis 25 Prozent des Buchungswerts. Die Kosten einer Direktbuchung setzen sich aus Buchungsmaschine, Zahlungsdienstleister und Marketing zusammen und liegen typischerweise im einstelligen Prozentbereich. Bei einem Zimmerpreis von 140 Euro sind das grob 20 bis 30 Euro Unterschied pro Nacht. Ab welcher Zahl von Direktbuchungen sich eine neue Website rechnet, kann man also ausrechnen, und das machen wir im Erstgespräch.' },
    { q: 'Bekommen ich auch die kostenlosen Google-Buchungslinks?', a: 'Ja, sofern Ihre Buchungsmaschine an Google angebunden ist. Google zeigt seit 2021 kostenlose Buchungslinks im Hotelmodul der Suche und in Maps an, für Klicks darauf entstehen keine Kosten. Voraussetzung sind aktuelle Preise und Verfügbarkeiten aus Ihrem System und eine Landingpage, die direkt zum gewählten Zimmer führt. Die Einrichtung läuft in der Regel über Ihren Systemanbieter, ich stimme das mit ab.' },
    { q: 'Was ist wichtiger, Website oder Buchungsmaschine?', a: 'Die Buchungsmaschine verwaltet Verfügbarkeit und Zahlung, die Website entscheidet, ob jemand überhaupt bis zur Maschine kommt. In der Praxis scheitern Direktbuchungen an Kleinigkeiten: Preis erst nach drei Klicks sichtbar, Buchungsmaske in einem fremden Design, auf dem Handy nicht bedienbar. Genau diese Übergabe baue ich sauber.' },
    { q: 'Arbeiten Sie auch für Ferienwohnungen und Apartmenthäuser?', a: 'Ja. Die Logik ist dieselbe wie im Hotel, nur mit anderen Regeln: Mindestaufenthalt, Endreinigung, Kurtaxe und Schlüsselübergabe müssen sofort verständlich sein. Bei Ferienwohnungen ist der Provisionsanteil der Plattformen häufig noch höher, der Effekt einer eigenen Buchungsstrecke also größer.' },
];

export default function WebdesignHotelsPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign für Hotels Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/webdesign-hotels',
        description: 'Hotel-Websites in Hamburg mit Direktbuchungsstrecke, Anbindung der Buchungsmaschine und kostenlosen Google-Buchungslinks.',
        image: 'https://webseite.hamburg/leistungen/branchen/hotels/zimmer.webp',
        offers: [
            { '@type': 'Offer', name: 'Hotel-Website individuell', price: '2900', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Hotel-Website mehrseitig mit Buchungsstrecke', price: '4500', priceCurrency: 'EUR' },
        ],
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Webdesign für Hotels', item: 'https://webseite.hamburg/leistungen/webdesign-hotels' },
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
                        { label: 'Webdesign für Hotels' },
                    ]} />
                    <div className="subpage-hero-split">
                        <div>
                        <p className="section-kicker animate-up">Webdesign für Hotels</p>
                        <h1 className="subpage-title animate-up">Hotel-Websites in Hamburg, auf denen Gäste direkt buchen.</h1>
                        <p className="subpage-intro animate-up">
                            Eine Hotel-Website in Hamburg entscheidet über Ihren Deckungsbeitrag: Jede Buchung über ein Portal kostet Provision, jede Buchung über Ihre eigene Seite einen Bruchteil davon. Der Unterschied entscheidet sich an einer einzigen Stelle, nämlich daran, wie schnell ein Gast von Ihrer Startseite zu einem Preis für sein Datum kommt.
                        </p>
                        <div className="hero-proof animate-up">
                            <span>Festpreis ab 2.900 €</span>
                            <span>Direktbuchung</span>
                            <span>Google-Buchungslinks</span>
                        </div>
                        <ServiceMeta />
                        </div>
                        <div className="subpage-hero-media hero-media-framed animate-up">
                            <img src="/leistungen/branchen/hotels/zimmer.webp" alt="Helles Hotelzimmer mit grossem Fenster, Sesseln und Blick ueber die Stadt" width="1200" height="900" fetchPriority="high" decoding="async" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body is-inset">
                    <h2 className="animate-up">Was kostet eine Hotel-Website in Hamburg?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Eine Hotel-Website kostet bei mir <strong>ab 2.900 Euro</strong> einseitig und <strong>ab 4.500 Euro</strong> mehrseitig mit Zimmerseiten, Angeboten und angebundener Buchungsmaske. Portalprovisionen liegen je nach Programm bei etwa 15 bis 25 Prozent, die Kosten einer Direktbuchung meist im einstelligen Prozentbereich. Die Website rechnet sich also über die Zahl der Direktbuchungen, nicht über das Design.</p>
                    </div>

                    <div className="subpage-story animate-up">
                        <span className="subpage-story-label">Aus der Praxis</span>
                        <p>
                            Es gibt einen Fehler, den ich bei Hotels immer wieder sehe und der mich jedes Mal fasziniert: Auf der eigenen Startseite ist der auffälligste Knopf der zum Buchungsportal. Er ist größer, bunter und leichter zu finden als die eigene Buchungsmaske. Das Hotel bewirbt also mit eigenem Geld den Kanal, der ihm zweistellige Prozente abzieht. Am Empfang würde niemand einen Zettel aushängen mit der Bitte, doch bitte über einen Vermittler zu buchen.
                        </p>
                        <p>
                            Variante zwei: Die eigene Buchungsmaske existiert, sieht aber aus wie aus einem anderen Jahrzehnt, öffnet sich in einem neuen Fenster und verlangt zuerst eine Anmeldung. Der Gast bricht ab, geht zurück zum Portal, bucht dort, und in der Auswertung steht dann, dass Direktbuchungen bei diesem Haus einfach nicht funktionieren.
                        </p>
                        <p>
                            Meine Reihenfolge bei Hotel-Projekten ist deshalb immer gleich: erst der Weg zum Preis, dann die Bilder, dann alles andere. Ein Gast, der in zwei Klicks einen Preis für sein Wochenende sieht, ist bereits ein halber Direktbucher.
                        </p>
                    </div>

                    <h2 className="animate-up">Wie buchen Gäste in Deutschland tatsächlich?</h2>
                    <div className="subpage-split animate-up">
                        <div className="sp-split-media">
                            <img src="/leistungen/branchen/hotels/buchung.webp" alt="Gast sitzt am Schreibtisch eines Hotelzimmers am Laptop und bucht online" width="1200" height="900" loading="lazy" decoding="async" />
                            <p className="sp-split-caption">Der Direktkanal ist der größte Buchungsweg und trotzdem oft der am schlechtesten ausgestattete.</p>
                        </div>
                        <div className="sp-split-body">
                            <p>
                                Die europäische Vertriebsstudie von HOTREC (Erhebungsjahr 2023) zeigt für Deutschland ein Bild, das viele Hoteliers unterschätzen: 58,2 Prozent der Übernachtungen kommen über direkte Kanäle, davon 22,7 Prozent per E-Mail, 19,3 Prozent über die eigene Website samt Buchungsmaschine, 13,8 Prozent per Telefon und 2,4 Prozent als Laufkundschaft. Auf Portale entfallen 31,2 Prozent. Innerhalb des Portalsegments dominiert eine Firmengruppe: Booking Holdings kommt in Deutschland auf rund 72 Prozent.
                            </p>
                            <p>
                                Zwei Schlüsse daraus. Erstens: Der Direktkanal ist kein Nischenthema, er ist der größte Kanal, wird aber oft am schlechtesten ausgestattet. Zweitens: Wer nur auf Booking optimiert, optimiert für einen Anbieter mit sehr großer Verhandlungsmacht. Ein zweites Bein tut nicht weh.
                            </p>
                        </div>
                    </div>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">58,2%</span>
                            <span className="subpage-stat-label">der Übernachtungen in Deutschland kommen über direkte Kanäle (HOTREC 2024, Daten 2023)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">19,3%</span>
                            <span className="subpage-stat-label">davon über die eigene Hotel-Website mit Buchungsmaschine (HOTREC 2024)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">57,6%</span>
                            <span className="subpage-stat-label">durchschnittliche Bettenauslastung in Hamburg im April 2026 (Statistikamt Nord)</span>
                        </div>
                    </div>

                    <figure className="subpage-figure is-band animate-up">
                        <img src="/leistungen/branchen/hotels/suite.webp" alt="Langes Hotelzimmer mit Fensterfront, Bett und warmem Abendlicht" width="1800" height="760" loading="lazy" decoding="async" />
                        <figcaption>Gleicher Gast, gleiches Zimmer, unterschiedlicher Deckungsbeitrag.</figcaption>
                    </figure>

                    <h2 className="animate-up">Direktbuchung und Portal im Vergleich</h2>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr>
                                    <th>Kriterium</th>
                                    <th>Buchung über Portal</th>
                                    <th>Buchung über Ihre Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Vertriebskosten</td>
                                    <td>etwa 15 bis 25 Prozent Provision, je nach Programm und Sichtbarkeitspaket</td>
                                    <td>Buchungsmaschine, Zahlungsdienstleister und Marketing, meist einstellig</td>
                                </tr>
                                <tr>
                                    <td>Gästedaten</td>
                                    <td>eingeschränkt, Kommunikation läuft über die Plattform</td>
                                    <td>vollständig bei Ihnen, Grundlage für Wiederkehr und Newsletter</td>
                                </tr>
                                <tr>
                                    <td>Preisgestaltung</td>
                                    <td>Rahmen der Plattform, Rabattprogramme wirken auf Ihre Marge</td>
                                    <td>frei, inklusive Direktbucher-Vorteilen und exklusiven Paketen</td>
                                </tr>
                                <tr>
                                    <td>Zusatzverkäufe</td>
                                    <td>kaum steuerbar</td>
                                    <td>Frühstück, Spätanreise, Parkplatz, Spa, direkt in der Strecke</td>
                                </tr>
                                <tr>
                                    <td>Sichtbarkeit</td>
                                    <td>hoch, aber gemietet</td>
                                    <td>eigene Suchsichtbarkeit plus kostenlose Google-Buchungslinks</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="animate-up">
                        Portale abschaffen ist selten das Ziel. Sie sind Schaufenster und bringen Gäste, die Sie sonst nie erreichen. Das Ziel ist, dass ein Gast, der Ihr Haus schon kennt und den Namen googelt, nicht wieder im Portal landet. Diese Buchung sollte Ihnen gehören.
                    </p>

                    <h2 className="animate-up">Was muss eine Hotel-Website leisten?</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Preis in zwei Klicks</h3>
                            <p>Datumsauswahl direkt oben auf der Startseite, Übergabe an die Buchungsmaschine ohne Design-Bruch und ohne Pflichtanmeldung. Jeder Zwischenschritt kostet Buchungen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Direktbucher-Vorteil sichtbar</h3>
                            <p>Ein klar benannter Vorteil, der nur hier gilt: Frühstück inklusive, späterer Check-out, flexible Storno, Getränk bei Anreise. Rechtlich zulässig und wirksamer als ein Prozentzeichen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Zimmerseiten mit echten Bildern</h3>
                            <p>Pro Kategorie eine Seite mit Größe, Bett, Ausblick, Ausstattung und Bildern, die dem Zimmer entsprechen. Enttäuschte Erwartungen erzeugen die Bewertungen, die später Buchungen kosten.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Tagungen und Gruppen</h3>
                            <p>Eigene Seiten für Veranstaltungsräume, Bestuhlung, Technik und Verpflegung, dazu ein Anfrageformular mit den Feldern, die Ihr Verkauf wirklich braucht. Diese Anfragen haben den höchsten Wert.</p>
                        </div>
                    </div>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Anbindung Ihrer Systeme</h3>
                            <p>Buchungsmaschine, Channel Manager und Zahlungsanbieter werden eingebunden, statt parallel gepflegt. Preise und Verfügbarkeiten kommen aus einer Quelle.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Kostenlose Google-Buchungslinks</h3>
                            <p>Wenn Ihr System angebunden ist, erscheint Ihr Direktpreis im Hotelmodul der Google-Suche und in Maps. Klicks darauf sind gebührenfrei. Wir prüfen die Voraussetzungen gemeinsam mit Ihrem Anbieter.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Mehrsprachigkeit</h3>
                            <p>Hamburg ist Städtereise- und Messeziel. Eine saubere englische Fassung ist Pflicht, weitere Sprachen je nach Gästestruktur. Wie das technisch aussieht, zeigt <Link href="/referenzen/solovei-beauty">dieses dreisprachige Projekt</Link>.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Tempo unter Last</h3>
                            <p>Bildlastige Hotelseiten sind die üblichen Verdächtigen bei schlechten Ladezeiten. Moderne Formate, echte Größenanpassung und wenig Skript-Ballast, damit die Seite auch im Hotel-WLAN steht. Hintergrund im <Link href="/wissen/warum-langsame-websites-kunden-kosten">Artikel zur Ladezeit</Link>.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Preise</h2>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>Hotel-Website individuell</h3>
                            <div className="sp-price-value">ab 2.900 &euro;</div>
                            <p>Eine Seite mit allem, was zur Buchung nötig ist. Für kleine Häuser, Pensionen und Apartmenthäuser.</p>
                            <ul className="sp-price-includes">
                                <li>Individuelles Design mit Ihren Fotos</li>
                                <li>Datumsauswahl und Übergabe an die Buchungsmaschine</li>
                                <li>Zimmerübersicht mit Preisen</li>
                                <li>Anfahrt, Kontakt, Klick-zum-Anruf</li>
                                <li>Lokale SEO-Grundlage</li>
                                <li>PageSpeed 90 bis 100</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Hotel-Website mit Buchungsstrecke</h3>
                            <div className="sp-price-value">ab 4.500 &euro;</div>
                            <p>Mehrseitig mit Zimmerkategorien, Angeboten und Tagungsbereich. Für Häuser, die den Direktkanal ernsthaft ausbauen wollen.</p>
                            <ul className="sp-price-includes">
                                <li>Seite je Zimmerkategorie</li>
                                <li>Angebots- und Paketseiten</li>
                                <li>Tagungs- und Gruppenanfragen</li>
                                <li>Anbindung Buchungsmaschine und Channel Manager</li>
                                <li>Vorbereitung der Google-Buchungslinks</li>
                                <li>Zweite Sprache inklusive</li>
                                <li>Strukturierte Daten für Hotel und Angebote</li>
                                <li>Conversion-Tracking bis zur Buchungsbestätigung</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Verwandte Projekte</h2>
                    <div className="subpage-cases animate-up">
                        <Link href="/referenzen/manetec" className="subpage-case-card">
                            <span className="subpage-case-metric">Hotellerie Hamburg</span>
                            <span className="subpage-case-name">Manetec: Dienstleister für Hamburger Hotels und Gastronomie</span>
                        </Link>
                        <Link href="/referenzen/solovei-beauty" className="subpage-case-card">
                            <span className="subpage-case-metric">3 Sprachen, 1 Buchung</span>
                            <span className="subpage-case-name">Solovei Beauty: mehrsprachige Plattform mit Buchungslogik</span>
                        </Link>
                        <Link href="/referenzen/blitz-hamburg" className="subpage-case-card">
                            <span className="subpage-case-metric">ROI in 7 Wochen</span>
                            <span className="subpage-case-name">Blitz Hamburg: Website plus Ads plus SEO im Verbund</span>
                        </Link>
                    </div>

                    <h2 className="animate-up">Wie läuft ein Hotel-Website-Projekt ab?</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Kanalanalyse, kostenlos</strong><p>Wir schauen auf Ihre aktuelle Verteilung zwischen Portal und Direktbuchung, auf Provisionshöhe und auf den Weg zum Preis auf Ihrer Seite.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Buchungsstrecke planen</strong><p>Welche Buchungsmaschine, welcher Direktbucher-Vorteil, welche Pakete. Erst danach reden wir über Design, weil das Design dieser Strecke folgt.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Bauen und anbinden</strong><p>Umsetzung, Anbindung von Buchungsmaschine und Tracking, Abstimmung mit Ihrem Systemanbieter zu den Google-Buchungslinks.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Messen und nachschärfen</strong><p>Nach vier Wochen sehen wir, wo Gäste in der Strecke abbrechen, und beheben genau diese Stellen. Ohne Messung ist alles Geschmackssache.</p></div></div>
                    </div>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>HOTREC, European Hotel Distribution Study 2024 (Erhebungsjahr 2023), Kurzfassung Deutschland und Europa: Direktvertrieb 58,2 Prozent, eigene Website 19,3 Prozent, OTA 31,2 Prozent, Booking Holdings rund 72 Prozent Anteil im OTA-Segment. <a href="https://www.hotellerie.de/fileadmin/user_upload/Dokumente/Studien_und_Umfragen/HOTREC_Distribution_Study_2024_-_Germany_and_Europe_short.pdf" rel="nofollow noopener" target="_blank">hotellerie.de (PDF)</a></li>
                            <li>Statistikamt Nord, Tourismus in Hamburg: 427 geöffnete Beherbergungsstätten mit 83.679 Schlafgelegenheiten, Auslastung 57,6 Prozent, durchschnittliche Aufenthaltsdauer 2,1 Tage (April 2026). <a href="https://www.statistik-nord.de/zahlen-fakten/handel-tourismus-dienstleistungen/tourismus" rel="nofollow noopener" target="_blank">statistik-nord.de</a></li>
                            <li>Europäische Kommission, Digital Markets Act, benannte Gatekeeper (Booking Holdings seit 13. Mai 2024), Artikel 5 Absatz 3 zum Verbot von Beschränkungen eigener Vertriebswege. <a href="https://digital-markets-act.ec.europa.eu/gatekeepers_en" rel="nofollow noopener" target="_blank">ec.europa.eu</a></li>
                            <li>Google Hotel Center Hilfe, kostenlose Buchungslinks: keine Kosten für Klicks, Voraussetzungen und Ranking-Signale. <a href="https://support.google.com/hotelprices/answer/10472393?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                            <li>Hotelverband Deutschland (IHA), Positionen und Leitfäden zum Hotelvertrieb. <a href="https://www.hotellerie.de/" rel="nofollow noopener" target="_blank">hotellerie.de</a></li>
                            <li>Rechtsprechung zu Bestpreisklauseln: BGH, Beschluss vom 18. Mai 2021, KVR 54/20; EuGH, Urteil vom 19. September 2024, C-264/23.</li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Häufige Fragen zu Hotel-Websites" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Nennen Sie mir Ihre Provisionsquote und Ihre Zimmerzahl. Dann rechnen wir gemeinsam aus, wie viele Direktbuchungen pro Monat nötig sind, damit sich eine neue Website bezahlt." />
        </>
    );
}
