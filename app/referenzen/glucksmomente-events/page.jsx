import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import ServiceCta from '../../../src/components/ServiceCta';

const SITE_URL = 'https://webseite.hamburg';
const PAGE_URL = `${SITE_URL}/referenzen/glucksmomente-events`;

export const metadata = {
    title: 'Glucksmomente Events Case Study | Event-Website mit Aquarell-Asthetik',
    description: 'Individuelle Event-Website fur Josy Eberlein in Hamburg. React + GSAP Scroll-Animationen, Aquarell-Design, mobile-optimiert.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Glucksmomente Events | Event-Website mit Herz und GSAP',
        description: 'React + GSAP: Individuelle Event-Website mit Aquarell-Asthetik und Scroll-Animationen.',
        url: PAGE_URL,
        type: 'article',
    },
};

export default function GlucksmomenteCaseStudy() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Glucksmomente Events: Eine Website, die nach Aquarell riecht',
        description: 'Case Study: Event-Website mit React, GSAP und Aquarell-Design.',
        url: PAGE_URL,
        datePublished: '2026-04-03',
        dateModified: '2026-04-03',
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: `${SITE_URL}/ueber-uns` },
        publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: PAGE_URL,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Referenzen', item: `${SITE_URL}/referenzen` },
            { '@type': 'ListItem', position: 3, name: 'Glucksmomente Events', item: PAGE_URL },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Referenzen', href: '/referenzen' },
                        { label: 'Glucksmomente Events' },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">CASE STUDY</span>
                        <span className="wissen-card-time">Webdesign</span>
                    </div>
                    <h1 className="subpage-title animate-up">
                        Glucksmomente Events: Eine Website, die so warmherzig ist wie die Frau dahinter.
                    </h1>
                    <p className="subpage-intro animate-up">
                        Josy plant Hochzeiten, Geburtstage und Events in Hamburg. Ihre Website musste genau das ausstrahlen: Warme, Kreativitat und Professionalitat. Kein Template von der Stange. Eine Website, die nach Aquarell riecht, wenn Websites riechen konnten.
                    </p>
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> &middot; 3. April 2026
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Die Aufgabe</h2>
                    <p className="animate-up">
                        Josy Eberlein ist Eventplanerin in Hamburg. Hochzeiten, private Feiern, Firmenevents. Sie hat Geschmack, sie hat Erfahrung, und sie hatte keine Website. In einer Branche, in der Vertrauen alles ist, ist das ein Problem. Denn bevor jemand eine Hochzeit fur 20.000 Euro plant, schaut er sich die Website an. Und wenn es keine gibt, bucht er jemand anderen.
                    </p>
                    <p className="animate-up">
                        Die Anforderung: Eine Website, die Josys Personlichkeit widerspiegelt. Nicht &bdquo;modern und minimalistisch&ldquo; im Sinne von &bdquo;weisser Hintergrund mit Stock-Fotos&ldquo;. Sondern wirklich warmherzig. Kunstlerisch. Wie eine handgeschriebene Einladung, aber digital.
                    </p>

                    <h2 className="animate-up">Die Losung: Aquarell trifft Code</h2>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Aquarell-Asthetik</h3>
                            <p>Animierte Blob-Hintergrunde in Aquarelltonen. Drei handverlesene Schriftarten: Cormorant Garamond fur Uberschriften, Outfit fur Fliesstexte, Caveat fur handschriftliche Akzente. Das visuelle Gefuhl einer eleganten Einladungskarte.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>GSAP Scroll-Animationen</h3>
                            <p>Jede Sektion erscheint beim Scrollen, sanft, nicht aufdringlich. ScrollTrigger-gesteuerte Reveal-Effekte, die die Geschichte erzahlen, wahrend der Besucher scrollt. Wie ein guter Gastgeber, der den Abend Stuck fur Stuck entfaltet.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Single-Page, aber mit Tiefe</h3>
                            <p>Smooth Scrolling zwischen den Sektionen. Navigation, die mitwandert. Alle Informationen auf einer Seite: Services, Uber mich, Portfolio, Kontakt, ohne das Gefuhl von Enge.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Mobile-First</h3>
                            <p>Weil 70% der Besucher auf dem Handy kommen. Besonders Braute. Besonders um 23 Uhr auf dem Sofa. Die Website muss dort genauso gut funktionieren wie auf dem grossen Bildschirm.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Warum kein WordPress</h2>
                    <p className="animate-up">
                        Josy brauchte keine Blog-Maschine mit 47 Plugins. Sie brauchte eine schnelle, schone, einzigartige Website, die genau das tut, was sie soll, und nichts anderes. React + Vite + GSAP liefern genau das: eine leichte, performante Seite ohne den Ballast eines CMS. Kein Update-Popup, kein Plugin-Konflikt, kein &bdquo;Ihre Website wurde gehackt&ldquo;-E-Mail um 3 Uhr morgens.
                    </p>
                    <p className="animate-up">
                        Wenn Josy den Text andern will, schreibt sie mir. Ich andere es in 5 Minuten. Das ist schneller als jedes WordPress-Backend. Und sicherer.
                    </p>

                    <div className="cs-takeaway animate-up">
                        <h3>Das Wichtigste</h3>
                        <p>
                            Nicht jede Website braucht ein CMS, eine Datenbank und 15 Integrationen. Manchmal reichen React, schone Animationen und ein Entwickler, der versteht, was die Kundin ausstrahlen will. Glucksmomente zeigt: Technologie soll die Botschaft unterstutzen, nicht uberschatten. Und manchmal ist die beste Technologie die, die man am wenigsten sieht.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Website fur Ihr Geschaft?</p>
                        <h2 className="section-title animate-up">Relevante Leistungen</h2>
                    </div>
                    <div className="subpage-features-grid animate-up">
                        <Link href="/leistungen/webdesign" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>Webdesign & Entwicklung</h3>
                            <p>Individuelle Websites, die Ihre Personlichkeit widerspiegeln. Ab 2.000 &euro;.</p>
                        </Link>
                        <Link href="/leistungen/seo" className="subpage-feature" style={{ textDecoration: 'none' }}>
                            <h3>SEO</h3>
                            <p>Damit Ihre schone Website auch gefunden wird.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <ServiceCta text="Individuelle Website gewunscht? Keine Templates, keine Stock-Fotos. Ich baue Websites, die nach Ihnen aussehen, nicht nach allen anderen. Und ja, es darf Aquarell sein." />
        </>
    );
}
