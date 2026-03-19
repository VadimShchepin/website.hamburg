import React from 'react';
import Link from 'next/link';

export default function Breadcrumbs({ items }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            item: item.href ? `https://webseite.hamburg${item.href}` : undefined,
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol className="breadcrumbs-list">
                    {items.map((item, i) => (
                        <li key={i} className="breadcrumbs-item">
                            {i < items.length - 1 && item.href ? (
                                <Link href={item.href}>{item.label}</Link>
                            ) : i < items.length - 1 ? (
                                <span>{item.label}</span>
                            ) : (
                                <span aria-current="page">{item.label}</span>
                            )}
                            {i < items.length - 1 && <span className="breadcrumbs-sep">/</span>}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
