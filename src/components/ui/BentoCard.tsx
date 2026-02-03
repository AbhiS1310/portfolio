'use client';

import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  span?: 'col-span-1' | 'col-span-2' | 'col-span-3' | 'col-span-4' | 'row-span-1' | 'row-span-2';
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
  return (
    <motion.div
      className={cn(
        'glassmorphism rounded-2xl p-6 overflow-hidden relative group cursor-pointer',
        span,
        className
      )}
      whileHover={{
        y: -10,
        boxShadow: '0 0 30px rgba(190, 242, 100, 0.2)',
      }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
      onClick={onClick}
      {...motionProps}
    >
      {/* Animated border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-lime/20 via-transparent to-cyber-lime/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {title && <h3 className="text-lg font-bold text-cyber-lime mb-2">{title}</h3>}
        {description && <p className="text-xs text-white/60 mb-4">{description}</p>}
        {children}
      </div>
    </motion.div>
  );
});

BentoCard.displayName = 'BentoCard';
