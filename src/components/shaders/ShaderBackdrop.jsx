'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Code-split: the shader engine only downloads once a scene is about to show.
// A missing export or failed chunk download resolves to an empty component.
const Empty = () => null;
const SCENES = {
    hero: dynamic(() => import('./scenes').then((m) => m.HeroScene || Empty).catch(() => Empty), { ssr: false }),
    cta: dynamic(() => import('./scenes').then((m) => m.CtaScene || Empty).catch(() => Empty), { ssr: false }),
};

// Decorative only: any render error in a scene hides the effect and leaves
// the section's static background, never an error screen.
class SceneBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { failed: false };
    }

    static getDerivedStateFromError() {
        return { failed: true };
    }

    componentDidCatch() {
        this.props.onError?.();
    }

    render() {
        return this.state.failed ? null : this.props.children;
    }
}

// Mounts a WebGPU scene behind a section only while the section is near the
// viewport, so at most one or two GPU canvases run at a time. If the browser
// cannot run WebGPU, or the visitor prefers reduced motion, nothing mounts and
// the section's CSS background stays as the static fallback.
export default function ShaderBackdrop({ scene, className = '' }) {
    const Scene = SCENES[scene] || Empty;
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
                <SceneBoundary onError={() => setFailed(true)}>
                    <Scene
                        onReady={() => setReady(true)}
                        onUnavailable={() => setFailed(true)}
                    />
                </SceneBoundary>
            )}
        </div>
    );
}
