import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Mandanten & Bewerber | Steuerberater-Website Hamburg',
    description: 'Websites für Steuerberater in Hamburg: Mandantengewinnung, Karriereseite gegen den Fachkräftemangel, § 57a StBerG beachtet. Ab 2.900 Euro.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign-steuerberater',
    },
    openGraph: {
        title: 'Mandanten & Bewerber | Steuerberater-Website Hamburg',
        description: 'Websites für Steuerberater in Hamburg: Mandantengewinnung, Karriereseite gegen den Fachkräftemangel, berufsrechtlich sauber.',
        url: 'https://webseite.hamburg/leistungen/webdesign-steuerberater',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet eine Website für eine Steuerberatungskanzlei?', a: 'Einseitig mit klarem Weg zum Erstgespräch ab 2.900 Euro, mehrseitig mit Leistungsseiten, Team und Karrierebereich ab 4.500 Euro. Der Preis steht als Festpreis vor Projektstart. Wenn Sie zusätzlich laufende Sichtbarkeit wollen, kommt SEO ab 1.000 Euro im Monat dazu, Mindestlaufzeit drei Monate.' },
    { q: 'Darf ich als Steuerberater überhaupt für meine Kanzlei werben?', a: 'Ja. § 57a StBerG erlaubt Werbung, soweit sie über die berufliche Tätigkeit in Form und Inhalt sachlich unterrichtet und nicht auf einen Auftrag im Einzelfall gerichtet ist. Moderne Website, Fotos, Fachbeiträge, Google-Unternehmensprofil und sachliche Anzeigen sind also zulässig. Unzulässig sind Steuerersparnis-Garantien, marktschreierische Werbung und Kaltakquise bei Nicht-Mandanten.' },
    { q: 'Kann ich Mandanten als Referenz nennen?', a: 'Nur mit ausdrücklicher, vorheriger Einwilligung, die Sie von der Verschwiegenheitspflicht entbindet. Ohne diese Einwilligung ist die Nennung berufsrechtlich heikel und nach § 203 StGB sogar strafbar. In der Praxis lösen wir das anders: anonymisierte Fallbeispiele („Handwerksbetrieb mit 12 Mitarbeitern, Umstellung auf digitale Belege") wirken fast genauso stark und sind unproblematisch.' },
    { q: 'Bringt eine Karriereseite wirklich Bewerbungen?', a: 'Sie ist der Ort, an dem Bewerber prüfen, ob sie zu Ihnen passen. Nach der Berufsstatistik der Bundessteuerberaterkammer liegt das Durchschnittsalter im Berufsstand bei 53,7 Jahren, der Nachwuchs ist knapp und wählerisch. Eine Karriereseite, die Software, Homeoffice-Regelung, Fortbildungsbudget und ein echtes Teamfoto zeigt, beantwortet genau die Fragen, die sonst zum Abbruch der Bewerbung führen.' },
    { q: 'Brauche ich ein Mandantenportal auf der Website?', a: 'Meistens nicht als Eigenentwicklung. Wenn Sie DATEV Meine Steuern, Unternehmen online oder ein anderes Portal nutzen, reicht ein prominenter, klar erklärter Login-Bereich mit Anleitung. Das spart fünfstellige Entwicklungskosten und die Mandanten finden trotzdem ihren Weg.' },
    { q: 'Wie lange dauert das Projekt?', a: 'Zwei bis drei Wochen einseitig, vier bis sechs Wochen mehrseitig. In der Praxis entscheidet die Jahreszeit: Zwischen Mai und September geht es zügig, im Februar und März sind Kanzleien mit anderen Dingen beschäftigt. Wir planen die Textfreigaben entsprechend.' },
];

export default function WebdesignSteuerberaterPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign für Steuerberater Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/webdesign-steuerberater',
        description: 'Websites für Steuerberatungskanzleien in Hamburg: Mandantengewinnung, Karriereseite, berufsrechtlich sauber nach § 57a StBerG.',
        offers: [
            { '@type': 'Offer', name: 'Kanzlei-Website kompakt', price: '2900', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Kanzlei-Website mehrseitig mit Karrierebereich', price: '4500', priceCurrency: 'EUR' },
        ],
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Webdesign für Steuerberater', item: 'https://webseite.hamburg/leistungen/webdesign-steuerberater' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Leistungen', href: '/leistungen' },
                        { label: 'Webdesign für Steuerberater' },
                    ]} />
                    <div className="subpage-hero-split">
                        <div>
                        <p className="section-kicker animate-up">Webdesign für Steuerberater</p>
                        <h1 className="subpage-title animate-up">Kanzlei-Websites für Steuerberater in Hamburg: für Mandanten und für Bewerber.</h1>
                        <p className="subpage-intro animate-up">
                            Viele Steuerkanzleien haben kein Mandantenproblem, sondern ein Personalproblem. Beides landet auf derselben Website. Deshalb baue ich Kanzleiseiten so, dass sie zwei Zielgruppen bedienen: Unternehmer, die einen neuen Berater suchen, und Fachkräfte, die einen neuen Arbeitgeber prüfen.
                        </p>
                        <ServiceMeta />
                        </div>
                        <div className="subpage-hero-media animate-up">
                            <img src="/leistungen/branchen/hero-steuerberater.svg" alt="Illustration: Aktenordner, aus dem ein Belegstapel in digitale Karten übergeht, daneben ein rotes Prozentzeichen" width="1200" height="900" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was kostet eine Steuerberater-Website?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Eine Kanzlei-Website kostet bei mir <strong>ab 2.900 Euro</strong> einseitig und <strong>ab 4.500 Euro</strong> mehrseitig mit Leistungsseiten, Teamprofilen und Karrierebereich. Enthalten sind Struktur, Design, Entwicklung, Textvorschläge und lokale SEO-Grundlage. Die Formulierungen bleiben innerhalb des Sachlichkeitsgebots aus § 57a StBerG.</p>
                    </div>

                    <div className="subpage-story animate-up">
                        <span className="subpage-story-label">Aus der Praxis</span>
                        <p>
                            Ein Muster, das ich bei Kanzleiseiten immer wieder sehe: Die Website erklärt auf 400 Wörtern, was eine Einnahmen-Überschuss-Rechnung ist. Was sie nicht erklärt, ist, ob die Kanzlei überhaupt neue Mandate annimmt. Genau das ist aber die Frage, mit der Unternehmer auf die Seite kommen, seit Kanzleien reihenweise Aufnahmestopps verhängen.
                        </p>
                        <p>
                            Der zweite Klassiker steht unter „Karriere": eine PDF-Stellenanzeige von 2019, gescannt, mit Faxnummer. Wer Steuerfachangestellte sucht, konkurriert mit Kanzleien, die Homeoffice-Tage, Software und Fortbildungsbudget auf einer eigenen Seite zeigen. Ein gescanntes PDF verliert diesen Vergleich, bevor er beginnt.
                        </p>
                        <p>
                            Meine Empfehlung ist deshalb unromantisch: zwei klare Einstiege auf der Startseite. Einer für „Ich suche einen Steuerberater", einer für „Ich suche einen Job". Alles andere kommt danach.
                        </p>
                    </div>

                    <h2 className="animate-up">Der Markt: viele Kanzleien, wenig Nachwuchs</h2>
                    <p className="animate-up">
                        Die Berufsstatistik der Bundessteuerberaterkammer zählt zum 1. Januar 2026 insgesamt 105.953 Kammermitglieder und 90.336 Steuerberaterinnen, Steuerberater und Steuerbevollmächtigte. Das Durchschnittsalter liegt bei 53,7 Jahren, 65,9 Prozent arbeiten selbstständig, und 67,1 Prozent der Praxen sind Einzelpraxen. Das ist ein Markt mit vielen kleinen Einheiten, in dem sehr viele Inhaber in den nächsten Jahren eine Nachfolge suchen werden.
                    </p>
                    <p className="animate-up">
                        Für Ihre Website heißt das zwei Dinge. Erstens: Sichtbarkeit entscheidet weniger über die Menge der Anfragen als über deren Qualität. Wer klar sagt, für welche Branchen und Mandatsgrößen er arbeitet, bekommt weniger Anfragen und mehr passende. Zweitens: Eine gepflegte Website ist bei einer Kanzleiübergabe ein Vermögenswert. Sie ist das Einzige, was ein Nachfolger vor der ersten Mandantenübergabe sehen kann.
                    </p>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">90.336</span>
                            <span className="subpage-stat-label">Steuerberater und Steuerbevollmächtigte in Deutschland, Stand 1. Januar 2026 (BStBK)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">53,7</span>
                            <span className="subpage-stat-label">Jahre Durchschnittsalter im Berufsstand (BStBK, Berufsstatistik 2025)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">67,1%</span>
                            <span className="subpage-stat-label">der Steuerberaterpraxen sind Einzelpraxen (BStBK, Berufsstatistik 2025)</span>
                        </div>
                    </div>

                    <figure className="subpage-figure animate-up">
                        <img src="/leistungen/branchen/steuerberater.svg" alt="Illustration: Belegstapel, Laptop mit Mandantenportal und Upload-Pfeil sowie eine Kanzlei-Website mit Anfrage-Button" width="1600" height="900" loading="lazy" />
                        <figcaption>Die Website ist die Vorstufe zum Portal: Sie klärt Zuständigkeit, Ablauf und Erreichbarkeit.</figcaption>
                    </figure>

                    <h2 className="animate-up">Werberecht: was auf die Kanzleiseite darf</h2>
                    <p className="animate-up">
                        Steuerberaterwerbung ist seit Jahren liberalisiert, aber an Sachlichkeit gebunden. Maßgeblich sind § 57a StBerG und die Berufsordnung. Dazu kommt die Verschwiegenheitspflicht aus § 57 StBerG und § 203 StGB, die bei Referenzen zum entscheidenden Punkt wird.
                    </p>
                    <div className="rule-cols animate-up">
                        <div className="rule-col">
                            <h3>Zulässig</h3>
                            <ul>
                                <li>Tätigkeitsschwerpunkte, Branchenfokus, Fachberatertitel</li>
                                <li>Teamfotos, Kanzleivideo, Social-Media-Profile</li>
                                <li>Sachliche Google-Anzeigen und ein gepflegtes Unternehmensprofil</li>
                                <li>Fachbeiträge und Erklärstücke zu Steuerthemen</li>
                                <li>Hinweise auf Abrechnung nach StBVV und Pauschalvereinbarungen</li>
                                <li>Anonymisierte Fallbeispiele ohne Rückschluss auf Mandanten</li>
                            </ul>
                        </div>
                        <div className="rule-col rule-no">
                            <h3>Nicht zulässig</h3>
                            <ul>
                                <li>Ersparnis-Garantien wie „50 Prozent weniger Steuern"</li>
                                <li>Mandantennamen und Logos ohne ausdrückliche Einwilligung</li>
                                <li>Kaltakquise per Mail oder Telefon bei Nicht-Mandanten</li>
                                <li>Herabsetzende Vergleiche mit anderen Kanzleien</li>
                                <li>Lockangebote wie „kostenlose Steuerberatung"</li>
                                <li>Ansprache von Betroffenen in akuten Notlagen</li>
                            </ul>
                        </div>
                    </div>
                    <p className="animate-up">
                        Und die übliche Klarstellung: Ich bin Entwickler, nicht Steuerberater. Die berufsrechtliche Endabnahme der Texte machen Sie, ich liefere Formulierungen, die von vornherein im sachlichen Rahmen bleiben.
                    </p>

                    <h2 className="animate-up">Die zwei Zielgruppen einer Kanzlei-Website</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Mandanten: Zuständigkeit zuerst</h3>
                            <p>Nehmen Sie neue Mandate an, für welche Rechtsformen, ab welcher Größe, in welchen Branchen. Ein Satz dazu über der Faltkante spart Ihnen und den Anfragenden viel Zeit.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Mandanten: Ablauf erklären</h3>
                            <p>Wie läuft der Wechsel von der alten Kanzlei, wer kündigt was, welche Unterlagen werden gebraucht, wie lange dauert es. Der Wechsel scheitert meistens an Unsicherheit, nicht am Preis.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Bewerber: Software und Prozesse</h3>
                            <p>DATEV, Unternehmen online, papierloses Arbeiten, zweiter Monitor. Fachkräfte lesen diese Details sehr genau, weil sie damit acht Stunden am Tag verbringen.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Bewerber: echte Arbeitsbedingungen</h3>
                            <p>Homeoffice-Regelung, Gleitzeit, Fortbildungsbudget, Übernahme der Prüfungsvorbereitung, Teamgröße. Konkret formuliert statt „familiäres Betriebsklima".</p>
                        </div>
                    </div>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Portal-Zugang statt Portal-Neubau</h3>
                            <p>Ein klar sichtbarer Login-Bereich mit Kurzanleitung für Ihr bestehendes System, statt einer teuren Eigenentwicklung, die niemand pflegt.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Formulare mit Verstand</h3>
                            <p>Getrennte Wege für Mandatsanfrage, Bewerbung und Rückruf. Jeweils wenige Felder, verschlüsselte Übertragung, kein Drittanbieter-Zwischenlager für sensible Daten.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Lokale Sichtbarkeit</h3>
                            <p>Suchen wie „Steuerberater Hamburg Winterhude" oder „Steuerberater für Handwerksbetriebe" bedienen Sie mit eigener Seitenstruktur und einem gepflegten Unternehmensprofil. Mehr im <Link href="/wissen/google-business-profile-optimieren">Leitfaden zum Google-Unternehmensprofil</Link>.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Sichtbar in KI-Antworten</h3>
                            <p>Wer „Steuerberater in Hamburg für GmbH-Gründung" in ChatGPT eingibt, bekommt eine Empfehlungsliste. Ob Ihre Kanzlei darin auftaucht, hängt an Struktur und Zitierbarkeit Ihrer Inhalte. Details bei <Link href="/leistungen/ai-seo">AI SEO</Link>.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Preise</h2>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>Kanzlei-Website kompakt</h3>
                            <div className="sp-price-value">ab 2.900 &euro;</div>
                            <p>Eine Seite, klare Zuständigkeit, ein Weg zur Anfrage. Für Einzelpraxen und als schneller Ersatz einer veralteten Seite.</p>
                            <ul className="sp-price-includes">
                                <li>Individuelles Design, responsiv</li>
                                <li>Leistungen und Zielgruppen</li>
                                <li>Kontaktformular und Klick-zum-Anruf</li>
                                <li>Login-Verweis auf Ihr Mandantenportal</li>
                                <li>Lokale SEO-Grundlage</li>
                                <li>PageSpeed 90 bis 100</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Kanzlei-Website mit Karrierebereich</h3>
                            <div className="sp-price-value">ab 4.500 &euro;</div>
                            <p>Mehrseitig, mit Leistungsseiten, Team und eigenem Karrierebereich. Für Kanzleien, die parallel Mandate und Personal suchen.</p>
                            <ul className="sp-price-includes">
                                <li>Fünf und mehr Seiten</li>
                                <li>Leistungsseiten je Zielgruppe</li>
                                <li>Teamprofile mit Qualifikationen</li>
                                <li>Karriereseite mit Stellenanzeigen und Bewerbungsformular</li>
                                <li>JobPosting-Auszeichnung für Google Jobs</li>
                                <li>CMS zur eigenen Pflege plus Einweisung</li>
                                <li>Erweiterte lokale SEO-Optimierung</li>
                                <li>Conversion-Tracking, DSGVO-konform</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Was dieselbe Arbeitsweise anderswo gebracht hat</h2>
                    <div className="subpage-cases animate-up">
                        <Link href="/referenzen/blitz-hamburg" className="subpage-case-card">
                            <span className="subpage-case-metric">rund 40 Kunden/Monat</span>
                            <span className="subpage-case-name">Blitz Hamburg: Website, Google Ads und SEO im Verbund</span>
                        </Link>
                        <Link href="/referenzen/manetec" className="subpage-case-card">
                            <span className="subpage-case-metric">B2B-Anfragen</span>
                            <span className="subpage-case-name">Manetec: Website für einen erklärungsbedürftigen Dienstleister</span>
                        </Link>
                        <Link href="/referenzen/pest-control-saas" className="subpage-case-card">
                            <span className="subpage-case-metric">Prozesse digital</span>
                            <span className="subpage-case-name">Pest Control SaaS: Aufträge, Nachweise und Compliance in einer App</span>
                        </Link>
                    </div>

                    <h2 className="animate-up">Der Ablauf</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Erstgespräch, 30 Minuten</strong><p>Nehmen Sie Mandate an, welche Zielgruppen wollen Sie, suchen Sie Personal, und was soll die Website konkret abnehmen. Kostenlos.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Struktur und Texte</strong><p>Zwei Einstiegspfade, Leistungsseiten, Karrierebereich. Ich liefere Textvorschläge, Sie prüfen sie berufsrechtlich und fachlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Design und Entwicklung</strong><p>Individuelles Design, eigener Code, keine Vorlage aus dem Kanzlei-Baukasten. Zwischenstände auf einer Vorschau-URL.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Test, Launch, Übergabe</strong><p>Formular-Test, Geräte-Test, Ladezeit, strukturierte Daten, Search Console. Domain, Zugänge und Quellcode gehören Ihnen.</p></div></div>
                    </div>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Bundessteuerberaterkammer, Berufsstatistik 2025 (Stichtag 1. Januar 2026): 105.953 Kammermitglieder, 90.336 Berufsangehörige, Durchschnittsalter 53,7 Jahre, 67,1 Prozent Einzelpraxen. <a href="https://www.bstbk.de/downloads/bstbk/ebooks/Berufsstatistik-2025.pdf" rel="nofollow noopener" target="_blank">bstbk.de (PDF)</a></li>
                            <li>§ 57a StBerG, Werbung. <a href="https://www.gesetze-im-internet.de/stberg/__57a.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                            <li>§ 57 StBerG, allgemeine Berufspflichten samt Verschwiegenheit. <a href="https://www.gesetze-im-internet.de/stberg/__57.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                            <li>§ 203 StGB, Verletzung von Privatgeheimnissen. <a href="https://www.gesetze-im-internet.de/stgb/__203.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Häufige Fragen zu Kanzlei-Websites für Steuerberater" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Sagen Sie mir im Erstgespräch, ob Sie Mandate, Personal oder beides brauchen. Danach wissen Sie, welche Seiten Ihre Website tatsächlich braucht und welche Sie sich sparen können." />
        </>
    );
}
