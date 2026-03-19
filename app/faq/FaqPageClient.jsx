'use client';

import React, { useState } from 'react';

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`faq-item${open ? ' faq-open' : ''}`}>
            <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
                <span>{q}</span>
                <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" className="faq-icon-v" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
            {open && (
                <div className="faq-answer">
                    <p>{a}</p>
                </div>
            )}
        </div>
    );
}

export default function FaqPageClient({ categories }) {
    return (
        <div className="faq-hub">
            {categories.map((cat) => (
                <div key={cat.name} className="faq-category">
                    <h2 className="faq-category-title">{cat.name}</h2>
                    <div className="faq-list">
                        {cat.questions.map((item) => (
                            <FaqItem key={item.q} q={item.q} a={item.a} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
