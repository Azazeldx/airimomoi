import unyieldingIdolSpirit from '@/assets/images/cards/unyielding-idol-spirit.png';
import followYourDreams from '@/assets/images/cards/follow-your-dreams.png';
import sweetMoment from '@/assets/images/cards/sweet-moment.png';
import mysteriousHeartWitch from '@/assets/images/cards/mysterious-heart-witch.png';
import captivatedByCuteness from '@/assets/images/cards/captivated-by-cuteness.png';
import introToTeaCeremony from '@/assets/images/cards/intro-to-tea-ceremony.png';
import alwaysLookingAhead from '@/assets/images/cards/always-looking-ahead.png';
import serviceWithASmile from '@/assets/images/cards/service-with-a-smile.png';
import perfectSweets from '@/assets/images/cards/perfect-sweets.png';
import thatsSoUnfair from '@/assets/images/cards/thats-so-unfair.png';
import oneOfTheFans from '@/assets/images/cards/one-of-the-fans.png';
import beach from '@/assets/images/airi/beach.png';

export interface GalleryItem {
  src: ImageMetadata;
  alt: string;
  title: string;
  caption: string;
}

export const gallery: GalleryItem[] = [
  {
    src: unyieldingIdolSpirit,
    alt: 'Airi Momoi standing in stage lighting, Unyielding Idol Spirit card art',
    title: 'Unyielding Idol Spirit',
    caption: 'Her very first card — the spirit she never actually lost.',
  },
  {
    src: followYourDreams,
    alt: 'Airi Momoi reaching forward, Follow Your Dreams card art',
    title: 'Follow Your Dreams!',
    caption: 'Advice she gives freely, and took a long time to accept herself.',
  },
  {
    src: sweetMoment,
    alt: 'Airi Momoi with sweets, Sweet Moment card art',
    title: 'Sweet Moment',
    caption: 'Japanese sweets. Non-negotiable.',
  },
  {
    src: mysteriousHeartWitch,
    alt: 'Airi Momoi in witch attire, Mysterious Heart Witch card art',
    title: 'Mysterious Heart Witch',
    caption: 'Halloween, and a costume she pretends she did not enjoy.',
  },
  {
    src: captivatedByCuteness,
    alt: 'Airi Momoi looking delighted, Captivated by Cuteness card art',
    title: 'Captivated by Cuteness',
    caption: 'The idol researcher, thoroughly researched by cuteness.',
  },
  {
    src: introToTeaCeremony,
    alt: 'Airi Momoi in kimono at tea ceremony, Intro To Tea Ceremony card art',
    title: 'Intro To Tea Ceremony',
    caption: 'Her club, and the only place she is reliably quiet.',
  },
  {
    src: alwaysLookingAhead,
    alt: 'Airi Momoi gazing forward, Always Looking Ahead card art',
    title: 'Always Looking Ahead',
    caption: 'Because looking back was never going to help.',
  },
  {
    src: serviceWithASmile,
    alt: 'Airi Momoi in a café uniform, Service With A Smile card art',
    title: 'Service With A Smile',
    caption: 'Professional to a fault, even off-stage.',
  },
  {
    src: perfectSweets,
    alt: 'Airi Momoi presenting desserts, Perfect Sweets card art',
    title: 'Perfect Sweets',
    caption: 'She can cook. She will let you know she can cook.',
  },
  {
    src: thatsSoUnfair,
    alt: 'Airi Momoi with an indignant expression, That’s So Unfair card art',
    title: 'That’s So Unfair!',
    caption: 'The face she makes roughly once per practice session.',
  },
  {
    src: oneOfTheFans,
    alt: 'Airi Momoi cheering as a fan, One Of The Fans card art',
    title: 'One Of The Fans',
    caption: 'Idol researcher first, idol second.',
  },
  {
    src: beach,
    alt: 'Airi Momoi at the beach in summer',
    title: 'Summer, unguarded',
    caption: 'Off-duty, and briefly not performing anything at all.',
  },
];
