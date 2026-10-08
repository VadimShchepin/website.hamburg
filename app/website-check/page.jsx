import Link from 'next/link';
import '../../src/styles/bands-d.css';
import AutoLinks from '../../src/components/AutoLinks';
import Breadcrumbs from '../../src/components/Breadcrumbs';
import JumpNav from '../../src/components/JumpNav';
import FaqSection from '../../src/components/FaqSection';
import ServiceCta from '../../src/components/ServiceCta';
import WebsiteCheck from '../../src/components/WebsiteCheck';
import { BUSINESS } from '../../src/lib/schema';

const PAGE_URL = 'https://webseite.hamburg/website-check';

export const metadata = {
    title: 'Website-Check kostenlos: SEO und Ladezeit in 60 Sekunden',
    description: 'Kostenloser Website-Check: Server-Antwortzeit, Titel, Indexierung, Sitemap und mobile Darstellung Ihrer Seite in einer Minute geprüft. Ohne Anmeldung.',
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        siteName: 'webseite.hamburg',
        locale: 'de_DE',
        title: 'Website-Check kostenlos: SEO und Ladezeit in 60 Sekunden',
        description: 'Adresse eingeben, Ergebnis lesen: Antwortzeit, Technik und SEO-Grundlagen Ihrer Startseite, ohne Anmeldung.',
        url: PAGE_URL,
        type: 'website',
    },
};

const faqItems = [
    {
        q: 'Ist der Website-Check wirklich kostenlos?',
        a: 'Ja. Sie geben eine Adresse ein und sehen das Ergebnis sofort auf der Seite. Es gibt keine Anmeldung, keine E-Mail-Abfrage und keinen Bericht, der erst nach einem Anruf kommt. Gespeichert wird das Ergebnis nicht.',
    },
    {
        q: 'Was prüft der Check genau?',
        a: 'Er lädt die Startseite einmal von einem Server in Frankfurt und wertet die Antwort aus: Zeit bis zum ersten Byte, Weiterleitungen, Komprimierung, HTTPS, Größe des HTML und Zahl der eingebundenen Skripte. Dazu kommen die SEO-Grundlagen im Quelltext: Seitentitel, Meta-Beschreibung, H1, Sprachangabe, Canonical, noindex, strukturierte Daten, Alternativtexte, robots.txt und XML-Sitemap.',
    },
    {
        q: 'Warum zeigt der Check keine Core Web Vitals?',
        a: 'Weil LCP, INP und CLS nur in einem echten Browser oder aus echten Nutzerdaten gemessen werden können. Der Check lädt nur das HTML und führt kein JavaScript aus. Für die Core Web Vitals verlinkt das Ergebnis direkt auf PageSpeed Insights von Google, dort ist Ihre Adresse schon eingetragen.',
    },
    {
        q: 'Prüft der Check die ganze Website?',
        a: 'Nein, nur die Seite, deren Adresse Sie eingeben, meist die Startseite. Fehler auf Unterseiten, kaputte Links, doppelte Inhalte oder die Frage, für welche Suchbegriffe Sie gefunden werden, gehören in ein vollständiges Audit mit Zugriff auf die Google Search Console.',
    },
    {
        q: 'Ersetzt der Check eine rechtliche Prüfung?',
        a: 'Nein. Der Check zeigt nur einen Hinweis, wenn Schriften von Google-Servern geladen werden, weil das datenschutzrechtlich relevant ist. Impressum, Datenschutzerklärung, Cookie-Einwilligung und Barrierefreiheit prüft er nicht. Was dabei gilt, steht im Ratgeber zu Impressum und Datenschutzerklärung.',
    },
    {
        q: 'Was ist der Unterschied zum Website-Audit?',
        a: 'Der Check ist eine Maschine, die eine Seite in Sekunden abklopft. Das Website-Audit mache ich selbst: Ladezeit mit Lighthouse und Felddaten, Indexierung und Suchbegriffe in der Search Console, der Weg vom Besucher zur Anfrage und der Vergleich mit Ihren Wettbewerbern. Sie bekommen einen Bericht mit Prioritäten und ein Gespräch. Das Audit ist ebenfalls kostenlos.',
    },
];

export default function WebsiteCheckPage() {
    const appJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Kostenloser Website-Check',
        url: PAGE_URL,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        inLanguage: 'de',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        provider: BUSINESS,
        description: 'Prüft Server-Antwortzeit, Komprimierung, HTTPS und die SEO-Grundlagen einer Startseite in rund einer Minute.',
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Website-Check', item: PAGE_URL },
        ],
    };

    return (
        <>
            <AutoLinks path="/website-check">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section sxd-wc-hero">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Website-Check' }]} />
                    <div className="subpage-hero-split">
                        <div>
                            <p className="section-kicker animate-up">Kostenloses Werkzeug</p>
                            <h1 className="subpage-title animate-up">Kostenloser Website-Check: Wo steht Ihre Seite?</h1>
                            <p className="subpage-intro animate-up">
                                Adresse eingeben, eine Minute warten, Ergebnis lesen. Der Check misst, wie schnell Ihr Server
                                antwortet, und prüft die technischen SEO-Grundlagen Ihrer Startseite. Ohne Anmeldung, ohne
                                E-Mail-Adresse.
                            </p>
                        </div>
                        <div className="subpage-hero-media animate-up">
                            <img src="/website-check/hero-website-check.svg" alt="Illustration: Tachometer mit rotem Zeiger vor einem Browserfenster mit Prüfliste" width="1200" height="900" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section wc-section sxd-wc-tool">
                <div className="container">
                    <WebsiteCheck />
                </div>
            </section>

            <JumpNav label="Abschnitte" items={[
                { id: 'was-er-misst', num: '01', label: 'Was er misst' },
                { id: 'grenzen', num: '02', label: 'Was er nicht misst' },
                { id: 'audit', num: '03', label: 'Nächster Schritt' },
            ]} />

            <div className="sx-bands">
            <section id="was-er-misst" className="sx-band is-alt">
                <div className="container">
                    <div className="sx-band-head sxd-head-takeaway">
                        <h2 className="animate-up">Was der Check misst</h2>
                        <div className="subpage-takeaway animate-up">
                            <p>
                                <strong>Kurz gesagt:</strong> Der Check lädt Ihre Startseite einmal von einem Server in
                                Frankfurt und prüft 16 Punkte: Antwortzeit, Weiterleitungen, Komprimierung, HTTPS,
                                mobile Darstellung, Schriften von Google-Servern und die SEO-Grundlagen im Quelltext. Er
                                ersetzt keine Messung der Core Web Vitals und kein Audit, zeigt aber in einer Minute, ob die
                                Basis stimmt.
                            </p>
                        </div>
                    </div>
                    <div className="subpage-table-wrap animate-up">
                        <table className="subpage-table">
                            <thead>
                                <tr><th>Prüfpunkt</th><th>Was er bedeutet</th><th>Richtwert</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Server-Antwortzeit</th><td>Zeit bis zum ersten Byte der Startseite (Time to First Byte), gemessen aus Frankfurt</td><td>gut bis 0,8 s, schlecht über 1,8 s</td></tr>
                                <tr><th>Komprimierung</th><td>Ob der Server die Seite mit gzip oder Brotli verkleinert überträgt</td><td>aktiv</td></tr>
                                <tr><th>Weiterleitungen</th><td>Wie viele Umwege bis zur eigentlichen Seite nötig sind, etwa von http auf https und von www auf ohne</td><td>höchstens eine</td></tr>
                                <tr><th>HTML-Größe und Skripte</th><td>Wie viel Code die Startseite mitbringt und wie viele fremde Skripte sie lädt</td><td>Vergleichswert, kein Urteil</td></tr>
                                <tr><th>Seitentitel und Beschreibung</th><td>Was Google als Überschrift und Text im Suchergebnis zeigen kann</td><td>30 bis 65 und 70 bis 160 Zeichen</td></tr>
                                <tr><th>Indexierung</th><td>Ob ein noindex im Quelltext oder im HTTP-Header Google ausschließt</td><td>kein noindex</td></tr>
                                <tr><th>Struktur</th><td>Eine H1, Sprachangabe, Canonical, strukturierte Daten, Alternativtexte</td><td>vorhanden</td></tr>
                                <tr><th>robots.txt und Sitemap</th><td>Ob Suchmaschinen eine Liste Ihrer Seiten finden</td><td>beides vorhanden</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sx-band-text animate-up">
                        <p>
                            Die Schwellen für die Antwortzeit stammen von Google: web.dev nennt für die Time to First Byte
                            0,8 Sekunden als gut und mehr als 1,8 Sekunden als schlecht. Die Zeichenzahlen für Titel und
                            Beschreibung sind Erfahrungswerte, keine Regel von Google. Google schreibt selbst, dass es
                            keine feste Länge gibt und Titel im Suchergebnis je nach Gerätebreite gekürzt werden.
                        </p>
                    </div>
                </div>
            </section>

            <section id="grenzen" className="sx-band">
                <div className="container">
                    <div className="sx-band-head is-solo">
                        <h2 className="animate-up">Was der Check nicht misst</h2>
                    </div>
                    <ul className="sx-cards sxd-cards-five animate-up">
                        <li><strong>Core Web Vitals.</strong> LCP, INP und CLS entstehen erst im Browser. Dafür verlinkt das Ergebnis auf PageSpeed Insights.</li>
                        <li><strong>Unterseiten.</strong> Geprüft wird nur die eingegebene Adresse, keine ganze Website.</li>
                        <li><strong>Rankings und Suchbegriffe.</strong> Wofür Sie gefunden werden, steht nur in der Google Search Console.</li>
                        <li><strong>Inhalte und Anfragen.</strong> Ob Ihre Texte überzeugen und der Weg zur Anfrage funktioniert, kann keine Maschine bewerten.</li>
                        <li><strong>Recht.</strong> Impressum, Datenschutzerklärung, Cookie-Einwilligung und Barrierefreiheit nach dem BFSG bleiben außen vor.</li>
                    </ul>
                    <div className="sx-band-text animate-up">
                        <p>
                            Seiten, die ihre Inhalte erst per JavaScript nachladen, sieht der Check so, wie ein einfacher
                            Crawler sie sieht: möglicherweise leer. Das ist kein Fehler des Checks, sondern ein Hinweis,
                            dass Suchmaschinen und KI-Systeme dort ebenfalls weniger lesen, als Besucher sehen.
                        </p>
                    </div>
                </div>
            </section>

            <section id="audit" className="sx-band is-alt">
                <div className="container">
                    <div className="sx-band-head">
                        <h2 className="animate-up">Der nächste Schritt: das persönliche Audit</h2>
                        <p className="animate-up">
                            Wenn der Check rote Punkte zeigt oder Sie wissen wollen, warum Ihre Seite trotz grüner Haken
                            keine Anfragen bringt, schauen Sie beim{' '}
                            <Link href="/leistungen/website-audit">persönlichen Website-Audit</Link> genauer hin. Das mache
                            ich selbst, mit Lighthouse, Felddaten, der Search Console und einem Blick auf Ihre Wettbewerber.
                            Sie bekommen einen Bericht mit Prioritäten und ein Gespräch dazu, kostenlos und ohne
                            Verpflichtung. Wenn Ihre Seite gar nicht erst bei Google auftaucht, hilft vorab der Ratgeber{' '}
                            <Link href="/wissen/website-nicht-bei-google-gefunden">Website nicht bei Google gefunden</Link>.
                        </p>
                    </div>
                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>web.dev, Time to First Byte (TTFB): gut bis 0,8 Sekunden, schlecht über 1,8 Sekunden. <a href="https://web.dev/articles/ttfb" rel="nofollow noopener" target="_blank">web.dev/articles/ttfb</a></li>
                            <li>web.dev, Core Web Vitals: LCP, INP und CLS mit Schwellenwerten. <a href="https://web.dev/articles/vitals" rel="nofollow noopener" target="_blank">web.dev/articles/vitals</a></li>
                            <li>Google Search Central, Titellinks im Suchergebnis: keine feste Zeichenbegrenzung, Kürzung nach Gerätebreite. <a href="https://developers.google.com/search/docs/appearance/title-link" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                            <li>Google Search Central, noindex über Meta-Tag oder X-Robots-Tag. <a href="https://developers.google.com/search/docs/crawling-indexing/block-indexing" rel="nofollow noopener" target="_blank">developers.google.com</a></li>
                            <li>Google PageSpeed Insights für Labor- und Felddaten. <a href="https://pagespeed.web.dev/" rel="nofollow noopener" target="_blank">pagespeed.web.dev</a></li>
                        </ol>
                    </div>
                </div>
            </section>
            </div>

            <FaqSection title="Fragen zum Website-Check" items={faqItems} />
            <ServiceCta title="Mehr als ein Schnelltest?" text="Im persönlichen Website-Audit prüfe ich Ladezeit, Indexierung, Inhalte und den Weg zur Anfrage und sage Ihnen, was zuerst zu tun ist." />
            </AutoLinks>
        </>
    );
}
