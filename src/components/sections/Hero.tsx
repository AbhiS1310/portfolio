'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GlowEffect } from '@/components/ui/GlowEffect';
import { Bio } from '@/data/portfolio';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {displayedText.length < text.length && (
        <span className="inline-block w-1 h-8 ml-2 bg-cyber-lime animate-blink-cursor" />
      )}
    </span>
  );
};

export function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <GlowEffect intensity={0.8} />

      <motion.div
        ref={ref}
        className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name Badge */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="px-4 py-2 rounded-full bg-cyber-lime/10 border border-cyber-lime/30 text-cyber-lime text-sm font-mono">
            Welcome to {Bio.name.split(' ')[0]}'s Portfolio
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
          style={{ y }}
        >
          <span className="block glow-text-lg mb-6">
            {Bio.name}
          </span>
          <span className="block bg-gradient-to-r from-cyber-lime via-cyan-400 to-cyber-lime bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl">
            <TypewriterText
            text={"Specializing in Real-time Voice Pipelines & Multimodal RAG"}
            delay={500}
          />
          </span>
        </motion.h2>

        {/* Roles */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {Bio.roles.map((role, idx) => (
            <span
              key={idx}
              className="text-sm md:text-base px-3 py-1 bg-white/5 border border-cyber-lime/20 rounded-lg text-cyber-lime/80 font-mono"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Subheadline with Typewriter */}
        {/* <motion.div
          className="text-base md:text-lg text-white/80 font-light mb-2 h-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <TypewriterText
            text={"Specializing in Real-time Voice Pipelines & Multimodal RAG"}
            delay={500}
          />
        </motion.div> */}

        {/* Bio Description */}
        <motion.p
          className="text-white/70 text-base md:text-lg max-w-4xl mx-auto mb-3 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {Bio.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="cyber-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects →
          </motion.a>
          <motion.a
            href="#contact"
            className="cyber-button-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {Bio.github && (
            <motion.a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 border border-cyber-lime/20 text-cyber-lime hover:bg-cyber-lime/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub"
            >
              <Github size={20} />
            </motion.a>
          )}
          {Bio.linkedin && (
            <motion.a
              href={Bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 border border-cyber-lime/20 text-cyber-lime hover:bg-cyber-lime/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
          )}
          {Bio.resume && (
            <motion.a
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 border border-cyber-lime/20 text-cyber-lime hover:bg-cyber-lime/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Resume"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyber-lime rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-cyber-lime rounded-full animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
