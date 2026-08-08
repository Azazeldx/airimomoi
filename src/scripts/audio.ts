/**
 * Wires every voice-line card. Audio files are optional — when one is missing
 * the card degrades to a labelled, disabled state instead of erroring.
 */
export function initAudioCards(): void {
  const cards = document.querySelectorAll<HTMLElement>('[data-audio-card]');
  const players: HTMLAudioElement[] = [];

  cards.forEach((card) => {
    const audio = card.querySelector<HTMLAudioElement>('[data-audio-el]');
    const toggle = card.querySelector<HTMLButtonElement>('[data-audio-toggle]');
    const track = card.querySelector<HTMLElement>('[data-audio-track]');
    const fill = card.querySelector<HTMLElement>('[data-audio-fill]');
    const status = card.querySelector<HTMLElement>('[data-audio-status]');
    const iconPlay = card.querySelector<HTMLElement>('[data-icon-play]');
    const iconPause = card.querySelector<HTMLElement>('[data-icon-pause]');

    if (!audio || !toggle || !fill || !status || !track) return;
    players.push(audio);

    const setPlayingUI = (playing: boolean) => {
      iconPlay?.classList.toggle('hidden', playing);
      iconPause?.classList.toggle('hidden', !playing);
    };

    audio.addEventListener('loadedmetadata', () => {
      status.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      if (!audio.duration) return;
      const ratio = audio.currentTime / audio.duration;
      fill.style.width = `${ratio * 100}%`;
      track.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
    });

    audio.addEventListener('ended', () => {
      setPlayingUI(false);
      fill.style.width = '0%';
      track.setAttribute('aria-valuenow', '0');
    });

    audio.addEventListener('error', () => {
      toggle.disabled = true;
      status.textContent = 'Audio file not installed — see CREDITS.md';
    });

    toggle.addEventListener('click', () => {
      if (audio.paused) {
        // Only one line plays at a time.
        players.forEach((other) => {
          if (other !== audio && !other.paused) other.pause();
        });
        void audio.play().then(() => setPlayingUI(true)).catch(() => {
          toggle.disabled = true;
          status.textContent = 'Audio file not installed — see CREDITS.md';
        });
      } else {
        audio.pause();
        setPlayingUI(false);
      }
    });

    // Seek by clicking anywhere on the progress track.
    track.addEventListener('click', (event) => {
      if (!audio.duration) return;
      const rect = track.getBoundingClientRect();
      audio.currentTime = ((event.clientX - rect.left) / rect.width) * audio.duration;
    });
  });
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds)) return '';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}
