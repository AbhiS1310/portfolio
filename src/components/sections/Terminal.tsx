'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { Bio } from '@/data/portfolio';
import emailjs from '@emailjs/browser';

// Define terminal steps for sequential input collection
type Step = 'email' | 'subject' | 'message' | 'idle';

export function Terminal() {
  const [input, setInput] = useState('');
  const [step, setStep] = useState<Step>('idle');
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' });
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; content: string }>>([
    { type: 'output', content: '$ Welcome to the Neural Interface Terminal' },
    { type: 'output', content: '$ Type "contact" or use the button below to transmit' },
    { type: 'output', content: '$ ——————————————————————————————————' },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  // Auto-scroll to bottom on new history entries
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = async () => {
    const val = input.trim();
    if (!val && step === 'idle') return;

    // CLEAR / CLS Command Logic
    if (val === 'clear' || val === 'cls') {
      setHistory([
        { type: 'output', content: '$ Welcome to the Neural Interface Terminal' },
        { type: 'output', content: '$ Type "contact" to transmit a message' },
        { type: 'output', content: '$ ——————————————————————————————————' },
      ]);
      setInput('');
      setStep('idle');
      return;
    }

    // Handle initial trigger
    if (step === 'idle') {
      if (val === 'contact') {
        setHistory(prev => [...prev, { type: 'input', content: `$ user@neural:~$ contact` }]);
        setStep('email');
        setHistory(prev => [...prev, { type: 'output', content: '➤ Enter your email address:' }]);
      } else {
        setHistory(prev => [...prev, { type: 'input', content: `$ user@neural:~$ ${val}` }, { type: 'output', content: `sh: command not found: ${val}. Try "contact" or "clear".` }]);
      }
      setInput('');
      return;
    }

    // Step-by-step data collection
    if (step === 'email') {
      setFormData(prev => ({ ...prev, email: val }));
      setHistory(prev => [...prev, { type: 'input', content: val }, { type: 'output', content: '➤ Enter message subject:' }]);
      setStep('subject');
      setInput('');
      return;
    }

    if (step === 'subject') {
      setFormData(prev => ({ ...prev, subject: val }));
      setHistory(prev => [...prev, { type: 'input', content: val }, { type: 'output', content: '➤ Type your message:' }]);
      setStep('message');
      setInput('');
      return;
    }

    if (step === 'message') {
      const finalData = { ...formData, message: val };
      setIsSubmitting(true);
      setHistory(prev => [
        ...prev, 
        { type: 'input', content: val },
        { type: 'output', content: '$ Processing transmission via Neural Bridge...' }
      ]);

      try {
        const response = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
          {
            from_name: 'Terminal User',
            from_email: finalData.email,
            subject: finalData.subject,
            message: finalData.message
          }
        );

        if (response.status === 200) {
          setHistory(prev => [
            ...prev,
            { type: 'output', content: '✓ [SUCCESS] Message transmitted successfully.' },
            { type: 'output', content: '✓ Connection closed. Terminal ready.' },
          ]);
        }
      } catch (error) {
        setHistory(prev => [...prev, { type: 'output', content: '✗ [ERROR] Transmission failed. Please try again.' }]);
      } finally {
        setStep('idle');
        setInput('');
        setIsSubmitting(false);
      }
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
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Initialize Contact</span>
          </h2>
          <p className="text-white/60 text-lg">Sequential terminal transmission protocol.</p>
        </div>

        <motion.div
          className="glassmorphism rounded-2xl overflow-hidden border border-cyber-lime/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-black/40 border-b border-cyber-lime/20 px-6 py-4 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-white/60 text-sm font-mono ml-auto">neural_contact.exe</span>
          </div>

          <div 
            ref={scrollRef}
            className="bg-black/20 p-6 md:p-8 font-mono text-sm min-h-96 max-h-96 overflow-y-auto scrollbar-hide"
          >
            <div className="space-y-2 mb-4">
              {history.map((line, i) => (
                <motion.div
                  key={i}
                  className={`${line.type === 'input' ? 'text-cyber-lime' : 'text-white/70'}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {line.content}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-cyber-lime">
              <span>$ {step === 'idle' ? 'user@neural:~$' : 'input:>'}</span>
              <input
                type="text"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={step === 'idle' ? 'Type "contact"...' : `Enter ${step}...`}
                className="flex-1 bg-transparent outline-none font-mono text-cyber-lime placeholder-white/30"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="bg-black/40 border-t border-cyber-lime/20 px-6 py-4 flex items-center justify-between">
            <span className="text-white/60 text-xs font-mono">
              {isSubmitting ? '⏳ TRANSMITTING...' : `✓ PROTOCOL: ${step.toUpperCase()}`}
            </span>
            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-4 py-2 bg-cyber-lime/10 border border-cyber-lime/30 rounded text-cyber-lime hover:bg-cyber-lime/20 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={16} />
              <span className="text-sm font-mono">{step === 'idle' ? 'Initialize' : 'Confirm'}</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: 'Email', value: 'chaudhary.abhi627@gmail.com', href: 'mailto:chaudhary.abhi627@gmail.com' },
            { label: 'GitHub', value: '@AbhiS1310', href: Bio.github },
            { label: 'LinkedIn', value: '@abhis1310', href: Bio.linkedin },
          ].map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism rounded-xl p-6 text-center hover:border-cyber-lime/60 transition-colors"
              whileHover={{ y: -4 }}
            >
              <p className="text-white/60 text-sm mb-2">{contact.label}</p>
              <p className="text-cyber-lime font-mono text-sm">{contact.value}</p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}