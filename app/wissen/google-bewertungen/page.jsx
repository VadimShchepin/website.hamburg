import ArticleLayout from '../../../src/components/ArticleLayout';
import AutoLinks from '../../../src/components/AutoLinks';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

const PAGE_URL = 'https://webseite.hamburg/wissen/google-bewertungen';

export const metadata = {
    title: 'Google-Bewertungen kaufen? Was erlaubt ist und was wirkt',
    description: 'Gekaufte Google-Bewertungen sind verboten und riskant. Wie Sie stattdessen echte Bewertungen sammeln, richtig antworten und was Google bei Verstößen tut.',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        siteName: 'webseite.hamburg',
        locale: 'de_DE',
        title: 'Google-Bewertungen kaufen? Was erlaubt ist und was wirkt',
        description: 'Was Google und das UWG zu gekauften Bewertungen sagen, und wie Sie echte Bewertungen per Link und QR-Code sammeln.',
        url: PAGE_URL,
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Ist es verboten, Google-Bewertungen zu kaufen?',
        a: 'Ja, doppelt. Google verbietet in seinen Richtlinien für Maps Rezensionen, für die direkt oder in Form von Sachleistungen bezahlt wurde, und entfernt sie. Und nach Nummer 23c im Anhang des UWG ist die Übermittlung oder Beauftragung gefälschter Verbraucherbewertungen gegenüber Verbrauchern stets unzulässig. Das gilt seit dem 28. Mai 2022.',
    },
    {
        q: 'Merkt Google, wenn Bewertungen gekauft sind?',
        a: 'Oft. Google hat nach eigenen Angaben 2025 mehr als 292 Millionen Rezensionen entfernt, die gegen die Richtlinien verstießen. Bei einem auffälligen Anstieg kann Google neue Rezensionen auf dem Profil pausieren, den Inhaber benachrichtigen und ein Hinweisbanner anzeigen, dass gefälschte Rezensionen entfernt wurden. Dieses Banner sehen dann auch Ihre Kunden.',
    },
    {
        q: 'Darf ich Kunden für eine Bewertung einen Rabatt geben?',
        a: 'Nein. Google verbietet ausdrücklich, Anreize wie Zahlungen, Rabatte, kostenlose Produkte oder Dienstleistungen für das Veröffentlichen einer Rezension zu bieten. Das gilt auch, wenn der Kunde frei entscheiden darf, wie viele Sterne er vergibt.',
    },
    {
        q: 'Darf ich nur zufriedene Kunden um eine Bewertung bitten?',
        a: 'Nein. Google nennt es ausdrücklich unzulässig, Kunden gezielt um positive Rezensionen zu bitten oder negative Rezensionen zu verhindern. Erlaubt ist, alle Kunden um eine Bewertung zu bitten, die ihrer tatsächlichen Erfahrung entspricht.',
    },
    {
        q: 'Kann ich eine schlechte Google-Bewertung löschen?',
        a: 'Selbst löschen können Sie sie nicht. Sie können jede Rezension melden, entfernt werden aber nur Rezensionen, die gegen die Google-Richtlinien verstoßen, etwa weil kein Kundenkontakt bestand oder sie beleidigend ist. Sachlich korrekte Kritik bleibt stehen. Wird Ihre Meldung abgelehnt, können Sie einmal Einspruch einlegen.',
    },
    {
        q: 'Wie bekomme ich mehr echte Google-Bewertungen?',
        a: 'Indem Sie jeden Kunden fragen, zeitnah und mit einem direkten Link. Den Link und einen QR-Code erzeugen Sie in Ihrem Unternehmensprofil. Er gehört in die Dankeschön-E-Mail, auf die Rechnung, in eine kurze WhatsApp-Nachricht nach Abschluss des Auftrags und als QR-Code an die Theke. Ohne Gegenleistung und ohne Vorgabe, was drinstehen soll.',
    },
];

export default function GoogleBewertungenPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Google-Bewertungen kaufen oder sammeln: was erlaubt ist und was wirkt',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-10-07',
        dateModified: '2026-10-07',
        url: PAGE_URL,
        image: 'https://webseite.hamburg/wissen/hero-google-bewertungen.svg',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
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
            { '@type': 'ListItem', position: 3, name: 'Google-Bewertungen', item: PAGE_URL },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="google-bewertungen"
                category="SEO"
                title="Google-Bewertungen kaufen oder sammeln: was erlaubt ist und was wirkt"
                readTime="11 Min."
                publishDate="2026-10-07"
                heroImage="/wissen/hero-google-bewertungen.svg"
                heroAlt="Illustration: Bewertungskarte mit fünf Sternen, daneben ein Smartphone mit QR-Code und ein rot durchgestrichenes Preisschild"
            >
                <AutoLinks path="/wissen/google-bewertungen">
                <p>
                    Die Suchanfrage "google bewertungen kaufen" wird in Deutschland rund 3.600 Mal im Monat
                    eingegeben, so der Keyword Planner von Google. Dahinter stehen meist keine Betrüger, sondern
                    Betriebe, die gute Arbeit machen, drei Bewertungen haben und zusehen, wie der Wettbewerber mit
                    120 Bewertungen über ihnen in der Karte steht. Die Versuchung ist verständlich. Sie ist trotzdem
                    die teuerste Abkürzung, die es im lokalen Marketing gibt.
                </p>
                <p>
                    Ich habe für diesen Artikel die Regeln dort gelesen, wo sie stehen: in den Richtlinien von Google,
                    im Gesetz gegen den unlauteren Wettbewerb und in den Urteilen des Bundesgerichtshofs. Alle
                    Fundstellen stehen unten. Rechtsberatung ist das nicht, aber Sie sehen, worauf sich jede Aussage
                    stützt.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> Gekaufte Bewertungen verstoßen gegen die Richtlinien von Google
                        und sind nach Nummer 23c im Anhang des UWG seit dem 28. Mai 2022 gegenüber Verbrauchern stets
                        unzulässig. Google entfernt sie, kann neue Bewertungen auf dem Profil sperren und Kunden ein
                        Warnbanner zeigen. Wettbewerber und Verbände können abmahnen.
                    </p>
                    <p>
                        Erlaubt und wirksam ist, jeden Kunden um eine ehrliche Bewertung zu bitten: mit dem Link aus
                        dem Unternehmensprofil, kurz nach dem Auftrag, ohne Gegenleistung und ohne nur die Zufriedenen
                        auszuwählen.
                    </p>
                </div>

                <h2>Was Google mit gekauften Bewertungen macht</h2>
                <p>
                    Die Richtlinie für nutzergenerierte Inhalte in Google Maps ist eindeutig. Alle Beiträge müssen
                    auf Erfahrungen beruhen, die tatsächlich an einem Ort oder mit einem Unternehmen gemacht wurden.
                    Unter "Gefälschte Interaktionen" nennt Google ausdrücklich Rezensionen, für die direkt oder in
                    Form von Sachleistungen bezahlt wurde, und Inhalte, die über mehrere Konten von oder auf Anfrage
                    einer Person veröffentlicht wurden. Solche Inhalte sind nicht zulässig und werden entfernt.
                </p>
                <p>
                    Das Entfernen ist der harmlose Teil. Auf der Hilfeseite zu Einschränkungen von
                    Unternehmensprofilen beschreibt Google, was einem Profil bei Verstößen passieren kann:
                </p>
                <ul>
                    <li>Für eine bestimmte Zeit können keine neuen Rezensionen veröffentlicht werden, auch keine echten.</li>
                    <li>Bestehende Rezensionen sind für eine bestimmte Zeit nicht mehr sichtbar.</li>
                    <li>Im Profil erscheint eine Warnung, dass gefälschte Rezensionen entfernt wurden.</li>
                </ul>
                <p>
                    Der dritte Punkt ist der, über den man nachdenken sollte. Ein Kunde, der Sie bei Google sucht,
                    sieht dann nicht mehr Ihre Sterne, sondern einen Hinweis, dass bei Ihnen manipuliert wurde. Das
                    ist das Gegenteil von dem, was die gekauften Bewertungen bringen sollten.
                </p>
                <p>
                    Wie ernst Google das betreibt, zeigen die eigenen Zahlen. Für 2022 meldete Google mehr als
                    115 Millionen entfernte Rezensionen, die gegen die Richtlinien verstießen, für 2024 mehr als
                    240 Millionen und für 2025 mehr als 292 Millionen. Im Beitrag vom April 2026 schreibt Google,
                    dass es bei einem plötzlichen Anstieg von Bewertungen neue Rezensionen auf dem Profil pausieren,
                    den Inhaber benachrichtigen und ein Hinweisbanner anzeigen kann. Ein Paket mit 50 Bewertungen
                    in einer Woche ist genau so ein Anstieg.
                </p>

                <h2>Was das Gesetz sagt: UWG Anhang Nummer 23b und 23c</h2>
                <p>
                    Seit dem 28. Mai 2022 stehen gefälschte Bewertungen ausdrücklich im Gesetz. Das Gesetz zur
                    Stärkung des Verbraucherschutzes im Wettbewerbs- und Gewerberecht hat zwei Nummern in die
                    sogenannte Schwarze Liste im Anhang des UWG eingefügt. Es setzt die EU-Richtlinie 2019/2161 um,
                    die Omnibus-Richtlinie, die dieselben zwei Punkte in das europäische Lauterkeitsrecht gebracht hat.
                </p>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Vorschrift</th>
                                <th>Was verboten ist</th>
                                <th>Was das für Sie heißt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Anhang Nr. 23c UWG</th>
                                <td>Die Übermittlung oder Beauftragung gefälschter Bewertungen oder Empfehlungen von Verbrauchern</td>
                                <td>Wer Bewertungen kauft, beauftragt gefälschte Bewertungen. Auch wenn eine Agentur das für Sie erledigt.</td>
                            </tr>
                            <tr>
                                <th>Anhang Nr. 23b UWG</th>
                                <td>Die Behauptung, Bewertungen stammten von echten Kunden, ohne angemessene Prüfung</td>
                                <td>Betrifft vor allem Bewertungen, die Sie selbst auf Ihrer Website zeigen</td>
                            </tr>
                            <tr>
                                <th>§ 5b Abs. 3 UWG</th>
                                <td>Wer Bewertungen zugänglich macht, muss informieren, ob und wie er ihre Echtheit sicherstellt</td>
                                <td>Ein Bewertungs-Widget auf der eigenen Seite braucht einen Hinweis dazu</td>
                            </tr>
                            <tr>
                                <th>§ 3 Abs. 3 UWG</th>
                                <td>Handlungen aus dem Anhang sind gegenüber Verbrauchern stets unzulässig</td>
                                <td>Keine Abwägung, kein "war doch nur ein bisschen"</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    "Stets unzulässig" ist im Wettbewerbsrecht die härteste Kategorie. Bei den meisten anderen
                    Verstößen prüft ein Gericht, ob die Handlung spürbar ist und Verbraucher beeinflusst. Bei den
                    Nummern im Anhang nicht. Es genügt, dass der Tatbestand erfüllt ist.
                </p>

                <h2>Wer Sie dafür belangen kann</h2>
                <p>
                    Die naheliegende Sorge ist ein Bußgeld. Das ist für einen einzelnen Betrieb aber nicht das
                    eigentliche Risiko. § 19 UWG sieht zwar Geldbußen bis zu 4 Prozent des Jahresumsatzes vor, sie
                    können nach Absatz 5 aber nur im Rahmen einer koordinierten Durchsetzungsaktion mehrerer
                    EU-Staaten verhängt werden. Das zielt auf große, grenzüberschreitende Fälle.
                </p>
                <p>
                    Das reale Risiko steht in § 8 und § 9 UWG:
                </p>
                <ul>
                    <li><strong>Unterlassung und Beseitigung.</strong> Nach § 8 Absatz 3 können Mitbewerber, Wirtschaftsverbände und qualifizierte Verbraucherverbände Sie abmahnen und auf Unterlassung verklagen. Der Wettbewerber, der unter Ihnen in der Karte gerutscht ist, hat also einen Anspruch und einen Anlass.</li>
                    <li><strong>Haftung für Beauftragte.</strong> Nach § 8 Absatz 2 haften Sie auch, wenn ein Mitarbeiter oder eine beauftragte Agentur die Bewertungen bestellt hat. "Das hat die Marketingfirma gemacht" schützt nicht.</li>
                    <li><strong>Schadensersatz.</strong> Nach § 9 Absatz 1 gegenüber Mitbewerbern, nach Absatz 2 seit Mai 2022 auch gegenüber Verbrauchern, die wegen der Täuschung eine Entscheidung getroffen haben, die sie sonst nicht getroffen hätten.</li>
                </ul>
                <p>
                    Dass es einen Markt dafür gibt, ist übrigens amtlich. Das Bundeskartellamt hat 2020 in seiner
                    Sektoruntersuchung zu Nutzerbewertungen festgestellt, dass gefälschte Bewertungen ein weit
                    verbreitetes Phänomen sind und es spezialisierte Dienstleister gibt, bei denen man positive
                    Bewertungen kaufen kann. Für Amazon-Bewertungen fand die Behörde Preise von 15 bis 30 Euro pro
                    Stück. Plattformen wie Amazon, Holidaycheck und Jameda gehen gerichtlich gegen solche Vermittler
                    vor, laut Bericht überwiegend erfolgreich.
                </p>

                <h2>Erlaubt oder verboten: die Grauzonen</h2>
                <p>
                    Gekaufte Bewertungen sind der klare Fall. Die meisten praktischen Fragen liegen
                    daneben. Google beantwortet sie in derselben Richtlinie, im Abschnitt zur Manipulation von
                    Bewertungen, erstaunlich genau.
                </p>
                <div className="rule-cols">
                    <div className="rule-col">
                        <h3>Erlaubt</h3>
                        <ul>
                            <li>Jeden Kunden um eine Bewertung bitten, die seiner tatsächlichen Erfahrung entspricht</li>
                            <li>Den Bewertungslink per E-Mail, WhatsApp oder auf der Rechnung schicken</li>
                            <li>Einen QR-Code im Laden, in der Praxis oder auf dem Lieferschein</li>
                            <li>An die Bitte erinnern, wenn der Kunde zugestimmt hat und es vergessen hat</li>
                            <li>Auf jede Bewertung antworten, auch auf die schlechten</li>
                            <li>Bewertungen melden, die gegen die Richtlinien verstoßen</li>
                        </ul>
                    </div>
                    <div className="rule-col rule-no">
                        <h3>Verboten</h3>
                        <ul>
                            <li>Bewertungen kaufen, auch als Paket oder über eine Agentur</li>
                            <li>Rabatte, Gutscheine, Gratisleistungen oder Verlosungen für eine Bewertung</li>
                            <li>Nur zufriedene Kunden fragen oder Unzufriedene vorher aussortieren</li>
                            <li>Bewertungen von Mitarbeitern, Familie oder Geschäftspartnern</li>
                            <li>Kunden vor Ort unter Druck setzen oder vorgeben, was drinstehen soll</li>
                            <li>Mitarbeitern eine Quote an Bewertungen vorgeben</li>
                            <li>Wettbewerber schlecht bewerten</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Zwei Punkte auf der rechten Seite überraschen die meisten. Erstens das Aussortieren, im
                    Englischen Review Gating genannt: Ein Formular, das erst fragt "Waren Sie zufrieden?" und nur bei
                    Ja zu Google weiterleitet, verstößt gegen die Richtlinie. Auch die EU-Richtlinie nennt in ihrem
                    Erwägungsgrund 49 genau diese Form der Manipulation: nur positive Bewertungen veröffentlichen,
                    negative löschen. Zweitens die Verlosung: Ein Gutschein, der unter allen Bewertenden verlost wird,
                    ist ein Anreiz und damit bei Google nicht zulässig.
                </p>

                <h2>Echte Bewertungen sammeln: Link, QR-Code, Zeitpunkt</h2>
                <p>
                    Das Gute an den Regeln: Das, was erlaubt ist, funktioniert auch. Die meisten Betriebe haben
                    nicht zu wenige zufriedene Kunden, sondern fragen sie nicht oder machen es ihnen zu schwer.
                    Wer erst nach dem Firmennamen suchen, das Profil finden und dann den Button zum Bewerten
                    entdecken muss, bricht ab.
                </p>
                <ol>
                    <li><strong>Link und QR-Code erzeugen.</strong> Im Google-Unternehmensprofil gibt es die Funktion, einen Link oder QR-Code zum Anfordern von Rezensionen zu erstellen. Der Link öffnet direkt das Bewertungsformular. Den QR-Code erzeugt Google nur im Computerbrowser, nicht in der App.</li>
                    <li><strong>Den richtigen Moment wählen.</strong> Am besten fragen Sie, wenn die Leistung erbracht ist und der Kunde zufrieden sein kann: nach der Übergabe, nach der Behandlung, nach dem Einbau. Senden Sie den Link am selben Tag. Drei Wochen später ist die Erinnerung blass und die Bitte lästig.</li>
                    <li><strong>Nicht vor Ort drängen.</strong> Google untersagt, Kunden zum Bewerten aufzufordern oder unter Druck zu setzen, während sie sich noch vor Ort befinden. Ein QR-Code an der Theke ist in Ordnung, das Tablet, das man dem Kunden in die Hand drückt, nicht.</li>
                    <li><strong>Den Link überall hinterlegen.</strong> Google selbst nennt Belege, Dankeschön-E-Mails, das Ende eines Chats und einen ausgedruckten QR-Code im Geschäft. Dazu passen die E-Mail-Signatur und die Rechnung.</li>
                    <li><strong>Alle fragen.</strong> Auch den Kunden, bei dem es nicht ganz rund lief. Das ist nicht nur Pflicht, es hilft auch: Google schreibt in den Tipps für mehr Rezensionen, dass eine Mischung aus positivem und negativem Feedback oft vertrauenswürdiger wirkt.</li>
                    <li><strong>Einmal erinnern.</strong> Wer zugesagt und es vergessen hat, bekommt nach einigen Tagen eine kurze Erinnerung. Danach ist Schluss.</li>
                </ol>
                <p>
                    Eine Nachricht, die ich so oder ähnlich empfehle, für WhatsApp oder E-Mail:
                </p>
                <div className="subpage-story">
                    <span className="subpage-story-label">Vorlage</span>
                    <p>
                        Guten Tag Frau Muster, vielen Dank für Ihren Auftrag. Wenn Sie eine Minute Zeit haben: Eine
                        ehrliche Bewertung bei Google hilft anderen Kunden bei der Entscheidung und uns, besser zu
                        werden. Hier geht es direkt zum Formular: [Ihr Bewertungslink]. Falls etwas nicht gepasst hat,
                        sagen Sie es mir gern auch direkt.
                    </p>
                </div>
                <p>
                    Der letzte Satz ist erlaubt, solange die Bitte um die Bewertung an alle geht und nicht davon
                    abhängt, ob jemand zufrieden ist. Er gibt unzufriedenen Kunden einen Weg, mit Ihnen zu sprechen.
                    Unterbinden darf er die Bewertung nicht.
                </p>

                <h2>Auf Bewertungen antworten</h2>
                <p>
                    Antworten können Sie nur mit einem bestätigten Unternehmensprofil. Google prüft Antworten vor
                    der Veröffentlichung, das dauert laut Hilfeseite in der Regel bis zu 10 Minuten, in einigen
                    Fällen bis zu 30 Tage. Die Antwort lesen nicht nur der Bewertende, sondern alle, die Ihr Profil
                    später sehen. Für die schreiben Sie.
                </p>
                <ul>
                    <li><strong>Positive Bewertungen:</strong> kurz danken, gern mit einem konkreten Detail aus der Bewertung. Keine Textbausteine, die unter jeder Bewertung gleich stehen.</li>
                    <li><strong>Kritische Bewertungen:</strong> sachlich bleiben, den Punkt anerkennen, sagen, was Sie geändert haben oder anbieten. Keine Details aus dem Auftrag, keine Namen, keine Rechnungsbeträge. Wer liest, beurteilt vor allem Ihren Ton.</li>
                    <li><strong>Bewertungen ohne Kundenkontakt:</strong> nicht in der Antwort streiten, sondern melden.</li>
                </ul>

                <h2>Unfaire Bewertungen melden statt löschen lassen</h2>
                <p>
                    Löschen können Sie eine Bewertung nicht. Sie können jede Rezension melden, entfernt werden aber
                    nur Rezensionen, die gegen die Richtlinien verstoßen. Google schreibt dazu selbst, dass es keine
                    Konflikte zwischen Unternehmen und Kunden schlichtet. Wird eine Meldung abgelehnt, ist einmal ein
                    Einspruch möglich.
                </p>
                <p>
                    Bei Bewertungen von Menschen, die nie Kunde waren, hilft die Rechtsprechung. Der
                    Bundesgerichtshof hat 2022 entschieden, dass die Rüge, einer Bewertung liege kein Kundenkontakt
                    zugrunde, grundsätzlich ausreicht, um Prüfpflichten des Bewertungsportals auszulösen. Das
                    Oberlandesgericht Oldenburg hat 2024 festgehalten, dass eine Google-Bewertung als Bewertung einer
                    tatsächlich in Anspruch genommenen Leistung verstanden wird. Wer nie Kunde war, muss das dazusagen.
                </p>
                <p>
                    Vorsicht bei Diensten, die "Bewertungen löschen lassen" gegen Gebühr anbieten. Das
                    Oberlandesgericht Frankfurt hat im März 2026 entschieden, dass das Melden und Anfechten von
                    Google-Bewertungen für Kunden eine Rechtsdienstleistung ist, für die der Anbieter eine Erlaubnis
                    braucht. Das Urteil ist noch nicht rechtskräftig. Die Meldung selbst kostet Sie nichts.
                </p>

                <h2>Warum echte Bewertungen mehr bringen als viele</h2>
                <p>
                    Google nennt für die lokale Suche drei Faktoren: Relevanz, Entfernung und Bekanntheit. Zur
                    Bekanntheit zählt Google ausdrücklich die Anzahl der Rezensionen und positive Bewertungen. Wie Sie das Profil darüber hinaus aufstellen, steht im Leitfaden
                    {' '}<Link href="/wissen/google-business-profile-optimieren">Google-Unternehmensprofil optimieren</Link>.
                    Für die Kunden ist eine Bewertung von letzter Woche, die einen konkreten Auftrag beschreibt, mehr
                    wert als fünf Sterne ohne Text. Genau die bekommen Sie nur von echten Kunden, und genau die kann
                    kein Händler liefern.
                </p>
                <p>
                    Wenn Sie Hilfe bei der lokalen Sichtbarkeit wollen: Sie arbeiten direkt mit mir. Braucht ein
                    Projekt zusätzliche Expertise, etwa bei Design, Text oder Fotografie, hole ich geprüfte
                    Spezialisten dazu. Ansprechpartner und Verantwortlicher für das Ergebnis bleibe ich. Was zur
                    lokalen <Link href="/leistungen/seo">SEO-Betreuung</Link> gehört, inklusive Unternehmensprofil und
                    Bewertungsprozess, steht auf der Leistungsseite.
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
                        <li>Google Maps, Richtlinien für nutzergenerierte Inhalte, verbotene und eingeschränkt zulässige Inhalte: gefälschte Interaktionen, Anreize, Interessenkonflikte, Manipulation von Bewertungen. <a href="https://support.google.com/contributionpolicy/answer/7400114?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google Unternehmensprofil-Hilfe, Einschränkungen von Unternehmensprofilen bei Richtlinienverstößen: Sperre neuer Rezensionen, Ausblenden bestehender, Warnhinweis. <a href="https://support.google.com/business/answer/14114287?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google, Warnungen für Nutzer: Banner bei entfernten verdächtigen Rezensionen. <a href="https://support.google.com/contributionpolicy/answer/15178562?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google Unternehmensprofil-Hilfe, Link oder QR-Code zum Anfordern von Rezensionen erstellen. <a href="https://support.google.com/business/answer/16816815?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google Unternehmensprofil-Hilfe, Tipps für mehr Rezensionen. <a href="https://support.google.com/business/answer/3474122?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google Unternehmensprofil-Hilfe, Kundenrezensionen verwalten: Antworten, Prüfdauer. <a href="https://support.google.com/business/answer/3474050?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google Unternehmensprofil-Hilfe, Unangemessene Rezensionen melden, Einspruch. <a href="https://support.google.com/business/answer/4596773?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>Google Blog, 31.03.2023: mehr als 115 Millionen entfernte Rezensionen im Jahr 2022. <a href="https://blog.google/products-and-platforms/products/maps/google-maps-fake-contributions-ai-machine-learning/" rel="nofollow noopener" target="_blank">blog.google</a></li>
                        <li>Google Blog, 07.04.2025: mehr als 240 Millionen entfernte Rezensionen im Jahr 2024. <a href="https://blog.google/products-and-platforms/products/maps/google-business-profiles-ai-fake-reviews/" rel="nofollow noopener" target="_blank">blog.google</a></li>
                        <li>Google Blog, 16.04.2026: mehr als 292 Millionen entfernte Rezensionen im Jahr 2025, Pausieren neuer Rezensionen und Hinweisbanner bei auffälligem Anstieg. <a href="https://blog.google/products-and-platforms/products/maps/new-ways-were-protecting-businesses-on-maps/" rel="nofollow noopener" target="_blank">blog.google</a></li>
                        <li>Google Unternehmensprofil-Hilfe, Tipps zur Verbesserung des lokalen Rankings: Relevanz, Entfernung, Bekanntheit, Anzahl der Rezensionen. <a href="https://support.google.com/business/answer/7091?hl=de" rel="nofollow noopener" target="_blank">support.google.com</a></li>
                        <li>UWG, Anhang zu § 3 Absatz 3, Nummern 23b und 23c. <a href="https://www.gesetze-im-internet.de/uwg_2004/anhang.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>UWG § 3 Absatz 3, stets unzulässige Handlungen. <a href="https://www.gesetze-im-internet.de/uwg_2004/__3.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>UWG § 5b Absatz 3, Informationen zur Echtheit von Verbraucherbewertungen. <a href="https://www.gesetze-im-internet.de/uwg_2004/__5b.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>UWG § 8, Beseitigung und Unterlassung, Haftung für Mitarbeiter und Beauftragte, Anspruchsberechtigte. <a href="https://www.gesetze-im-internet.de/uwg_2004/__8.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>UWG § 9, Schadensersatz gegenüber Mitbewerbern und Verbrauchern. <a href="https://www.gesetze-im-internet.de/uwg_2004/__9.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>UWG § 19, Bußgeld nur im Rahmen einer koordinierten Durchsetzungsmaßnahme (Absatz 5). <a href="https://www.gesetze-im-internet.de/uwg_2004/__19.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>Gesetz zur Stärkung des Verbraucherschutzes im Wettbewerbs- und Gewerberecht vom 10.08.2021, BGBl. 2021 I S. 3504, Inkrafttreten am 28.05.2022. <a href="https://www.bundesgerichtshof.de/SharedDocs/Downloads/DE/Bibliothek/Gesetzesmaterialien/19_wp/Verbrauchersch_Wettbew_GewerbeR/bgbl.pdf?__blob=publicationFile&amp;v=2" rel="nofollow noopener" target="_blank">bundesgerichtshof.de</a></li>
                        <li>Richtlinie (EU) 2019/2161 (Omnibus-Richtlinie), Anhang I Nummern 23b und 23c der Richtlinie 2005/29/EG, Erwägungsgrund 49. <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32019L2161" rel="nofollow noopener" target="_blank">eur-lex.europa.eu</a></li>
                        <li>Bundeskartellamt, Sektoruntersuchung Nutzerbewertungen, Pressemitteilung vom 06.10.2020. <a href="https://www.bundeskartellamt.de/SharedDocs/Meldung/DE/Pressemitteilungen/2020/06_10_2020_SU_Nutzerbewertungen.html" rel="nofollow noopener" target="_blank">bundeskartellamt.de</a></li>
                        <li>Bundeskartellamt, Sektoruntersuchung Nutzerbewertungen, Bericht, S. 63: Preise von 15 bis 30 Euro je Amazon-Bewertung, Verfahren der Plattformen gegen Vermittler. <a href="https://www.bundeskartellamt.de/SharedDocs/Publikation/DE/Sektoruntersuchungen/Sektoruntersuchung_Nutzerbewertungen_Bericht.pdf?__blob=publicationFile&amp;v=3" rel="nofollow noopener" target="_blank">bundeskartellamt.de</a></li>
                        <li>BGH, Urteil vom 09.08.2022, VI ZR 1244/20: Rüge fehlenden Kundenkontakts löst Prüfpflichten des Portals aus. <a href="https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Zivilsenate/VI_ZS/2020/VI_ZR_1244-20.pdf?__blob=publicationFile&amp;v=1" rel="nofollow noopener" target="_blank">bundesgerichtshof.de</a></li>
                        <li>OLG Oldenburg, Urteil vom 04.06.2024, 13 U 110/23, Pressemitteilung: negative Google-Bewertung ohne Mandatsverhältnis. <a href="https://oberlandesgericht-oldenburg.niedersachsen.de/startseite/aktuelles/presseinformationen/negative-google-bewertung-ohne-kunde-zu-sein-teilerfolg-gegen-unterlassungsurteil-im-berufungsverfahren-235754.html" rel="nofollow noopener" target="_blank">oberlandesgericht-oldenburg.niedersachsen.de</a></li>
                        <li>OLG Frankfurt am Main, Urteil vom 19.03.2026, 16 U 2/25, Pressemitteilung: Melden von Google-Bewertungen für Kunden als Rechtsdienstleistung, nicht rechtskräftig. <a href="https://ordentliche-gerichtsbarkeit.hessen.de/presse/google-bewertungen" rel="nofollow noopener" target="_blank">ordentliche-gerichtsbarkeit.hessen.de</a></li>
                        <li>Google Keyword Planner, Suchvolumen "google bewertungen kaufen" in Deutschland, Abruf am 07.10.2026.</li>
                    </ol>
                </div>
                </AutoLinks>
            </ArticleLayout>
        </>
    );
}
