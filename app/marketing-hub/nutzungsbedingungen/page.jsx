import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';

const SITE_URL = 'https://webseite.hamburg';
const STAND = '8. September 2026';

export const metadata = {
    title: 'Nutzungsbedingungen Marketing Hub',
    description: 'Nutzungsbedingungen für die Anwendung Marketing Hub von AISEO Hamburg: Leistungsumfang, zulässige Nutzung, Verfügbarkeit, Haftung und Beendigung.',
    alternates: { canonical: `${SITE_URL}/marketing-hub/nutzungsbedingungen` },
    robots: { index: false, follow: true },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Marketing Hub', item: `${SITE_URL}/marketing-hub` },
        { '@type': 'ListItem', position: 3, name: 'Nutzungsbedingungen', item: `${SITE_URL}/marketing-hub/nutzungsbedingungen` },
    ],
};

export default function MarketingHubTermsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Marketing Hub', href: '/marketing-hub' },
                            { label: 'Nutzungsbedingungen' },
                        ]}
                    />
                    <h1 className="subpage-title">Nutzungsbedingungen Marketing Hub</h1>
                    <p style={{ marginTop: '1rem' }}>Stand: {STAND}</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 760 }}>
                    <h2>1. Anbieter und Geltungsbereich</h2>
                    <p>
                        Anbieter der Anwendung <strong>Marketing Hub</strong> ist Vadim Shchepin, AISEO, Hamburg,
                        Deutschland (nachfolgend Anbieter). Diese Nutzungsbedingungen regeln die Nutzung der
                        Anwendung durch Mitarbeiter des Anbieters und durch Kunden, die dem Anbieter Zugriff auf ihre
                        Google Konten erteilen (nachfolgend Nutzer). Vollständige Anbieterangaben stehen im{' '}
                        <Link href="/impressum">Impressum</Link>.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>2. Leistungsbeschreibung</h2>
                    <p>
                        Marketing Hub ruft über die offiziellen Google APIs Leistungskennzahlen aus Google Ads, Google
                        Analytics 4 und der Google Search Console ab, bereitet sie zu Berichten auf und überträgt
                        Offline-Conversions zurück in das jeweilige Google Ads Konto. Die Anwendung läuft als
                        Kommandozeilenwerkzeug lokal beim Anbieter. Es gibt keine öffentliche Registrierung und keinen
                        Zugang für die Allgemeinheit.
                    </p>
                    <p>
                        Die Anwendung ist ein Hilfsmittel für Auswertung und Kampagnensteuerung. Sie ersetzt keine
                        Rechts-, Steuer- oder Unternehmensberatung und trifft keine eigenständigen Entscheidungen über
                        Werbebudgets.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>3. Zugang über Google OAuth</h2>
                    <p>
                        Der Zugriff erfolgt ausschließlich nach ausdrücklicher Zustimmung im Google
                        Zustimmungsbildschirm. Der Nutzer sichert zu, dass er berechtigt ist, den Zugriff auf die
                        jeweiligen Google Ads Konten, GA4 Properties und Search Console Properties zu erteilen. Welche
                        Berechtigungen angefragt werden und wozu, steht auf der{' '}
                        <Link href="/marketing-hub">Übersichtsseite</Link>.
                    </p>
                    <p>
                        Zugangsdaten und Token sind vertraulich zu behandeln und dürfen nicht an Dritte weitergegeben
                        werden. Besteht der Verdacht eines unbefugten Zugriffs, ist der Anbieter unverzüglich zu
                        informieren und der Zugriff über das Google Konto zu entziehen.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>4. Zulässige Nutzung</h2>
                    <p>Untersagt ist insbesondere:</p>
                    <ul>
                        <li>der Zugriff auf Konten oder Daten, für die keine Berechtigung besteht;</li>
                        <li>jede Nutzung, die gegen die Nutzungsbedingungen von Google Ads, Google Analytics oder der Google Search Console verstößt;</li>
                        <li>die Umgehung von Ratenbegrenzungen, Sicherheitsmechanismen oder Kontingenten der Google APIs;</li>
                        <li>das Zurückentwickeln, Vervielfältigen oder Weiterverbreiten der Anwendung ohne schriftliche Zustimmung des Anbieters;</li>
                        <li>die Nutzung der abgerufenen Daten für Zwecke, die der Nutzer selbst nicht rechtmäßig verfolgen dürfte.</li>
                    </ul>

                    <h2 style={{ marginTop: '2.5rem' }}>5. Datenschutz</h2>
                    <p>
                        Welche Daten verarbeitet werden, zu welchem Zweck und wie lange, steht in der{' '}
                        <Link href="/marketing-hub/datenschutz">Datenschutzerklärung für Marketing Hub</Link>. Der
                        Anbieter hält sich bei der Verarbeitung von Daten aus den Google APIs an die Google API Services
                        User Data Policy einschließlich der Limited Use Anforderungen.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>6. Verfügbarkeit und Änderungen</h2>
                    <p>
                        Ein bestimmter Umfang an Verfügbarkeit wird nicht zugesichert. Die Anwendung hängt von den
                        Schnittstellen und Kontingenten von Google ab. Fallen diese aus, ändern sich oder werden sie
                        eingestellt, kann die Anwendung ganz oder teilweise nicht nutzbar sein. Der Anbieter darf
                        Funktionen ändern, ergänzen oder einstellen, ohne dass daraus ein Anspruch entsteht.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>7. Richtigkeit der Daten</h2>
                    <p>
                        Die Berichte geben die Werte wieder, die Google zum Zeitpunkt des Abrufs über die APIs
                        bereitstellt. Google berichtigt Kennzahlen teilweise rückwirkend, und die Attribution zwischen
                        Ads, Analytics und Search Console folgt unterschiedlichen Modellen. Abweichungen zwischen den
                        Berichten und den Google Oberflächen sind daher möglich. Der Anbieter übernimmt keine Gewähr für
                        die Vollständigkeit und Richtigkeit der von Google gelieferten Daten.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>8. Haftung</h2>
                    <p>
                        Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung des
                        Lebens, des Körpers oder der Gesundheit, bei arglistigem Verschweigen eines Mangels sowie nach
                        dem Produkthaftungsgesetz.
                    </p>
                    <p>
                        Bei einfacher Fahrlässigkeit haftet der Anbieter nur bei Verletzung einer wesentlichen
                        Vertragspflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst
                        ermöglicht und auf deren Einhaltung der Nutzer regelmäßig vertrauen darf. In diesem Fall ist die
                        Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt. Eine
                        weitergehende Haftung ist ausgeschlossen.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>9. Beendigung</h2>
                    <p>
                        Der Nutzer kann die Nutzung jederzeit beenden, indem er den Zugriff unter{' '}
                        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                            myaccount.google.com/permissions
                        </a>{' '}
                        entzieht. Der Anbieter kann den Zugang bei Verstößen gegen diese Bedingungen oder gegen
                        Google Richtlinien sperren. Nach Beendigung werden die gespeicherten Daten gemäß Punkt 8 der{' '}
                        <Link href="/marketing-hub/datenschutz">Datenschutzerklärung</Link> gelöscht.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>10. Änderungen dieser Bedingungen</h2>
                    <p>
                        Der Anbieter kann diese Nutzungsbedingungen ändern, etwa wenn sich der Funktionsumfang oder die
                        rechtlichen Rahmenbedingungen ändern. Es gilt jeweils die auf dieser Seite veröffentlichte
                        Fassung mit dem oben genannten Stand. Wesentliche Änderungen teilen wir aktiven Nutzern per
                        E-Mail mit.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>11. Anwendbares Recht und Gerichtsstand</h2>
                    <p>
                        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Ist der
                        Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches
                        Sondervermögen, ist Hamburg ausschließlicher Gerichtsstand. Gegenüber Verbrauchern bleiben die
                        gesetzlichen Gerichtsstände unberührt.
                    </p>
                    <p>
                        Sollte eine Bestimmung dieser Bedingungen unwirksam sein, bleibt die Wirksamkeit der übrigen
                        Bestimmungen unberührt.
                    </p>

                    <h2 style={{ marginTop: '2.5rem' }}>12. Kontakt</h2>
                    <p>
                        Vadim Shchepin<br />
                        AISEO<br />
                        Hamburg, Deutschland<br />
                        E-Mail: <a href="mailto:hallo@webseite.hamburg">hallo@webseite.hamburg</a><br />
                        Telefon: <a href="tel:+4917632194754">+49 176 321 94 754</a>
                    </p>

                    <hr style={{ margin: '3rem 0 2rem', border: 0, borderTop: '1px solid var(--color-bg-gray2)' }} />

                    <h2>English summary</h2>
                    <p>
                        Marketing Hub is provided by Vadim Shchepin, AISEO, Hamburg, Germany. It is an internal tool for
                        employees of the provider and for clients who grant access to their own Google accounts. There is
                        no public registration.
                    </p>
                    <p>
                        Access requires explicit consent through the Google consent screen, and the user warrants they are
                        entitled to grant access to the accounts in question. Users must not access accounts they are not
                        authorised for, must not breach the terms of Google Ads, Google Analytics or Google Search
                        Console, and must not circumvent API quotas or security controls.
                    </p>
                    <p>
                        No availability is guaranteed; the tool depends on Google APIs and quotas. Reports reproduce the
                        values Google returns at the time of the request, and Google restates some metrics retroactively,
                        so deviations from the Google interfaces are possible. Liability is unlimited for intent and gross
                        negligence, for injury to life, body or health and under the German Product Liability Act; for
                        simple negligence it is limited to breaches of essential contractual duties and to foreseeable,
                        contract typical damage.
                    </p>
                    <p>
                        Users may end the relationship at any time by revoking access at{' '}
                        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                            myaccount.google.com/permissions
                        </a>
                        . German law applies; the place of jurisdiction for merchants is Hamburg. Contact:{' '}
                        <a href="mailto:hallo@webseite.hamburg">hallo@webseite.hamburg</a>.
                    </p>
                </div>
            </section>
        </>
    );
}
