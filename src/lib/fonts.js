import { Geist } from 'next/font/google';

// Geist for the Vercel-style homepage concept (page + its header variant).
export const geist = Geist({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-geist',
});
