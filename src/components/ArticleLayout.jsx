'use client';

import React from 'react';
import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import { getRelatedArticles } from '../lib/articles';

export default function ArticleLayout({ slug, category, title, readTime, publishDate, children }) {
    const relatedArticles = getRelatedArticles(slug, 3);

    const formattedDate = new Date(publishDate).toLocaleDateString('de-DE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <>
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
                    <div className="article-byline animate-up">
                        Von <Link href="/ueber-uns">Vadim Shchepin</Link> · {formattedDate}
                    </div>
                </div>
            </section>

            <article className="article-body section">
                <div className="container">
                    <div className="article-content animate-up">
                        {children}
                    </div>

                    {relatedArticles.length > 0 && (
                        <nav className="related-articles animate-up" aria-label="Weitere Artikel">
                            <h3>Weiterfuhrende Artikel</h3>
                            <div className="related-articles-grid">
                                {relatedArticles.map((article) => (
                                    <Link key={article.slug} href={`/wissen/${article.slug}`} className="related-article-card">
                                        <span className="wissen-card-category">{article.category}</span>
                                        <span className="related-article-title">{article.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    )}

                    <aside className="article-cta animate-up">
                        <div className="cta-box bull-boundary">
                            <h3>Kostenlose Website-Analyse</h3>
                            <p>Wollen Sie wissen, wie Ihre Website abschneidet? Ich analysiere Performance, SEO und Conversion-Potenzial, kostenlos und ehrlich.</p>
                            <Link href="/kontakt" className="button button-primary" data-umami-event="cta-click" data-umami-event-location="article-cta">Jetzt Analyse anfordern</Link>
                        </div>
                    </aside>
                </div>
            </article>
        </>
    );
}
