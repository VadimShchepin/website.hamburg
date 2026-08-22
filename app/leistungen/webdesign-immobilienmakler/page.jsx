import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Makler-Website Hamburg: Webdesign für Immobilienmakler',
    description: 'Was kostet eine Makler-Website? Ab 2.900 Euro zum Festpreis: Eigentümer gewinnen statt Portale füttern, Pflichtangaben nach § 87 GEG sauber gelöst.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign-immobilienmakler',
    },
    openGraph: {
        title: 'Makler-Website Hamburg: Webdesign für Immobilienmakler',
        description: 'Was kostet eine Makler-Website? Ab 2.900 Euro zum Festpreis, auf Eigentümer-Akquise statt Portalpflege gebaut.',
        url: 'https://webseite.hamburg/leistungen/webdesign-immobilienmakler',
        type: 'website',
        images: [{ url: 'https://webseite.hamburg/leistungen/branchen/makler/besichtigung.webp', width: 1200, height: 900 }],
    },
};

const faqItems = [
    { q: 'Was kostet eine Website für ein Maklerbüro?', a: 'Eine individuell gestaltete Makler-Website mit Bewertungsanfrage und Objektübersicht beginnt bei 2.900 Euro. Mehrseitig mit Ratgeberbereich, Stadtteilseiten und Teamprofilen liegt sie ab 4.500 Euro. Objektdaten aus Ihrer Maklersoftware anzubinden, etwa per OpenImmo-Schnittstelle, kalkuliere ich je nach System dazu.' },
    { q: 'Brauche ich eine Website, wenn ich über ImmoScout24 verkaufe?', a: 'Für Käufer nicht, für Eigentümer schon. Laut Bitkom-Befragung 2025 nutzen 81 Prozent der Wohnungssuchenden große Portale, aber nur 19 Prozent die Websites einzelner Anbieter. Käufer kommen also über die Portale. Die Frage, wem ein Eigentümer sein Objekt anvertraut, entscheidet sich anders: über Marktkenntnis, Referenzen und den ersten Eindruck. Genau das ist die Aufgabe Ihrer Website.' },
    { q: 'Welche Pflichtangaben muss ein Objektinserat enthalten?', a: 'Liegt ein Energieausweis vor, verlangt § 87 GEG fünf Angaben in jeder kommerziellen Anzeige, also auch auf Ihrer eigenen Website: Art des Ausweises, Endenergiewert, wesentlicher Energieträger, Baujahr und bei Wohngebäuden die Energieeffizienzklasse. Fehlende Angaben sind eine Ordnungswidrigkeit mit Bußgeld bis zu 10.000 Euro nach § 108 GEG, dazu kommt Abmahnrisiko. Ich baue die Objektvorlage so, dass diese Felder nicht vergessen werden können.' },
    { q: 'Wie gehe ich mit dem Widerrufsrecht bei Online-Anfragen um?', a: 'Fordert ein Verbraucher über Ihr Formular ein Exposé an und besteht eine Provisionsabrede, entsteht ein Fernabsatzvertrag mit 14-tägigem Widerrufsrecht nach §§ 312g, 355 BGB. Ohne korrekte Belehrung verlängert sich die Frist erheblich, und der Provisionsanspruch kann entfallen. Technisch löse ich das mit Belehrung, Muster-Widerrufsformular und einer dokumentierten Zustimmung vor dem Download. Die juristische Endabnahme macht Ihr Anwalt, ich baue die Mechanik.' },
    { q: 'Können Sie Objekte aus meiner Maklersoftware übernehmen?', a: 'Ja, wenn Ihr System exportieren kann. Der Standard OpenImmo wird von den meisten Programmen unterstützt, damit lassen sich Objekte automatisch übertragen und aktuell halten. Alternativ pflegen Sie Objekte im CMS, was bei kleinen Beständen oft schneller ist als jede Schnittstelle.' },
    { q: 'Lohnt sich ein Ratgeberbereich?', a: 'Bei der Eigentümer-Akquise ja. Fragen wie „Was ist meine Wohnung in Ottensen wert" oder „Welche Unterlagen brauche ich für den Verkauf" werden gesucht, bevor ein Makler gesucht wird. Wer diese Fragen beantwortet, bekommt den Anruf. Das ist derselbe Mechanismus wie bei diesem Wissensbereich hier, nur für Immobilien.' },
];

export default function WebdesignImmobilienmaklerPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign für Immobilienmakler Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/webdesign-immobilienmakler',
        description: 'Websites für Immobilienmakler in Hamburg: Eigentümer-Akquise, Objektdarstellung mit Pflichtangaben nach GEG, Anbindung der Maklersoftware.',
        image: 'https://webseite.hamburg/leistungen/branchen/makler/besichtigung.webp',
        offers: [
            { '@type': 'Offer', name: 'Makler-Website individuell', price: '2900', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Makler-Website mehrseitig mit Ratgeber', price: '4500', priceCurrency: 'EUR' },
        ],
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Webdesign für Immobilienmakler', item: 'https://webseite.hamburg/leistungen/webdesign-immobilienmakler' },
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
                        { label: 'Webdesign für Immobilienmakler' },
                    ]} />
                    <div className="subpage-hero-split">
                        <div>
                        <p className="section-kicker animate-up">Webdesign für Immobilienmakler</p>
                        <h1 className="subpage-title animate-up">Makler-Websites in Hamburg: Ihre Seite verkauft keine Wohnung, sie gewinnt Eigentümer.</h1>
                        <p className="subpage-intro animate-up">
                            Eine Makler-Website in Hamburg gewinnt keine Käufer, sondern Eigentümer. Käufer finden Objekte auf den Portalen, daran ändert keine Website etwas. Die Frage, wem ein Eigentümer seine Immobilie anvertraut, entscheidet sich woanders: bei der Recherche nach dem Namen, den er auf dem Schild in der Nachbarschaft gelesen hat.
                        </p>
                        <div className="hero-proof animate-up">
                            <span>Festpreis ab 2.900 €</span>
                            <span>§ 87 GEG sauber gelöst</span>
                            <span>Maklersoftware angebunden</span>
                        </div>
                        <ServiceMeta />
                        </div>
                        <div className="subpage-hero-media hero-media-framed animate-up">
                            <img src="/leistungen/branchen/makler/besichtigung.webp" alt="Immobilienmaklerin zeigt einem Paar die Küche einer hellen Wohnung bei der Besichtigung" width="1200" height="900" fetchPriority="high" decoding="async" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body is-inset">
                    <h2 className="animate-up">Was kostet eine Makler-Website in Hamburg?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Eine Makler-Website kostet bei mir <strong>ab 2.900 Euro</strong> mit Bewertungsanfrage und Objektübersicht, <strong>ab 4.500 Euro</strong> mehrseitig mit Stadtteilseiten, Ratgeber und Teamprofilen. Objektanbindung per OpenImmo kalkuliere ich je nach Maklersoftware dazu. Pflichtangaben nach § 87 GEG sind in der Objektvorlage vorgesehen, nicht optional.</p>
                    </div>

                    <div className="subpage-story animate-up">
                        <span className="subpage-story-label">Aus der Praxis</span>
                        <p>
                            Fast jede Makler-Website, die ich mir ansehe, ist als Schaufenster gebaut: Objekte oben, Suchmaske daneben, dazu ein Bild von einem Schlüssel in einer Hand. Das Problem daran ist nicht der Schlüssel. Das Problem ist, dass diese Seite gegen ImmoScout24 antritt, und dieses Duell verliert sie zuverlässig.
                        </p>
                        <p>
                            Interessant wird es, wenn man die Seite umdreht. Ein Eigentümer in Winterhude, der über einen Verkauf nachdenkt, hat ganz andere Fragen: Was ist meine Wohnung wert, wer zahlt eigentlich die Provision seit der Gesetzesänderung, welche Unterlagen brauche ich, wie lange dauert das, und was passiert mit meinen Daten. Wer diese fünf Fragen auf seiner Seite beantwortet, wird angerufen. Wer stattdessen 30 Objekte zeigt, von denen 28 verkauft sind, wird nicht angerufen.
                        </p>
                        <p>
                            Das ist der Grund, warum ich bei Makler-Projekten die Objektliste bewusst nach unten setze. Ihre Objekte sind Beweis, nicht Angebot.
                        </p>
                    </div>

                    <h2 className="animate-up">Wo suchen Eigentümer und Käufer wirklich?</h2>
                    <div className="subpage-split is-reverse animate-up">
                        <div className="sp-split-media">
                            <img src="/leistungen/branchen/makler/objekt.webp" alt="Immobilienmaklerin bespricht mit einem Paar Unterlagen in einer leeren, hellen Wohnung" width="1200" height="900" loading="lazy" decoding="async" />
                            <p className="sp-split-caption">Portale bringen Nachfrage. Die eigene Website bringt den Auftrag vom Eigentümer.</p>
                        </div>
                        <div className="sp-split-body">
                            <p>
                                Bitkom hat 2025 erhoben, wie Menschen in Deutschland eine Wohnung suchen. 81 Prozent nutzen die großen Portale, 19 Prozent die Websites einzelner Anbieter, 12 Prozent soziale Netzwerke, 10 Prozent Makler-Newsletter und 2 Prozent KI-Suchsysteme. Diese Zahlen liest man am besten nicht als Niederlage der eigenen Website, sondern als Arbeitsteilung: Portale bringen Nachfrage, die eigene Seite bringt Aufträge.
                            </p>
                            <p>
                                Portale kosten Geld, und zwar laufend. Nach den Finanzberichten der Scout24 SE liegt der durchschnittliche Monatsumsatz pro gewerblichem Maklerkunden im vierstelligen Bereich. Das ist eine feste monatliche Ausgabe für Sichtbarkeit, die Sie mieten. Eine eigene Website mit Ratgeberinhalten baut dagegen Substanz auf, die Ihnen gehört. Beides zusammen ist die vernünftige Antwort, nur eines von beidem ist teuer.
                            </p>
                        </div>
                    </div>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">81%</span>
                            <span className="subpage-stat-label">der Wohnungssuchenden nutzen große Immobilienportale (Bitkom 2025)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">19%</span>
                            <span className="subpage-stat-label">nutzen die Website eines einzelnen Anbieters (Bitkom 2025)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">10.000 &euro;</span>
                            <span className="subpage-stat-label">maximales Bußgeld bei fehlenden Pflichtangaben im Inserat (§ 108 GEG)</span>
                        </div>
                    </div>

                    <figure className="subpage-figure is-band animate-up">
                        <img src="/leistungen/branchen/makler/hamburg.webp" alt="Hamburger Hafenrand mit Backsteinspeichern, Booten und den Neubauten der Hafencity" width="1800" height="760" loading="lazy" decoding="async" />
                        <figcaption>Der Weg zum Auftrag beginnt bei der Wertfrage, nicht beim Objektfoto.</figcaption>
                    </figure>

                    <h2 className="animate-up">Pflichtangaben und Rechtstechnik</h2>
                    <p className="animate-up">
                        Bei Makler-Websites sind zwei Themen fast immer mangelhaft gelöst. Erstens die Energieausweis-Angaben, weil sie im Redaktionsalltag vergessen werden. Zweitens das Widerrufsrecht bei Exposé-Anfragen, weil die Mechanik dahinter unbekannt ist. Beides ist technisch lösbar, wenn man es beim Bau der Seite berücksichtigt.
                    </p>
                    <div className="rule-cols animate-up">
                        <div className="rule-col">
                            <h3>In jedes Inserat, wenn ein Energieausweis vorliegt</h3>
                            <ul>
                                <li>Art des Ausweises: Bedarfs- oder Verbrauchsausweis</li>
                                <li>Endenergiebedarf oder Endenergieverbrauch in kWh je Quadratmeter und Jahr</li>
                                <li>Wesentlicher Energieträger der Heizung</li>
                                <li>Baujahr des Wohngebäudes laut Ausweis</li>
                                <li>Energieeffizienzklasse bei Wohngebäuden</li>
                                <li>Alle fünf Felder als Pflichtfelder in der Objektvorlage</li>
                            </ul>
                        </div>
                        <div className="rule-col rule-no">
                            <h3>Typische Fehler auf Makler-Websites</h3>
                            <ul>
                                <li>Energieangaben nur auf dem Portal, nicht auf der eigenen Seite</li>
                                <li>Exposé-Download ohne Widerrufsbelehrung und Muster-Formular</li>
                                <li>Kontaktformulare mit zu vielen Pflichtfeldern und ohne Datenschutzhinweis</li>
                                <li>Verkaufte Objekte, die monatelang online bleiben</li>
                                <li>Provisionsangaben, die die Rechtslage seit Dezember 2020 ignorieren</li>
                                <li>Objektbilder ohne Rechteklärung beim Fotografen</li>
                            </ul>
                        </div>
                    </div>
                    <p className="animate-up">
                        Zur Klarstellung: Ich bin Entwickler, nicht Anwalt, und dieser Abschnitt ist keine Rechtsberatung. Er beschreibt, welche Felder und Abläufe ich vorsehe, damit Ihre Rechtsberatung am Ende nichts mehr zu beanstanden hat.
                    </p>

                    <h2 className="animate-up">Was muss eine Makler-Website leisten?</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Wertanfrage als Hauptziel</h3>
                            <p>Ein klar sichtbares Angebot zur Wertermittlung mit wenigen Feldern und einem realistischen Versprechen zur Rückmeldung. Das ist die Anfrage, aus der Aufträge entstehen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Stadtteilseiten mit echtem Inhalt</h3>
                            <p>Eimsbüttel, Ottensen, Winterhude, Harburg: eigene Seiten mit Preisentwicklung, Objekttypen und Verkaufsdauer. Lokale Kompetenz ist das wichtigste Auswahlkriterium für Eigentümer, also muss man sie belegen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Referenzen ohne Namensnennung</h3>
                            <p>Verkaufte Objekte anonymisiert, mit Lage, Größe, Vermarktungsdauer und Ergebnisbezug. Wirkt stärker als jedes Adjektiv und respektiert die Vertraulichkeit Ihrer Auftraggeber.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Objektdaten automatisch</h3>
                            <p>Anbindung Ihrer Maklersoftware per OpenImmo, damit neue Objekte nicht zweimal eingetippt und verkaufte automatisch entfernt werden.</p>
                        </div>
                    </div>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Ratgeber für Eigentümer</h3>
                            <p>Unterlagenliste, Ablauf, Kosten, Provisionsteilung, Steuern beim Verkauf. Diese Fragen werden Monate vor der Maklersuche gestellt, und wer sie beantwortet, ist beim Anruf schon gesetzt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Lokale Sichtbarkeit</h3>
                            <p>Google-Unternehmensprofil, Bewertungen, konsistente Adressdaten und Inhalte, die Hamburger Lagen wirklich benennen. Grundlagen im <Link href="/wissen/lokales-seo-hamburg-guide">Leitfaden zu lokalem SEO</Link>.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Gesichter statt Symbolbilder</h3>
                            <p>Wer verkauft, gibt einen sechsstelligen Wert in fremde Hände. Ein Team mit Namen, Foto und Zuständigkeit senkt diese Hürde mehr als jedes Hochglanzbild.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Messbare Anfragen</h3>
                            <p>Getrennte Ziele für Wertanfrage, Objektanfrage und Rückruf, damit sichtbar wird, welcher Kanal Aufträge bringt und welcher nur Klicks. Dazu passt die <Link href="/leistungen/conversion-optimierung">Conversion-Optimierung</Link>.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Preise</h2>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>Makler-Website individuell</h3>
                            <div className="sp-price-value">ab 2.900 &euro;</div>
                            <p>Eine Seite mit klarem Fokus auf Eigentümer-Anfragen. Für Einzelmakler und kleine Büros.</p>
                            <ul className="sp-price-includes">
                                <li>Individuelles Design, responsiv</li>
                                <li>Wertanfrage-Formular</li>
                                <li>Objektübersicht mit GEG-Pflichtfeldern</li>
                                <li>Anonymisierte Referenzen</li>
                                <li>Widerrufsbelehrung technisch eingebaut</li>
                                <li>Lokale SEO-Grundlage</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Makler-Website mit Ratgeber</h3>
                            <div className="sp-price-value">ab 4.500 &euro;</div>
                            <p>Mehrseitig mit Stadtteilseiten und Ratgeberbereich. Für Büros, die Eigentümer-Akquise systematisch betreiben wollen.</p>
                            <ul className="sp-price-includes">
                                <li>Fünf und mehr Seiten</li>
                                <li>Stadtteilseiten für Ihre Zielgebiete</li>
                                <li>Ratgeberbereich mit Pflegemöglichkeit</li>
                                <li>Teamprofile</li>
                                <li>Objektanbindung vorbereitet (OpenImmo)</li>
                                <li>Strukturierte Daten für Unternehmen und Angebote</li>
                                <li>Conversion-Tracking je Anfragetyp</li>
                                <li>Einweisung für Ihr Team</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Vergleichbare Projekte</h2>
                    <div className="subpage-cases animate-up">
                        <Link href="/referenzen/gl-sommer" className="subpage-case-card">
                            <span className="subpage-case-metric">1.113 Klicks/Monat</span>
                            <span className="subpage-case-name">GL Sommer: lokale Sichtbarkeit für einen Hamburger Betrieb</span>
                        </Link>
                        <Link href="/referenzen/blitz-hamburg" className="subpage-case-card">
                            <span className="subpage-case-metric">ROI in 7 Wochen</span>
                            <span className="subpage-case-name">Blitz Hamburg: Anfragen über Website, Ads und SEO</span>
                        </Link>
                        <Link href="/referenzen/mit-kinder" className="subpage-case-card">
                            <span className="subpage-case-metric">Karte und Filter</span>
                            <span className="subpage-case-name">mit-kinder.de: Objektsuche mit Karte, Filter und Empfehlungen</span>
                        </Link>
                    </div>

                    <h2 className="animate-up">Wie läuft ein Makler-Website-Projekt ab?</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Erstgespräch, kostenlos</strong><p>Woher kommen Ihre Aufträge heute, welche Lagen wollen Sie besetzen, wie viel zahlen Sie monatlich an Portale. Danach ist klar, was die Website leisten soll.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Struktur für die Akquise</strong><p>Wertanfrage, Stadtteilseiten, Ratgeberthemen und Objektvorlage inklusive Pflichtfelder. Ich liefere Textvorschläge, Sie ergänzen Ihre Marktkenntnis.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Bauen und anbinden</strong><p>Umsetzung, optional Anbindung Ihrer Maklersoftware, Einbau von Belehrung und Datenschutzhinweisen, Test auf allen Geräten.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Launch und Ausbau</strong><p>Live-Gang, Google-Profil, Search Console. Danach kommen Ratgeberthemen dazu, weil jedes neue Thema eine neue Eintrittstür ist.</p></div></div>
                    </div>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Bitkom e. V. (2025), Wohnungssuche zwischen Klick und Klingel: 81 Prozent nutzen Portale, 19 Prozent Anbieter-Websites, 12 Prozent Social Media, 10 Prozent Newsletter, 2 Prozent KI-Suchsysteme. <a href="https://www.bitkom.org/Presse/Presseinformation/Zwischen-Klick-und-Klingel-neues-Zuhause-suchen" rel="nofollow noopener" target="_blank">bitkom.org</a></li>
                            <li>§ 87 Gebäudeenergiegesetz, Pflichtangaben in Immobilienanzeigen. <a href="https://www.gesetze-im-internet.de/geg/__87.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                            <li>§ 108 Gebäudeenergiegesetz, Bußgeldvorschriften, bis zu 10.000 Euro. <a href="https://www.gesetze-im-internet.de/geg/__108.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                            <li>§ 656a BGB (Textform des Maklervertrags) und § 656c BGB (Provisionsteilung bei Doppeltätigkeit). <a href="https://www.gesetze-im-internet.de/bgb/__656a.html" rel="nofollow noopener" target="_blank">§ 656a</a>, <a href="https://www.gesetze-im-internet.de/bgb/__656c.html" rel="nofollow noopener" target="_blank">§ 656c</a></li>
                            <li>§ 312g BGB (Widerrufsrecht im Fernabsatz) und § 356 BGB (Erlöschen des Widerrufsrechts). <a href="https://www.gesetze-im-internet.de/bgb/__312g.html" rel="nofollow noopener" target="_blank">§ 312g</a>, <a href="https://www.gesetze-im-internet.de/bgb/__356.html" rel="nofollow noopener" target="_blank">§ 356</a></li>
                            <li>Scout24 SE, Finanzberichte und Präsentationen zum Umsatz pro gewerblichem Kunden. <a href="https://www.scout24.com/investor-relations/finanzberichte-praesentationen" rel="nofollow noopener" target="_blank">scout24.com</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Häufige Fragen zu Makler-Websites" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Sagen Sie mir, wie viele Eigentümer-Anfragen im Monat Sie über die eigene Website bekommen. Wenn die Antwort null lautet, zeige ich Ihnen im Erstgespräch kostenlos, woran es liegt." />
        </>
    );
}
