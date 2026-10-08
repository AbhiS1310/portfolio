'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Experience } from '@/data/portfolio';
import { X, Briefcase, Award, Code, CheckCircle2, Calendar } from 'lucide-react';

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceModal({
  experience,
  isOpen,
  onClose,
}: ExperienceModalProps) {
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

  if (!experience) return null;

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

          {/* Modal Card */}
          <motion.div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#090D17] border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10 scrollbar-hide"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#090D17]/95 backdrop-blur border-b border-white/10 p-6 flex items-start justify-between z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {experience.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <span className="text-sm font-semibold text-cyan-300">
                      {experience.company}
                    </span>
                    <span className="text-xs font-mono text-white/50 flex items-center gap-1">
                      <Calendar size={12} />
                      {experience.date}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Overview */}
              {experience.fullDescription && (
                <div>
                  <h3 className="text-xs font-mono text-white/50 uppercase tracking-wider mb-2">
                    ROLE OVERVIEW & SCOPE
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {experience.fullDescription}
                  </p>
                </div>
              )}

              {/* Verified Metrics */}
              {experience.keyMetrics && experience.keyMetrics.length > 0 && (
                <div className="p-5 rounded-xl bg-[#0D121F] border border-cyan-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                    <Award size={15} />
                    <span>PRODUCTION IMPACT METRICS</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {experience.keyMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white/5 border border-white/5 rounded-lg text-center"
                      >
                        <p className="text-cyan-300 font-bold font-mono text-lg">
                          {metric.value}
                        </p>
                        <p className="text-white/50 text-[11px] font-mono mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Achievements */}
              {experience.achievements && experience.achievements.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono text-white/50 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    KEY PRODUCTION ACHIEVEMENTS
                  </h3>
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs md:text-sm text-white/80 flex items-start gap-3"
                      >
                        <span className="text-emerald-400 font-mono mt-0.5">✓</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {experience.technologies && experience.technologies.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code size={14} />
                    SYSTEM STACK DEPLOYED
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {experience.skills && experience.skills.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                    CORE COMPETENCIES
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/60 text-[11px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl card-glass text-xs font-mono text-white/70 hover:text-white transition-colors"
                >
                  Close Experience View
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
