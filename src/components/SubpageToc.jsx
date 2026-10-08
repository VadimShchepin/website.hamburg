'use client';

import React, { useEffect, useRef, useState } from 'react';

const slugify = (text) => text
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

// Sticky "on this page" list for long subpages. Sits as the first child of
// .subpage-body / .article-content and numbers that container's direct h2s
// (the same h2s the CSS counter numbers), so the outline needs no extra data.
export default function SubpageToc({ label = 'Auf dieser Seite' }) {
    const ref = useRef(null);
    const [items, setItems] = useState([]);
    const [active, setActive] = useState(null);

    useEffect(() => {
        const body = ref.current?.parentElement;
        if (!body) return undefined;
        const headings = [...body.querySelectorAll(':scope > h2')];
        const used = new Set();
        setItems(headings.map((h, i) => {
            if (!h.id) {
                let id = slugify(h.textContent) || `abschnitt-${i + 1}`;
                while (used.has(id) || document.getElementById(id)) id += '-2';
                h.id = id;
            }
            used.add(h.id);
            return { id: h.id, text: h.textContent, num: String(i + 1).padStart(2, '0') };
        }));

        let frame = 0;
        const update = () => {
            frame = 0;
            let current = null;
            for (const h of headings) {
                if (h.getBoundingClientRect().top < 160) current = h.id;
            }
            setActive(current);
        };
        const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <aside className="subpage-toc" ref={ref}>
            <nav aria-label={label}>
                <p className="subpage-toc-label">{label}</p>
                <ol>
                    {items.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} className={item.id === active ? 'is-active' : undefined}>
                                <span>{item.num}</span>{item.text}
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
        </aside>
    );
}
