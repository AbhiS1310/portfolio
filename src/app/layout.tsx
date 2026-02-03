import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Neural Portfolio - AI Engineer',
  description: 'Deep Space Cyber-Minimalist portfolio showcasing AI systems, voice pipelines, and multimodal RAG architectures.',
  keywords: 'AI, Machine Learning, Voice Processing, RAG, Real-time Systems',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Neural Portfolio - AI Engineer',
    description: 'Architecting Autonomous Intelligence',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#020617" />
      </head>
      <body className="bg-space-black text-white antialiased overflow-x-hidden">
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
