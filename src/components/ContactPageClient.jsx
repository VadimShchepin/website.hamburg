'use client';

import React, { useState } from 'react';

export default function ContactPageClient() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        website: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setError('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                window.umami?.track('form-submit', { location: 'contact-page' });
                setSubmitted(true);
            } else {
                setError('Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an hallo@webseite.hamburg.');
            }
        } catch {
            setError('Verbindungsfehler. Bitte versuchen Sie es erneut.');
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="contact-page section">
            <div className="container">
                <div className="contact-layout">
                    {/* Left: Form */}
                    <div className="contact-form-col">
                        <p className="section-kicker animate-up">Kontakt</p>
                        <h1 className="section-title animate-up" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                            Kostenlose Website-Analyse anfordern.
                        </h1>
                        <p className="large-text animate-up">
                            Erzählen Sie mir kurz von Ihrem Unternehmen. Ich melde mich innerhalb von 24 Stunden mit einer ersten Einschätzung.
                        </p>

                        {submitted ? (
                            <div className="contact-success animate-up">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                                <h3>Vielen Dank!</h3>
                                <p>Ihre Anfrage ist angekommen. Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
                            </div>
                        ) : (
                            <form className="contact-form animate-up" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Ihr Name"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Telefonnummer <span className="form-required">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="+49 40 ..."
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="website">Ihre Website <span className="form-optional">(optional)</span></label>
                                    <input
                                        type="url"
                                        id="website"
                                        name="website"
                                        placeholder="https://ihre-website.de"
                                        value={form.website}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Nachricht <span className="form-optional">(optional)</span></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="Was ist Ihr Ziel? Wo sehen Sie Potenzial?"
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                {error && <p style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{error}</p>}
                                <button type="submit" className="button button-primary button-large" disabled={sending}>
                                    {sending ? 'Wird gesendet...' : 'Analyse anfordern'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right: Info */}
                    <div className="contact-info-col">
                        <div className="contact-info-card bull-boundary animate-up">
                            <h3>Direkter Kontakt</h3>
                            <div className="contact-info-items">
                                <a href="tel:+4917632194754" className="contact-info-item" data-umami-event="phone-call" data-umami-event-location="contact-page">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    <span>0176 / 321 94 754</span>
                                </a>
                                <a href="mailto:hallo@webseite.hamburg" className="contact-info-item" data-umami-event="email-click" data-umami-event-location="contact-page">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    <span>hallo@webseite.hamburg</span>
                                </a>
                            </div>
                        </div>

                        <div className="contact-promise animate-up delay-1">
                            <h3>Was Sie erwartet</h3>
                            <ul className="check-list">
                                <li>Antwort innerhalb von 24 Stunden</li>
                                <li>Kostenlose Erstanalyse Ihrer Website</li>
                                <li>Ehrliche Einschätzung, kein Verkaufsgespräch</li>
                                <li>Konkrete Empfehlungen, die Sie auch allein umsetzen können</li>
                            </ul>
                        </div>

                        <div className="contact-promise animate-up delay-2">
                            <h3>Kein Risiko</h3>
                            <p className="large-text">Das Erstgespräch ist kostenlos und unverbindlich. Sie erhalten eine ehrliche Analyse und entscheiden selbst, ob und wie es weitergeht.</p>
                        </div>

                        <div className="contact-promise animate-up delay-3">
                            <h3>Womit ich helfe</h3>
                            <ul className="check-list">
                                <li><a href="/leistungen/webdesign">Webdesign &amp; Entwicklung</a> für schnelle, konversionsstarke Websites</li>
                                <li><a href="/leistungen/e-commerce-entwicklung">E-Commerce-Entwicklung</a> für Shopify, Shopware &amp; WooCommerce</li>
                                <li><a href="/leistungen/seo">SEO &amp; lokale Sichtbarkeit</a> in Hamburg</li>
                                <li><a href="/leistungen/google-ads">Google Ads</a> ohne verbranntes Budget</li>
                                <li>Frische Tipps im <a href="/wissen">Wissen-Bereich</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
