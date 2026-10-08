import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abhishek Chaudhary | AI Engineer — Multi-Agent Systems & GenAI',
  description: 'AI Engineer specializing in autonomous multi-agent systems, real-time voice AI, enterprise RAG pipelines, and high-throughput microservices.',
  keywords: 'Abhishek Chaudhary, AI Engineer, Multi-Agent Systems, Generative AI, LangGraph, RAG, Python, FastAPI, Real-time Voice AI',
  authors: [{ name: 'Abhishek Chaudhary' }],
  openGraph: {
    title: 'Abhishek Chaudhary | AI Engineer',
    description: 'Architecting Autonomous Multi-Agent Systems & Enterprise GenAI Pipelines',
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
