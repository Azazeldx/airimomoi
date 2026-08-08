import iconMinori from '@/assets/images/mmj/icon-minori.png';
import iconHaruka from '@/assets/images/mmj/icon-haruka.png';
import iconAiri from '@/assets/images/mmj/icon-airi.png';
import iconShizuku from '@/assets/images/mmj/icon-shizuku.png';

export interface Member {
  nameEn: string;
  nameJp: string;
  role: string;
  color: string;
  colorName: string;
  icon: ImageMetadata;
  isAiri?: boolean;
}

export const group = {
  name: 'MORE MORE JUMP!',
  nameJp: 'モアモアジャンプ！',
  romaji: 'Moa Moa Janpu!',
  abbreviation: 'MMJ',
  color: '#88DD44',
  profileQuote:
    'A unique idol group formed by one girl with a dream, and three other girls who had given up on theirs.',
  siteBlurb:
    'A girl who wants to become an idol and three girls who faced the harsh reality of being an idol. Will the optimism overcome the obstacles? Will they reach this dream together?',
  sekai:
    'The Stage SEKAI — a world of stages lit by countless glowsticks, born from four girls’ determination. Beyond it lies a garden where warm rain coaxes buds into the Flowers of Hope.',
} as const;

export const members: Member[] = [
  {
    nameEn: 'Minori Hanasato',
    nameJp: '花里 みのり',
    role: 'The one who never gave up',
    color: '#FFCCAA',
    colorName: 'Apricot Orange',
    icon: iconMinori,
  },
  {
    nameEn: 'Haruka Kiritani',
    nameJp: '桐谷 遥',
    role: 'The one who retired at the top',
    color: '#99CCFF',
    colorName: 'Baby Blue',
    icon: iconHaruka,
  },
  {
    nameEn: 'Airi Momoi',
    nameJp: '桃井 愛莉',
    role: 'The one who tells the truth',
    color: '#FFAACC',
    colorName: 'Lovely Pink',
    icon: iconAiri,
    isAiri: true,
  },
  {
    nameEn: 'Shizuku Hinomori',
    nameJp: '日野森 雫',
    role: 'The one who stayed gentle',
    color: '#99EEDD',
    colorName: 'Mint Blue',
    icon: iconShizuku,
  },
];
