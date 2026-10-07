'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

// Floating chat-style mini contact form. Posts to the same /api/contact
// route as the contact page (name + phone required, message optional).
export default function ContactBubble() {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const firstField = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        // Desktop only: on touch devices focusing would pop the keyboard up.
        if (open && status !== 'sent' && window.matchMedia('(pointer: fine)').matches) firstField.current?.focus();
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, status]);

    // The contact page already is the form.
    if (pathname === '/kontakt') return null;

    const toggle = () => {
        if (!open) window.umami?.track('contact-bubble-open');
        setOpen(!open);
    };

    const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, message: `[Chat-Bubble] ${form.message}`.trim() }),
            });
            if (!res.ok) throw new Error();
            setStatus('sent');
            window.umami?.track('contact-bubble-sent');
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className={`contact-bubble${open ? ' is-open' : ''}`}>
            {open && (
                <div className="contact-bubble-panel" role="dialog" aria-label="Kurzanfrage">
                    <div className="contact-bubble-head">
                        <img src="/referenzen/vadim_shchepin_2.webp" alt="" width="40" height="40" />
                        <div>
                            <strong>Vadim Shchepin</strong>
                            <span>Antwort meist am selben Tag</span>
                        </div>
                    </div>

                    {status === 'sent' ? (
                        <p className="contact-bubble-msg">
                            Danke, {form.name.split(' ')[0]}! Ich rufe Sie zurück, spätestens innerhalb von 24 Stunden.
                        </p>
                    ) : (
                        <>
                            <p className="contact-bubble-msg">
                                Hallo! Worum geht es? Hinterlassen Sie Ihre Nummer, ich melde mich persönlich.
                            </p>
                            <form className="contact-bubble-form" onSubmit={submit}>
                                <input ref={firstField} type="text" placeholder="Ihr Name" autoComplete="name" value={form.name} onChange={update('name')} aria-label="Ihr Name" required />
                                <input type="tel" placeholder="Telefonnummer" autoComplete="tel" value={form.phone} onChange={update('phone')} aria-label="Telefonnummer" required />
                                <textarea rows="2" placeholder="Ihr Anliegen (optional)" value={form.message} onChange={update('message')} aria-label="Ihr Anliegen" />
                                <button type="submit" className="button button-primary" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Wird gesendet …' : 'Rückruf anfordern'}
                                </button>
                                {status === 'error' && (
                                    <p className="contact-bubble-error">
                                        Das hat nicht geklappt. Rufen Sie mich gern direkt an: <a href="tel:+4917632194754">0176 321 94 754</a>
                                    </p>
                                )}
                            </form>
                            <div className="contact-bubble-alt">
                                <a href="tel:+4917632194754" data-umami-event="phone-call" data-umami-event-location="contact-bubble">Anrufen</a>
                                <a href="https://wa.me/4917632194754" target="_blank" rel="noopener noreferrer" data-umami-event="whatsapp-click" data-umami-event-location="contact-bubble">WhatsApp</a>
                            </div>
                        </>
                    )}
                </div>
            )}

            <button
                type="button"
                className="contact-bubble-toggle"
                onClick={toggle}
                aria-expanded={open}
                aria-label={open ? 'Kurzanfrage schließen' : 'Kurzanfrage öffnen'}
            >
                {open ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                        <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
