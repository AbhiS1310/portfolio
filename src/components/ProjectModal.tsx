'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Code2,
} from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#090D17] border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10 scrollbar-hide"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="sticky top-0 bg-[#090D17]/95 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-white/50">
                  {project.date}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* Header Title & Overview */}
              <div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Performance Metrics Bar */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="p-5 rounded-xl bg-[#0D121F] border border-cyan-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                    <Award size={15} />
                    <span>VERIFIED PRODUCTION TELEMETRY</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white/5 border border-white/5 text-center"
                      >
                        <div className="text-xl font-bold font-mono text-cyan-300">
                          {metric.value}
                        </div>
                        <div className="text-[11px] font-mono text-white/50 mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <Lightbulb size={18} className="text-emerald-400" />
                    <span>Key Engineering Features</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs md:text-sm text-white/80"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-emerald-400 shrink-0 mt-0.5"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Solutions */}
              {((project.challenges && project.challenges.length > 0) ||
                (project.solutions && project.solutions.length > 0)) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.challenges && project.challenges.length > 0 && (
                    <div className="p-5 rounded-xl bg-[#0D121F] border border-amber-500/20">
                      <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <AlertTriangle size={14} />
                        Engineering Bottlenecks
                      </h4>
                      <ul className="space-y-2.5">
                        {project.challenges.map((c, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-white/70 flex items-start gap-2"
                          >
                            <span className="text-amber-400 mt-0.5">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.solutions && project.solutions.length > 0 && (
                    <div className="p-5 rounded-xl bg-[#0D121F] border border-emerald-500/20">
                      <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <CheckCircle2 size={14} />
                        Architectural Solutions
                      </h4>
                      <ul className="space-y-2.5">
                        {project.solutions.map((s, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-white/70 flex items-start gap-2"
                          >
                            <span className="text-emerald-400 mt-0.5">✓</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Key Contributions */}
              {project.keyContributions && project.keyContributions.length > 0 && (
                <div className="p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Target size={15} />
                    Personal Contributions & Leadership
                  </h3>
                  <div className="space-y-2">
                    {project.keyContributions.map((contrib, idx) => (
                      <div
                        key={idx}
                        className="text-xs md:text-sm text-white/80 flex items-start gap-2.5"
                      >
                        <span className="text-cyan-400 font-mono">↳</span>
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Tags */}
              <div>
                <h3 className="text-xs font-mono text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Code2 size={14} />
                  Tech Stack & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-space-black font-semibold text-xs font-mono hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  >
                    <Github size={15} />
                    <span>View Repository</span>
                  </a>
                )}
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl card-glass border border-emerald-500/30 text-emerald-300 font-semibold text-xs font-mono hover:bg-emerald-500/10 transition-all"
                  >
                    <ExternalLink size={15} />
                    <span>Live Deployment</span>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto ml-auto px-5 py-2.5 rounded-xl card-glass text-xs font-mono text-white/60 hover:text-white transition-colors"
                >
                  Close System View
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
