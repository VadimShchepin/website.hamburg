import Link from 'next/link';
import Breadcrumbs from '../../src/components/Breadcrumbs';

const SITE_URL = 'https://webseite.hamburg';

export const metadata = {
    title: 'Marketing Hub',
    description: 'Marketing Hub ist das interne Reporting-Werkzeug von AISEO Hamburg für Google Ads, Google Analytics 4 und die Google Search Console.',
    alternates: { canonical: `${SITE_URL}/marketing-hub` },
    robots: { index: false, follow: true },
};

const scopes = [
    {
        scope: 'https://www.googleapis.com/auth/adwords',
        art: 'Lesen und Schreiben',
        zweck: 'Kampagnen, Anzeigengruppen, Suchbegriffe, Kosten, Klicks und Conversions aus dem verknüpften Google Ads Konto auslesen und ausgewertete Offline-Conversions zurückspielen.',
    },
    {
        scope: 'https://www.googleapis.com/auth/analytics.readonly',
        art: 'Nur Lesen',
        zweck: 'Sitzungen, Kanäle, Seitenaufrufe und Conversions aus den freigegebenen Google Analytics 4 Properties abrufen.',
    },
    {
        scope: 'https://www.googleapis.com/auth/webmasters.readonly',
        art: 'Nur Lesen',
        zweck: 'Impressionen, Klicks, CTR und Positionen aus den freigegebenen Search Console Properties abrufen.',
    },
    {
        scope: 'https://www.googleapis.com/auth/datamanager',
        art: 'Nur Schreiben',
        zweck: 'Offline-Conversions (Anruf, WhatsApp-Klick, Formularabsendung) zusammen mit der zugehörigen Google Klick-ID an Google Ads übermitteln, damit die Gebotsstrategie mit echten Abschlüssen rechnet.',
    },
];

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Marketing Hub', item: `${SITE_URL}/marketing-hub` },
    ],
};

const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Marketing Hub',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'macOS, Linux',
    url: `${SITE_URL}/marketing-hub`,
    description: 'Internes Reporting-Werkzeug für Google Ads, Google Analytics 4 und die Google Search Console.',
    publisher: {
        '@type': 'Organization',
        name: 'AISEO Hamburg',
        url: SITE_URL,
    },
};

const cellStyle = {
    padding: '0.75rem',
    borderBottom: '1px solid var(--color-bg-gray2)',
    verticalAlign: 'top',
    textAlign: 'left',
};

const headCellStyle = { ...cellStyle, borderBottom: '2px solid var(--color-primary)' };

export default function MarketingHubPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Marketing Hub' }]} />
                    <h1 className="subpage-title">Marketing Hub</h1>
                    <p style={{ maxWidth: 720, marginTop: '1rem' }}>
                        Marketing Hub ist das interne Reporting-Werkzeug von AISEO Hamburg. Es liest die Leistungsdaten
                        der von uns betreuten Websites aus Google Ads, Google Analytics 4 und der Google Search Console
                        und fasst sie zu einem Bericht zusammen.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 820 }}>
                    <h2>Was die Anwendung macht</h2>
                    <p>
                        Wir betreuen für unsere Kunden Google Ads Konten, GA4 Properties und Search Console Properties.
                        Statt jede Oberfläche einzeln zu öffnen, holt Marketing Hub die Kennzahlen über die offiziellen
                        Google APIs ab und erzeugt daraus:
                    </p>
                    <ul>
                        <li>Wochen- und Monatsberichte je Property (Kosten, Klicks, CPC, CTR, Conversions, Kanäle, Rankings).</li>
                        <li>Auffälligkeitsprüfungen, die Veränderungen gegenüber dem Vorzeitraum markieren.</li>
                        <li>Textentwürfe für die Kundenkommunikation, die ein Mensch vor dem Versand freigibt.</li>
                        <li>Den Rückimport von Offline-Conversions nach Google Ads, damit die Gebotsstrategie mit echten Abschlüssen statt mit Seitenaufrufen rechnet.</li>
                    </ul>
                    <p>
                        Die Anwendung läuft als Kommandozeilenwerkzeug lokal auf den Rechnern von AISEO Hamburg. Es gibt
                        keine öffentliche Registrierung, keinen Mandantenbetrieb und keinen Server, auf dem Kundendaten
                        dauerhaft für Dritte bereitstehen.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>Wer die Anwendung nutzt</h2>
                    <p>
                        Nutzer sind ausschließlich Mitarbeiter von AISEO Hamburg sowie Kunden, die uns Zugriff auf ihre
                        eigenen Google Konten geben möchten. Beim ersten Start fragt Google Sie über den
                        Standard-Zustimmungsbildschirm, ob Sie den unten aufgeführten Zugriff erlauben. Ohne diese
                        Zustimmung erhält die Anwendung keinerlei Daten.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>Welche Google Berechtigungen angefragt werden</h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', marginTop: '1rem' }}>
                            <thead>
                                <tr>
                                    <th style={{ ...headCellStyle, width: '38%' }}>Berechtigung</th>
                                    <th style={{ ...headCellStyle, width: '17%' }}>Art</th>
                                    <th style={headCellStyle}>Wofür wir sie brauchen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scopes.map((row) => (
                                    <tr key={row.scope}>
                                        <td style={{ ...cellStyle, wordBreak: 'break-all', fontFamily: 'monospace', fontSize: '0.85rem' }}>{row.scope}</td>
                                        <td style={cellStyle}>{row.art}</td>
                                        <td style={cellStyle}>{row.zweck}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p style={{ marginTop: '1rem' }}>
                        Wir fragen nur diese vier Berechtigungen an. Die Anwendung greift nicht auf Gmail, Google Drive,
                        Kontakte, Kalender oder Standortdaten zu.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>Was mit den Daten passiert</h2>
                    <p>
                        Die abgerufenen Daten sind aggregierte Leistungskennzahlen von Werbekonten und Websites. Sie
                        werden lokal verarbeitet, in Berichte geschrieben und nicht an Dritte weitergegeben, nicht
                        verkauft, nicht für Werbung verwendet und nicht zum Training von KI-Modellen genutzt. Alle
                        Einzelheiten stehen in der{' '}
                        <Link href="/marketing-hub/datenschutz">Datenschutzerklärung für Marketing Hub</Link>.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>Zugriff widerrufen</h2>
                    <p>
                        Sie können die erteilte Zustimmung jederzeit selbst zurückziehen, unter{' '}
                        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                            myaccount.google.com/permissions
                        </a>
                        . Der Zugriff endet damit sofort. Auf Wunsch löschen wir zusätzlich alle bereits erzeugten
                        Berichte, schreiben Sie dazu an{' '}
                        <a href="mailto:hallo@webseite.hamburg">hallo@webseite.hamburg</a>.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>Rechtliches</h2>
                    <ul>
                        <li><Link href="/marketing-hub/datenschutz">Datenschutzerklärung für Marketing Hub</Link></li>
                        <li><Link href="/marketing-hub/nutzungsbedingungen">Nutzungsbedingungen für Marketing Hub</Link></li>
                        <li><Link href="/impressum">Impressum</Link></li>
                        <li><Link href="/datenschutz">Datenschutzerklärung der Website webseite.hamburg</Link></li>
                    </ul>

                    <h2 style={{ marginTop: '2.5rem' }}>Anbieter und Kontakt</h2>
                    <p>
                        Vadim Shchepin<br />
                        AISEO<br />
                        Hamburg, Deutschland<br />
                        E-Mail: <a href="mailto:hallo@webseite.hamburg">hallo@webseite.hamburg</a><br />
                        Telefon: <a href="tel:+4917632194754">+49 176 321 94 754</a>
                    </p>

                    <hr style={{ margin: '3rem 0 2rem', border: 0, borderTop: '1px solid var(--color-bg-gray2)' }} />

                    <h2>In English</h2>
                    <p>
                        Marketing Hub is an internal reporting tool operated by AISEO Hamburg (Vadim Shchepin, Hamburg,
                        Germany). It reads performance data from Google Ads, Google Analytics 4 and Google Search Console
                        for the websites we manage, turns that data into weekly and monthly reports, and uploads offline
                        conversions back into Google Ads so that bidding reflects real leads.
                    </p>
                    <p>
                        The application runs locally as a command line tool. It is not a public service and has no user
                        registration. Data obtained through Google APIs is used only to produce these reports. It is
                        never sold, never shared with third parties, never used for advertising and never used to train
                        AI models. See the{' '}
                        <Link href="/marketing-hub/datenschutz">privacy policy</Link> and the{' '}
                        <Link href="/marketing-hub/nutzungsbedingungen">terms of service</Link>.
                    </p>
                </div>
            </section>
        </>
    );
}
