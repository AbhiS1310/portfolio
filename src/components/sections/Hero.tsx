'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap, useGSAP } from '@/lib/gsap';
import { Bio } from '@/data/portfolio';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { TelemetryBadge } from '@/components/ui/TelemetryBadge';
import { WaveformSimulator } from '@/components/ui/WaveformSimulator';
import {
  Github,
  Linkedin,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const telemetryRef = useRef<HTMLDivElement>(null);

  // GSAP kinetic entrance and telemetry count-up
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: -20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-title-line',
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          '.hero-subtext',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          '.hero-telemetry-item',
          {
            scale: 0.9,
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-waveform',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          '.hero-cta',
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
          },
          '-=0.5'
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 md:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Telemetry Pill */}
        <div className="hero-badge mb-6 flex flex-wrap justify-center gap-2">
          <TelemetryBadge
            label="SYSTEM"
            value="AI Systems & GenAI Pipelines"
            status="optimal"
            icon={<Cpu size={12} />}
          />
          <TelemetryBadge
            label="STATUS"
            value="Production Active @ Square Yards"
            status="active"
            icon={<ShieldCheck size={12} />}
          />
        </div>

        {/* Main Kinetic Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 font-display"
        >
          <span className="block hero-title-line text-white/95">
            Architecting
          </span>
          <span className="block hero-title-line bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent glow-text">
            Autonomous AI
          </span>
          <span className="block hero-title-line text-white/80 text-3xl sm:text-5xl md:text-6xl font-extrabold mt-1">
            Systems & Low-Latency RAG
          </span>
        </h1>

        {/* Roles List */}
        <div className="hero-subtext flex flex-wrap justify-center gap-2.5 mb-6">
          {Bio.roles.map((role, idx) => (
            <span
              key={idx}
              className="text-xs md:text-sm px-3 py-1 rounded-full card-glass font-mono text-cyan-300/90 border-cyan-500/20"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Bio Narrative */}
        <p className="hero-subtext max-w-3xl text-sm md:text-base text-white/70 leading-relaxed font-sans mb-10">
          AI Engineer with 2+ years of production experience engineering multi-agent ecosystems,
          recursive DDML layout engines, and real-time voice intelligence pipelines.
          Specialized in <strong className="text-white font-medium">LangGraph, FastAPI, FastMCP, and vector retrieval</strong> delivering
          deterministic AI experiences with sub-millisecond precision.
        </p>

        {/* Telemetry HUD Grid (Verified Metrics) */}
        <div
          ref={telemetryRef}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 text-left"
        >
          <div className="hero-telemetry-item p-4 rounded-xl card-glass border-cyan-500/20 hover:border-cyan-500/50 transition-all group">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
              <span className="opacity-70">VOICE PIPELINE</span>
              <Zap size={13} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl md:text-3xl font-bold font-display text-white mb-0.5">
              &lt;400ms
            </div>
            <p className="text-[11px] text-white/50 font-mono">
              WebSockets + Cartesia Latency
            </p>
          </div>

          <div className="hero-telemetry-item p-4 rounded-xl card-glass border-emerald-500/20 hover:border-emerald-500/50 transition-all group">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
              <span className="opacity-70">DDML ENGINE</span>
              <ShieldCheck size={13} className="text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl md:text-3xl font-bold font-display text-white mb-0.5">
              0 Errors
            </div>
            <p className="text-[11px] text-white/50 font-mono">
              100% Layout Schema Compliance
            </p>
          </div>

          <div className="hero-telemetry-item p-4 rounded-xl card-glass border-blue-500/20 hover:border-blue-500/50 transition-all group">
            <div className="flex items-center justify-between text-xs font-mono text-blue-400 mb-2">
              <span className="opacity-70">SWARM SCALE</span>
              <Layers size={13} className="text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl md:text-3xl font-bold font-display text-white mb-0.5">
              20+ Agents
            </div>
            <p className="text-[11px] text-white/50 font-mono">
              Google ADK Autonomous Travel
            </p>
          </div>

          <div className="hero-telemetry-item p-4 rounded-xl card-glass border-purple-500/20 hover:border-purple-500/50 transition-all group">
            <div className="flex items-center justify-between text-xs font-mono text-purple-400 mb-2">
              <span className="opacity-70">PPTX VECTOR</span>
              <Cpu size={13} className="text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl md:text-3xl font-bold font-display text-white mb-0.5">
              100% Fidelity
            </div>
            <p className="text-[11px] text-white/50 font-mono">
              OpenXML Slide Export Pipeline
            </p>
          </div>
        </div>

        {/* Live Interactive Waveform Simulator */}
        <div className="hero-waveform w-full max-w-2xl mb-10">
          <WaveformSimulator />
        </div>

        {/* CTAs & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <MagneticButton strength={0.3} className="hero-cta">
            <a href="#architecture" className="cyber-button flex items-center gap-2 text-sm">
              <span>Inspect Systems Architecture</span>
              <span>→</span>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.3} className="hero-cta">
            <a href="#projects" className="cyber-button-outline flex items-center gap-2 text-sm">
              <span>Explore Projects Bento</span>
            </a>
          </MagneticButton>

          <div className="hero-cta flex items-center gap-2 ml-2">
            {Bio.github && (
              <MagneticButton strength={0.25}>
                <a
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl card-glass text-white/70 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </a>
              </MagneticButton>
            )}

            {Bio.linkedin && (
              <MagneticButton strength={0.25}>
                <a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl card-glass text-white/70 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </MagneticButton>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#architecture"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/40 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1 text-xs font-mono mt-4"
        >
          <span>EXPLORE ARCHITECTURE</span>
          <ChevronDown size={14} />
        </motion.a>
      </div>
    </section>
  );
}
