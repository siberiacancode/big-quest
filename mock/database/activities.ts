export const ACTIVITIES: ActivityResponse[] = [
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
        type: 'IMAGE',
        flag: 'AVATAR',
        url: 'http://localhost:31299/api/1.0/static/activity/image-1.png'
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
        type: 'IMAGE',
        flag: 'AVATAR',
        url: 'http://localhost:31299/api/1.0/static/activity/image-1.png'
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
