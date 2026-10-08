'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ArchitectureLab } from '@/components/sections/ArchitectureLab';
import { ProjectsUpdated } from '@/components/sections/ProjectsUpdated';
import { ExperienceUpdated } from '@/components/sections/ExperienceUpdated';
import { SkillsMatrix } from '@/components/sections/SkillsMatrix';
import { Terminal } from '@/components/sections/Terminal';
import { GlowEffect } from '@/components/ui/GlowEffect';
import { Bio } from '@/data/portfolio';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-space-black">
      {/* Global Ambient Glow */}
      <GlowEffect intensity={0.5} />

      {/* Main App Cockpit */}
      <div className="relative z-10">
        {/* Dynamic Island Navigation */}
        <Navbar />

        {/* Section 1: Command Center & Real-Time Waveform */}
        <Hero />

        {/* Section 2: Architecture Lab (Interactive AI Pipeline Inspector) */}
        <ArchitectureLab />

        {/* Section 3: Featured Production Projects (Bento Grid 2.0) */}
        <ProjectsUpdated />

        {/* Section 4: Engineering Trajectory (ScrollTrigger Circuit Timeline) */}
        <ExperienceUpdated />

        {/* Section 5: Technical Matrix & Production Stack */}
        <SkillsMatrix />

        {/* Section 6: Direct Transmission Center (Dual-Mode Quick Form & CLI) */}
        <Terminal />

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-4 md:px-8 bg-[#05070B]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <span className="text-sm font-bold text-white">
                {Bio.name}
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="text-xs font-mono text-white/50">
                Architected with Next.js 16, GSAP & Tailwind
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-white/60">
              <a
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              {Bio.resume && (
                <a
                  href={Bio.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Resume
                </a>
              )}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
