import type { RestRequestConfig } from 'mock-config-server';

export const getActivityPublicConfig: RestRequestConfig = {
  path: '/activity/public',
  method: 'get',
  routes: [
    {
      data: {
        rows: [
          {
            id: '1',
            cover: 'http://localhost:31299/api/1.0/static/activity/image-1.png',
            media: [
              {
                id: '1',
                type: 'IMAGE',
                flag: 'COVER',
                url: 'http://localhost:31299/api/1.0/static/activity/image-1.png'
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
            category: 'COOKING',
            participants: 600,
            likes: 210,
            nutsCount: 0,
            schedule: [
              {
                address: {
                  geoLat: 54.98,
                  geoLon: 82.83
                },
                leadingEmployeeId: 'id',
                entry: true,
                regular: true,
                date: '2024-02-28T20:14:53.795Z',
                time: {
                  hour: 12,
                  minutes: 33
                },
                maxNumberOfParticipants: 0,
                period: [0]
              }
            ]
          },
          {
            id: '2',
            cover: 'http://localhost:31299/api/1.0/static/activity/image-1.png',
            media: [
              {
                id: '1',
                type: 'IMAGE',
                flag: 'COVER',
                url: 'http://localhost:31299/api/1.0/static/activity/image-1.png'
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
            status: 'CLOSED',
            category: 'COOKING',
            participants: 600,
            likes: 210,
            nutsCount: 0,
            schedule: []
          },
          {
            id: '3',
            cover: 'http://localhost:31299/api/1.0/static/activity/image-4.png',
            media: [
              {
                id: '1',
                type: 'IMAGE',
                flag: 'COVER',
                url: 'http://localhost:31299/api/1.0/static/activity/image-1.png'
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
            status: 'DRAFT',
            category: 'COOKING',
            participants: 600,
            likes: 210,
            nutsCount: 0,
            schedule: [
              {
                address: {
                  geoLat: 54.98,
                  geoLon: 82.89
                },
                leadingEmployeeId: 'id',
                entry: true,
                regular: true,
                date: '2024-02-28T20:14:53.795Z',
                time: {
                  hour: 12,
                  minutes: 33
                },
                maxNumberOfParticipants: 0,
                period: [0]
              }
            ]
          },
          {
            id: '4',
            cover: 'http://localhost:31299/api/1.0/static/activity/image-3.png',
            media: [
              {
                id: '1',
                type: 'IMAGE',
                flag: 'COVER',
                url: 'http://localhost:31299/api/1.0/static/activity/image-1.png'
              }
            ],
            name: 'Рисуем живопись',
            ageLimit: [7, 13],
            price: 100,
            duration: 120,
            replay: false,
            view: 'ONLINE',
            status: 'EDITING',
            category: 'COOKING',
            participants: 200,
            likes: 210,
            nutsCount: 0,
            schedule: []
          }
        ],
        pagination: { current: 1, limit: 10, organizationId: 1 }
      }
    }
  ]
};
