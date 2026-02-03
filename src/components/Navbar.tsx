'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4 md:mx-auto md:w-fit"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glassmorphism rounded-full px-6 py-3 md:px-8 md:py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold glow-text"
            whileHover={{ scale: 1.05 }}
          >
            ∞
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-cyber-lime transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-lime group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-cyber-lime"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 mt-2 glassmorphism rounded-2xl p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-cyber-lime transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
