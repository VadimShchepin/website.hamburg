import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CursorFollower } from './components/CursorFollower';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import WissenPage from './pages/WissenPage';
import UeberUnsPage from './pages/UeberUnsPage';
import WebdesignPage from './pages/leistungen/WebdesignPage';
import SeoPage from './pages/leistungen/SeoPage';
import AiSeoPage from './pages/leistungen/AiSeoPage';
import GoogleAdsPage from './pages/leistungen/GoogleAdsPage';
import WebsiteAuditPage from './pages/leistungen/WebsiteAuditPage';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function AnimateOnScroll() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        const observe = () => {
            document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
        };

        observe();
        const mo = new MutationObserver(observe);
        mo.observe(document.getElementById('root'), { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mo.disconnect();
        };
    }, []);
    return null;
}

function App() {
    return (
        <>
            <ScrollToTop />
            <AnimateOnScroll />
            <CursorFollower />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/leistungen" element={<ServicesPage />} />
                    <Route path="/leistungen/webdesign" element={<WebdesignPage />} />
                    <Route path="/leistungen/seo" element={<SeoPage />} />
                    <Route path="/leistungen/ai-seo" element={<AiSeoPage />} />
                    <Route path="/leistungen/google-ads" element={<GoogleAdsPage />} />
                    <Route path="/leistungen/website-audit" element={<WebsiteAuditPage />} />
                    <Route path="/wissen" element={<WissenPage />} />
                    <Route path="/ueber-uns" element={<UeberUnsPage />} />
                    <Route path="/kontakt" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
