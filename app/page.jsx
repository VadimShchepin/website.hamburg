import Link from 'next/link';
import Image from 'next/image';
import { FaqItem } from '../src/components/FaqSection';
import ShaderBackdrop from '../src/components/shaders/ShaderBackdrop';
import { vxFontVars } from '../src/lib/fonts';
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
        heading: 'Vom Handwerksbetrieb ohne Website zu ~40 Kunden im Monat',
        result: 'hat die Investition in 7 Wochen zurückgeholt.',
        services: ['Website-Neubau', 'KI-Kostenschätzer', 'Google Ads', 'Lokales SEO'],
        image: '/referenzen/Blitz-hero.webp',
        domain: 'blitz-hamburg.de',
        href: '/referenzen/blitz-hamburg',
    },
    {
        client: 'GL Sommer',
        heading: 'Ein GaLaBau-Betrieb, den Hamburg bei Google findet',
        result: 'erreicht 728 lokale Aktionen im Monat, bei 529 EUR Werbebudget.',
        services: ['Website-Modernisierung', 'SEO-Audit', 'Google Ads', '1.113 Klicks im Monat'],
        image: '/referenzen/Gl-sommer-hero.webp',
        domain: 'gl-sommer.de',
        href: '/referenzen/gl-sommer',
    },
    {
        client: 'DYBeauty',
        heading: 'Ein Shopify-Shop mit doppeltem Traffic in 90 Tagen',
        result: 'hat den organischen Traffic in drei Monaten verdoppelt.',
        services: ['SEO-Audit', '723 Produkte optimiert', 'Google Merchant Center', 'Content-Strategie'],
        image: '/referenzen/dybeauty.webp',
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
        <div className={`vx ${vxFontVars}`}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* Hero */}
            <section className="vx-hero">
                <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer" className="vx-announce" data-umami-event="hero-google-rating">
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
                                <BrowserShot src={p.image} alt={`Website von ${p.client}`} domain={p.domain} priority={i === 0} />
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
                        <h2>Was ich für Sie umsetze</h2>
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
