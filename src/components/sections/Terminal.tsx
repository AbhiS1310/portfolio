'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Bio } from '@/data/portfolio';
import emailjs from '@emailjs/browser';

export function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; content: string }>>([
    { type: 'output', content: '$ Welcome to the Neural Interface Terminal' },
    { type: 'output', content: '$ Type your message and hit Enter to transmit' },
    { type: 'output', content: '$ ——————————————————————————————————' },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS on component mount
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setIsSubmitting(true);
    setHistory((prev) => [
      ...prev,
      { type: 'input', content: `$ user@neural:~$ ${input}` },
      { type: 'output', content: '$ Processing transmission...' },
    ]);

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: 'Portfolio Visitor',
          from_email: 'portfolio@contact.com',
          to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
          message: input,
          reply_to: 'noreply@portfolio.com',
        }
      );

      if (response.status === 200) {
        setHistory((prev) => [
          ...prev,
          { type: 'output', content: '✓ Message transmitted successfully!' },
          { type: 'output', content: '✓ Will respond within 24 hours.' },
        ]);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setHistory((prev) => [
        ...prev,
        { type: 'output', content: '✗ Transmission failed. Please try again.' },
      ]);
    } finally {
      setInput('');
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isSubmitting) {
      handleSubmit();
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Initialize Contact</span>
          </h2>
          <p className="text-white/60 text-lg">Connect with me for collaborations and inquiries.</p>
        </div>

        {/* Terminal Window */}
        <motion.div
          className="glassmorphism rounded-2xl overflow-hidden border border-cyber-lime/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal Header */}
          <div className="bg-black/40 border-b border-cyber-lime/20 px-6 py-4 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-white/60 text-sm font-mono ml-auto">neural_contact.exe</span>
          </div>

          {/* Terminal Content */}
          <div className="bg-black/20 p-6 md:p-8 font-mono text-sm min-h-96 max-h-96 overflow-y-auto">
            {/* History */}
            <div className="space-y-2 mb-4">
              {history.map((line, i) => (
                <motion.div
                  key={i}
                  className={`${
                    line.type === 'input' ? 'text-cyber-lime' : 'text-white/70'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {line.content}
                </motion.div>
              ))}
            </div>

            {/* Input Line */}
            <div className="flex items-center gap-2 text-cyber-lime">
              <span>$ user@neural:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your message..."
                className="flex-1 bg-transparent outline-none font-mono text-cyber-lime placeholder-white/30"
                disabled={isSubmitting}
              />
              {input && (
                <motion.div
                  animate={{ opacity: [0.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-2 h-4 bg-cyber-lime"
                />
              )}
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="bg-black/40 border-t border-cyber-lime/20 px-6 py-4 flex items-center justify-between">
            <span className="text-white/60 text-xs">
              {isSubmitting ? '⏳ Processing...' : '✓ Ready'}
            </span>
            <motion.button
              onClick={handleSubmit}
              disabled={!input.trim() || isSubmitting}
              className="flex items-center gap-2 px-4 py-2 bg-cyber-lime/10 border border-cyber-lime/30 rounded text-cyber-lime hover:bg-cyber-lime/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={16} />
              <span className="text-sm font-mono">Send</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: 'Email', value: 'abhishekchauhan1310@gmail.com', href: 'mailto:abhishekchauhan1310@gmail.com' },
            { label: 'GitHub', value: '@AbhiS1310', href: Bio.github },
            { label: 'LinkedIn', value: '@AbhiS1310', href: Bio.linkedin },
          ].map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label !== 'Email' ? '_blank' : undefined}
              rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="glassmorphism rounded-xl p-6 text-center hover:border-cyber-lime/60 transition-colors"
              whileHover={{ y: -4 }}
            >
              <p className="text-white/60 text-sm mb-2">{contact.label}</p>
              <p className="text-cyber-lime font-mono">{contact.value}</p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
