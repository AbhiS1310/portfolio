'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, Github, ExternalLink, Award, Target, Lightbulb } from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

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
      transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glassmorphism rounded-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h1 className="text-3xl md:text-4xl font-bold glow-text">
                        {project.title}
                      </h1>
                      <span className="text-xs px-3 py-1 rounded-full bg-cyber-lime/20 border border-cyber-lime/30 text-cyber-lime font-mono">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm">{project.date}</p>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} className="text-cyber-lime" />
                  </motion.button>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-white/80 text-base leading-relaxed">
                    {project.fullDescription || project.description}
                  </p>
                </div>

                {/* Key Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <motion.div
                    className="mb-8 p-4 rounded-lg bg-cyber-lime/5 border border-cyber-lime/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-sm font-semibold text-cyber-lime mb-3 flex items-center gap-2">
                      <Award size={16} />
                      Key Metrics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-cyber-lime">
                            {metric.value}
                          </div>
                          <div className="text-xs text-white/60">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-cyber-lime mb-3 flex items-center gap-2">
                      <Lightbulb size={18} />
                      Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3 text-white/70"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <span className="text-cyber-lime mt-1">✓</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Challenges & Solutions */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {project.challenges && project.challenges.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <h3 className="text-lg font-semibold text-red-400 mb-3">Challenges</h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, idx) => (
                          <motion.li
                            key={idx}
                            className="text-sm text-white/70 flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + idx * 0.05 }}
                          >
                            <span className="text-red-400 mt-1">•</span>
                            <span>{challenge}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {project.solutions && project.solutions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <h3 className="text-lg font-semibold text-green-400 mb-3">Solutions</h3>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, idx) => (
                          <motion.li
                            key={idx}
                            className="text-sm text-white/70 flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + idx * 0.05 }}
                          >
                            <span className="text-green-400 mt-1">•</span>
                            <span>{solution}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>

                {/* Key Contributions */}
                {project.keyContributions && project.keyContributions.length > 0 && (
                  <motion.div
                    className="mb-8 p-4 rounded-lg bg-cyber-lime/5 border border-cyber-lime/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-sm font-semibold text-cyber-lime mb-3 flex items-center gap-2">
                      <Target size={16} />
                      Your Contributions
                    </h3>
                    <ul className="space-y-2">
                      {project.keyContributions.map((contribution, idx) => (
                        <motion.li
                          key={idx}
                          className="text-sm text-white/70 flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + idx * 0.05 }}
                        >
                          <span className="text-cyber-lime mt-1">→</span>
                          <span>{contribution}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Tech Tags */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <h3 className="text-sm font-semibold text-white/80 mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-cyber-lime/30 text-cyber-lime font-mono hover:bg-cyber-lime/10 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.03 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 cyber-button flex items-center justify-center gap-2"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                  {project.webapp && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 cyber-button-outline flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {!project.webapp && (
                    <button
                      onClick={onClose}
                      className="flex-1 cyber-button-outline"
                    >
                      Close
                    </button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
