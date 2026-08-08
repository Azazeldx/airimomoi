import { reducedMotion } from './gsap-setup';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  drift: number;
  spin: number;
  angle: number;
  alpha: number;
  hue: number;
}

const PALETTE = ['#F8BBD9', '#FFD8E8', '#FFAACC', '#FFFFFF'];

/**
 * Canvas sakura drift. Deliberately not WebGL — a few dozen 2D petals cost far
 * less battery than a Three.js scene and read identically at this scale.
 */
export function initPetals(canvas: HTMLCanvasElement): void {
  if (reducedMotion) {
    canvas.remove();
    return;
  }

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let petals: Petal[] = [];
  let frame = 0;
  let running = true;

  const petalCount = () => (window.innerWidth < 768 ? 18 : window.innerWidth < 1280 ? 30 : 44);

  function makePetal(seeded: boolean): Petal {
    return {
      x: Math.random() * width,
      y: seeded ? Math.random() * height : -30,
      size: 6 + Math.random() * 10,
      speedY: 0.25 + Math.random() * 0.6,
      drift: (Math.random() - 0.5) * 0.7,
      spin: (Math.random() - 0.5) * 0.02,
      angle: Math.random() * Math.PI * 2,
      alpha: 0.35 + Math.random() * 0.45,
      hue: Math.floor(Math.random() * PALETTE.length),
    };
  }

  function resize(): void {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    petals = Array.from({ length: petalCount() }, () => makePetal(true));
  }

  function drawPetal(p: Petal): void {
    ctx!.save();
    ctx!.translate(p.x, p.y);
    ctx!.rotate(p.angle);
    ctx!.globalAlpha = p.alpha;
    ctx!.fillStyle = PALETTE[p.hue]!;
    ctx!.beginPath();
    // Teardrop petal: one bezier out, one back.
    ctx!.moveTo(0, 0);
    ctx!.bezierCurveTo(p.size * 0.5, -p.size * 0.4, p.size, p.size * 0.2, 0, p.size);
    ctx!.bezierCurveTo(-p.size, p.size * 0.2, -p.size * 0.5, -p.size * 0.4, 0, 0);
    ctx!.fill();
    ctx!.restore();
  }

  function tick(): void {
    if (!running) return;
    frame = requestAnimationFrame(tick);
    ctx!.clearRect(0, 0, width, height);

    for (const p of petals) {
      p.y += p.speedY;
      p.x += p.drift + Math.sin(p.y * 0.008) * 0.4;
      p.angle += p.spin;

      if (p.y > height + 40) Object.assign(p, makePetal(false));
      if (p.x < -40) p.x = width + 30;
      if (p.x > width + 40) p.x = -30;

      drawPetal(p);
    }
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Stop rendering entirely when the field scrolls out of view.
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        if (!running) {
          running = true;
          tick();
        }
      } else {
        running = false;
        cancelAnimationFrame(frame);
      }
    },
    { threshold: 0 },
  );
  observer.observe(canvas);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      running = false;
      cancelAnimationFrame(frame);
    } else if (!running) {
      running = true;
      tick();
    }
  });

  tick();
}
