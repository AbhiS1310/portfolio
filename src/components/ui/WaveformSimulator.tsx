'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

export function WaveformSimulator() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [latency, setLatency] = useState(384);
  const [step, setStep] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const pipelineSteps = [
    { label: 'Raw PCM Audio In', source: 'WebSockets 16kHz', duration: '40ms' },
    { label: 'AssemblyAI STT', source: 'Streaming Transcribe', duration: '120ms' },
    { label: 'LangGraph State Agent', source: 'Tool Calling & Slots', duration: '110ms' },
    { label: 'Cartesia Voice TTS', source: 'Sonic Latency Audio', duration: '114ms' },
  ];

  // Animate waveform bars on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barCount = 36;
      const barWidth = 4;
      const gap = 3;
      const totalWidth = barCount * (barWidth + gap);
      const startX = (canvas.width - totalWidth) / 2;

      phase += isPlaying ? 0.15 : 0.03;

      for (let i = 0; i < barCount; i++) {
        const heightMultiplier = isPlaying
          ? Math.sin(phase + i * 0.35) * 0.45 + 0.55
          : Math.sin(phase + i * 0.2) * 0.15 + 0.2;

        const maxBarHeight = canvas.height * 0.75;
        const currentHeight = Math.max(4, maxBarHeight * heightMultiplier);
        const x = startX + i * (barWidth + gap);
        const y = (canvas.height - currentHeight) / 2;

        // Gradient from Cyan to Electric Cobalt
        const gradient = ctx.createLinearGradient(0, y, 0, y + currentHeight);
        gradient.addColorStop(0, '#00f0ff');
        gradient.addColorStop(1, isPlaying ? '#3b82f6' : 'rgba(0, 240, 255, 0.3)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, currentHeight, 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  // Handle simulation flow
  const handleTriggerSimulation = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setStep(1);

    // Randomize slight latency around 370-395ms
    setLatency(Math.floor(370 + Math.random() * 25));

    const stepInterval = setInterval(() => {
      setStep((prev) => {
        if (prev >= 4) {
          clearInterval(stepInterval);
          setTimeout(() => setIsPlaying(false), 800);
          return 4;
        }
        return prev + 1;
      });
    }, 280);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setStep(0);
  };

  return (
    <div className="card-glass rounded-2xl p-6 relative overflow-hidden border border-cyan-500/20 shadow-[0_8px_32px_rgba(0,240,255,0.08)]">
      {/* Background glowing ambient light */}
      <div className="absolute -right-20 -top-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Volume2 size={16} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-display">
              Streaming Audio Pipeline Telemetry
            </h4>
            <p className="text-xs text-white/50 font-mono">
              WebSockets ──▶ AssemblyAI ──▶ LangGraph ──▶ Cartesia
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
            TOTAL: {isPlaying ? `${latency}ms` : '<400ms'}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            STREAM ACTIVE
          </span>
        </div>
      </div>

      {/* Canvas Waveform */}
      <div className="py-2 flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={360}
          height={64}
          className="w-full max-w-sm h-16 cursor-pointer"
          onClick={handleTriggerSimulation}
          title="Click to simulate live streaming audio"
        />
      </div>

      {/* Pipeline Stage Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-4">
        {pipelineSteps.map((s, idx) => {
          const isActive = step >= idx + 1;
          return (
            <div
              key={idx}
              className={`p-2.5 rounded-lg border text-left transition-all duration-300 ${
                isActive
                  ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300'
                  : 'bg-white/5 border-white/5 text-white/40'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className="opacity-70">STEP 0{idx + 1}</span>
                <span>{s.duration}</span>
              </div>
              <p className="text-xs font-semibold text-white/90 truncate">
                {s.label}
              </p>
              <p className="text-[10px] text-white/50 truncate font-mono">
                {s.source}
              </p>
            </div>
          );
        })}
      </div>

      {/* Control Actions */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-white/60 font-mono flex items-center gap-1.5">
          {step === 4 ? (
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 size={13} /> End-to-end intent completed in {latency}ms
            </span>
          ) : isPlaying ? (
            <span className="text-cyan-400 flex items-center gap-1">
              <Sparkles size={13} className="animate-spin" /> Processing speech chunks...
            </span>
          ) : (
            'Interactive Simulator: test the <400ms voice roundtrip'
          )}
        </p>

        <div className="flex gap-2">
          {step > 0 && (
            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              title="Reset Simulator"
            >
              <RotateCcw size={14} />
            </button>
          )}
          <button
            onClick={handleTriggerSimulation}
            disabled={isPlaying}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              isPlaying
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 cursor-not-allowed'
                : 'bg-cyan-500 text-space-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
            }`}
          >
            <Play size={12} fill="currentColor" />
            {isPlaying ? 'Streaming...' : 'Simulate Voice'}
          </button>
        </div>
      </div>
    </div>
  );
}

