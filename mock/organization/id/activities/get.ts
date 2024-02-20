import type { RestRequestConfig } from 'mock-config-server';

export const getOrganizationActivitiesById: RestRequestConfig = {
  path: '/organization/:id/activities',
  method: 'get',
  routes: [
    {
      data: [
        {
          images: [''],
          category: 'EDUCATION',
          status: 'PUBLISHED',
          participants: 600,
          likes: 210,
          title: 'Рисуем живопись',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
          ageMin: 7,
          ageMax: 13,
          allowRepeat: false,
          price: 700,
          time: 120
        },
        {
          images: [''],
          category: 'EDUCATION',
          status: 'PUBLISHED',
          participants: 600,
          likes: 210,
          title: 'Рисуем живопись',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
          ageMin: 7,
          ageMax: 13,
          allowRepeat: false,
          price: 700,
          time: 120
        },
        {
          images: [''],
          category: 'EDUCATION',
          status: 'DRAFT',
          participants: 600,
          likes: 210,
          title: 'Рисуем живопись',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
          ageMin: 7,
          ageMax: 13,
          allowRepeat: false,
          price: 700,
          time: 120
        },
        {
          images: [''],
          category: 'EDUCATION',
          status: 'DRAFT',
          participants: 600,
          likes: 210,
          title: 'Рисуем живопись',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
          ageMin: 7,
          ageMax: 13,
          repeat: false,
          price: 700,
          time: 120
        },
        {
          images: [''],
          category: 'EDUCATION',
          status: 'DRAFT',
          participants: 600,
          likes: 210,
          title: 'Рисуем живопись',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
          ageMin: 7,
          ageMax: 13,
          allowRepeat: false,
          price: 700,
          time: 120
        }
      ],
      entities: { params: { id: 1 } }
    }
  ]
};
