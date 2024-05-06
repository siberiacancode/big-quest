export const ACTIVITIES: ActivityResponse[] = [
  {
    id: '1',
    media: [
      {
        id: '1',
        url: 'http://localhost:31299/api/1.0/static/activity/image-1.png',
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: '2',
        url: 'http://localhost:31299/api/1.0/static/activity/image-2.png',
        type: 'IMAGE',
        flag: null
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
    category: 'Кулинария',
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
        date: new Date(),
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
    media: [
      {
        id: '1',
        url: 'http://localhost:31299/api/1.0/static/activity/image-1.png',
        type: 'IMAGE',
        flag: null
      },
      {
        id: '2',
        url: 'http://localhost:31299/api/1.0/static/activity/image-2.png',
        type: 'IMAGE',
        flag: 'COVER'
      }
    ],
    name: 'Готовим пиццу',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    ageLimit: [7, 13],
    price: 700,
    duration: 120,
    replay: false,
    view: 'ONLINE',
    status: 'CLOSED',
    category: 'Кулинария',
    participants: 600,
    likes: 210,
    nutsCount: 0,
    schedule: []
  },
  {
    id: '3',
    media: [
      {
        id: '1',
        url: 'http://localhost:31299/api/1.0/static/activity/image-3.png',
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: '2',
        url: 'http://localhost:31299/api/1.0/static/activity/image-2.png',
        type: 'IMAGE',
        flag: null
      }
    ],
    name: 'Спортивный фестиваль',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    ageLimit: [7, 13],
    price: 700,
    duration: 120,
    replay: false,
    view: 'ONLINE',
    status: 'DRAFT',
    category: 'Спорт',
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
        date: new Date(),
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
    media: [
      {
        id: '1',
        url: 'http://localhost:31299/api/1.0/static/activity/image-4.png',
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: '2',
        url: 'http://localhost:31299/api/1.0/static/activity/image-2.png',
        type: 'IMAGE',
        flag: null
      }
    ],
    name: 'Спорт это жизнь',
    ageLimit: [7, 13],
    price: 100,
    duration: 120,
    replay: false,
    view: 'ONLINE',
    status: 'EDITING',
    category: 'Спорт',
    participants: 200,
    likes: 210,
    nutsCount: 0,
    schedule: []
  }
];
