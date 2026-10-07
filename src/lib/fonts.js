import { Geist, Inter_Tight, Manrope, Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';

// Candidate fonts for the homepage concept. FontSwitcher lets the owner
// compare them live; once one is picked, drop the others from this file.
// (next/font needs literal options, so no shared options object.)
export const interTight = Inter_Tight({ subsets: ['latin'], display: 'swap', variable: '--font-vx-intertight' });
export const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-vx-manrope' });
export const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-vx-jakarta' });
export const dmSans = DM_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-vx-dmsans' });
export const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-vx-geist' });

export const vxFontVars = [interTight, manrope, jakarta, dmSans, geist].map((f) => f.variable).join(' ');
