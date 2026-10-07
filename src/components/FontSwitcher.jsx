'use client';

import React, { useEffect, useState } from 'react';

// Temporary: floating picker to compare homepage fonts. Choice is kept in
// the URL (?font=) and localStorage. Remove once a font is chosen.
const FONTS = [
    { id: 'intertight', label: 'Inter Tight' },
    { id: 'manrope', label: 'Manrope' },
    { id: 'jakarta', label: 'Plus Jakarta' },
    { id: 'dmsans', label: 'DM Sans' },
    { id: 'geist', label: 'Geist' },
];

export default function FontSwitcher() {
    const [font, setFont] = useState('intertight');

    useEffect(() => {
        const fromUrl = new URLSearchParams(window.location.search).get('font');
        const initial = fromUrl || localStorage.getItem('vx-font') || 'intertight';
        setFont(FONTS.some((f) => f.id === initial) ? initial : 'intertight');
    }, []);

    useEffect(() => {
        document.documentElement.dataset.vxFont = font;
        localStorage.setItem('vx-font', font);
        const url = new URL(window.location.href);
        url.searchParams.set('font', font);
        window.history.replaceState(null, '', url);
    }, [font]);

    return (
        <div className="vx-fontswitch" role="group" aria-label="Schrift wählen">
            {FONTS.map((f) => (
                <button
                    key={f.id}
                    type="button"
                    className={font === f.id ? 'is-active' : ''}
                    style={{ fontFamily: `var(--font-vx-${f.id})` }}
                    onClick={() => setFont(f.id)}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
}
