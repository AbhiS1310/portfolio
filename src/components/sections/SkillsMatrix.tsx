'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Database,
  Cpu,
  Server,
  Layout,
  Search,
  CheckCircle2,
  Sparkles,
  Zap,
  Terminal,
  Layers,
} from 'lucide-react';
import { skills as skillCategories } from '@/data/portfolio';
import { TelemetryBadge } from '@/components/ui/TelemetryBadge';

interface SkillMetadata {
  level: 'Core Production' | 'Advanced' | 'Architect';
  projectRef?: string;
}

const skillMetadataMap: Record<string, SkillMetadata> = {
  // Generative AI & Agents
  LangGraph: { level: 'Architect', projectRef: 'Voice Agent & Square Yards' },
  LangChain: { level: 'Core Production', projectRef: 'Multi-Agent Workflows' },
  'Multi-Agent Systems': { level: 'Architect', projectRef: '20+ Mondee Agents' },
  'Google ADK': { level: 'Core Production', projectRef: 'DigiQuanta Travel Engine' },
  'OpenAI API': { level: 'Core Production', projectRef: 'Production Deployments' },
  'Gemini 2.5': { level: 'Architect', projectRef: 'Vaastu Spatial AI & Gemini' },
  'FastMCP / MCP': { level: 'Core Production', projectRef: 'FastMCP (<150ms latency)' },
  'Prompt Engineering': { level: 'Architect', projectRef: 'Deterministic DDML Prompting' },
  'DDML / XML DSL': { level: 'Architect', projectRef: 'DesignDeck (0 Parser Errors)' },

  // RAG & NLP
  'RAG Pipelines': { level: 'Architect', projectRef: 'TechCorp RAG (100K+ docs)' },
  FAISS: { level: 'Core Production', projectRef: 'Hierarchical IVF-PQ Index' },
  Weaviate: { level: 'Core Production', projectRef: 'Vector Store & Filtering' },
  'Sentence Transformers': { level: 'Core Production', projectRef: 'Semantic Embeddings' },
  'Semantic Search': { level: 'Core Production', projectRef: 'Hybrid BM25 + Dense' },
  'Cross-Encoder Reranking': { level: 'Architect', projectRef: 'FlashRank (<200ms latency)' },
  'Hugging Face': { level: 'Core Production', projectRef: 'Model Fine-Tuning' },
  'Tokenization & Embeddings': { level: 'Core Production', projectRef: 'Chunking & Alignment' },

  // Machine Learning & CV
  PyTorch: { level: 'Core Production', projectRef: 'Model Training & Inference' },
  LayoutLMv3: { level: 'Architect', projectRef: 'Doc QA (98% Accuracy)' },
  PaddleOCR: { level: 'Core Production', projectRef: 'Medical Data Extraction' },
  YOLO: { level: 'Core Production', projectRef: 'Signature Detection (95% Prec)' },
  'Scikit-learn': { level: 'Core Production', projectRef: 'Predictive Classifiers' },
  XGBoost: { level: 'Core Production', projectRef: 'Risk Scoring Models' },
  'Computer Vision': { level: 'Core Production', projectRef: 'Multimodal Processing' },

  // Backend & Systems
  Python: { level: 'Architect', projectRef: 'Core Backend & AI Systems' },
  FastAPI: { level: 'Architect', projectRef: 'High-throughput Microservices' },
  'Node.js': { level: 'Core Production', projectRef: 'Event-driven Services' },
  WebSockets: { level: 'Architect', projectRef: 'Real-time Audio PCM Stream' },
  PostgreSQL: { level: 'Core Production', projectRef: 'Relational DB & Schemas' },
  MongoDB: { level: 'Core Production', projectRef: 'Document Store & Indexing' },
  Docker: { level: 'Core Production', projectRef: 'Containerized Microservices' },
  'REST APIs': { level: 'Core Production', projectRef: 'Scalable Endpoints (1K+/min)' },

  // Frontend & Tooling
  'Next.js': { level: 'Architect', projectRef: 'App Router & SSR Platforms' },
  React: { level: 'Core Production', projectRef: 'Full-stack UI Engineering' },
  TypeScript: { level: 'Core Production', projectRef: 'Type-safe Workflows' },
  TailwindCSS: { level: 'Core Production', projectRef: 'High-performance Styling' },
  ProseMirror: { level: 'Architect', projectRef: 'DesignDeck Canvas Editor' },
  Langfuse: { level: 'Core Production', projectRef: 'LLM Observability Tracing' },
  Puppeteer: { level: 'Core Production', projectRef: 'Headless DOM Verification' },
  'Git & GitHub': { level: 'Core Production', projectRef: 'CI/CD & Version Control' },
  'AWS / GCP': { level: 'Core Production', projectRef: 'Cloud Compute & Storage' },
};

const categoryIcons: Record<string, React.ReactNode> = {
  'Generative AI & Agents': <Brain className="text-cyan-400" size={20} />,
  'RAG & NLP': <Database className="text-emerald-400" size={20} />,
  'Machine Learning & CV': <Cpu className="text-blue-400" size={20} />,
  'Backend & Systems': <Server className="text-purple-400" size={20} />,
  'Frontend & Tooling': <Layout className="text-amber-400" size={20} />,
};

const corePillars = [
  {
    title: 'Agentic Orchestration',
    tech: 'LangGraph · Google ADK · FastMCP',
    metric: '20+ Agents in Production',
    icon: <Sparkles className="text-cyan-400" size={18} />,
    glowColor: 'rgba(0, 240, 255, 0.15)',
    borderColor: 'rgba(0, 240, 255, 0.3)',
  },
  {
    title: 'Ultra-Low Latency Streaming',
    tech: 'WebSockets · AssemblyAI · Cartesia',
    metric: '<400ms Voice E2E Roundtrip',
    icon: <Zap className="text-emerald-400" size={18} />,
    glowColor: 'rgba(16, 185, 129, 0.15)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  {
    title: 'Hybrid Knowledge Retrieval',
    tech: 'FAISS · Cross-Encoder Rerank · Weaviate',
    metric: '<200ms Latency · 100K+ Chunks',
    icon: <Database className="text-blue-400" size={18} />,
    glowColor: 'rgba(59, 130, 246, 0.15)',
    borderColor: 'rgba(59, 130, 246, 0.3)',
  },
  {
    title: 'Deterministic Generative DSLs',
    tech: 'DDML Parser · ProseMirror · OpenXML',
    metric: '0 Parser Errors · 100% PPTX Fidelity',
    icon: <Layers className="text-purple-400" size={18} />,
    glowColor: 'rgba(168, 85, 247, 0.15)',
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
];

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        const filteredSkills = cat.skills.filter((skill) => {
          const matchesQuery = skill.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
          const matchesCategory =
            selectedCategory === 'all' || selectedCategory === cat.title;
          return matchesQuery && matchesCategory;
        });
        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 border-t border-white/5 bg-grid-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <TelemetryBadge
                label="SYS.CAPABILITY_MATRIX"
                status="online"
                variant="cyan"
              />
              <span className="text-xs font-mono text-white/50">
                {'// 5 DOMAINS · 40+ TECHNOLOGIES'}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Technical Matrix &{' '}
              <span className="glow-text">Production Stack</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
              Battle-tested competencies across production multi-agent systems,
              real-time voice streaming architectures, and low-latency vector
              search.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[260px] md:min-w-[320px]">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. LangGraph, FastAPI, PyTorch)..."
              className="w-full bg-[#0D121F]/80 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-white/50 hover:text-white"
              >
                ESC
              </button>
            )}
          </div>
        </div>

        {/* Core Pillars Telemetry Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {corePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="card-glass rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 group"
              style={{
                borderColor: pillar.borderColor,
                backgroundColor: 'rgba(13, 18, 31, 0.75)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  PILLAR 0{idx + 1}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-white/60 font-mono mb-3 line-clamp-1">
                {pillar.tech}
              </p>
              <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                  {pillar.metric}
                </span>
                <CheckCircle2 size={13} className="text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all shrink-0 flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-space-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                : 'card-glass text-white/70 hover:text-white hover:border-cyan-500/30'
            }`}
          >
            <span>All Domains</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 font-sans">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </span>
          </button>
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.title;
            return (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-cyan-500 text-space-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'card-glass text-white/70 hover:text-white hover:border-cyan-500/30'
                }`}
              >
                <span>{cat.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 font-sans">
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Categorized Grid */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="card-glass rounded-2xl p-12 text-center"
              >
                <Terminal size={32} className="mx-auto text-white/40 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">
                  No matching technologies found
                </h4>
                <p className="text-xs font-mono text-white/60 mb-4">
                  No skills matched query: &quot;{searchQuery}&quot;
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono hover:bg-cyan-500/30 transition-colors"
                >
                  Reset Filter
                </button>
              </motion.div>
            ) : (
              filteredCategories.map((cat, catIdx) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ delay: catIdx * 0.05, duration: 0.4 }}
                  className="card-glass rounded-2xl p-6 md:p-8 border border-white/10"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        {categoryIcons[cat.title] || (
                          <Sparkles size={18} className="text-cyan-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                          {cat.title}
                        </h3>
                        <p className="text-[11px] font-mono text-white/50">
                          {cat.skills.length} verified technologies
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skill Badges Flow */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {cat.skills.map((skill) => {
                      const meta = skillMetadataMap[skill.name] || {
                        level: 'Core Production',
                      };
                      return (
                        <div
                          key={skill.name}
                          className="group relative p-3.5 rounded-xl bg-[#090D17]/80 border border-white/5 hover:border-cyan-500/40 hover:bg-[#0F1626] transition-all duration-200"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                            <span
                              className={`text-[9px] font-mono px-2 py-0.5 rounded-full shrink-0 border ${
                                meta.level === 'Architect'
                                  ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                                  : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                              }`}
                            >
                              {meta.level}
                            </span>
                          </div>
                          {meta.projectRef && (
                            <p className="text-[11px] font-mono text-white/50 group-hover:text-white/70 transition-colors line-clamp-1">
                              ↳ {meta.projectRef}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
