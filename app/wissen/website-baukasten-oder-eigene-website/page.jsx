import ArticleLayout from '../../../src/components/ArticleLayout';
import FaqSection from '../../../src/components/FaqSection';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Website-Baukasten oder eigene Website? Kostenvergleich',
    description: 'Website-Baukasten oder eigene Website? Was Wix, Jimdo und Squarespace über fünf Jahre kosten, was beim Umzug verloren geht und wann der Baukasten reicht.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/website-baukasten-oder-eigene-website',
    },
    openGraph: {
        title: 'Website-Baukasten oder eigene Website? Kostenvergleich',
        description: 'Was ein Website-Baukasten über fünf Jahre kostet, was beim Umzug verloren geht und wann er trotzdem die richtige Wahl ist.',
        url: 'https://webseite.hamburg/wissen/website-baukasten-oder-eigene-website',
        type: 'article',
        images: [{ url: 'https://webseite.hamburg/wissen/fotos/baukasten-hero.webp', width: 1200, height: 900 }],
    },
};

const faqItems = [
    { q: "Was kostet ein Website-Baukasten im Monat?", a: "Bei Jahreszahlung liegen die Einstiegstarife bei etwa 11 bis 17 Euro im Monat, die für Unternehmen meist nötigen Business-Tarife bei etwa 17 bis 69 Euro. Über fünf Jahre summiert sich das je Anbieter auf rund 1.000 bis 4.100 Euro, bei Shopify für Shops auf rund 4.000 bis 17.000 Euro. Bei monatlicher Zahlung liegen die Preise durchweg höher." },
    { q: "Ist eine eigene Website teurer als ein Baukasten?", a: "Über fünf Jahre gerechnet nicht zwangsläufig. Eine individuelle Website kostet 2.900 Euro einmalig plus etwa 10 bis 15 Euro Betrieb im Monat, also rund 3.500 bis 3.800 Euro in fünf Jahren. Das liegt im Bereich eines mittleren Baukasten-Tarifs. Der Unterschied ist nicht der Preis, sondern was am Ende der fünf Jahre Ihnen gehört." },
    { q: "Kann ich meine Baukasten-Website später umziehen?", a: "Die Website selbst in der Regel nicht. Wix schreibt in seinem Hilfebereich, dass eine Wix-Website nicht anderswo gehostet werden kann; exportieren lassen sich nur Daten wie Medien, CMS-Sammlungen und Produktlisten als CSV. Squarespace erlaubt einen XML-Export, ohne Layout-Stile, eigenes CSS und interaktive Elemente. Die Domain ist dagegen unproblematisch: Der Auth-Code für den Transfer ist kostenlos." },
    { q: "Sind Baukasten-Websites schlecht für SEO?", a: "Nein. Google sagt zwei Dinge, die man zusammen lesen muss: Die Wahl des Systems ist kein Ranking-Faktor, bewertet wird das ausgelieferte Ergebnis. Und die Core Web Vitals sind Teil der Page-Experience-Signale. Im Core Web Vitals Technology Report des HTTP Archive liegen gehostete Baukästen im Mittelfeld bis oberen Bereich, während selbst gehostete WordPress-Installationen extrem streuen. Der Vergleich lautet also nicht Baukasten gegen individuell, sondern schlecht umgesetzt gegen gut umgesetzt." },
    { q: "Wann ist ein Baukasten die richtige Wahl?", a: "Wenn das Gesamtbudget klein ist, die Seite vor allem als digitale Visitenkarte dient, Sie die Pflege selbst übernehmen wollen und Sie keinen Anspruch darauf haben, über Google planbar Neukunden zu gewinnen. Eine schnelle Baukasten-Seite ist einer langsamen Eigenentwicklung in jedem Fall vorzuziehen." },
];

export default function BaukastenOderEigeneWebsitePage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Wix, Jimdo oder eigene Website: Was der Baukasten wirklich kostet',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-20',
        dateModified: '2026-08-20',
        url: 'https://webseite.hamburg/wissen/website-baukasten-oder-eigene-website',
        image: 'https://webseite.hamburg/wissen/fotos/baukasten-hero.webp',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/website-baukasten-oder-eigene-website' },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://webseite.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'Baukasten oder eigene Website', item: 'https://webseite.hamburg/wissen/website-baukasten-oder-eigene-website' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="website-baukasten-oder-eigene-website"
                category="WEBDESIGN"
                title="Wix, Jimdo oder eigene Website: Was der Baukasten wirklich kostet"
                readTime="10 Min."
                publishDate="2026-08-20"
                heroImage="/wissen/fotos/baukasten-hero.webp"
                heroAlt="Designer arbeitet an einem hellen Schreibtisch mit Grafiktablett und Monitor an einem Layout"
                heroFramed
            >
                <p>
                    Ein Baukasten ist wie eine möblierte Mietwohnung. Sie können sofort einziehen, alles ist da, und
                    wenn Sie ausziehen, bleibt das Sofa stehen. Das ist kein Skandal, sondern das Geschäftsmodell.
                    Nur sollte man es kennen, bevor man drei Jahre Inhalte hineinstellt.
                </p>
                <p>
                    Dieser Artikel rechnet beides durch: die Monatsgebühren, die Fünf-Jahres-Summe und die Kosten,
                    die erst beim Umzug entstehen. Und er benennt die Fälle, in denen ein Baukasten die vernünftigere
                    Wahl ist, obwohl ich individuelle Websites baue.
                </p>

                <figure className="article-figure">
                    <img src="/wissen/fotos/baukasten-eigenbau.webp" alt="Blick von oben auf einen Schreibtisch, an dem jemand Code auf zwei Bildschirmen schreibt" width="1600" height="900" loading="lazy" decoding="async" />
                    <figcaption>Vorgefertigte Bausteine oder eigener Bauplan. Der Unterschied zeigt sich beim Umzug.</figcaption>
                </figure>

                <h2>Was kostet ein Website-Baukasten im Monat?</h2>
                <p>
                    Die Anbieter staffeln ihre Tarife nach Funktionen, und die Listenpreise ändern sich regelmäßig.
                    Die folgende Übersicht zeigt die Größenordnung bei Jahreszahlung. Bei monatlicher Zahlung liegen
                    die Preise durchweg höher, und der Einstiegstarif reicht bei den meisten Anbietern für ein
                    Unternehmen nicht aus, weil Funktionen wie eigene Formulare, mehr Speicher oder Shop erst in
                    höheren Stufen enthalten sind.
                </p>

                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Anbieter</th>
                                <th>Einstieg</th>
                                <th>Business-Tarif</th>
                                <th>Fünf Jahre im Business-Tarif</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Wix</th>
                                <td>etwa 13 bis 17 Euro im Monat</td>
                                <td>etwa 26 bis 46 Euro im Monat</td>
                                <td>rund 1.500 bis 2.700 Euro</td>
                            </tr>
                            <tr>
                                <th>Jimdo</th>
                                <td>etwa 11 Euro im Monat</td>
                                <td>etwa 17 bis 49 Euro im Monat</td>
                                <td>rund 1.000 bis 2.900 Euro</td>
                            </tr>
                            <tr>
                                <th>Squarespace</th>
                                <td>etwa 12 Euro im Monat</td>
                                <td>etwa 18 bis 69 Euro im Monat</td>
                                <td>rund 1.100 bis 4.100 Euro</td>
                            </tr>
                            <tr>
                                <th>Shopify (für Shops)</th>
                                <td>etwa 25 Euro im Monat</td>
                                <td>etwa 66 bis 289 Euro im Monat</td>
                                <td>rund 4.000 bis 17.000 Euro</td>
                            </tr>
                            <tr>
                                <th>Eigene Website</th>
                                <td colSpan={2}>2.900 Euro einmalig, Betrieb etwa 10 bis 15 Euro im Monat</td>
                                <td>rund 3.500 bis 3.800 Euro</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Über fünf Jahre gerechnet liegt eine individuelle Website also im Bereich eines mittleren
                    Baukasten-Tarifs. Der Unterschied ist nicht der Preis, sondern was am Ende der fünf Jahre
                    Ihnen gehört. Mehr zu den Posten, die in beiden Fällen dazukommen, steht im
                    {' '}<Link href="/wissen/webdesign-kosten">Kostenguide zu Webdesign</Link>.
                </p>

                <h2>Kann ich meine Baukasten-Website später umziehen?</h2>
                <p>
                    Hier trennen sich Marketingversprechen und Technik. Wix schreibt in seinem Hilfebereich deutlich,
                    dass eine Wix-Website nicht anderswo gehostet werden kann, weil sie auf der eigenen Infrastruktur
                    laufen muss. Exportieren lassen sich Daten: Medien, CMS-Sammlungen, Produktlisten, Übersetzungen,
                    jeweils als CSV. Die Website selbst, also Layout, Code und Struktur, bleibt bei Wix.
                </p>
                <p>
                    Squarespace erlaubt einen Export als XML-Datei, im Wesentlichen für den Import nach WordPress.
                    Nicht enthalten sind Layout-Stile, eigenes CSS, Video- und Audioblöcke sowie interaktive
                    Elemente. Sie nehmen also Texte mit und bauen das Aussehen neu.
                </p>
                <p>
                    Die Domain ist dagegen unproblematisch. Der Auth-Code für den Transfer ist bei allen Anbietern
                    kostenlos, beim neuen Registrar fallen nur die üblichen Jahresgebühren an, bei einer .de-Domain
                    etwa 5 bis 15 Euro. Wer also von einem Baukasten wegzieht, verliert nicht die Adresse, sondern
                    die Bauleistung. Das ist der eigentliche Preis, und er fällt genau dann an, wenn Sie ihn am
                    wenigsten brauchen: beim Wachstum.
                </p>

                <h2>Sind Baukasten-Websites schlecht für SEO?</h2>
                <p>
                    Google sagt zwei Dinge, die man zusammen lesen muss. Erstens: Die Wahl des Systems ist kein
                    Ranking-Faktor, bewertet wird das ausgelieferte Ergebnis. Zweitens: Die Core Web Vitals sind
                    Teil der Page-Experience-Signale. Das heißt, es ist Google gleichgültig, ob Ihre Seite aus
                    einem Baukasten kommt, nicht gleichgültig ist ihm, wie schnell sie ist.
                </p>
                <p>
                    Wie gut die Plattformen dabei abschneiden, muss man nicht glauben, man kann es nachsehen. Der
                    Core Web Vitals Technology Report des HTTP Archive zeigt für jede Plattform, welcher Anteil der
                    Websites die Schwellenwerte auf Mobilgeräten besteht. Zwei Beobachtungen daraus sind stabil:
                    Gehostete Baukästen liegen im Mittelfeld bis oberen Bereich, weil die Infrastruktur
                    standardisiert ist. Selbst gehostete WordPress-Installationen streuen extrem, weil billiges
                    Shared Hosting und überladene Seitenbaukästen alles zunichte machen können, was ein gutes Theme
                    aufbaut.
                </p>
                <p>
                    Für Sie heißt das: Der Vergleich lautet nicht Baukasten gegen individuell, sondern schlecht
                    umgesetzt gegen gut umgesetzt. Eine schnelle Wix-Seite schlägt eine langsame Eigenentwicklung.
                    Warum das direkt Geld kostet, steht im Artikel
                    {' '}<Link href="/wissen/warum-langsame-websites-kunden-kosten">Warum langsame Websites Kunden kosten</Link>.
                </p>

                <h2>Wo Baukästen im Alltag an Grenzen stoßen</h2>
                <ul>
                    <li>
                        <strong>Struktur:</strong> Eigene Seiten je Leistung, Stadtteil oder Zielgruppe sind machbar,
                        werden aber schnell unübersichtlich. Wer 20 Landingpages pflegen will, kämpft mit dem Editor
                        statt mit dem Markt.
                    </li>
                    <li>
                        <strong>Datenschutz:</strong> Externe Skripte, Schriften und Video-Einbettungen sind oft
                        voreingestellt. Selbst hosten ist auf vielen Plattformen nicht vorgesehen, und genau daran
                        hängen die üblichen Abmahnthemen.
                    </li>
                    <li>
                        <strong>Schnittstellen:</strong> Anbindungen an Warenwirtschaft, Buchungssysteme,
                        Maklersoftware oder ein Praxis-Terminsystem sind entweder vorhanden oder eben nicht. Ein
                        Zwischenweg existiert selten.
                    </li>
                    <li>
                        <strong>Ladezeit im Detail:</strong> Sie können Bilder optimieren, aber nicht entscheiden,
                        welches JavaScript geladen wird. Die letzten 20 Punkte im PageSpeed-Test sind auf einer
                        Plattform meist nicht erreichbar.
                    </li>
                    <li>
                        <strong>Strukturierte Daten:</strong> Eigene Auszeichnungen für Leistungen, Öffnungszeiten,
                        Speisekarten oder Angebote gehen nur so weit, wie der Anbieter sie vorsieht. Für Sichtbarkeit
                        in KI-Antworten ist genau das der Hebel, siehe <Link href="/leistungen/ai-seo">AI SEO</Link>.
                    </li>
                </ul>

                <h2>Wann ist ein Baukasten die richtige Wahl?</h2>
                <p>
                    Es gibt diese Fälle, und es wäre unredlich, sie zu verschweigen:
                </p>
                <ul>
                    <li>Sie testen eine Geschäftsidee und brauchen in drei Tagen eine Seite, die existiert.</li>
                    <li>Ihr Budget liegt insgesamt unter 1.000 Euro und Sie haben Zeit, selbst zu bauen.</li>
                    <li>Sie gewinnen Kunden über Empfehlung oder Instagram und brauchen keine Suchsichtbarkeit.</li>
                    <li>Ihr Verein oder Ihr Nebenprojekt braucht eine Visitenkarte, kein Vertriebsinstrument.</li>
                    <li>Sie betreiben einen Shop mit überschaubarem Sortiment. Für Shops sind Plattformen oft die richtige Antwort, siehe <Link href="/referenzen/dybeauty">dieses Shopify-Projekt</Link> und die <Link href="/leistungen/e-commerce-entwicklung">E-Commerce-Seite</Link>.</li>
                </ul>
                <p>
                    Die Grenze verläuft dort, wo die Website Umsatz erzeugen soll. Sobald Anfragen, Buchungen oder
                    Bestellungen daran hängen, zählt jede Sekunde Ladezeit und jede Struktur-Entscheidung. Dann wird
                    aus dem gesparten Anfangsbudget schnell eine laufende Ausgabe.
                </p>

                <h2>Ein Beispiel für den Unterschied</h2>
                <p>
                    Ein Baukasten liefert Ihnen ein sehr solides Standard-Ergebnis. Er liefert Ihnen nicht die
                    besondere Anmutung, die ein Betrieb manchmal braucht, um sich von 30 Wettbewerbern zu lösen.
                    Bei <Link href="/referenzen/glucksmomente-events">Glücksmomente Events</Link> war genau das der
                    Punkt: Aquarell-Ästhetik, eigene Scroll-Animationen, ein Auftritt, den man wiedererkennt. Solche
                    Projekte kommen aus keinem Baukasten, weil ein Baukasten dafür gebaut ist, dass tausend Betriebe
                    dieselbe Grundlage nutzen.
                </p>
                <p>
                    Umgekehrt kenne ich Betriebe, die mit einer sauber gepflegten Jimdo-Seite und einem gut
                    gepflegten <Link href="/wissen/google-business-profile-optimieren">Google-Unternehmensprofil</Link> mehr
                    Anfragen bekommen als Wettbewerber mit teurer Agenturseite. Weil die Öffnungszeiten stimmen,
                    die Telefonnummer klickbar ist und jemand auf Bewertungen antwortet.
                </p>

                <h2>Wenn Sie wechseln wollen: die Reihenfolge</h2>
                <ol>
                    <li><strong>Inhalte sichern.</strong> Texte, Bilder, Kontaktdaten, Produktlisten exportieren, solange der Zugang aktiv ist.</li>
                    <li><strong>URL-Liste ziehen.</strong> Alle bestehenden Adressen erfassen, denn jede davon braucht später eine Weiterleitung.</li>
                    <li><strong>Rankings dokumentieren.</strong> Search Console und Analytics exportieren, damit Sie nach dem Wechsel vergleichen können.</li>
                    <li><strong>Neu bauen, nicht kopieren.</strong> Struktur an Suchintention und Anfragen ausrichten statt Seite für Seite nachzubilden.</li>
                    <li><strong>Weiterleitungen setzen.</strong> Alte Adressen per 301 auf die neuen. Der häufigste Fehler beim Wechsel, mit den größten Folgen.</li>
                    <li><strong>Domain umziehen.</strong> Auth-Code holen, Domain auf Ihren Namen beim neuen Registrar.</li>
                </ol>
                <p>
                    Die vollständige Liste mit allen Fallen steht in der
                    {' '}<Link href="/wissen/website-relaunch-checkliste">Relaunch-Checkliste</Link>. Wer Schritt fünf
                    überspringt, verliert Sichtbarkeit, die vorher da war, und das fällt erst vier Wochen später auf.
                </p>

                <h2>Fazit</h2>
                <p>
                    Baukästen sind gut geworden. Sie sind schnell, günstig im Einstieg und für viele Zwecke völlig
                    ausreichend. Sie sind ein Mietverhältnis: bequem, solange Sie bleiben, unangenehm beim Auszug.
                    Eine individuelle Website ist teurer im ersten Jahr und günstiger im dritten, wenn die Seite
                    Anfragen bringen muss.
                </p>
                <p>
                    Wenn Sie unsicher sind, in welche Kategorie Ihr Vorhaben fällt: Schicken Sie mir den Link zu
                    Ihrer aktuellen Seite. Ich sage Ihnen kostenlos, ob ein Wechsel sich rechnet oder ob Sie mit
                    zwei Nachmittagen Pflege besser fahren. Zum <Link href="/kontakt">Kontakt</Link> oder zur
                    Leistungsseite <Link href="/leistungen/webdesign">Webdesign</Link>.
                </p>

                <div className="subpage-sources">
                    <h2>Quellen</h2>
                    <ol>
                        <li>Wix Help Center, Exportieren oder Einbetten einer Wix-Website an anderer Stelle: Wix-Websites müssen auf der Wix-Infrastruktur laufen, exportierbar sind nur Daten wie Medien, CMS-Sammlungen und Produktlisten. <a href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere" rel="nofollow noopener" target="_blank">support.wix.com</a></li>
                        <li>Squarespace Hilfe-Center, Website exportieren: XML-Export ohne Layout-Stile, eigenes CSS und interaktive Elemente. <a href="https://support.squarespace.com/hc/de/articles/206566687-Deine-Website-exportieren" rel="nofollow noopener" target="_blank">support.squarespace.com</a></li>
                        <li>HTTP Archive, Core Web Vitals Technology Report: Anteil der Websites je Plattform, die die Schwellenwerte bestehen. <a href="https://httparchive.org/reports/cwv-tech" rel="nofollow noopener" target="_blank">httparchive.org</a></li>
                        <li>Google Search Central, Page Experience in der Google Suche: Core Web Vitals als Teil der Page-Experience-Signale. <a href="https://developers.google.com/search/docs/appearance/page-experience" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                        <li>Listenpreise der Anbieter, Stand August 2026: <a href="https://de.wix.com/upgrade/website" rel="nofollow noopener" target="_blank">Wix</a>, <a href="https://www.jimdo.com/de/preise/" rel="nofollow noopener" target="_blank">Jimdo</a>, <a href="https://de.squarespace.com/preise" rel="nofollow noopener" target="_blank">Squarespace</a>, <a href="https://www.shopify.com/de/preise" rel="nofollow noopener" target="_blank">Shopify</a>.</li>
                    </ol>
                </div>
            </ArticleLayout>
            <FaqSection title="Häufige Fragen zu Baukasten und eigener Website" items={faqItems} />
        </>
    );
}
