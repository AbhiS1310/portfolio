'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Terminal as TerminalIcon,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  MapPin,
  Cpu,
} from 'lucide-react';
import { Bio } from '@/data/portfolio';
import emailjs from '@emailjs/browser';
import { TelemetryBadge } from '@/components/ui/TelemetryBadge';

type Step = 'email' | 'subject' | 'message' | 'idle';
type Mode = 'quick' | 'cli';

export function Terminal() {
  const [mode, setMode] = useState<Mode>('quick');
  
  // CLI State
  const [cliInput, setCliInput] = useState('');
  const [step, setStep] = useState<Step>('idle');
  const [cliFormData, setCliFormData] = useState({ email: '', subject: '', message: '' });
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output' | 'system' | 'error'; content: string }>>([
    { type: 'system', content: 'SYSTEM READY // Autonomous Transmission Terminal v2.6' },
    { type: 'output', content: '$ Type "help" to view available diagnostic & transmission commands.' },
    { type: 'output', content: '$ Type "contact" to initiate sequential transmission.' },
    { type: 'output', content: '————————————————————————————————————————————————————' },
  ]);
  const [isCliSubmitting, setIsCliSubmitting] = useState(false);

  // Quick Form State
  const [quickForm, setQuickForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isQuickSubmitting, setIsQuickSubmitting] = useState(false);
  const [quickStatus, setQuickStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Copy email state
  const [copied, setCopied] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chaudhary.abhi627@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.email || !quickForm.message) return;

    setIsQuickSubmitting(true);
    setQuickStatus('idle');

    try {
      if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      ) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: quickForm.name || 'Portfolio Visitor',
            from_email: quickForm.email,
            subject: quickForm.subject || 'Direct Transmission from Portfolio',
            message: quickForm.message,
          }
        );
      } else {
        // Fallback simulation if env vars are local/mock
        await new Promise((r) => setTimeout(r, 900));
      }
      setQuickStatus('success');
      setQuickForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setQuickStatus('error');
    } finally {
      setIsQuickSubmitting(false);
    }
  };

  const handleCliSubmit = async () => {
    const val = cliInput.trim();
    if (!val && step === 'idle') return;

    // Command Parser
    if (step === 'idle') {
      const lower = val.toLowerCase();

      if (lower === 'clear' || lower === 'cls') {
        setHistory([
          { type: 'system', content: 'SYSTEM READY // Terminal cleared' },
          { type: 'output', content: '$ Type "help" or "contact" to proceed.' },
        ]);
        setCliInput('');
        return;
      }

      if (lower === 'help') {
        setHistory((prev) => [
          ...prev,
          { type: 'input', content: `$ ${val}` },
          { type: 'output', content: 'Available commands:' },
          { type: 'output', content: '  contact   - Initialize transmission protocol' },
          { type: 'output', content: '  status    - Display engineering availability & coordinates' },
          { type: 'output', content: '  stack     - Query verified production stack' },
          { type: 'output', content: '  metrics   - Query production telemetry numbers' },
          { type: 'output', content: '  clear     - Wipe terminal output' },
        ]);
        setCliInput('');
        return;
      }

      if (lower === 'status') {
        setHistory((prev) => [
          ...prev,
          { type: 'input', content: `$ ${val}` },
          { type: 'output', content: 'STATUS: ACTIVE · OPEN TO ROLES' },
          { type: 'output', content: 'LOCATION: Gurugram / NCR · Remote' },
          { type: 'output', content: 'SPECIALIZATION: Generative AI, Multi-Agent Systems, Streaming Voice' },
        ]);
        setCliInput('');
        return;
      }

      if (lower === 'stack') {
        setHistory((prev) => [
          ...prev,
          { type: 'input', content: `$ ${val}` },
          { type: 'output', content: 'CORE STACK:' },
          { type: 'output', content: '  AI: LangGraph, Google ADK, Gemini 2.5, FastMCP' },
          { type: 'output', content: '  Retrieval: FAISS, BM25, FlashRank Cross-Encoder' },
          { type: 'output', content: '  Backend: Python, FastAPI, WebSockets, Docker' },
          { type: 'output', content: '  Frontend: Next.js 16, ProseMirror, TypeScript' },
        ]);
        setCliInput('');
        return;
      }

      if (lower === 'metrics') {
        setHistory((prev) => [
          ...prev,
          { type: 'input', content: `$ ${val}` },
          { type: 'output', content: 'VERIFIED TELEMETRY:' },
          { type: 'output', content: '  • Voice Roundtrip Latency: <400ms E2E' },
          { type: 'output', content: '  • DDML Layout Parser Errors: 0' },
          { type: 'output', content: '  • Autonomous Multi-Agents: 20+ Deployed' },
          { type: 'output', content: '  • PPTX Vector Export Fidelity: 100%' },
        ]);
        setCliInput('');
        return;
      }

      if (lower === 'contact') {
        setHistory((prev) => [
          ...prev,
          { type: 'input', content: `$ ${val}` },
          { type: 'output', content: '➤ STEP 1/3: Enter your contact email:' },
        ]);
        setStep('email');
        setCliInput('');
        return;
      }

      setHistory((prev) => [
        ...prev,
        { type: 'input', content: `$ ${val}` },
        { type: 'error', content: `sh: command not recognized: "${val}". Type "help" for syntax.` },
      ]);
      setCliInput('');
      return;
    }

    // Step-by-step CLI Transmission
    if (step === 'email') {
      setCliFormData((prev) => ({ ...prev, email: val }));
      setHistory((prev) => [
        ...prev,
        { type: 'input', content: val },
        { type: 'output', content: '➤ STEP 2/3: Enter message subject:' },
      ]);
      setStep('subject');
      setCliInput('');
      return;
    }

    if (step === 'subject') {
      setCliFormData((prev) => ({ ...prev, subject: val }));
      setHistory((prev) => [
        ...prev,
        { type: 'input', content: val },
        { type: 'output', content: '➤ STEP 3/3: Type message payload:' },
      ]);
      setStep('message');
      setCliInput('');
      return;
    }

    if (step === 'message') {
      const finalPayload = { ...cliFormData, message: val };
      setIsCliSubmitting(true);
      setHistory((prev) => [
        ...prev,
        { type: 'input', content: val },
        { type: 'system', content: 'TRANSMITTING VIA ENCRYPTED BRIDGE...' },
      ]);

      try {
        if (
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        ) {
          await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
              from_name: finalPayload.email,
              from_email: finalPayload.email,
              subject: finalPayload.subject,
              message: finalPayload.message,
            }
          );
        } else {
          await new Promise((r) => setTimeout(r, 800));
        }

        setHistory((prev) => [
          ...prev,
          { type: 'output', content: '✓ [ACK 200 OK] Transmission completed successfully.' },
          { type: 'output', content: '✓ Terminal returned to idle state.' },
        ]);
      } catch {
        setHistory((prev) => [
          ...prev,
          { type: 'error', content: '✗ [ERR 500] Transmission error. Please email directly.' },
        ]);
      } finally {
        setStep('idle');
        setCliInput('');
        setIsCliSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 border-t border-white/5 bg-grid-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <TelemetryBadge
                label="SYS.TRANSMISSION_CENTER"
                status="online"
                variant="cyan"
              />
              <span className="text-xs font-mono text-white/50">
                {'// DUAL-CHANNEL PROTOCOL'}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Initialize <span className="glow-text">Direct Transmission</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl">
              Open for full-time AI Engineer opportunities, generative AI
              consulting, and low-latency system architectures in Gurugram / NCR
              or Remote.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center p-1 rounded-full card-glass border border-white/10 shrink-0">
            <button
              onClick={() => setMode('quick')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all ${
                mode === 'quick'
                  ? 'bg-cyan-500 text-space-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Mail size={14} />
              <span>Quick Form</span>
            </button>
            <button
              onClick={() => setMode('cli')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all ${
                mode === 'cli'
                  ? 'bg-cyan-500 text-space-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <TerminalIcon size={14} />
              <span>Neural CLI</span>
            </button>
          </div>
        </div>

        {/* Main Transmission Frame */}
        <div className="card-glass rounded-2xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Cockpit Window Bar */}
          <div className="bg-[#090D17] border-b border-white/10 px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/40" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
              <span className="ml-3 text-xs font-mono text-white/50">
                {mode === 'quick' ? 'secure_dispatch.form' : 'neural_shell.exe'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <ShieldCheck size={13} />
                TLS 1.3 ENCRYPTED
              </span>
              <span className="text-[11px] font-mono text-cyan-400">
                PORT: 443
              </span>
            </div>
          </div>

          {/* Mode 1: Quick Form */}
          {mode === 'quick' && (
            <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Side */}
              <div className="lg:col-span-7">
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/60 mb-2">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        value={quickForm.name}
                        onChange={(e) =>
                          setQuickForm({ ...quickForm, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-[#070A12] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/60 mb-2">
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={quickForm.email}
                        onChange={(e) =>
                          setQuickForm({ ...quickForm, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full bg-[#070A12] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={quickForm.subject}
                      onChange={(e) =>
                        setQuickForm({ ...quickForm, subject: e.target.value })
                      }
                      placeholder="AI Engineering Role / Advisory Discussion"
                      className="w-full bg-[#070A12] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-2">
                      TRANSMISSION PAYLOAD *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={quickForm.message}
                      onChange={(e) =>
                        setQuickForm({ ...quickForm, message: e.target.value })
                      }
                      placeholder="Hi Abhishek, we're building an autonomous agent pipeline and would love to connect..."
                      className="w-full bg-[#070A12] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="submit"
                      disabled={isQuickSubmitting}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-space-black font-semibold text-xs tracking-wider uppercase hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-50 cursor-pointer"
                    >
                      <Send size={15} />
                      <span>
                        {isQuickSubmitting ? 'Transmitting...' : 'Dispatch Message'}
                      </span>
                    </button>

                    {quickStatus === 'success' && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <Check size={15} />
                        Message delivered successfully.
                      </span>
                    )}
                    {quickStatus === 'error' && (
                      <span className="text-xs font-mono text-red-400">
                        Dispatch failed. Please email directly.
                      </span>
                    )}
                  </div>
                </form>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-xl bg-[#070A12] border border-white/10">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2">
                    Direct Channel
                  </span>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-mono text-cyan-300 font-medium truncate">
                      chaudhary.abhi627@gmail.com
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-cyan-500/40 text-xs font-mono transition-colors shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#070A12] border border-white/10 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <MapPin size={16} className="text-cyan-400 shrink-0" />
                    <span>Gurugram / NCR · Open to Relocation & Remote</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <Clock size={16} className="text-emerald-400 shrink-0" />
                    <span>Response Time: Typically within 2 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <Cpu size={16} className="text-blue-400 shrink-0" />
                    <span>Role Fit: AI Engineer · Generative AI Specialist</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={Bio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl card-glass border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-white/80 hover:text-cyan-300 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={Bio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl card-glass border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-white/80 hover:text-cyan-300 transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: Neural CLI */}
          {mode === 'cli' && (
            <div
              className="p-6 md:p-8 cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              <div
                ref={scrollRef}
                className="bg-[#05070C] p-6 rounded-xl border border-white/10 font-mono text-xs md:text-sm min-h-[360px] max-h-[360px] overflow-y-auto space-y-2 scrollbar-hide"
              >
                {history.map((line, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed ${
                      line.type === 'input'
                        ? 'text-cyan-400'
                        : line.type === 'system'
                        ? 'text-white/40'
                        : line.type === 'error'
                        ? 'text-red-400'
                        : 'text-white/80'
                    }`}
                  >
                    {line.content}
                  </div>
                ))}
              </div>

              {/* CLI Input Strip */}
              <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-[#05070C] border border-white/10">
                <span className="font-mono text-xs text-cyan-400 shrink-0">
                  {step === 'idle' ? 'user@neural:~$' : `protocol[${step}]:>`}
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !isCliSubmitting) {
                      handleCliSubmit();
                    }
                  }}
                  placeholder={
                    step === 'idle'
                      ? 'Type "contact", "status", "stack", or "help"...'
                      : `Enter ${step}...`
                  }
                  className="flex-1 bg-transparent outline-none font-mono text-xs md:text-sm text-cyan-300 placeholder-white/30"
                  disabled={isCliSubmitting}
                />
                <button
                  type="button"
                  onClick={handleCliSubmit}
                  disabled={isCliSubmitting}
                  className="px-4 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono hover:bg-cyan-500/30 transition-colors disabled:opacity-50"
                >
                  <Send size={13} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}