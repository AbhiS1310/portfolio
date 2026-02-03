'use client';

import { useEffect, useRef, useState } from 'react';

interface GlowEffectProps {
  color?: string;
  intensity?: number;
}

export function GlowEffect({ color = 'rgba(190, 242, 100, 0.3)', intensity = 1 }: GlowEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
          opacity: 0.4 * intensity,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
