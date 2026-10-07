import React from 'react';
import Link from 'next/link';
import ShaderBackdrop from './shaders/ShaderBackdrop';

// Navy closing panel with the cursor-painted shader, shared by the homepage
// and the subpages. Must sit inside a .vx wrapper.
export default function VxCta({
    title = 'Lassen Sie uns über Ihr Projekt sprechen.',
    text = 'Kostenloses Erstgespräch, Antwort innerhalb von 24 Stunden.',
    primaryLabel = 'Projekt anfragen',
    primaryHref = '/kontakt',
    location = 'cta-section',
}) {
    return (
        <section className="vx-cta-section">
            <div className="vx-wrap">
                <div id="cta" className="vx-cta shader-host">
                    <ShaderBackdrop scene="cta" />
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <div className="vx-actions">
                        <Link href={primaryHref} className="vx-btn vx-btn-light" data-umami-event="cta-click" data-umami-event-location={location}>{primaryLabel}</Link>
                        <a href="tel:+4917632194754" className="vx-btn vx-btn-ghost" data-umami-event="phone-call" data-umami-event-location={location}>0176 321 94 754</a>
                        <a href="https://wa.me/4917632194754" target="_blank" rel="noopener noreferrer" className="vx-btn vx-btn-ghost" data-umami-event="whatsapp-click" data-umami-event-location={location}>WhatsApp</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
