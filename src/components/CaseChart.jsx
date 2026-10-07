// Chart figure for case studies. Charts are static SVGs in public/referenzen/charts,
// rendered by marketing/scripts/case_studies_charts_site_2026_10_07.py in two sizes
// (desktop 800 px, mobile 380 px). Title and source live here as HTML, not in the SVG.
export default function CaseChart({ slug, title, alt, source, note, width = 800, height = 360 }) {
    return (
        <figure className="cs-chart animate-up">
            <p className="cs-chart-title">{title}</p>
            <picture>
                <source media="(max-width: 640px)" srcSet={`/referenzen/charts/${slug}-mobil.svg`} width="380" height="320" />
                <img
                    src={`/referenzen/charts/${slug}.svg`}
                    alt={alt}
                    width={width}
                    height={height}
                    loading="lazy"
                    decoding="async"
                />
            </picture>
            <figcaption className="cs-chart-caption">
                {source}
                {note && <><br />{note}</>}
            </figcaption>
        </figure>
    );
}
