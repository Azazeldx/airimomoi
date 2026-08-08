import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/utils/motion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Resolved once at boot. Every scroll-driven module reads this instead of
 * querying matchMedia itself, so the whole site agrees on one motion mode.
 */
export const reducedMotion = prefersReducedMotion();

export { gsap, ScrollTrigger };
