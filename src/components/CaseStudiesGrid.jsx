import React from 'react';

export default function CaseStudiesGrid() {
    const cases = [
        {
            id: 1,
            image: '/case_study_1.png',
            tag: 'WEBDESIGN',
            title: 'Handwerksbetrieb: Neue Website, 3x mehr Anfragen',
        },
        {
            id: 2,
            image: '/case_study_2.png',
            tag: 'SEO + ADS',
            title: 'Lokaler Dienstleister: Von Seite 5 auf Platz 1',
        },
        {
            id: 3,
            image: '/case_study_3.png',
            tag: 'WEBSITE AUDIT',
            title: 'E-Commerce: PageSpeed von 23 auf 98 optimiert',
        },
    ];

    return (
        <section id="work" className="case-studies section" style={{ paddingTop: 'var(--space-md)' }}>
            <div className="container">
                <div className="photo-grid">
                    {cases.map((item, index) => (
                        <div
                            key={item.id}
                            className={`photo-card animate-up delay-${(index % 3) + 1}`}
                        >
                            <img src={item.image} alt={item.title} className="photo-card-img" loading="lazy" />
                            <div className="photo-card-overlay">
                                <span className="photo-card-date">{item.tag}</span>
                                <h3 className="photo-card-title">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
