'use client';

import { ReactNode, useRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  span?: string;
  onClick?: () => void;
}

export const BentoCard = motion.create(function BentoCardComponent({
  children,
  className,
  title,
  description,
  span = 'col-span-1',
  onClick,
  ...motionProps
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'card-glass rounded-2xl p-6 overflow-hidden relative group cursor-pointer transition-all duration-300 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_12px_40px_rgba(0,240,255,0.12)]',
        span,
        className
      )}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
      {...motionProps}
    >
      {/* Top subtle glow highlight */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {title && (
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 font-display">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-xs text-white/50 font-mono mb-4">{description}</p>
        )}
        {children}
      </div>
    </motion.div>
  );
});

BentoCard.displayName = 'BentoCard';
