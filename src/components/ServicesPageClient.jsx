'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaqItem } from './FaqSection';
import VxCta from './VxCta';

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

function Arrow() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

// Prices at a glance (first screen). Each cell jumps to its section.
const overview = [
    { id: 'webdesign', title: 'Webdesign', price: 'ab 1.500 €', note: 'einmalig, Festpreis' },
    { id: 'seo', title: 'SEO', price: 'ab 1.000 €/Mt.', note: '3 Monate Mindestlaufzeit' },
    { id: 'ai-seo', title: 'AI SEO', price: 'ab 1.500 €', note: 'Sprint, Kurzanalyse 0 €' },
    { id: 'ads', title: 'Google Ads', price: 'ab 700 €', note: 'Setup, Betreuung ab 500 €/Mt.' },
    { id: 'chatgpt-ads', title: 'ChatGPT Ads', price: 'ab 1.400 €', note: 'Setup, Betreuung ab 1.000 €/Mt.' },
    { id: 'audit', title: 'Website-Audit', price: 'Kostenlos', note: 'ehrlich und konkret' },
];

const services = [
    {
        id: 'webdesign',
        kicker: 'Webdesign & Entwicklung',
        title: 'Eine Website, die für Sie arbeitet, nicht nur existiert.',
        intro: 'Ihre Website ist Ihr wichtigster Vertriebsmitarbeiter. Sie arbeitet 24/7, empfängt jeden Besucher und entscheidet in Sekunden, ob aus Interesse eine Anfrage wird. Ich baue Websites, die genau das tun: schnell, klar strukturiert und auf Conversion optimiert.',
        tiers: [
            {
                label: 'Website-Start',
                price: 'ab 1.500 €',
                desc: 'Der schnelle Einstieg: eine Seite auf Basis eines bewährten Layouts, mit Ihren Texten und Fotos. In 2 bis 5 Arbeitstagen online.',
                includes: ['1 Seite, responsiv', 'Bewährtes Layout', 'Ihre Texte und Fotos', 'Fertig in 2 bis 5 Arbeitstagen'],
            },
            {
                label: 'Conversion Landingpage',
                price: 'ab 2.900 €',
                desc: 'Für eine konkrete Dienstleistung oder Kampagne. Inklusive Struktur, Design, Entwicklung, Tracking und SEO-Grundlage.',
                includes: ['1 Seite, responsiv', 'Kontaktformular', 'SEO-Grundsetup', 'PageSpeed-optimiert'],
            },
            {
                label: 'Unternehmenswebsite',
                price: 'ab 4.500 €',
                desc: 'Mehrseitige Website mit Leistungsseiten, Referenzen, CMS und Conversion-Tracking.',
                includes: ['5+ Seiten', 'CMS (Inhalte selbst pflegen)', 'Blog / News optional', 'Erweiterte SEO-Optimierung', 'Conversion Tracking'],
            },
        ],
        notes: [
            'Finale Preise nach dem kostenlosen Erstgespräch. Ein Angebot gibt es erst, wenn ich Ihre Anforderungen verstanden habe.',
            'Lieber monatlich zahlen als einmalig investieren? Eine Website im Monatsabo mit Hosting, Pflege und kleinen Änderungen ist in Planung.',
        ],
        benefitsTitle: 'Was Sie bekommen',
        benefits: [
            'Individuelles Design, kein Template, kein Baukasten',
            'Schnelle Ladezeiten (PageSpeed 90 bis 100)',
            'Klare Nutzerführung mit durchdachtem Conversion-Pfad',
            'Responsive auf allen Geräten',
            'SEO-Grundoptimierung inklusive',
            'CMS-Integration oder statische Seite, je nach Bedarf',
            'SSL, DSGVO-konform, technisch einwandfrei',
        ],
        steps: [
            { title: 'Erstgespräch', text: 'Ihre Ziele, Ihre Zielgruppe, Ihr Markt. Kostenlos und unverbindlich.' },
            { title: 'Konzept & Struktur', text: 'Wireframe und Seitenstruktur basierend auf Marktanalyse und Best Practices.' },
            { title: 'Design & Entwicklung', text: 'Pixel-genaue Umsetzung mit Fokus auf Performance und Nutzererlebnis.' },
            { title: 'Launch & Optimierung', text: 'Go-live mit Tracking-Setup. Danach: Daten auswerten, optimieren, wachsen.' },
        ],
        branches: [
            ['/leistungen/webdesign-handwerker', 'Handwerker'],
            ['/leistungen/webdesign-aerzte', 'Arztpraxen'],
            ['/leistungen/webdesign-anwaelte', 'Anwälte'],
            ['/leistungen/webdesign-steuerberater', 'Steuerberater'],
            ['/leistungen/webdesign-gastronomie', 'Gastronomie'],
            ['/leistungen/webdesign-hotels', 'Hotels'],
            ['/leistungen/webdesign-immobilienmakler', 'Immobilienmakler'],
            ['/leistungen/website-erstellen-lassen', 'Website erstellen lassen'],
        ],
    },
    {
        id: 'seo',
        kicker: 'SEO & Lokale Sichtbarkeit',
        title: 'SEO in Hamburg: gefunden werden, wenn Ihre Kunden suchen.',
        intro: 'Wer einen Dienstleister braucht, sucht zuerst bei Google, oft vom Smartphone und oft mit dem Ortsnamen. Taucht Ihr Unternehmen dort nicht auf, bekommt die Anfrage jemand anderes. Lokale SEO sorgt dafür, dass Sie erscheinen, wenn jemand in Ihrer Region nach Ihrer Leistung sucht: in der Trefferliste und auf der Karte.',
        tiers: [
            {
                label: 'SEO Monatlich',
                price: 'ab 1.000 €/Mt.',
                desc: 'Laufende Optimierung für nachhaltige Sichtbarkeit. Mindestlaufzeit 3 Monate, danach monatlich kündbar.',
                includes: ['Technisches SEO', 'On-Page-Optimierung', 'Lokale SEO / Google Maps', 'Content-Optimierung', 'Monatlicher Report', 'Live-Dashboard-Zugang'],
            },
        ],
        notes: ['Erste Ergebnisse typischerweise nach 4 bis 8 Wochen, volle Wirkung nach 3 bis 6 Monaten. Wenn die Ergebnisse nicht stimmen, arbeite ich weiter, ohne Aufpreis.'],
        benefitsTitle: 'Was Sie bekommen',
        benefits: [
            'Vollständige technische SEO-Analyse und Optimierung',
            'Lokale SEO: Google Business Profile, Citations, lokale Keywords',
            'On-Page-Optimierung aller relevanten Seiten',
            'Content-Strategie basierend auf echten Suchanfragen',
            'Monatliches Reporting mit allen relevanten KPIs',
            'Keyword-Tracking: Sie sehen live, wo Sie ranken',
            'Wettbewerber-Monitoring',
        ],
        box: {
            title: 'So sehen Sie Ihre Ergebnisse',
            text: 'Sie erhalten Zugang zu einem Live-Dashboard. Dort sehen Sie jederzeit: aktuelle Rankings, organischen Traffic, Sichtbarkeits-Entwicklung und konkrete Leads, die über die Suche kommen. Kein Raten, nur Fakten.',
        },
    },
    {
        id: 'ai-seo',
        kicker: 'AI SEO',
        title: 'Sichtbar in ChatGPT, Perplexity und AI-Suche.',
        intro: 'Die Art, wie Menschen suchen, verändert sich. Immer mehr Nutzer stellen ihre Fragen an ChatGPT, Perplexity oder Google AI Overviews statt klassisch zu googeln. Wenn Ihre Website dort nicht als Quelle auftaucht, verlieren Sie einen wachsenden Kanal.',
        tiers: [
            {
                label: 'KI-Kurzanalyse',
                price: '0 €',
                desc: '15 Minuten. Wir schauen live nach, ob Sie in KI-Antworten genannt werden. Kein Report, keine Verpflichtung.',
                includes: ['Werden Sie aktuell genannt?', 'Wer wird stattdessen empfohlen?', 'Die drei wichtigsten Hebel'],
            },
            {
                label: 'AI Visibility Sprint',
                price: 'ab 1.500 €',
                desc: 'Einmalig. Ihre wichtigsten Seiten werden für AI-Antworten aufbereitet, mit Messung vorher und nachher. Ergebnis in 10 bis 14 Tagen.',
                includes: ['AI-Sichtbarkeits-Analyse', 'Optimierung der wichtigsten Seiten', 'Schema Markup / Structured Data', 'Crawler-Konfiguration und Indexierung', 'Messung vorher und nachher'],
            },
            {
                label: 'AI Visibility Betreuung',
                price: 'ab 600 €/Mt.',
                desc: 'Optional nach dem Sprint, monatlich kündbar. Für Unternehmen, die ihre Position halten und ausbauen wollen.',
                includes: ['Laufendes AI-Antwort-Monitoring', 'Neue zitierfähige Inhalte', 'Autoritäts- und Vertrauensaufbau', 'Monatlicher Report'],
            },
        ],
        notes: ['Kein teurer Vertrag, bevor Sie wissen, was der Kanal bringt. Erst der kostenlose Call, dann der Sprint, dann entscheiden Sie über die Betreuung.'],
        benefitsTitle: 'Was Sie bekommen',
        benefits: [
            'Analyse: Wie sichtbar ist Ihr Unternehmen in AI-Antworten?',
            'Strukturierte Daten (Schema Markup) für AI-Verständnis',
            'Content-Optimierung für AI-Zitation und Snippet-Eignung',
            'Autoritäts-Aufbau: Signale, die AI-Modelle als vertrauenswürdig werten',
            'Google AI Overviews Optimierung',
            'Monitoring: Tracking Ihrer Sichtbarkeit in AI-Antworten',
        ],
        box: {
            title: 'Warum das jetzt relevant ist',
            text: 'AI-Suche wächst monatlich. Unternehmen, die heute ihre Inhalte für AI optimieren, sichern sich einen Vorsprung, der später schwer einzuholen ist. Es ist das SEO von morgen, und es beginnt jetzt.',
        },
    },
    {
        id: 'ads',
        kicker: 'Google & Local Ads',
        title: 'Google Ads: sofort sichtbar, sofort Anfragen.',
        intro: 'SEO braucht Zeit. Ads liefern sofort. Ich schalte Google Ads und Local Services Ads, die genau die Menschen erreichen, die gerade aktiv nach Ihrer Dienstleistung suchen. Jeder Euro wird getrackt. Sie sehen genau, was er bringt.',
        tiers: [
            {
                label: 'Kampagnen-Setup',
                price: 'ab 700 €',
                desc: 'Einmalig. Das Konto steht sauber aufgesetzt und messbar da, auch wenn Sie danach selbst weitermachen wollen.',
                includes: ['Kampagnen-Struktur & Kontoaufbau', 'Keyword-Recherche', 'Anzeigentexte & Erweiterungen', 'Conversion Tracking'],
            },
            {
                label: 'Laufende Betreuung',
                price: 'ab 500 €/Mt.',
                desc: 'Monatlich kündbar. Werbebudget kommt separat dazu (Sie bestimmen die Höhe).',
                includes: ['Wöchentliche Optimierung', 'Anzeigen- und Landingpage-Tests', 'Monatlicher Performance-Report'],
            },
        ],
        notes: ['Dazu kommt Ihr Werbebudget, empfohlen sind mindestens 500 €/Mt. Es läuft über Ihr eigenes Google-Konto, ich verdiene daran nichts. Den passenden Rahmen klären wir im Erstgespräch.'],
        benefitsTitle: 'Was Sie bekommen',
        benefits: [
            'Kampagnen-Setup: Keyword-Recherche, Anzeigentexte, Struktur',
            'Google Search Ads für kaufbereite Suchende',
            'Local Services Ads für lokale Dienstleister',
            'Conversion Tracking: Jeder Anruf, jede Anfrage wird gemessen',
            'Laufende Optimierung: Budgets, Keywords, Gebote',
            'Monatlicher Report mit Kosten pro Lead und ROI',
            'Voller Zugang zu Ihrem Google Ads Konto, es gehört Ihnen',
        ],
        box: {
            title: 'Ihr Geld, Ihre Kontrolle',
            text: 'Ihr Werbebudget läuft über Ihr eigenes Google-Konto. Sie sehen jeden Cent, jede Kampagne, jedes Ergebnis. Ich verstecke nichts. Wenn eine Kampagne nicht performt, sage ich es Ihnen und optimiere, bis es stimmt.',
        },
    },
    {
        id: 'chatgpt-ads',
        kicker: 'Neu: ChatGPT Ads',
        title: 'Werbung in ChatGPT, bevor es teuer wird.',
        intro: (
            <>
                Seit dem 24. August 2026 laufen Anzeigen in ChatGPT auch in Deutschland, seit dem 31. August 2026 ist der OpenAI Ads Manager im Self-Service buchbar. Ich schalte seit dem Start eigene Kampagnen und baue sie jetzt für Unternehmen auf, die den Vorsprung mitnehmen wollen. <Link href="/leistungen/chatgpt-ads">Alles zu ChatGPT Ads</Link>
            </>
        ),
        tiers: [
            {
                label: 'Kampagnen-Setup',
                price: 'ab 1.400 €',
                desc: 'Einmalig. Konto, Kampagne und Messung stehen sauber, auch wenn Sie danach selbst weitermachen.',
                includes: ['Konto- und Kampagnenaufbau', 'Kontext-Hinweise & Geo-Targeting', 'Anzeigen und Bild-Assets', 'Pixel & Conversions API'],
            },
            {
                label: 'Laufende Betreuung',
                price: 'ab 1.000 €/Mt.',
                desc: 'Monatlich kündbar. Werbebudget kommt separat dazu und läuft über Ihr eigenes OpenAI-Konto.',
                includes: ['Gebote, Hinweise, Kreative', 'Landingpage-Tests', 'Monatlicher Report'],
            },
        ],
        notes: ['Als Testbudget empfehle ich mindestens 500 €/Mt. über zwei bis drei Monate. OpenAI empfiehlt für Klick-Kampagnen ein Start-Höchstgebot von 3 bis 5 US-Dollar pro Klick.'],
        benefitsTitle: 'Was Sie bekommen',
        benefits: [
            'Ads-Manager-Konto auf Ihren Namen, Kampagnenstruktur, Gebotsstrategie',
            'Kontext-Hinweise statt Keywords: die eigentliche Steuerung in diesem Kanal',
            'Anzeigentexte und Bild-Assets in mehreren Varianten',
            'Conversion-Tracking über OpenAI-Pixel und Conversions API',
            'Wöchentliche Optimierung, monatlicher Report',
            'Nach vier Wochen eine ehrliche Bilanz: ausbauen, umbauen oder stoppen',
        ],
        box: {
            title: 'Ehrlich zum Zeitpunkt',
            text: 'Belastbare Branchen-Benchmarks gibt es für diesen Kanal noch nicht, auch OpenAI veröffentlicht keine. Wer Ihnen heute exakte Klickpreise verspricht, rät. Ich sage Ihnen, was ich in meinen eigenen Konten sehe, und rechne im Kurzcheck mit Ihren Zahlen durch, ob sich der Test trägt.',
        },
    },
    {
        id: 'audit',
        kicker: 'Website-Audit',
        title: 'Kostenloses Website-Audit: wissen, wo Sie stehen.',
        intro: 'Bevor wir über Lösungen sprechen, analysiere ich Ihre aktuelle Situation. Was funktioniert? Was kostet Sie Kunden? Wo liegt das größte Potenzial? Das Audit ist kostenlos, ehrlich und konkret, mit klaren Handlungsempfehlungen, die Sie auch ohne mich umsetzen können.',
        tiers: [
            {
                label: 'Website-Audit',
                price: 'Kostenlos',
                desc: 'Kein Haken. Kein Kleingedrucktes. Sie erhalten eine ehrliche Analyse und entscheiden selbst, ob und wie Sie weiter vorgehen wollen.',
                includes: ['Performance & Speed', 'SEO-Status', 'Conversion-Analyse', 'Wettbewerber-Vergleich', 'Persönliches Gespräch'],
            },
        ],
        notes: [],
        benefitsTitle: 'Was das Audit umfasst',
        benefits: [
            'Performance-Check: Ladezeiten, Core Web Vitals, Mobile-Tauglichkeit',
            'SEO-Analyse: Rankings, technische Fehler, verpasste Chancen',
            'Struktur-Bewertung: Ist der Conversion-Pfad klar?',
            'Wettbewerber-Vergleich: Wo stehen Sie im Vergleich?',
            'Konkrete Handlungsempfehlungen mit Prioritäten',
            'Persönliches Gespräch zur Besprechung der Ergebnisse',
        ],
    },
];

const promises = [
    { title: 'Ergebnis zählt', text: 'Ich arbeite für Ergebnisse, nicht für Stunden. Wenn das Ergebnis nicht stimmt, optimiere ich weiter, ohne Aufpreis, bis Sie zufrieden sind.' },
    { title: 'Volle Transparenz', text: 'Sie haben jederzeit Zugang zu allen Daten, Reports und Ergebnissen. Ich kann Ihnen in jeder Sekunde zeigen, was läuft und was es bringt.' },
    { title: 'Ihre Daten, Ihr Eigentum', text: 'Alle Konten, Zugänge und Daten gehören Ihnen. Wenn Sie morgen wechseln wollen, nehmen Sie alles mit. Kein Lock-in.' },
];

const articles = [
    {
        href: '/wissen/webdesign-kosten',
        img: '/wissen/cards/webdesign-kosten.webp',
        alt: 'Illustration: drei Preisschilder in aufsteigender Größe vor einem Browserfenster',
        category: 'Webdesign',
        title: 'Webdesign Kosten 2026: Was eine professionelle Website wirklich kostet',
        excerpt: 'Von 500 bis 50.000 Euro: Was bestimmt den Preis? Kostenguide mit Preisbeispielen und versteckten Kosten.',
    },
    {
        href: '/wissen/lokales-seo-hamburg-guide',
        img: '/wissen/cards/lokales-seo-hamburg-guide.webp',
        alt: 'Illustration: Stadtkarte eines Hafenviertels mit zentralem Standort-Pin und schwebenden Suchergebnissen',
        category: 'SEO',
        title: 'Lokales SEO in Hamburg: Der komplette Leitfaden für 2026',
        excerpt: 'Von Google Business Profile bis lokale Keywords: alles, was Sie wissen müssen, um in Hamburg gefunden zu werden.',
    },
    {
        href: '/wissen/google-ads-fehler-lokale-unternehmen',
        img: '/wissen/cards/google-ads-fehler-lokale-unternehmen.webp',
        alt: 'Illustration: Anzeigenpanel über einem Trichter, aus dessen Riss Münzen herausfallen',
        category: 'Google Ads',
        title: 'Die 7 teuersten Google Ads Fehler lokaler Unternehmen',
        excerpt: 'Von falschen Keywords bis fehlendem Conversion-Tracking: diese Fehler verbrennen Ihr Werbebudget.',
    },
    {
        href: '/wissen/ai-seo-was-unternehmen-jetzt-wissen-muessen',
        img: '/wissen/cards/ai-seo-was-unternehmen-jetzt-wissen-muessen.webp',
        alt: 'Illustration: große Antwortkachel mit KI-Funke, verbunden mit drei Quellenkarten',
        category: 'AI SEO',
        title: 'AI SEO: Was Unternehmen jetzt wissen müssen',
        excerpt: 'ChatGPT, Perplexity, Google AI Overviews verändern die Suche. Wie Sie sicherstellen, dass Ihr Unternehmen als Quelle erscheint.',
    },
];

const faqs = [
    { q: 'Wie lange dauert die Erstellung einer Website?', a: 'Der Website-Start ist in 2 bis 5 Arbeitstagen online, eine individuell gestaltete Landingpage in 2 bis 3 Wochen, eine mehrseitige Website in 4 bis 6 Wochen. Das hängt vom Umfang und Ihrem Feedback-Tempo ab.' },
    { q: 'Muss ich mich langfristig binden?', a: 'Nur bei SEO, und nur für 3 Monate. So lange brauchen die Maßnahmen, um zu wirken, danach ist SEO monatlich kündbar. Google Ads, ChatGPT Ads und die AI-Betreuung sind von Anfang an monatlich kündbar, Websites zahlen Sie einmalig.' },
    { q: 'Was passiert, wenn die Ergebnisse nicht stimmen?', a: 'Dann arbeite ich weiter. Ich bin nicht zufrieden, wenn Sie es nicht sind. Das bedeutet: Analyse, Anpassung, Optimierung, bis das Ergebnis stimmt. Das ist keine Floskel, das ist mein Geschäftsmodell.' },
    { q: 'Brauche ich SEO und Ads gleichzeitig?', a: 'Nicht unbedingt. Ads liefern sofort Ergebnisse, SEO baut langfristig organischen Traffic auf. Ideal ist eine Kombination, aber wir finden im Gespräch heraus, was für Ihre Situation am sinnvollsten ist.' },
    { q: 'Was ist der Unterschied zwischen SEO und AI SEO?', a: 'Klassisches SEO optimiert für Google-Rankings. AI SEO sorgt zusätzlich dafür, dass Ihr Unternehmen in AI-Antworten (ChatGPT, Perplexity, Google AI Overviews) als Quelle erscheint. AI SEO baut auf SEO auf.' },
    { q: 'Kann ich die Ergebnisse wirklich jederzeit einsehen?', a: 'Ja. Sie bekommen Zugang zu Live-Dashboards für SEO-Rankings, Traffic und Ads-Performance. Dazu monatliche Reports mit Zusammenfassung. Kein Warten auf Updates, die Daten sind immer da.' },
    { q: 'Arbeiten Sie allein oder mit einem Team?', a: 'Sie arbeiten direkt mit mir. Analyse, Website, SEO und Ads mache ich selbst, ohne Account-Manager dazwischen. Braucht ein Projekt zusätzliche Expertise, etwa bei Design, Text oder Fotografie, hole ich geprüfte Spezialisten dazu. Ihr Ansprechpartner und verantwortlich für das Ergebnis bleibe ich.' },
    { q: 'Kann ich Website, SEO und Anzeigen dauerhaft aus einer Hand buchen?', a: 'Ja. Viele Betriebe brauchen nicht eine einzelne Leistung, sondern jemanden, der Website, Google-Sichtbarkeit und Anzeigen zusammen im Blick hat. Dann kombinieren Sie die laufenden Pakete, etwa SEO ab 1.000 Euro und Google-Ads-Betreuung ab 500 Euro im Monat.' },
    { q: 'Warum sollte ich nicht einfach eine günstigere Agentur nehmen?', a: 'Können Sie. Aber fragen Sie vorher: Bekommen Sie Zugang zu allen Daten? Arbeiten die weiter, wenn Ergebnisse ausbleiben? Ist der Code individuell oder ein Template? Sie zahlen bei mir nicht für Overhead, sondern für Ergebnisse und direkte Kommunikation ohne Umwege.' },
];

function ServiceSection({ s }) {
    return (
        <section id={s.id} className="lx-service">
            <div className="vx-wrap">
                <div className="lx-service-head">
                    <div>
                        <p className="vx-label">{s.kicker}</p>
                        <h2>{s.title}</h2>
                    </div>
                    <p className="lx-service-intro">{s.intro}</p>
                </div>

                <div className={`lx-tiers lx-tiers-${s.tiers.length}`}>
                    {s.tiers.map((t) => (
                        <div key={t.label} className="lx-tier">
                            <p className="lx-tier-label">{t.label}</p>
                            <p className="lx-tier-price">{t.price}</p>
                            <p className="lx-tier-desc">{t.desc}</p>
                            <ul>
                                {t.includes.map((i) => <li key={i}>{i}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
                {s.notes.map((n) => <p key={n} className="lx-note">{n}</p>)}

                <div className="lx-details">
                    <div>
                        <h3>{s.benefitsTitle}</h3>
                        <ul className="lx-benefits">
                            {s.benefits.map((b) => <li key={b}>{b}</li>)}
                        </ul>
                    </div>
                    {s.box && (
                        <div className="lx-box">
                            <h3>{s.box.title}</h3>
                            <p>{s.box.text}</p>
                        </div>
                    )}
                    {s.steps && (
                        <div>
                            <h3>Wie es abläuft</h3>
                            <ol className="lx-steps">
                                {s.steps.map((st) => (
                                    <li key={st.title}><strong>{st.title}</strong> {st.text}</li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>

                {s.branches && (
                    <div className="lx-branches">
                        <h3>Webdesign für Ihre Branche</h3>
                        <div className="vx-actions">
                            {s.branches.map(([href, label]) => <Link key={href} href={href} className="vx-btn">{label}</Link>)}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default function ServicesPageClient() {
    useHashScroll();

    return (
        <div className="vx lx">
            {/* Hero + prices at a glance: everything important on the first screen */}
            <section className="lx-hero">
                <div className="vx-wrap">
                    <div className="lx-hero-head">
                        <div>
                            <p className="vx-label">Klare Preise. Echte Ergebnisse.</p>
                            <h1>Leistungen und Preise für Webdesign, SEO und Google Ads</h1>
                        </div>
                        <div className="lx-hero-side">
                            <p>Keine versteckten Kosten, keine vagen Versprechen. Sie wissen vorher, was Sie bekommen, und sehen die Ergebnisse jederzeit selbst. Sie können einzelne Leistungen buchen oder mich als festen Partner für Ihr Wachstum einsetzen: Dann greifen Website, Sichtbarkeit bei Google und Anzeigen ineinander, und Sie haben einen Ansprechpartner für alles.</p>
                            <div className="vx-actions">
                                <Link href="/kontakt" className="vx-btn vx-btn-dark" data-umami-event="cta-click" data-umami-event-location="services-hero">Projekt anfragen</Link>
                                <a href="tel:+4917632194754" className="vx-btn" data-umami-event="phone-call" data-umami-event-location="services-hero">0176 321 94 754</a>
                            </div>
                        </div>
                    </div>

                    <nav className="lx-overview" aria-label="Preise auf einen Blick">
                        {overview.map((o) => (
                            <a key={o.id} href={`#${o.id}`} className="lx-overview-cell">
                                <span className="lx-overview-title">{o.title}</span>
                                <strong>{o.price}</strong>
                                <span className="lx-overview-note">{o.note}</span>
                                <span className="lx-overview-more">Details <Arrow /></span>
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            {services.map((s) => <ServiceSection key={s.id} s={s} />)}

            {/* Promise */}
            <section className="lx-promise">
                <div className="vx-wrap">
                    <h2>Mein Versprechen an Sie.</h2>
                    <div className="lx-promise-grid">
                        {promises.map((p, i) => (
                            <div key={p.title}>
                                <span className="lx-promise-num">0{i + 1}</span>
                                <h3>{p.title}</h3>
                                <p>{p.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Knowledge */}
            <section className="lx-articles">
                <div className="vx-wrap">
                    <div className="vx-services-head">
                        <h2>Ratgeber zu Webdesign, SEO und Google Ads</h2>
                        <Link href="/wissen" className="vx-link">Alle Artikel <Arrow /></Link>
                    </div>
                    <div className="lx-article-grid">
                        {articles.map((a) => (
                            <Link key={a.href} href={a.href} className="lx-article">
                                <div className="lx-article-img">
                                    <img src={a.img} alt={a.alt} width="760" height="494" loading="lazy" decoding="async" />
                                </div>
                                <p className="vx-label">{a.category}</p>
                                <h3>{a.title}</h3>
                                <p className="lx-article-excerpt">{a.excerpt}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="vx-faq">
                <div className="vx-wrap vx-faq-grid">
                    <h2>Fragen zu Preisen und Zusammenarbeit</h2>
                    <div className="vx-faq-list">
                        {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
                    </div>
                </div>
            </section>

            <VxCta
                title="Lassen Sie uns sprechen."
                text="Kostenloses Erstgespräch oder Website-Audit, Sie entscheiden. Erzählen Sie mir von Ihrem Unternehmen und ich sage Ihnen ehrlich, wo das Potenzial liegt."
                primaryLabel="Jetzt Analyse anfordern"
                location="services-cta"
            />
        </div>
    );
}
