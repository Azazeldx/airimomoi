export interface ProfileFact {
  label: string;
  value: string;
  icon: string;
}

export const profile = {
  nameEn: 'Airi Momoi',
  nameJp: '桃井 愛莉',
  nameReading: 'ももい あいり',
  unit: 'MORE MORE JUMP!',
  color: '#FFAACC',
  colorName: 'Lovely Pink',
  tagline: 'Wouldn’t it be amazing if we could deliver hope to everyone?',
  quoteSharp: 'Do you really think that you can become an idol just like that!?',
  intro:
    'A third-year student at Miyamasuzaka Girls Academy who once stood on the idol stage, walked away from it, and found her way back — this time on her own terms.',
  bio: [
    'Airi debuted young and burned bright, then stepped away when the industry asked for more than it gave back. She kept the knowledge, the discipline and the sharp eye for what makes a performance land — she just stopped believing it was meant for her.',
    'Then a girl who had never given up on the dream asked for help. Airi said the hard things out loud, the things nobody had told her when she needed to hear them. And somewhere between the honesty and the practice sessions, she started believing again.',
  ],
} as const;

export const profileFacts: ProfileFact[] = [
  { label: 'Birthday', value: 'March 19 · Pisces', icon: 'lucide:cake' },
  { label: 'Height', value: '156 cm (5′1″)', icon: 'lucide:ruler' },
  { label: 'School', value: 'Miyamasuzaka Girls Academy', icon: 'lucide:graduation-cap' },
  { label: 'Club', value: 'Tea Ceremony', icon: 'lucide:leaf' },
  { label: 'Hobbies', value: 'Researching idols · Shopping', icon: 'lucide:sparkles' },
  { label: 'Talents', value: 'Cooking · Looking after kids', icon: 'lucide:chef-hat' },
  { label: 'Favourite food', value: 'Japanese sweets', icon: 'lucide:candy' },
  { label: 'Voice actor', value: 'Furihata Ai', icon: 'lucide:mic-vocal' },
];
