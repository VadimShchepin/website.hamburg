'use client';

import React, { useEffect, useState } from 'react';

// Sticky row of in-page links with the current section highlighted.
export default function JumpNav({ items, label = 'Themen' }) {
    const [active, setActive] = useState('');

    useEffect(() => {
        const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
            },
            { rootMargin: '-30% 0px -60% 0px' },
        );
        sections.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [items]);

    return (
        <nav className="sx-jumpnav" aria-label={label}>
            <div className="container">
                {items.map((i) => (
                    <a key={i.id} href={`#${i.id}`} className={active === i.id ? 'is-active' : undefined}>
                        <span>{i.num}</span>{i.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
