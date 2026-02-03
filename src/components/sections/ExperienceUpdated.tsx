'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ExperienceModal } from '@/components/ExperienceModal';
import { experiences } from '@/data/portfolio';
import type { Experience } from '@/data/portfolio';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export function ExperienceUpdated() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(
    null
  );

  return (
    <section id="experience" className="relative py-20 px-4 md:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Experience</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            My professional journey spanning AI/ML engineering and backend development. Click
            on any role to explore detailed responsibilities and achievements.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              onClick={() => setSelectedExperience(exp)}
              className="group cursor-pointer"
            >
              <div className="relative">
                {/* Timeline line */}
                {idx !== experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-cyber-lime to-transparent md:flex hidden" />
                )}

                {/* Experience Card */}
                <div className="flex gap-6">
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-lime to-cyan-400 flex items-center justify-center border-4 border-space-black shadow-lg shadow-cyber-lime/50 relative z-10"
                      whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(190, 242, 100, 0.8)' }}
                    >
                      <Briefcase size={20} className="text-space-black font-bold" />
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <motion.div
                    className="flex-1 p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-cyber-lime/20 hover:border-cyber-lime/50 transition-all"
                    whileHover={{ borderColor: 'rgba(190, 242, 100, 0.5)', y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-cyber-lime mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-white/80 font-semibold text-lg mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-white/60">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.date}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        className="text-cyber-lime opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ChevronRight size={24} />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {exp.desc}
                    </p>

                    {/* Skills/Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 bg-cyber-lime/10 border border-cyber-lime/30 rounded text-cyber-lime/80 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 4 && (
                        <span className="text-xs px-2 py-1 bg-cyber-lime/10 border border-cyber-lime/30 rounded text-cyber-lime/80 font-mono">
                          +{exp.skills.length - 4}
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedExperience(exp);
                      }}
                      className="mt-4 text-cyber-lime hover:text-cyber-lime text-sm font-semibold flex items-center gap-2 group/btn"
                      whileHover={{ gap: 8 }}
                    >
                      View Full Details
                      <ChevronRight size={16} />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
}
