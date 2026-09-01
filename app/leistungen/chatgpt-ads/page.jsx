import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'ChatGPT Ads schalten | Werbung in ChatGPT',
    description: 'ChatGPT Ads sind in Deutschland freigeschaltet. Ich schalte selbst seit dem Start und baue Ihre Kampagne auf: Setup ab 700 €, Betreuung ab 500 €/Monat.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/chatgpt-ads',
    },
    openGraph: {
        title: 'ChatGPT Ads schalten | Werbung in ChatGPT Deutschland',
        description: 'Werbung in ChatGPT für deutsche Unternehmen: Kampagnenaufbau im OpenAI Ads Manager, Pixel-Tracking, Landingpage. Ich schalte seit dem Start eigene Kampagnen.',
        url: 'https://webseite.hamburg/leistungen/chatgpt-ads',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Kann man in Deutschland schon ChatGPT Ads schalten?', a: 'Ja. Anzeigen laufen in ChatGPT für deutsche Nutzer seit dem 24. August 2026, und der Self-Service-Zugang zum OpenAI Ads Manager ist inzwischen freigeschaltet: In der offiziellen Verfügbarkeitsliste von OpenAI steht Deutschland auf „Available" (Stand 1. September 2026). Ein Vertriebsteam oder eine Partneragentur brauchen Sie dafür nicht mehr, ein Werbekonto genügt.' },
    { q: 'Was kosten ChatGPT Ads?', a: 'Drei getrennte Posten. Erstens Ihr Werbebudget, das direkt an OpenAI geht: abgerechnet wird pro 1.000 Impressionen (CPM) oder pro gültigem Klick (CPC), OpenAI empfiehlt für CPC-Kampagnen ein Start-Höchstgebot von 3 bis 5 US-Dollar pro Klick. Zweitens das Kampagnen-Setup ab 700 € einmalig. Drittens die laufende Betreuung ab 500 € pro Monat. Als Testbudget empfehle ich mindestens 500 € im Monat über zwei bis drei Monate, sonst reichen die Daten für eine Entscheidung nicht.' },
    { q: 'Wer sieht Anzeigen in ChatGPT?', a: 'Nur Nutzerinnen und Nutzer der Tarife Free und Go. Plus, Pro, Business, Enterprise und Edu bleiben werbefrei, und Konten, die laut Altersangabe oder Altersschätzung unter 18 Jahre alt sind, bekommen keine Anzeigen. Die Anzeige erscheint unterhalb der Antwort, klar als gesponsert gekennzeichnet und optisch von der Antwort getrennt.' },
    { q: 'Kann ich wie bei Google Ads Keywords buchen?', a: 'Nein, und das ist der wichtigste Unterschied. Auf Anzeigengruppen-Ebene hinterlegen Sie Kontext-Hinweise: Beschreibungen der Gespräche, Themen und Begriffe, in denen Ihr Angebot nützlich ist. OpenAI nutzt sie als Signal, nicht als Exact-Match-Keyword. Ausgespielt wird nach erwarteter Relevanz für die laufende Unterhaltung, entschieden in einer relevanzgewichteten Zweitpreisauktion.' },
    { q: 'Wie messe ich, ob sich das rechnet?', a: 'Über den OpenAI-Pixel, die Conversions API oder beides parallel mit gemeinsamer Event-ID, dazu UTM-Parameter auf der Landingpage für Ihre eigene Analytics. Der Ads Manager berichtet Impressionen, Klicks, Spend, CTR, durchschnittlichen CPC, durchschnittlichen CPM und Conversions. Genau dieses Setup baue ich mit auf, weil eine Kampagne ohne Conversion-Signal nicht nur blind ist, sondern bei conversion-optimierten Klick-Kampagnen auch schlechter ausgeliefert wird.' },
    { q: 'Was ist mit Datenschutz und Personalisierung im EWR?', a: 'Werbetreibende bekommen keinen Zugriff auf Konversationen, und OpenAI verkauft keine Nutzerdaten. Im Europäischen Wirtschaftsraum und in der Schweiz startet der Kanal ohne personalisierte Werbung auf Basis früherer Chats. Für die Auswahl zählen der Kontext der aktuellen Unterhaltung sowie grobe Signale wie Sprache und Region. Für Sie als Werbetreibenden heißt das: Ihre Anzeige gewinnt über Relevanz zum Gespräch, nicht über ein Nutzerprofil.' },
    { q: 'Ersetzen ChatGPT Ads meine Google Ads?', a: 'Nein. Google Ads bedienen den Moment, in dem jemand ein fertiges Suchwort eintippt und kaufen will. ChatGPT Ads erreichen Menschen davor, während sie Optionen vergleichen und Anforderungen sortieren. Sinnvoll ist die Kombination: Google Ads als Grundlast für planbare Anfragen, ChatGPT Ads als Testbudget in einem Kanal, in dem die Klickpreise noch nicht durch Wettbewerb hochgetrieben sind.' },
    { q: 'Lohnt sich das für ein kleines Unternehmen?', a: 'Es hängt am Auftragswert. Bei Klickpreisen im mittleren bis hohen einstelligen Dollarbereich kostet eine Anfrage schnell 50 bis 100 €. Für eine Beratung, eine Sanierung, eine Software oder ein Projekt mit vierstelligem Wert trägt sich das. Für ein Produkt mit 40 € Marge nicht. Im Kurzcheck rechne ich das mit Ihren Zahlen durch und sage Ihnen ehrlich, wenn Google Ads oder Ihre Landingpage der bessere erste Euro sind.' },
    { q: 'Gehört das Werbekonto mir?', a: 'Ja, zu 100 %. Das Ads-Manager-Konto läuft auf Ihr Unternehmen, Ihre Zahlungsdaten, Ihre Daten. Sie sehen jeden Cent in Echtzeit und behalten Kampagnen, Kreative und Historie, auch wenn Sie die Zusammenarbeit beenden.' },
];

export default function ChatGptAdsPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'ChatGPT Ads Management (OpenAI Ads Manager)',
        serviceType: 'ChatGPT Ads Kampagnenmanagement',
        provider: BUSINESS,
        areaServed: [
            { '@type': 'City', name: 'Hamburg' },
            { '@type': 'Country', name: 'Deutschland' },
        ],
        url: 'https://webseite.hamburg/leistungen/chatgpt-ads',
        description: 'Werbung in ChatGPT für deutsche Unternehmen: Aufbau und Betreuung von Kampagnen im OpenAI Ads Manager, Conversion-Tracking über Pixel und Conversions API, Landingpage und Reporting.',
        offers: [
            { '@type': 'Offer', name: 'Kampagnen-Setup ChatGPT Ads', price: '700', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Laufende Betreuung', price: '500', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'Monat' } },
        ],
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'ChatGPT Ads', item: 'https://webseite.hamburg/leistungen/chatgpt-ads' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: 'ChatGPT Ads' }]} />
                    <div className="subpage-hero-split">
                        <div>
                            <p className="section-kicker animate-up">Neu in Deutschland</p>
                            <h1 className="subpage-title animate-up">ChatGPT Ads schalten, bevor Ihr Wettbewerb den Kanal kennt.</h1>
                            <p className="subpage-intro animate-up">
                                Seit dem 24. August 2026 sehen Menschen in Deutschland Anzeigen in ChatGPT. Seit Anfang September ist der OpenAI Ads Manager hier auch im Self-Service buchbar. Ich schalte seit dem Start eigene Kampagnen darin, mit eigenem Geld, und baue sie jetzt für Unternehmen auf, die den Vorsprung mitnehmen wollen.
                            </p>
                            <ServiceMeta />
                        </div>
                        <div className="subpage-hero-media hero-media-framed animate-up">
                            <img src="/leistungen/fotos/chatgpt-ads-manager.webp" alt="Screenshot des OpenAI Ads Manager Beta mit zwei aktiven Kampagnen und Anzeigenvorschau" width="1464" height="808" fetchPriority="high" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was sind ChatGPT Ads?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p><strong>ChatGPT Ads</strong> sind bezahlte Anzeigen, die unterhalb einer ChatGPT-Antwort erscheinen, klar als gesponsert gekennzeichnet und vom Antworttext getrennt. Ausgespielt werden sie nur an Nutzer der Tarife Free und Go, abgerechnet pro 1.000 Impressionen (CPM) oder pro Klick (CPC). In Deutschland laufen sie seit dem 24. August 2026; den Ads Manager können deutsche Unternehmen seit Anfang September 2026 selbst buchen.</p>
                    </div>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">24.08.2026</span>
                            <span className="subpage-stat-label">Seitdem laufen Anzeigen in ChatGPT für deutsche Free- und Go-Nutzer</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">3–5 $</span>
                            <span className="subpage-stat-label">Start-Höchstgebot pro Klick, das OpenAI selbst für CPC-Kampagnen empfiehlt</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">0</span>
                            <span className="subpage-stat-label">Branchen-Benchmarks. Wer jetzt startet, baut die eigenen und weiß mehr als der Markt</span>
                        </div>
                    </div>

                    <div className="subpage-story animate-up">
                        <span className="subpage-story-label">Aus der Praxis</span>
                        <p>In meinem eigenen Ads-Manager-Konto laufen zwei Kampagnen: eine für meine Agenturleistungen, eine für den AI Visibility Check. Ich teste damit auf eigene Rechnung, welche Kontext-Hinweise überhaupt Auslieferung erzeugen, ab welchem Gebot eine Anzeige in die Auktion kommt und wie sauber der Pixel Conversions zurückmeldet.</p>
                        <p>Belastbare Branchen-Benchmarks gibt es für diesen Kanal noch nicht, auch OpenAI veröffentlicht keine. Wer Ihnen heute exakte Klickpreise für Ihre Branche verspricht, rät. Ich sage Ihnen stattdessen, was ich in meinen eigenen Konten sehe, und baue Ihre Kampagne so, dass sie nach vier Wochen eine belastbare Antwort liefert.</p>
                    </div>

                    <figure className="subpage-figure animate-up">
                        <img src="/leistungen/fotos/chatgpt-ads-anzeige-live.webp" alt="Anzeigenvorschau aus dem OpenAI Ads Manager: Bild, Absendername, Anzeigen-Label, Titel und Beschreibung" width="732" height="274" loading="lazy" decoding="async" />
                        <figcaption>Eine meiner eigenen Anzeigen in der Vorschau: Bild, Absendername, klares Anzeigen-Label, Titel, Beschreibung.</figcaption>
                    </figure>

                    <h2 className="animate-up">Warum genau jetzt der richtige Moment ist</h2>
                    <p className="animate-up">Jeder Werbekanal hat ein Zeitfenster, in dem die Klicks billig und die Aufmerksamkeit groß sind. Bei Google lag es um 2005, bei Facebook um 2014, bei TikTok um 2020. Wer damals dabei war, hat für Jahre günstiger eingekauft als alle, die später kamen. Genau dieses Fenster ist in Deutschland gerade aufgegangen.</p>
                    <p className="animate-up">Der Grund ist die Auktionsmechanik: OpenAI wählt Anzeigen in einer relevanzgewichteten Zweitpreisauktion aus. Ihr Gebot muss sich also nur gegen die durchsetzen, die mitbieten. Solange die großen Media-Budgets noch nicht umgeschichtet sind, entscheidet vor allem, wie gut Ihre Anzeige zum Gespräch passt. Das ändert sich, sobald die Konzerne den Kanal in ihre Mediapläne aufnehmen.</p>
                    <p className="animate-up">Dazu kommt die Position im Kaufprozess. In der Google-Suche tippen Menschen ein fertiges Stichwort. In ChatGPT beschreiben sie ihre Lage: Budget, Zeitrahmen, Anforderungen, Bedenken. Sie sind mitten in der Entscheidung, nicht am Ende. Wer dort mit einem passenden Angebot auftaucht, prägt die Auswahl, statt am Schluss um den letzten Klick zu bieten.</p>

                    <figure className="subpage-figure is-band animate-up">
                        <img src="/leistungen/fotos/chatgpt-ads-anzeige.webp" alt="Illustration: eine KI-Antwortkarte, darunter abgetrennt eine rot hervorgehobene gesponserte Anzeige mit Bild und Link, auf die ein Mauszeiger klickt" width="1800" height="760" loading="lazy" decoding="async" />
                        <figcaption>Die Anzeige steht unter der Antwort, nicht darin. OpenAI trennt beides bewusst, und Werbung beeinflusst die Antwort nicht.</figcaption>
                    </figure>

                    <h2 className="animate-up">ChatGPT Ads auf einen Blick</h2>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr><th>Merkmal</th><th>Stand September 2026</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Platzierung</th><td>Unterhalb der ChatGPT-Antwort, als gesponsert gekennzeichnet, optisch getrennt</td></tr>
                                <tr><th>Reichweite</th><td>Nur Tarife Free und Go; Plus, Pro, Business, Enterprise und Edu bleiben werbefrei</td></tr>
                                <tr><th>Anzeigenformat</th><td>Absendername, Favicon, Titel, Beschreibung, Bild, Landingpage</td></tr>
                                <tr><th>Abrechnung</th><td>CPM (Ziel Reichweite) oder CPC (Ziel Klicks), Höchstgebot je Anzeigengruppe</td></tr>
                                <tr><th>Auktion</th><td>Relevanzgewichtete Zweitpreisauktion, Relevanz zählt neben dem Gebot</td></tr>
                                <tr><th>Targeting</th><td>Kontext der laufenden Unterhaltung, Kontext-Hinweise, Geo-Targeting, Custom Audiences. Keine Exact-Match-Keywords</td></tr>
                                <tr><th>Budget</th><td>Tagesbudget als Durchschnitt über sieben Tage, maximal das Doppelte an einem Tag</td></tr>
                                <tr><th>Messung</th><td>OpenAI-Pixel, Conversions API, UTM-Parameter; Reporting mit Impressionen, Klicks, CTR, CPC, CPM, Conversions</td></tr>
                                <tr><th>EWR</th><td>Zum Start keine personalisierte Werbung auf Basis früherer Chats</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="animate-up">ChatGPT Ads oder Google Ads?</h2>
                    <p className="animate-up">Die Frage stellt sich falsch herum. Die beiden Kanäle greifen an verschiedenen Punkten der Entscheidung an, und wer heute nur einen davon nutzt, verschenkt entweder Volumen oder Vorsprung.</p>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr><th></th><th>ChatGPT Ads</th><th>Google Ads</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Auslöser</th><td>Kontext und Absicht des laufenden Gesprächs</td><td>Das eingetippte Keyword</td></tr>
                                <tr><th>Phase</th><td>Recherchieren, vergleichen, abwägen</td><td>Entschieden, jetzt kaufen oder anfragen</td></tr>
                                <tr><th>Wettbewerb in Deutschland</th><td>Seit wenigen Tagen offen, dünn besetzt</td><td>Seit über 20 Jahren, voll besetzt</td></tr>
                                <tr><th>Benchmarks</th><td>Existieren noch nicht</td><td>Für jede Branche verfügbar</td></tr>
                                <tr><th>Steuerung</th><td>Kontext-Hinweise, Geo, Custom Audiences</td><td>Keywords, Match Types, Gebotsstrategien</td></tr>
                                <tr><th>Rolle im Marketing</th><td>Testbudget mit Lernvorsprung</td><td>Grundlast für planbare Anfragen</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="animate-up">Meine Empfehlung für die meisten Unternehmen: <Link href="/leistungen/google-ads">Google Ads</Link> laufen weiter als verlässliche Anfragequelle, ChatGPT Ads bekommen ein klar begrenztes Testbudget. Und weil in ChatGPT auch die unbezahlte Antwort zählt, gehört <Link href="/leistungen/ai-seo">AI SEO</Link> daneben: Anzeigen kaufen Sie, Erwähnungen in der Antwort verdienen Sie sich.</p>

                    <figure className="subpage-figure is-band animate-up">
                        <img src="/leistungen/fotos/chatgpt-ads-kontext.webp" alt="Illustration: Sprechblasen fließen durch einen Trichter in ein Dashboard mit Balkendiagramm und Gebotsanzeige" width="1800" height="760" loading="lazy" decoding="async" />
                        <figcaption>Statt Keywords beschreiben Sie Gesprächssituationen. Die Auktion entscheidet dann über Relevanz und Gebot.</figcaption>
                    </figure>

                    <h2 className="animate-up">Für wen sich der Einstieg jetzt lohnt</h2>
                    <div className="rule-cols animate-up">
                        <div className="rule-col">
                            <h3>Jetzt testen</h3>
                            <ul>
                                <li>Erklärungsbedürftige Leistungen, die Menschen vorher vergleichen: Beratung, Software, Bauen, Sanieren, Reisen</li>
                                <li>Angebote mit vierstelligem Auftragswert, die einen Klickpreis im einstelligen Dollarbereich tragen</li>
                                <li>B2B-Anbieter, deren Kunden Anforderungen erst sortieren, bevor sie ein Suchwort haben</li>
                                <li>Shops mit sauberem Produktfeed, denn feedbasierte Kampagnen sind im Ads Manager möglich</li>
                                <li>Marken, die im KI-Kanal vorkommen wollen, solange Sichtbarkeit dort noch günstig ist</li>
                            </ul>
                        </div>
                        <div className="rule-col rule-no">
                            <h3>Noch warten</h3>
                            <ul>
                                <li>Produkte mit kleiner Marge und niedrigem Warenkorb, die den Klickpreis nicht tragen</li>
                                <li>Gesundheit und Politik: In sensiblen Kontexten werden keine Anzeigen ausgespielt</li>
                                <li>Wer kein Testbudget über mehrere Wochen hat, denn unter ein paar hundert Euro entsteht keine Aussage</li>
                                <li>Wer noch keine überzeugende Landingpage hat: Erst die Seite, dann der Klick</li>
                                <li>Lokale Notdienste mit sofortigem Bedarf. Dort bleibt die Google-Suche der bessere erste Euro</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Was ich für Sie übernehme</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Konto und Kampagnenaufbau</h3>
                            <p>Ads-Manager-Konto auf Ihren Namen, Kampagnenstruktur, Ziel (Reichweite oder Klicks), Gebotslogik und Budgetpacing. Inklusive der Fallen, etwa dass das Tagesbudget ein Sieben-Tage-Durchschnitt ist und an einem Tag doppelt ausgegeben werden kann.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Kontext-Hinweise statt Keywords</h3>
                            <p>Der eigentliche Hebel. Ich beschreibe die Gespräche, Fragen und Situationen, in denen Ihr Angebot die nützliche Antwort ist, und schärfe diese Hinweise nach, bis die Auslieferung zur Zielgruppe passt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Anzeigen und Bild-Assets</h3>
                            <p>Titel, Beschreibung, Favicon und Bild. In einem Umfeld, das aus Text besteht, entscheidet das Bild über den Blick und der Titel über den Klick. Mehrere Varianten laufen gegeneinander, statt dass eine Variante hofft.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Conversion-Tracking</h3>
                            <p>OpenAI-Pixel und Conversions API mit gemeinsamer Event-ID, dazu UTM-Parameter für GA4. Ohne dieses Signal kann eine conversion-optimierte Kampagne nicht lernen und liefert messbar schlechter aus.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Landingpage, die den Klick trägt</h3>
                            <p>Ein Klick aus ChatGPT ist teuer erkauft und kommt aus einem Gespräch. Die Zielseite muss diesen Gedanken aufnehmen, statt auf der Startseite zu enden. Wenn nötig, baue ich sie mit, siehe <a href="/leistungen/conversion-optimierung">Conversion-Optimierung</a>.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Steuerung und Report</h3>
                            <p>Wöchentliche Anpassung von Geboten, Hinweisen und Kreativen, monatlicher Report mit Spend, CTR, CPC und Kosten pro Anfrage. Dazu eine klare Empfehlung, ob der Kanal für Sie ausgebaut oder gestoppt gehört.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Preise</h2>
                    <p className="animate-up">Der Aufbau wird einmalig abgerechnet, die Betreuung monatlich. Ihr Werbebudget läuft separat über Ihr eigenes OpenAI-Konto, nicht über meins.</p>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>Kampagnen-Setup</h3>
                            <div className="sp-price-value">ab 700 &euro;</div>
                            <p>Einmalig. Danach steht ein sauber aufgesetztes, messbares Konto, auch wenn Sie es selbst weiterführen wollen.</p>
                            <ul className="sp-price-includes">
                                <li>Ads-Manager-Konto und Kampagnenstruktur</li>
                                <li>Kontext-Hinweise, Geo-Targeting, Gebotsstrategie</li>
                                <li>Anzeigentexte und Bild-Assets</li>
                                <li>Pixel und Conversions API inklusive Test</li>
                                <li>Empfehlungen zur Landingpage</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Laufende Betreuung</h3>
                            <div className="sp-price-value">ab 500 &euro;/Monat</div>
                            <p>Monatlich kündbar. Werbebudget kommt separat dazu, die Höhe bestimmen Sie.</p>
                            <ul className="sp-price-includes">
                                <li>Wöchentliche Optimierung von Geboten, Hinweisen und Anzeigen</li>
                                <li>Laufende Kreativ- und Landingpage-Tests</li>
                                <li>Monatlicher Report mit Spend, CTR, CPC, Conversions</li>
                                <li>Ihr Konto, Ihre Daten, voller Zugang</li>
                            </ul>
                        </div>
                    </div>
                    <p className="animate-up">Empfohlenes Testbudget: mindestens 500 € pro Monat über zwei bis drei Monate. Ein Hinweis, der das Rechenexempel gerade angenehmer macht: OpenAI wirbt auf ads.openai.com aktuell mit 500 US-Dollar Startguthaben für neue Werbekonten, wenn Sie 500 US-Dollar ausgeben (Stand 1. September 2026, ohne Gewähr für die Laufzeit des Angebots).</p>

                    <h2 className="animate-up">In einer Woche live</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Kurzcheck, 20 Minuten</strong><p>Wir rechnen mit Ihren Zahlen: Auftragswert, Marge, realistischer Klickpreis. Wenn sich der Kanal für Sie nicht trägt, sage ich das im Gespräch. Kostenlos.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Konto und Tracking</strong><p>Ads-Manager-Konto auf Ihren Namen, Pixel und Conversions API auf Ihrer Website, Test mit echten Events, bevor der erste Euro fließt.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Kampagne live</strong><p>Kampagnenstruktur, Kontext-Hinweise, mehrere Anzeigenvarianten, kontrolliertes Budget. In der Regel innerhalb einer Woche nach Freigabe.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Lernen und nachsteuern</strong><p>Wöchentlich Gebote und Hinweise nachziehen, nach vier Wochen die ehrliche Bilanz: ausbauen, umbauen oder stoppen.</p></div></div>
                    </div>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>OpenAI Help Center, „Ads Manager Availability": Deutschland als Self-Service verfügbar, abgerufen am 1. September 2026. <a href="https://help.openai.com/en/articles/20001245-ads-manager-availability" rel="nofollow noopener" target="_blank">help.openai.com</a></li>
                            <li>OpenAI, „ChatGPT Ads expands across Europe", 18. August 2026: 31 europäische Märkte inklusive Deutschland, Anzeigen nur in Free und Go, zehntausende Werbetreibende weltweit. <a href="https://openai.com/index/chatgpt-ads-expands-across-europe/" rel="nofollow noopener" target="_blank">openai.com</a></li>
                            <li>OpenAI Help Center, „Ads in ChatGPT: The Basics": Anzeigenformat, CPM und CPC, empfohlenes Start-Höchstgebot von 3 bis 5 US-Dollar pro Klick, relevanzgewichtete Zweitpreisauktion, Reporting-Kennzahlen. <a href="https://help.openai.com/en/articles/20001207-ads-in-chatgpt-the-basics" rel="nofollow noopener" target="_blank">help.openai.com</a></li>
                            <li>OpenAI Help Center, „Anzeigen in ChatGPT": Platzierung unterhalb der Antwort, Kennzeichnung, keine Anzeigen in Plus, Pro, Business, Enterprise und Edu sowie für Konten unter 18 Jahren. <a href="https://help.openai.com/de-de/articles/20001047-ads-in-chatgpt" rel="nofollow noopener" target="_blank">help.openai.com</a></li>
                            <li>OpenAI Help Center, „Daily Budgets": Tagesbudget als Durchschnitt über sieben Tage, maximal doppelter Tagesbetrag an einem Tag. <a href="https://help.openai.com/en/articles/20001413-daily-budgets" rel="nofollow noopener" target="_blank">help.openai.com</a></li>
                            <li>OpenAI Developers, Ads-Dokumentation: Measurement Pixel, Conversions API, Advertiser API, Geo-Targeting, Custom Audiences, conversion-optimierte Kampagnen. <a href="https://developers.openai.com/ads" rel="nofollow noopener" target="_blank">developers.openai.com/ads</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Fragen zu ChatGPT Ads" items={faqItems} />
            <RelatedServices exclude="chatgpt-ads" />
            <ServiceCta text="20 Minuten, Ihre Zahlen, eine klare Antwort: Trägt sich ChatGPT Ads für Ihr Angebot oder nicht? Kostenlos und ohne Verpflichtung." />
        </>
    );
}
