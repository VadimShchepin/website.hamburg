'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Code-split: the shader engine only downloads once a scene is about to show.
const SCENES = {
    hero: dynamic(() => import('./scenes').then((m) => m.HeroScene), { ssr: false }),
    proof: dynamic(() => import('./scenes').then((m) => m.ProofScene), { ssr: false }),
    wordmark: dynamic(() => import('./scenes').then((m) => m.WordmarkScene), { ssr: false }),
    cta: dynamic(() => import('./scenes').then((m) => m.CtaScene), { ssr: false }),
};

// Mounts a WebGPU scene behind a section only while the section is near the
// viewport, so at most one or two GPU canvases run at a time. If the browser
// cannot run WebGPU, or the visitor prefers reduced motion, nothing mounts and
// the section's CSS background stays as the static fallback.
export default function ShaderBackdrop({ scene, className = '' }) {
    const Scene = SCENES[scene];
    const ref = useRef(null);
    const [active, setActive] = useState(false);
    const [failed, setFailed] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (!('gpu' in navigator)) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const observer = new IntersectionObserver(
            ([entry]) => setActive(entry.isIntersecting),
            { rootMargin: '200px 0px' },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!active) setReady(false);
    }, [active]);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className={`shader-backdrop${ready ? ' is-ready' : ''} ${className}`}
        >
            {active && !failed && (
                <Scene
                    onReady={() => setReady(true)}
                    onUnavailable={() => setFailed(true)}
                />
            )}
        </div>
    );
}
