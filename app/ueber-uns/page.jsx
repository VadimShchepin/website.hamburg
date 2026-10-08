import Link from 'next/link';
import AutoLinks from '../../src/components/AutoLinks';
import Image from 'next/image';
import Breadcrumbs from '../../src/components/Breadcrumbs';
import HeroFacts from '../../src/components/HeroFacts';
import ServiceCta from '../../src/components/ServiceCta';
import { BUSINESS, SOCIAL_LINKS } from '../../src/lib/schema';

export const metadata = {
    title: 'Über mich: Vadim Shchepin, Webentwickler in Hamburg',
    description: 'Vadim Shchepin, Webentwickler und SEO-Spezialist in Hamburg: über 10 Jahre Produktentwicklung, über 50 Projekte. Direkt mit mir, ohne Agentur dazwischen.',
    alternates: {
        canonical: 'https://webseite.hamburg/ueber-uns',
    },
    openGraph: {
        siteName: 'webseite.hamburg',
        locale: 'de_DE',
        title: 'Über mich: Vadim Shchepin, Webentwickler in Hamburg',
        description: 'Über 10 Jahre Erfahrung in der digitalen Produktentwicklung. Webdesign, SEO und Google Ads für lokale Unternehmen in Hamburg.',
        url: 'https://webseite.hamburg/ueber-uns',
        type: 'profile',
    },
};

export default function UeberUnsPage() {
    const profileJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: 'Über mich: Vadim Shchepin, Webentwickler in Hamburg',
        description: 'Über 10 Jahre Erfahrung in der digitalen Produktentwicklung. Webdesign, SEO und Google Ads für lokale Unternehmen in Hamburg.',
        url: 'https://webseite.hamburg/ueber-uns',
        mainEntity: {
            '@type': 'Person',
            name: 'Vadim Shchepin',
            image: 'https://webseite.hamburg/referenzen/vadim_shchepin_2.webp',
            url: 'https://www.linkedin.com/in/vadim-shchepin/',
            jobTitle: 'Webentwickler & SEO-Spezialist',
            worksFor: BUSINESS,
            knowsAbout: ['Webdesign', 'SEO', 'AI SEO', 'Google Ads', 'Conversion-Optimierung', 'Performance-Optimierung'],
            sameAs: [
                'https://www.linkedin.com/in/vadim-shchepin/',
                'https://www.instagram.com/aiseo.hamburg/',
                'https://www.tiktok.com/@aiseo.hamburg/',
            ],
        },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Über uns', item: 'https://webseite.hamburg/ueber-uns' },
        ],
    };

    return (
        <>
            <AutoLinks path="/ueber-uns">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Über uns' }]} />
                    <div className="subpage-hero-split about-hero">
                        <div>
                        <p className="section-kicker animate-up">Über mich</p>
                        <h1 className="subpage-title animate-up">Vadim Shchepin, Webentwickler in Hamburg: Ergebnisse statt Versprechen.</h1>
                        <p className="subpage-intro animate-up">
                            Ich bin kein Agentur-Netzwerk mit Account-Managern und Projektleitern zwischen Ihnen und der Arbeit. Sie arbeiten direkt mit mir, dem Menschen, der Ihre <Link href="/leistungen/webdesign">Website baut</Link>, Ihr <Link href="/leistungen/seo">SEO</Link> macht und Ihre <Link href="/leistungen/google-ads">Ads</Link> schaltet. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder Fotografie, hole ich geprüfte Spezialisten dazu. Ihr Ansprechpartner und der Verantwortliche für das Ergebnis bleibe ich.
                        </p>
                            <HeroFacts items={[['10+', 'Jahre Erfahrung'], ['50+', 'Projekte umgesetzt'], ['5,0', 'Sterne bei Google']]} />
                        </div>
                        <div className="subpage-hero-media about-hero-photo animate-up">
                            <Image
                                src="/referenzen/vadim_shchepin_2.webp"
                                alt="Vadim Shchepin, Webentwickler und SEO-Spezialist in Hamburg"
                                width={450}
                                height={600}
                                quality={85}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-story section light-bg">
                <div className="container">
                    <div className="about-layout">
                        <div className="about-content">
                            <h2 className="animate-up">Der Hintergrund</h2>
                            <p className="large-text animate-up">Über 10 Jahre Erfahrung in der digitalen Produktentwicklung. Nicht bei einer Marketing-Agentur, sondern in der Praxis: Softwareentwicklung, Produktdesign und Performance-Optimierung.</p>
                            <p className="animate-up">Ich habe gesehen, wie große Tech-Unternehmen digitale Produkte bauen, mit Daten, mit Struktur und mit Fokus auf Ergebnisse. Und ich habe gesehen, was die meisten Agenturen lokalen Unternehmen liefern: Templates, Bauchgefühl und vage Reports.</p>
                            <p className="animate-up">Daraus ist meine Arbeitsweise entstanden: die Präzision und den technischen Anspruch aus der Tech-Welt, angewandt auf die konkreten Bedürfnisse kleiner und mittlerer Unternehmen in Hamburg. Auf Wunsch begleite ich Betriebe dauerhaft als Partner für ihr Wachstum: Website, Sichtbarkeit bei Google und Anzeigen aus einer Hand, mit Zahlen, die Sie jeden Monat sehen. Wie das in der Praxis aussieht, zeigen die <Link href="/referenzen">Referenzen</Link>.</p>
                            <p className="animate-up">Kurz zu mir: Vadim Shchepin, selbstständiger Webentwickler mit Sitz in Hamburg. Ich spreche Deutsch, Englisch und Russisch, arbeite seit über 10 Jahren an digitalen Produkten und habe über 50 Projekte umgesetzt, von der Handwerker-Website bis zur SaaS-Plattform. Bei Google stehe ich mit 5,0 Sternen.</p>

                            <h2 className="animate-up">Was mich antreibt</h2>
                            <p className="animate-up">Ich glaube, dass jedes Unternehmen eine Website verdient, die wirklich funktioniert. Nicht eine, die hübsch aussieht und dann in einer Schublade verschwindet, sondern eine, die messbar Kunden bringt und bei der Sie jederzeit sehen, was passiert.</p>
                            <p className="animate-up">Deshalb arbeite ich datenbasiert, deshalb zeige ich Ihnen alles, und deshalb höre ich nicht auf zu optimieren, bis das Ergebnis stimmt. Wie ich aus Besuchern Anfragen mache, habe ich im Leitfaden zur <Link href="/wissen/website-conversion-optimierung">Conversion-Optimierung</Link> aufgeschrieben.</p>
                        </div>

                        <div className="about-sidebar">
                            <div className="about-values-card bull-boundary animate-up">
                                <h3>Meine Prinzipien</h3>
                                <div className="about-value">
                                    <strong>Ergebnis vor Stunden</strong>
                                    <p>Ich werde nicht für Zeit bezahlt, sondern für Resultate. Wenn das Ergebnis nicht stimmt, arbeite ich nach, ohne Aufpreis.</p>
                                </div>
                                <div className="about-value">
                                    <strong>Transparenz ist nicht optional</strong>
                                    <p>Sie sehen alles: Daten, Reports, Kosten, Ergebnisse. Jederzeit, ohne nachfragen zu müssen.</p>
                                </div>
                                <div className="about-value">
                                    <strong>Ihre Daten gehören Ihnen</strong>
                                    <p>Alle Konten, Zugänge und Daten sind Ihr Eigentum. Kein Lock-in, kein Kleingedrucktes.</p>
                                </div>
                                <div className="about-value">
                                    <strong>Ehrlichkeit vor Umsatz</strong>
                                    <p>Wenn etwas für Sie keinen Sinn ergibt, sage ich es. Auch wenn ich dadurch weniger verdiene.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-expertise section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Expertise</p>
                        <h2 className="section-title animate-up">Was ich mitbringe.</h2>
                    </div>
                    <div className="about-expertise-grid">
                        <div className="about-expertise-item animate-up">
                            <span className="about-expertise-num">10+</span>
                            <h3>Jahre Erfahrung</h3>
                            <p>In Softwareentwicklung, Produktdesign und digitalem Marketing. Von Startups bis Enterprise.</p>
                        </div>
                        <div className="about-expertise-item animate-up delay-1">
                            <span className="about-expertise-num">50+</span>
                            <h3>Projekte</h3>
                            <p>Websites, Web-Applikationen, SEO-Kampagnen und Ads-Setups. Vom Handwerker bis zum Tech-Unternehmen.</p>
                        </div>
                        <div className="about-expertise-item animate-up delay-2">
                            <span className="about-expertise-num">100</span>
                            <h3>PageSpeed Score</h3>
                            <p>Mein technischer Anspruch. Jede Website wird auf maximale Geschwindigkeit optimiert, denn <Link href="/wissen/warum-langsame-websites-kunden-kosten">langsame Seiten kosten Kunden</Link>.</p>
                        </div>
                        <div className="about-expertise-item animate-up delay-1">
                            <span className="about-expertise-num">100%</span>
                            <h3>Datenzugang</h3>
                            <p>Volle Transparenz. Sie sehen jederzeit alle Daten, Rankings, Kosten und Ergebnisse.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-tech section light-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Kompetenz</p>
                        <h2 className="section-title animate-up">Technisch auf dem neuesten Stand.</h2>
                    </div>
                    <div className="about-tech-grid animate-up">
                        <div className="about-tech-area">
                            <h3>Entwicklung</h3>
                            <p>React, Next.js, Node.js, WordPress, Custom CMS. Moderne Frameworks für maximale Performance und Flexibilität, von der <Link href="/leistungen/webdesign">Website</Link> bis zum <Link href="/leistungen/e-commerce-entwicklung">Online-Shop</Link>.</p>
                        </div>
                        <div className="about-tech-area">
                            <h3>SEO & Analytics</h3>
                            <p>Google Search Console, Google Analytics, Ahrefs, Screaming Frog, Schema Markup. Datenbasierte Optimierung mit professionellen Tools.</p>
                        </div>
                        <div className="about-tech-area">
                            <h3>Ads & Conversion</h3>
                            <p>Google Ads, Local Services Ads, Google Tag Manager, Conversion Tracking. Jeder Euro messbar zugeordnet.</p>
                        </div>
                        <div className="about-tech-area">
                            <h3>AI & Zukunft</h3>
                            <p>AI SEO, strukturierte Daten, Prompt-Optimierung, Sichtbarkeit in LLMs. Die nächste Generation der Suchmaschinenoptimierung.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-social section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Vernetzt</p>
                        <h2 className="section-title animate-up">Folgen Sie mir.</h2>
                    </div>
                    <div className="social-grid">
                        {SOCIAL_LINKS.map((link) => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="social-card animate-up">
                                <span className="social-icon">
                                    {link.name === 'Google Business' ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d={link.icon} />
                                        </svg>
                                    )}
                                </span>
                                <div>
                                    <strong>{link.name}</strong>
                                    <p>{link.desc}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <ServiceCta
                title="Lassen Sie uns sprechen."
                text="Kostenloses Erstgespräch: Lernen Sie mich und meine Arbeitsweise kennen. Ich sage Ihnen ehrlich, ob und wie ich Ihnen helfen kann."
                primaryLabel="Jetzt Kontakt aufnehmen"
                location="about-cta"
            />
            </AutoLinks>
        </>
    );
}
