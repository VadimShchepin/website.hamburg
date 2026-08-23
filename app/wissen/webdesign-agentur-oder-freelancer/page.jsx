import ArticleLayout from '../../../src/components/ArticleLayout';
import FaqSection from '../../../src/components/FaqSection';
import { BUSINESS } from '../../../src/lib/schema';
import Link from 'next/link';

export const metadata = {
    title: 'Webdesign: Agentur oder Freelancer? Preise & Risiken 2026',
    description: 'Stundensätze, Projektpreise, Ausfallrisiko und Vertragsfallen im Vergleich. Ein ehrlicher Entscheidungsleitfaden, geschrieben von einem Solo-Entwickler.',
    alternates: {
        canonical: 'https://webseite.hamburg/wissen/webdesign-agentur-oder-freelancer',
    },
    openGraph: {
        title: 'Webdesign: Agentur oder Freelancer? Preise & Risiken 2026',
        description: 'Stundensätze, Projektpreise, Ausfallrisiko und Vertragsfallen im Vergleich. Ein ehrlicher Entscheidungsleitfaden.',
        url: 'https://webseite.hamburg/wissen/webdesign-agentur-oder-freelancer',
        type: 'article',
        images: [{ url: 'https://webseite.hamburg/wissen/fotos/freelancer-hero.webp', width: 1200, height: 900 }],
    },
};

const faqItems = [
    { q: "Agentur oder Freelancer: was ist günstiger?", a: "Ein Freelancer liegt bei Projektpreisen von 2.000 bis 12.000 Euro, eine Agentur bei 8.000 bis 30.000 Euro und mehr. Der Grund ist keine Qualitätsfrage, sondern Kostenstruktur: Agenturen finanzieren Projektleitung, Qualitätssicherung und Vertrieb mit. Die Marktstudie Freelancer-Kompass nennt für den DACH-Raum einen durchschnittlichen Stundensatz von rund 104 Euro (2025) beziehungsweise 103 Euro (2026), der Median im IT-Bereich liegt bei etwa 95 Euro." },
    { q: "Wann ist eine Agentur die richtige Wahl?", a: "Ab etwa 15.000 Euro Budget, bei mehreren Sprachen, mehreren Standorten oder wenn Ihr Einkauf einen Rahmenvertrag mit Vertretungsregelung braucht. Ein Freelancer passt bei Projekten zwischen 2.000 und 12.000 Euro, wenn Sie schnelle Entscheidungen und einen festen Ansprechpartner wollen." },
    { q: "Wie sichere ich das Ausfallrisiko bei einem Freelancer ab?", a: "Mit vier Maßnahmen, die fast nichts kosten: Der Quellcode liegt in einem Repository, das Ihnen gehört, etwa bei GitHub oder GitLab. Alle Zugänge zu Hosting, DNS, CMS, Analytics und Ads liegen in Ihrem eigenen Passwortmanager. Die Domain läuft auf Ihren Namen, bei einer .de-Domain als DENIC-Inhaber. Und im Vertrag steht eine Zeile, wer im Ausfall übernimmt." },
    { q: "Wem gehört die Website nach dem Projekt?", a: "Das Urheberrecht an Design und Code bleibt nach deutschem Recht beim Menschen, der es geschaffen hat, Sie erwerben Nutzungsrechte. Steht im Vertrag nicht, welche, greift die Zweckübertragungsregel aus § 31 Absatz 5 UrhG: Sie bekommen im Zweifel nur die Rechte, die für den konkreten Vertragszweck nötig sind. Auch die Herausgabe des Quellcodes schuldet der Auftragnehmer nur, wenn sie vereinbart wurde oder für die vertragsgemäße Nutzung unumgänglich ist." },
    { q: "Wie lange dauert ein Website-Projekt?", a: "Ein Baukasten ist in einem bis vierzehn Tagen fertig, ein Freelancer-Projekt in drei bis acht Wochen, ein Agenturprojekt in zwei bis sechs Monaten. Der Unterschied liegt weniger in der Arbeitsmenge als in den Entscheidungswegen: direkt beim Freelancer, über eine Projektleitung bei der Agentur." },
];

export default function AgenturOderFreelancerPage() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Agentur, Freelancer oder Baukasten: Wer soll Ihre Website bauen?',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: '2026-08-20',
        dateModified: '2026-08-20',
        url: 'https://webseite.hamburg/wissen/webdesign-agentur-oder-freelancer',
        image: 'https://webseite.hamburg/wissen/fotos/freelancer-hero.webp',
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://webseite.hamburg/wissen/webdesign-agentur-oder-freelancer' },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://webseite.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'Agentur oder Freelancer', item: 'https://webseite.hamburg/wissen/webdesign-agentur-oder-freelancer' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ArticleLayout
                slug="webdesign-agentur-oder-freelancer"
                category="WEBDESIGN"
                title="Agentur, Freelancer oder Baukasten: Wer soll Ihre Website bauen?"
                readTime="11 Min."
                publishDate="2026-08-20"
                heroImage="/wissen/fotos/freelancer-hero.webp"
                heroAlt="Entwickler arbeitet an einem Schreibtisch vor einem großen Fenster am Monitor"
                heroFramed
            >
                <p>
                    Zuerst die Offenlegung, damit Sie den Rest richtig einordnen können: Ich bin die Freelancer-Option.
                    Sie arbeiten bei mir direkt mit dem Entwickler, ohne Account-Manager. Ich habe also ein Interesse
                    daran, dass Sie sich für einen Solo-Anbieter entscheiden. Deshalb steht in diesem Artikel auch,
                    wann das die falsche Wahl ist, und wie Sie das Risiko absichern, das dabei entsteht.
                </p>
                <p>
                    Die kurze Antwort: Baukasten bis etwa 500 Euro Gesamtbudget und ohne Anspruch auf Neukunden über
                    Google. Freelancer bei Projekten zwischen 2.000 und 12.000 Euro, wenn Sie schnelle Entscheidungen
                    und einen festen Ansprechpartner wollen. Agentur ab etwa 15.000 Euro, bei mehreren Sprachen,
                    mehreren Standorten oder wenn Ihr Einkauf einen Rahmenvertrag mit Vertretungsregelung braucht.
                </p>

                <div className="subpage-duo">
                    <figure>
                        <img src="/wissen/fotos/freelancer-schreibtisch.webp" alt="Einzelner Entwickler arbeitet in einem mit Pflanzen eingerichteten Arbeitszimmer am Monitor" width="1000" height="750" loading="lazy" decoding="async" />
                        <figcaption>Freelancer: ein Ansprechpartner, kurze Entscheidungswege, ein Kalender.</figcaption>
                    </figure>
                    <figure>
                        <img src="/wissen/fotos/agentur-team.webp" alt="Agenturteam sitzt in einem hellen Besprechungsraum vor einem Flipchart mit Notizzetteln" width="1000" height="750" loading="lazy" decoding="async" />
                        <figcaption>Agentur: Projektleitung, Vertretung, Struktur, und die Kosten dafür.</figcaption>
                    </figure>
                </div>

                <h2>Was kosten Baukasten, Freelancer und Agentur 2026?</h2>
                <p>
                    Preise für Websites sind schwer vergleichbar, weil niemand dasselbe verkauft. Stundensätze sind
                    dagegen recht gut dokumentiert. Die Marktstudie Freelancer-Kompass von freelancermap nennt für den
                    DACH-Raum einen durchschnittlichen Stundensatz von rund 104 Euro (2025) bzw. 103 Euro (2026), der
                    Median im IT-Bereich liegt bei etwa 95 Euro. Agenturen liegen darüber, weil sie Projektleitung,
                    Qualitätssicherung und Vertrieb mitfinanzieren müssen. Das ist kein Vorwurf, das ist Rechnen.
                </p>

                <div className="subpage-table-wrap">
                    <table className="subpage-table">
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Baukasten</th>
                                <th>Freelancer</th>
                                <th>Agentur</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Einmalige Kosten</th>
                                <td>0 bis 500 Euro (Ihre Zeit nicht gerechnet)</td>
                                <td>2.000 bis 12.000 Euro</td>
                                <td>8.000 bis 30.000 Euro und mehr</td>
                            </tr>
                            <tr>
                                <th>Laufend</th>
                                <td>10 bis 50 Euro pro Monat</td>
                                <td>10 bis 150 Euro pro Monat</td>
                                <td>200 bis 1.000 Euro pro Monat mit Servicevertrag</td>
                            </tr>
                            <tr>
                                <th>Dauer</th>
                                <td>1 bis 14 Tage</td>
                                <td>3 bis 8 Wochen</td>
                                <td>2 bis 6 Monate</td>
                            </tr>
                            <tr>
                                <th>Ausfallrisiko</th>
                                <td>gering, solange die Plattform existiert</td>
                                <td>hoch, eine Person, vertraglich absicherbar</td>
                                <td>gering, Team mit Vertretung</td>
                            </tr>
                            <tr>
                                <th>Abhängigkeit</th>
                                <td>stark, Design und Code bleiben auf der Plattform</td>
                                <td>gering bei Übergabe von Code und Zugängen</td>
                                <td>je nach Vertrag, teils eigene Systeme</td>
                            </tr>
                            <tr>
                                <th>Entscheidungswege</th>
                                <td>Sie allein</td>
                                <td>direkt, meist am selben Tag</td>
                                <td>über Projektleitung, strukturiert und langsamer</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Der Punkt, an dem die meisten Vergleiche falsch laufen</h2>
                <p>
                    In Angeboten steht der Preis, aber selten der Umfang. Ein Angebot über 3.000 Euro und eines über
                    9.000 Euro können dieselbe Seitenzahl umfassen und trotzdem etwas völlig anderes enthalten. Die
                    üblichen Kandidaten für stille Auslassungen: Texte, Fotos, SEO-Grundlagen, Datenschutzumsetzung,
                    Tracking, Tests auf echten Geräten und die Schulung danach. Wer diese Punkte nicht ausdrücklich
                    im Angebot findet, kauft sie später einzeln nach.
                </p>
                <p>
                    Was der Preis eigentlich beschreibt und wo er sich versteckt, habe ich im
                    {' '}<Link href="/wissen/webdesign-kosten">Kostenguide zu Webdesign</Link> aufgeschlüsselt. Die Kurzfassung:
                    Rechnen Sie zusätzlich 15 bis 20 Prozent des Erstellungspreises pro Jahr für Betrieb und Pflege ein.
                </p>

                <h2>Wie sichere ich das Ausfallrisiko beim Freelancer ab?</h2>
                <p>
                    Bei einem Freelancer hängt Ihr Projekt an einer Person. Krankheit, Unfall, Geschäftsaufgabe:
                    In allen drei Fällen steht das Projekt. Wer das kleinredet, verkauft Ihnen etwas. Der Punkt ist
                    nicht, ob dieses Risiko existiert, sondern ob es abgesichert ist. Vier Maßnahmen genügen dafür,
                    und sie kosten fast nichts:
                </p>
                <ul>
                    <li>
                        <strong>Code im Repository des Kunden:</strong> Der Quellcode liegt in einem Konto, das Ihnen
                        gehört, etwa bei GitHub oder GitLab. Nicht auf einem privaten Rechner, nicht in einer Dropbox.
                    </li>
                    <li>
                        <strong>Zugänge im eigenen Passwortmanager:</strong> Hosting, DNS, CMS, Analytics, Ads. Sie
                        haben eine vollständige Liste, nicht nur der Dienstleister.
                    </li>
                    <li>
                        <strong>Domain auf Ihren Namen:</strong> Bei einer .de-Domain müssen Sie bei der DENIC als
                        Inhaber eingetragen sein. Der Dienstleister darf technischer Ansprechpartner sein, mehr nicht.
                    </li>
                    <li>
                        <strong>Vertretung benannt:</strong> Eine Zeile im Vertrag, wer im Ausfall übernimmt. Bei mir
                        sind das Kollegen aus meinem Netzwerk, mit denen ich ohnehin arbeite, wenn ein Projekt
                        zusätzliche Expertise braucht.
                    </li>
                </ul>
                <p>
                    Mit diesen vier Punkten wird der Wechsel des Dienstleisters zu einer Unannehmlichkeit statt zu
                    einer Katastrophe. Ohne sie wird auch die beste Agenturbeziehung teuer, wenn sie endet.
                </p>

                <h2>Wem gehört die Website eigentlich?</h2>
                <p>
                    Hier wird es unangenehm konkret. Das Urheberrecht an Design und Code bleibt nach deutschem Recht
                    beim Menschen, der es geschaffen hat. Sie erwerben Nutzungsrechte. Steht im Vertrag nicht, welche,
                    greift die Zweckübertragungsregel aus § 31 Absatz 5 UrhG: Sie bekommen im Zweifel nur die Rechte,
                    die für den konkreten Vertragszweck nötig sind. Wer später das Design für eine App oder eine
                    Tochtermarke nutzen will, steht dann vor einer Nachverhandlung.
                </p>
                <p>
                    Ähnlich beim Quellcode. Nach der Rechtsprechung zum Werkvertrag schuldet der Auftragnehmer die
                    Herausgabe des Quellcodes nur, wenn das vereinbart wurde oder für die vertragsgemäße Nutzung
                    unumgänglich ist. Ein Satz im Angebot spart hier später eine Anwaltsrechnung. Bei mir gehört die
                    Übergabe von Code, Zugängen und Dokumentation zum Projektabschluss, aber prüfen Sie das bei jedem
                    Anbieter, mich eingeschlossen.
                </p>

                <h2>Sieben Fragen, die jeden Anbieter sortieren</h2>
                <p>
                    Stellen Sie diese Fragen im Erstgespräch. Die Antworten sagen mehr als jedes Portfolio, und Sie
                    brauchen kein technisches Wissen, um sie zu bewerten.
                </p>
                <ol>
                    <li><strong>Wer arbeitet tatsächlich an meinem Projekt?</strong> Bei Agenturen gern nachfragen, ob die Person aus dem Erstgespräch auch baut.</li>
                    <li><strong>Bekomme ich Quellcode, Zugänge und Dokumentation?</strong> Wenn ja: schriftlich, mit Termin.</li>
                    <li><strong>Auf wen läuft die Domain?</strong> Richtige Antwort: auf Sie.</li>
                    <li><strong>Wem gehören Analytics, Ads und das Unternehmensprofil?</strong> Auch hier: Ihre Konten, Zugriff für den Dienstleister.</li>
                    <li><strong>Was passiert, wenn Sie ausfallen?</strong> Bei Solo-Anbietern die wichtigste Frage überhaupt.</li>
                    <li><strong>Was kostet eine Änderung nach dem Launch?</strong> Stundensatz und Reaktionszeit erfragen, nicht raten.</li>
                    <li><strong>Wie schnell lädt Ihre eigene Website?</strong> Testen Sie sie mit <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a>, bevor Sie fragen. Die Antwort ist selten peinlich, aber immer aufschlussreich.</li>
                </ol>

                <h2>Was in den Vertrag gehört</h2>
                <p>
                    Ein Webprojekt ist in der Regel ein Werkvertrag. Diese Punkte sollten geregelt sein, unabhängig
                    davon, wer baut:
                </p>
                <ul>
                    <li><strong>Leistungsumfang:</strong> Seitenzahl, CMS, Funktionen, Browser, Ladezeitziel, wer Texte und Bilder liefert.</li>
                    <li><strong>Nutzungsrechte:</strong> ausschließlich, zeitlich und räumlich unbeschränkt, mit Recht zur Bearbeitung.</li>
                    <li><strong>Übergabe:</strong> Quellcode, Zugänge, Dokumentation, Termin nach Abnahme.</li>
                    <li><strong>Abnahme:</strong> Frist, nach der die Leistung als abgenommen gilt, üblich sind 10 bis 14 Werktage.</li>
                    <li><strong>Mitwirkung:</strong> Termine für Ihre Inhalte, Folgen bei Verzug. Der häufigste Grund für Projektverzug sind fehlende Texte, nicht fehlender Code.</li>
                    <li><strong>Auftragsverarbeitung:</strong> ein Vertrag nach Artikel 28 DSGVO, sobald der Dienstleister Zugriff auf personenbezogene Daten hat.</li>
                    <li><strong>Rechtstexte:</strong> Klare Trennung, wer Impressum, Datenschutzerklärung und Cookie-Banner liefert. Webdesigner dürfen keine Rechtsberatung leisten.</li>
                </ul>

                <h2>Wann ist welche Option die richtige?</h2>
                <h3>Baukasten</h3>
                <p>
                    Sinnvoll für Vereine, Nebenprojekte, Testphasen und Betriebe, die keine Kunden über Google
                    gewinnen müssen. Der Preis ist unschlagbar, der Preis dafür ist Abhängigkeit. Was Sie beim
                    Umzug verlieren und was ein Baukasten über fünf Jahre wirklich kostet, steht im Artikel
                    {' '}<Link href="/wissen/website-baukasten-oder-eigene-website">Website-Baukasten oder eigene Website</Link>.
                </p>
                <h3>Freelancer</h3>
                <p>
                    Sinnvoll für lokale Unternehmen und Dienstleister mit Projektbudgets von 2.000 bis 12.000 Euro,
                    die kurze Wege wollen. Sie bekommen die Person, die baut, und Entscheidungen am selben Tag. Sie
                    tragen dafür das Ausfallrisiko, das Sie mit den vier Punkten oben abdecken. Typische Projekte
                    dieser Klasse sind Websites für <Link href="/leistungen/webdesign-handwerker">Handwerksbetriebe</Link>,
                    {' '}<Link href="/leistungen/webdesign-anwaelte">Kanzleien</Link> oder
                    {' '}<Link href="/leistungen/webdesign-gastronomie">Restaurants</Link>.
                </p>
                <h3>Agentur</h3>
                <p>
                    Sinnvoll bei mehreren Sprachen und Standorten, bei komplexen Portalen und Shops, bei Konzern-
                    Einkaufsprozessen und wenn intern niemand Zeit hat, ein Projekt zu begleiten. Sie zahlen für
                    Struktur und Redundanz und bekommen beides. Rechnen Sie mit längeren Wegen: Was ein Freelancer
                    am Telefon entscheidet, braucht in einer Agentur ein Ticket.
                </p>

                <h2>Woran Sie Qualität erkennen, unabhängig von der Größe</h2>
                <p>
                    Nach Jahren mit Übernahmeprojekten von anderen Dienstleistern sind es immer dieselben Merkmale,
                    die gute Arbeit von schlechter unterscheiden. Nicht das Portfolio, nicht die Bürogröße:
                </p>
                <ul>
                    <li>Die Ladezeit der eigenen Website. Wer bei sich selbst 8 Sekunden braucht, liefert Ihnen keine 1,5.</li>
                    <li>Konkrete Fragen zu Ihrem Geschäft im Erstgespräch statt Design-Geschmacksdiskussionen.</li>
                    <li>Ergebnisse in Referenzen, nicht nur Screenshots. Ein Beispiel: <Link href="/referenzen/blitz-hamburg">ROI in sieben Wochen bei Blitz Hamburg</Link>.</li>
                    <li>Ein Angebot, das Nicht-Leistungen benennt. Wer aufschreibt, was nicht enthalten ist, hat schon einmal ein Projekt zu Ende gebracht.</li>
                    <li>Bereitschaft, von einem Projekt abzuraten. Das ist das teuerste und ehrlichste Verkaufsargument, das es gibt.</li>
                </ul>

                <h2>Und wenn Sie sich falsch entscheiden?</h2>
                <p>
                    Dann ist das reparabel, solange Punkt drei und vier der Absicherungsliste erfüllt sind: Domain und
                    Konten gehören Ihnen. Alles andere lässt sich neu bauen, oft schneller als beim ersten Mal, weil
                    Inhalte und Struktur schon existieren. Der einzige wirklich teure Fehler ist der, bei dem ein
                    Dienstleister Ihre Domain hält und Sie beim Wechsel um Herausgabe bitten müssen.
                </p>
                <p>
                    Wenn Sie sich unsicher sind, welche Größenordnung Ihr Vorhaben überhaupt hat: Schicken Sie mir
                    Ihre Anforderungen. Ich sage Ihnen im kostenlosen Erstgespräch, ob das ein Freelancer-Projekt ist,
                    und wenn nicht, was es stattdessen braucht. Auch wenn die Antwort lautet, dass Sie eine Agentur
                    beauftragen sollten. Zum <Link href="/kontakt">Kontakt</Link> oder direkt zur Leistungsseite
                    {' '}<Link href="/leistungen/website-erstellen-lassen">Website erstellen lassen</Link>.
                </p>

                <div className="subpage-sources">
                    <h2>Quellen</h2>
                    <ol>
                        <li>freelancermap, Marktstudie Freelancer-Kompass 2025 und 2026: durchschnittlicher Stundensatz 104 bzw. 103 Euro im DACH-Raum, IT-Median rund 95 Euro. <a href="https://www.freelancermap.de/marktstudie" rel="nofollow noopener" target="_blank">freelancermap.de</a></li>
                        <li>§ 31 UrhG, Einräumung von Nutzungsrechten, Absatz 5 Zweckübertragungsregel. <a href="https://www.gesetze-im-internet.de/urhg/__31.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>§ 640 BGB, Abnahme beim Werkvertrag. <a href="https://www.gesetze-im-internet.de/bgb/__640.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        <li>DENIC, Domaininhaber und Ansprechpartner bei .de-Domains. <a href="https://www.denic.de/" rel="nofollow noopener" target="_blank">denic.de</a></li>
                        <li>Bundesverband Digitale Wirtschaft, Internetagentur-Ranking als Marktüberblick deutscher Digitalagenturen. <a href="https://www.bvdw.org/" rel="nofollow noopener" target="_blank">bvdw.org</a></li>
                    </ol>
                </div>
            </ArticleLayout>
            <FaqSection title="Häufige Fragen zu Agentur, Freelancer und Baukasten" items={faqItems} />
        </>
    );
}
