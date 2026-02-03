'use client';

import { motion, type Variants } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Digiquanta / Mondee',
    role: 'Senior AI Engineer',
    period: '2023 - Present',
    description: 'Leading the development of voice-first AI systems for enterprise automation.',
    achievements: [
      'Architected real-time voice processing pipeline handling 1M+ requests/day',
      'Reduced latency by 65% through inference optimization',
      'Built multimodal RAG system integrating 50+ data sources',
    ],
    color: '#bef264',
  },
  {
    company: 'Enthuons',
    role: 'ML Research Engineer',
    period: '2021 - 2023',
    description: 'Research and development of novel transformer architectures.',
    achievements: [
      'Published 3 peer-reviewed papers on efficient language models',
      'Designed custom CUDA kernels improving throughput by 40%',
      'Mentored team of 5 junior researchers',
    ],
    color: '#06b6d4',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

export function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 md:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Experience</span>
          </h2>
          <p className="text-white/60 text-lg">
            Journey through my professional roles and contributions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Neon Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-lime via-cyan-400 to-transparent">
            <style>{`
              @keyframes flicker {
                0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
                  box-shadow: 0 0 10px rgba(190, 242, 100, 0.8);
                }
                20%, 24%, 55% {
                  box-shadow: 0 0 0px rgba(190, 242, 100, 0);
                }
              }
            `}</style>
            <div
              className="absolute w-full h-full bg-gradient-to-b from-cyber-lime via-cyan-400 to-transparent rounded-full"
              style={{ animation: 'flicker 0.15s infinite' }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-12 pl-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 top-0 -translate-x-[68px] w-4 h-4 rounded-full border-2 border-space-black"
                  style={{ borderColor: exp.color, backgroundColor: exp.color }}
                  whileHover={{ scale: 1.5, boxShadow: `0 0 20px ${exp.color}` }}
                  transition={{ type: 'spring', stiffness: 200 }}
                />

                {/* Card */}
                <motion.div
                  className="glassmorphism rounded-2xl p-6 md:p-8"
                  whileHover={{
                    y: -8,
                    boxShadow: `0 0 30px ${exp.color}33`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1" style={{ color: exp.color }}>
                        {exp.role}
                      </h3>
                      <p className="text-white/80">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-white/70 mb-6">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex gap-3 text-sm text-white/70"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="text-cyber-lime flex-shrink-0 mt-1">▸</span>
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
