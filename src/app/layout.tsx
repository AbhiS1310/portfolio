import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const manrope = localFont({
  src: '../../public/fonts/manrope.ttf',
  variable: '--font-manrope',
  display: 'swap',
  weight: '200 800',
});
export const metadata: Metadata = {
  metadataBase: new URL('https://abhis1310.github.io'),
  title: 'Abhishek Chaudhary — AI/ML Engineer',
  description: 'Selected work in agentic AI, multimodal document intelligence, predictive modeling, and AI product engineering by Abhishek Chaudhary.',
  authors: [{ name: 'Abhishek Chaudhary' }],
  alternates: { canonical: '/portfolio/' },
  openGraph: {
    title: 'Abhishek Chaudhary — AI/ML Engineer',
    description: 'From models to useful products. Explore selected AI/ML work, experience, and engineering contributions.',
    type: 'website',
    url: '/portfolio/',
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head><meta name="theme-color" content="#f8f7f3" /></head>
      <body>{children}</body>
    </html>
  );
}
