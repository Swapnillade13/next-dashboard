
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',

});
export const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});
export const lusitana = Lusitana({
    subsets: ['latin'],
    variable: '--font-lusitana',
    display: 'swap',
    weight: ['400', '700'],
});

