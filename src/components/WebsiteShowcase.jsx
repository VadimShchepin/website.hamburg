'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function WebsiteShowcase({ slides, interval = 5500 }) {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const reduced = useRef(false);

    useEffect(() => {
        reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }, []);

    useEffect(() => {
        if (paused || reduced.current || slides.length < 2) return;
        const timer = setTimeout(() => setActive(i => (i + 1) % slides.length), interval);
        return () => clearTimeout(timer);
    }, [active, paused, interval, slides.length]);

    const current = slides[active];

    return (
        <div
            className="ws-showcase"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
        >
            <div className="ws-stage">
                <div className="ws-browser">
                    <div className="ws-chrome">
                        <span className="ws-lights" aria-hidden="true">
                            <i /><i /><i />
                        </span>
                        <span className="ws-url">{current.url}</span>
                    </div>
                    <div className="ws-screen">
                        {slides.map((s, i) => (
                            <img
                                key={s.url + i}
                                src={s.desktop}
                                alt={i === active ? s.alt : ''}
                                width="1400"
                                height="875"
                                className={i === active ? 'is-active' : ''}
                                aria-hidden={i === active ? undefined : 'true'}
                                loading={i === 0 ? undefined : 'lazy'}
                            />
                        ))}
                    </div>
                </div>

                <div className="ws-phone" aria-hidden="true">
                    <div className="ws-phone-screen">
                        {slides.map((s, i) => (
                            <img
                                key={s.mobile + i}
                                src={s.mobile}
                                alt=""
                                width="440"
                                height="790"
                                className={i === active ? 'is-active' : ''}
                                loading={i === 0 ? undefined : 'lazy'}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="ws-meta">
                <div className="ws-caption">
                    <strong>{current.client}</strong>
                    <span>{current.note}</span>
                    <Link href={current.href} className="ws-link">Zur Referenz &rarr;</Link>
                </div>
                <div className="ws-dots" role="tablist" aria-label="Referenzen durchblättern">
                    {slides.map((s, i) => (
                        <button
                            key={'dot' + i}
                            type="button"
                            role="tab"
                            aria-selected={i === active}
                            aria-label={`${s.client}: ${s.note}`}
                            className={`ws-dot${i === active ? ' is-active' : ''}`}
                            onClick={() => setActive(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
