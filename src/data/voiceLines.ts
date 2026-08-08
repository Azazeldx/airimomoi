export interface VoiceLine {
  slug: string;
  jp: string;
  romaji: string;
  en: string;
  context: string;
}

/**
 * Audio is not bundled — game voice clips are extracted assets and are not
 * redistributed here. Drop matching MP3s into `public/assets/audio/voice-lines/<slug>.mp3`
 * and each player picks them up automatically. See CREDITS.md.
 */
export const voiceLines: VoiceLine[] = [
  {
    slug: 'deliver-hope',
    jp: 'みんなに希望を届けられたら、素敵だと思わない？',
    romaji: 'Minna ni kibou wo todoketara, suteki da to omowanai?',
    en: 'Wouldn’t it be amazing if we could deliver hope to everyone?',
    context: 'Her defining line — the whole group’s thesis, phrased as a question.',
  },
  {
    slug: 'become-an-idol',
    jp: 'そんな簡単にアイドルになれると思ってるの！？',
    romaji: 'Sonna kantan ni aidoru ni nareru to omotteru no!?',
    en: 'Do you really think that you can become an idol just like that!?',
    context: 'The first thing she ever said to Minori. She was not being cruel.',
  },
  {
    slug: 'greeting',
    jp: 'こんにちは、桃井愛莉です！',
    romaji: 'Konnichiwa, Momoi Airi desu!',
    en: 'Hello, I’m Airi Momoi!',
    context: 'The polished greeting — years of training, still automatic.',
  },
  {
    slug: 'thats-unfair',
    jp: 'そんなのずるいってば！',
    romaji: 'Sonna no zurui tteba!',
    en: 'That’s so unfair!',
    context: 'Roughly once per rehearsal, at least once with feeling.',
  },
  {
    slug: 'sweets',
    jp: '和菓子、大好きなんだ〜',
    romaji: 'Wagashi, daisuki nanda~',
    en: 'I really love Japanese sweets~',
    context: 'The one topic that gets her guard down instantly.',
  },
  {
    slug: 'lets-go',
    jp: 'いくよ、みんな！',
    romaji: 'Iku yo, minna!',
    en: 'Let’s go, everyone!',
    context: 'Stage call. The voice she reserves for the moment the lights come up.',
  },
];
