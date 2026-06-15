import Breadcrumbs from '../../src/components/Breadcrumbs';

const SITE_URL = 'https://webseite.hamburg';

export const metadata = {
    title: 'Datenschutz',
    description: 'Datenschutzerklarung von AISEO Hamburg.',
    alternates: { canonical: `${SITE_URL}/datenschutz` },
    robots: { index: false, follow: true },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Datenschutz', item: `${SITE_URL}/datenschutz` },
    ],
};

export default function DatenschutzPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Datenschutz' }]} />
                    <h1 className="subpage-title">Datenschutzerklarung</h1>
                </div>
            </section>
            <section className="section">
                <div className="container" style={{ maxWidth: 720 }}>
                    <h2>1. Datenschutz auf einen Blick</h2>
                    <h3>Allgemeine Hinweise</h3>
                    <p>Die folgenden Hinweise geben einen einfachen Uberblick daruber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie personlich identifiziert werden konnen.</p>

                    <h2 style={{ marginTop: '2rem' }}>2. Verantwortliche Stelle</h2>
                    <p>Vadim Shchepin<br />AISEO<br />Hamburg, Deutschland<br />E-Mail: hallo@webseite.hamburg<br />Telefon: +49 176 321 94 754</p>

                    <h2 style={{ marginTop: '2rem' }}>3. Datenerfassung auf dieser Website</h2>
                    <h3>Kontaktformular</h3>
                    <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>

                    <h3>Server-Log-Dateien</h3>
                    <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns ubermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.</p>

                    <h2 style={{ marginTop: '2rem' }}>4. Hosting</h2>
                    <p>Diese Website wird bei Vercel Inc. gehostet. Details zum Datenschutz von Vercel finden Sie unter vercel.com/legal/privacy-policy.</p>

                    <h2 style={{ marginTop: '2rem' }}>5. Ihre Rechte</h2>
                    <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Loeschung und Einschrankung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenubertragbarkeit. Wenden Sie sich hierzu an: hallo@webseite.hamburg</p>
                </div>
            </section>
        </>
    );
}
