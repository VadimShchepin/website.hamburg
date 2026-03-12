import React, { useState, useRef } from 'react';

export function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    const answerRef = useRef(null);

    return (
        <div className={`sp-faq-item${open ? ' sp-faq-open' : ''}`}>
            <button className="sp-faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
                <span>{q}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sp-faq-chevron">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div className="sp-faq-answer" ref={answerRef} style={{ maxHeight: open ? (answerRef.current?.scrollHeight || 300) + 'px' : '0px' }}>
                <p>{a}</p>
            </div>
        </div>
    );
}

export default function FaqSection({ title = 'Haufige Fragen', items }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(item => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };

    return (
        <section className="sp-faq section light-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="container">
                <div className="section-header text-center">
                    <p className="section-kicker animate-up">Haufige Fragen</p>
                    <h2 className="section-title animate-up">{title}</h2>
                </div>
                <div className="sp-faq-list">
                    {items.map((item, i) => (
                        <FaqItem key={i} q={item.q} a={item.a} />
                    ))}
                </div>
            </div>
        </section>
    );
}
