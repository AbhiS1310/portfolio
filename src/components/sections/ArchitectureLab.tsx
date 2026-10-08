'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Zap,
  Compass,
  Code2,
  CheckCircle2,
  Cpu,
} from 'lucide-react';

interface ArchitectureTab {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tag: string;
  nodes: {
    title: string;
    description: string;
    tech: string;
    metric?: string;
  }[];
  codeSnippet: string;
  specs: { label: string; value: string }[];
}

const architectures: ArchitectureTab[] = [
  {
    id: 'designdeck',
    title: 'DesignDeck: Recursive DDML Slide Engine',
    subtitle: 'High-throughput LLM document generation with zero parser errors',
    icon: <Layers size={18} />,
    tag: 'SQUARE YARDS · PRODUCTION',
    nodes: [
      {
        title: '1. Archetype Batch Prompting',
        description: 'Transforms unstructured content into discrete semantic slide archetypes with Langfuse tracing.',
        tech: 'Gemini 2.5 / OpenAI',
        metric: '15-20 Decks in <60s',
      },
      {
        title: '2. DDML XML Grammar Parser',
        description: 'Custom deterministic layout grammar eliminating LLM hallucinations & structural defects.',
        tech: 'Deterministic XML DSL',
        metric: '0 Parser Errors',
      },
      {
        title: '3. ProseMirror Canvas Editor',
        description: 'Next.js block-document canvas with real-time text overset scaling & interactive layout reflow.',
        tech: 'Next.js & ProseMirror',
        metric: 'Live Overset Scaling',
      },
      {
        title: '4. OpenXML / PPTX Vector Engine',
        description: 'Compiles DOM coordinate spaces directly into PowerPoint drawingML shapes with zero-inset margins.',
        tech: 'OpenXML / Python PPTX',
        metric: '100% Vector Fidelity',
      },
    ],
    codeSnippet: `<slide archetype="split-hero">
  <container direction="horizontal" gap="24">
    <block width="60%" align="left">
      <title level="1" font="Display">Autonomous Real Estate Feasibility</title>
      <body size="base">Auditing 16 directional zones with polygon solvers.</body>
    </block>
    <media width="40%" src="blueprint-overlay.png" vector="preserve"/>
  </container>
</slide>`,
    specs: [
      { label: 'Parser Reliability', value: '100% Schema Valid' },
      { label: 'Generation Speed', value: '<60 Seconds' },
      { label: 'Export Fidelity', value: '100% Vector Native' },
      { label: 'DOM Validation', value: 'Headless Puppeteer' },
    ],
  },
  {
    id: 'voice-agent',
    title: 'Real-Time Streaming Voice Scheduling Agent',
    subtitle: 'Sub-400ms end-to-end voice roundtrip with stateful LangGraph orchestration',
    icon: <Zap size={18} />,
    tag: 'LANGGRAPH · WEBSOCKETS',
    nodes: [
      {
        title: '1. WebSockets PCM Streaming',
        description: 'Raw audio stream ingestion from browser audio context with dynamic jitter buffering.',
        tech: 'WebSockets 16kHz PCM',
        metric: '<40ms Ingestion',
      },
      {
        title: '2. AssemblyAI Real-Time STT',
        description: 'Streaming acoustic-to-text tokenization with automated speech endpointing.',
        tech: 'AssemblyAI Streaming',
        metric: '95% Transcription Acc',
      },
      {
        title: '3. Stateful LangGraph Machine',
        description: 'Stateful conversational graph maintaining 5+ multi-turn workflow states with tool calling.',
        tech: 'LangGraph & Groq LLM',
        metric: '95% Intent Resolution',
      },
      {
        title: '4. Cartesia Sonic Voice TTS',
        description: 'Ultra-low latency audio synthesis streaming audio chunks back via WebSocket protocol.',
        tech: 'Cartesia API & PCM',
        metric: '<380ms Total Latency',
      },
    ],
    codeSnippet: `class VoiceAgentState(TypedDict):
    session_id: str
    workflow_state: Literal["idle", "gathering_slots", "resolving_conflict", "booked"]
    attendee_email: Optional[str]
    target_time: Optional[datetime]

# LangGraph Multi-Turn Conditional Edge
def route_scheduling_intent(state: VoiceAgentState) -> str:
    if state["workflow_state"] == "resolving_conflict":
        return "trigger_calendar_conflict_resolver"
    return "execute_google_calendar_booking"`,
    specs: [
      { label: 'Roundtrip Latency', value: '<400ms Streaming' },
      { label: 'Workflow States', value: '5+ Multi-turn' },
      { label: 'Calendar Tool', value: 'Google Calendar API' },
      { label: 'Audio Buffer', value: 'Raw 16kHz PCM' },
    ],
  },
  {
    id: 'vaastu-ai',
    title: 'Spatial Intelligence & Floorplan-Agents',
    subtitle: 'Computational geometry & 7-agent hierarchical floorplan optimization',
    icon: <Compass size={18} />,
    tag: 'SPATIAL AI · GEOMETRY SOLVERS',
    nodes: [
      {
        title: '1. Architectural Parsing',
        description: 'Extracts structural coordinates, load-bearing walls, and entry points from floor plans.',
        tech: 'Gemini 2.5 Vision',
        metric: 'Normalized Polygons',
      },
      {
        title: '2. Polygon Spatial Geometry',
        description: 'Evaluates 16 directional zones using Shapely polygon intersection and area overlap mathematics.',
        tech: 'Computational Geometry',
        metric: '16 Spatial Zones in <3s',
      },
      {
        title: '3. Remedial Simulation Engine',
        description: 'Dynamically reweights room zoning and simulates layout shifts to boost spatial compliance.',
        tech: 'Optimization Solver',
        metric: 'Score Boost 35 → 65+',
      },
      {
        title: '4. Floorplan-Agents Hierarchy',
        description: '7-agent coordination structure with constraint satisfaction generating optimal architectural layouts.',
        tech: 'Multi-Agent Hierarchy',
        metric: '≥75 Compliance Score',
      },
    ],
    codeSnippet: `# Spatial Intersection & Zone Score Calculation
def audit_16_spatial_zones(plan_polygon: Polygon, center_point: Point) -> ZoneAuditReport:
    zones = compute_directional_sectors(center_point, num_sectors=16)
    compliance_scores = {}
    for zone_name, sector in zones.items():
        overlap_area = plan_polygon.intersection(sector).area
        compliance_scores[zone_name] = evaluate_zone_rules(zone_name, overlap_area)
    return compile_remedial_recommendations(compliance_scores)`,
    specs: [
      { label: 'Spatial Evaluation', value: '<3s Execution' },
      { label: 'Directional Sectors', value: '16 Compass Zones' },
      { label: 'Agent Hierarchy', value: '7 Coordinated Agents' },
      { label: 'Compliance Score', value: 'Boost 35 to 65+' },
    ],
  },
];

export function ArchitectureLab() {
  const [activeTab, setActiveTab] = useState<string>('designdeck');

  const currentArch =
    architectures.find((a) => a.id === activeTab) || architectures[0];

  return (
    <section id="architecture" className="py-24 px-4 md:px-8 relative bg-void">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full card-glass text-xs font-mono text-cyan-400 border-cyan-500/20 mb-4">
            <Cpu size={13} />
            <span>INTERACTIVE SYSTEM LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-4">
            Engineered AI Architecture Pipelines
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl">
            Inspect the underlying system designs, agent hierarchies, and streaming protocols
            powering my production AI solutions. Click each system to explore its execution pipeline.
          </p>
        </div>

        {/* System Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8 border-b border-white/10 pb-4">
          {architectures.map((arch) => {
            const isSelected = activeTab === arch.id;
            return (
              <button
                key={arch.id}
                onClick={() => setActiveTab(arch.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs md:text-sm font-mono transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-space-black font-semibold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                    : 'card-glass text-white/70 hover:text-white hover:border-cyan-500/30'
                }`}
              >
                <span>{arch.icon}</span>
                <span>{arch.title.split(':')[0]}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-sans uppercase ${
                    isSelected
                      ? 'bg-space-black/20 text-space-black'
                      : 'bg-white/5 text-cyan-400'
                  }`}
                >
                  {arch.tag.split('·')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Architecture Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentArch.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left Column: Visual Pipeline Flow (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="card-glass rounded-2xl p-6 border-cyan-500/20">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">
                      {currentArch.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white mt-1">
                      {currentArch.title}
                    </h3>
                    <p className="text-xs text-white/60 font-sans mt-1">
                      {currentArch.subtitle}
                    </p>
                  </div>
                </div>

                {/* Pipeline Flow Stages */}
                <div className="space-y-3 relative">
                  {currentArch.nodes.map((node, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between gap-4 mb-1.5">
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {node.title}
                        </h4>
                        {node.metric && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 whitespace-nowrap">
                            {node.metric}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed font-sans mb-2">
                        {node.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40">
                        <span className="text-cyan-400 font-bold">STACK:</span>
                        <span>{node.tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Code Specification & Metrics (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Telemetry Specs Grid */}
              <div className="card-glass rounded-2xl p-5 border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                  <CheckCircle2 size={14} />
                  <span>SYSTEM BENCHMARKS & VERIFIED METRICS</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {currentArch.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <div className="text-[10px] font-mono text-white/50 mb-1">
                        {spec.label}
                      </div>
                      <div className="text-sm font-bold font-mono text-cyan-300">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="card-glass rounded-2xl p-5 border-white/10 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-white/50 mb-3 pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Code2 size={14} />
                    <span>GRAMMAR / PIPELINE CODE</span>
                  </div>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-white/40">
                    SOURCE SPEC
                  </span>
                </div>
                <pre className="text-[11px] font-mono text-white/80 bg-black/40 p-3.5 rounded-xl overflow-x-auto flex-1 leading-relaxed border border-white/5">
                  <code>{currentArch.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
