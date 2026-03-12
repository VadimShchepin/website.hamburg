import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, phone, website, message } = req.body;

    if (!name || !phone || !website) {
        return res.status(400).json({ error: 'Name, Telefon und Website sind Pflichtfelder.' });
    }

    try {
        await resend.emails.send({
            from: 'AISEO Kontaktformular <onboarding@resend.dev>',
            to: 'vadim.shchepin.it@gmail.com',
            replyTo: undefined,
            subject: `Neue Anfrage von ${name}`,
            html: `
                <h2>Neue Anfrage uber webseite.hamburg</h2>
                <table style="border-collapse:collapse;width:100%;max-width:500px;">
                    <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td></tr>
                    <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Telefon</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
                    <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Website</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="${escapeHtml(website)}">${escapeHtml(website)}</a></td></tr>
                    ${message ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Nachricht</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(message)}</td></tr>` : ''}
                </table>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: 'E-Mail konnte nicht gesendet werden.' });
    }
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
