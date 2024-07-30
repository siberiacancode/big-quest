import type { CategoryListResponse } from '@/api-types';

export const CATEGORIES: CategoryListResponse['rows'] = [
  {
    id: '1',
    data: { RU: 'Кулинария', EN: 'Cooking' }
  },
  {
    id: '2',
    data: {
      RU: 'Культура',
      EN: 'Culture'
    }
  },
  {
    id: '3',
    data: {
      RU: 'Медиа',
      EN: 'Media'
    }
  },
  {
    id: '4',
    data: {
      RU: 'Образование',
      EN: 'Education'
    }
  },
  {
    id: '5',
    data: {
      RU: 'Развлечение',
      EN: 'Entertainment'
    }
  },
  {
    id: '6',
    data: {
      RU: 'Спорт',
      EN: 'Sport'
    }
  },
  {
    id: '7',
    data: {
      RU: 'Челлендж',
      EN: 'Challenge'
    }
  }
] as const;
