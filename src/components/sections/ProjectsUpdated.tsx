'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { BentoCard } from '@/components/ui/BentoCard';
import { ProjectModal } from '@/components/ProjectModal';
import { projects } from '@/data/portfolio';
import type { Project } from '@/data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const filterVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05 },
  },
};

const filterItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function ProjectsUpdated() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];

  // Filter projects
  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 px-4 md:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Projects Portfolio</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            A showcase of my work spanning Web Development, Machine Learning, and Blockchain. Click on any project to explore detailed information.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-cyber-lime text-space-black'
                  : 'bg-white/5 border border-cyber-lime/30 text-cyber-lime hover:bg-cyber-lime/10'
              }`}
              variants={filterItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <BentoCard
                className="h-full flex flex-col justify-between"
                title={project.title}
                description={project.date}
              >
                <div className="flex flex-col justify-between h-full">
                  {/* Project Description */}
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-cyber-lime/10 border border-cyber-lime/30 rounded text-cyber-lime/80 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-cyber-lime/10 border border-cyber-lime/30 rounded text-cyber-lime/80 font-mono">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-white/10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-cyber-lime/10 border border-cyber-lime/20 text-cyber-lime hover:bg-cyber-lime/20 transition-colors text-xs"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.webapp && (
                      <a
                        href={project.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-cyber-lime/10 border border-cyber-lime/20 text-cyber-lime hover:bg-cyber-lime/20 transition-colors text-xs"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex-1 py-2 px-3 rounded-lg bg-cyber-lime/10 border border-cyber-lime/20 text-cyber-lime hover:bg-cyber-lime/20 transition-colors text-xs font-medium"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-white/60">No projects found in this category.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
