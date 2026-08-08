import Lenis from 'lenis';
import { gsap, ScrollTrigger, reducedMotion } from './gsap-setup';

let lenis: Lenis | null = null;

/** Touch scrolling is already hardware-accelerated and runs off the main
 *  thread. Routing it through a JS RAF loop takes it back onto the main thread
 *  and fights the browser's own inertia — it reads as lag on a phone, not as
 *  smoothness. Desktop wheel scrolling has no such native easing, so Lenis
 *  earns its place there only. */
function prefersNativeScroll(): boolean {
  return window.matchMedia('(hover: none), (pointer: coarse)').matches;
}

export function initSmoothScroll(): Lenis | null {
  if (reducedMotion || prefersNativeScroll()) return null;

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  document.documentElement.classList.add('lenis-active');

  // Drive Lenis from GSAP's ticker so scroll and animation share one RAF loop.
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.on('scroll', ScrollTrigger.update);

  return lenis;
}

/** Height of the fixed navbar, which anchors must clear. */
const NAV_OFFSET = 72;

export function scrollToId(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;

  if (lenis) {
    lenis.scrollTo(target, { offset: -NAV_OFFSET, duration: 1.4 });
    return;
  }

  // Native path (touch, or reduced motion). `scrollIntoView` cannot offset for
  // the fixed navbar, so scroll to a computed position instead — otherwise
  // every section lands with its heading tucked under the bar.
  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
}
