import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
                <Link to="/" className="logo" aria-label="AISEO Home">
                    <img src="/logo_blue.png" alt="AISEO Logo" width="140" height="auto" />
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
                    <Link to="/leistungen" onClick={closeMenu}>Leistungen</Link>
                    <Link to="/wissen" onClick={closeMenu}>Wissen</Link>
                    <Link to="/ueber-uns" onClick={closeMenu}>Uber uns</Link>
                    <Link to="/kontakt" className="button button-sm" onClick={closeMenu}>Kostenlose Analyse</Link>
                </nav>
            </div>

            {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
        </header>
    );
}
