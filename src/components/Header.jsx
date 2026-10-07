'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PHONE_ICON = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`site-header header-vx${scrolled ? ' header-scrolled' : ''}`}>
            <div className="container header-container">
                <Link href="/" className="logo" aria-label="AISEO Home">
                    <img src="/logo_blue_transparent.webp" alt="AISEO Logo" width="100" height="93" />
                </Link>

                <a href="tel:+4917632194754" className="header-phone-mobile" aria-label="Anrufen: 0176 321 94 754" data-umami-event="phone-call" data-umami-event-location="header-mobile">
                    {PHONE_ICON}
                </a>

                <button
                    className={`hamburger${menuOpen ? ' is-active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                    aria-expanded={menuOpen}
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>

                <nav className={`main-nav${menuOpen ? ' nav-open' : ''}`}>
                    <Link href="/leistungen" onClick={closeMenu}>Leistungen</Link>
                    <Link href="/referenzen" onClick={closeMenu}>Referenzen</Link>
                    <Link href="/wissen" onClick={closeMenu}>Wissen</Link>
                    <Link href="/ueber-uns" onClick={closeMenu}>Über uns</Link>
                    <a href="tel:+4917632194754" className="header-phone" data-umami-event="phone-call" data-umami-event-location="header">
                        {PHONE_ICON}
                        0176 321 94 754
                    </a>
                    <Link href="/kontakt" className="button button-sm" onClick={closeMenu} data-umami-event="cta-click" data-umami-event-location="header">Kontakt</Link>
                </nav>
            </div>

            {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
        </header>
    );
}
