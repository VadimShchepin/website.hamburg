import { Space_Grotesk } from 'next/font/google';

// Font of the Vercel-style homepage (page, header and footer variants).
export const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap', variable: '--font-vx' });

export const vxFontVars = spaceGrotesk.variable;
