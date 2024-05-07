import type { Translations } from '@/api-types';

export const CATEGORIES: Translations[] = [
  {
    id: '1',

    RU: 'Кулинария',
    EN: 'Cooking'
  },
  {
    id: '2',

    RU: 'Культура',
    EN: 'Culture'
  },
  {
    id: '3',

    RU: 'Медиа',
    EN: 'Media'
  },
  {
    id: '4',

    RU: 'Образование',
    EN: 'Education'
  },
  {
    id: '5',

    RU: 'Развлечение',
    EN: 'Entertainment'
  },
  {
    id: '6',

    RU: 'Спорт',
    EN: 'Sport'
  },
  {
    id: '7',

    RU: 'Челлендж',
    EN: 'Challenge'
  }
] as const;
