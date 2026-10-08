import React from 'react';

// Key numbers (prices, time frames) in a subpage hero, so the first screen
// answers "what does it cost" before the reader scrolls. Values must repeat
// facts stated further down the page, never new claims.
export default function HeroFacts({ items }) {
    return (
        <dl className={`hero-facts hero-facts-${items.length}`}>
            {items.map(([value, label]) => (
                <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value.endsWith('/Monat') ? <>{value.slice(0, -6)}<small>/Monat</small></> : value}</dd>
                </div>
            ))}
        </dl>
    );
}
