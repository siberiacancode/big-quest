import type { StaticImageData } from 'next/image';

import activity1 from '@/assets/images/landing/activities/activity1.png';

interface Shedule {
  id: string;
  activityId: string;
  address: string;
  leadingEmployeeId: string;
  entry: boolean;
  regular: boolean;
  maxNumberOfParticipants: 0;
  dateAndTime: {
    date: Date;
    timeFrom: {
      hour: number;
      minutes: number;
    };
    timeTo: {
      hour: number;
      minutes: number;
    };
  };
  datePeriodWithTimes: {
    periodDates: {
      dateFrom: number;
      dateTo: number;
    };
    weekDaysWithTime: [Date];
  };
  points: {
    latitude: number;
    longitude: number;
  };
}

export interface Activity {
  id: string;
  image: StaticImageData; // cover?
  category: string;
  title: string; // name
  duration: number;
  minimumAge: number; // ageLimit: [7, 13];
  media: {
    id: StaticImageData;
    type: 'IMAGE' | 'VIDEO';
    flag: 'AVATAR' | 'COVER';
  }[];
  description?: string;
  price?: number;
  nutsCount?: number;
  replay?: boolean;
  view?: 'ONLINE' | 'OFFLINE';
  status?: 'DRAFT' | 'MODERATION' | 'EDITING' | 'PUBLISHED' | 'CLOSED';
  likes?: number;
  participants?: number;
  schedule?: Shedule;
}

export const activities: Activity[] = [
  {
    id: '1',
    image: activity1,
    category: 'COOKING',
    title: 'Первая короткометражка kfkfkfkfkfkfkkfkf',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '2',
    image: activity1,
    category: 'CULTURE',
    title: 'Вторая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '3',
    image: activity1,
    category: 'MEDIA',
    title: 'Третья',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '4',
    image: activity1,
    category: 'EDUCATION',
    title: 'Четвертая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '5',
    image: activity1,
    category: 'COOKING',
    title: 'Пятая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '6',
    image: activity1,
    category: 'SPORT',
    title: 'Шестая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '7',
    image: activity1,
    category: 'SPORT',
    title: 'Седьмая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '8',
    image: activity1,
    category: 'EDUCATION',
    title: 'Восьмая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '9',
    image: activity1,
    category: 'CULTURE',
    title: 'Девятая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '10',
    image: activity1,
    category: 'COOKING',
    title: 'Десятая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '11',
    image: activity1,
    category: 'CHALLENGE',
    title: 'Одиннадцатая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '12',
    image: activity1,
    category: 'COOKING',
    title: 'Двенадцатая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '13',
    image: activity1,
    category: 'COOKING',
    title: 'Тренадцатая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '14',
    image: activity1,
    category: 'COOKING',
    title: 'Четырнадцатая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '15',
    image: activity1,
    category: 'COOKING',
    title: 'Пятнадцатая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '16',
    image: activity1,
    category: 'COOKING',
    title: 'Шестнадцатая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '17',
    image: activity1,
    category: 'COOKING',
    title: 'Семнадцатая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '18',
    image: activity1,
    category: 'COOKING',
    title: 'Восемнадцатая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '19',
    image: activity1,
    category: 'COOKING',
    title: 'Девятнадцатая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  },
  {
    id: '20',
    image: activity1,
    category: 'COOKING',
    title: 'Двадцатая',
    duration: 120,
    minimumAge: 10,
    media: [
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'COVER'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      },
      {
        id: activity1,
        type: 'IMAGE',
        flag: 'AVATAR'
      }
    ]
  }
];
