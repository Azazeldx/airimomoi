import { gsap, ScrollTrigger, reducedMotion } from './gsap-setup';
import { EASE_REVEAL } from '@/utils/motion';

/**
 * Batched scroll reveals: one ScrollTrigger for the whole page rather than one
 * per element, which keeps the trigger count flat as sections are added.
 */
export function initReveals(): void {
  const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (targets.length === 0) return;

  if (reducedMotion) {
    gsap.set(targets, { clearProps: 'all', opacity: 1, y: 0, scale: 1 });
    return;
  }

  ScrollTrigger.batch(targets, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: EASE_REVEAL,
        stagger: 0.08,
        overwrite: true,
      }),
  });
}
