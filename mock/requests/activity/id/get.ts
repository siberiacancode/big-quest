import type { RestRequestConfig } from 'mock-config-server';

export const getActivityById: RestRequestConfig = {
  path: '/activity/:id',
  method: 'get',
  routes: [
    {
      data: {
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
        schedule: [
          {
            address: {
              country: 'Russia',
              city: 'Moscow',
              street: 'Red Square',
              house: '1',
              geoLat: 55.7539,
              geoLon: 37.6208
            },
            leadingEmployeeId: 'employee1',
            entry: true,
            regular: false,
            date: new Date('2024-05-05'),
            time: {
              hours: 10,
              minutes: 30
            },
            maxNumberOfParticipants: 20,
            period: [7, 14, 21],
            nearestFreeTime: [
              {
                date: new Date('2024-05-02'),
                time: '12:32'
              },
              {
                date: new Date('2024-03-05'),
                time: '13:31'
              },
              {
                date: new Date('2024-05-03'),
                time: '11:32'
              }
            ]
          },
          {
            address: {
              country: 'Russia',
              city: 'Saint Petersburg',
              street: 'Nevsky Prospect',
              house: '2',
              geoLat: 59.9343,
              geoLon: 30.3351
            },
            leadingEmployeeId: 'employee2',
            entry: true,
            regular: false,
            date: new Date('2024-05-10'),
            time: {
              hours: 14,
              minutes: 0
            },
            maxNumberOfParticipants: 15,
            period: [7, 14, 21],
            nearestFreeTime: [
              {
                date: new Date('2024-05-02'),
                time: '12:32'
              },
              {
                date: new Date('2024-03-05'),
                time: '13:31'
              },
              {
                date: new Date('2024-05-03'),
                time: '11:32'
              }
            ]
          }
        ]
      },
      entities: { params: { id: 1 } }
    }
  ]
};
