'use client';

import { useEffect } from 'react';

export default function AnimateOnScroll() {
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
        const root = document.getElementById('__next') || document.body;
        mo.observe(root, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mo.disconnect();
        };
    }, []);
    return null;
}
