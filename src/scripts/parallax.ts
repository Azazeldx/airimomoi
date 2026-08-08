import { gsap, ScrollTrigger, reducedMotion } from './gsap-setup';

/**
 * Generic parallax driver. Any element carrying `data-speed` is moved on the
 * Y axis as its nearest `[data-parallax-scene]` ancestor scrolls through the
 * viewport. Positive speeds trail the scroll (background), negative speeds
 * lead it (foreground) — one controller instead of per-section bespoke code.
 *
 * Layers are grouped by scene so each section costs ONE ScrollTrigger driving
 * all of its layers, rather than one per layer. With three layers per section
 * across nine sections the per-layer version cost ~5ms of blocking time each;
 * this is a third of the triggers and uses quickSetters instead of tweens.
 */
export function initParallax(): void {
  if (reducedMotion) return;

  const scenes = new Map<HTMLElement, { set: (value: number) => void; speed: number }[]>();

  gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((layer) => {
    const speed = Number.parseFloat(layer.dataset.speed ?? '0');
    if (!speed) return;

    const scene = layer.closest<HTMLElement>('[data-parallax-scene]') ?? layer.parentElement;
    if (!scene) return;

    const group = scenes.get(scene) ?? [];
    group.push({ set: gsap.quickSetter(layer, 'yPercent') as (v: number) => void, speed });
    scenes.set(scene, group);
  });

  scenes.forEach((layers, scene) => {
    // Seed the start position so nothing jumps on the first scroll event.
    layers.forEach(({ set, speed }) => set(-speed * 8));

    ScrollTrigger.create({
      trigger: scene,
      start: 'top bottom',
      end: 'bottom top',
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // progress 0..1 -> -1..1
        const t = self.progress * 2 - 1;
        layers.forEach(({ set, speed }) => set(t * speed * 8));
      },
    });
  });

  ScrollTrigger.refresh();
}

/** Subtle pointer-driven depth. Desktop pointers only — noise on touch. */
export function initPointerDepth(): void {
  if (reducedMotion) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const layers = gsap.utils.toArray<HTMLElement>('[data-depth]');
  if (layers.length === 0) return;

  const setters = layers.map((layer) => ({
    x: gsap.quickTo(layer, 'x', { duration: 0.9, ease: 'power3.out' }),
    y: gsap.quickTo(layer, 'y', { duration: 0.9, ease: 'power3.out' }),
    depth: Number.parseFloat(layer.dataset.depth ?? '0'),
  }));

  window.addEventListener(
    'pointermove',
    (event) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;

      setters.forEach(({ x, y, depth }) => {
        x(nx * depth * 40);
        y(ny * depth * 26);
      });
    },
    { passive: true },
  );
}
