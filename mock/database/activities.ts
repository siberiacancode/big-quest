import type { ActivityListResponse } from '@/api-types';

import { CATEGORIES } from './categories';

export const ACTIVITIES: ActivityListResponse[] = [
  {
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
      },
      {
        id: '4',
        type: 'VIDEO',
        flag: undefined,
        url: 'http://localhost:31299/api/1.0/static/activity/video-1.mp4'
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
    category: CATEGORIES[0],
    likes: 210,
    nutsCount: 0,
    organizationId: '1',
    organizationName: 'Организация 1',
    locality: {
      city: 'город',
      lat: 1,
      lon: 1
    }
  },
  {
    id: '2',
    media: [
      {
        id: '1',
        type: 'IMAGE',
        flag: undefined,
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
        flag: 'AVATAR',
        url: 'http://localhost:31299/api/1.0/static/activity/image-3.png'
      },
      {
        id: '4',
        type: 'VIDEO',
        flag: undefined,
        url: 'http://localhost:31299/api/1.0/static/activity/video-1.mp4'
      }
    ],
    name: 'Играем в футбол',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    ageLimit: [7, 13],
    price: 700,
    duration: 120,
    replay: false,
    view: 'ONLINE',
    status: 'CLOSED',
    category: CATEGORIES[0],
    likes: 210,
    nutsCount: 0,
    organizationId: '1',
    organizationName: 'Организация 1',
    locality: {
      city: 'город',
      lat: 1,
      lon: 1
    }
  },
  {
    id: '3',
    media: [
      {
        id: '1',
        type: 'IMAGE',
        flag: undefined,
        url: 'http://localhost:31299/api/1.0/static/activity/image-1.png'
      },
      {
        id: '2',
        type: 'IMAGE',
        flag: 'AVATAR',
        url: 'http://localhost:31299/api/1.0/static/activity/image-2.png'
      },
      {
        id: '3',
        type: 'IMAGE',
        flag: undefined,
        url: 'http://localhost:31299/api/1.0/static/activity/image-3.png'
      },
      {
        id: '4',
        type: 'VIDEO',
        flag: undefined,
        url: 'http://localhost:31299/api/1.0/static/activity/video-1.mp4'
      }
    ],
    name: 'Пишем стихи',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    ageLimit: [7, 13],
    price: 700,
    duration: 120,
    replay: false,
    view: 'ONLINE',
    status: 'DRAFT',
    category: CATEGORIES[0],
    likes: 210,
    nutsCount: 0,
    organizationId: '1',
    organizationName: 'Организация 1',
    locality: {
      city: 'город',
      lat: 1,
      lon: 1
    }
  },
  {
    id: '4',
    media: [
      {
        id: '1',
        type: 'IMAGE',
        flag: 'AVATAR',
        url: 'http://localhost:31299/api/1.0/static/activity/image-1.png'
      },
      {
        id: '4',
        type: 'VIDEO',
        flag: undefined,
        url: 'http://localhost:31299/api/1.0/static/activity/video-1.mp4'
      }
    ],
    name: 'Читаем книги',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',

    ageLimit: [7, 13],
    price: 100,
    duration: 120,
    replay: false,
    view: 'ONLINE',
    status: 'EDITING',
    category: CATEGORIES[0],
    likes: 210,
    nutsCount: 0,
    organizationId: '1',
    organizationName: 'Организация 1',
    locality: {
      city: 'город',
      lat: 1,
      lon: 1
    }
  },
  {
    id: '5',
    media: [
      {
        id: '2',
        type: 'IMAGE',
        flag: undefined,
        url: 'http://localhost:31299/api/1.0/static/activity/image-2.png'
      },
      {
        id: '3',
        type: 'IMAGE',
        flag: 'AVATAR',
        url: 'http://localhost:31299/api/1.0/static/activity/image-3.png'
      },
      {
        id: '4',
        type: 'VIDEO',
        flag: undefined,
        url: 'http://localhost:31299/api/1.0/static/activity/video-1.mp4'
      }
    ],
    name: 'Играем в пейнтбол',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',

    ageLimit: [7, 13],
    price: 100,
    duration: 120,
    replay: false,
    view: 'ONLINE',
    status: 'MODERATION',
    category: CATEGORIES[0],
    likes: 210,
    nutsCount: 0,
    organizationId: '1',
    organizationName: 'Организация 1',
    locality: {
      city: 'город',
      lat: 1,
      lon: 1
    }
  }
];
