import type { StaticImageData } from 'next/image';

import activity1 from '@/assets/images/landing/activities/activity1.png';

export const activities: {
  image: StaticImageData;
  category: ActivityCategory;
  title: string;
  duration: number;
  minimumAge: number;
}[] = [
  {
    image: activity1,
    category: 'COOKING',
    title: 'Первая короткометражка kfkfkfkfkfkfkkfkf',
    duration: 120,
    minimumAge: 10
  },
  {
    image: activity1,
    category: 'COOKING',
    title: 'Первая короткометражка',
    duration: 120,
    minimumAge: 10
  },
  {
    image: activity1,
    category: 'COOKING',
    title: 'Первая короткометражка',
    duration: 120,
    minimumAge: 10
  },
  {
    image: activity1,
    category: 'COOKING',
    title: 'Первая короткометражка',
    duration: 120,
    minimumAge: 10
  },
  {
    image: activity1,
    category: 'COOKING',
    title: 'Первая короткометражка',
    duration: 120,
    minimumAge: 10
  },
  {
    image: activity1,
    category: 'COOKING',
    title: 'Первая короткометражка',
    duration: 120,
    minimumAge: 10
  }
];
