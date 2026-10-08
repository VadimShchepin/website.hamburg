import React from 'react';
import VxCta from './VxCta';

// Closing panel on service pages and case studies: the homepage's navy
// shader CTA, with the page's own heading and text.
export default function ServiceCta({ title = 'Bereit für den nächsten Schritt?', text }) {
    return (
        <div className="vx sp-cta-vx">
            <VxCta
                title={title}
                text={text || 'Kostenloses Erstgespräch, unverbindlich und konkret. Ich sage Ihnen ehrlich, wo das Potenzial liegt.'}
                primaryLabel="Jetzt Analyse anfordern"
                location="service-cta"
            />
        </div>
    );
}
