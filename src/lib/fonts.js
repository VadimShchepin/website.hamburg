import { Archivo, Archivo_Black } from 'next/font/google';

// Fonts of the homepage concept: Archivo Black for headlines, Archivo for
// everything else (same family, so they sit well together).
export const archivo = Archivo({ subsets: ['latin'], display: 'swap', variable: '--font-vx' });
export const archivoBlack = Archivo_Black({ subsets: ['latin'], display: 'swap', weight: '400', variable: '--font-vx-display' });

export const vxFontVars = `${archivo.variable} ${archivoBlack.variable}`;
