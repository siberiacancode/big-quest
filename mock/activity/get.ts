import type { RestRequestConfig } from 'mock-config-server';

export const getActivities: RestRequestConfig = {
  path: '/activity',
  method: 'get',
  routes: [
    {
      data: {
        rows: [
          {
            id: '1',
            media: [
              {
                id: 1,
                url: 'http://localhost:31299/api/1.0/static/activity/image-1.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: true
              },
              {
                id: 2,
                url: 'http://localhost:31299/api/1.0/static/activity/image-2.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: false
              },
              {
                id: 3,
                url: 'http://localhost:31299/api/1.0/static/activity/image-3.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: false
              },
              {
                id: 4,
                url: 'http://localhost:31299/api/1.0/static/activity/video-1.mp4',
                position: 1,
                type: 'video',
                ext: '.mp4',
                size: 23,
                isAvatar: false
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
                address: 'адрес',
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
            id: '1',
            media: [
              {
                id: 1,
                url: 'http://localhost:31299/api/1.0/static/activity/image-1.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: FinalizationRegistry
              },
              {
                id: 2,
                url: 'http://localhost:31299/api/1.0/static/activity/image-2.png',
                position: 2,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: false
              },
              {
                id: 3,
                url: 'http://localhost:31299/api/1.0/static/activity/image-3.png',
                position: 3,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: true
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
            category: 'Образование',
            participants: 600,
            likes: 210,
            nutsCount: 0,
            schedule: []
          },
          {
            id: '1',
            media: [
              {
                id: 1,
                url: 'http://localhost:31299/api/1.0/static/activity/image-1.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: true
              },
              {
                id: 2,
                url: 'http://localhost:31299/api/1.0/static/activity/image-2.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: false
              },
              {
                id: 3,
                url: 'http://localhost:31299/api/1.0/static/activity/image-3.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: false
              },
              {
                id: 4,
                url: 'http://localhost:31299/api/1.0/static/activity/video-1.mp4',
                position: 1,
                type: 'video',
                ext: '.mp4',
                size: 23,
                isAvatar: false
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
            category: 'Образование',
            participants: 600,
            likes: 210,
            nutsCount: 0,
            schedule: [
              {
                address: 'адрес',
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
            id: '1',
            media: [
              {
                id: 1,
                url: 'http://localhost:31299/api/1.0/static/activity/image-1.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: true
              },
              {
                id: 2,
                url: 'http://localhost:31299/api/1.0/static/activity/image-2.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: false
              },
              {
                id: 3,
                url: 'http://localhost:31299/api/1.0/static/activity/image-3.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: false
              },
              {
                id: 4,
                url: 'http://localhost:31299/api/1.0/static/activity/video-1.mp4',
                position: 1,
                type: 'video',
                ext: '.mp4',
                size: 23,
                isAvatar: false
              }
            ],
            name: 'Рисуем живопись',
            ageLimit: [7, 13],
            price: 100,
            duration: 120,
            replay: false,
            view: 'ONLINE',
            status: 'EDITING',
            category: 'Образование',
            participants: 200,
            likes: 210,
            nutsCount: 0,
            schedule: []
          },
          {
            id: '1',
            media: [
              {
                id: 1,
                url: 'http://localhost:31299/api/1.0/static/activity/image-1.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: true
              },
              {
                id: 2,
                url: 'http://localhost:31299/api/1.0/static/activity/image-2.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: false
              },
              {
                id: 3,
                url: 'http://localhost:31299/api/1.0/static/activity/image-3.png',
                position: 1,
                type: 'image',
                ext: '.png',
                size: 23,
                isAvatar: false
              },
              {
                id: 4,
                url: 'http://localhost:31299/api/1.0/static/activity/video-1.mp4',
                position: 1,
                type: 'video',
                ext: '.mp4',
                size: 23,
                isAvatar: false
              }
            ],
            name: 'Рисуем живопись',
            ageLimit: [7, 13],
            price: 100,
            duration: 120,
            replay: false,
            view: 'ONLINE',
            status: 'MODERATION',
            category: 'Образование',
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
