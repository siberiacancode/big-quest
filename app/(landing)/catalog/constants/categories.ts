type ExtendedActivityCategory = ActivityCategory | 'ALL';

export const categories: { name: string; value: ExtendedActivityCategory }[] = [
  {
    name: 'Все',
    value: 'ALL'
  },
  {
    name: 'Кулинария',
    value: 'COOKING'
  },
  {
    name: 'Культура',
    value: 'CULTURE'
  },
  {
    name: 'Медиа',
    value: 'MEDIA'
  },
  {
    name: 'Образование',
    value: 'EDUCATION'
  },
  {
    name: 'Спорт',
    value: 'SPORT'
  },
  {
    name: 'Челлендж',
    value: 'CHALLENGE'
  },
  {
    name: 'Развлечение',
    value: 'ENTERTAINMENT'
  }
];
