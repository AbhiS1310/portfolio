'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BentoCard } from '@/components/ui/BentoCard';
import { ProjectModal } from '@/components/ProjectModal';
import { projects } from '@/data/portfolio';
import type { Project } from '@/data/portfolio';
import { Github, ExternalLink, ArrowRight, Activity } from 'lucide-react';

export function ProjectsUpdated() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];

  // Filter projects
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 bg-void/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full card-glass text-xs font-mono text-cyan-400 border-cyan-500/20 mb-4">
            <Activity size={13} />
            <span>FEATURED SYSTEMS & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-4">
            Engineered AI Work & Projects
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl font-sans">
            A curated showcase of production generative architectures, autonomous agent workflows,
            and low-latency microservices. Click any card to explore full architectural specifications and metrics.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-mono transition-all duration-200 ${
                  isSelected
                    ? 'bg-cyan-500 text-space-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'card-glass text-white/70 hover:text-white hover:border-cyan-500/30'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project) => {
            const topMetric = project.metrics && project.metrics[0];

            return (
              <BentoCard
                key={project.id}
                className="h-full flex flex-col justify-between"
                title={project.title}
                description={project.date}
                onClick={() => setSelectedProject(project)}
              >
                {/* Telemetry ribbon if metrics exist */}
                {topMetric && (
                  <div className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
                    <span className="text-[10px] uppercase text-white/50">
                      {topMetric.label}
                    </span>
                    <span className="font-bold">{topMetric.value}</span>
                  </div>
                )}

                {/* Project Description */}
                <p className="text-white/70 text-xs md:text-sm mb-4 leading-relaxed line-clamp-3 font-sans">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mb-6 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-md card-glass border-white/5 text-cyan-300/80 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] px-2 py-1 rounded-md card-glass text-white/50 font-mono">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg card-glass text-white/70 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                      title="View Source Code"
                    >
                      <Github size={15} />
                    </a>
                  )}

                  {project.webapp && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg card-glass text-white/70 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                      title="View Live Web Demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all text-xs font-mono font-medium ml-auto"
                  >
                    <span>System Specs</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </BentoCard>
            );
          })}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 card-glass rounded-2xl">
            <p className="text-white/60 font-mono text-sm">
              No systems found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
