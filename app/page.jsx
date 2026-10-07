import Link from 'next/link';
import AutoLinks from '../src/components/AutoLinks';
import Image from 'next/image';
import { FaqItem } from '../src/components/FaqSection';
import ShaderBackdrop from '../src/components/shaders/ShaderBackdrop';
import '../src/styles/home-vx.css';

const PHONE = '+4917632194754';
const GOOGLE_REVIEWS = 'https://share.google/Ta1IQevSFQFxhXvvn';

// Real Google reviews (same as the former homepage review block)
const reviews = [
    {
        name: 'ZumaXX',
        text: 'Ausgezeichneter Webentwickler! Er hat die Arbeit qualitativ hochwertig und termingerecht erledigt. Sehr zu empfehlen!',
    },
    {
        name: 'Alexey Karasev',
        text: 'Vadim hat super Arbeit geleistet. Er hat sehr schnell zugestimmt, sich mit mir getroffen und alles professionell umgesetzt.',
    },
    {
        name: 'steiko',
        text: 'Schnelle Umsetzung und kompetente, kundenorientierte Beratung! Kann ich nur empfehlen!',
    },
];

// Featured projects: facts mirror the case studies under /referenzen.
const featured = [
    {
        client: 'Blitz Hamburg',
        heading: 'Ein Entrümpler, den Hamburg beim Sperrmüll-Googeln findet',
        result: 'steigerte die organischen Google-Klicks nach dem Relaunch von 24 im April auf 374 im September 2026.',
        services: ['Website-Neubau', 'Google Ads', 'Ratgeber-SEO', 'Ø Position 21,1 auf 10,5'],
        image: '/referenzen/Blitz-hero.webp',
        alt: 'Startseite von blitz-hamburg.de, Entrümpelung und Sanierung in Hamburg',
        domain: 'blitz-hamburg.de',
        href: '/referenzen/blitz-hamburg',
    },
    {
        client: 'KinderAlbum',
        heading: 'Eine DSGVO-Fotoplattform, die Eltern und Schulen bei Google finden',
        result: 'kam von 23 organischen Google-Klicks im Februar auf 792 im September 2026.',
        services: ['Web-App', 'DSGVO-Architektur', 'Ratgeber und Vorlagen', '14 Konten mit neuen Alben im September'],
        image: '/referenzen/KinderAlbum.webp',
        alt: 'Startseite von dsgvoschulfotos.de, DSGVO-konforme Fotoplattform für Schulen und Kitas',
        domain: 'dsgvoschulfotos.de',
        href: '/referenzen/kinderalbum',
    },
    {
        client: 'DYBeauty',
        heading: 'Ein Shopify-Shop, den Google 2,4-mal so oft zeigt',
        result: 'kam von 23.353 Google-Impressionen im Februar auf 56.651 im September 2026.',
        services: ['SEO-Audit', '723 Produkte überarbeitet', 'Content-Strategie', '810 Klicks ohne Markennamen'],
        image: '/referenzen/dybeauty.webp',
        alt: 'Startseite des K-Beauty-Shops dybeauty.de auf Shopify',
        domain: 'dybeauty.de',
        href: '/referenzen/dybeauty',
    },
];

// Service clusters; prices follow the canonical price list (/leistungen).
const services = [
    {
        title: 'Webdesign',
        desc: 'Schnelle Websites, die aus Besuchern Anfragen machen.',
        price: 'ab 1.500 EUR',
        href: '/leistungen/webdesign',
        visual: 'web',
    },
    {
        title: 'SEO',
        desc: 'Bei Google gefunden werden, wenn Kunden in Hamburg suchen.',
        price: 'ab 1.000 EUR im Monat',
        href: '/leistungen/seo',
        visual: 'seo',
    },
    {
        title: 'AI SEO',
        desc: 'Empfohlen werden, wenn Kunden ChatGPT, Perplexity oder Gemini fragen.',
        price: 'Sprint ab 1.500 EUR',
        href: '/leistungen/ai-seo',
        visual: 'ai',
    },
    {
        title: 'Google Ads',
        desc: 'Anfragen ab dem ersten Tag, mit Kampagnen, deren Ergebnis Sie sehen.',
        price: 'Setup ab 700 EUR',
        href: '/leistungen/google-ads',
        visual: 'ads',
    },
];

function Arrow() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

function Stars() {
    return (
        <span className="vx-stars" aria-label="5 von 5 Sternen">
            {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </span>
    );
}

function BrowserShot({ src, alt, domain, priority = false }) {
    return (
        <div className="vx-browser">
            <div className="vx-browser-bar">
                <span /><span /><span />
                <em>{domain}</em>
            </div>
            <Image src={src} alt={alt} width={1200} height={760} sizes="(max-width: 900px) 100vw, 820px" priority={priority} />
        </div>
    );
}

// Small CSS mock-ups for the service cards (decorative)
function ServiceVisual({ type }) {
    if (type === 'web') {
        return (
            <div className="vx-viz vx-viz-web">
                <div className="vx-viz-window">
                    <i className="w40" /><i className="w70 tall" /><i className="w55" />
                    <b>Anfrage senden</b>
                </div>
            </div>
        );
    }
    if (type === 'seo') {
        return (
            <div className="vx-viz vx-viz-seo">
                <div className="vx-viz-serp">
                    <span className="vx-viz-rank">1</span>
                    <div>
                        <small>ihre-firma.de</small>
                        <strong>Ihr Betrieb in Hamburg</strong>
                        <i className="w90" /><i className="w60" />
                    </div>
                </div>
                <div className="vx-viz-serp is-muted"><span className="vx-viz-rank">2</span><div><i className="w50" /><i className="w80" /></div></div>
            </div>
        );
    }
    if (type === 'ai') {
        return (
            <div className="vx-viz vx-viz-ai">
                <p className="q">Wen empfiehlst du in Hamburg?</p>
                <p className="a">Eine gute Wahl ist <strong>Ihre Firma</strong>, mit sehr guten Bewertungen.</p>
            </div>
        );
    }
    return (
        <div className="vx-viz vx-viz-ads">
            <div className="vx-viz-bars">
                {[28, 40, 36, 52, 61, 74, 88].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
            </div>
            <em>Anfragen pro Woche</em>
        </div>
    );
}

const faqItems = [
    {
        q: 'Was kostet eine professionelle Website?',
        a: 'Eine Website kostet bei mir ab 1.500 Euro (Website-Start), eine individuell gestaltete Conversion Landingpage ab 2.900 Euro, eine mehrseitige Unternehmenswebsite ab 4.500 Euro. Den finalen Festpreis erhalten Sie nach dem kostenlosen Erstgespräch schriftlich und ohne versteckte Kosten.',
    },
    {
        q: 'Wie lange dauert die Erstellung einer Website?',
        a: 'Der Website-Start ist in 2 bis 5 Arbeitstagen online, eine individuell gestaltete Landingpage in 2 bis 3 Wochen, eine mehrseitige Website in 4 bis 6 Wochen. Abhängig von Umfang und Ihrem Feedback-Tempo.',
    },
    {
        q: 'Was passiert in der kostenlosen Website-Analyse?',
        a: 'Ich prüfe Ladezeit, SEO, Struktur und Conversion-Potenzial Ihrer Website und schicke Ihnen innerhalb von 2 bis 3 Werktagen einen Bericht mit priorisierten Empfehlungen. Auf Wunsch besprechen wir ihn in 30 Minuten. Unverbindlich und ohne Verkaufsdruck.',
    },
    {
        q: 'Wie schnell sehe ich SEO-Ergebnisse?',
        a: 'Erste messbare Verbesserungen typischerweise nach 4 bis 8 Wochen. Volle Wirkung nach 3 bis 6 Monaten. Sie erhalten monatliche Reports mit echten Zahlen.',
    },
    {
        q: 'Gibt es lange Vertragslaufzeiten?',
        a: 'Nur bei SEO. Websites sind Festpreisprojekte. Die SEO-Betreuung hat eine Mindestlaufzeit von 3 Monaten und ist danach monatlich kündbar, die Google-Ads-Betreuung ist von Anfang an monatlich kündbar. Ihre Daten, Zugänge und Ihre Website gehören Ihnen.',
    },
    {
        q: 'Arbeiten Sie nur mit Unternehmen aus Hamburg?',
        a: 'Der Schwerpunkt liegt auf Hamburg und dem Umland, dort kenne ich den Markt am besten. Projekte in ganz Deutschland setze ich remote um, mit denselben Standards.',
    },
    {
        q: 'Sind Sie Freelancer oder Agentur?',
        a: 'Ich arbeite als selbstständiger Webentwickler, Sie arbeiten direkt mit mir. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder Fotografie, hole ich geprüfte Spezialisten dazu. So haben Sie einen festen Ansprechpartner, der das Ergebnis verantwortet, und trotzdem alle Fähigkeiten, die das Projekt braucht.',
    },
];

export const metadata = {
    title: 'Webdesign Hamburg, SEO & Google Ads | webseite.hamburg',
    description: 'Webdesign in Hamburg direkt vom Entwickler: schnelle Websites ab 1.500 € Festpreis, dazu SEO und Google Ads aus einer Hand. 5,0 Sterne bei Google.',
    alternates: {
        canonical: 'https://webseite.hamburg',
    },
    openGraph: {
        siteName: 'webseite.hamburg',
        locale: 'de_DE',
        title: 'Webdesign Hamburg, SEO & Google Ads | webseite.hamburg',
        description: 'Professionelles Webdesign, SEO und Google Ads für lokale Unternehmen in Hamburg. Datenbasiert, transparent, ergebnisorientiert.',
        url: 'https://webseite.hamburg',
        type: 'website',
    },
};

export default function HomePage() {
    const professionalServiceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'webseite.hamburg',
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
        <div className="vx">
            <AutoLinks path="/">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* Hero */}
            <section className="vx-hero shader-host">
                <ShaderBackdrop scene="hero" />
                <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer" className="vx-announce" data-umami-event="hero-google-rating">
                    <span>5,0 Sterne bei Google</span>
                    <strong>Bewertungen ansehen <Arrow /></strong>
                </a>
                <div className="vx-hero-grid vx-wrap">
                    <div className="vx-hero-copy">
                        <h1>Webdesign in Hamburg, das Anfragen bringt.</h1>
                        <p className="vx-hero-lede">Ich baue Ihre Website, bringe sie bei Google nach vorn und schalte die Anzeigen, die Anfragen bringen. Ein Ansprechpartner für Ihre digitale Präsenz, vom ersten Entwurf bis zur laufenden Betreuung.</p>
                        <div className="vx-actions">
                            <Link href="/kontakt" className="vx-btn vx-btn-dark" data-umami-event="cta-click" data-umami-event-location="hero">Projekt anfragen</Link>
                            <a href={`tel:${PHONE}`} className="vx-btn" data-umami-event="phone-call" data-umami-event-location="hero">0176 321 94 754</a>
                        </div>
                    </div>
                    <div className="vx-hero-mark" aria-hidden="true">
                        <img src="/logo_blue_transparent.webp" alt="" width="200" height="186" />
                    </div>
                    <ul className="vx-hero-list">
                        <li>Webdesign für Hamburger Betriebe</li>
                        <li>SEO und Sichtbarkeit in KI-Suche</li>
                        <li>Google Ads mit messbarem Ergebnis</li>
                    </ul>
                </div>
            </section>

            {/* Social proof: Google rating + reviews */}
            <section className="vx-proof" aria-label="Google-Bewertungen">
                <div className="vx-wrap vx-proof-grid">
                    <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer" className="vx-proof-score" data-umami-event="proof-google-rating">
                        <strong>5,0</strong>
                        <Stars />
                        <span>Bewertung bei Google <Arrow /></span>
                    </a>
                    {reviews.map((r) => (
                        <figure key={r.name} className="vx-proof-quote">
                            <Stars />
                            <blockquote>{r.text}</blockquote>
                            <figcaption>{r.name}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {/* Featured projects: text left / shot right, alternating */}
            <section className="vx-work">
                <div className="vx-wrap">
                    <p className="vx-label vx-section-label">Ausgewählte Projekte</p>
                </div>
                {featured.map((p, i) => (
                    <article key={p.client} className={`vx-project${i % 2 ? ' vx-project-flip' : ''}`}>
                        <div className="vx-wrap vx-project-grid">
                            <div className="vx-project-text">
                                <p className="vx-label">{p.client}</p>
                                <h2 className="vx-project-heading">{p.heading}</h2>
                                <p className="vx-project-result"><strong>{p.client}</strong> {p.result}</p>
                                <ul>
                                    {p.services.map((s) => <li key={s}>{s}</li>)}
                                </ul>
                                <Link href={p.href} className="vx-link">Case Study lesen <Arrow /></Link>
                            </div>
                            <Link href={p.href} className="vx-project-shot" aria-label={`Case Study ${p.client}`}>
                                <BrowserShot src={p.image} alt={p.alt} domain={p.domain} priority={i === 0} />
                            </Link>
                        </div>
                    </article>
                ))}
                <div className="vx-wrap vx-work-more">
                    <Link href="/referenzen" className="vx-btn">Alle Referenzen ansehen</Link>
                </div>
            </section>

            {/* Service clusters */}
            <section className="vx-services">
                <div className="vx-wrap">
                    <div className="vx-services-head">
                        <h2>Webdesign, SEO und Google Ads aus einer Hand</h2>
                        <Link href="/leistungen" className="vx-link">Alle Leistungen <Arrow /></Link>
                    </div>
                    <div className="vx-service-grid">
                        {services.map((s) => (
                            <Link key={s.title} href={s.href} className="vx-service">
                                <ServiceVisual type={s.visual} />
                                <div className="vx-service-text">
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                    <span className="vx-service-price">{s.price}</span>
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
                        <p className="vx-founder-quote">Sie arbeiten direkt mit mir, dem Entwickler. Analyse, Code und Betreuung liegen in einer Hand. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder Fotografie, hole ich geprüfte Spezialisten dazu.</p>
                        <p className="vx-founder-name"><strong>Vadim Shchepin</strong> Webentwickler aus Hamburg, 10+ Jahre Erfahrung</p>
                    </div>
                </div>
            </section>

            {/* Ongoing partnership */}
            <section className="vx-partner">
                <div className="vx-wrap vx-faq-grid">
                    <h2>Mehr als eine Website</h2>
                    <div>
                        <p className="vx-partner-text">Eine Website ist der Anfang. Danach geht es darum, gefunden zu werden, Anfragen zu messen und nachzuschärfen. Dabei begleite ich Betriebe auf Wunsch dauerhaft, als fester Partner für ihr Wachstum: Website, Sichtbarkeit bei Google und Anzeigen aus einer Hand, mit monatlichen Zahlen statt Bauchgefühl.</p>
                        <Link href="/leistungen" className="vx-link">Leistungen und Preise ansehen <Arrow /></Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="vx-faq">
                <div className="vx-wrap vx-faq-grid">
                    <h2>Häufige Fragen zu Webdesign in Hamburg</h2>
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
            </AutoLinks>
        </div>
    );
}
