import Link from 'next/link';

export const metadata = {
    title: '404 - Seite nicht gefunden',
    description: 'Die angeforderte Seite wurde nicht gefunden.',
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
            <div className="container text-center">
                <h1 className="section-title">404</h1>
                <p className="large-text" style={{ marginBottom: '2rem' }}>
                    Diese Seite existiert nicht oder wurde verschoben.
                </p>
                <Link href="/" className="button button-primary button-large">
                    Zur Startseite
                </Link>
            </div>
        </section>
    );
}
