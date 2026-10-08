'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Bio } from '@/data/portfolio';

const navItems = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand Identity & Live Status */}
        <div className="pointer-events-auto">
          <MagneticButton>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-full card-glass hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold group-hover:scale-105 transition-transform">
                AC
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-white tracking-tight leading-none">
                  Abhishek Chaudhary
                </span>
                <span className="text-[10px] text-cyan-400/80 font-mono leading-tight mt-0.5">
                  AI Systems Engineer
                </span>
              </div>
            </a>
          </MagneticButton>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full card-glass border border-white/10 pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          {navItems.map((item) => (
            <MagneticButton key={item.href} strength={0.2}>
              <a
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200"
              >
                {item.label}
              </a>
            </MagneticButton>
          ))}
        </nav>

        {/* Right: Availability Badge & Resume CTA */}
        <div className="flex items-center gap-2.5 pointer-events-auto">
          {/* Status Indicator Pill */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full card-glass text-[11px] font-mono border-emerald-500/20 text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/60">NCR</span>
            <span className="font-semibold text-emerald-400">Open to Roles</span>
          </div>

          {/* Resume CTA */}
          {Bio.resume && (
            <MagneticButton strength={0.25}>
              <a
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500 text-space-black text-xs font-semibold hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <FileText size={13} />
                <span>Resume</span>
                <ArrowUpRight size={13} className="opacity-70" />
              </a>
            </MagneticButton>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full card-glass text-cyan-400 hover:text-white transition-colors"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-auto max-w-sm mt-3 p-4 rounded-2xl card-glass border border-cyan-500/30 pointer-events-auto shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-cyan-400/50 font-mono">→</span>
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Gurugram / NCR Roles
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
