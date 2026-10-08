'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  gsap.config({
    autoSleep: 60,
    nullTargetWarn: false,
  });
}

export { gsap, ScrollTrigger, useGSAP };

