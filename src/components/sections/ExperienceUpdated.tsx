'use client';

import { useState, useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { ExperienceModal } from '@/components/ExperienceModal';
import { experiences } from '@/data/portfolio';
import type { Experience } from '@/data/portfolio';
import { Briefcase, Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react';

export function ExperienceUpdated() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger timeline animation
  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.experience-card-item');

      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 bg-void"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full card-glass text-xs font-mono text-emerald-400 border-emerald-500/20 mb-4">
            <ShieldCheck size={13} />
            <span>PRODUCTION MILESTONES & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-4">
            Production Engineering Journey
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl font-sans">
            Hands-on production track record architecting multi-agent hierarchies, enterprise RAG,
            and high-throughput microservices. Click on any milestone for detailed architectural impact.
          </p>
        </div>

        {/* Experience Timeline Stream */}
        <div className="relative pl-6 sm:pl-10 space-y-8 border-l border-cyan-500/20">
          {experiences.map((exp, idx) => {
            const isCurrent = idx === 0;

            return (
              <div
                key={exp.id}
                className="experience-card-item relative group cursor-pointer"
                onClick={() => setSelectedExperience(exp)}
              >
                {/* Glowing Node on Timeline Axis */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-6 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isCurrent
                      ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.6)] text-cyan-300'
                      : 'bg-void border-white/20 text-white/50 group-hover:border-cyan-400 group-hover:text-cyan-400'
                  }`}
                >
                  <Briefcase size={14} />
                </div>

                {/* Main Experience Card */}
                <div className="card-glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_12px_40px_rgba(0,240,255,0.1)] transition-all">
                  {/* Top Role & Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-sm md:text-base font-semibold text-cyan-400 font-mono mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                      <Calendar size={13} />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  {/* Summary Narrative */}
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed font-sans mb-5">
                    {exp.desc}
                  </p>

                  {/* Key Metrics Chips */}
                  {exp.keyMetrics && exp.keyMetrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      {exp.keyMetrics.slice(0, 3).map((metric, mIdx) => (
                        <div key={mIdx} className="text-left">
                          <div className="text-xs font-mono text-cyan-300 font-bold">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-white/50 font-mono truncate">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills / Framework Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2.5 py-0.5 rounded-md card-glass border-white/5 text-white/70 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 5 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md text-white/40 font-mono">
                          +{exp.skills.length - 5}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedExperience(exp);
                      }}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn ml-auto"
                    >
                      <span>Full Architecture Details</span>
                      <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Experience Details Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
}
