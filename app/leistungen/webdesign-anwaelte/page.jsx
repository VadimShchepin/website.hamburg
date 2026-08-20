import Link from 'next/link';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import FaqSection from '../../../src/components/FaqSection';
import RelatedServices from '../../../src/components/RelatedServices';
import ServiceCta from '../../../src/components/ServiceCta';
import ServiceMeta from '../../../src/components/ServiceMeta';
import { BUSINESS } from '../../../src/lib/schema';

export const metadata = {
    title: 'Mandate statt Klicks | Kanzlei-Website Hamburg',
    description: 'Kanzlei-Websites für Anwälte in Hamburg: berufsrechtlich sauber, lokal sichtbar, mit klarem Weg zum Erstgespräch. Ab 2.900 Euro, Festpreis.',
    alternates: {
        canonical: 'https://webseite.hamburg/leistungen/webdesign-anwaelte',
    },
    openGraph: {
        title: 'Mandate statt Klicks | Kanzlei-Website Hamburg',
        description: 'Kanzlei-Websites für Anwälte in Hamburg: berufsrechtlich sauber, lokal sichtbar, mit klarem Weg zum Erstgespräch.',
        url: 'https://webseite.hamburg/leistungen/webdesign-anwaelte',
        type: 'website',
    },
};

const faqItems = [
    { q: 'Was kostet eine Kanzlei-Website?', a: 'Eine einseitige Kanzlei-Website mit klarem Weg zum Erstgespräch beginnt bei 2.900 Euro. Eine mehrseitige Website mit eigenen Seiten je Rechtsgebiet, Anwaltsprofilen und CMS liegt ab 4.500 Euro. Sie erhalten vor Projektstart einen Festpreis, keine Stundenabrechnung im Nachhinein.' },
    { q: 'Ist eine Kanzlei-Website mit Werbecharakter berufsrechtlich erlaubt?', a: 'Ja. § 43b BRAO erlaubt Werbung, soweit sie über die berufliche Tätigkeit sachlich unterrichtet und nicht auf ein Mandat im Einzelfall gerichtet ist. Erlaubt sind also Fachgebiete, Vita, Fachanwaltstitel, Honorarhinweise und Kontaktwege. Nicht erlaubt sind Erfolgsgarantien, Spitzenstellungsbehauptungen ohne Nachweis und die Nennung von Mandanten ohne ausdrückliche Einwilligung. Ich bin kein Anwalt und berate nicht rechtlich, aber ich baue Websites, bei denen Ihre Kammer keine Post schreiben muss.' },
    { q: 'Kann ich meine Fachanwaltstitel prominent zeigen?', a: 'Ja, verliehene Fachanwaltsbezeichnungen dürfen und sollen sichtbar sein. Nach § 43c BRAO sind maximal drei Titel pro Person möglich, laut BRAK-Statistik zum 1. Januar 2026 führen 1.555 Anwältinnen und Anwälte tatsächlich drei. Selbst erfundene Bezeichnungen wie „Fachanwalt für Scheidungsrecht" gehören nicht auf die Seite, wohl aber Tätigkeits- oder Interessenschwerpunkte, wenn Sie darin nachhaltig arbeiten.' },
    { q: 'Wie gehen Sie mit Mandatsgeheimnis und Datenschutz um?', a: 'Kontaktformulare laufen über TLS und landen direkt in Ihrem Postfach, nicht in einem Drittanbieter-Dashboard. Schriften und Skripte hoste ich selbst, es gibt also keine unnötigen Datenabflüsse an Google Fonts oder CDN-Dienste. Auf Wunsch ergänze ich einen Hinweis, dass mandatsbezogene Details bitte nicht ins Formular, sondern ins Erstgespräch gehören.' },
    { q: 'Bringt eine Website Mandate, wenn ich bisher nur Empfehlungen hatte?', a: 'Sie ersetzt Empfehlungen nicht, sie verstärkt sie. Empfohlene Mandanten prüfen Sie vorher online: Foto, Vita, Rechtsgebiet, Erreichbarkeit. Ohne diese Prüfstation bricht ein Teil der Empfehlungen still ab, und Sie erfahren nie davon. Dazu kommt die lokale Suche nach Rechtsgebiet und Stadtteil, die Sie mit einer sauberen Seitenstruktur bedienen können.' },
    { q: 'Wie lange dauert das Projekt?', a: 'Eine einseitige Kanzlei-Website ist in zwei bis drei Wochen fertig, eine mehrseitige in vier bis sechs Wochen. Der Flaschenhals ist fast nie die Technik, sondern die Freigabe der Texte zwischen zwei Terminen bei Gericht. Deshalb liefere ich Textvorschläge, die Sie nur noch prüfen und korrigieren müssen.' },
];

export default function WebdesignAnwaeltePage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Webdesign für Anwälte und Kanzleien Hamburg',
        provider: BUSINESS,
        areaServed: { '@type': 'City', name: 'Hamburg' },
        url: 'https://webseite.hamburg/leistungen/webdesign-anwaelte',
        description: 'Kanzlei-Websites für Rechtsanwälte in Hamburg: berufsrechtlich sauber nach BRAO und BORA, lokal sichtbar, mit klarem Weg zum Erstgespräch.',
        offers: [
            { '@type': 'Offer', name: 'Kanzlei-Website kompakt', price: '2900', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Kanzlei-Website mehrseitig', price: '4500', priceCurrency: 'EUR' },
        ],
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webseite.hamburg/' },
            { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://webseite.hamburg/leistungen' },
            { '@type': 'ListItem', position: 3, name: 'Webdesign für Anwälte', item: 'https://webseite.hamburg/leistungen/webdesign-anwaelte' },
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
                        { label: 'Webdesign für Anwälte' },
                    ]} />
                    <p className="section-kicker animate-up">Webdesign für Anwälte</p>
                    <h1 className="subpage-title animate-up">Kanzlei-Websites für Anwälte in Hamburg, die Mandate bringen.</h1>
                    <p className="subpage-intro animate-up">
                        Im Kammerbezirk Hamburg sind über 11.000 Anwältinnen und Anwälte zugelassen. Fast alle haben eine Website. Nur wenige haben eine, die einem Ratsuchenden in dreißig Sekunden beantwortet: Sind Sie zuständig, was kostet das Erstgespräch, und wie erreiche ich Sie jetzt.
                    </p>
                    <ServiceMeta />
                </div>
            </section>

            <section className="subpage-content section light-bg">
                <div className="container subpage-body">
                    <h2 className="animate-up">Was kostet eine Kanzlei-Website?</h2>
                    <div className="subpage-takeaway animate-up">
                        <p>Eine Kanzlei-Website kostet bei mir <strong>ab 2.900 Euro</strong> einseitig und <strong>ab 4.500 Euro</strong> mehrseitig mit eigener Seite je Rechtsgebiet. Enthalten sind Struktur, Design, Entwicklung, Textvorschläge, lokale SEO-Grundlage und eine berufsrechtlich zurückhaltende Formulierung nach § 43b BRAO. Sie bekommen einen Festpreis vor Projektstart.</p>
                    </div>

                    <div className="subpage-story animate-up">
                        <span className="subpage-story-label">Aus der Praxis</span>
                        <p>
                            Der häufigste Fund in meinen kostenlosen Audits von Kanzlei-Websites ist nicht das Design. Es ist das Kontaktformular. Es sieht gut aus, es sagt „Vielen Dank für Ihre Nachricht", und es schickt seine Nachrichten an eine Adresse, die vor drei Kanzleiwechseln eingerichtet wurde. Getestet hat das niemand, weil niemand sich selbst eine Mandatsanfrage schickt.
                        </p>
                        <p>
                            Danach kommt der Punkt, an dem die Startseite mit „Ihr kompetenter Partner in allen Rechtsfragen" beginnt. Das ist berufsrechtlich unbedenklich und inhaltlich leer. Ein Ratsuchender mit einer Kündigung in der Hand sucht keinen Partner in allen Rechtsfragen, er sucht Arbeitsrecht, Eimsbüttel, Termin diese Woche. Deshalb fange ich jedes Kanzlei-Projekt mit einer sehr unromantischen Frage an: Welche drei Sätze muss diese Seite können, damit das Telefon klingelt?
                        </p>
                    </div>

                    <h2 className="animate-up">Warum Sichtbarkeit für Kanzleien schwieriger geworden ist</h2>
                    <p className="animate-up">
                        Zum 1. Januar 2026 waren in Deutschland 167.547 Rechtsanwältinnen und Rechtsanwälte zugelassen, ein Plus gegenüber 166.504 im Vorjahr (BRAK-Mitgliederstatistik). Der Wettbewerb wächst also weiter, und er verlagert sich. Bitkom hat Ende 2024 erhoben, dass 15 Prozent der Menschen bei einem Rechtsproblem zuerst zu einem Online-Tool, einer App oder einer KI greifen, in der Altersgruppe von 16 bis 29 Jahren sind es 23 Prozent. Als Gründe nennen die Befragten Verfügbarkeit rund um die Uhr (61 Prozent), Bequemlichkeit (57 Prozent) und Schnelligkeit (47 Prozent).
                    </p>
                    <p className="animate-up">
                        Das ist keine Nachricht über den Untergang der Anwaltschaft. Es ist eine Nachricht über den Einstieg: Die erste Antwort auf ein Rechtsproblem kommt heute oft von einer Suchmaschine oder einem Chatbot. Wenn Ihre Kanzlei dort als Quelle vorkommt, sind Sie die zweite Antwort, und die ist die bezahlte. Genau darum geht es bei <Link href="/leistungen/ai-seo">AI SEO</Link> und bei einer Seitenstruktur, aus der Maschinen einzelne Aussagen sauber zitieren können.
                    </p>

                    <div className="subpage-stats animate-up">
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">167.547</span>
                            <span className="subpage-stat-label">zugelassene Rechtsanwälte in Deutschland zum 1. Januar 2026 (BRAK)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">23%</span>
                            <span className="subpage-stat-label">der 16- bis 29-Jährigen klären Rechtsfragen zuerst mit Online-Tools oder KI (Bitkom 2024)</span>
                        </div>
                        <div className="subpage-stat">
                            <span className="subpage-stat-value">61%</span>
                            <span className="subpage-stat-label">nennen Erreichbarkeit rund um die Uhr als Grund für den digitalen Weg (Bitkom 2024)</span>
                        </div>
                    </div>

                    <figure className="subpage-figure animate-up">
                        <img src="/leistungen/branchen/anwaelte.svg" alt="Illustration: Ein Smartphone zeigt Suchergebnisse zu Anwalt Hamburg, ein Pfeil führt vom obersten Ergebnis zur Kanzlei, daneben Paragraphenzeichen und Waage" width="1600" height="900" loading="lazy" />
                        <figcaption>Der Weg vom Rechtsproblem zum Mandat führt heute fast immer über ein Suchergebnis.</figcaption>
                    </figure>

                    <h2 className="animate-up">Was auf eine Kanzlei-Website darf und was nicht</h2>
                    <p className="animate-up">
                        Anwaltswerbung ist erlaubt, sie ist nur an Sachlichkeit gebunden. § 43b BRAO lässt Werbung zu, soweit sie über die berufliche Tätigkeit in Form und Inhalt sachlich unterrichtet und nicht auf ein Mandat im Einzelfall gerichtet ist. Die BORA konkretisiert das, unter anderem bei Referenzen: Werbung mit Mandaten oder Mandanten ist nur mit ausdrücklicher Einwilligung zulässig. Das ist der Grund, warum Kanzlei-Websites keine Logo-Wand wie ein Softwareanbieter haben.
                    </p>
                    <div className="rule-cols animate-up">
                        <div className="rule-col">
                            <h3>Das darf auf die Seite</h3>
                            <ul>
                                <li>Verliehene Fachanwaltstitel, maximal drei je Person (§ 43c BRAO)</li>
                                <li>Tätigkeits- und Interessenschwerpunkte, in denen Sie nachhaltig arbeiten</li>
                                <li>Vita, Zulassungsjahr, Sprachen, Lehrtätigkeit, Veröffentlichungen</li>
                                <li>Hinweis auf die Abrechnung nach RVG oder auf Vergütungsvereinbarung</li>
                                <li>Fachbeiträge zu typischen Fällen, ohne konkrete Mandatsdetails</li>
                                <li>Kammerangabe, berufsrechtliche Vorschriften, Impressum nach § 5 DDG</li>
                            </ul>
                        </div>
                        <div className="rule-col rule-no">
                            <h3>Das besser nicht</h3>
                            <ul>
                                <li>Erfolgsquoten und Garantien wie „100 Prozent gewonnene Verfahren"</li>
                                <li>Spitzenstellungsbehauptungen ohne objektiven Nachweis</li>
                                <li>Mandantennamen, Logos oder Testimonials ohne Einwilligung</li>
                                <li>Fantasietitel, die nach Fachanwaltschaft klingen, aber keine sind</li>
                                <li>Fallschilderungen, aus denen sich Beteiligte erkennen lassen</li>
                                <li>Reißerische Ansprache von Betroffenen direkt nach einem Schadensfall</li>
                            </ul>
                        </div>
                    </div>
                    <p className="animate-up">
                        Dazu gehört eine Einschränkung: Ich bin Entwickler, kein Anwalt. Die berufsrechtliche Prüfung Ihrer Texte bleibt bei Ihnen, und darin sind Sie besser als ich. Und noch eine Beobachtung: Zurückhaltung ist kein Nachteil. Eine Kanzlei, die nüchtern erklärt, wie ein Kündigungsschutzprozess abläuft, wirkt vertrauenswürdiger als eine, die mit Superlativen arbeitet. Sachlichkeit ist hier zufällig auch gutes Marketing.
                    </p>

                    <h2 className="animate-up">Was eine Kanzlei-Website leisten muss</h2>
                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Eine Seite je Rechtsgebiet</h3>
                            <p>Arbeitsrecht, Familienrecht und Verkehrsrecht suchen unterschiedliche Menschen mit unterschiedlichen Fragen. Eine Sammelseite „Leistungen" bedient keine davon. Eigene Seiten je Gebiet ranken besser und beantworten die konkrete Frage sofort.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Klarer Weg zum Erstgespräch</h3>
                            <p>Telefonnummer als klickbarer Link, Formular mit wenigen Feldern, optional Online-Terminbuchung und die Angabe, wann Sie zurückrufen. Wer eine Frist im Nacken hat, sucht keinen Kontaktbereich in der Fußzeile.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Transparenz zum Honorar</h3>
                            <p>Ein Satz zur Abrechnungsgrundlage senkt die Hürde erheblich. Bei Verbrauchern ist die Erstberatung nach § 34 RVG ohne Vereinbarung auf 190 Euro netto begrenzt. Wer das sagt, bekommt weniger Anfragen aus Neugier und mehr echte.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Vertrauen durch Gesichter</h3>
                            <p>Ein aktuelles Porträt, Zulassungsjahr, Kammer und ein Absatz darüber, wie Sie arbeiten. Bei Rechtsberatung entscheidet sich Vertrauen an Personen, nicht an Stockfotos von Waagen und Gesetzbüchern.</p>
                        </div>
                    </div>

                    <div className="subpage-features-grid animate-up">
                        <div className="subpage-feature">
                            <h3>Datenschutz, der zum Mandat passt</h3>
                            <p>Selbst gehostete Schriften, TLS-Verschlüsselung, Formulare ohne Drittanbieter-Zwischenlager und ein Cookie-Banner, das nur fragt, wenn es etwas zu fragen gibt. Für eine Berufsgruppe mit Verschwiegenheitspflicht ist das keine Kür.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Lokale Sichtbarkeit</h3>
                            <p>Rechtsgebiet plus Stadtteil ist die Suche, die Mandate bringt. Dafür braucht es konsistente Angaben, ein gepflegtes Google-Unternehmensprofil und Inhalte, die Hamburg wirklich erwähnen. Details im <Link href="/wissen/lokales-seo-hamburg-guide">Leitfaden zu lokalem SEO</Link>.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Tempo</h3>
                            <p>Ladezeiten unter einer Sekunde, PageSpeed 90 bis 100. Das ist technisch unspektakulär und wirkt trotzdem: Jede Sekunde Wartezeit kostet Anfragen, <Link href="/wissen/warum-langsame-websites-kunden-kosten">nachgerechnet im Artikel dazu</Link>.</p>
                        </div>
                        <div className="subpage-feature">
                            <h3>Inhalte, die Sie selbst pflegen</h3>
                            <p>Neue Urteilsbesprechung, neue Kollegin, geänderte Sprechzeiten in der Ferienzeit: Solche Änderungen dürfen keine Rechnung auslösen. Sie bekommen ein CMS und eine Einweisung, die eine halbe Stunde dauert.</p>
                        </div>
                    </div>

                    <h2 className="animate-up">Preise für Kanzlei-Websites</h2>
                    <div className="subpage-pricing-compare animate-up">
                        <div className="subpage-price-col">
                            <h3>Kanzlei-Website kompakt</h3>
                            <div className="sp-price-value">ab 2.900 &euro;</div>
                            <p>Eine Seite, ein Schwerpunkt, ein klarer Weg zum Erstgespräch. Für Einzelkanzleien und für den schnellen Ersatz einer veralteten Seite.</p>
                            <ul className="sp-price-includes">
                                <li>Individuelles Design, responsiv</li>
                                <li>Schwerpunkte und Vita</li>
                                <li>Kontaktformular und Klick-zum-Anruf</li>
                                <li>Honorarhinweis nach RVG</li>
                                <li>Impressum und Datenschutz technisch vorbereitet</li>
                                <li>Lokale SEO-Grundlage</li>
                                <li>PageSpeed 90 bis 100</li>
                            </ul>
                        </div>
                        <div className="subpage-price-col subpage-price-featured">
                            <h3>Kanzlei-Website mehrseitig</h3>
                            <div className="sp-price-value">ab 4.500 &euro;</div>
                            <p>Eigene Seite je Rechtsgebiet, Profile für alle Berufsträger, Platz für Fachbeiträge. Für Sozietäten und Kanzleien mit mehreren Schwerpunkten.</p>
                            <ul className="sp-price-includes">
                                <li>Fünf und mehr Seiten, Seite je Rechtsgebiet</li>
                                <li>Anwaltsprofile mit Fachanwaltstiteln</li>
                                <li>Bereich für Fachbeiträge und Urteile</li>
                                <li>CMS zur eigenen Pflege plus Einweisung</li>
                                <li>Optional Online-Terminbuchung</li>
                                <li>Erweiterte lokale SEO-Optimierung</li>
                                <li>Strukturierte Daten für Kanzlei und Standort</li>
                                <li>Conversion-Tracking, DSGVO-konform</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="animate-up">Ergebnisse aus vergleichbaren Projekten</h2>
                    <p className="animate-up">
                        Kanzlei-Referenzen darf ich hier nicht mit Namen zeigen, das verbietet die Verschwiegenheitspflicht ohne Einwilligung. Zeigen kann ich, was dieselbe Arbeitsweise bei anderen lokalen Dienstleistern in Hamburg gebracht hat, wo Anfragen genauso über Suche und Vertrauen entstehen.
                    </p>
                    <div className="subpage-cases animate-up">
                        <Link href="/referenzen/blitz-hamburg" className="subpage-case-card">
                            <span className="subpage-case-metric">ROI in 7 Wochen</span>
                            <span className="subpage-case-name">Blitz Hamburg: Website, Ads und SEO für einen Handwerksbetrieb</span>
                        </Link>
                        <Link href="/referenzen/gl-sommer" className="subpage-case-card">
                            <span className="subpage-case-metric">728 lokale Aktionen</span>
                            <span className="subpage-case-name">GL Sommer: lokale Sichtbarkeit im Monat nach dem Relaunch</span>
                        </Link>
                        <Link href="/referenzen/kinderalbum" className="subpage-case-card">
                            <span className="subpage-case-metric">Platz 1 in ChatGPT</span>
                            <span className="subpage-case-name">KinderAlbum: Sichtbarkeit in KI-Antworten für ein DSGVO-Thema</span>
                        </Link>
                    </div>

                    <h2 className="animate-up">Der Ablauf</h2>
                    <div className="subpage-process animate-up">
                        <div className="sp-step"><span className="sp-step-num">1</span><div><strong>Erstgespräch, 30 Minuten</strong><p>Welche Rechtsgebiete tragen die Kanzlei, woher kommen Mandate heute, welche Anfragen wollen Sie mehr und welche weniger. Kostenlos und unverbindlich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">2</span><div><strong>Struktur und Texte</strong><p>Ich baue die Seitenstruktur nach Rechtsgebieten und liefere Textvorschläge, die Sie berufsrechtlich prüfen. Sie schreiben nicht von null, Sie korrigieren.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">3</span><div><strong>Design und Entwicklung</strong><p>Individuelles Design, eigener Code, keine Baukastenvorlage. Zwischenstände sehen Sie auf einer Vorschau-URL, Feedback ist jederzeit möglich.</p></div></div>
                        <div className="sp-step"><span className="sp-step-num">4</span><div><strong>Test, Launch, Übergabe</strong><p>Formular-Test mit echten Adressen, Prüfung auf allen Geräten, Ladezeit, strukturierte Daten, Google Search Console. Danach gehören Domain, Zugänge und Quellcode Ihnen.</p></div></div>
                    </div>

                    <div className="subpage-sources animate-up">
                        <h2>Quellen</h2>
                        <ol>
                            <li>Bundesrechtsanwaltskammer, Mitgliederstatistik zum 1. Januar 2026: 167.547 zugelassene Rechtsanwälte (Vorjahr 166.504), 1.555 Personen mit drei Fachanwaltstiteln. <a href="https://www.brak.de/presse/zahlen-und-statistiken/statistiken/" rel="nofollow noopener" target="_blank">brak.de</a></li>
                            <li>Bitkom e. V. (2024), Rechtsfragen und digitale Hilfen: 15 Prozent nutzen zuerst Online-Tools, 23 Prozent der 16- bis 29-Jährigen, Gründe 61/57/47 Prozent. <a href="https://www.bitkom.org/Presse/Presseinformation/Online-Tool-statt-Rechtsanwalt" rel="nofollow noopener" target="_blank">bitkom.org</a></li>
                            <li>§ 43b BRAO, Werbung. <a href="https://www.gesetze-im-internet.de/brao/__43b.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                            <li>§ 34 RVG, Beratung: Erstberatung für Verbraucher ohne Vereinbarung höchstens 190 Euro. <a href="https://www.gesetze-im-internet.de/rvg/__34.html" rel="nofollow noopener" target="_blank">gesetze-im-internet.de</a></li>
                            <li>Berufsordnung für Rechtsanwälte (BORA), Fassung vom 1. Dezember 2025, unter anderem zur Werbung mit Mandaten. <a href="https://www.brak.de/fileadmin/02_fuer_anwaelte/berufsrecht/033-BORA_Stand_01.12.2025.pdf" rel="nofollow noopener" target="_blank">brak.de (PDF)</a></li>
                            <li>Hanseatische Rechtsanwaltskammer Hamburg, Kammerbezirk und Mitgliederzahlen. <a href="https://www.rak-hamburg.de/" rel="nofollow noopener" target="_blank">rak-hamburg.de</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <FaqSection title="Häufige Fragen zu Kanzlei-Websites" items={faqItems} />
            <RelatedServices exclude="webdesign" />
            <ServiceCta text="Reden wir 30 Minuten über Ihre Kanzlei. Ich sage Ihnen ehrlich, ob eine neue Website Ihr Problem löst oder ob es an anderer Stelle klemmt, etwa am Google-Unternehmensprofil oder am Weg zum Erstgespräch." />
        </>
    );
}
