import ArticleLayout from '../../../src/components/ArticleLayout';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Webflow oder WordPress? Klare Entscheidung',
    description: 'Webflow-Preise, WordPress-Gesamtkosten, Pflegeaufwand, Ausstiegsrisiko und der Sonderfall TYPO3. Mit aktuellen Listenpreisen und einer Zuordnung nach Fall.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/webflow-oder-wordpress',
    },
    openGraph: {
        title: 'Webflow oder WordPress? Klare Entscheidung',
        description: 'Webflow-Preise, WordPress-Gesamtkosten, Pflegeaufwand und Ausstiegsrisiko, mit aktuellen Listenpreisen.',
        url: 'https://webseite.hamburg/wissen/webflow-oder-wordpress',
        type: 'article',
    },
};

const faqItems = [
    {
        q: 'Was kostet Webflow?',
        a: 'Laut der Preisseite von Webflow, Stand August 2026: Starter kostenlos mit Webflow-Subdomain, Basic 15 US-Dollar pro Monat bei Jahreszahlung ohne CMS-Funktionen, Premium 25 US-Dollar pro Monat bei Jahreszahlung mit CMS, Team 2.500 US-Dollar pro Monat mit Jahresvertrag, Enterprise auf Anfrage. Abgerechnet wird in US-Dollar. Zusätzliche Arbeitsplätze in der Workspace kosten extra, was bei Teams schnell mehr ausmacht als der Site-Plan selbst.',
    },
    {
        q: 'Ist Webflow günstiger als WordPress?',
        a: 'In der Anschaffung meist ja, über fünf Jahre selten. Webflow ist ein Abonnement mit klaren monatlichen Kosten und ohne Wartungsaufwand. WordPress ist beim Hosting billiger, verlagert die Kosten aber in Pflege, Plugin-Lizenzen und die Stunden, die jemand für Updates und Fehlersuche braucht. Wer die eigene Zeit mit null Euro bewertet, kommt bei WordPress günstiger weg. Sonst hängt es an der Pflegehäufigkeit.',
    },
    {
        q: 'Kann ich eine Webflow-Website exportieren?',
        a: 'Einen HTML- und CSS-Export gibt es, er umfasst aber nicht die CMS-Inhalte als lauffähiges System. Was Sie mitnehmen, ist Markup und Gestaltung, nicht die Redaktionsumgebung. Wer Webflow verlässt, baut die Inhaltsverwaltung neu auf. Das ist derselbe Handel wie bei jedem gehosteten Baukasten, nur auf einem höheren gestalterischen Niveau.',
    },
    {
        q: 'Ist Webflow gut für SEO?',
        a: 'Technisch ja. Sie kontrollieren Titel, Beschreibungen, Weiterleitungen, saubere URLs, strukturierte Daten über eigene Code-Einbindungen und die Auslieferung läuft über ein Content Delivery Network. Google bewertet ohnehin das ausgelieferte Ergebnis, nicht das System dahinter. Die Grenze liegt dort, wo Sie serverseitige Logik oder sehr viele generierte Seiten brauchen.',
    },
    {
        q: 'Wann ist TYPO3 die richtige Wahl statt beider?',
        a: 'Wenn Rechteverwaltung, Mehrsprachigkeit und Redaktionsabläufe die eigentliche Anforderung sind: mehrere Standorte, mehrere Sprachen, Freigabeprozesse, viele Redakteure mit unterschiedlichen Zuständigkeiten. TYPO3 ist in Deutschland dafür verbreitet und wird üblicherweise von einer Agentur betrieben, nicht vom Kunden selbst.',
    },
    {
        q: 'Was ist die häufigste Fehlentscheidung bei dieser Frage?',
        a: 'Ein System nach dem Aussehen der Beispielseiten zu wählen. Beide Systeme können gut aussehen, das entscheidet der Entwurf und nicht die Plattform. Wählen sollten Sie nach der Antwort auf zwei Fragen: Wer pflegt die Inhalte, und was passiert, wenn Sie in drei Jahren wechseln wollen.',
    },
];

export default function WebflowOderWordpressPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Webflow oder WordPress: welches System zu welchem Projekt passt',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-22',
        dateModified: '2026-08-22',
        url: 'https://webseite.hamburg/wissen/webflow-oder-wordpress',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/webflow-oder-wordpress' },
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
            { '@type': 'ListItem', position: 3, name: 'Webflow oder WordPress', item: 'https://webseite.hamburg/wissen/webflow-oder-wordpress' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="webflow-oder-wordpress"
                category="WEBDESIGN"
                title="Webflow oder WordPress: welches System zu welchem Projekt passt"
                readTime="10 Min."
                publishDate="2026-08-22"
                heroImage="/wissen/hero-webflow-wordpress.svg"
                heroAlt="Illustration: Balkenwaage, links ein Baukasten aus drei Blöcken, rechts ein Zahnrad mit Code-Klammern, der Zeiger ist rot"
            >
                <p>
                    Die Frage wird meist als technische gestellt und ist eine betriebswirtschaftliche. Beide
                    Systeme bauen gute Websites. Sie verteilen nur Arbeit, Kosten und Abhängigkeit
                    unterschiedlich, und diese Verteilung passt entweder zu Ihrem Betrieb oder nicht.
                </p>
                <p>
                    Ich baue selbst weder Webflow noch WordPress, sondern statisch generierte Seiten. Das mache
                    ich transparent, damit Sie einordnen können, woher die Einschätzung kommt. Genau deshalb habe
                    ich auch kein Interesse daran, einen der beiden Kandidaten schlechtzureden.
                </p>

                <div className="subpage-takeaway">
                    <p>
                        <strong>Kurz gesagt:</strong> Webflow kostet laut eigener Preisseite 15 US-Dollar im Monat
                        für Basic ohne CMS und 25 US-Dollar für Premium mit CMS, jeweils bei Jahreszahlung. Dafür
                        entfallen Wartung, Updates und Sicherheitspflege komplett. WordPress ist beim Hosting
                        günstiger und verlagert die Kosten in Pflege, Lizenzen und Zeit.
                    </p>
                    <p>
                        Nehmen Sie Webflow, wenn Gestaltung und Ruhe zählen und ein bis zwei Personen pflegen.
                        Nehmen Sie WordPress, wenn viele Personen viel pflegen, wenn Sie ein bestimmtes Plugin
                        brauchen oder wenn Sie das System vollständig besitzen wollen.
                    </p>
                </div>

                <h2>Was die beiden strukturell unterscheidet</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Webflow</th>
                                <th>WordPress</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Betriebsmodell</th>
                                <td>gehostet beim Anbieter, Abonnement</td>
                                <td>selbst gehostet, Software kostenlos</td>
                            </tr>
                            <tr>
                                <th>Listenpreis</th>
                                <td>Basic 15, Premium 25 US-Dollar im Monat bei Jahreszahlung</td>
                                <td>Hosting ab etwa 5 bis 30 Euro im Monat, Lizenzen und Pflege extra</td>
                            </tr>
                            <tr>
                                <th>Updates und Sicherheit</th>
                                <td>Anbieter, kein Aufwand für Sie</td>
                                <td>Ihre Aufgabe oder ein Wartungsvertrag</td>
                            </tr>
                            <tr>
                                <th>Gestaltungsfreiheit</th>
                                <td>sehr hoch, visuelles Arbeiten direkt am Layout</td>
                                <td>hoch, abhängig von Theme und Editor</td>
                            </tr>
                            <tr>
                                <th>Erweiterbarkeit durch Fremdbausteine</th>
                                <td>begrenzt, kuratiert</td>
                                <td>praktisch unbegrenzt, mit allen Folgen</td>
                            </tr>
                            <tr>
                                <th>Redaktionelle Pflege im Team</th>
                                <td>möglich, Arbeitsplätze kosten extra</td>
                                <td>Stärke des Systems, Rollen eingebaut</td>
                            </tr>
                            <tr>
                                <th>Ausstieg</th>
                                <td>Markup exportierbar, Redaktionsumgebung nicht</td>
                                <td>vollständig, Datenbank und Dateien gehören Ihnen</td>
                            </tr>
                            <tr>
                                <th>Serverseitige Sonderlogik</th>
                                <td>kaum, dafür nicht gedacht</td>
                                <td>frei, es ist Ihr Server</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Die Kostenrechnung, die man selten sieht</h2>
                <p>
                    Der Vergleich der Monatspreise ist irreführend, weil er die Pflege ausblendet. Rechnen Sie
                    lieber so, über drei Jahre:
                </p>
                <ul>
                    <li><strong>Webflow, Premium mit CMS.</strong> 25 US-Dollar im Monat mal 36, also rund 900 US-Dollar, plus Domain. Zusätzliche Arbeitsplätze in der Workspace kommen dazu, wenn mehrere Personen bearbeiten. Wartungsaufwand: null.</li>
                    <li><strong>WordPress, ordentlich betrieben.</strong> Hosting mit Substanz 15 bis 30 Euro im Monat, also rund 540 bis 1.080 Euro. Premium-Plugins für Formulare, Sicherheit, Caching, Backups und Mehrsprachigkeit summieren sich je nach Umfang auf 100 bis 500 Euro im Jahr. Und dann die Pflege: Updates prüfen, Backups kontrollieren, gelegentlich einen Konflikt beheben. Wer das einkauft, zahlt für ein Wartungspaket üblicherweise einen mittleren zweistelligen Betrag im Monat.</li>
                </ul>
                <p>
                    Die Zahlen kippen also nicht am Preis der Software, sondern an einer Frage: Wer macht die
                    Pflege, und was ist dessen Stunde wert? Wenn Sie selbst pflegen und es Ihnen liegt, ist
                    WordPress günstiger. Wenn Sie es einkaufen oder es Ihnen nicht liegt, ist es das nicht.
                    Genauere Aufschlüsselung in <Link href="/wissen/webdesign-kosten">Webdesign Kosten</Link>.
                </p>

                <h2>Sicherheit: der Unterschied liegt in den Erweiterungen</h2>
                <p>
                    Bei einem gehosteten System wie Webflow gibt es für Sie keine Update-Aufgabe. Bei WordPress
                    gibt es sie, und sie ist nicht optional. Im Patchstack-Bericht State of WordPress Security in
                    2026 wurden für 2025 insgesamt 11.334 neue Schwachstellen im WordPress-Umfeld gemeldet,
                    davon 91 Prozent in Plugins und 9 Prozent in Themes. Im Kern selbst waren es sechs, alle als
                    geringes Risiko eingestuft.
                </p>
                <p>
                    Der Bericht nennt außerdem Zahlen zur Geschwindigkeit: 20 Prozent der stark ausgenutzten
                    Schwachstellen wurden innerhalb von sechs Stunden nach Veröffentlichung angegriffen, 45
                    Prozent innerhalb von 24 Stunden. Ein monatlicher Update-Rhythmus ist damit rechnerisch zu
                    langsam. Details und Gegenmaßnahmen in
                    {' '}<Link href="/wissen/wordpress-sicherheit-wartung">WordPress absichern und warten</Link>.
                </p>

                <h2>Die Ausstiegsfrage, ehrlich beantwortet</h2>
                <p>
                    Bei WordPress gehört Ihnen alles: Datenbank, Dateien, Themes. Umziehen heißt Server wechseln,
                    nicht System wechseln. Bei Webflow bekommen Sie einen Export von Markup und Gestaltung,
                    aber keine lauffähige Redaktionsumgebung. Sie nehmen also das Aussehen mit und bauen die
                    Verwaltung neu.
                </p>
                <p>
                    Das ist derselbe Handel wie bei Wix, Jimdo oder Squarespace, nur mit deutlich mehr
                    gestalterischer Freiheit auf dem Weg. Die grundsätzliche Rechnung dazu steht in
                    {' '}<Link href="/wissen/website-baukasten-oder-eigene-website">Website-Baukasten oder eigene Website</Link>.
                    Wie hoch Sie dieses Risiko gewichten, hängt an einer nüchternen Schätzung: Wie
                    wahrscheinlich ist es, dass Sie in fünf Jahren woanders sind?
                </p>

                <div className="subpage-story">
                    <span className="subpage-story-label">Aus der Praxis</span>
                    <p>
                        Ein Kunde hatte eine gestalterisch hervorragende Webflow-Seite und wollte ein
                        Buchungssystem anbinden, das mit seiner Branchensoftware sprechen sollte. Das war der Punkt,
                        an dem die Plattform an ihre Grenze kam: Für die Anbindung brauchte es serverseitige
                        Verarbeitung, und die gibt es dort nicht.
                    </p>
                    <p>
                        Wir haben die Seite dann nicht ersetzt, sondern die Buchung als eigenen Dienst
                        danebengestellt und verlinkt. Die Lehre daraus, die ich seither jedem sage: Klären Sie
                        Schnittstellen vor dem Design. Ein Layout kann man in jedem System nachbauen. Eine
                        Anbindung, die die Plattform nicht kann, kann man nicht nachbauen.
                    </p>
                </div>

                <h2>Der dritte Kandidat, den Deutschland gern vergisst</h2>
                <p>
                    Wer TYPO3 gegen WordPress abwägt, hat meist eine andere Anforderung als der
                    Webflow-Interessent: mehrere Standorte, mehrere Sprachen, Redakteure mit unterschiedlichen
                    Zuständigkeiten, Freigabeprozesse. Dafür ist TYPO3 gebaut, es ist im deutschen Mittelstand und
                    bei Institutionen verbreitet, und es ist kein System, das ein Betrieb nebenbei selbst
                    betreibt. Wer nur drei Sprachen braucht, aber keine Freigabeketten, ist damit überversorgt.
                </p>
                <p>
                    Und für kleine, selten geänderte Firmenwebsites gibt es die vierte Antwort, die in dieser
                    Gegenüberstellung oft fehlt: gar kein Redaktionssystem, sondern eine statisch generierte
                    Seite. Warum das für viele Betriebe die ruhigste Variante ist, steht in
                    {' '}<Link href="/wissen/wordpress-alternativen">WordPress-Alternativen</Link>.
                </p>

                <h2>Die Zuordnung nach Fall</h2>
                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Ihr Fall</th>
                                <th>Empfehlung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Marke mit hohem gestalterischen Anspruch, 1 bis 2 Pflegende</th>
                                <td>Webflow</td>
                            </tr>
                            <tr>
                                <th>Blog oder Magazin mit mehreren Autoren</th>
                                <td>WordPress</td>
                            </tr>
                            <tr>
                                <th>Sie brauchen ein bestimmtes Plugin oder eine Branchenanbindung</th>
                                <td>WordPress</td>
                            </tr>
                            <tr>
                                <th>Sie wollen nie wieder ein Update installieren</th>
                                <td>Webflow oder statisch generiert</td>
                            </tr>
                            <tr>
                                <th>Mehrsprachig, mehrere Standorte, Freigabeprozesse</th>
                                <td>TYPO3</td>
                            </tr>
                            <tr>
                                <th>Firmenwebsite, selten geändert, Ladezeit wichtig</th>
                                <td>statisch generiert</td>
                            </tr>
                            <tr>
                                <th>Shop</th>
                                <td>keiner der beiden, siehe <Link href="/leistungen/e-commerce-entwicklung">E-Commerce</Link></td>
                            </tr>
                            <tr>
                                <th>Ihre bestehende Seite bringt Anfragen und macht keine Arbeit</th>
                                <td>lassen, wie sie ist</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Wenn Sie eine Zweitmeinung wollen</h2>
                <p>
                    Schicken Sie mir den Link zu Ihrer aktuellen Seite und einen Satz dazu, wer sie pflegt. Ich
                    sage Ihnen im <Link href="/leistungen/website-audit">kostenlosen Website-Audit</Link>, welches
                    der Systeme zu dieser Antwort passt, auch wenn es keines von meinen ist. Sie arbeiten direkt
                    mit mir. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder Fotografie,
                    hole ich geprüfte Spezialisten dazu. Ansprechpartner und Verantwortlicher für das Ergebnis
                    bleibe ich. Rahmenbedingungen unter <Link href="/leistungen/webdesign">Webdesign</Link>.
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
                        <li>Webflow, Plans and pricing, Stand August 2026: Starter kostenlos, Basic 15 US-Dollar im Monat bei Jahreszahlung, Premium 25 US-Dollar im Monat bei Jahreszahlung, Team 2.500 US-Dollar im Monat mit Jahresvertrag, Enterprise auf Anfrage. <a href="https://webflow.com/pricing" rel="nofollow noopener" target="_blank">webflow.com</a></li>
                        <li>Patchstack, State of WordPress Security in 2026: 11.334 neue Schwachstellen 2025, 91 Prozent in Plugins, 9 Prozent in Themes, sechs im Kern; 20 Prozent der stark ausgenutzten Lücken binnen sechs Stunden angegriffen, 45 Prozent binnen 24 Stunden. <a href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" rel="nofollow noopener" target="_blank">patchstack.com</a></li>
                        <li>W3Techs, Usage statistics of content management systems, Stand 22. August 2026. <a href="https://w3techs.com/technologies/overview/content_management" rel="nofollow noopener" target="_blank">w3techs.com</a></li>
                        <li>Google Search Central, Page Experience: Google bewertet das ausgelieferte Ergebnis, Core Web Vitals als Teil der Signale. <a href="https://developers.google.com/search/docs/appearance/page-experience" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                    </ol>
                </div>
            </ArticleLayout>
        </>
    );
}
