import React from 'react';
import { Link } from 'react-router-dom';

const allServices = [
    { slug: 'webdesign', title: 'Webdesign & Entwicklung', desc: 'Schnelle, konversionsstarke Websites', price: 'Ab 2.000' },
    { slug: 'seo', title: 'SEO & Lokale Sichtbarkeit', desc: 'Gefunden werden bei Google & Maps', price: 'Ab 1.000/Mt.' },
    { slug: 'ai-seo', title: 'AI SEO', desc: 'Sichtbar in ChatGPT & Perplexity', price: 'Ab 1.200/Mt.' },
    { slug: 'google-ads', title: 'Google & Local Ads', desc: 'Sofort Anfragen uber bezahlte Suche', price: 'Ab 500/Mt.' },
    { slug: 'website-audit', title: 'Website-Audit', desc: 'Kostenlose Analyse Ihrer Website', price: 'Kostenlos' },
];

export default function RelatedServices({ exclude }) {
    const related = allServices.filter(s => s.slug !== exclude);
    return (
        <section className="related-services section light-bg">
            <div className="container">
                <div className="section-header text-center">
                    <p className="section-kicker animate-up">Weitere Leistungen</p>
                    <h2 className="section-title animate-up">Passt auch zu Ihrem Projekt.</h2>
                </div>
                <div className="related-grid">
                    {related.map((s, i) => (
                        <Link key={s.slug} to={`/leistungen/${s.slug}`} className={`related-card animate-up delay-${(i % 3) + 1}`}>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                            <span className="related-price">{s.price}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
