import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';

const SITE_URL = 'https://webseite.hamburg';
const STAND = '8. September 2026';

export const metadata = {
    title: 'Datenschutzerklärung Marketing Hub',
    description: 'Datenschutzerklärung für die Anwendung Marketing Hub von AISEO Hamburg: welche Google Daten verarbeitet werden, wofür, wie lange und wie Sie den Zugriff widerrufen.',
    alternates: { canonical: `${SITE_URL}/marketing-hub/datenschutz` },
    robots: { index: false, follow: true },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Marketing Hub', item: `${SITE_URL}/marketing-hub` },
        { '@type': 'ListItem', position: 3, name: 'Datenschutz', item: `${SITE_URL}/marketing-hub/datenschutz` },
    ],
};

export default function MarketingHubDatenschutzPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Marketing Hub', href: '/marketing-hub' },
                            { label: 'Datenschutz' },
                        ]}
                    />
                    <h1 className="subpage-title">Datenschutzerklärung Marketing Hub</h1>
                    <p style={{ marginTop: '1rem' }}>Stand: {STAND}</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 760 }}>
                    <h2>1. Geltungsbereich</h2>
                    <p>
                        Diese Datenschutzerklärung gilt für die Anwendung <strong>Marketing Hub</strong>, ein internes
                        Reporting-Werkzeug von AISEO Hamburg. Sie beschreibt, welche Daten die Anwendung über die Google
                        APIs verarbeitet, zu welchem Zweck, wo sie gespeichert werden und wie Sie den Zugriff jederzeit
                        beenden können. Was die Anwendung tut, steht auf der{' '}
                        <Link href="/marketing-hub">Übersichtsseite</Link>.
                    </p>
                    <p>
                        Für den Besuch der Website webseite.hamburg gilt separat die{' '}
                        <Link href="/datenschutz">allgemeine Datenschutzerklärung</Link>.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>2. Verantwortlicher</h2>
                    <p>
                        Vadim Shchepin<br />
                        AISEO<br />
                        Hamburg, Deutschland<br />
                        E-Mail: <a href="mailto:hallo@webseite.hamburg">hallo@webseite.hamburg</a><br />
                        Telefon: <a href="tel:+4917632194754">+49 176 321 94 754</a>
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>3. Welche Daten verarbeitet werden</h2>
                    <h3>3.1 Zugangsdaten aus Google OAuth</h3>
                    <p>
                        Wenn Sie der Anwendung im Google Zustimmungsbildschirm den Zugriff erlauben, erhält sie ein
                        Aktualisierungstoken (Refresh Token) und daraus abgeleitete kurzlebige Zugriffstoken. Diese Token
                        identifizieren die Berechtigung, nicht Ihre Person. Wir speichern kein Google Passwort und
                        erhalten keines.
                    </p>

                    <h3 style={{ marginTop: '1.5rem' }}>3.2 Berichtsdaten aus Google Ads, GA4 und Search Console</h3>
                    <p>Die Anwendung ruft ausschließlich aggregierte Leistungskennzahlen ab, unter anderem:</p>
                    <ul>
                        <li>Google Ads: Kampagnen, Anzeigengruppen, Suchbegriffe, Impressionen, Klicks, Kosten, CPC, Conversions.</li>
                        <li>Google Analytics 4: Sitzungen, Nutzerzahlen, Kanäle, Seitenaufrufe, Ereignisse, Conversions.</li>
                        <li>Google Search Console: Suchanfragen, Seiten, Impressionen, Klicks, CTR, durchschnittliche Position.</li>
                    </ul>
                    <p>
                        Diese Kennzahlen sind Zusammenfassungen über viele Nutzer. Die Anwendung fragt keine
                        Nutzerkennungen, keine Client-IDs, keine IP-Adressen und keine anderen personenbezogenen
                        Einzeldaten von Website-Besuchern ab.
                    </p>

                    <h3 style={{ marginTop: '1.5rem' }}>3.3 Offline-Conversions</h3>
                    <p>
                        Für den Rückimport von Abschlüssen nach Google Ads überträgt die Anwendung Ereignisse, die auf
                        der Website des jeweiligen Kunden ausgelöst wurden: Art des Ereignisses (Anruf, WhatsApp-Klick,
                        Formularabsendung), Zeitstempel und die Google Klick-ID (gclid), die Google beim Anzeigenklick
                        selbst vergeben hat. Es werden keine Namen, keine Telefonnummern, keine E-Mail-Adressen und keine
                        Nachrichteninhalte übertragen.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>4. Zweck und Rechtsgrundlage</h2>
                    <p>
                        Zweck ist die Erstellung von Leistungsberichten und die Steuerung von Werbekampagnen im Rahmen
                        unserer Betreuungsverträge. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Erfüllung eines
                        Vertrags mit dem jeweiligen Kunden) und, soweit es um die Auswertung eigener Konten geht,
                        Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Analyse der eigenen Marketingleistung).
                    </p>
                    <p>
                        Die Daten werden nicht für Profilbildung, nicht für automatisierte Entscheidungen mit
                        Rechtswirkung und nicht für Werbung gegenüber Endnutzern verwendet.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>5. Speicherung und Sicherheit</h2>
                    <ul>
                        <li>
                            Das Aktualisierungstoken liegt in einer lokalen Konfigurationsdatei auf dem Arbeitsrechner von
                            AISEO Hamburg. Die Datei ist nicht Teil eines öffentlichen Repositorys und wird nicht in eine
                            Cloud synchronisiert.
                        </li>
                        <li>Der Rechner ist mit Festplattenverschlüsselung und Passwortschutz gesichert.</li>
                        <li>
                            Abgerufene Kennzahlen werden als Berichtsdateien lokal abgelegt. Es gibt keine zentrale
                            Datenbank und keinen von außen erreichbaren Serverdienst, der diese Daten vorhält.
                        </li>
                        <li>Die Kommunikation mit den Google APIs erfolgt ausschließlich über HTTPS.</li>
                    </ul>

                    <h2 style={{ marginTop: '2.5rem' }}>6. Weitergabe an Dritte</h2>
                    <p>
                        Wir geben die über die Google APIs erhaltenen Daten nicht an Dritte weiter. Sie werden nicht
                        verkauft, nicht vermietet, nicht für Werbenetzwerke verwendet, nicht für Bonitäts- oder
                        Kreditzwecke genutzt und nicht zum Training von KI-Modellen eingesetzt.
                    </p>
                    <p>
                        Die einzige Übermittlung nach außen ist der unter Punkt 3.3 beschriebene Rückimport von
                        Offline-Conversions in dasselbe Google Ads Konto, aus dem die Daten stammen. Empfänger ist damit
                        wieder Google. Aufbereitete Berichte gehen ausschließlich an den Kunden, dessen Konten
                        ausgewertet wurden.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>7. Google API Services User Data Policy</h2>
                    <p>
                        Die Nutzung und Weitergabe von Informationen, die Marketing Hub über die Google APIs erhält,
                        richtet sich nach der{' '}
                        <a
                            href="https://developers.google.com/terms/api-services-user-data-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google API Services User Data Policy
                        </a>{' '}
                        einschließlich der Limited Use Anforderungen.
                    </p>
                    <p style={{ padding: '1rem', background: 'var(--color-bg-lightgray)', borderLeft: '3px solid var(--color-primary)' }}>
                        Marketing Hub&apos;s use and transfer of information received from Google APIs to any other app
                        will adhere to the{' '}
                        <a
                            href="https://developers.google.com/terms/api-services-user-data-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google API Services User Data Policy
                        </a>
                        , including the Limited Use requirements.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>8. Speicherdauer und Löschung</h2>
                    <ul>
                        <li>
                            Das Aktualisierungstoken wird gelöscht, sobald der Zugriff nicht mehr benötigt wird oder Sie
                            die Zustimmung widerrufen.
                        </li>
                        <li>
                            Berichte werden für die Dauer des Betreuungsverhältnisses aufbewahrt und danach innerhalb von
                            30 Tagen gelöscht, soweit keine handels- oder steuerrechtliche Aufbewahrungspflicht entgegensteht.
                        </li>
                        <li>
                            Auf schriftliche Anfrage löschen wir alle noch vorhandenen Daten innerhalb von 30 Tagen und
                            bestätigen die Löschung.
                        </li>
                    </ul>

                    <h2 style={{ marginTop: '2.5rem' }}>9. Zugriff widerrufen</h2>
                    <p>
                        Sie können den Zugriff jederzeit und ohne unsere Mitwirkung beenden. Öffnen Sie dazu{' '}
                        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                            myaccount.google.com/permissions
                        </a>
                        , wählen Sie Marketing Hub aus und entziehen Sie den Zugriff. Bestehende Token werden damit sofort
                        ungültig. Für die zusätzliche Löschung bereits erzeugter Berichte genügt eine E-Mail an{' '}
                        <a href="mailto:hallo@webseite.hamburg">hallo@webseite.hamburg</a>.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>10. Ihre Rechte</h2>
                    <p>
                        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                        Datenübertragbarkeit und Widerspruch gegen die Verarbeitung sowie das Recht, sich bei einer
                        Aufsichtsbehörde zu beschweren. Zuständig ist der Hamburgische Beauftragte für Datenschutz und
                        Informationsfreiheit. Wenden Sie sich für alle Anliegen an{' '}
                        <a href="mailto:hallo@webseite.hamburg">hallo@webseite.hamburg</a>.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>11. Änderungen dieser Erklärung</h2>
                    <p>
                        Wir passen diese Erklärung an, wenn sich die Anwendung oder die verarbeiteten Daten ändern. Es
                        gilt jeweils die auf dieser Seite veröffentlichte Fassung mit dem oben genannten Stand.
                    </p>

                    <hr style={{ margin: '3rem 0 2rem', border: 0, borderTop: '1px solid var(--color-bg-gray2)' }} />

                    <h2>English summary</h2>
                    <p>
                        Marketing Hub is an internal reporting tool operated by Vadim Shchepin, AISEO, Hamburg, Germany
                        (<a href="mailto:hallo@webseite.hamburg">hallo@webseite.hamburg</a>). With your consent it uses
                        four Google API scopes: <code>adwords</code>, <code>analytics.readonly</code>,{' '}
                        <code>webmasters.readonly</code> and <code>datamanager</code>.
                    </p>
                    <p>
                        It reads aggregated performance metrics (campaigns, cost, clicks, sessions, channels, queries,
                        impressions, positions) and writes offline conversion events (event type, timestamp and the
                        Google click identifier) back into the same Google Ads account. It does not request or store end
                        user identifiers, IP addresses, names, phone numbers or email addresses through these APIs, and
                        it does not access Gmail, Drive, Contacts, Calendar or location data.
                    </p>
                    <p>
                        Tokens and reports are stored locally on encrypted company machines. Data is never sold, never
                        shared with third parties, never used for advertising and never used to train AI models.
                    </p>
                    <p>
                        Marketing Hub&apos;s use and transfer of information received from Google APIs to any other app
                        will adhere to the{' '}
                        <a
                            href="https://developers.google.com/terms/api-services-user-data-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google API Services User Data Policy
                        </a>
                        , including the Limited Use requirements.
                    </p>
                    <p>
                        You can revoke access at any time at{' '}
                        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                            myaccount.google.com/permissions
                        </a>
                        . To request deletion of stored reports, email{' '}
                        <a href="mailto:hallo@webseite.hamburg">hallo@webseite.hamburg</a>; we delete within 30 days and
                        confirm in writing.
                    </p>
                </div>
            </section>
        </>
    );
}
