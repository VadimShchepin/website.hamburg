import Breadcrumbs from '../../src/components/Breadcrumbs';

const SITE_URL = 'https://webseite.hamburg';

export const metadata = {
    title: 'Impressum',
    description: 'Impressum von AISEO Hamburg - Vadim Shchepin, Webdesign & SEO.',
    alternates: { canonical: `${SITE_URL}/impressum` },
    robots: { index: false, follow: true },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Impressum', item: `${SITE_URL}/impressum` },
    ],
};

export default function ImpressumPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Impressum' }]} />
                    <h1 className="subpage-title">Impressum</h1>
                </div>
            </section>
            <section className="section">
                <div className="container" style={{ maxWidth: 720 }}>
                    <h2>Angaben gemass &sect; 5 DDG</h2>
                    <p>Vadim Shchepin<br />AISEO<br />Hamburg, Deutschland</p>

                    <h2 style={{ marginTop: '2rem' }}>Kontakt</h2>
                    <p>
                        Telefon: <a href="tel:+4917632194754">+49 176 321 94 754</a><br />
                        E-Mail: <a href="mailto:hallo@webseite.hamburg">hallo@webseite.hamburg</a>
                    </p>

                    <h2 style={{ marginTop: '2rem' }}>Umsatzsteuer-ID</h2>
                    <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />DE360369743</p>

                    <h2 style={{ marginTop: '2rem' }}>Steuernummer</h2>
                    <p>41/229/05131</p>

                    <h2 style={{ marginTop: '2rem' }}>Verantwortlich fur den Inhalt nach &sect; 18 Abs. 2 MStV</h2>
                    <p>Vadim Shchepin<br />Hamburg, Deutschland</p>

                    <h2 style={{ marginTop: '2rem' }}>EU-Streitschlichtung</h2>
                    <p>Die Europaische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
            </section>
        </>
    );
}
