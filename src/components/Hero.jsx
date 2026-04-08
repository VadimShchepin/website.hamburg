'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
    const sectionRef = useRef(null);
    const frameRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Staggered entrance
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('.hero-kicker', {
            y: 20, opacity: 0, duration: 0.6
        })
        .from('.hero-line', {
            y: 60, opacity: 0, duration: 0.8, stagger: 0.12
        }, '-=0.3')
        .from('.hero-sub', {
            y: 20, opacity: 0, duration: 0.6
        }, '-=0.4')
        .from('.hero-cta', {
            y: 20, opacity: 0, duration: 0.6
        }, '-=0.3')
        .from('.hero-scroll-hint', {
            opacity: 0, duration: 0.8
        }, '-=0.2');

        // Frame draws in
        tl.from('.hero-frame-edge', {
            scaleX: 0, scaleY: 0, opacity: 0, duration: 0.8,
            stagger: 0.08, ease: 'power2.out'
        }, '-=1.2');
        tl.from('.hero-frame-line-h', {
            scaleX: 0, opacity: 0, duration: 1, ease: 'power2.inOut'
        }, '-=0.6');
        tl.from('.hero-frame-line-v', {
            scaleY: 0, opacity: 0, duration: 1, ease: 'power2.inOut'
        }, '-=1');

        // Mouse interaction on frame
        const handleMouseMove = (e) => {
            const rect = section.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            // Corners shift outward from center on hover — frame "breathes"
            gsap.to('.hero-frame-tl', { x: x * -8, y: y * -8, duration: 0.6, ease: 'power2.out' });
            gsap.to('.hero-frame-tr', { x: x * 8, y: y * -8, duration: 0.6, ease: 'power2.out' });
            gsap.to('.hero-frame-bl', { x: x * -8, y: y * 8, duration: 0.6, ease: 'power2.out' });
            gsap.to('.hero-frame-br', { x: x * 8, y: y * 8, duration: 0.6, ease: 'power2.out' });

            // Connecting lines subtly shift
            gsap.to('.hero-frame-line-top', { y: y * -4, duration: 0.6, ease: 'power2.out' });
            gsap.to('.hero-frame-line-bottom', { y: y * 4, duration: 0.6, ease: 'power2.out' });
            gsap.to('.hero-frame-line-left', { x: x * -4, duration: 0.6, ease: 'power2.out' });
            gsap.to('.hero-frame-line-right', { x: x * 4, duration: 0.6, ease: 'power2.out' });
        };

        const handleMouseLeave = () => {
            gsap.to('.hero-frame-edge, .hero-frame-line-h, .hero-frame-line-v', {
                x: 0, y: 0, duration: 0.8, ease: 'power2.out'
            });
        };

        section.addEventListener('mousemove', handleMouseMove);
        section.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            section.removeEventListener('mousemove', handleMouseMove);
            section.removeEventListener('mouseleave', handleMouseLeave);
        };

    }, { scope: sectionRef });

    return (
        <section id="hero" className="hero-modern" ref={sectionRef}>
            {/* Interactive frame */}
            <div className="hero-frame" ref={frameRef} aria-hidden="true">
                {/* Corner brackets */}
                <div className="hero-frame-edge hero-frame-tl" />
                <div className="hero-frame-edge hero-frame-tr" />
                <div className="hero-frame-edge hero-frame-bl" />
                <div className="hero-frame-edge hero-frame-br" />
                {/* Connecting lines */}
                <div className="hero-frame-line-h hero-frame-line-top" />
                <div className="hero-frame-line-h hero-frame-line-bottom" />
                <div className="hero-frame-line-v hero-frame-line-left" />
                <div className="hero-frame-line-v hero-frame-line-right" />
            </div>

            <div className="hero-modern-inner">
                <p className="hero-kicker">Webdesign & Marketing aus Hamburg</p>
                <h1 className="hero-headline">
                    <span className="hero-line">Ihr nachster Kunde</span>
                    <span className="hero-line hero-line-accent">sucht jetzt.</span>
                </h1>
                <p className="hero-sub">
                    Findet er Sie — oder Ihren Wettbewerber? Websites, SEO und Ads, die messbar Kunden bringen.
                </p>
                <div className="hero-cta">
                    <Link href="/kontakt" className="button button-primary button-large" data-umami-event="cta-click" data-umami-event-location="hero">
                        Kostenlose Website-Analyse
                    </Link>
                </div>
            </div>
            <div className="hero-scroll-hint">
                <span className="hero-scroll-line" />
            </div>
        </section>
    );
}
