import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'waveform': 'waveform 0.8s ease-in-out infinite',
        'scanline': 'scanline 3s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'gradient-mesh': 'gradient-mesh 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 0.7s steps(40, end)',
        'blink-cursor': 'blink 0.7s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        waveform: {
          '0%, 100%': { height: '20px' },
          '50%': { height: '60px' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow: '0 0 20px rgba(190, 242, 100, 0.5)',
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
          },
        },
        'gradient-mesh': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 49%': { borderColor: 'transparent' },
          '50%, 100%': { borderColor: '#bef264' },
        },
        'glow-pulse': {
          '0%, 100%': {
            textShadow: '0 0 20px rgba(190, 242, 100, 0.5)',
          },
          '50%': {
            textShadow: '0 0 30px rgba(190, 242, 100, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
