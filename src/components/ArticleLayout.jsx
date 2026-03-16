import React from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import Breadcrumbs from './Breadcrumbs';
import { BUSINESS } from '../lib/schema';

export default function ArticleLayout({ slug, category, title, readTime, publishDate, children }) {
    usePageMeta(`${title} | Hamburg`);
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        author: { '@type': 'Person', name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' },
        publisher: BUSINESS,
        datePublished: publishDate,
        dateModified: publishDate,
        url: `https://webseite.hamburg/wissen/${slug}`,
        inLanguage: 'de',
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://webseite.hamburg/wissen/${slug}` },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="subpage-hero section">
                <div className="container">
                    <Breadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Wissen', href: '/wissen' },
                        { label: title },
                    ]} />
                    <div className="article-meta animate-up">
                        <span className="wissen-card-category">{category}</span>
                        <span className="wissen-card-time">{readTime} Lesezeit</span>
                    </div>
                    <h1 className="subpage-title animate-up">{title}</h1>
                </div>
            </section>

            <article className="article-body section">
                <div className="container">
                    <div className="article-content animate-up">
                        {children}
                    </div>
                    <aside className="article-cta animate-up">
                        <div className="cta-box bull-boundary">
                            <h3>Kostenlose Website-Analyse</h3>
                            <p>Wollen Sie wissen, wie Ihre Website abschneidet? Ich analysiere Performance, SEO und Conversion-Potenzial — kostenlos und ehrlich.</p>
                            <Link to="/kontakt" className="button button-primary">Jetzt Analyse anfordern</Link>
                        </div>
                    </aside>
                </div>
            </article>
        </>
    );
}
