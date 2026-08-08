import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/utils/motion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Mobile browsers change the viewport height when the URL bar collapses during
 * scroll. By default ScrollTrigger treats that as a resize and refreshes every
 * trigger on the page — mid-scroll, repeatedly. That is the single biggest
 * source of jank and layout shift on a phone, and it is invisible to headless
 * testing, which has no URL bar. This tells ScrollTrigger to ignore
 * height-only viewport changes on touch devices.
 */
ScrollTrigger.config({ ignoreMobileResize: true });

/**
 * Resolved once at boot. Every scroll-driven module reads this instead of
 * querying matchMedia itself, so the whole site agrees on one motion mode.
 */
export const reducedMotion = prefersReducedMotion();

export { gsap, ScrollTrigger };
