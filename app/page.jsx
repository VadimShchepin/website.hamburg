import Link from 'next/link';
import Image from 'next/image';
import { FaqItem } from '../src/components/FaqSection';
import ShaderBackdrop from '../src/components/shaders/ShaderBackdrop';
import { geist } from '../src/lib/fonts';
import '../src/styles/home-vx.css';

const PHONE = '+4917632194754';

const clients = ['Blitz Hamburg', 'GL Sommer', 'DYBeauty', 'Manetec', 'Solovei Beauty', 'KinderAlbum', 'Glücksmomente'];

// Featured projects: facts mirror the case studies under /referenzen.
const featured = [
    {
        heading: 'Vom Handwerksbetrieb ohne Website zu ~40 Kunden im Monat',
        client: 'Blitz Hamburg',
        result: 'hat die Investition in 7 Wochen zurückgeholt.',
        services: ['Website-Neubau', 'KI-Kostenschätzer', 'Google Ads', 'Lokales SEO'],
        image: '/referenzen/Blitz-hero.webp',
        domain: 'blitz-hamburg.de',
        href: '/referenzen/blitz-hamburg',
    },
    {
        heading: 'Ein GaLaBau-Betrieb, den Hamburg bei Google findet',
        client: 'GL Sommer',
        result: 'erreicht 728 lokale Aktionen im Monat, bei 529 EUR Werbebudget.',
        services: ['Website-Modernisierung', 'SEO-Audit', 'Google Ads', '1.113 Klicks im Monat'],
        image: '/referenzen/Gl-sommer-hero.webp',
        domain: 'gl-sommer.de',
        href: '/referenzen/gl-sommer',
    },
    {
        heading: 'Ein Shopify-Shop mit doppeltem Traffic in 90 Tagen',
        client: 'DYBeauty',
        result: 'hat den organischen Traffic in drei Monaten verdoppelt.',
        services: ['SEO-Audit', '723 Produkte optimiert', 'Google Merchant Center', 'Content-Strategie'],
        image: '/referenzen/dybeauty.webp',
        domain: 'dybeauty.de',
        href: '/referenzen/dybeauty',
    },
];

const more = [
    {
        title: 'KinderAlbum',
        desc: 'DSGVO-konforme Schulfoto-Plattform. Platz 1 in ChatGPT und Perplexity.',
        image: '/referenzen/KinderAlbum.webp',
        href: '/referenzen/kinderalbum',
    },
    {
        title: 'Solovei Beauty',
        desc: 'Dreisprachige Buchungsplattform für ein Beauty-Coworking in Hamburg.',
        image: '/referenzen/previews/solovei-hero-section.webp',
        href: '/referenzen/solovei-beauty',
    },
    {
        title: 'mit-kinder.de',
        desc: 'KI findet Aktivitäten für Familien, mit interaktiver Karte.',
        image: '/referenzen/previews/mit-kinder-hero-section.webp',
        href: '/referenzen/mit-kinder',
    },
];

function Arrow() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

function BrowserShot({ src, alt, domain, priority = false }) {
    return (
        <div className="vx-browser">
            <div className="vx-browser-bar">
                <span /><span /><span />
                <em>{domain}</em>
            </div>
            <Image src={src} alt={alt} width={1200} height={760} sizes="(max-width: 900px) 100vw, 760px" priority={priority} />
        </div>
    );
}

const faqItems = [
    {
        q: 'Was kostet eine professionelle Website?',
        a: 'Der Website-Start beginnt ab 1.500 Euro, eine individuell gestaltete Conversion Landingpage ab 2.900 Euro, eine mehrseitige Unternehmenswebsite ab 4.500 Euro. Den finalen Preis erhalten Sie nach dem kostenlosen Erstgespräch, schriftlich und ohne versteckte Kosten.',
    },
    {
        q: 'Wie lange dauert die Erstellung einer Website?',
        a: 'Der Website-Start ist in 2 bis 5 Arbeitstagen online, eine individuell gestaltete Landingpage in 2 bis 3 Wochen, eine mehrseitige Website in 4 bis 6 Wochen. Abhängig von Umfang und Ihrem Feedback-Tempo.',
    },
    {
        q: 'Was passiert in der kostenlosen Website-Analyse?',
        a: 'Ich prüfe Ladezeit, SEO, Struktur und Conversion-Potenzial Ihrer aktuellen Website und sende Ihnen innerhalb von 48 Stunden drei konkrete Verbesserungsvorschläge. Unverbindlich und ohne Verkaufsgespräch.',
    },
    {
        q: 'Wie schnell sehe ich SEO-Ergebnisse?',
        a: 'Erste messbare Verbesserungen typischerweise nach 4 bis 8 Wochen. Volle Wirkung nach 3 bis 6 Monaten. Sie erhalten monatliche Reports mit echten Zahlen.',
    },
    {
        q: 'Gibt es lange Vertragslaufzeiten?',
        a: 'Nein. Websites sind Festpreisprojekte, SEO- und Ads-Betreuung ist monatlich kündbar. Ihre Daten, Zugänge und Ihre Website gehören Ihnen. Immer.',
    },
    {
        q: 'Arbeiten Sie nur mit Unternehmen aus Hamburg?',
        a: 'Der Schwerpunkt liegt auf Hamburg und Umgebung, dort kenne ich den Markt am besten. Projekte in ganz Deutschland setze ich remote um, mit denselben Standards.',
    },
];

export const metadata = {
    title: 'Webdesign & SEO Hamburg | Mehr Kunden über Google',
    description: 'Professionelles Webdesign, SEO und Google Ads für lokale Unternehmen in Hamburg. Datenbasiert, transparent, ergebnisorientiert. Kostenlose Erstanalyse.',
    alternates: {
        canonical: 'https://webseite.hamburg',
    },
    openGraph: {
        title: 'Webdesign & SEO Hamburg | Mehr Kunden über Google',
        description: 'Professionelles Webdesign, SEO und Google Ads für lokale Unternehmen in Hamburg. Datenbasiert, transparent, ergebnisorientiert.',
        url: 'https://webseite.hamburg',
        type: 'website',
    },
};

export default function HomePage() {
    const professionalServiceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'AISEO',
        url: 'https://webseite.hamburg',
        telephone: '+4917632194754',
        email: 'hallo@webseite.hamburg',
        founder: {
            '@type': 'Person',
            name: 'Vadim Shchepin',
            url: 'https://www.linkedin.com/in/vadim-shchepin/',
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hamburg',
            addressCountry: 'DE',
        },
        areaServed: { '@type': 'City', name: 'Hamburg' },
        sameAs: [
            'https://aiseo.hamburg/',
            'https://www.linkedin.com/in/vadim-shchepin/',
            'https://www.instagram.com/aiseo.hamburg/',
            'https://www.tiktok.com/@aiseo.hamburg/',
        ],
        serviceType: ['Webdesign', 'SEO', 'AI SEO', 'Google Ads'],
        description: 'Professionelles Webdesign, SEO und Google Ads für lokale Unternehmen in Hamburg. Datenbasiert, transparent, ergebnisorientiert.',
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
        ],
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };

    return (
        <div className={`vx ${geist.variable}`}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* Hero */}
            <section className="vx-hero">
                <a href="https://share.google/Ta1IQevSFQFxhXvvn" target="_blank" rel="noopener noreferrer" className="vx-announce" data-umami-event="hero-google-rating">
                    <span>5,0 Sterne bei Google</span>
                    <strong>Bewertungen ansehen <Arrow /></strong>
                </a>
                <div className="vx-hero-grid vx-wrap">
                    <div className="vx-hero-copy">
                        <h1>Websites, die Anfragen bringen.</h1>
                        <div className="vx-actions">
                            <Link href="/kontakt" className="vx-btn vx-btn-dark" data-umami-event="cta-click" data-umami-event-location="hero">Projekt anfragen</Link>
                            <a href={`tel:${PHONE}`} className="vx-btn" data-umami-event="phone-call" data-umami-event-location="hero">0176 321 94 754</a>
                        </div>
                    </div>
                    <div className="vx-hero-mark" aria-hidden="true">
                        <div className="vx-hero-glow" />
                        <img src="/logo_blue.webp" alt="" width="200" height="172" />
                    </div>
                    <ul className="vx-hero-list">
                        <li>Webdesign für Hamburger Betriebe</li>
                        <li>SEO und Sichtbarkeit in KI-Suche</li>
                        <li>Google Ads mit messbarem Ergebnis</li>
                    </ul>
                </div>
                <div className="vx-logos vx-wrap" aria-label="Kunden">
                    {clients.map((c) => <span key={c}>{c}</span>)}
                </div>
            </section>

            {/* Featured projects */}
            {featured.map((p, i) => (
                <section key={p.client} className={`vx-project${i % 2 ? ' vx-project-flip' : ''}`}>
                    <div className="vx-wrap vx-project-grid">
                        <h2 className="vx-project-heading">{p.heading}</h2>
                        <aside className="vx-project-aside">
                            <p className="vx-project-result"><strong>{p.client}</strong> {p.result}</p>
                            <p className="vx-label">Leistungen</p>
                            <ul>
                                {p.services.map((s) => <li key={s}>{s}</li>)}
                            </ul>
                            <Link href={p.href} className="vx-link">Case Study lesen <Arrow /></Link>
                        </aside>
                        <Link href={p.href} className="vx-project-shot" aria-label={`Case Study ${p.client}`}>
                            <BrowserShot src={p.image} alt={`Website von ${p.client}`} domain={p.domain} priority={i === 0} />
                        </Link>
                    </div>
                </section>
            ))}

            {/* More projects */}
            <section className="vx-more">
                <div className="vx-wrap">
                    <div className="vx-more-head">
                        <h2>Weitere Projekte</h2>
                        <Link href="/referenzen" className="vx-link">Alle Referenzen <Arrow /></Link>
                    </div>
                    <div className="vx-bento">
                        {more.map((m) => (
                            <Link key={m.title} href={m.href} className="vx-card">
                                <div className="vx-card-img">
                                    <Image src={m.image} alt={`Projekt ${m.title}`} width={1200} height={780} sizes="(max-width: 900px) 100vw, 50vw" />
                                </div>
                                <div className="vx-card-text">
                                    <h3>{m.title}</h3>
                                    <p>{m.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder */}
            <section className="vx-founder">
                <div className="vx-wrap vx-founder-grid">
                    <Image src="/referenzen/vadim-portraet.webp" alt="Vadim Shchepin" width={640} height={640} sizes="160px" />
                    <div>
                        <p className="vx-founder-quote">Bei mir sprechen Sie direkt mit dem Entwickler. Analyse, Design, Code und Betreuung liegen in einer Hand.</p>
                        <p className="vx-founder-name"><strong>Vadim Shchepin</strong> Webentwickler aus Hamburg, 10+ Jahre Erfahrung</p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="vx-faq">
                <div className="vx-wrap vx-faq-grid">
                    <h2>Häufige Fragen</h2>
                    <div className="vx-faq-list">
                        {faqItems.map((item) => <FaqItem key={item.q} q={item.q} a={item.a} />)}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="vx-cta-section">
                <div className="vx-wrap">
                    <div id="cta" className="vx-cta shader-host">
                        <ShaderBackdrop scene="cta" />
                        <h2>Lassen Sie uns über Ihr Projekt sprechen.</h2>
                        <p>Kostenloses Erstgespräch, Antwort innerhalb von 24 Stunden.</p>
                        <div className="vx-actions">
                            <Link href="/kontakt" className="vx-btn vx-btn-light" data-umami-event="cta-click" data-umami-event-location="cta-section">Projekt anfragen</Link>
                            <a href="https://wa.me/4917632194754" target="_blank" rel="noopener noreferrer" className="vx-btn vx-btn-ghost" data-umami-event="whatsapp-click" data-umami-event-location="cta-section">WhatsApp</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
