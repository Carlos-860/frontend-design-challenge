import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const neuePlak = localFont({
    src: [
        {
            path: '../public/fonts/neue-plak/Neue-Plak-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../public/fonts/neue-plak/Neue-Plak-CondBlack.ttf',
            weight: '800',
            style: 'normal'
        },
        {
            path: '../public/fonts/neue-plak/Neue-Plak-Regular.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/fonts/neue-plak/Neue-Plak-SemiBold.otf',
            weight: '600',
            style: 'normal'
        }
    ]
})