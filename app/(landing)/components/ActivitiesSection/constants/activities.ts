import type { StaticImageData } from 'next/image';

import activity1 from '@/assets/images/landing/activities/activity1.png';

export const activities: {
  id: string;
  image: StaticImageData;
  category: string;
  name: string;
  duration: number;
  minimumAge: number;
}[] = [
  {
    id: '1',
    image: activity1,
    category: 'Кулинария',
    name: 'Первая короткометражка kfkfkfkfkfkfkkfkf',
    duration: 120,
    minimumAge: 10
  },
  {
    id: '2',
    image: activity1,
    category: 'Кулинария',
    name: 'Первая короткометражка',
    duration: 120,
    minimumAge: 10
  },
  {
    id: '3',
    image: activity1,
    category: 'Кулинария',
    name: 'Первая короткометражка',
    duration: 120,
    minimumAge: 10
  },
  {
    id: '4',
    image: activity1,
    category: 'Кулинария',
    name: 'Первая короткометражка',
    duration: 120,
    minimumAge: 10
  },
  {
    id: '5',
    image: activity1,
    category: 'Кулинария',
    name: 'Первая короткометражка',
    duration: 120,
    minimumAge: 10
  },
  {
    id: '5',
    image: activity1,
    category: 'Кулинария',
    name: 'Первая короткометражка',
    duration: 120,
    minimumAge: 10
  }
];
