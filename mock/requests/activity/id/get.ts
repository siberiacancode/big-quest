import type { RestRequestConfig } from 'mock-config-server';

export const getActivityById: RestRequestConfig = {
  path: '/activity/:id',
  method: 'get',
  routes: [
    {
      data: [
        {
          id: '1',
          cover: '',
          content: [],
          name: 'Рисуем живопись',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
          ageLimit: [7, 13],
          price: 700,
          duration: 120,
          replay: false,
          view: 'ONLINE',
          status: 'PUBLISHED',
          category: 'Образование',
          participants: 600,
          likes: 210,
          nutsCount: 0,
          schedule: []
        }
      ],
      entities: { params: { id: 1 } }
    }
  ]
};
