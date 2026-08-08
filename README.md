# Airi Momoi — Tribute Site

A cinematic single-page tribute to **Airi Momoi (桃井愛莉)** of MORE MORE JUMP!, from
*Project SEKAI: Colorful Stage feat. Hatsune Miku*. Built to read like an official character
showcase: layered parallax, scroll-choreographed reveals, and real official artwork throughout.

## Design language

The vocabulary is taken from the official
[Colorful Stage unit pages](https://www.colorfulstage.com/characters/moremorejump/). Four devices do
most of the work:

- **Glass shards** (`GlassShards.astro`) — large translucent angular panes overlapping at different
  tints, the prism-facet layer that sits under everything on the official pages. Two SVG layers of
  polygons over the wash.
- **Geometric confetti** — outlined rings, filled and hollow triangles, and dots scattered across
  every light section (`ConfettiField.astro`). This is the signature Project SEKAI motif, and it is
  what makes a pale page read as energetic rather than as a blog.
- **Ghost outline headings** — each section's label repeated behind its heading in a large outline
  stroke, the way the official page banners do it.
- **Diagonal pastel wash** — mint and sky on one corner, pink on the other (`.u-wash`), instead of
  flat white.
- **Flat character-colour name tags** — the device the official pages use to label members over
  artwork.

Type follows the official treatment too: uppercase, bold, wide tracking (`.u-label-lg` — Inter at
700 with 0.1em tracking sits very close to their Montserrat Bold, and costs nothing extra since
Inter is already loaded). Body copy is slate-purple `#555577`, their tone, which also happens to
read 6.8:1 on the page background.

Two more devices come from [jkt48.com](https://jkt48.com): **gradient headlines**
(`.u-gradient-text`) and **marker-highlight chips** (`.u-marker`) — flat colour blocks set a couple
of degrees off-axis, used for the Story timeline's year labels.

> A note on the gradient: the obvious pastel pink-to-peach ramp bottoms out around **2:1** against
> the page, which fails even the relaxed large-text threshold — and no contrast checker will catch
> it, because none of them can see through `background-clip: text`. The stops in
> `.u-gradient-text` are picked so every point along the ramp clears 3:1. It still reads as a
> pink-to-orange headline; it is just properly saturated rather than pastel.

### Story card hover

The timeline cards use three stacked effects, all CSS:

- **Ken Burns** (`.u-kenburns`) — a slow zoom-and-pan loop that starts on hover. There is no
  official animated art for these cards, and this is the standard way to make a still read as
  motion.
- **Glow bloom** — a conic rainbow behind the card that spreads past its edges on hover. A soft
  single-colour halo is invisible on a pale background; this one saturates instead.
- **Sheen** (`.u-sheen`) — a light sweep across the surface.

**Gallery and Music stay dark.** They are the two media-heavy sections, and artwork and video posters
carry far better against near-black. Those sections also get halftone texture and diagonal edges that
cut into their neighbours — pass `tone="stage"` and `cut="both"` to `Section.astro` and a section
gets the lighting, texture and geometry for free. The other eight sections are light. This is the one
deliberate departure from the reference, which is a short page and does not need the rhythm a long
scroll does.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build
npm run check    # Astro + TypeScript diagnostics
```

Node 18+ required. No environment variables, no backend, no database — the build output is plain
static files.

## Stack

| Tool | Why |
| --- | --- |
| **Astro** | Ships zero JavaScript by default and only hydrates what you ask for. The content is entirely static, so this keeps the JS budget to the animation layer alone. |
| **Tailwind CSS v4** | The design system lives in one `@theme` block in `src/styles/global.css` — colours, fonts, radii, shadows and easings as tokens, no JS config file. |
| **GSAP + ScrollTrigger** | Drives every scroll effect: the pinned hero, parallax layers, batched reveals and the self-drawing timeline spine. |
| **Lenis** | Inertial smooth scrolling, wired into GSAP's ticker so scroll and animation share one RAF loop. |
| **Swiper** | The costume carousel, for its touch handling and built-in keyboard/ARIA support. |
| **astro-icon + Lucide** | Icons inlined as SVG at build time — no icon-font or runtime JS. |
| **Fontsource** | Inter and Noto Sans JP self-hosted, so no third-party font request. |

Deliberately **not** used: React/Vue/Svelte (no component-level state needs a framework runtime
here), Three.js (the depth effects are layered DOM transforms, at a fraction of the cost), and a
second animation library (GSAP covers both scroll choreography and micro-interaction).

## Structure

```
src/
  components/       Reusable pieces — Navbar, Footer, Timeline, Carousel,
    ui/             Lightbox, AudioPlayer, VideoEmbed, ParallaxLayer, PetalField
  sections/         The ten page sections, one file each
  layouts/          BaseLayout — SEO head, fonts, script bootstrap
  data/             All content as typed TS. Edit these, not the markup.
  scripts/          gsap-setup, lenis-setup, parallax, reveal, petals, audio, video
  utils/            motion.ts — reduced-motion detection and shared easings
  styles/           global.css — the entire design system
  assets/           Images and the subset font. In src/, not public/, so the
                    Astro pipeline can convert and resize them at build time.
public/assets/      Voice-line audio only (see CREDITS.md — not bundled)
```

**Content lives in `src/data/`.** Every section renders from a typed array, so adding a card,
costume, trivia item or track means editing one object — never the markup. Data files import
their own images, so an entry carries its artwork with it.

## Animation system

Three shared mechanisms cover the whole page, rather than bespoke code per section:

- **Reveals** — any element tagged `data-reveal` is picked up by a single batched `ScrollTrigger`
  and fades/rises into place. One trigger for ~75 elements.
- **Marquee** — pure CSS. The track holds two identical copies and translates exactly `-50%`, so the
  loop is seamless without measuring anything at runtime.
- **Confetti** — one parallax hook per *field*, with the per-shape drift as a CSS keyframe. Wiring
  each shape into ScrollTrigger individually cost ~120 ms of blocking time across the page; this is
  ~20 ms.
- **Glass shards** — three depth layers. The broad base is static under scroll (a full-width pane
  moving is imperceptible); the mid layer trails at `1.4` and the foreground *leads* at `-2.6`, so
  they visibly slide against each other as you scroll.

Two things about `GlassShards.astro` that look like arbitrary numbers but are not: it scales with
`slice`, never `none` (stretching squashes the angles into vertical bars, and the angles *are* the
effect), and it is capped in height with a fade-out at the bottom rather than covering the section.
Sections here run to several thousand pixels; cover-scaling across that magnifies a single shard
into a flat wash.

The per-shard idle drift needs `transform-box: fill-box` (in `.u-shard`). Without it an SVG
polygon's transform origin is the *canvas* corner, not its own bounding box, and every shard swings
around the far edge of the section instead of rotating in place.
- **Parallax** — any element with `data-speed` moves as its nearest `[data-parallax-scene]`
  ancestor crosses the viewport. Positive values trail the scroll, negative lead it. Layers are
  **grouped by scene**, so a section costs one ScrollTrigger driving all its layers via quickSetters,
  not one trigger per layer. That rewrite took blocking time from ~110 ms to ~15 ms and made the
  extra shard layers affordable.
- **Ambient idle motion** — the background is never fully static. Shards drift and breathe, the
  stage lighting pools swell on opposite phases, confetti floats, petals fall. All of it is CSS
  keyframes with staggered `animation-delay`, so it costs no main-thread work at all.

## Mobile performance

Scrolling on a mid-range phone once ran at **17.7 fps with 41 janked frames**, while Lighthouse
still reported 94 — Lighthouse measures *load*, not scroll smoothness, so it never saw this. The fix
was five changes, each verified by re-measuring frame timing under a Pixel 5 profile with 4× CPU
throttling. It now holds **55 fps with zero janked frames**, and the moving background is intact.

If you extend this site, these are the constraints that matter — every one of them was a real
regression, not a precaution:

1. **`will-change` is not a free hint.** Each one promotes a compositor layer, and the ambient
   animation classes had put it on **246** elements. Mobile GPUs run out of layer budget long before
   that. It is down to 9, and belongs only on short-lived one-shot animations.
2. **Animate groups, not shapes.** Every shard polygon animating individually meant ~135 concurrent
   animations. The shards are now grouped into three `<g>` per section and the group is animated —
   identical motion, a fifth of the cost.
3. **A 130px blur is not a soft glow, it is a rasterisation bill.** All of them are now
   `radial-gradient` (`.u-glow`), which looks the same and costs nothing.
4. **`backdrop-filter` re-reads everything painted behind it, every frame.** With ~25 glass cards
   scrolling past it alone halved the frame rate. Touch devices get an opaque fill instead; the
   navbar especially, since it is on screen for every frame of every scroll.
5. **Smooth-scroll libraries make phones feel worse, not better.** Touch scrolling is already
   hardware-accelerated and off the main thread — routing it through a JS RAF loop drags it back on
   and fights the browser's own inertia. Lenis is desktop-only now.

The mobile checks live in the same profile: `(hover: hover) and (pointer: fine)` gates the expensive
treatments, so the desktop experience is unchanged.
- **Pointer depth** — elements with `data-depth` drift subtly toward the cursor. Desktop pointers
  only; it's noise on touch.

The hero owns the page's only pinned scroll beat, so the effect stays a moment rather than a tic.

## Accessibility

- `prefers-reduced-motion` is checked once at boot in `scripts/gsap-setup.ts`. When set: Lenis is
  never instantiated (native scroll stays), all parallax/pin/scrub is skipped, the petal canvas is
  removed from the DOM, and every looping ambient animation — marquees, confetti, shard drift, the
  lighting blooms and the Ken Burns pan — is stopped outright rather than merely shortened, since
  none of them ever end on their own. Reveals resolve to their final state.
- Semantic landmarks, one `<main>`, every section labelled by its own heading, skip-to-content link.
- Lightbox uses a native `<dialog>` — real focus trapping, Escape to close, arrow keys to navigate,
  focus returned to the triggering thumbnail on close.
- The carousel is fully keyboard-operable with ARIA messages via Swiper's a11y module.
- Colour is never the only signal: character colours render as a swatch dot beside readable text
  rather than as tinted type.

## Performance

Lighthouse on the production build: **Performance 95 · Accessibility 100 · Best Practices 100 ·
SEO 100**, with CLS 0 and TBT ~20 ms.

Three things did most of the work, and are worth knowing before you change them:

- **Images go through `astro:assets`.** They live in `src/assets/`, not `public/`, so every one is
  converted to WebP and emitted at several widths with a `sizes` hint. Moving an image to `public/`
  opts it out of all of that — a 523 KB PNG stayed 523 KB and LCP was 9.7 s.
- **The Japanese font is a hand-cut subset** (see below). The full Noto Sans JP family adds ~103 KB
  of render-blocking `@font-face` CSS; the combined `japanese` subset is one ~1 MB file. Neither is
  acceptable for roughly 100 characters of decorative text.
- **The hero entrance animates transform only, never opacity.** The character *is* the LCP element,
  so fading her in from zero would delay LCP by the length of the fade.

Also: music videos use a facade — a local poster frame until clicked, then a `youtube-nocookie`
iframe, so the page makes **no third-party request** unless you press play. The petal canvas caps
its particle count by viewport width and stops rendering when scrolled out of view or when the tab
is hidden.

## Regenerating the Japanese subset

`src/assets/fonts/noto-sans-jp-subset-300.woff2` contains only the Japanese characters that
appeared in `src/` when it was generated. **If you add new Japanese text, regenerate it** — new
glyphs will silently fall back to a system font otherwise.

```bash
# 1. Collect every Japanese character currently used in src/
node -e "
const fs=require('fs'),path=require('path');let t='';
(function w(d){for(const f of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,f.name);
 if(f.isDirectory())w(p);else if(/\.(astro|ts)$/.test(f.name))t+=fs.readFileSync(p,'utf8');}})('src');
const jp=[...new Set(t.match(/[぀-ヿ㐀-䶿一-鿿＀-￯　-〿]/g)||[])].sort();
fs.writeFileSync('.jp-glyphs.txt',jp.join(''));console.log(jp.length,'characters');"

# 2. Fetch the matching subset, then replace the @font-face unicode-range in
#    src/styles/global.css with the one this returns.
ENC=$(node -e "console.log(encodeURIComponent(require('fs').readFileSync('.jp-glyphs.txt','utf8')))")
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
curl -s -A "$UA" "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&text=${ENC}&display=swap"
curl -sL -A "$UA" -o src/assets/fonts/noto-sans-jp-subset-300.woff2 "<the url from that CSS>"
rm .jp-glyphs.txt
```

## Attribution

Fan project. All artwork and characters belong to SEGA / Colorful Palette / Crypton Future Media.
See [CREDITS.md](CREDITS.md) for per-asset sources, the API recipe used to fetch them, and
instructions for adding the voice-line audio (not bundled).
