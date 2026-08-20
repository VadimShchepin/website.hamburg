import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Volle Tische | Restaurant-Website Hamburg',
    description: 'Websites für Restaurants und Cafés in Hamburg: Speisekarte mobil lesbar, Reservierung ohne Provision, Google Maps gepflegt. Ab 1.500 Euro.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign-gastronomie',
    },
    openGraph: {
        title: 'Volle Tische | Restaurant-Website Hamburg',
        description: 'Websites für Restaurants und Cafés in Hamburg: Speisekarte mobil lesbar, Reservierung ohne Provision, Google Maps gepflegt.',
        url: 'https://webseite.hamburg/leistungen/webdesign-gastronomie',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet eine Website für ein Restaurant?', a: 'Der Einstieg ist die Website-Start ab 1.500 Euro: eine Seite mit Speisekarte, Öffnungszeiten, Karte und Reservierungsweg, fertig in zwei bis fünf Arbeitstagen, Texte und Fotos kommen von Ihnen. Eine individuell gestaltete Restaurant-Website mit eigener Bildsprache beginnt bei 2.900 Euro, mehrseitig mit Eventbereich und Catering ab 4.500 Euro.' },
    { q: 'Brauche ich überhaupt eine Website, wenn ich Google und Instagram habe?', a: 'Google und Instagram bringen Aufmerksamkeit, aber Sie besitzen sie nicht. Ein gesperrtes Konto, ein geänderter Algorithmus oder ein Profil ohne Speisekarte kostet direkt Gäste. Laut Bitkom (2024) erwarten 69 Prozent der Gäste in Deutschland, dass ein Restaurant eine eigene Website mit Fotos hat, und 53 Prozent schauen vor dem Besuch online die Speisekarte an. Die Website ist die Version, die Ihnen gehört.' },
    { q: 'Muss ich Allergene auf der Website angeben?', a: 'Wenn Sie auf der Website konkrete Speisen mit Preisen zeigen, gehören die Angaben zu den 14 Hauptallergenen nach der EU-Lebensmittelinformationsverordnung dazu, üblicherweise als Fußnoten oder Legende. Ich baue die Speisekarte so, dass Sie Allergene und Zusatzstoffe pro Gericht pflegen können, ohne für jede Änderung ein neues PDF zu erzeugen.' },
    { q: 'Welches Reservierungssystem empfehlen Sie?', a: 'Das hängt vom Volumen ab. Für kleine Betriebe reicht oft ein Formular plus Telefon, das kostet keine Provision. Ab etwa 20 Reservierungen am Tag lohnt ein System wie OpenTable, quandoo, resmio oder Formitable, das Tischbelegung und Absagen verwaltet. Ich binde ein, was Sie schon nutzen, und mache den Reservierungsweg auf dem Handy zur größten Schaltfläche der Seite.' },
    { q: 'Können Sie auch Lieferung und Abholung einbinden?', a: 'Ja. Abholbestellungen über ein eigenes Formular oder einen einfachen Shop sind provisionsfrei und lohnen sich schnell, wenn Sie sonst 25 bis 30 Prozent an Lieferplattformen zahlen. Für echten Lieferbetrieb mit Fahrern sprechen wir über die Prozesse dahinter, nicht nur über die Website.' },
    { q: 'Wie schnell kann die Seite online sein?', a: 'Die Website-Start ist in zwei bis fünf Arbeitstagen live, wenn Speisekarte und Fotos vorliegen. Eine individuell gestaltete Seite dauert zwei bis vier Wochen. Erfahrungsgemäß ist der Engpass nicht die Technik, sondern brauchbare Fotos. Wenn nötig, hole ich einen Fotografen dazu.' },
];

export default function WebdesignGastronomiePage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign für Restaurants und Gastronomie Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/webdesign-gastronomie',
        description: 'Websites für Restaurants, Cafés und Bars in Hamburg: mobile Speisekarte mit Allergenangaben, Reservierung ohne Provision, lokale Sichtbarkeit.',
        offers: [
            { '@type': 'Offer', name: 'Website-Start Gastronomie', price: '1500', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Restaurant-Website individuell', price: '2900', priceCurrency: 'EUR' },
        ],
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Webdesign für Gastronomie', item: 'https://webseite.hamburg/leistungen/webdesign-gastronomie' },
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
                        { label: 'Webdesign für Gastronomie' },
                    ]} />
                    <p className="section-kicker animate-up">Webdesign für Gastronomie</p>
                    <h1 className="subpage-title animate-up">Restaurant-Websites in Hamburg, die Tische füllen statt Preise zu verstecken.</h1>
                    <p className="subpage-intro animate-up">
                        Ein Gast steht um 18:40 Uhr in der Schanze, hat Hunger und ein Handy in der Hand. Er entscheidet in etwa zwanzig Sekunden. In diesen zwanzig Sekunden muss Ihre Seite drei Dinge zeigen: was es gibt, was es kostet, ob noch ein Tisch frei ist. Alles andere ist Dekoration.
                    </p>
                    <ServiceMeta />
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was kostet eine Restaurant-Website?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Der Einstieg kostet <strong>ab 1.500 Euro</strong> (eine Seite, bewährtes Layout, Speisekarte und Reservierungsweg, fertig in zwei bis fünf Arbeitstagen). Eine individuell gestaltete Restaurant-Website beginnt bei <strong>2.900 Euro</strong>, mehrseitig mit Events und Catering bei <strong>4.500 Euro</strong>. Laufende Kosten für Hosting und Domain liegen bei etwa 15 Euro im Monat.</p>
                    </div>

                    <div className="subpage-story animate-up">
                        <span className="subpage-story-label">Aus der Praxis</span>
                        <p>
                            Die häufigste Speisekarte im Hamburger Gastro-Web ist ein PDF. Vier Megabyte, im Querformat gescannt, entstanden 2021 in einem Textprogramm. Auf dem Handy lädt es so lange, dass der Gast in der Zwischenzeit zum Laden nebenan weiterläuft. Und wenn es geladen ist, muss er zoomen, schieben, drehen und dann feststellen, dass die Preise von vor zwei Preisrunden stammen.
                            Kein Design-Problem, ein Umsatzproblem.
                        </p>
                        <p>
                            Der zweite Klassiker steht bei Google: Öffnungszeiten von vor der Sommerpause, Ruhetag falsch, und die Karte zeigt den Hintereingang. Beides lässt sich in einer Stunde reparieren und ist trotzdem in gefühlt jedem zweiten Betrieb offen. Deshalb ist der erste Schritt bei Gastro-Projekten fast nie die neue Website, sondern der Blick auf das Google-Unternehmensprofil.
                        </p>
                        <p>
                            Danach gilt eine einfache Regel: Die Speisekarte ist die Startseite. Nicht ein Video von der Küche, nicht das Willkommenswort des Inhabers, sondern das, wofür Leute wirklich kommen.
                        </p>
                    </div>

                    <h2 className="animate-up">Wie Gäste heute ein Restaurant auswählen</h2>
                    <p className="animate-up">
                        Bitkom hat 2024 rund 1.000 Personen ab 16 Jahren dazu befragt. Das Ergebnis ist eindeutig: 69 Prozent erwarten, dass ein Betrieb eine Website mit Fotos von Speisen und Räumen hat. 53 Prozent sehen sich vorab die Speisekarte online an, bei den 16- bis 29-Jährigen sind es 65 Prozent. Für 30 Prozent sind Online-Bewertungen das wichtigste Kriterium bei der Wahl eines neuen Lokals, und 39 Prozent schreiben nach dem Besuch selbst eine.
                    </p>
                    <p className="animate-up">
                        Dazu kommt der wirtschaftliche Druck. Nach Angaben des Statistischen Bundesamtes lag der Umsatz im Gastgewerbe 2025 preisbereinigt 2,1 Prozent unter dem Vorjahr. In einem Markt mit dünnen Margen ist jede provisionsfreie Reservierung und jede Abholbestellung ohne Plattformgebühr direkt Ergebnis. Genau da verdient eine eigene Website ihr Geld.
                    </p>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">69%</span>
                            <span className="subpage-stat-label">der Gäste erwarten eine eigene Website mit Fotos (Bitkom 2024)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">53%</span>
                            <span className="subpage-stat-label">prüfen vorab die Speisekarte online, bei 16 bis 29 Jahren 65 Prozent (Bitkom 2024)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">5.400+</span>
                            <span className="subpage-stat-label">Gastronomieunternehmen in Hamburg (DEHOGA Hamburg)</span>
                        </div>
                    </div>

                    <figure className="subpage-figure animate-up">
                        <img src="/leistungen/branchen/gastronomie.svg" alt="Illustration: Smartphone mit Kartenausschnitt und Standort-Pin, digitale Speisekarte und ein gedeckter Tisch mit Reservierungsschild" width="1600" height="900" loading="lazy" />
                        <figcaption>Karte, Speisekarte, Tisch: Der Weg vom Suchergebnis zum belegten Platz ist kurz und bricht an jeder Hürde ab.</figcaption>
                    </figure>

                    <h2 className="animate-up">Was auf eine Gastro-Website gehört</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Speisekarte als echte Seite</h3>
                            <p>Kein PDF, sondern Text, den Google lesen und ein Handy sofort anzeigen kann. Mit Preisen, Allergenkennzeichnung und einem Pflegebereich, in dem Sie das Tagesgericht in zwei Minuten ändern.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Reservierung in einem Schritt</h3>
                            <p>Große Schaltfläche, wenige Felder, Bestätigung per Mail. Auf dem Handy zusätzlich die Telefonnummer als Klick-Link, weil ein Teil der Gäste immer anrufen wird.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Öffnungszeiten an einer Stelle</h3>
                            <p>Zeiten, Ruhetage und Feiertage werden einmal gepflegt und erscheinen auf der Website und im Google-Profil. Kein Widerspruch zwischen zwei Quellen, den am Ende der Gast bemerkt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Fotos, die das Essen zeigen</h3>
                            <p>Echte Bilder Ihrer Gerichte und Räume statt Stockfotos aus einer anderen Küche. Komprimiert und in modernen Formaten, damit die Seite trotz Bildern in unter einer Sekunde steht.</p>
                        </div>
                    </div>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Pflichtangaben ohne Abmahnrisiko</h3>
                            <p>Endpreise inklusive Umsatzsteuer nach Preisangabenverordnung, Allergene nach EU-Verordnung 1169/2011, Impressum nach § 5 DDG. Unspektakulär, aber teuer, wenn es fehlt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Events, Catering, Gutscheine</h3>
                            <p>Eigene Seiten für Weihnachtsfeiern, Firmenessen und Gutscheine. Das sind die Anfragen mit dem höchsten Wert pro Gast, und sie kommen fast immer über die Suche.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Google-Profil und Bewertungen</h3>
                            <p>Kategorien, Fotos, Speisekarten-Link, Antworten auf Bewertungen. Der größte Hebel im Umkreis von zwei Kilometern, Schritt für Schritt erklärt im <Link href="/wissen/google-business-profile-optimieren">Leitfaden zum Google-Unternehmensprofil</Link>.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Mehrsprachigkeit, wenn es passt</h3>
                            <p>In der Hamburger Innenstadt und an der Reeperbahn ist eine englische Fassung der Karte oft die günstigste Umsatzsteigerung. Wie mehrsprachig sauber geht, zeigt der Fall <Link href="/referenzen/solovei-beauty">Solovei Beauty</Link>.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Pflichtangaben-Kurzcheck</h2>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr>
                                    <th>Thema</th>
                                    <th>Was gilt</th>
                                    <th>Rechtsgrundlage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Allergene und Zusatzstoffe</td>
                                    <td>Die 14 Hauptallergene müssen erkennbar sein, üblich sind Fußnoten oder eine Legende zur Karte</td>
                                    <td>EU-Verordnung 1169/2011 (LMIV), § 4 LMIDV</td>
                                </tr>
                                <tr>
                                    <td>Preise</td>
                                    <td>Endpreise inklusive Umsatzsteuer und Bedienungsgeld, keine Nettopreise gegenüber Gästen</td>
                                    <td>§ 13 Preisangabenverordnung</td>
                                </tr>
                                <tr>
                                    <td>Impressum</td>
                                    <td>Firma, Rechtsform, Anschrift, Telefon, E-Mail, Register und Umsatzsteuer-Identifikationsnummer</td>
                                    <td>§ 5 Digitale-Dienste-Gesetz</td>
                                </tr>
                                <tr>
                                    <td>Reservierungsdaten</td>
                                    <td>Datenschutzhinweis am Formular, Speicherdauer geklärt, keine unnötigen Pflichtfelder</td>
                                    <td>DSGVO, Art. 13</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="animate-up">
                        Ich bin kein Anwalt, und dieser Kurzcheck ist keine Rechtsberatung. Er ist die Liste, die ich vor jedem Gastro-Launch durchgehe, damit die üblichen Abmahnthemen keine Rolle spielen.
                    </p>

                    <h2 className="animate-up">Preise</h2>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>Website-Start</h3>
                            <div className="sp-price-value">ab 1.500 &euro;</div>
                            <p>Eine Seite, bewährtes Layout, in zwei bis fünf Arbeitstagen online. Texte und Fotos kommen von Ihnen.</p>
                            <ul className="sp-price-includes">
                                <li>Speisekarte als pflegbare Seite</li>
                                <li>Öffnungszeiten und Anfahrt</li>
                                <li>Reservierung per Formular und Telefon</li>
                                <li>Google-Maps-Einbindung</li>
                                <li>Impressum und Datenschutz vorbereitet</li>
                                <li>PageSpeed-optimiert</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Restaurant-Website individuell</h3>
                            <div className="sp-price-value">ab 2.900 &euro;</div>
                            <p>Eigene Bildsprache, eigener Charakter. Für Betriebe, die sich vom Nachbarn unterscheiden wollen und nicht nur informieren.</p>
                            <ul className="sp-price-includes">
                                <li>Individuelles Design mit Ihren Fotos</li>
                                <li>Speisekarte mit Allergenpflege</li>
                                <li>Anbindung Ihres Reservierungssystems</li>
                                <li>Seiten für Events, Catering und Gutscheine</li>
                                <li>Strukturierte Daten für Restaurant und Speisekarte</li>
                                <li>Zweite Sprache optional</li>
                                <li>Google-Profil-Optimierung inklusive</li>
                                <li>Einweisung für Ihr Team</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Referenzen aus Hamburg</h2>
                    <div className="subpage-cases animate-up">
                        <Link href="/referenzen/manetec" className="subpage-case-card">
                            <span className="subpage-case-metric">Hotellerie und Gastro</span>
                            <span className="subpage-case-name">Manetec: Website für Schädlingsbekämpfung in Hamburger Betrieben</span>
                        </Link>
                        <Link href="/referenzen/glucksmomente-events" className="subpage-case-card">
                            <span className="subpage-case-metric">Event-Website</span>
                            <span className="subpage-case-name">Glücksmomente Events: Aquarell-Ästhetik statt Baukastenvorlage</span>
                        </Link>
                        <Link href="/referenzen/blitz-hamburg" className="subpage-case-card">
                            <span className="subpage-case-metric">ROI in 7 Wochen</span>
                            <span className="subpage-case-name">Blitz Hamburg: lokaler Dienstleister mit Website, Ads und SEO</span>
                        </Link>
                    </div>

                    <h2 className="animate-up">Der Ablauf</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Kurzcheck, kostenlos</strong><p>Ich sehe mir Google-Profil, aktuelle Seite und Reservierungsweg an und sage Ihnen, was der schnellste Hebel ist. Manchmal ist das nicht die Website.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Inhalte sammeln</strong><p>Karte, Preise, Allergene, Fotos, Zeiten. Sie schicken, was da ist, ich sage, was fehlt, und organisiere bei Bedarf einen Fotografen.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Bauen und testen</strong><p>Aufbau, Reservierungsweg und Ladezeit werden am Handy getestet, nicht am 27-Zoll-Monitor. Der Test entscheidet, wie groß die Reservierungsschaltfläche wird.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Launch und Profilpflege</strong><p>Live-Gang, Google-Profil aktualisieren, Bewertungsantworten einrichten. Sie bekommen eine Einweisung, mit der Ihr Team die Karte selbst pflegt.</p></div></div>
                    </div>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Bitkom e. V. (27. Juni 2024), Restaurants und Cafés: 69 Prozent erwarten eine Website mit Fotos, 53 Prozent prüfen die Speisekarte online (16 bis 29 Jahre: 65 Prozent), 30 Prozent nennen Bewertungen als wichtigstes Kriterium, 39 Prozent schreiben selbst Bewertungen. Befragung von 1.005 Personen ab 16 Jahren. <a href="https://www.bitkom.org/Presse/Presseinformation/Restaurants-und-Cafes-Online-Bewertungen-entscheidend" rel="nofollow noopener" target="_blank">bitkom.org</a></li>
                            <li>Statistisches Bundesamt (Februar 2026), Gastgewerbeumsatz 2025 real 2,1 Prozent niedriger als im Vorjahr. <a href="https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/02/PD26_054_45213.html" rel="nofollow noopener" target="_blank">destatis.de</a></li>
                            <li>DEHOGA Hamburg, Zahlen, Daten, Fakten zur Hamburger Gastronomie und Hotellerie. <a href="https://www.dehoga-hamburg.de/branche/zahlen-daten-fakten/" rel="nofollow noopener" target="_blank">dehoga-hamburg.de</a></li>
                            <li>Bundesministerium für Ernährung und Landwirtschaft, Allergenkennzeichnung nach EU-Verordnung 1169/2011. <a href="https://www.bmel.de/DE/themen/ernaehrung/lebensmittel-kennzeichnung/pflichtangaben/allergenkennzeichnung.html" rel="nofollow noopener" target="_blank">bmel.de</a></li>
                            <li>§ 13 Preisangabenverordnung, Gaststätten und ähnliche Betriebe. <a href="https://www.gesetze-im-internet.de/pangv_2022/__13.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                            <li>§ 5 Digitale-Dienste-Gesetz, allgemeine Informationspflichten. <a href="https://www.gesetze-im-internet.de/ddg/__5.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Häufige Fragen zu Restaurant-Websites" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Schicken Sie mir den Link zu Ihrer Seite und Ihrem Google-Profil. Ich sage Ihnen kostenlos, wo Reservierungen verloren gehen und was sich in einer Stunde reparieren lässt." />
        </>
    );
}
