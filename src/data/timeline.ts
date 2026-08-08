import unyieldingIdolSpirit from '@/assets/images/cards/unyielding-idol-spirit.png';
import bday2021 from '@/assets/images/airi/bday-2021.png';
import bday2022 from '@/assets/images/airi/bday-2022.jpg';
import bday2023 from '@/assets/images/airi/bday-2023.jpg';
import bday2024 from '@/assets/images/airi/bday-2024.png';
import bday2025 from '@/assets/images/airi/bday-2025.jpg';
import bday2026 from '@/assets/images/airi/bday-2026.jpg';

export interface TimelineEntry {
  year: string;
  title: string;
  body: string;
  image: ImageMetadata;
  alt: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: 'Before',
    title: 'The girl who already knew',
    body: 'Airi had been an idol before. She knew the auditions, the smiles held a beat too long, the quiet arithmetic of being wanted. When she walked away, she took all of it with her — and told herself she was done.',
    image: unyieldingIdolSpirit,
    alt: 'Airi Momoi in her Unyielding Idol Spirit card illustration',
  },
  {
    year: '2021',
    title: 'A rooftop, an argument, a beginning',
    body: 'A first-year with no talent and no doubts asked to be taught. Airi said no. Then she said the true thing instead — and found herself standing on a rooftop, arguing about a dream she was supposed to have buried.',
    image: bday2021,
    alt: 'Airi Momoi 2021 birthday illustration',
  },
  {
    year: '2022',
    title: 'MORE MORE JUMP!',
    body: 'Three girls who had given up, and one who never learned how. They found a song called “Untitled” on their phones, stepped into the Stage SEKAI, and came back out as a group.',
    image: bday2022,
    alt: 'Airi Momoi 2022 birthday illustration',
  },
  {
    year: '2023',
    title: 'Sharper than kindness',
    body: 'Airi became the one who says what needs saying. Not cruelty — precision. The group learned that her bluntness was the most generous thing about her.',
    image: bday2023,
    alt: 'Airi Momoi 2023 birthday illustration',
  },
  {
    year: '2024',
    title: 'Flowers of hope',
    body: 'In the Stage SEKAI, a warm rain began to fall and buds opened into flowers. The VIRTUAL SINGERs named them Flowers of Hope — one for every person MORE MORE JUMP! reached.',
    image: bday2024,
    alt: 'Airi Momoi 2024 birthday illustration',
  },
  {
    year: '2025',
    title: 'Her own stage',
    body: 'Not the stage she was handed at fourteen. One she built, with three people who chose it beside her.',
    image: bday2025,
    alt: 'Airi Momoi 2025 birthday illustration',
  },
  {
    year: 'Now',
    title: 'Still reaching',
    body: '“Wouldn’t it be amazing if we could deliver hope to everyone?” She asks it like a question. She means it like a plan.',
    image: bday2026,
    alt: 'Airi Momoi 2026 birthday illustration',
  },
];
