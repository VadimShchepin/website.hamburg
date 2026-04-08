'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        <header className={`site-header${scrolled ? ' header-scrolled' : ''}`}>
            <div className="container header-container">
                <Link href="/" className="logo" aria-label="AISEO Home">
                    <img src="/logo_blue.webp" alt="AISEO Logo" width="100" height="86" />
                </Link>

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
                    <Link href="/ueber-uns" onClick={closeMenu}>Uber uns</Link>
                    <Link href="/kontakt" className="button button-sm" onClick={closeMenu} data-umami-event="cta-click" data-umami-event-location="header">Kostenlose Analyse</Link>
                </nav>
            </div>

            {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
        </header>
    );
}
