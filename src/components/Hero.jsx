'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GOOGLE_ICON = (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const STAR = (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

export default function Hero() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('.hero-rating', {
            y: 20, opacity: 0, duration: 0.5
        })
        .from('.hero-line', {
            y: 60, opacity: 0, duration: 0.8, stagger: 0.12
        }, '-=0.2')
        .from('.hero-sub', {
            y: 20, opacity: 0, duration: 0.6
        }, '-=0.4')
        .from('.hero-cta', {
            y: 20, opacity: 0, duration: 0.6
        }, '-=0.3')
        .from('.hero-trust-line', {
            y: 10, opacity: 0, duration: 0.5
        }, '-=0.2')
        .from('.hero-shot', {
            y: 40, opacity: 0, duration: 0.8, stagger: 0.15
        }, '-=1.2')
        .from('.hero-chip', {
            y: 16, opacity: 0, scale: 0.92, duration: 0.5, stagger: 0.12
        }, '-=0.5');
    }, { scope: sectionRef });

    return (
        <section id="hero" className="hero-modern hero-split" ref={sectionRef}>
            <div className="hero-split-inner container">
                <div className="hero-copy">
                    <a
                        href="https://share.google/Ta1IQevSFQFxhXvvn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-rating"
                        data-umami-event="hero-google-rating"
                        title="Alle Google-Bewertungen ansehen"
                    >
                        {GOOGLE_ICON}
                        <strong>5,0</strong>
                        <span className="hero-rating-stars">{STAR}{STAR}{STAR}{STAR}{STAR}</span>
                        <span className="hero-rating-label">bei Google</span>
                    </a>
                    <h1 className="hero-headline">
                        <span className="hero-line">Ihr nächster Kunde</span>
                        <span className="hero-line hero-line-accent">sucht jetzt.</span>
                    </h1>
                    <p className="hero-sub">
                        Findet er Sie – oder Ihren Wettbewerber? Websites, SEO und Ads, die messbar Anfragen bringen. Im Schnitt 40+ pro Monat für meine Kunden.
                    </p>
                    <div className="hero-cta">
                        <Link href="/kontakt" className="button button-primary button-large" data-umami-event="cta-click" data-umami-event-location="hero">
                            Kostenlose Website-Analyse
                        </Link>
                        <Link href="/referenzen" className="button button-large" data-umami-event="cta-click" data-umami-event-location="hero-secondary">
                            Referenzen ansehen
                        </Link>
                    </div>
                    <p className="hero-trust-line">Unverbindlich · Antwort innerhalb 24 h · aus Hamburg</p>
                </div>

                <div className="hero-visual">
                    <div className="hero-shot hero-shot-back">
                        <div className="hero-shot-bar"><span /><span /><span /></div>
                        <Image
                            src="/referenzen/Gl-sommer-hero.webp"
                            alt="Website für GL Sommer, Garten- und Landschaftsbau in Hamburg"
                            width={600}
                            height={390}
                            quality={80}
                            priority
                        />
                    </div>
                    <div className="hero-shot hero-shot-front">
                        <div className="hero-shot-bar"><span /><span /><span /></div>
                        <Image
                            src="/referenzen/Blitz-hero.webp"
                            alt="Website für Blitz Hamburg, Handwerksbetrieb"
                            width={600}
                            height={390}
                            quality={80}
                            priority
                        />
                    </div>
                    <div className="hero-chip hero-chip-1">
                        <strong>ROI in 7 Wochen</strong>
                        <span>Blitz Hamburg</span>
                    </div>
                    <div className="hero-chip hero-chip-2">
                        <strong>728 lokale Aktionen/Mt.</strong>
                        <span>GL Sommer</span>
                    </div>
                    <div className="hero-chip hero-chip-3">
                        <strong>100/100</strong>
                        <span>Google PageSpeed</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
