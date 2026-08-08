const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion(): boolean {
  return window.matchMedia(REDUCED_QUERY).matches;
}

/** Re-run `handler` whenever the user's motion preference flips. */
export function onMotionPreferenceChange(handler: (reduced: boolean) => void): void {
  window.matchMedia(REDUCED_QUERY).addEventListener('change', (event) => handler(event.matches));
}

export const EASE_REVEAL = 'expo.out';

export const REVEAL_FROM = {
  opacity: 0,
  y: 26,
  scale: 0.985,
} as const;

export const REVEAL_TO = {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 1,
  ease: EASE_REVEAL,
} as const;
