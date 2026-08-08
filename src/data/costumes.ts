import beautySalon from '@/assets/images/cards/beauty-salon.png';
import beautySalonTrained from '@/assets/images/cards/beauty-salon-trained.png';
import brandNewStyle from '@/assets/images/cards/brand-new-style.png';
import mysteriousHeartWitch from '@/assets/images/cards/mysterious-heart-witch.png';
import introToTeaCeremony from '@/assets/images/cards/intro-to-tea-ceremony.png';
import sweetMomentTrained from '@/assets/images/cards/sweet-moment-trained.png';
import cookingStreamPrep from '@/assets/images/cards/cooking-stream-prep.png';
import ora2Promo from '@/assets/images/airi/ora2-promo.png';

export interface Costume {
  name: string;
  subtitle: string;
  description: string;
  image: ImageMetadata;
  alt: string;
  accent: string;
}

export const costumes: Costume[] = [
  {
    name: 'Airi’s Beauty Salon',
    subtitle: 'Event outfit',
    description:
      'Salon chic with a stylist’s eye — the outfit of someone who has opinions about your hair and is right about them.',
    image: beautySalon,
    alt: 'Airi Momoi in her Beauty Salon event outfit',
    accent: '#FFAACC',
  },
  {
    name: 'Airi’s Beauty Salon',
    subtitle: 'Trained artwork',
    description:
      'The trained illustration — same salon, warmer light, and a smile she has stopped rationing.',
    image: beautySalonTrained,
    alt: 'Airi Momoi in her Beauty Salon outfit, trained card artwork',
    accent: '#FF7DAF',
  },
  {
    name: 'Brand New Style',
    subtitle: 'Unit costume',
    description:
      'MORE MORE JUMP!’s reinvention — the look of a group that stopped asking permission.',
    image: brandNewStyle,
    alt: 'Airi Momoi in the Brand New Style unit costume',
    accent: '#88DD44',
  },
  {
    name: 'Mysterious Heart Witch',
    subtitle: 'Halloween',
    description: 'Pointed hat, pointed remarks. Seasonally appropriate on both counts.',
    image: mysteriousHeartWitch,
    alt: 'Airi Momoi in her Halloween witch costume',
    accent: '#B76E79',
  },
  {
    name: 'Intro To Tea Ceremony',
    subtitle: 'Kimono',
    description:
      'Tea Ceremony club formalwear — precise, unhurried, and the one setting where she never rushes.',
    image: introToTeaCeremony,
    alt: 'Airi Momoi wearing a kimono for tea ceremony',
    accent: '#D94A80',
  },
  {
    name: 'Sweet Moment',
    subtitle: 'Trained artwork',
    description: 'Soft palette, softer expression — Airi with her guard genuinely down.',
    image: sweetMomentTrained,
    alt: 'Airi Momoi in the Sweet Moment trained card artwork',
    accent: '#F8BBD9',
  },
  {
    name: 'Cooking Stream Prep',
    subtitle: 'Casual',
    description: 'Apron on, camera not rolling yet. The competence is not for show.',
    image: cookingStreamPrep,
    alt: 'Airi Momoi preparing for a cooking stream',
    accent: '#FF7DAF',
  },
  {
    name: 'Ora2 Collaboration',
    subtitle: 'Promotional',
    description: 'A real-world brand collaboration render — the idol career, fully realised.',
    image: ora2Promo,
    alt: 'Airi Momoi Ora2 collaboration promotional artwork',
    accent: '#B76E79',
  },
];
