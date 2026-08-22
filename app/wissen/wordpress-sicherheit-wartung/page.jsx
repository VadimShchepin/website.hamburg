import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'WordPress absichern: was wirklich schützt',
    description: '11.334 neue Schwachstellen 2025, davon 91 Prozent in Plugins. Was das für Ihren Update-Rhythmus bedeutet und was Wartung kostet.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/wordpress-sicherheit-wartung',
    },
    openGraph: {
        title: 'WordPress absichern: was wirklich schützt',
        description: '11.334 neue Schwachstellen 2025, davon 91 Prozent in Plugins. Update-Rhythmus, Wartungskosten und Vorgehen nach einem Hack.',
        url: 'https://webseite.hamburg/wissen/wordpress-sicherheit-wartung',
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Ist WordPress sicher?',
        a: 'Der Kern ist gut gepflegt, die Erweiterungen sind das Risiko. Im Patchstack-Bericht State of WordPress Security in 2026 wurden für 2025 insgesamt 11.334 neue Schwachstellen im WordPress-Umfeld gemeldet, ein Plus von 42 Prozent gegenüber 2024. Davon steckten 91 Prozent in Plugins und 9 Prozent in Themes. Im WordPress-Kern selbst waren es sechs, alle als geringes Risiko eingestuft.',
    },
    {
        q: 'Wie oft muss ich WordPress aktualisieren?',
        a: 'Häufiger, als die meisten denken. Der Patchstack-Bericht nennt für stark ausgenutzte Schwachstellen einen gewichteten Median von fünf Stunden bis zum ersten Angriff, 20 Prozent wurden binnen sechs Stunden ausgenutzt, 45 Prozent binnen 24 Stunden und 70 Prozent binnen sieben Tagen. Ein monatlicher Rhythmus ist damit rechnerisch zu langsam. Sicherheitsupdates gehören automatisiert oder mindestens wöchentlich eingespielt, mit Backup davor.',
    },
    {
        q: 'Was kostet WordPress-Wartung?',
        a: 'Im Markt üblich sind Pakete zwischen etwa 30 und 150 Euro im Monat, je nachdem, ob nur Updates eingespielt werden oder auch Backups geprüft, Ausfälle überwacht und Fehler behoben werden. Dazu kommen Lizenzkosten für Premium-Plugins, häufig 100 bis 500 Euro im Jahr. Wer selbst wartet, zahlt in Zeit statt in Geld, und der Zeitbedarf ist nicht null.',
    },
    {
        q: 'Sind kostenpflichtige Plugins sicherer als kostenlose?',
        a: 'Nach den Zahlen im Patchstack-Bericht 2026 nicht. Dort waren 76 Prozent der Schwachstellen in kostenpflichtigen WordPress-Komponenten ausnutzbar, und kostenpflichtige Komponenten wiesen etwa dreimal so viele bekannt ausgenutzte Schwachstellen auf wie kostenlose. Entscheidend ist nicht der Preis, sondern ob der Hersteller aktiv pflegt und wie viele Installationen es gibt.',
    },
    {
        q: 'Meine WordPress-Seite wurde gehackt, was jetzt?',
        a: 'In dieser Reihenfolge: Seite offline nehmen oder in Wartungsmodus setzen, ein Abbild des aktuellen Zustands für die Analyse sichern, alle Passwörter und Zugangsdaten wechseln einschließlich Datenbank und FTP, aus einem sauberen Backup vor dem Vorfall wiederherstellen, danach alle Updates einspielen, dann die Einbruchstelle finden und schließen. Eine Wiederherstellung ohne den letzten Schritt führt zuverlässig zum zweiten Vorfall.',
    },
    {
        q: 'Reicht ein Sicherheits-Plugin?',
        a: 'Es hilft und ersetzt keine Updates. Ein Sicherheits-Plugin kann Anmeldeversuche begrenzen, Dateien überwachen und bekannte Angriffsmuster filtern. Die Lücke in einem veralteten Formular-Plugin schließt es nicht. Nach den Zahlen im Patchstack-Bericht scheiterten außerdem 87,8 Prozent der getesteten Hosting-Schutzmaßnahmen an den geprüften Angriffen, was zeigt, wie wenig Verlass auf vorgelagerte Filter ist.',
    },
];

export default function WordpressSicherheitWartungPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'WordPress absichern und warten: was wirklich schützt',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-22',
        dateModified: '2026-08-22',
        url: 'https://webseite.hamburg/wissen/wordpress-sicherheit-wartung',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/wordpress-sicherheit-wartung' },
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
            { '@type': 'ListItem', position: 3, name: 'WordPress absichern und warten', item: 'https://webseite.hamburg/wissen/wordpress-sicherheit-wartung' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="wordpress-sicherheit-wartung"
                category="SICHERHEIT"
                title="WordPress absichern und warten: was wirklich schützt"
                readTime="11 Min."
                publishDate="2026-08-22"
                heroImage="/wissen/hero-wordpress-sicherheit.svg"
                heroAlt="Illustration: Schutzschild mit Schloss vor einem Browser-Fenster, daneben drei Plugin-Bausteine, einer davon rot und rissig"
            >
                <p>
                    Ich baue selbst keine WordPress-Seiten. Trotzdem bekomme ich regelmäßig Anrufe von Betrieben mit
                    einer gehackten WordPress-Installation, weil ihr damaliger Dienstleister nicht mehr erreichbar
                    ist. Aus diesen Fällen ist dieser Artikel entstanden.
                </p>
                <p>
                    Er ist ausdrücklich nicht als Argument gegen WordPress gemeint. Das System läuft laut W3Techs
                    auf 40,7 Prozent aller Websites, und der größte Teil davon läuft problemlos. Die Fälle, die bei
                    mir landen, haben fast immer denselben Ursprung: Niemand war für Updates zuständig.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> Das Risiko liegt in den Erweiterungen. Im Patchstack-Bericht
                        2026 stammten 91 Prozent der 11.334 im Jahr 2025 neu gemeldeten Schwachstellen aus Plugins,
                        9 Prozent aus Themes und sechs aus dem WordPress-Kern. Die Angriffe kommen schnell: Der
                        gewichtete Median bis zur ersten Ausnutzung lag bei fünf Stunden, 45 Prozent wurden binnen
                        24 Stunden angegriffen.
                    </p>
                    <p>
                        Was schützt: wenige Plugins, automatische Sicherheitsupdates, geprüfte Backups an einem
                        zweiten Ort, Zwei-Faktor-Anmeldung, ein zuständiger Mensch. Was nicht ausreicht: ein
                        Sicherheits-Plugin allein, teure Plugins statt kostenloser, Vertrauen auf Hosting-Filter.
                    </p>
                </div>

                <h2>Was die Zahlen tatsächlich sagen</h2>
                <p>
                    Der Patchstack-Bericht State of WordPress Security in 2026 ist die belastbarste öffentliche
                    Quelle zum Thema. Die Kernzahlen für 2025:
                </p>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Kennzahl</th>
                                <th>Wert</th>
                                <th>Was daraus folgt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Neue Schwachstellen 2025</th>
                                <td>11.334, plus 42 Prozent gegenüber 2024</td>
                                <td>höchster gemessener Wert, Trend steigend</td>
                            </tr>
                            <tr>
                                <th>Anteil in Plugins</th>
                                <td>91 Prozent</td>
                                <td>jedes zusätzliche Plugin ist zusätzliches Risiko</td>
                            </tr>
                            <tr>
                                <th>Anteil in Themes</th>
                                <td>9 Prozent</td>
                                <td>auch das Theme braucht Updates</td>
                            </tr>
                            <tr>
                                <th>Im WordPress-Kern</th>
                                <td>sechs, alle geringes Risiko</td>
                                <td>der Kern ist nicht das Problem</td>
                            </tr>
                            <tr>
                                <th>Median bis zur ersten Ausnutzung</th>
                                <td>fünf Stunden</td>
                                <td>monatliche Updates sind zu langsam</td>
                            </tr>
                            <tr>
                                <th>Binnen 24 Stunden ausgenutzt</th>
                                <td>45 Prozent</td>
                                <td>Automatisierung schlägt Kalender</td>
                            </tr>
                            <tr>
                                <th>Bei Veröffentlichung noch ohne Patch</th>
                                <td>46 Prozent</td>
                                <td>zeitweise gibt es kein Update, nur Abschalten</td>
                            </tr>
                            <tr>
                                <th>Hosting-Schutz versagte im Test</th>
                                <td>87,8 Prozent der Fälle</td>
                                <td>kein Verlass auf vorgelagerte Filter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Die letzte Zeile ist die unangenehmste. Viele Betriebe glauben, ihr Hoster passe auf. Nach
                    diesen Zahlen tut er das nur in einem Bruchteil der Fälle wirksam. Und die Zeile mit den 46
                    Prozent bedeutet: Es gibt Zeitfenster, in denen die einzige richtige Maßnahme darin besteht,
                    ein Plugin zu deaktivieren, statt auf ein Update zu warten.
                </p>

                <h2>Die sechs Maßnahmen, die den Unterschied machen</h2>

                <h3>1. Weniger Plugins</h3>
                <p>
                    Die wirksamste Maßnahme ist Subtraktion. Jedes Plugin ist fremder Code mit Datenbankzugriff.
                    Gehen Sie Ihre Liste durch und stellen Sie zu jedem Eintrag zwei Fragen: Wird das benutzt?
                    Wurde es in den letzten sechs Monaten aktualisiert? Was bei beiden Fragen ein Nein liefert,
                    kommt weg, nicht auf inaktiv. Deaktivierte Plugins liegen weiterhin auf dem Server und sind
                    weiterhin angreifbar.
                </p>
                <p>
                    In den Installationen, die ich zu sehen bekomme, sind es typischerweise 25 bis 40 Plugins,
                    davon ein Drittel überflüssig. Häufig zwei Werkzeuge für dieselbe Aufgabe, weil vor drei Jahren
                    jemand etwas ausprobiert hat.
                </p>

                <h3>2. Sicherheitsupdates automatisieren</h3>
                <p>
                    WordPress kann automatische Updates für den Kern, für Plugins und für Themes. Bei Fünf-Stunden-Medianen
                    bis zum ersten Angriff ist Automatik die einzige realistische Antwort für einen Betrieb ohne
                    eigene IT. Das Gegenargument, ein Update könne die Seite zerlegen, ist berechtigt. Die Lösung
                    dafür heißt Backup vor dem Update und eine Prüfung danach, nicht Updates weglassen.
                </p>

                <h3>3. Backups, die getestet sind</h3>
                <p>
                    Ein Backup, das noch nie zurückgespielt wurde, ist eine Hoffnung. Drei Anforderungen: Es liegt
                    nicht auf demselben Server wie die Website, es umfasst Dateien und Datenbank, und es reicht
                    zeitlich weit genug zurück. Der letzte Punkt ist der, der wehtut: Wer nur sieben Tage aufbewahrt
                    und einen Einbruch drei Wochen später bemerkt, hat nur verseuchte Stände.
                </p>
                <p>
                    Testen heißt einmal pro Jahr eine Kopie in einer Testumgebung herstellen. Das dauert eine
                    Stunde und ist die einzige Methode, aus einem Backup ein Sicherheitsnetz zu machen.
                </p>

                <h3>4. Zugänge härten</h3>
                <ul>
                    <li>Kein Benutzer namens admin, kein Benutzername, der dem Autornamen entspricht</li>
                    <li>Zwei-Faktor-Anmeldung für alle Konten mit Administrationsrechten</li>
                    <li>Anmeldeversuche begrenzen, damit Ausprobieren teuer wird</li>
                    <li>Redakteure bekommen Redakteursrechte, keine Administratorrechte</li>
                    <li>Ausgeschiedene Mitarbeiter und alte Dienstleisterzugänge löschen, nicht deaktivieren</li>
                    <li>Zugangsdaten für Datenbank und FTP gehören nicht in eine E-Mail</li>
                </ul>
                <p>
                    Punkt fünf ist der, den ich am häufigsten finde. In einer Installation waren noch drei
                    Administratorkonten von zwei früheren Agenturen aktiv, eines davon mit einer E-Mail-Adresse bei
                    einer Domain, die es nicht mehr gab. Wer eine solche Domain registriert, kann sich ein Passwort
                    zusenden lassen.
                </p>

                <h3>5. Hosting mit Substanz</h3>
                <p>
                    Aktuelle PHP-Version, HTTPS mit automatischer Zertifikatsverlängerung, tägliche serverseitige
                    Backups, eine Testumgebung. Der Unterschied zwischen einem Paket für 3 Euro und einem für 20
                    Euro im Monat ist bei WordPress kein Luxus, sondern der Unterschied zwischen einer Seite, die
                    man wiederherstellen kann, und einer, bei der man improvisiert. Wo der Server steht und was das
                    für den Datenschutz bedeutet, steht in
                    {' '}<Link href="/wissen/website-umzug-hosting-deutschland">Hosting in Deutschland</Link>.
                </p>

                <h3>6. Ein zuständiger Mensch</h3>
                <p>
                    Die unspektakulärste Maßnahme und die, deren Fehlen jeden Fall verursacht hat, den ich gesehen
                    habe. Es braucht einen Namen, der für Updates zuständig ist, und einen zweiten, der merkt,
                    wenn der erste es nicht macht. Ob das ein Wartungsvertrag ist oder ein Kollege mit einem
                    Kalendereintrag, ist zweitrangig.
                </p>

                <div className="subpage-story">
                    <span className="subpage-story-label">Aus der Praxis</span>
                    <p>
                        Der lehrreichste Fall: Ein Betrieb bemerkte den Einbruch daran, dass Google in den
                        Suchergebnissen fremde Seiten unter seiner Domain zeigte. Nicht die Website war kaputt, die
                        sah normal aus. Angelegt worden waren hunderte versteckte Unterseiten mit Werbetexten für
                        Produkte, mit denen der Betrieb nichts zu tun hatte.
                    </p>
                    <p>
                        Der Schaden war nicht technisch, sondern in der Sichtbarkeit: Google hatte die Domain
                        abgestuft, und das Zurückkommen dauerte deutlich länger als das Aufräumen. Seither prüfe
                        ich bei jedem solchen Anruf zuerst die Search Console. Wie man dort Indexierungsprobleme
                        liest, steht in
                        {' '}<Link href="/wissen/website-nicht-bei-google-gefunden">Website nicht bei Google gefunden</Link>.
                    </p>
                </div>

                <h2>Wenn es passiert ist: die Reihenfolge</h2>
                <ol>
                    <li><strong>Seite in den Wartungsmodus.</strong> Solange sie erreichbar ist, verteilt sie möglicherweise Schadcode weiter.</li>
                    <li><strong>Zustand sichern.</strong> Ein vollständiges Abbild von Dateien und Datenbank, bevor Sie etwas ändern. Das ist Ihr einziger Weg, später die Einbruchstelle zu finden.</li>
                    <li><strong>Alle Zugangsdaten wechseln.</strong> WordPress-Benutzer, Datenbank, FTP und SFTP, Hosting-Panel, und die E-Mail-Konten, an denen Passwort-Zurücksetzungen hängen.</li>
                    <li><strong>Aus einem sauberen Backup wiederherstellen.</strong> Von einem Zeitpunkt, der belegbar vor dem Vorfall liegt.</li>
                    <li><strong>Alles aktualisieren.</strong> Kern, Themes, Plugins. Was nicht mehr gepflegt wird, ersetzen oder entfernen.</li>
                    <li><strong>Einbruchstelle finden und schließen.</strong> Der Schritt, den fast alle überspringen und der den zweiten Vorfall verhindert.</li>
                    <li><strong>Search Console prüfen.</strong> Auf Sicherheitsprobleme und auf fremde indexierte Seiten. Nach dem Aufräumen Überprüfung beantragen.</li>
                    <li><strong>Aus dem Vorfall einen Prozess machen.</strong> Automatische Updates, geprüfte Backups, ein Zuständiger, ein Termin.</li>
                </ol>

                <h2>Was Wartung kostet und wann sie sich nicht mehr lohnt</h2>
                <p>
                    Für ein Wartungspaket zahlen Betriebe im Markt üblicherweise zwischen 30 und 150 Euro im
                    Monat, je nach Leistungsumfang. Dazu kommen Plugin-Lizenzen, häufig 100 bis 500 Euro im Jahr.
                    Über fünf Jahre sind das grob 2.000 bis 10.000 Euro, nur für Betrieb und Pflege, ohne eine
                    einzige inhaltliche Verbesserung.
                </p>
                <p>
                    Ab diesem Punkt lohnt eine ehrliche Rechnung. Eine statisch generierte Website hat keinen
                    Administrationsbereich im Netz, keine Datenbank im Auslieferungspfad und keine
                    Plugin-Abhängigkeiten. Die Wartungslast ist strukturell nahe null. Der Preis dafür ist, dass
                    Struktur- und Layoutänderungen über einen Entwickler laufen. Für einen Betrieb, der zweimal im
                    Jahr Texte anpasst, ist das ein guter Handel. Für eine Redaktion mit täglichen Beiträgen nicht.
                </p>
                <p>
                    Die vollständige Abwägung mit allen Alternativen steht in
                    {' '}<Link href="/wissen/wordpress-alternativen">WordPress-Alternativen</Link>, der
                    Zweikampf mit dem gestalterischen Gegenpol in
                    {' '}<Link href="/wissen/webflow-oder-wordpress">Webflow oder WordPress</Link>.
                </p>

                <h2>Wenn Sie den Zustand wissen wollen</h2>
                <p>
                    Der <Link href="/leistungen/website-audit">Website-Audit</Link> ist kostenlos und sieht sich
                    unter anderem an, welche Plugin- und Theme-Versionen ausgeliefert werden, ob die PHP-Version
                    aktuell ist und was in der Search Console steht. Wenn die Antwort lautet, dass Aufräumen
                    reicht, sage ich Ihnen das, auch wenn ein Neubau für mich lukrativer wäre. Sie arbeiten direkt
                    mit mir. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder Fotografie, hole
                    ich geprüfte Spezialisten dazu. Ansprechpartner und Verantwortlicher für das Ergebnis bleibe
                    ich. Zu den Rahmenbedingungen unter
                    {' '}<Link href="/leistungen/webdesign">Webdesign</Link>.
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
                        <li>Patchstack, State of WordPress Security in 2026: 11.334 neue Schwachstellen im Jahr 2025 (plus 42 Prozent), 91 Prozent in Plugins, 9 Prozent in Themes, sechs im Kern und alle mit geringem Risiko; gewichteter Median von fünf Stunden bis zur ersten Ausnutzung, 20 Prozent binnen sechs Stunden, 45 Prozent binnen 24 Stunden, 70 Prozent binnen sieben Tagen; 46 Prozent bei Veröffentlichung ohne Patch; 76 Prozent der Schwachstellen in kostenpflichtigen Komponenten ausnutzbar und dort etwa dreimal so viele bekannt ausgenutzte Lücken wie bei kostenlosen; 87,8 Prozent der getesteten Hosting-Schutzmaßnahmen erfolglos. <a href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" rel="nofollow noopener" target="_blank">patchstack.com</a></li>
                        <li>W3Techs, Usage statistics of content management systems, Stand 22. August 2026: WordPress auf 40,7 Prozent aller Websites. <a href="https://w3techs.com/technologies/overview/content_management" rel="nofollow noopener" target="_blank">w3techs.com</a></li>
                        <li>WordPress.org, Security: Sicherheitsmodell und Aktualisierungspolitik des Projekts. <a href="https://wordpress.org/about/security/" rel="nofollow noopener" target="_blank">wordpress.org</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
