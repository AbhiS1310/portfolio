'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import type { Experience } from '@/data/portfolio';
import { X, Briefcase, Award, Code } from 'lucide-react';

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
  if (!experience) return null;

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: { y: 50, opacity: 0, scale: 0.95 },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          >
            <motion.div
              className="w-full max-w-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-2xl border border-cyber-lime/20 shadow-2xl max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <motion.div
                className="sticky top-0 bg-slate-900/95 backdrop-blur border-b border-cyber-lime/20 p-6 flex items-start justify-between"
                variants={itemVariants}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-cyber-lime/10 border border-cyber-lime/30 flex items-center justify-center">
                      <Briefcase className="text-cyber-lime" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-cyber-lime">
                        {experience.role}
                      </h2>
                      <p className="text-white/60 text-sm">{experience.company}</p>
                    </div>
                  </div>
                  <p className="text-cyber-lime/60 text-sm font-mono">{experience.date}</p>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-cyber-lime/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </motion.div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Full Description */}
                {experience.fullDescription && (
                  <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-cyber-lime mb-3">
                      Overview
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {experience.fullDescription}
                    </p>
                  </motion.div>
                )}

                {/* Key Metrics */}
                {experience.keyMetrics && experience.keyMetrics.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-cyber-lime mb-4 flex items-center gap-2">
                      <Award size={20} />
                      Key Metrics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {experience.keyMetrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          className="p-3 bg-white/5 border border-cyber-lime/20 rounded-lg text-center"
                          whileHover={{ borderColor: '#bef264', backgroundColor: 'rgba(190, 242, 100, 0.05)' }}
                        >
                          <p className="text-cyber-lime font-bold text-lg">
                            {metric.value}
                          </p>
                          <p className="text-white/60 text-xs font-mono">
                            {metric.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-cyber-lime mb-4 flex items-center gap-2">
                      <Award size={20} />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="flex gap-3 text-white/70 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <span className="text-cyber-lime font-bold mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-cyber-lime mb-4 flex items-center gap-2">
                      <Code size={20} />
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-cyber-lime/10 border border-cyber-lime/30 rounded-lg text-cyber-lime text-sm font-mono hover:bg-cyber-lime/20 transition-colors cursor-default"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.02 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Skills */}
                {experience.skills && experience.skills.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-white/80 mb-4">
                      Core Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded text-white/60 text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
