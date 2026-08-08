/** Swaps a video facade for a real iframe on first click. */
export function initVideoFacades(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-video-play]').forEach((button) => {
    button.addEventListener(
      'click',
      () => {
        const id = button.dataset.videoId;
        const title = button.dataset.videoTitle ?? 'Music video';
        if (!id) return;

        const frame = document.createElement('iframe');
        frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
        frame.title = `${title} — official music video`;
        frame.allow =
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        frame.allowFullscreen = true;
        frame.className =
          'aspect-video w-full rounded-[var(--radius-card)] shadow-[var(--shadow-glass)]';
        frame.loading = 'lazy';

        button.replaceWith(frame);
        frame.focus();
      },
      { once: true },
    );
  });
}
