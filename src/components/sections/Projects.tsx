'use client';

import { motion, type Variants } from 'framer-motion';
import { BentoCard } from '@/components/ui/BentoCard';
import { Github, Zap, Microscope, Laugh } from 'lucide-react';

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

const WaveformAnimation = () => (
  <div className="flex items-center justify-center gap-1 h-20">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="w-1 bg-gradient-to-t from-cyber-lime to-cyan-400 rounded-full"
        style={{
          height: `${Math.random() * 60 + 20}px`,
          animation: `waveform 0.8s ease-in-out infinite`,
          animationDelay: `${i * 0.067}s`,
        }}
      />
    ))}
  </div>
);

const ScanlineAnimation = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full h-full overflow-hidden rounded-lg">
    <div className="absolute inset-0">{children}</div>
    <div
      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent pointer-events-none"
      style={{
        animation: 'scanline 3s linear infinite',
      }}
    />
  </div>
);

const GradientMesh = () => (
  <div
    className="absolute inset-0 rounded-lg opacity-60"
    style={{
      background: 'linear-gradient(45deg, #bef264, #06b6d4, #8b5cf6)',
      backgroundSize: '200% 200%',
      animation: 'gradient-mesh 8s ease infinite',
    }}
  />
);

const TerminalWindow = () => (
  <div className="bg-black/40 rounded border border-cyber-lime/50 p-4 font-mono text-xs h-full">
    <div className="text-cyber-lime mb-2">$ git contributions</div>
    <div className="text-white/60 space-y-1">
      <div><span className="text-cyber-lime">{'>'} commits:</span> 4,287</div>
      <div><span className="text-cyber-lime">{'>'} streak:</span> 142 days</div>
      <div><span className="text-cyber-lime">{'>'} languages:</span> 8</div>
      <div><span className="text-cyber-lime">{'>'} status:</span> <span className="text-green-400">active</span></div>
    </div>
  </div>
);

interface TechTag {
  label: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  span: string;
  children?: React.ReactNode;
  tags: TechTag[];
}

const ProjectCard = ({ title, description, icon, span, children, tags }: ProjectCardProps) => (
  <motion.div variants={itemVariants}>
    <BentoCard span={span as any} title={title} description={description}>
      <div className="h-full flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-cyber-lime">{icon}</div>
        </div>
        {children && <div className="flex-1">{children}</div>}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="text-xs px-2 py-1 bg-cyber-lime/10 border border-cyber-lime/30 rounded text-cyber-lime/80 font-mono"
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  </motion.div>
);

export function Projects() {
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
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Inference Lab</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Advanced AI systems deployed in production, architected for real-time performance and scalability.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {/* Project 1: Voice Scheduling Agent - 2x2 */}
          <ProjectCard
            title="Voice Scheduling Agent"
            description="Real-time voice processing pipeline"
            icon={<Zap size={24} />}
            span="col-span-1 md:col-span-2 row-span-2"
            tags={[
              { label: 'WebRTC' },
              { label: 'Realtime API' },
              { label: 'Python' },
              { label: 'NVIDIA' },
            ]}
          >
            <WaveformAnimation />
          </ProjectCard>

          {/* Project 2: Medical Vision AI - 2x1 */}
          <ProjectCard
            title="Medical Vision AI"
            description="Advanced diagnostic imaging system"
            icon={<Microscope size={24} />}
            span="col-span-1 md:col-span-2"
            tags={[
              { label: 'TensorFlow' },
              { label: 'DICOM' },
              { label: 'FastAPI' },
            ]}
          >
            <ScanlineAnimation>
              <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-white/40 text-sm font-mono">Scanning...</div>
              </div>
            </ScanlineAnimation>
          </ProjectCard>

          {/* Project 3: AI Comedy Generator - 1x1 */}
          <ProjectCard
            title="AI Comedy Generator"
            description="Humor synthesis engine"
            icon={<Laugh size={24} />}
            span="col-span-1"
            tags={[
              { label: 'LLM' },
              { label: 'Claude' },
              { label: 'Humor' },
            ]}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <GradientMesh />
              <div className="relative z-10 text-center">
                <div className="text-2xl mb-2">😄</div>
                <p className="text-xs text-white/80 font-mono">Generating...</p>
              </div>
            </div>
          </ProjectCard>

          {/* Project 4: GitHub Activity - 1x1 */}
          <ProjectCard
            title="GitHub Activity"
            description="Development analytics dashboard"
            icon={<Github size={24} />}
            span="col-span-1"
            tags={[
              { label: 'GitHub API' },
              { label: 'Analytics' },
              { label: 'React' },
            ]}
          >
            <TerminalWindow />
          </ProjectCard>
        </div>
      </motion.div>
    </section>
  );
}
