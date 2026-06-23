'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function useHashScroll() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, []);
}

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    const answerRef = useRef(null);

    return (
        <div className={`sp-faq-item${open ? ' sp-faq-open' : ''}`}>
            <button className="sp-faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
                <span>{q}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sp-faq-chevron">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div
                className="sp-faq-answer"
                ref={answerRef}
                style={{ maxHeight: open ? (answerRef.current?.scrollHeight || 300) + 'px' : '0px' }}
            >
                <p>{a}</p>
            </div>
        </div>
    );
}

export default function ServicesPageClient() {
    useHashScroll();

    return (
        <>
            {/* Page Hero */}
            <section className="sp-hero section">
                <div className="container">
                    <p className="section-kicker animate-up">Leistungen & Preise</p>
                    <h1 className="section-title animate-up" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                        Klare Leistungen. Faire Preise. Echte Ergebnisse.
                    </h1>
                    <p className="large-text animate-up" style={{ maxWidth: 680 }}>
                        Keine versteckten Kosten, keine vagen Versprechen. Sie wissen genau, was Sie bekommen, und konnen die Ergebnisse jederzeit einsehen. Ich arbeite datenbasiert, kommuniziere transparent und optimiere, bis das Ergebnis stimmt.
                    </p>
                </div>
            </section>

            {/* Guarantee Strip */}
            <section className="sp-guarantee">
                <div className="container">
                    <div className="sp-guarantee-grid">
                        <div className="sp-guarantee-item animate-up">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            <div>
                                <strong>Ergebnis-Garantie</strong>
                                <span>Ich arbeite weiter, bis Sie zufrieden sind.</span>
                            </div>
                        </div>
                        <div className="sp-guarantee-item animate-up delay-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                            <div>
                                <strong>Volle Transparenz</strong>
                                <span>Live-Zugang zu allen Daten und Reports.</span>
                            </div>
                        </div>
                        <div className="sp-guarantee-item animate-up delay-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                            <div>
                                <strong>Datenbasiert</strong>
                                <span>Jede Entscheidung durch echte Zahlen belegt.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICE 1: WEBDESIGN */}
            <section id="webdesign" className="sp-service section">
                <div className="container">
                    <div className="sp-service-layout">
                        <div className="sp-service-content">
                            <p className="section-kicker animate-up">Webdesign & Entwicklung</p>
                            <h2 className="section-title animate-up">Eine Website, die fur Sie arbeitet, nicht nur existiert.</h2>
                            <p className="large-text animate-up">
                                Ihre Website ist Ihr wichtigster Vertriebsmitarbeiter. Sie arbeitet 24/7, empfangt jeden Besucher und entscheidet in Sekunden, ob aus Interesse eine Anfrage wird. Ich baue Websites, die genau das tun: schnell, klar strukturiert und auf Conversion optimiert.
                            </p>

                            <div className="sp-what-you-get animate-up">
                                <h3>Was Sie bekommen</h3>
                                <ul className="check-list">
                                    <li>Individuelles Design, kein Template, kein Baukasten</li>
                                    <li>Blitzschnelle Ladezeiten (PageSpeed 90-100)</li>
                                    <li>Klare Nutzerfuhrung mit durchdachtem Conversion-Pfad</li>
                                    <li>Responsive auf allen Geraten</li>
                                    <li>SEO-Grundoptimierung inklusive</li>
                                    <li>CMS-Integration oder statische Seite, je nach Bedarf</li>
                                    <li>SSL, DSGVO-konform, technisch einwandfrei</li>
                                </ul>
                            </div>

                            <div className="sp-how-it-works animate-up">
                                <h3>Wie es ablauft</h3>
                                <div className="sp-steps">
                                    <div className="sp-step">
                                        <span className="sp-step-num">1</span>
                                        <div>
                                            <strong>Erstgesprach</strong>
                                            <p>Ihre Ziele, Ihre Zielgruppe, Ihr Markt. Kostenlos und unverbindlich.</p>
                                        </div>
                                    </div>
                                    <div className="sp-step">
                                        <span className="sp-step-num">2</span>
                                        <div>
                                            <strong>Konzept & Struktur</strong>
                                            <p>Wireframe und Seitenstruktur basierend auf Marktanalyse und Best Practices.</p>
                                        </div>
                                    </div>
                                    <div className="sp-step">
                                        <span className="sp-step-num">3</span>
                                        <div>
                                            <strong>Design & Entwicklung</strong>
                                            <p>Pixel-genaue Umsetzung mit Fokus auf Performance und Nutzererlebnis.</p>
                                        </div>
                                    </div>
                                    <div className="sp-step">
                                        <span className="sp-step-num">4</span>
                                        <div>
                                            <strong>Launch & Optimierung</strong>
                                            <p>Go-live mit Tracking-Setup. Danach: Daten auswerten, optimieren, wachsen.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sp-service-sidebar">
                            <div className="sp-price-card bull-boundary animate-up">
                                <p className="sp-price-label">One-Pager</p>
                                <div className="sp-price-value">ab 2.000 &euro;</div>
                                <p className="sp-price-desc">Kompakte, schnelle Landingpage mit klarem Conversion-Ziel. Ideal fur einzelne Dienstleistungen oder Kampagnen.</p>
                                <ul className="sp-price-includes">
                                    <li>1 Seite, responsiv</li>
                                    <li>Kontaktformular</li>
                                    <li>SEO-Grundsetup</li>
                                    <li>PageSpeed-optimiert</li>
                                </ul>
                            </div>
                            <div className="sp-price-card bull-boundary animate-up delay-1">
                                <p className="sp-price-label">Mehrseitige Website</p>
                                <div className="sp-price-value">ab 3.000 &euro;</div>
                                <p className="sp-price-desc">Vollstandige Unternehmenswebsite mit mehreren Seiten, CMS und erweiterter Funktionalitat.</p>
                                <ul className="sp-price-includes">
                                    <li>5+ Seiten</li>
                                    <li>CMS (Inhalte selbst pflegen)</li>
                                    <li>Blog / News optional</li>
                                    <li>Erweiterte SEO-Optimierung</li>
                                    <li>Conversion Tracking</li>
                                </ul>
                            </div>
                            <p className="sp-price-note animate-up">Finale Preise nach kostenlosem Erstgesprach. Kein Angebot ohne Ihre Anforderungen zu verstehen.</p>
                        </div>
                    </div>

                    <div className="sp-branch-links animate-up" style={{ marginTop: '2rem' }}>
                        <h3>Webdesign fur Ihre Branche</h3>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                            <Link href="/leistungen/webdesign-handwerker" className="button button-secondary">Webdesign fur Handwerker</Link>
                            <Link href="/leistungen/webdesign-aerzte" className="button button-secondary">Webdesign fur Arztpraxen</Link>
                            <Link href="/leistungen/website-erstellen-lassen" className="button button-secondary">Website erstellen lassen</Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sp-divider"><div className="container"><hr /></div></div>

            {/* SERVICE 2: SEO */}
            <section id="seo" className="sp-service section">
                <div className="container">
                    <div className="sp-service-layout">
                        <div className="sp-service-content">
                            <p className="section-kicker animate-up">SEO & Lokale Sichtbarkeit</p>
                            <h2 className="section-title animate-up">Gefunden werden, wenn Ihre Kunden suchen.</h2>
                            <p className="large-text animate-up">
                                93% aller Online-Erfahrungen beginnen mit einer Suchmaschine. Wenn Ihr Unternehmen dort nicht sichtbar ist, existiert es fur potenzielle Kunden nicht. Lokale SEO sorgt dafur, dass Sie genau dann erscheinen, wenn jemand in Ihrer Region nach Ihrer Dienstleistung sucht.
                            </p>

                            <div className="sp-what-you-get animate-up">
                                <h3>Was Sie bekommen</h3>
                                <ul className="check-list">
                                    <li>Vollstandige technische SEO-Analyse und Optimierung</li>
                                    <li>Lokale SEO: Google Business Profile, Citations, lokale Keywords</li>
                                    <li>On-Page-Optimierung aller relevanten Seiten</li>
                                    <li>Content-Strategie basierend auf echten Suchanfragen</li>
                                    <li>Monatliches Reporting mit allen relevanten KPIs</li>
                                    <li>Keyword-Tracking: Sie sehen live, wo Sie ranken</li>
                                    <li>Wettbewerber-Monitoring</li>
                                </ul>
                            </div>

                            <div className="sp-transparency-box animate-up">
                                <h3>So sehen Sie Ihre Ergebnisse</h3>
                                <p>Sie erhalten Zugang zu einem Live-Dashboard. Dort sehen Sie jederzeit: aktuelle Rankings, organischen Traffic, Sichtbarkeits-Entwicklung und konkrete Leads, die uber die Suche kommen. Kein Raten, nur Fakten.</p>
                            </div>
                        </div>

                        <div className="sp-service-sidebar">
                            <div className="sp-price-card bull-boundary animate-up">
                                <p className="sp-price-label">SEO Monatlich</p>
                                <div className="sp-price-value">ab 1.000 &euro;/Mt.</div>
                                <p className="sp-price-desc">Laufende Optimierung fur nachhaltige Sichtbarkeit. Mindestlaufzeit 3 Monate, danach monatlich kundbar.</p>
                                <ul className="sp-price-includes">
                                    <li>Technisches SEO</li>
                                    <li>On-Page-Optimierung</li>
                                    <li>Lokale SEO / Google Maps</li>
                                    <li>Content-Optimierung</li>
                                    <li>Monatlicher Report</li>
                                    <li>Live-Dashboard-Zugang</li>
                                </ul>
                            </div>
                            <p className="sp-price-note animate-up">Erste Ergebnisse typischerweise nach 4-8 Wochen. Volle Wirkung nach 3-6 Monaten. Wenn die Ergebnisse nicht stimmen, arbeite ich weiter, ohne Aufpreis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sp-divider"><div className="container"><hr /></div></div>

            {/* SERVICE 3: AI SEO */}
            <section id="ai-seo" className="sp-service section">
                <div className="container">
                    <div className="sp-service-layout">
                        <div className="sp-service-content">
                            <p className="section-kicker animate-up">AI SEO</p>
                            <h2 className="section-title animate-up">Sichtbar in ChatGPT, Perplexity und AI-Suche.</h2>
                            <p className="large-text animate-up">
                                Die Art, wie Menschen suchen, verandert sich. Immer mehr Nutzer stellen ihre Fragen an ChatGPT, Perplexity oder Google AI Overviews statt klassisch zu googeln. Wenn Ihre Website dort nicht als Quelle auftaucht, verlieren Sie einen wachsenden Kanal.
                            </p>

                            <div className="sp-what-you-get animate-up">
                                <h3>Was Sie bekommen</h3>
                                <ul className="check-list">
                                    <li>Analyse: Wie sichtbar ist Ihr Unternehmen in AI-Antworten?</li>
                                    <li>Strukturierte Daten (Schema Markup) fur AI-Verstandnis</li>
                                    <li>Content-Optimierung fur AI-Zitation und Snippet-Eignung</li>
                                    <li>Autoritats-Aufbau: Signale, die AI-Modelle als vertrauenswurdig werten</li>
                                    <li>Google AI Overviews Optimierung</li>
                                    <li>Monitoring: Tracking Ihrer Sichtbarkeit in AI-Antworten</li>
                                </ul>
                            </div>

                            <div className="sp-transparency-box animate-up">
                                <h3>Warum das jetzt relevant ist</h3>
                                <p>AI-Suche wachst monatlich. Unternehmen, die heute ihre Inhalte fur AI optimieren, sichern sich einen Vorsprung, der spater schwer einzuholen ist. Es ist das SEO von morgen, und es beginnt jetzt.</p>
                            </div>
                        </div>

                        <div className="sp-service-sidebar">
                            <div className="sp-price-card bull-boundary animate-up">
                                <p className="sp-price-label">AI SEO Monatlich</p>
                                <div className="sp-price-value">ab 1.200 &euro;/Mt.</div>
                                <p className="sp-price-desc">Alles aus dem SEO-Paket plus gezielte AI-Sichtbarkeits-Optimierung. Ideal als Erweiterung oder eigenstehend.</p>
                                <ul className="sp-price-includes">
                                    <li>Alles aus SEO inklusive</li>
                                    <li>AI-Sichtbarkeits-Audit</li>
                                    <li>Schema Markup / Structured Data</li>
                                    <li>AI-optimierte Content-Strategie</li>
                                    <li>AI-Antwort-Monitoring</li>
                                </ul>
                            </div>
                            <p className="sp-price-note animate-up">Kann als Upgrade zum SEO-Paket oder als eigenstehende Leistung gebucht werden.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sp-divider"><div className="container"><hr /></div></div>

            {/* SERVICE 4: ADS */}
            <section id="ads" className="sp-service section">
                <div className="container">
                    <div className="sp-service-layout">
                        <div className="sp-service-content">
                            <p className="section-kicker animate-up">Google & Local Ads</p>
                            <h2 className="section-title animate-up">Sofort sichtbar. Sofort Anfragen.</h2>
                            <p className="large-text animate-up">
                                SEO braucht Zeit. Ads liefern sofort. Ich schalte Google Ads und Local Services Ads, die genau die Menschen erreichen, die gerade aktiv nach Ihrer Dienstleistung suchen. Jeder Euro wird getrackt. Sie sehen genau, was er bringt.
                            </p>

                            <div className="sp-what-you-get animate-up">
                                <h3>Was Sie bekommen</h3>
                                <ul className="check-list">
                                    <li>Kampagnen-Setup: Keyword-Recherche, Anzeigentexte, Struktur</li>
                                    <li>Google Search Ads fur kaufbereite Suchende</li>
                                    <li>Local Services Ads fur lokale Dienstleister</li>
                                    <li>Conversion Tracking: Jeder Anruf, jede Anfrage wird gemessen</li>
                                    <li>Laufende Optimierung: Budgets, Keywords, Gebote</li>
                                    <li>Monatlicher Report mit Kosten pro Lead und ROI</li>
                                    <li>Voller Zugang zu Ihrem Google Ads Konto, es gehort Ihnen</li>
                                </ul>
                            </div>

                            <div className="sp-transparency-box animate-up">
                                <h3>Ihr Geld, Ihre Kontrolle</h3>
                                <p>Ihr Werbebudget lauft uber Ihr eigenes Google-Konto. Sie sehen jeden Cent, jede Kampagne, jedes Ergebnis. Ich verstecke nichts. Wenn eine Kampagne nicht performt, sage ich es Ihnen und optimiere, bis es stimmt.</p>
                            </div>
                        </div>

                        <div className="sp-service-sidebar">
                            <div className="sp-price-card bull-boundary animate-up">
                                <p className="sp-price-label">Ads Management</p>
                                <div className="sp-price-value">ab 500 &euro;/Mt.</div>
                                <p className="sp-price-desc">Management-Fee fur Kampagnenerstellung und laufende Optimierung. Werbebudget kommt separat dazu (Sie bestimmen die Hohe).</p>
                                <ul className="sp-price-includes">
                                    <li>Kampagnen-Setup & Struktur</li>
                                    <li>Keyword-Recherche</li>
                                    <li>Anzeigentexte & Erweiterungen</li>
                                    <li>Conversion Tracking</li>
                                    <li>Laufende Optimierung</li>
                                    <li>Monatlicher Performance-Report</li>
                                </ul>
                            </div>
                            <p className="sp-price-note animate-up">Empfohlenes Mindest-Werbebudget: 500 &euro;/Mt. Je nach Branche und Region konnen auch kleinere Budgets sinnvoll sein. Das klaren wir im Erstgesprach.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sp-divider"><div className="container"><hr /></div></div>

            {/* SERVICE 5: AUDIT */}
            <section id="audit" className="sp-service section">
                <div className="container">
                    <div className="sp-service-layout">
                        <div className="sp-service-content">
                            <p className="section-kicker animate-up">Website-Audit</p>
                            <h2 className="section-title animate-up">Wissen, wo Sie stehen, bevor Sie investieren.</h2>
                            <p className="large-text animate-up">
                                Bevor wir uber Losungen sprechen, analysiere ich Ihre aktuelle Situation. Was funktioniert? Was kostet Sie Kunden? Wo liegt das grosste Potenzial? Das Audit ist kostenlos, ehrlich und konkret, mit klaren Handlungsempfehlungen, die Sie auch ohne mich umsetzen konnen.
                            </p>

                            <div className="sp-what-you-get animate-up">
                                <h3>Was das Audit umfasst</h3>
                                <ul className="check-list">
                                    <li>Performance-Check: Ladezeiten, Core Web Vitals, Mobile-Tauglichkeit</li>
                                    <li>SEO-Analyse: Rankings, technische Fehler, verpasste Chancen</li>
                                    <li>Struktur-Bewertung: Ist der Conversion-Pfad klar?</li>
                                    <li>Wettbewerber-Vergleich: Wo stehen Sie im Vergleich?</li>
                                    <li>Konkrete Handlungsempfehlungen mit Prioritaten</li>
                                    <li>Personliches Gesprach zur Besprechung der Ergebnisse</li>
                                </ul>
                            </div>
                        </div>

                        <div className="sp-service-sidebar">
                            <div className="sp-price-card sp-price-card-free bull-boundary animate-up">
                                <p className="sp-price-label">Website-Audit</p>
                                <div className="sp-price-value">Kostenlos</div>
                                <p className="sp-price-desc">Kein Haken. Kein Kleingedrucktes. Sie erhalten eine ehrliche Analyse und entscheiden selbst, ob und wie Sie weiter vorgehen wollen.</p>
                                <ul className="sp-price-includes">
                                    <li>Performance & Speed</li>
                                    <li>SEO-Status</li>
                                    <li>Conversion-Analyse</li>
                                    <li>Wettbewerber-Vergleich</li>
                                    <li>Personliches Gesprach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMMITMENT SECTION */}
            <section className="sp-commitment section dark-blue-bg">
                <div className="container text-center">
                    <h2 className="section-title animate-up" style={{ color: '#fff' }}>Mein Versprechen an Sie.</h2>
                    <div className="sp-commitment-grid">
                        <div className="sp-commitment-item animate-up">
                            <div className="sp-commitment-num">01</div>
                            <h3>Ergebnis zahlt</h3>
                            <p>Ich arbeite fur Ergebnisse, nicht fur Stunden. Wenn das Ergebnis nicht stimmt, optimiere ich weiter, ohne Aufpreis, bis Sie zufrieden sind.</p>
                        </div>
                        <div className="sp-commitment-item animate-up delay-1">
                            <div className="sp-commitment-num">02</div>
                            <h3>Volle Transparenz</h3>
                            <p>Sie haben jederzeit Zugang zu allen Daten, Reports und Ergebnissen. Ich kann Ihnen in jeder Sekunde zeigen, was lauft und was es bringt.</p>
                        </div>
                        <div className="sp-commitment-item animate-up delay-2">
                            <div className="sp-commitment-num">03</div>
                            <h3>Ihre Daten, Ihr Eigentum</h3>
                            <p>Alle Konten, Zugange und Daten gehoren Ihnen. Wenn Sie morgen wechseln wollen, nehmen Sie alles mit. Kein Lock-in.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wissen */}
            <section className="section light-bg">
                <div className="container">
                    <div className="section-header text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                        <p className="section-kicker animate-up">Wissen</p>
                        <h2 className="section-title animate-up">Artikel & Guides</h2>
                    </div>
                    <div className="wissen-grid animate-up">
                        <Link href="/wissen/webdesign-kosten" className="wissen-card">
                            <div className="wissen-card-meta"><span className="wissen-card-category">WEBDESIGN</span></div>
                            <h3 className="wissen-card-title"><span>Webdesign Kosten 2026: Was eine professionelle Website wirklich kostet</span></h3>
                            <p className="wissen-card-excerpt">Von 500 bis 50.000 Euro: Was bestimmt den Preis? Kostenguide mit Preisbeispielen und versteckten Kosten.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                        <Link href="/wissen/lokales-seo-hamburg-guide" className="wissen-card">
                            <div className="wissen-card-meta"><span className="wissen-card-category">SEO</span></div>
                            <h3 className="wissen-card-title"><span>Lokales SEO in Hamburg: Der komplette Leitfaden fur 2026</span></h3>
                            <p className="wissen-card-excerpt">Von Google Business Profile bis lokale Keywords: alles, was Sie wissen mussen, um in Hamburg gefunden zu werden.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                        <Link href="/wissen/google-ads-fehler-lokale-unternehmen" className="wissen-card">
                            <div className="wissen-card-meta"><span className="wissen-card-category">GOOGLE ADS</span></div>
                            <h3 className="wissen-card-title"><span>Die 7 teuersten Google Ads Fehler lokaler Unternehmen</span></h3>
                            <p className="wissen-card-excerpt">Von falschen Keywords bis fehlendem Conversion-Tracking: diese Fehler verbrennen Ihr Werbebudget.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                        <Link href="/wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen" className="wissen-card">
                            <div className="wissen-card-meta"><span className="wissen-card-category">AI SEO</span></div>
                            <h3 className="wissen-card-title"><span>AI SEO: Was Unternehmen jetzt wissen mussen</span></h3>
                            <p className="wissen-card-excerpt">ChatGPT, Perplexity, Google AI Overviews verandern die Suche. Wie Sie sicherstellen, dass Ihr Unternehmen als Quelle erscheint.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                    </div>
                    <div className="text-center" style={{ marginTop: 'var(--space-xl)' }}>
                        <Link href="/wissen" className="button">Alle Artikel ansehen</Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="sp-faq section light-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-kicker animate-up">Haufige Fragen</p>
                        <h2 className="section-title animate-up">Klarheit vor dem Start.</h2>
                    </div>
                    <div className="sp-faq-list">
                        <FaqItem
                            q="Wie lange dauert die Erstellung einer Website?"
                            a="Ein One-Pager ist typischerweise in 2-3 Wochen fertig. Eine mehrseitige Website in 4-6 Wochen. Abhangig von Umfang und Ihrem Feedback-Tempo."
                        />
                        <FaqItem
                            q="Muss ich mich langfristig binden?"
                            a="Nein. Bei SEO und Ads empfehle ich mindestens 3 Monate, damit die Massnahmen wirken konnen. Danach ist alles monatlich kundbar. Bei Websites zahlen Sie einmalig."
                        />
                        <FaqItem
                            q="Was passiert, wenn die Ergebnisse nicht stimmen?"
                            a="Dann arbeite ich weiter. Ich bin nicht zufrieden, wenn Sie es nicht sind. Das bedeutet: Analyse, Anpassung, Optimierung, bis das Ergebnis stimmt. Das ist keine Floskel, das ist mein Geschaftsmodell."
                        />
                        <FaqItem
                            q="Brauche ich SEO und Ads gleichzeitig?"
                            a="Nicht unbedingt. Ads liefern sofort Ergebnisse, SEO baut langfristig organischen Traffic auf. Ideal ist eine Kombination, aber wir finden im Gesprach heraus, was fur Ihre Situation am sinnvollsten ist."
                        />
                        <FaqItem
                            q="Was ist der Unterschied zwischen SEO und AI SEO?"
                            a="Klassisches SEO optimiert fur Google-Rankings. AI SEO sorgt zusatzlich dafur, dass Ihr Unternehmen in AI-Antworten (ChatGPT, Perplexity, Google AI Overviews) als Quelle erscheint. AI SEO baut auf SEO auf."
                        />
                        <FaqItem
                            q="Kann ich die Ergebnisse wirklich jederzeit einsehen?"
                            a="Ja. Sie bekommen Zugang zu Live-Dashboards fur SEO-Rankings, Traffic und Ads-Performance. Dazu monatliche Reports mit Zusammenfassung. Kein Warten auf Updates, die Daten sind immer da."
                        />
                        <FaqItem
                            q="Warum sollte ich nicht einfach eine gunstigere Agentur nehmen?"
                            a="Konnen Sie. Aber fragen Sie vorher: Bekommen Sie Zugang zu allen Daten? Arbeiten die weiter, wenn Ergebnisse ausbleiben? Ist der Code individuell oder ein Template? Sie zahlen bei mir nicht fur Overhead, sondern fur Ergebnisse und direkte Kommunikation ohne Umwege."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="kontakt" className="sp-cta section">
                <div className="container">
                    <div className="cta-box bull-boundary animate-up">
                        <p className="section-kicker">Bereit?</p>
                        <h2 className="section-title">Lassen Sie uns sprechen.</h2>
                        <p className="offer-framing">
                            Kostenloses Erstgesprach oder Website-Audit, Sie entscheiden. Erzahlen Sie mir von Ihrem Unternehmen und ich sage Ihnen ehrlich, wo das Potenzial liegt.
                        </p>
                        <div className="cta-actions mt-4">
                            <Link href="/kontakt" className="button button-primary button-large" data-umami-event="cta-click" data-umami-event-location="services-cta">
                                Jetzt Analyse anfordern
                            </Link>
                            <a href="tel:+4917632194754" className="cta-phone" data-umami-event="phone-call" data-umami-event-location="services-cta">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                0176 / 321 94 754
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
