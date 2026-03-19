import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Die 7 teuersten Google Ads Fehler lokaler Unternehmen | Hamburg',
    description: 'Von falschen Keywords bis fehlendem Conversion-Tracking — diese Fehler verbrennen Ihr Werbebudget. Und wie Sie sie vermeiden.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/google-ads-fehler-lokale-unternehmen',
    },
    openGraph: {
        title: 'Die 7 teuersten Google Ads Fehler lokaler Unternehmen',
        description: 'Von falschen Keywords bis fehlendem Conversion-Tracking — diese Fehler verbrennen Ihr Werbebudget. Und wie Sie sie vermeiden.',
        url: 'https://webseite.hamburg/wissen/google-ads-fehler-lokale-unternehmen',
        type: 'article',
    },
};

export default function GoogleAdsFehlerArticlePage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Die 7 teuersten Google Ads Fehler lokaler Unternehmen',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-02-01',
        dateModified: '2026-02-01',
        url: 'https://webseite.hamburg/wissen/google-ads-fehler-lokale-unternehmen',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/google-ads-fehler-lokale-unternehmen' },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://webseite.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'Die 7 teuersten Google Ads Fehler', item: 'https://webseite.hamburg/wissen/google-ads-fehler-lokale-unternehmen' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="google-ads-fehler-lokale-unternehmen"
                category="GOOGLE ADS"
                title="Die 7 teuersten Google Ads Fehler lokaler Unternehmen"
                readTime="7 Min."
                publishDate="2026-02-01"
            >
                <p>
                    Google Ads kann der schnellste Weg zu neuen Kunden sein — oder ein zuverl&auml;ssiger Weg, Geld zu verbrennen.
                    Die meisten lokalen Unternehmen in Hamburg, die wir auditieren, machen mindestens drei dieser sieben Fehler.
                    Jeder einzelne kostet bares Geld, jeden Monat.
                </p>

                <h2>1. Broad-Match-Keywords ohne Kontrolle</h2>
                <p>
                    Broad Match ist die Standardeinstellung bei Google Ads. Das bedeutet: Google entscheidet, bei welchen Suchanfragen
                    Ihre Anzeige erscheint. Ein Zahnarzt, der auf &quot;Zahnreinigung Hamburg&quot; bietet, bekommt Klicks von Leuten,
                    die nach &quot;Zahnreinigung Hund&quot; oder &quot;Zahnreinigung selber machen&quot; suchen.
                </p>
                <blockquote>
                    Ein Hamburger Handwerksbetrieb zahlte 800 Euro/Monat f&uuml;r Klicks auf &quot;Renovierung&quot; — ein Keyword,
                    das Studenten und DIY-Sucher anzog, nicht zahlende Kunden. Nach der Keyword-Bereinigung:
                    gleiche Kosten, 4x mehr echte Anfragen.
                </blockquote>
                <p>
                    <strong>So pr&uuml;fen Sie es:</strong> &Ouml;ffnen Sie den Suchbegriffsbericht unter &quot;Keywords &gt; Suchbegriffe&quot;.
                    Wenn mehr als 30 % der Klicks von irrelevanten Begriffen kommen, haben Sie ein Problem.
                </p>
                <p>
                    <strong>L&ouml;sung:</strong> Starten Sie mit Phrase Match oder Exact Match. Broad Match nur mit klarer
                    Negative-Keyword-Strategie und Smart Bidding einsetzen.
                </p>

                <h2>2. Keine negativen Keywords</h2>
                <p>
                    Negative Keywords sind der Filter, den die meisten Kampagnen nicht haben. Ohne sie zahlen Sie
                    f&uuml;r Klicks von Jobsuchenden (&quot;Klempner Gehalt&quot;), Informationssuchenden (&quot;Klempner Ausbildung&quot;)
                    und Leuten, die nie Kunden werden.
                </p>
                <p>
                    <strong>So pr&uuml;fen Sie es:</strong> Haben Sie eine Negative-Keyword-Liste? Wenn nein, verschwenden Sie Budget.
                    Pr&uuml;fen Sie den Suchbegriffsbericht w&ouml;chentlich in den ersten drei Monaten.
                </p>
                <p>
                    <strong>L&ouml;sung:</strong> Erstellen Sie eine Basisliste mit Begriffen wie &quot;kostenlos&quot;, &quot;Ausbildung&quot;, &quot;Gehalt&quot;,
                    &quot;DIY&quot;, &quot;selber machen&quot;, &quot;Praktikum&quot;. Erg&auml;nzen Sie laufend aus dem Suchbegriffsbericht.
                </p>

                <h2>3. Kein Conversion-Tracking</h2>
                <p>
                    Ohne Conversion-Tracking wissen Sie nicht, welche Keywords und Anzeigen tats&auml;chlich Anfragen oder Anrufe
                    bringen. Sie optimieren blind. Grundlagen dazu finden Sie auch in unserem Artikel zur <a href="/wissen/website-conversion-optimierung">Conversion-Optimierung</a>. Das ist, als w&uuml;rden Sie eine Filiale er&ouml;ffnen und nie nachz&auml;hlen,
                    wie viele Kunden tats&auml;chlich kaufen.
                </p>
                <p>
                    <strong>So pr&uuml;fen Sie es:</strong> Gehen Sie zu &quot;Tools &gt; Conversions&quot;. Wenn dort keine Aktionen
                    eingerichtet sind oder die Z&auml;hlung bei null steht, fehlt Ihr Tracking.
                </p>
                <p>
                    <strong>L&ouml;sung:</strong> Richten Sie mindestens Anruf-Tracking und Formular-Conversions ein.
                    Google bietet eine <a href="https://support.google.com/google-ads/answer/1722054" target="_blank" rel="noopener noreferrer">Schritt-f&uuml;r-Schritt-Anleitung zum Conversion-Tracking</a> an.
                    Ohne diese Daten ist jede Optimierung Raterei.
                </p>

                <h2>4. Traffic auf die Startseite statt auf eine Landingpage</h2>
                <p>
                    Ihre Startseite ist f&uuml;r alle da. Eine Google-Ads-Anzeige spricht einen konkreten Bedarf an.
                    Wer auf &quot;Rohrreinigung Notdienst Hamburg&quot; klickt und auf einer allgemeinen Handwerker-Startseite
                    landet, ist in drei Sekunden wieder weg. Sie zahlen trotzdem.
                </p>
                <p>
                    <strong>So pr&uuml;fen Sie es:</strong> Schauen Sie sich die Ziel-URLs Ihrer Anzeigengruppen an.
                    Wenn &uuml;berall Ihre Startseite steht, verlieren Sie Conversions.
                </p>
                <p>
                    <strong>L&ouml;sung:</strong> Erstellen Sie f&uuml;r jede Anzeigengruppe eine spezifische Landingpage.
                    Diese braucht: eine klare &Uuml;berschrift, die zum Suchbegriff passt, einen sichtbaren Call-to-Action
                    und Vertrauenselemente (Bewertungen, Zertifikate). Laut <a href="https://www.wordstream.com/blog/ws/2016/09/08/landing-page-best-practices" target="_blank" rel="noopener noreferrer">Wordstream</a> steigern
                    dedizierte Landingpages die Conversion-Rate um durchschnittlich 65 %.
                </p>

                <h2>5. Anzeigenerweiterungen nicht genutzt</h2>
                <p>
                    Anzeigenerweiterungen (heute &quot;Assets&quot; genannt) kosten nichts extra, vergr&ouml;&szlig;ern aber Ihre Anzeige
                    in den Suchergebnissen und erh&ouml;hen die Klickrate. Trotzdem nutzen die meisten lokalen Kampagnen
                    h&ouml;chstens eine oder zwei davon.
                </p>
                <p>
                    <strong>So pr&uuml;fen Sie es:</strong> Gehen Sie zu &quot;Anzeigen &gt; Assets&quot;. Wenn Sie weniger als vier
                    Asset-Typen aktiv haben, verschenken Sie Sichtbarkeit.
                </p>
                <p>
                    <strong>L&ouml;sung:</strong> Richten Sie mindestens ein: Sitelinks, Anruferweiterung, Standorterweiterung,
                    Erweiterungen mit Zusatzinformationen. F&uuml;r lokale Unternehmen ist die Standorterweiterung mit
                    Google-Business-Profil-Verkn&uuml;pfung besonders wichtig.
                </p>

                <h2>6. Quality Score ignorieren</h2>
                <p>
                    Der Quality Score bestimmt, wie viel Sie pro Klick zahlen und ob Ihre Anzeige &uuml;berhaupt erscheint.
                    Ein Score von 4 statt 7 kann Ihren Klickpreis verdoppeln. Bei 500 Klicks im Monat
                    summiert sich das schnell auf vierstellige Betr&auml;ge.
                </p>
                <p>
                    <strong>So pr&uuml;fen Sie es:</strong> Aktivieren Sie die Spalte &quot;Quality Score&quot; in der Keyword-&Uuml;bersicht.
                    Alles unter 5 ist ein Problem. Google erkl&auml;rt die <a href="https://support.google.com/google-ads/answer/6167118" target="_blank" rel="noopener noreferrer">Faktoren des Quality Scores</a> in
                    ihrer Dokumentation.
                </p>
                <p>
                    <strong>L&ouml;sung:</strong> Die drei Hebel sind: Anzeigenrelevanz (Keyword muss im Anzeigentext vorkommen),
                    erwartete Klickrate (bessere Anzeigentexte schreiben) und Landingpage-Erfahrung (<a href="/wissen/warum-langsame-websites-kunden-kosten">schnelle, relevante Seite</a>).
                    Arbeiten Sie an allen drei gleichzeitig.
                </p>

                <h2>7. Kampagnen &quot;laufen lassen&quot; ohne regelm&auml;&szlig;ige Optimierung</h2>
                <p>
                    Eine Google-Ads-Kampagne ist kein Plakat, das man aufh&auml;ngt und vergisst. Suchverhalten &auml;ndert sich,
                    Wettbewerber passen ihre Gebote an, und Google selbst &auml;ndert regelm&auml;&szlig;ig seine Algorithmen.
                    Kampagnen, die drei Monate lang nicht angefasst werden, verlieren im Schnitt 20-30 % ihrer Effizienz.
                </p>
                <p>
                    <strong>So pr&uuml;fen Sie es:</strong> Wann haben Sie zuletzt Ihren Suchbegriffsbericht gepr&uuml;ft?
                    Wann zuletzt Anzeigentexte getestet? Wann zuletzt Gebote angepasst? Wenn die Antwort
                    &quot;vor mehr als vier Wochen&quot; ist, l&auml;uft Ihre Kampagne auf Autopilot — und verbrennt wahrscheinlich Geld.
                </p>
                <p>
                    <strong>L&ouml;sung:</strong> Planen Sie feste Optimierungszyklen ein. Minimum: w&ouml;chentliche Pr&uuml;fung des
                    Suchbegriffsberichts, monatlicher Review der Anzeigentexte und Gebote, quartalsweise
                    &Uuml;berarbeitung der Kampagnenstruktur.
                </p>

                <h3>Checkliste: Pr&uuml;fen Sie Ihre Kampagne in 15 Minuten</h3>
                <ul>
                    <li>Suchbegriffsbericht der letzten 30 Tage &ouml;ffnen — irrelevante Begriffe als negative Keywords hinzuf&uuml;gen</li>
                    <li>Conversion-Tracking pr&uuml;fen — werden Anrufe und Formulare erfasst?</li>
                    <li>Ziel-URLs pr&uuml;fen — f&uuml;hren Anzeigen auf spezifische Landingpages?</li>
                    <li>Assets/Erweiterungen z&auml;hlen — mindestens vier Typen aktiv?</li>
                    <li>Quality Score der Top-10-Keywords pr&uuml;fen — alle &uuml;ber 5?</li>
                    <li>Letztes &Auml;nderungsdatum der Kampagne pr&uuml;fen — liegt es mehr als vier Wochen zur&uuml;ck?</li>
                </ul>

                <p>
                    Jeder dieser sieben Fehler ist vermeidbar. Die meisten lassen sich innerhalb eines Tages beheben.
                    Der Unterschied zwischen einer Kampagne, die Geld verbrennt, und einer, die Kunden bringt,
                    liegt selten am Budget — sondern an der Sorgfalt, mit der sie aufgesetzt und gepflegt wird.
                </p>
            </ArticleLayout>
        </>
    );
}
