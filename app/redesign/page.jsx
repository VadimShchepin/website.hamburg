import Link from 'next/link';
import Breadcrumbs from '../../src/components/Breadcrumbs';

export const metadata = {
    title: 'Redesign-Konzepte | AISEO Hamburg',
    description: 'Fertige Redesign-Entwuerfe für echte Unternehmen: Startseiten-Konzepte mit echten Inhalten, gebaut vor dem ersten Gespräch.',
    robots: {
        index: false,
        follow: false,
    },
};

const redesigns = [
    {
        slug: 'hejzel',
        firm: 'Steuerberatung Marek Hejzel',
        sector: 'STEUERBERATUNG · HAMBURG WANDSBEK · SEIT 2004',
        description: 'Heller, ruhiger Kanzlei-Auftritt in Poppins mit dunklem Navy-Hero, weichen Rundungen und Farbfotografie. 51 Seiten auf Deutsch, Polnisch und Englisch: zehn Mandantengruppen mit eigenen Inhalten und ein vierstufiger Fragebogen, der Anfragen vorqualifiziert. Die Schwarzweißaufnahmen der Kanzlei wurden dafür eingefärbt. Dazu eine Angebotsseite mit drei Paketen.',
    },
    {
        slug: 'hopfenbachvilla',
        firm: 'Naturidylle Hopfenbachvilla',
        sector: 'MOEBLIERTES WOHNEN & CO-LIVING · GROSSHANSDORF BEI AHRENSBURG · SEIT 1908',
        description: 'Redaktionelles Gartenjournal aus Garamond, Waldgruen und botanischen Tuschezeichnungen. Vier Seiten: Startseite mit acht Kapiteln, komplettes Raumverzeichnis und zwei Raumseiten. Jeder der zehn Raeume hat Foto und Preis, auch die belegten.',
    },
    {
        slug: 'denis-fahrschule',
        firm: 'Denis Fahrschule',
        sector: 'FAHRSCHULE · HAMBURG · BERLINER TOR',
        description: 'Zweisprachiger Auftritt auf Deutsch und Russisch mit echten Fotos vom Geschaeftsfuehrer und Theorieraum, transparenter Preistabelle Klasse B und rotem Markenakzent. Ersatz für die zuvor gehackte Joomla-Seite.',
    },
    {
        slug: 'zieler',
        firm: 'ZIELER & CO. GmbH',
        sector: 'TROCKENFRUECHTE-HANDELSHAUS · HAMBURG · SEIT 1907',
        description: 'Warmes Kaufmannshaus-Erbe aus Creme, Espresso und Gold, mit Serifen-Typografie und rotierendem Hanse-Stempel. Komplett aus der eigenen Produktfotografie des Hauses gebaut, kein einziges generiertes Bild.',
    },
    {
        slug: 'glissmann',
        firm: 'Hinrich Glissmann GmbH & Co. KG',
        sector: 'SPEDITION · HAMBURG · SEIT 1912',
        description: 'Heller hanseatischer Hafen-Look in den Original-Markenfarben: rotes Laufband, blaues Heritage-Band, kondensierte Display-Typografie und Flotten-Spezifikationen wie im Frachtbrief.',
    },
    {
        slug: 'fraembs-dach',
        firm: 'Fraembs Dachdeckerei',
        sector: 'DACHDECKER-MEISTERBETRIEB · HAMBURG',
        description: 'Dunkler, editorialer Look mit warmem Akzent, grossformatiger Projektgalerie und klaren Leistungsmodulen von Steildach bis Photovoltaik.',
    },
    {
        slug: 'tiemann-co',
        firm: 'Tiemann & Co. KG',
        sector: 'HAUSVERWALTUNG & IMMOBILIEN · HAMBURG · SEIT 1948',
        description: 'Ruhiger Immobilien-Auftritt mit Objektgalerie, nummeriertem Leistungsindex von Verkauf bis WEG-Verwaltung und klassischer Typografie.',
    },
    {
        slug: 'clean-service-nord',
        firm: 'Clean Service Nord GmbH',
        sector: 'GEBAEUDEREINIGUNG · HAMBURG & BREMEN · SEIT 1991',
        description: 'Klarer, moderner Auftritt in Petrol mit Fokus auf Hotel- und Gebaeudereinigung, inklusive komplett neu geschriebener Website-Texte.',
    },
    {
        slug: 'knueppel',
        firm: 'Knueppel & Partner mbB',
        sector: 'WIRTSCHAFTSPRUEFER & STEUERBERATER · WEDEL / ELMSHORN',
        description: 'Ruhige Premium-Beratung: warmes Papier, tiefes Logo-Blau, redaktionelle Serifen und eine Kanzlei-Vorstellung im Kontobuch-Stil. Mit dem echten Logo der Kanzlei.',
    },
    {
        slug: 'sieck',
        firm: 'Erwin Sieck Druckerei GmbH',
        sector: 'DRUCKEREI & STEMPEL · HAMBURG · SEIT 1959',
        description: 'Typografisches Print-Design in Papierweiss, Tiefschwarz und Zinnober: Schnittmarken, Schriftmuster-Hero und ein 24-Stunden-Stempel-Band.',
    },
    {
        slug: 'boege',
        firm: 'gebr. boege Metallveredelungs GmbH',
        sector: 'GALVANIK & METALLVEREDELUNG · HAMBURG · 80+ JAHRE',
        description: 'Praezisions-Design in Graphit mit Chrom-Verlaeufen, technischen Mono-Labels und einer großen 80+ als Anker. Gebaut für eine Branche, die man selten schoen zeigt.',
    },
    {
        slug: 'billinger',
        firm: 'Bettenfabrikation Billinger',
        sector: 'BETTEN & MATRATZEN · SESSLACH (OBERFRANKEN)',
        description: 'Nacht-und-Leinen-Stimmung: Creme, Nachtblau und Honiggold, ein dezenter Sternenhimmel als Gruss an die alte Website und gesteppte Bildrahmen wie eine Matratzennaht.',
    },
    {
        slug: 'zinorm',
        firm: 'Zimmermann Norm- und Verbindungstechnik GmbH',
        sector: 'TECHNISCHER GROSSHANDEL · AHRENSBURG · SEIT 1952',
        description: 'Technische Präzision in Graphit und Rot, mit Katalogfotografie auf weissen Karten und einer großen 1952 als Anker. Gebaut aus der eigenen Produktfotografie des Hauses.',
    },
    {
        slug: 'meier-holzbau',
        firm: 'Johann Meier Holzbau GmbH',
        sector: 'ZIMMEREI · AHLERSTEDT · SEIT 1991',
        description: 'Warmes Holzbau-Design in Creme und dunklem Holzton, mit einer Projektgalerie aus echten Baustellenfotos vom Dachstuhl bis zur Fachwerkscheune.',
    },
    {
        slug: 'samad',
        firm: 'SAMAD Export Import GmbH',
        sector: 'TEPPICHIMPORT · HAMBURGER SPEICHERSTADT · SEIT ÜBER 40 JAHREN',
        description: 'Warme Bordeaux- und Goldtoene für ein Kontorhaus voller Orientteppiche, mit einer Handweberin am Webstuhl als Herkunftsgeschichte. Komplett aus der eigenen Fotografie gebaut.',
    },
    {
        slug: 'gs-statik',
        firm: 'GS-Ingenieure Germer & Petersen',
        sector: 'TRAGWERKSPLANUNG · BAD OLDESLOE · SEIT 1986',
        description: 'Technisches Design in Graphit und Rot, mit Architekturfotos samt echten Bewehrungsplan-Overlays als Hero und einem Team-Raster aus acht echten Portraits.',
    },
    {
        slug: 'roennfeld',
        firm: 'Rönnfeld Rollladen und Markisen GmbH',
        sector: 'ROLLLADENBAU & SONNENSCHUTZ · QUICKBORN · SEIT 1991',
        description: 'Klares Gelb-Anthrazit-Design nach dem eigenen Sonnenstrahlen-Logo, mit dem ganzen Team samt Fuhrpark als Hero-Foto vor dem eigenen Laden.',
    },
    {
        slug: 'hidde-meyer',
        firm: 'Hidde Meyer & Söhne GmbH',
        sector: 'KUNSTSCHLOSSEREI & METALLBAU · HAMBURG-RAHLSTEDT · SEIT FAST 60 JAHREN',
        description: 'Industrielles Design in Stahlgrau und Orange, mit einem Raster aus 8 echten Projektfotos vom Balkongelaender bis zur Kunstschlosserei.',
    },
    {
        slug: 'kp-elektrotechnik',
        firm: 'KP Elektrotechnik Kay Petersen e.K.',
        sector: 'ELEKTROTECHNIK & SMART-HOME · HAMBURG-WANDSBEK · SEIT 1997',
        description: 'Klares Blau-Gelb-Design mit dem echten Firmenfahrzeug als Hero-Foto und einem Leistungsraster für Elektroinstallation bis KNX Smart-Home.',
    },
    {
        slug: 'niehusen',
        firm: 'Karl Niehusen GmbH & Co. KG',
        sector: 'FISCHFEINKOST · HAMBURG-ALTONA · SEIT 1961',
        description: 'Warmes Rot-Creme-Design mit echter Produktfotografie und einer Zeitleiste von St. Pauli bis zur Großen Elbstraße.',
    },
    {
        slug: 'naval-technica',
        firm: 'Naval Technica Export GmbH',
        sector: 'SCHIFFBAUMATERIAL-EXPORT · HAMBURG-WINTERHUDE · SEIT 35 JAHREN',
        description: 'Marineblau mit Tau-Gold-Akzent, echtem Hafenfoto als Hero und einem Team-Raster mit sechs echten Portraits.',
    },
    {
        slug: 'hartmann-popp',
        firm: 'Hartmann & Popp GmbH & Co. KG',
        sector: 'OELSAATEN & GEWUERZE · HAMBURG-WALTERSHOF · SEIT 1958',
        description: 'Erdiges Senfgelb-Gruen-Design mit Koehlbrandbruecken-Hero und einer Zeitleiste über drei Generationen der Familie Popp.',
    },
    {
        slug: 'luessenhop',
        firm: 'Fleischerei Lüssenhop',
        sector: 'FLEISCHEREI & PARTYSERVICE · BUXTEHUDE-NEUKLOSTER · SEIT 1860',
        description: 'Warmes Rot-Design mit dem echten Team-Foto vor dem Ladengeschaeft als Hero, in fuenfter Generation gefuehrt.',
    },
    {
        slug: 'dirala',
        firm: 'Dirala. Blankeneser Werkstätten GmbH',
        sector: 'RAUMAUSSTATTUNG · HAMBURG-BLANKENESE · SEIT 1884',
        description: 'Elegantes Bordeaux-Design mit dem echten Logo und einer Referenzliste aus echten Botschaften, Museen und Institutionen.',
    },
    {
        slug: 'buchbinderei-erdmann',
        firm: 'Buchbinderei Erdmann & Papermoles GmbH',
        sector: 'BUCHBINDEREI · HAMBURG-NIENSTEDTEN · SEIT 1996',
        description: 'Editoriales Gold-Anthrazit-Design, komplett aus der eigenen Werkstattfotografie gebaut, vom Goldschnitt bis zur Papermoles-Lederlinie.',
    },
    {
        slug: 'antiquariat-pabel',
        firm: 'Antiquariat Reinhold Pabel',
        sector: 'ANTIQUARIAT · HAMBURG-NEUSTADT · SEIT 1948',
        description: 'Pergament-Tinte-Design mit echter Ladenfotografie am Michel und einer Firmengeschichte von Chicago bis zum Krameramt.',
    },
    {
        slug: 'juwelier-gustke',
        firm: 'Juwelier Gustke',
        sector: 'UHREN & SCHMUCK · GLINDE · SEIT 1967',
        description: 'Klares Blau-Silber-Design um die echte Skelettuhr-Nahaufnahme, mit Markengrid und direktem Goldankauf-Baustein.',
    },
    {
        slug: 'conditorei-muench',
        firm: 'Conditorei Muench',
        sector: 'KONDITOREI & CAFE · HAMBURG-BARMBEK · SEIT 1988',
        description: 'Warmes Rose-Schoko-Design mit echter Backstubenfotografie, von der Fruchttorte bis zur Marzipanfigur.',
    },
    {
        slug: 'dwenger',
        firm: 'Adolf Dwenger Bestattungen',
        sector: 'BESTATTUNGEN · BARGTEHEIDE · SEIT 1907',
        description: 'Ruhiges Anthrazit-Gold-Design mit der echten Firmenchronik seit 1907, von der historischen Kutsche bis zum aktuellen Inhaber.',
    },
    {
        slug: 'moebelmacher',
        firm: 'Die Moebelmacher',
        sector: 'MOEBELTISCHLEREI · HAMBURG-WANDSBEK · SEIT 1996',
        description: 'Warmes Holz-Anthrazit-Design mit echter Werkstattfotografie, von der Firmenchronik bis zum restaurierten Treppengelaender.',
    },
    {
        slug: 'optiker-jacob',
        firm: 'Optiker Jacob',
        sector: 'AUGENOPTIK · GEESTHACHT · SEIT 1965',
        description: 'Warmes Rose-Holz-Design mit echter Ladenfotografie und einem originalen Zeitungsartikel aus dem Gruendungsjahr 1965.',
    },
    {
        slug: 'getraenke-spezi',
        firm: 'Getraenke Spezi',
        sector: 'GETRAENKEHANDEL · HAMBURG-WANDSBEK · SEIT 1954',
        description: 'Bernstein-Tanne-Design mit echten Event- und Ausschankfotos, der Firmenchronik seit 1954 und einem Markenpartner-Grid.',
    },
    {
        slug: 'hamburger-teehandel',
        firm: 'HTH Hamburger Teehandel',
        sector: 'TEEGROSSHANDEL · HAMBURGER SPEICHERSTADT · SEIT 1989',
        description: 'Tee-Gold-Design mit echten Zertifizierungslogos, der dreigenerationigen Firmenchronik und dem echten Team der Familie Wulf.',
    },
];

export default function RedesignPage() {
    return (
        <>
            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Redesign' }]} />
                    <p className="section-kicker animate-up">Redesign</p>
                    <h1 className="subpage-title animate-up">Erst der Entwurf. Dann das Gespräch.</h1>
                    <p className="subpage-intro animate-up">
                        Jedes Konzept hier ist eine fertig gebaute Startseite für ein echtes Unternehmen: mit den Original-Inhalten
                        und Fakten der Firma, einem Design, das zur Branche passt, und funktionierender Mobilansicht. Kein Moodboard,
                        keine Skizze, sondern eine Seite, die man anklicken kann.
                    </p>
                </div>
            </section>

            <section className="wissen-grid-section section light-bg">
                <div className="container">
                    <div className="wissen-grid">
                        {redesigns.map((r, i) => (
                            <a
                                key={r.slug}
                                href={`/redesign/${r.slug}`}
                                target="_blank"
                                rel="noopener"
                                className={`wissen-card animate-up delay-${(i % 3) + 1}`}
                                data-umami-event="redesign-open"
                                data-umami-event-slug={r.slug}
                            >
                                <img
                                    src={`/redesign/${r.slug}/preview.webp`}
                                    alt={`Redesign-Konzept für ${r.firm}`}
                                    loading={i < 3 ? 'eager' : 'lazy'}
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1200 / 760',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        marginBottom: 'var(--space-sm, 1rem)',
                                        display: 'block',
                                    }}
                                />
                                <div className="wissen-card-meta">
                                    <span className="wissen-card-category">{r.sector}</span>
                                </div>
                                <h2 className="wissen-card-title">
                                    <span>{r.firm}</span>
                                </h2>
                                <p className="wissen-card-excerpt">{r.description}</p>
                                <span className="wissen-card-link">
                                    Redesign ansehen
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sp-cta section">
                <div className="container">
                    <div className="cta-box bull-boundary animate-up">
                        <p className="section-kicker">So könnte Ihre Website aussehen</p>
                        <h2 className="section-title">Ihr Redesign, bevor Sie sich entscheiden.</h2>
                        <p className="offer-framing">Schicken Sie mir Ihre aktuelle Website. Sie bekommen einen fertigen Entwurf mit Ihren echten Inhalten, bevor Sie einen Cent ausgeben. Gefaellt er Ihnen nicht, war es das Risiko von genau null Euro.</p>
                        <div className="cta-actions mt-4">
                            <Link href="/kontakt" className="button button-primary button-large" data-umami-event="cta-click" data-umami-event-location="redesign-cta">Kostenlosen Entwurf anfragen</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
