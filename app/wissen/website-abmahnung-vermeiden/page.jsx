import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Abmahnung wegen der Website vermeiden',
    description: 'Google Fonts, Cookie-Banner, fehlendes Impressum: was 2026 wirklich abmahnbar ist, was das Urteil des LG München sagt und wie Sie die Risiken abstellen.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/website-abmahnung-vermeiden',
    },
    openGraph: {
        title: 'Abmahnung wegen der Website vermeiden',
        description: 'Google Fonts, Cookie-Banner, fehlendes Impressum: was wirklich abmahnbar ist und wie Sie die Risiken abstellen.',
        url: 'https://webseite.hamburg/wissen/website-abmahnung-vermeiden',
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Ist die Einbindung von Google Fonts abmahnbar?',
        a: 'Die dynamische Einbindung, bei der der Browser des Besuchers die Schrift von einem Google-Server lädt, war Gegenstand des Urteils des LG München I vom 20. Januar 2022, Az. 3 O 17493/20. Das Gericht sprach 100 Euro Schadensersatz nach Art. 82 DSGVO zu und bejahte einen Unterlassungsanspruch, weil die IP-Adresse ohne Einwilligung an Google übermittelt wurde. Wer die Schriftdateien lokal auf dem eigenen Server ablegt, hat dieses Problem nicht mehr.',
    },
    {
        q: 'Was kostet eine Abmahnung wegen der Website?',
        a: 'Das hängt vom Absender ab. Bei Datenschutzverstößen wurden in der Abmahnwelle nach dem Google-Fonts-Urteil typischerweise dreistellige Beträge gefordert, meist ein Schadensersatz um 100 Euro plus Anwaltskosten. Bei wettbewerbsrechtlichen Abmahnungen, etwa wegen fehlendem Impressum oder fehlerhafter Widerrufsbelehrung, liegen die Kosten in der Regel höher, weil sich der Gegenstandswert anders berechnet. Verlässliche Pauschalen gibt es nicht.',
    },
    {
        q: 'Muss ich eine Unterlassungserklärung unterschreiben?',
        a: 'Nicht ungeprüft. Eine vorformulierte Unterlassungserklärung ist meist weiter gefasst, als der Anspruch reicht, und sie bindet Sie in der Regel mit Vertragsstrafe auf Jahrzehnte. Die Bewertung, ob und in welcher Form Sie reagieren, gehört zu einem Anwalt. Was Sie unabhängig davon sofort tun sollten: den technischen Mangel abstellen und den Zustand vorher und nachher dokumentieren.',
    },
    {
        q: 'Schützt mich ein Cookie-Banner vor Abmahnungen?',
        a: 'Nur wenn er richtig funktioniert. Ein Banner, der Skripte schon vor der Einwilligung lädt, macht die Sache nicht besser, sondern dokumentiert den Verstoß. § 25 TDDDG verlangt die Einwilligung vor dem Zugriff auf das Endgerät. Prüfen lässt sich das im Netzwerk-Tab des Browsers, ohne im Banner etwas anzuklicken.',
    },
    {
        q: 'Kann jeder Privatnutzer mich abmahnen?',
        a: 'Beim Datenschutz kann eine betroffene Person Ansprüche geltend machen, etwa Unterlassung und Schadensersatz nach Art. 82 DSGVO. Genau das war die Grundlage der Google-Fonts-Welle. Diese Welle hat allerdings auch Gegenwehr erzeugt: In mehreren Verfahren scheiterten Serien-Abmahner, etwa in einer Entscheidung des AG Berlin-Charlottenburg vom 20. Dezember 2022, Az. 217 C 64/22. Wettbewerbsrechtliche Abmahnungen sind dagegen Mitbewerbern und bestimmten Verbänden vorbehalten.',
    },
    {
        q: 'Was ist das häufigste abmahnbare Problem, das Sie in der Praxis finden?',
        a: 'Skripte und Einbettungen, die vor der Einwilligung laden. Meist eingebettete Karten, Videos und Schriftdienste, die ein Theme oder ein Plugin mitbringt, von denen der Betreiber nichts weiß. Danach kommen veraltete Rechtsgrundlagen in den Rechtstexten und Cookie-Banner, in denen Ablehnen schwerer erreichbar ist als Zustimmen.',
    },
];

export default function WebsiteAbmahnungVermeidenPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Abmahnung wegen der Website: was 2026 wirklich riskant ist',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-22',
        dateModified: '2026-08-22',
        url: 'https://webseite.hamburg/wissen/website-abmahnung-vermeiden',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/website-abmahnung-vermeiden' },
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://webseite.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'Abmahnung vermeiden', item: 'https://webseite.hamburg/wissen/website-abmahnung-vermeiden' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="website-abmahnung-vermeiden"
                category="RECHT"
                title="Abmahnung wegen der Website: was 2026 wirklich riskant ist"
                readTime="10 Min."
                publishDate="2026-08-22"
                heroImage="/wissen/hero-abmahnung.svg"
                heroAlt="Illustration: geöffneter Briefumschlag mit rotem Rand und Paragraphenzeichen, daneben ein Browser-Fenster mit Datenabfluss zu einer Wolke"
            >
                <p>
                    Abmahnungen wegen einer Website sind selten und teuer, und genau diese Kombination macht sie zu
                    einem guten Verkaufsargument für Panikmarketing. Ich versuche hier das Gegenteil: nüchtern
                    aufschreiben, was tatsächlich passiert ist, was die Gerichte entschieden haben und welche zwei
                    Nachmittage Arbeit den größten Teil des Risikos abstellen.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> Das größte praktische Risiko sind Skripte, Schriften,
                        Karten und Videos, die von fremden Servern geladen werden, bevor der Besucher eingewilligt
                        hat. Das LG München I hat am 20. Januar 2022 unter dem Az. 3 O 17493/20 für dynamisch
                        eingebundene Google Fonts 100 Euro Schadensersatz und einen Unterlassungsanspruch bejaht.
                    </p>
                    <p>
                        Die Abhilfe ist technisch, nicht juristisch: Schriften lokal ausliefern, Einbettungen erst
                        nach Einwilligung laden, Ablehnen im Banner genauso einfach machen wie Zustimmen,
                        Rechtstexte auf DDG und TDDDG aktualisieren.
                    </p>
                </div>

                <h2>Das Urteil, das die Welle ausgelöst hat</h2>
                <p>
                    Der Fall war unspektakulär. Eine Website band Google Fonts dynamisch ein, also so, dass der
                    Browser jedes Besuchers die Schriftdatei direkt von einem Google-Server holt. Dabei geht
                    zwangsläufig die IP-Adresse an Google. Eine Einwilligung dafür gab es nicht.
                </p>
                <p>
                    Das LG München I stufte die IP-Adresse als personenbezogenes Datum ein, verneinte ein
                    berechtigtes Interesse nach Art. 6 Absatz 1 lit. f DSGVO und sprach dem Kläger 100 Euro
                    Schadensersatz nach Art. 82 DSGVO zu, zusätzlich zum Unterlassungsanspruch. Der Kern der
                    Begründung, der praktisch bleibt: Die Schriften hätten lokal gehostet werden können, es gab
                    also keine Notwendigkeit für die Übermittlung.
                </p>
                <p>
                    Danach kam die Abmahnwelle, und mit ihr die Gegenwehr. Serien-Abmahner, die
                    massenhaft gleichlautende Schreiben verschickten, sind in mehreren Verfahren gescheitert, etwa
                    in einer Entscheidung des AG Berlin-Charlottenburg vom 20. Dezember 2022, Az. 217 C 64/22.
                    Wer heute so ein Schreiben bekommt, hat also durchaus Argumente. Nur ändert das nichts daran,
                    dass der technische Mangel besteht und weiterhin abgestellt werden sollte.
                </p>

                <h2>Die Rangliste der realen Risiken</h2>
                <p>
                    Nach dem, was ich in Audits finde, sortiert nach Häufigkeit mal Wahrscheinlichkeit, dass sich
                    jemand daran stört.
                </p>

                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Problem</th>
                                <th>Grundlage</th>
                                <th>Wie oft ich es finde</th>
                                <th>Aufwand zur Behebung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Fremdskripte laden vor der Einwilligung</th>
                                <td>§ 25 TDDDG, Art. 6 DSGVO</td>
                                <td>sehr häufig</td>
                                <td>1 bis 4 Stunden</td>
                            </tr>
                            <tr>
                                <th>Schriften dynamisch von Fremdservern</th>
                                <td>Art. 6, Art. 82 DSGVO</td>
                                <td>häufig</td>
                                <td>1 Stunde</td>
                            </tr>
                            <tr>
                                <th>Karten und Videos direkt eingebettet</th>
                                <td>§ 25 TDDDG</td>
                                <td>häufig</td>
                                <td>2 bis 4 Stunden</td>
                            </tr>
                            <tr>
                                <th>Ablehnen schwerer erreichbar als Zustimmen</th>
                                <td>Art. 4 Nummer 11, Art. 7 DSGVO</td>
                                <td>häufig</td>
                                <td>1 Stunde Konfiguration</td>
                            </tr>
                            <tr>
                                <th>Veraltete Rechtsgrundlagen im Text</th>
                                <td>§ 5 DDG statt § 5 TMG</td>
                                <td>sehr häufig</td>
                                <td>15 Minuten</td>
                            </tr>
                            <tr>
                                <th>Fehlende oder versteckte Anbieterkennzeichnung</th>
                                <td>§ 5 DDG</td>
                                <td>gelegentlich, oft auf Landingpages</td>
                                <td>30 Minuten</td>
                            </tr>
                            <tr>
                                <th>Bilder ohne Nutzungsrecht</th>
                                <td>UrhG</td>
                                <td>gelegentlich, dann teuer</td>
                                <td>je nach Bestand</td>
                            </tr>
                            <tr>
                                <th>Fehlender AV-Vertrag mit Dienstleistern</th>
                                <td>Art. 28 DSGVO</td>
                                <td>sehr häufig</td>
                                <td>20 Minuten pro Anbieter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Die Spalte rechts ist der eigentliche Punkt dieses Artikels. Der Großteil dieser Liste ist ein
                    Tag Arbeit. Die Angst davor ist deutlich größer als der Aufwand dagegen.
                </p>

                <h2>Der Test, der Ihnen die Wahrheit zeigt</h2>
                <p>
                    Sie brauchen kein Werkzeug und keinen Berater, um Ihren Ist-Stand zu sehen:
                </p>
                <ol>
                    <li>Ihre Website in einem privaten Browserfenster öffnen.</li>
                    <li>Entwicklerwerkzeuge öffnen, Netzwerk-Tab wählen.</li>
                    <li>Seite neu laden und im Cookie-Banner nichts anklicken.</li>
                    <li>Die Liste nach Domain sortieren.</li>
                </ol>
                <p>
                    Alles, was jetzt zu einer fremden Domain geht, geht ohne Einwilligung dorthin. Typische Funde
                    in dieser Liste: fonts.googleapis.com und fonts.gstatic.com, Karten- und Video-Domains,
                    ein Chat-Anbieter, ein Werbepixel, gelegentlich ein Anbieter, den niemand im Haus kennt, weil
                    er in einem Theme steckt.
                </p>
                <p>
                    Dieselbe Liste brauchen Sie ohnehin für die
                    {' '}<Link href="/wissen/impressum-datenschutzerklaerung-pflicht">Datenschutzerklärung</Link>,
                    weil dort jeder tatsächlich eingesetzte Dienst vorkommen muss. Zwei Aufgaben, ein Test.
                </p>

                <div className="subpage-story">
                    <span className="subpage-story-label">Aus der Praxis</span>
                    <p>
                        Ein Handwerksbetrieb rief mich an, weil ein Schreiben mit Schadensersatzforderung im
                        Briefkasten lag. Google Fonts, dynamisch eingebunden. Der Betrieb hatte die Website drei
                        Jahre vorher bauen lassen und seither nicht angefasst. Im Netzwerk-Tab standen dann neben
                        den Schriften noch eine eingebettete Karte, ein Video und ein Zähldienst, alle vor der
                        Einwilligung aktiv.
                    </p>
                    <p>
                        Das Beheben dauerte einen Nachmittag: Schriftdateien herunterladen und lokal einbinden,
                        Karte durch ein Vorschaubild mit Klick-zum-Laden ersetzen, Video auf denselben Mechanismus
                        umstellen, Zähldienst hinter die Einwilligung legen. Der juristische Teil ging zum Anwalt,
                        wo er hingehört. Was mich an dem Fall beschäftigt hat: Niemand hatte etwas falsch gemacht.
                        Der Betrieb hatte nur angenommen, eine Website sei fertig, wenn sie online ist.
                    </p>
                </div>

                <h2>Die vier Maßnahmen mit dem besten Verhältnis</h2>

                <h3>1. Schriften lokal ausliefern</h3>
                <p>
                    Schriftdateien herunterladen, auf den eigenen Server legen, im CSS lokal referenzieren. Das
                    entfernt die Übermittlung vollständig, ist schneller als der Fremdabruf und beseitigt genau
                    den Fall, um den es im Münchner Urteil ging. Achtung bei Baukästen und fertigen Themes: Dort
                    lädt manchmal ein Plugin oder ein Seiten-Editor die Schriften erneut nach, obwohl Sie sie
                    lokal eingebunden haben. Nach der Umstellung noch einmal in den Netzwerk-Tab schauen.
                </p>

                <h3>2. Einbettungen erst nach Klick laden</h3>
                <p>
                    Karten, Videos und Social-Media-Einbettungen ersetzen Sie durch ein Vorschaubild mit einem
                    Hinweis, was beim Klick passiert. Erst der Klick lädt den Fremdinhalt. Das ist rechtlich
                    saubere Einwilligung im Einzelfall und hat den Nebeneffekt, dass Ihre Seite deutlich schneller
                    wird, weil ein eingebettetes Video schnell mehrere hundert Kilobyte JavaScript mitbringt.
                    Warum das direkt Geld kostet, steht in
                    {' '}<Link href="/wissen/warum-langsame-websites-kunden-kosten">Warum langsame Websites Kunden kosten</Link>.
                </p>

                <h3>3. Banner sauber konfigurieren</h3>
                <p>
                    Drei Prüfpunkte: Vor der Einwilligung lädt nichts Einwilligungspflichtiges. Ablehnen liegt auf
                    derselben Ebene wie Zustimmen, gleich sichtbar, gleich erreichbar. Der Widerruf ist jederzeit
                    zugänglich, ohne die Seite zu verlassen. Die Rechtsgrundlage dafür ist § 25 TDDDG, der die
                    Einwilligung vor dem Zugriff auf das Endgerät verlangt.
                </p>

                <h3>4. Rechtstexte auf den aktuellen Stand bringen</h3>
                <p>
                    Seit dem 14. Mai 2024 heißt das TMG DDG und das TTDSG TDDDG. Die Impressumspflicht steht in
                    § 5 DDG. Ein Verweis auf § 5 TMG ist kein Weltuntergang, aber er ist ein Signal, und
                    Signale ziehen Post an. Fünfzehn Minuten.
                </p>

                <h2>Was Sie tun, wenn der Brief schon da ist</h2>
                <ol>
                    <li><strong>Nicht unterschreiben, nicht zahlen, nicht ignorieren.</strong> Alle drei Reflexe sind falsch. Fristen im Schreiben notieren.</li>
                    <li><strong>Zustand dokumentieren.</strong> Screenshots, Netzwerk-Tab als HAR-Datei exportieren, Datum festhalten. Wer später beheben will, sollte belegen können, was vorher war.</li>
                    <li><strong>Mangel abstellen.</strong> Unabhängig von der rechtlichen Bewertung. Ein bestehender Verstoß wird nicht besser dadurch, dass die Abmahnung möglicherweise unzulässig ist.</li>
                    <li><strong>Anwalt einschalten.</strong> Zur Frage, ob und wie Sie antworten, insbesondere zur Unterlassungserklärung. Eine vorformulierte Erklärung ist fast immer zu weit gefasst.</li>
                    <li><strong>Danach den Rest der Liste durchgehen.</strong> Wer wegen Schriften angeschrieben wurde, hat meist noch drei andere Themen offen.</li>
                </ol>

                <h2>Der Zusammenhang, den man leicht übersieht</h2>
                <p>
                    Fast alles auf dieser Liste hat einen zweiten Effekt. Weniger Fremdanfragen bedeuten kürzere
                    Ladezeiten. Lokale Schriften vermeiden einen zusätzlichen Verbindungsaufbau. Ein Video, das
                    erst nach Klick lädt, verbessert die Core Web Vitals messbar. Datenschutz-Aufräumen und
                    Performance-Aufräumen sind zu großen Teilen dieselbe Arbeit, was ich für einen der wenigen
                    fairen Deals im Web halte.
                </p>
                <p>
                    Und der Vollständigkeit halber: Seit dem 28. Juni 2025 kommt für Teile der Wirtschaft die
                    Barrierefreiheit als eigene Pflicht hinzu, mit anderer Behörde und anderem Verfahren. Das
                    steht in <Link href="/wissen/barrierefreie-website-pflicht">Barrierefreie Website: Pflicht nach dem BFSG</Link>.
                </p>

                <h2>Wenn Sie eine Bestandsaufnahme wollen</h2>
                <p>
                    Der <Link href="/leistungen/website-audit">Website-Audit</Link> ist kostenlos und listet
                    unter anderem auf, welche Fremd-Domains vor der Einwilligung laden. Sie arbeiten direkt mit
                    mir. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder Fotografie, hole
                    ich geprüfte Spezialisten dazu. Ansprechpartner und Verantwortlicher für das Ergebnis bleibe
                    ich. Wenn die Seite so alt ist, dass Nachrüsten teurer wird als Neubauen, sage ich Ihnen das
                    auch, siehe <Link href="/leistungen/webdesign">Webdesign</Link>.
                </p>
                <p>
                    Zum Schluss die notwendige Einschränkung: Ich bin Entwickler, kein Anwalt. Dieser Artikel gibt
                    wieder, was in den genannten Vorschriften und Urteilen steht, mit Fundstelle. Er ist keine
                    Rechtsberatung, und bei einem konkreten Schreiben ersetzt er keine.
                </p>

                <h2>Häufige Fragen</h2>
                {faqItems.map((item) => (
                    <div key={item.q}>
                        <h3>{item.q}</h3>
                        <p>{item.a}</p>
                    </div>
                ))}

                <div className="subpage-sources">
                    <h2>Quellen</h2>
                    <ol>
                        <li>LG München I, Urteil vom 20. Januar 2022, Az. 3 O 17493/20: dynamische Einbindung von Google Fonts ohne Einwilligung, 100 Euro Schadensersatz nach Art. 82 DSGVO und Unterlassungsanspruch. Zusammenfassung mit Urteilsgründen bei der IT-Recht Kanzlei. <a href="https://www.it-recht-kanzlei.de/lg-muenchen-I-webfonts-einwilligung-schadensersatz.html" rel="nofollow noopener" target="_blank">it-recht-kanzlei.de</a></li>
                        <li>Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG), § 25: Einwilligung vor Speicherung von Informationen auf dem Endgerät oder Zugriff darauf, Ausnahmen in Absatz 2. <a href="https://www.gesetze-im-internet.de/ttdsg/__25.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>Digitale-Dienste-Gesetz (DDG), § 5: allgemeine Informationspflichten, seit 14. Mai 2024 Nachfolger von § 5 TMG. <a href="https://www.gesetze-im-internet.de/ddg/__5.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>DSGVO Art. 28: Vertrag zur Auftragsverarbeitung. <a href="https://dsgvo-gesetz.de/art-28-dsgvo/" rel="nofollow noopener" target="_blank">dsgvo-gesetz.de</a></li>
                        <li>DSGVO Art. 13: Informationspflichten gegenüber Betroffenen. <a href="https://dsgvo-gesetz.de/art-13-dsgvo/" rel="nofollow noopener" target="_blank">dsgvo-gesetz.de</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
