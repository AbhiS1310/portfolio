'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProjectsUpdated } from '@/components/sections/ProjectsUpdated';
import { ExperienceUpdated } from '@/components/sections/ExperienceUpdated';
import { Terminal } from '@/components/sections/Terminal';
import { GlowEffect } from '@/components/ui/GlowEffect';
import { Bio } from '@/data/portfolio';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-space-black">
      {/* Global Glow Effect */}
      <GlowEffect intensity={0.6} />

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Sections */}
        <Hero />
        <ProjectsUpdated />
        <ExperienceUpdated />
        <Terminal />

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-white/60 text-sm">
                  © 2024 {Bio.name}. Architected with Next.js, Framer Motion & Tailwind.
                </p>
              </div>
              <div className="flex gap-6 text-white/60 text-sm">
                <a
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-lime transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-lime transition-colors"
                >
                  LinkedIn
                </a>
                {Bio.insta && (
                  <a
                    href={Bio.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyber-lime transition-colors"
                  >
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
