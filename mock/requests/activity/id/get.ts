import type { RestRequestConfig } from 'mock-config-server';

export const getActivityById: RestRequestConfig = {
  path: '/activity/:id',
  method: 'get',
  routes: [
    {
      data: {
        id: '1',
        media: [
          {
            id: '1',
            type: 'IMAGE',
            flag: 'AVATAR',
            url: 'http://localhost:31299/api/1.0/static/activity/image-1.png'
          },
          {
            id: '2',
            type: 'IMAGE',
            flag: undefined,
            url: 'http://localhost:31299/api/1.0/static/activity/image-2.png'
          },
          {
            id: '3',
            type: 'IMAGE',
            flag: undefined,
            url: 'http://localhost:31299/api/1.0/static/activity/image-3.png'
          }
        ],
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
            details: '3 этаж, вход с ТЦ',
            nearestFreeTime: [
              {
                date: new Date('2024-01-02'),
                time: '12:32'
              },
              {
                date: new Date('2024-01-02'),
                time: '12:20'
              },
              {
                date: new Date('2024-07-04'),
                time: '13:31'
              },
              {
                date: new Date('2024-09-03'),
                time: '15:31'
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
            details: '3 этаж, вход с ТЦ',
            nearestFreeTime: [
              {
                date: new Date('2024-01-02'),
                time: '12:32'
              },
              {
                date: new Date('2024-07-04'),
                time: '13:31'
              },
              {
                date: new Date('2024-09-03'),
                time: '15:31'
              }
            ]
          }
        ]
      },
      entities: { params: { id: 1 } }
    }
  ]
};
