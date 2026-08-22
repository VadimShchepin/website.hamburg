import ArticleLayout from '../../../src/components/ArticleLayout';
import FaqSection from '../../../src/components/FaqSection';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Google-Unternehmensprofil optimieren: Anleitung Hamburg',
    description: 'Google-Unternehmensprofil optimieren: offizielle Ranking-Faktoren, Bewertungsregeln, Sperrfallen und eine Routine, die 20 Minuten pro Woche dauert.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/google-business-profile-optimieren',
    },
    openGraph: {
        title: 'Google-Unternehmensprofil optimieren: Anleitung Hamburg',
        description: 'Offizielle Ranking-Faktoren, Bewertungsregeln, Sperrfallen und eine wöchentliche Routine für lokale Unternehmen in Hamburg.',
        url: 'https://webseite.hamburg/wissen/google-business-profile-optimieren',
        type: 'article',
        images: [{ url: 'https://webseite.hamburg/wissen/fotos/gbp-maps.webp', width: 1200, height: 900 }],
    },
};

const faqItems = [
    { q: "Wie optimiere ich mein Google-Unternehmensprofil?", a: "Google nennt drei Faktoren für das lokale Ranking: Relevanz, Entfernung und Bekanntheit. Praktisch heißt das: die exakteste Hauptkategorie wählen, jede Leistung einzeln anlegen, Öffnungszeiten inklusive Feiertagen pflegen, echte Fotos ergänzen, einen kurzen Beitrag pro Woche einstellen und auf jede Bewertung antworten. Das kostet 15 bis 20 Minuten pro Woche." },
    { q: "Darf ich Suchbegriffe in den Namen des Profils schreiben?", a: "Nein. Google verlangt, dass der Name im Profil dem echten Geschäftsnamen entspricht, also dem, der am Laden, auf dem Briefkopf und in der Gewerbeanmeldung steht. Zusätzliche Suchbegriffe sind ein Richtlinienverstoß und einer der häufigsten Gründe für eine Profilsperrung. Stadtteile und Leistungen gehören in die Website, in die Leistungsbeschreibung und in die Beiträge." },
    { q: "Wie viele Google-Bewertungen brauche ich?", a: "Zehn bis fünfzehn echte Bewertungen bringen einen lokalen Dienstleister in Hamburg in den meisten Branchen schon in eine gute Position, weil viele Wettbewerber bei drei stehen. Wichtiger als die Menge ist die Aktualität: Laut BrightLocal 2026 achten 74 Prozent der Verbraucher vor allem auf Bewertungen aus den letzten drei Monaten, 31 Prozent verlangen mindestens 4,5 Sterne und 89 Prozent erwarten, dass Inhaber antworten." },
    { q: "Brauche ich eine Adresse, wenn ich zu meinen Kunden fahre?", a: "Nein. Wenn Sie kein Ladenlokal haben, das während der Öffnungszeiten besetzt ist, verlangt Google, dass Sie die Adresse ausblenden und stattdessen ein Einzugsgebiet angeben. Postfächer, virtuelle Büros und unbesetzte Coworking-Adressen sind nicht erlaubt. Als Einzugsgebiet reicht meist Hamburg plus die angrenzenden Gebiete, in denen Sie wirklich arbeiten." },
    { q: "Mein Profil wurde gesperrt, was mache ich jetzt?", a: "In vier Schritten: erst die Ursache finden, in fast allen Fällen ist es der Name mit Suchbegriffen, eine Adresse ohne Kundenverkehr, mehrere Profile für dieselbe Adresse oder ein auffälliger Bewertungszuwachs. Dann den Verstoß beheben, bevor Sie Einspruch einlegen. Danach Nachweise sammeln, also Gewerbeanmeldung, Fotos von Schild und Eingang, Briefkopf und Rechnungen mit Adresse. Zuletzt Einspruch stellen und warten." },
];

export default function GoogleBusinessProfilePage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Google-Unternehmensprofil optimieren: der Hamburg-Leitfaden',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-20',
        dateModified: '2026-08-20',
        url: 'https://webseite.hamburg/wissen/google-business-profile-optimieren',
        image: 'https://webseite.hamburg/wissen/fotos/gbp-maps.webp',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/google-business-profile-optimieren' },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://webseite.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'Google-Unternehmensprofil optimieren', item: 'https://webseite.hamburg/wissen/google-business-profile-optimieren' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="google-business-profile-optimieren"
                category="SEO"
                title="Google-Unternehmensprofil optimieren: der Hamburg-Leitfaden"
                readTime="12 Min."
                publishDate="2026-08-20"
                heroImage="/wissen/fotos/gbp-maps.webp"
                heroAlt="Hand haelt ein Smartphone, auf dem eine Karte mit einem markierten Standort zu sehen ist"
                heroFramed
            >
                <p>
                    Für ein lokales Unternehmen in Hamburg ist das Google-Unternehmensprofil der wichtigste kostenlose
                    Kanal, den es gibt. Es steht in der Suche über den blauen Links, es entscheidet in Google Maps
                    darüber, wer angerufen wird, und es kostet nichts außer Aufmerksamkeit. Trotzdem sind die meisten
                    Profile, die ich mir ansehe, halb ausgefüllt und seit Monaten unberührt.
                </p>
                <p>
                    Dieser Leitfaden nutzt ausschließlich Regeln, die Google selbst veröffentlicht hat, plus Zahlen
                    aus der aktuellen Verbraucherumfrage von BrightLocal. Keine Geheimtricks, weil es keine gibt.
                    Am Ende steht eine Routine, die 20 Minuten pro Woche braucht.
                </p>

                <figure className="article-figure">
                    <img src="/wissen/fotos/gbp-unterwegs.webp" alt="Mann tippt unterwegs auf einer Strasse etwas in sein Smartphone ein" width="1600" height="900" loading="lazy" decoding="async" />
                    <figcaption>Das lokale Dreierpack über den Suchergebnissen entscheidet, wer angerufen wird.</figcaption>
                </figure>

                <h2>Welche Ranking-Faktoren nennt Google offiziell?</h2>
                <p>
                    Google beschreibt in seiner Hilfe für Unternehmensprofile drei Faktoren für das lokale Ranking:
                    Relevanz, Entfernung und Bekanntheit. Das klingt banal, hat aber praktische Folgen:
                </p>
                <ul>
                    <li>
                        <strong>Relevanz</strong> bedeutet, wie gut Ihr Profil zur Suchanfrage passt. Deshalb ist die
                        Hauptkategorie die wichtigste Einstellung im ganzen Profil. Ein Malerbetrieb, der als
                        „Bauunternehmen" geführt wird, verliegt bei „Maler Hamburg" gegen jeden korrekt kategorisierten
                        Wettbewerber.
                    </li>
                    <li>
                        <strong>Entfernung</strong> ist der Abstand zwischen Suchendem und Ihrem Standort. Diesen Faktor
                        können Sie nicht beeinflussen, und deshalb ist die Erwartung, in ganz Hamburg im Dreierpack zu
                        stehen, unrealistisch. Wer in Bergedorf sitzt, gewinnt in Bergedorf.
                    </li>
                    <li>
                        <strong>Bekanntheit</strong> speist sich aus allem, was Google über Sie findet: Bewertungen,
                        Erwähnungen, Verzeichnisse, Verlinkungen, Presse. Hier liegt der Teil, den man über Monate
                        aufbaut, und der Grund, warum Profile mit gleicher Kategorie unterschiedlich ranken.
                    </li>
                </ul>

                <h2>Darf ich Suchbegriffe in den Profilnamen schreiben?</h2>
                <p>
                    Es gibt einen Klassiker, den man in Hamburg täglich sieht: „Malerbetrieb Hansen Maler Hamburg
                    Altona Notdienst". Der Gedanke dahinter ist verständlich, die Regel dazu ist eindeutig. Google
                    verlangt, dass der Name im Profil dem echten Geschäftsnamen entspricht, also dem, der am Laden,
                    auf dem Briefkopf und in der Gewerbeanmeldung steht. Zusätzliche Suchbegriffe im Namen sind ein
                    Richtlinienverstoß und einer der häufigsten Gründe für eine Profilsperrung.
                </p>
                <p>
                    Kurzfristig funktioniert es manchmal. Mittelfristig verlieren Sie das Profil, und mit ihm alle
                    Bewertungen, die daran hängen. Bei einem Betrieb mit 60 Bewertungen ist das der schmerzhafteste
                    Fehler, den man im lokalen Marketing machen kann. Die Stadtteile gehören stattdessen in die
                    Website, in die Leistungsbeschreibung und in die Beiträge.
                </p>

                <h2>Dienstleister ohne Ladengeschäft: Adresse ausblenden</h2>
                <p>
                    Wenn Sie zu Kunden fahren und kein Ladenlokal haben, das während der Öffnungszeiten besetzt ist,
                    verlangt Google, dass Sie die Adresse ausblenden und stattdessen ein Einzugsgebiet angeben. Das
                    betrifft Handwerker, Notdienste, mobile Dienstleister und viele Berater. Postfächer, virtuelle
                    Büros und unbesetzte Coworking-Adressen sind nicht erlaubt.
                </p>
                <p>
                    Praktischer Hinweis für Hamburg: Als Einzugsgebiet reicht meist die Stadt plus die angrenzenden
                    Gebiete, in denen Sie wirklich arbeiten. Ganz Schleswig-Holstein anzugeben, weil man theoretisch
                    hinfahren würde, hilft dem Ranking nicht und macht die Anfragen schlechter.
                </p>

                <h2>Was erwarten Verbraucher 2026 von Bewertungen?</h2>
                <p>
                    Die Local Consumer Review Survey 2026 von BrightLocal liefert die Zahlen, die man kennen sollte:
                    97 Prozent der Verbraucher lesen Bewertungen lokaler Unternehmen, 41 Prozent tun das immer.
                    31 Prozent verlangen mindestens 4,5 Sterne, 68 Prozent mindestens 4 Sterne. 89 Prozent erwarten,
                    dass Inhaber auf Bewertungen antworten, und 74 Prozent achten vor allem auf Bewertungen aus den
                    letzten drei Monaten.
                </p>
                <p>
                    Die interessanteste Zahl der Ausgabe 2026 ist eine andere: 45 Prozent nutzen inzwischen ChatGPT
                    oder andere KI-Werkzeuge für lokale Empfehlungen, im Vorjahr waren es 6 Prozent. Google bleibt mit
                    71 Prozent führend, aber die Empfehlungsfrage verlagert sich messbar. Wer in diesen Antworten
                    vorkommen will, braucht Inhalte, aus denen sich Aussagen zitieren lassen. Genau darum geht es bei
                    {' '}<Link href="/leistungen/ai-seo">AI SEO</Link> und im Artikel
                    {' '}<Link href="/wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen">AI SEO: Was Unternehmen jetzt wissen müssen</Link>.
                </p>

                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Erwartung der Verbraucher</th>
                                <th>Zahl</th>
                                <th>Was das für Sie bedeutet</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bewertungen werden gelesen</td>
                                <td>97 Prozent</td>
                                <td>Das Profil ist Ihre Visitenkarte, nicht Ihre Website</td>
                            </tr>
                            <tr>
                                <td>Mindestens 4,5 Sterne verlangt</td>
                                <td>31 Prozent</td>
                                <td>Eine 3,9 kostet Anfragen, bevor jemand mit Ihnen spricht</td>
                            </tr>
                            <tr>
                                <td>Antwort des Inhabers erwartet</td>
                                <td>89 Prozent</td>
                                <td>Antworten sind Pflichtprogramm, auch bei Lob</td>
                            </tr>
                            <tr>
                                <td>Bewertungen der letzten drei Monate zählen</td>
                                <td>74 Prozent</td>
                                <td>Zwölf gute Bewertungen aus 2023 sind wertlos</td>
                            </tr>
                            <tr>
                                <td>Nutzen KI für lokale Empfehlungen</td>
                                <td>45 Prozent</td>
                                <td>Sichtbarkeit in KI-Antworten wird zum zweiten Kanal</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Bewertungen sammeln, ohne sich das Profil zu ruinieren</h2>
                <p>
                    Google verbietet gekaufte Bewertungen, Gegenleistungen jeder Art und das sogenannte Review-Gating,
                    also das Vorschalten eines Filters, bei dem nur zufriedene Kunden zu Google geschickt werden.
                    Ebenfalls verboten: Bewertungen von Mitarbeitern, Inhabern oder Agenturen für das eigene
                    Unternehmen. Verstöße führen zur Löschung der Bewertungen und im Wiederholungsfall zu Sperren.
                </p>
                <p>
                    Was erlaubt und wirksam ist, ist unspektakulär: Fragen Sie jeden zufriedenen Kunden direkt nach
                    Abschluss, mit einem kurzen Link. Der beste Zeitpunkt ist der Moment, in dem der Kunde sich
                    bedankt, nicht drei Wochen später per Serien-E-Mail. Zehn bis fünfzehn echte Bewertungen bringen
                    einen lokalen Dienstleister in Hamburg in den meisten Branchen schon in eine gute Position, weil
                    viele Wettbewerber bei drei stehen.
                </p>
                <p>
                    Und antworten Sie. Zwei Sätze genügen. Bei Kritik: sachlich, ohne Rechtfertigung, mit einem
                    Angebot zur Klärung. Diese Antworten schreiben Sie nicht für den Beschwerdeführer, sondern für
                    die nächsten fünfzig Leute, die sie lesen.
                </p>

                <h2>Die Felder, die tatsächlich Wirkung haben</h2>
                <ul>
                    <li><strong>Hauptkategorie:</strong> die exakteste Kategorie wählen, nicht die größte. Danach zwei bis drei Nebenkategorien, die zu echten Leistungen passen.</li>
                    <li><strong>Öffnungszeiten inklusive Feiertage:</strong> Sonderzeiten für Feiertage und Betriebsferien eintragen. Falsche Zeiten sind der schnellste Weg zu einer Ein-Stern-Bewertung.</li>
                    <li><strong>Leistungen und Produkte:</strong> jede Leistung einzeln anlegen, mit kurzer Beschreibung. Das ist der Ort für Ihre Suchbegriffe, nicht der Name.</li>
                    <li><strong>Fotos:</strong> echte Bilder von Arbeit, Team und Räumen, regelmäßig ergänzt. Bei Restaurants Speisen, bei Handwerkern fertige Arbeiten, bei Praxen die Räume.</li>
                    <li><strong>Beitrag pro Woche:</strong> kurze Neuigkeit, Angebot oder Hinweis. Kostet fünf Minuten und hält das Profil aktiv.</li>
                    <li><strong>Fragen und Antworten:</strong> die zehn häufigsten Fragen selbst einstellen und beantworten. Das ist erlaubt und wird von Google in Antworten verwendet.</li>
                    <li><strong>Telefonnummer und Website:</strong> Website-Link auf die passende Unterseite, nicht immer auf die Startseite. Ein Zahnarzt mit Implantat-Schwerpunkt verlinkt die Leistungsseite.</li>
                    <li><strong>Termin- oder Reservierungslink:</strong> falls vorhanden, direkt einbinden. Jeder Zwischenschritt kostet Anfragen.</li>
                </ul>

                <h2>Wie pflege ich das Profil in 20 Minuten pro Woche?</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Wann</th>
                                <th>Was</th>
                                <th>Dauer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jede Woche</td>
                                <td>Neue Bewertungen beantworten, ein Foto hochladen, einen Beitrag einstellen</td>
                                <td>15 bis 20 Minuten</td>
                            </tr>
                            <tr>
                                <td>Jeden Monat</td>
                                <td>Kennzahlen prüfen: Anrufe, Routenanfragen, Website-Klicks, Suchbegriffe</td>
                                <td>15 Minuten</td>
                            </tr>
                            <tr>
                                <td>Jedes Quartal</td>
                                <td>Kategorien, Leistungen und Beschreibung überprüfen, Fragen ergänzen</td>
                                <td>30 Minuten</td>
                            </tr>
                            <tr>
                                <td>Vor Feiertagen</td>
                                <td>Sonderöffnungszeiten eintragen, in Hamburg besonders um Ostern, Pfingsten und die Weihnachtstage</td>
                                <td>5 Minuten</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Was Sie in diesen Kennzahlen suchen: Anrufe und Routenanfragen sind echte Nachfrage, Profilaufrufe
                    sind nur Aufmerksamkeit. Wenn Aufrufe steigen und Anrufe nicht, stimmt etwas mit Bewertungen,
                    Fotos oder Öffnungszeiten nicht.
                </p>

                <h2>Warum lokale Suche so kaufnah ist</h2>
                <p>
                    Die Zahl, die Google selbst seit Jahren zitiert, stammt aus einer Untersuchung von Think with
                    Google: 76 Prozent der Menschen, die mobil nach etwas in der Nähe suchen, besuchen innerhalb eines
                    Tages ein passendes Geschäft, und 28 Prozent dieser Suchen führen zu einem Kauf. Die Studie ist
                    von 2016, die Größenordnung hat sich seither nicht verkleinert. Lokale Suche ist damit die
                    Suchart mit der kürzesten Strecke zwischen Klick und Umsatz.
                </p>
                <p>
                    Was das in der Praxis bedeutet, zeigt der Fall
                    {' '}<Link href="/referenzen/gl-sommer">GL Sommer</Link>: 728 lokale Aktionen und 1.113 Klicks pro
                    Monat nach Modernisierung von Website und lokaler Sichtbarkeit. Das sind keine Impressionen,
                    sondern Anrufe, Routenanfragen und Klicks von Leuten aus der Umgebung.
                </p>

                <h2>Profil gesperrt: was jetzt?</h2>
                <ol>
                    <li><strong>Ursache finden.</strong> In fast allen Fällen: Name mit Suchbegriffen, Adresse ohne Kundenverkehr, mehrere Profile für dieselbe Adresse oder auffälliger Bewertungszuwachs.</li>
                    <li><strong>Verstoß beheben, bevor Sie Einspruch einlegen.</strong> Name zurück auf den echten Firmennamen, Adresse anpassen, Doppelprofile löschen.</li>
                    <li><strong>Nachweise sammeln.</strong> Gewerbeanmeldung, Fotos von Schild und Eingang, Briefkopf, Rechnungen mit Adresse.</li>
                    <li><strong>Einspruch stellen und warten.</strong> Das dauert. Deshalb ist es günstiger, die Regeln vorher zu lesen als danach.</li>
                </ol>

                <h2>Das Profil ist die halbe Arbeit</h2>
                <p>
                    Ein gepflegtes Profil bringt Sichtbarkeit in Maps und im Dreierpack. Was danach passiert,
                    entscheidet Ihre Website: Wenn dort die Leistung nicht klar wird, die Ladezeit bei sechs Sekunden
                    liegt oder das Formular nicht funktioniert, war die Sichtbarkeit umsonst. Wie beides zusammenspielt,
                    steht im <Link href="/wissen/lokales-seo-hamburg-guide">Leitfaden zu lokalem SEO in Hamburg</Link>,
                    und branchenspezifisch etwa für
                    {' '}<Link href="/leistungen/webdesign-gastronomie">Restaurants</Link>,
                    {' '}<Link href="/leistungen/webdesign-hotels">Hotels</Link> oder
                    {' '}<Link href="/leistungen/webdesign-immobilienmakler">Immobilienmakler</Link>.
                </p>
                <p>
                    Wenn Sie wollen, sehe ich mir Ihr Profil kostenlos an und sage Ihnen, welche drei Punkte in Ihrer
                    Branche am meisten bringen. <Link href="/kontakt">Schreiben Sie mir</Link>, ein Link zum Profil
                    genügt.
                </p>

                <div className="subpage-sources">
                    <h2>Quellen</h2>
                    <ol>
                        <li>Google, Ranking-Faktoren für lokale Suchergebnisse: Relevanz, Entfernung, Bekanntheit. <a href="https://support.google.com/business/answer/7091?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google, Richtlinien zur Darstellung Ihres Unternehmens bei Google: echter Geschäftsname, Regeln für Dienstleister ohne Ladengeschäft. <a href="https://support.google.com/business/answer/3038177?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google Maps, Richtlinien zu gefälschten Interaktionen: Verbot gekaufter Bewertungen, Gegenleistungen und Review-Gating. <a href="https://support.google.com/contributionpolicy/answer/7400114?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>BrightLocal, Local Consumer Review Survey 2026: 97 Prozent lesen Bewertungen, 41 Prozent immer, 31 Prozent verlangen 4,5 Sterne, 68 Prozent mindestens 4 Sterne, 89 Prozent erwarten Antworten, 74 Prozent achten auf die letzten drei Monate, 45 Prozent nutzen KI-Werkzeuge für lokale Empfehlungen (Vorjahr 6 Prozent), Google 71 Prozent. <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" rel="nofollow noopener" target="_blank">brightlocal.com</a></li>
                        <li>Think with Google (2016), How Mobile Search Connects Consumers to Stores: 76 Prozent besuchen innerhalb eines Tages ein Geschäft, 28 Prozent dieser Suchen führen zu einem Kauf. <a href="https://www.thinkwithgoogle.com/marketing-strategies/search/how-mobile-search-connects-consumers-to-stores/" rel="nofollow noopener" target="_blank">thinkwithgoogle.com</a></li>
                    </ol>
                </div>
            </ArticleLayout>
            <FaqSection title="Häufige Fragen zum Google-Unternehmensprofil" items={faqItems} />
        </>
    );
}
