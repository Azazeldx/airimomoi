import wl2Background from '@/assets/images/wallpapers/wl2-background.png';
import bday2024 from '@/assets/images/airi/bday-2024.png';
import promo1 from '@/assets/images/wallpapers/en-weekly-promo-1.jpg';
import wlBackground from '@/assets/images/wallpapers/wl-background.png';
import promo2 from '@/assets/images/wallpapers/en-weekly-promo-2.jpg';
import bday2021 from '@/assets/images/airi/bday-2021.png';
import promo3 from '@/assets/images/wallpapers/en-weekly-promo-3.jpg';
import promo4 from '@/assets/images/wallpapers/en-weekly-promo-4.jpg';
import anniversary3rd from '@/assets/images/airi/airi-3rd-anniversary.png';

export interface Wallpaper {
  src: ImageMetadata;
  alt: string;
  title: string;
  span: 'tall' | 'wide' | 'normal';
}

export const wallpapers: Wallpaper[] = [
  {
    src: wl2Background,
    alt: 'Airi Momoi official wallpaper background artwork, second edition',
    title: 'Stage Light II',
    span: 'wide',
  },
  {
    src: bday2024,
    alt: 'Airi Momoi 2024 birthday wallpaper illustration',
    title: 'Birthday 2024',
    span: 'normal',
  },
  {
    src: promo1,
    alt: 'Airi Momoi weekly promotional banner artwork',
    title: 'Weekly Promo I',
    span: 'normal',
  },
  {
    src: wlBackground,
    alt: 'Airi Momoi official wallpaper background artwork, first edition',
    title: 'Stage Light I',
    span: 'wide',
  },
  {
    src: promo2,
    alt: 'Airi Momoi weekly promotional banner artwork, second edition',
    title: 'Weekly Promo II',
    span: 'normal',
  },
  {
    src: bday2021,
    alt: 'Airi Momoi 2021 birthday wallpaper illustration',
    title: 'Birthday 2021',
    span: 'normal',
  },
  {
    src: promo3,
    alt: 'Airi Momoi weekly promotional banner artwork, third edition',
    title: 'Weekly Promo III',
    span: 'normal',
  },
  {
    src: promo4,
    alt: 'Airi Momoi weekly promotional banner artwork, fourth edition',
    title: 'Weekly Promo IV',
    span: 'wide',
  },
  {
    src: anniversary3rd,
    alt: 'Airi Momoi third anniversary illustration',
    title: '3rd Anniversary',
    span: 'tall',
  },
];
