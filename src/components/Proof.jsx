import React, { useEffect, useRef, useState } from 'react';

function Counter({ target, duration = 2000, suffix = '' }) {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        let observer;
        const el = elementRef.current;

        if (el) {
            observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    const stepTime = Math.abs(Math.floor(duration / target));
                    let current = 0;

                    const timer = setInterval(() => {
                        current += Math.ceil(target / (duration / stepTime)) || 1;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(current);
                        }
                    }, stepTime);

                    observer.unobserve(el);
                }
            });
            observer.observe(el);
        }

        return () => {
            if (observer && el) observer.unobserve(el);
        };
    }, [target, duration]);

    return <span ref={elementRef} className="metric-value">{count}{suffix}</span>;
}

export default function Proof() {
    return (
        <section id="proof" className="proof section dark-blue-bg">
            <div className="container">
                <div className="section-header text-center">
                    <p className="section-kicker" style={{ color: 'rgba(255,255,255,0.6)' }}>Zahlen & Fakten</p>
                    <h2 className="section-title" style={{ color: '#fff' }}>Ergebnisse statt Versprechen.</h2>
                </div>
                <div className="metrics-grid">
                    <div className="metric">
                        <Counter target={10} suffix="+" />
                        <span className="metric-label">Jahre Erfahrung</span>
                    </div>
                    <div className="metric">
                        <Counter target={100} />
                        <span className="metric-unit">/100</span>
                        <span className="metric-label">PageSpeed Score</span>
                    </div>
                    <div className="metric">
                        <span className="metric-value">100%</span>
                        <span className="metric-label">Transparente Reportings</span>
                    </div>
                    <div className="metric">
                        <Counter target={50} suffix="+" />
                        <span className="metric-label">Projekte umgesetzt</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
