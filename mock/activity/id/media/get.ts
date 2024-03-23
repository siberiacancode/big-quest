import type { RestRequestConfig } from 'mock-config-server';

export const getActivityMediaById: RestRequestConfig = {
  path: '/activity/media/:id',
  method: 'get',
  routes: [
    {
      data: [
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
      ]
    }
  ]
};
