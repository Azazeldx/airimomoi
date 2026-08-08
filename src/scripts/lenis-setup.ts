import Lenis from 'lenis';
import { gsap, ScrollTrigger, reducedMotion } from './gsap-setup';

let lenis: Lenis | null = null;

export function initSmoothScroll(): Lenis | null {
  if (reducedMotion) return null;

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.6,
  });

  document.documentElement.classList.add('lenis-active');

  // Drive Lenis from GSAP's ticker so scroll and animation share one RAF loop.
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.on('scroll', ScrollTrigger.update);

  return lenis;
}

export function scrollToId(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;

  if (lenis) {
    lenis.scrollTo(target, { offset: -72, duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: 'auto', block: 'start' });
  }
}
