export interface Track {
  videoId: string;
  titleEn: string;
  titleJp: string;
  performers: string;
  note: string;
}

/** Video IDs verified against the official Project SEKAI YouTube channel. */
export const music: Track[] = [
  {
    videoId: 'F1v97Y6z0o0',
    titleEn: 'JUMPIN’ OVER !',
    titleJp: 'JUMPIN’ OVER ！',
    performers: 'MORE MORE JUMP! × Hatsune Miku',
    note: 'The group’s own anthem — four voices deciding to clear the bar together.',
  },
  {
    videoId: 'xD3amnjfxac',
    titleEn: 'Happy Synthesizer',
    titleJp: 'ハッピーシンセサイザ',
    performers: 'MORE MORE JUMP!',
    note: 'A classic reborn as an idol number, and one of MMJ’s signature covers.',
  },
  {
    videoId: '3yQWZcYXcgg',
    titleEn: 'Idol Shin’eitai',
    titleJp: 'アイドル新鋭隊',
    performers: 'MORE MORE JUMP! × Hatsune Miku',
    note: '3D music video — the full stage production, glowsticks included.',
  },
  {
    videoId: 'nVg3V4L-LeY',
    titleEn: 'Darling Dance',
    titleJp: 'ダーリンダンス',
    performers: 'MORE MORE JUMP! × Hatsune Miku',
    note: 'Sharp choreography, sharper attitude — very much Airi’s register.',
  },
  {
    videoId: '7bC8xdanmiY',
    titleEn: 'Gimme more!',
    titleJp: 'Gimme more!',
    performers: 'MORE MORE JUMP! × Hatsune Miku',
    note: 'Unapologetically bright. The sound of asking for the whole stage.',
  },
  {
    videoId: 'vdqVZq-6EbI',
    titleEn: 'Kyu-kurarin',
    titleJp: 'きゅうくらりん',
    performers: 'MORE MORE JUMP! × MEIKO',
    note: 'The quiet one — a song about smiling through it, which she knows well.',
  },
];
