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
                    <div className="subpage-hero-split">
                        <div>
                            <p className="section-kicker animate-up">Leistungen & Preise</p>
                            <h1 className="section-title animate-up" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                                Klare Leistungen. Faire Preise. Echte Ergebnisse.
                            </h1>
                            <p className="large-text animate-up" style={{ maxWidth: 680 }}>
                                Keine versteckten Kosten, keine vagen Versprechen. Sie wissen genau, was Sie bekommen, und können die Ergebnisse jederzeit einsehen. Ich arbeite datenbasiert, kommuniziere transparent und optimiere, bis das Ergebnis stimmt.
                            </p>
                        </div>
                        <div className="subpage-hero-media animate-up">
                            <img src="/leistungen/hero-leistungen.svg" alt="Illustration: vier Leistungskarten im Raster mit Browserfenster, Lupe, Sprechblase und Anzeigenblock, eine Karte rot hervorgehoben" width="1200" height="900" />
                        </div>
                    </div>
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
                            <h2 className="section-title animate-up">Eine Website, die für Sie arbeitet, nicht nur existiert.</h2>
                            <p className="large-text animate-up">
                                Ihre Website ist Ihr wichtigster Vertriebsmitarbeiter. Sie arbeitet 24/7, empfängt jeden Besucher und entscheidet in Sekunden, ob aus Interesse eine Anfrage wird. Ich baue Websites, die genau das tun: schnell, klar strukturiert und auf Conversion optimiert.
                            </p>

                            <div className="sp-what-you-get animate-up">
                                <h3>Was Sie bekommen</h3>
                                <ul className="check-list">
                                    <li>Individuelles Design, kein Template, kein Baukasten</li>
                                    <li>Blitzschnelle Ladezeiten (PageSpeed 90-100)</li>
                                    <li>Klare Nutzerführung mit durchdachtem Conversion-Pfad</li>
                                    <li>Responsive auf allen Geräten</li>
                                    <li>SEO-Grundoptimierung inklusive</li>
                                    <li>CMS-Integration oder statische Seite, je nach Bedarf</li>
                                    <li>SSL, DSGVO-konform, technisch einwandfrei</li>
                                </ul>
                            </div>

                            <div className="sp-how-it-works animate-up">
                                <h3>Wie es abläuft</h3>
                                <div className="sp-steps">
                                    <div className="sp-step">
                                        <span className="sp-step-num">1</span>
                                        <div>
                                            <strong>Erstgespräch</strong>
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
                                <p className="sp-price-label">Website-Start</p>
                                <div className="sp-price-value">ab 1.500 &euro;</div>
                                <p className="sp-price-desc">Der schnelle Einstieg: eine Seite auf Basis eines bewährten Layouts, mit Ihren Texten und Fotos. In 2 bis 5 Arbeitstagen online.</p>
                                <ul className="sp-price-includes">
                                    <li>1 Seite, responsiv</li>
                                    <li>Bewährtes Layout</li>
                                    <li>Ihre Texte und Fotos</li>
                                    <li>Fertig in 2 bis 5 Arbeitstagen</li>
                                </ul>
                            </div>
                            <div className="sp-price-card bull-boundary animate-up delay-1">
                                <p className="sp-price-label">Conversion Landingpage</p>
                                <div className="sp-price-value">ab 2.900 &euro;</div>
                                <p className="sp-price-desc">Für eine konkrete Dienstleistung oder Kampagne. Inklusive Struktur, Design, Entwicklung, Tracking und SEO-Grundlage.</p>
                                <ul className="sp-price-includes">
                                    <li>1 Seite, responsiv</li>
                                    <li>Kontaktformular</li>
                                    <li>SEO-Grundsetup</li>
                                    <li>PageSpeed-optimiert</li>
                                </ul>
                            </div>
                            <div className="sp-price-card bull-boundary animate-up delay-1">
                                <p className="sp-price-label">Unternehmenswebsite</p>
                                <div className="sp-price-value">ab 4.500 &euro;</div>
                                <p className="sp-price-desc">Mehrseitige Website mit Leistungsseiten, Referenzen, CMS und Conversion-Tracking.</p>
                                <ul className="sp-price-includes">
                                    <li>5+ Seiten</li>
                                    <li>CMS (Inhalte selbst pflegen)</li>
                                    <li>Blog / News optional</li>
                                    <li>Erweiterte SEO-Optimierung</li>
                                    <li>Conversion Tracking</li>
                                </ul>
                            </div>
                            <p className="sp-price-note animate-up">Finale Preise nach kostenlosem Erstgespräch. Kein Angebot ohne Ihre Anforderungen zu verstehen.</p>
                        </div>
                    </div>

                    <div className="sp-branch-links animate-up" style={{ marginTop: '2rem' }}>
                        <h3>Webdesign für Ihre Branche</h3>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                            <Link href="/leistungen/webdesign-handwerker" className="button button-secondary">Handwerker</Link>
                            <Link href="/leistungen/webdesign-aerzte" className="button button-secondary">Arztpraxen</Link>
                            <Link href="/leistungen/webdesign-anwaelte" className="button button-secondary">Anwälte</Link>
                            <Link href="/leistungen/webdesign-steuerberater" className="button button-secondary">Steuerberater</Link>
                            <Link href="/leistungen/webdesign-gastronomie" className="button button-secondary">Gastronomie</Link>
                            <Link href="/leistungen/webdesign-hotels" className="button button-secondary">Hotels</Link>
                            <Link href="/leistungen/webdesign-immobilienmakler" className="button button-secondary">Immobilienmakler</Link>
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
                                93% aller Online-Erfahrungen beginnen mit einer Suchmaschine. Wenn Ihr Unternehmen dort nicht sichtbar ist, existiert es für potenzielle Kunden nicht. Lokale SEO sorgt dafür, dass Sie genau dann erscheinen, wenn jemand in Ihrer Region nach Ihrer Dienstleistung sucht.
                            </p>

                            <div className="sp-what-you-get animate-up">
                                <h3>Was Sie bekommen</h3>
                                <ul className="check-list">
                                    <li>Vollständige technische SEO-Analyse und Optimierung</li>
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
                                <p>Sie erhalten Zugang zu einem Live-Dashboard. Dort sehen Sie jederzeit: aktuelle Rankings, organischen Traffic, Sichtbarkeits-Entwicklung und konkrete Leads, die über die Suche kommen. Kein Raten, nur Fakten.</p>
                            </div>
                        </div>

                        <div className="sp-service-sidebar">
                            <div className="sp-price-card bull-boundary animate-up">
                                <p className="sp-price-label">SEO Monatlich</p>
                                <div className="sp-price-value">ab 1.000 &euro;/Mt.</div>
                                <p className="sp-price-desc">Laufende Optimierung für nachhaltige Sichtbarkeit. Mindestlaufzeit 3 Monate, danach monatlich kündbar.</p>
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
                                Die Art, wie Menschen suchen, verändert sich. Immer mehr Nutzer stellen ihre Fragen an ChatGPT, Perplexity oder Google AI Overviews statt klassisch zu googeln. Wenn Ihre Website dort nicht als Quelle auftaucht, verlieren Sie einen wachsenden Kanal.
                            </p>

                            <div className="sp-what-you-get animate-up">
                                <h3>Was Sie bekommen</h3>
                                <ul className="check-list">
                                    <li>Analyse: Wie sichtbar ist Ihr Unternehmen in AI-Antworten?</li>
                                    <li>Strukturierte Daten (Schema Markup) für AI-Verständnis</li>
                                    <li>Content-Optimierung für AI-Zitation und Snippet-Eignung</li>
                                    <li>Autoritäts-Aufbau: Signale, die AI-Modelle als vertrauenswürdig werten</li>
                                    <li>Google AI Overviews Optimierung</li>
                                    <li>Monitoring: Tracking Ihrer Sichtbarkeit in AI-Antworten</li>
                                </ul>
                            </div>

                            <div className="sp-transparency-box animate-up">
                                <h3>Warum das jetzt relevant ist</h3>
                                <p>AI-Suche wachst monatlich. Unternehmen, die heute ihre Inhalte für AI optimieren, sichern sich einen Vorsprung, der später schwer einzuholen ist. Es ist das SEO von morgen, und es beginnt jetzt.</p>
                            </div>
                        </div>

                        <div className="sp-service-sidebar">
                            <div className="sp-price-card sp-price-card-free bull-boundary animate-up">
                                <p className="sp-price-label">KI-Kurzanalyse</p>
                                <div className="sp-price-value">0 &euro;</div>
                                <p className="sp-price-desc">15 Minuten. Wir schauen live nach, ob Sie in KI-Antworten genannt werden. Kein Report, keine Verpflichtung.</p>
                                <ul className="sp-price-includes">
                                    <li>Werden Sie aktuell genannt?</li>
                                    <li>Wer wird stattdessen empfohlen?</li>
                                    <li>Die drei wichtigsten Hebel</li>
                                </ul>
                            </div>
                            <div className="sp-price-card bull-boundary animate-up">
                                <p className="sp-price-label">AI Visibility Sprint</p>
                                <div className="sp-price-value">ab 1.500 &euro;</div>
                                <p className="sp-price-desc">Einmalig. Ihre wichtigsten Seiten werden für AI-Antworten aufbereitet, mit Messung vorher und nachher. Ergebnis in 10 bis 14 Tagen.</p>
                                <ul className="sp-price-includes">
                                    <li>AI-Sichtbarkeits-Analyse</li>
                                    <li>Optimierung der wichtigsten Seiten</li>
                                    <li>Schema Markup / Structured Data</li>
                                    <li>Crawler-Konfiguration und Indexierung</li>
                                    <li>Messung vorher und nachher</li>
                                </ul>
                            </div>
                            <div className="sp-price-card bull-boundary animate-up delay-1">
                                <p className="sp-price-label">AI Visibility Betreuung</p>
                                <div className="sp-price-value">ab 600 &euro;/Mt.</div>
                                <p className="sp-price-desc">Optional nach dem Sprint, monatlich kündbar. Für Unternehmen, die ihre Position halten und ausbauen wollen.</p>
                                <ul className="sp-price-includes">
                                    <li>Laufendes AI-Antwort-Monitoring</li>
                                    <li>Neue zitierfähige Inhalte</li>
                                    <li>Autoritäts- und Vertrauensaufbau</li>
                                    <li>Monatlicher Report</li>
                                </ul>
                            </div>
                            <p className="sp-price-note animate-up">Kein teurer Vertrag, bevor Sie wissen, was der Kanal bringt. Erst der kostenlose Call, dann der Sprint, dann entscheiden Sie über die Betreuung.</p>
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
                                    <li>Google Search Ads für kaufbereite Suchende</li>
                                    <li>Local Services Ads für lokale Dienstleister</li>
                                    <li>Conversion Tracking: Jeder Anruf, jede Anfrage wird gemessen</li>
                                    <li>Laufende Optimierung: Budgets, Keywords, Gebote</li>
                                    <li>Monatlicher Report mit Kosten pro Lead und ROI</li>
                                    <li>Voller Zugang zu Ihrem Google Ads Konto, es gehört Ihnen</li>
                                </ul>
                            </div>

                            <div className="sp-transparency-box animate-up">
                                <h3>Ihr Geld, Ihre Kontrolle</h3>
                                <p>Ihr Werbebudget läuft über Ihr eigenes Google-Konto. Sie sehen jeden Cent, jede Kampagne, jedes Ergebnis. Ich verstecke nichts. Wenn eine Kampagne nicht performt, sage ich es Ihnen und optimiere, bis es stimmt.</p>
                            </div>
                        </div>

                        <div className="sp-service-sidebar">
                            <div className="sp-price-card bull-boundary animate-up">
                                <p className="sp-price-label">Kampagnen-Setup</p>
                                <div className="sp-price-value">ab 700 &euro;</div>
                                <p className="sp-price-desc">Einmalig. Das Konto steht sauber aufgesetzt und messbar da, auch wenn Sie danach selbst weitermachen wollen.</p>
                                <ul className="sp-price-includes">
                                    <li>Kampagnen-Struktur & Kontoaufbau</li>
                                    <li>Keyword-Recherche</li>
                                    <li>Anzeigentexte & Erweiterungen</li>
                                    <li>Conversion Tracking</li>
                                </ul>
                            </div>
                            <div className="sp-price-card bull-boundary animate-up delay-1">
                                <p className="sp-price-label">Laufende Betreuung</p>
                                <div className="sp-price-value">ab 500 &euro;/Mt.</div>
                                <p className="sp-price-desc">Monatlich kündbar. Werbebudget kommt separat dazu (Sie bestimmen die Höhe).</p>
                                <ul className="sp-price-includes">
                                    <li>Wöchentliche Optimierung</li>
                                    <li>Anzeigen- und Landingpage-Tests</li>
                                    <li>Monatlicher Performance-Report</li>
                                </ul>
                            </div>
                            <p className="sp-price-note animate-up">Dazu kommt Ihr Werbebudget, empfohlen sind mindestens 500 &euro;/Mt. Es läuft über Ihr eigenes Google-Konto, ich verdiene daran nichts. Den passenden Rahmen klaren wir im Erstgespräch.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sp-divider"><div className="container"><hr /></div></div>

            {/* SERVICE 5: CHATGPT ADS */}
            <section id="chatgpt-ads" className="sp-service section">
                <div className="container">
                    <div className="sp-service-layout">
                        <div className="sp-service-content">
                            <p className="section-kicker animate-up">Neu: ChatGPT Ads</p>
                            <h2 className="section-title animate-up">Werbung in ChatGPT, bevor es teuer wird.</h2>
                            <p className="large-text animate-up">
                                Seit dem 24. August 2026 laufen Anzeigen in ChatGPT auch in Deutschland, seit dem 31. August 2026 ist der OpenAI Ads Manager im Self-Service buchbar. Ich schalte seit dem Start eigene Kampagnen und baue sie jetzt für Unternehmen auf, die den Vorsprung mitnehmen wollen. <Link href="/leistungen/chatgpt-ads">Alles zu ChatGPT Ads</Link>
                            </p>

                            <div className="sp-what-you-get animate-up">
                                <h3>Was Sie bekommen</h3>
                                <ul className="check-list">
                                    <li>Ads-Manager-Konto auf Ihren Namen, Kampagnenstruktur, Gebotsstrategie</li>
                                    <li>Kontext-Hinweise statt Keywords: die eigentliche Steuerung in diesem Kanal</li>
                                    <li>Anzeigentexte und Bild-Assets in mehreren Varianten</li>
                                    <li>Conversion-Tracking über OpenAI-Pixel und Conversions API</li>
                                    <li>Wöchentliche Optimierung, monatlicher Report</li>
                                    <li>Nach vier Wochen eine ehrliche Bilanz: ausbauen, umbauen oder stoppen</li>
                                </ul>
                            </div>

                            <div className="sp-transparency-box animate-up">
                                <h3>Ehrlich zum Zeitpunkt</h3>
                                <p>Belastbare Branchen-Benchmarks gibt es für diesen Kanal noch nicht, auch OpenAI veröffentlicht keine. Wer Ihnen heute exakte Klickpreise verspricht, rät. Ich sage Ihnen, was ich in meinen eigenen Konten sehe, und rechne im Kurzcheck mit Ihren Zahlen durch, ob sich der Test trägt.</p>
                            </div>
                        </div>

                        <div className="sp-service-sidebar">
                            <div className="sp-price-card bull-boundary animate-up">
                                <p className="sp-price-label">Kampagnen-Setup</p>
                                <div className="sp-price-value">ab 700 &euro;</div>
                                <p className="sp-price-desc">Einmalig. Konto, Kampagne und Messung stehen sauber, auch wenn Sie danach selbst weitermachen.</p>
                                <ul className="sp-price-includes">
                                    <li>Konto- und Kampagnenaufbau</li>
                                    <li>Kontext-Hinweise & Geo-Targeting</li>
                                    <li>Anzeigen und Bild-Assets</li>
                                    <li>Pixel & Conversions API</li>
                                </ul>
                            </div>
                            <div className="sp-price-card bull-boundary animate-up delay-1">
                                <p className="sp-price-label">Laufende Betreuung</p>
                                <div className="sp-price-value">ab 500 &euro;/Mt.</div>
                                <p className="sp-price-desc">Monatlich kündbar. Werbebudget kommt separat dazu und läuft über Ihr eigenes OpenAI-Konto.</p>
                                <ul className="sp-price-includes">
                                    <li>Gebote, Hinweise, Kreative</li>
                                    <li>Landingpage-Tests</li>
                                    <li>Monatlicher Report</li>
                                </ul>
                            </div>
                            <p className="sp-price-note animate-up">Als Testbudget empfehle ich mindestens 500 &euro;/Mt. über zwei bis drei Monate. OpenAI empfiehlt für Klick-Kampagnen ein Start-Höchstgebot von 3 bis 5 US-Dollar pro Klick.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sp-divider"><div className="container"><hr /></div></div>

            {/* SERVICE 6: AUDIT */}
            <section id="audit" className="sp-service section">
                <div className="container">
                    <div className="sp-service-layout">
                        <div className="sp-service-content">
                            <p className="section-kicker animate-up">Website-Audit</p>
                            <h2 className="section-title animate-up">Wissen, wo Sie stehen, bevor Sie investieren.</h2>
                            <p className="large-text animate-up">
                                Bevor wir über Lösungen sprechen, analysiere ich Ihre aktuelle Situation. Was funktioniert? Was kostet Sie Kunden? Wo liegt das größte Potenzial? Das Audit ist kostenlos, ehrlich und konkret, mit klaren Handlungsempfehlungen, die Sie auch ohne mich umsetzen können.
                            </p>

                            <div className="sp-what-you-get animate-up">
                                <h3>Was das Audit umfasst</h3>
                                <ul className="check-list">
                                    <li>Performance-Check: Ladezeiten, Core Web Vitals, Mobile-Tauglichkeit</li>
                                    <li>SEO-Analyse: Rankings, technische Fehler, verpasste Chancen</li>
                                    <li>Struktur-Bewertung: Ist der Conversion-Pfad klar?</li>
                                    <li>Wettbewerber-Vergleich: Wo stehen Sie im Vergleich?</li>
                                    <li>Konkrete Handlungsempfehlungen mit Prioritäten</li>
                                    <li>Persönliches Gespräch zur Besprechung der Ergebnisse</li>
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
                                    <li>Persönliches Gespräch</li>
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
                            <h3>Ergebnis zählt</h3>
                            <p>Ich arbeite für Ergebnisse, nicht für Stunden. Wenn das Ergebnis nicht stimmt, optimiere ich weiter, ohne Aufpreis, bis Sie zufrieden sind.</p>
                        </div>
                        <div className="sp-commitment-item animate-up delay-1">
                            <div className="sp-commitment-num">02</div>
                            <h3>Volle Transparenz</h3>
                            <p>Sie haben jederzeit Zugang zu allen Daten, Reports und Ergebnissen. Ich kann Ihnen in jeder Sekunde zeigen, was läuft und was es bringt.</p>
                        </div>
                        <div className="sp-commitment-item animate-up delay-2">
                            <div className="sp-commitment-num">03</div>
                            <h3>Ihre Daten, Ihr Eigentum</h3>
                            <p>Alle Konten, Zugänge und Daten gehören Ihnen. Wenn Sie morgen wechseln wollen, nehmen Sie alles mit. Kein Lock-in.</p>
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
                            <div className="wissen-card-media">
                                <img src="/wissen/cards/webdesign-kosten.webp" alt="Illustration: drei Preisschilder in aufsteigender Groesse vor einem Browserfenster" width="760" height="494" loading="lazy" decoding="async" />
                            </div>
                            <div className="wissen-card-meta"><span className="wissen-card-category">WEBDESIGN</span></div>
                            <h3 className="wissen-card-title"><span>Webdesign Kosten 2026: Was eine professionelle Website wirklich kostet</span></h3>
                            <p className="wissen-card-excerpt">Von 500 bis 50.000 Euro: Was bestimmt den Preis? Kostenguide mit Preisbeispielen und versteckten Kosten.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                        <Link href="/wissen/lokales-seo-hamburg-guide" className="wissen-card">
                            <div className="wissen-card-media">
                                <img src="/wissen/cards/lokales-seo-hamburg-guide.webp" alt="Illustration: Stadtkarte eines Hafenviertels mit zentralem Standort-Pin und schwebenden Suchergebnissen" width="760" height="494" loading="lazy" decoding="async" />
                            </div>
                            <div className="wissen-card-meta"><span className="wissen-card-category">SEO</span></div>
                            <h3 className="wissen-card-title"><span>Lokales SEO in Hamburg: Der komplette Leitfaden für 2026</span></h3>
                            <p className="wissen-card-excerpt">Von Google Business Profile bis lokale Keywords: alles, was Sie wissen müssen, um in Hamburg gefunden zu werden.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                        <Link href="/wissen/google-ads-fehler-lokale-unternehmen" className="wissen-card">
                            <div className="wissen-card-media">
                                <img src="/wissen/cards/google-ads-fehler-lokale-unternehmen.webp" alt="Illustration: Anzeigenpanel ueber einem Trichter, aus dessen Riss Muenzen herausfallen" width="760" height="494" loading="lazy" decoding="async" />
                            </div>
                            <div className="wissen-card-meta"><span className="wissen-card-category">GOOGLE ADS</span></div>
                            <h3 className="wissen-card-title"><span>Die 7 teuersten Google Ads Fehler lokaler Unternehmen</span></h3>
                            <p className="wissen-card-excerpt">Von falschen Keywords bis fehlendem Conversion-Tracking: diese Fehler verbrennen Ihr Werbebudget.</p>
                            <span className="wissen-card-link">Artikel lesen <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                        </Link>
                        <Link href="/wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen" className="wissen-card">
                            <div className="wissen-card-media">
                                <img src="/wissen/cards/ai-seo-was-unternehmen-jetzt-wissen-muessen.webp" alt="Illustration: grosse Antwortkachel mit KI-Funke, verbunden mit drei Quellenkarten" width="760" height="494" loading="lazy" decoding="async" />
                            </div>
                            <div className="wissen-card-meta"><span className="wissen-card-category">AI SEO</span></div>
                            <h3 className="wissen-card-title"><span>AI SEO: Was Unternehmen jetzt wissen müssen</span></h3>
                            <p className="wissen-card-excerpt">ChatGPT, Perplexity, Google AI Overviews verändern die Suche. Wie Sie sicherstellen, dass Ihr Unternehmen als Quelle erscheint.</p>
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
                        <p className="section-kicker animate-up">Häufige Fragen</p>
                        <h2 className="section-title animate-up">Klarheit vor dem Start.</h2>
                    </div>
                    <div className="sp-faq-list">
                        <FaqItem
                            q="Wie lange dauert die Erstellung einer Website?"
                            a="Ein One-Pager ist typischerweise in 2-3 Wochen fertig. Eine mehrseitige Website in 4-6 Wochen. Abhängig von Umfang und Ihrem Feedback-Tempo."
                        />
                        <FaqItem
                            q="Muss ich mich langfristig binden?"
                            a="Nein. Bei SEO und Ads empfehle ich mindestens 3 Monate, damit die Maßnahmen wirken können. Danach ist alles monatlich kündbar. Bei Websites zahlen Sie einmalig."
                        />
                        <FaqItem
                            q="Was passiert, wenn die Ergebnisse nicht stimmen?"
                            a="Dann arbeite ich weiter. Ich bin nicht zufrieden, wenn Sie es nicht sind. Das bedeutet: Analyse, Anpassung, Optimierung, bis das Ergebnis stimmt. Das ist keine Floskel, das ist mein Geschäftsmodell."
                        />
                        <FaqItem
                            q="Brauche ich SEO und Ads gleichzeitig?"
                            a="Nicht unbedingt. Ads liefern sofort Ergebnisse, SEO baut langfristig organischen Traffic auf. Ideal ist eine Kombination, aber wir finden im Gespräch heraus, was für Ihre Situation am sinnvollsten ist."
                        />
                        <FaqItem
                            q="Was ist der Unterschied zwischen SEO und AI SEO?"
                            a="Klassisches SEO optimiert für Google-Rankings. AI SEO sorgt zusätzlich dafür, dass Ihr Unternehmen in AI-Antworten (ChatGPT, Perplexity, Google AI Overviews) als Quelle erscheint. AI SEO baut auf SEO auf."
                        />
                        <FaqItem
                            q="Kann ich die Ergebnisse wirklich jederzeit einsehen?"
                            a="Ja. Sie bekommen Zugang zu Live-Dashboards für SEO-Rankings, Traffic und Ads-Performance. Dazu monatliche Reports mit Zusammenfassung. Kein Warten auf Updates, die Daten sind immer da."
                        />
                        <FaqItem
                            q="Arbeiten Sie allein oder mit einem Team?"
                            a="Sie arbeiten direkt mit mir. Analyse, Website, SEO und Ads mache ich selbst, es gibt keinen Account-Manager dazwischen. Wenn ein Projekt zusätzliche Expertise braucht, etwa bei Design, Text oder Fotografie, hole ich Spezialisten dazu, mit denen ich regelmäßig arbeite. Ihr Ansprechpartner und verantwortlich für das Ergebnis bleibe ich."
                        />
                        <FaqItem
                            q="Warum sollte ich nicht einfach eine gunstigere Agentur nehmen?"
                            a="Können Sie. Aber fragen Sie vorher: Bekommen Sie Zugang zu allen Daten? Arbeiten die weiter, wenn Ergebnisse ausbleiben? Ist der Code individuell oder ein Template? Sie zahlen bei mir nicht für Overhead, sondern für Ergebnisse und direkte Kommunikation ohne Umwege."
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
                            Kostenloses Erstgespräch oder Website-Audit, Sie entscheiden. Erzählen Sie mir von Ihrem Unternehmen und ich sage Ihnen ehrlich, wo das Potenzial liegt.
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
