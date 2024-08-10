import type { ScheduleResponse } from '@/api-types';

export const SCHEDULES: ScheduleResponse[] = [
  {
    id: '1',
    date: '2022-01-01',
    isDone: false,
    isRegularActivity: false,
    numberOfSeats: 10,
    preEntry: false,
    weekAndTime: {
      weekDay: 'MONDAY',
      minStart: 0,
      hourStart: 10,
      minEnd: 0,
      hourEnd: 12
    },
    activity: {
      id: '1',
      name: 'Yoga Class',
      category: {
        id: '1',
        RU: 'Йога',
        EN: 'Yoga'
      },
      media: []
    },
    address: {
      id: '1',
      value: '123 Main St, Springfield'
    },
    leading: {
      id: '1',
      name: 'John',
      surname: 'Doe'
    }
  },
  {
    id: '2',
    date: '2022-01-01',
    isDone: false,
    isRegularActivity: false,
    numberOfSeats: 10,
    preEntry: false,
    weekAndTime: {
      weekDay: 'TUESDAY',
      minStart: 0,
      hourStart: 10,
      minEnd: 0,
      hourEnd: 12
    },
    activity: {
      id: '2',
      name: 'Yoga Class',
      category: {
        id: '2',
        RU: 'Йога',
        EN: 'Yoga'
      },
      media: []
    },
    address: {
      id: '2',
      value: '123 Main St, Springfield'
    },
    leading: {
      id: '2',
      name: 'John',
      surname: 'Doe'
    },
    organizationId: '2'
  },
  {
    id: 'activity_001',
    leading: {
      id: 'leader_001',
      name: 'John',
      surname: 'Doe'
    },
    isRegularActivity: true,
    preEntry: true,
    activity: {
      id: 'act_001',
      name: 'Yoga Class',
      category: {
        id: 'cat_001',
        RU: 'Йога',
        EN: 'Yoga'
      },
      media: []
    },
    address: {
      id: 'addr_001',
      value: '123 Main St, Springfield'
    },
    date: '2023-05-19T05:58:03.245Z',
    numberOfSeats: 20,
    weekAndTime: {
      weekDay: 'MONDAY',
      hourStart: 18,
      minStart: 0
    },
    organizationId: 'org_001',
    isDone: false
  },
  {
    id: 'activity_002',
    leading: {
      id: 'leader_002',
      name: 'Jane',
      surname: 'Smith'
    },
    isRegularActivity: true,
    preEntry: true,
    activity: {
      id: 'act_002',
      name: 'Cooking Class',
      category: {
        id: 'cat_002',
        RU: 'Кулинария',
        EN: 'Cooking'
      },
      media: []
    },
    address: {
      id: 'addr_002',
      value: '456 Oak St, Springfield'
    },
    date: '2024-05-29T05:58:03.245Z',
    numberOfSeats: 15,
    weekAndTime: {
      weekDay: 'TUESDAY',
      hourStart: 17,
      hourEnd: 19,
      minStart: 0,
      minEnd: 0
    },
    organizationId: 'org_002',
    isDone: true
  },
  {
    id: 'activity_003',
    leading: {
      id: 'leader_003',
      name: 'Michael',
      surname: 'Brown'
    },
    isRegularActivity: true,
    preEntry: true,
    activity: {
      id: 'act_003',
      name: 'Painting Workshop',
      category: {
        id: 'cat_003',
        RU: 'Рисование',
        EN: 'Painting'
      },
      media: []
    },
    address: {
      id: 'addr_003',
      value: '789 Birch St, Springfield'
    },
    date: '2024-01-19T05:58:03.245Z',
    numberOfSeats: 10,
    weekAndTime: {
      weekDay: 'WEDNESDAY',
      hourStart: 16,
      hourEnd: 18,
      minStart: 30,
      minEnd: 30
    },
    organizationId: 'org_003',
    isDone: false
  },
  {
    id: 'activity_004',
    leading: {
      id: 'leader_004',
      name: 'Emily',
      surname: 'Davis'
    },
    isRegularActivity: true,
    preEntry: true,
    activity: {
      id: 'act_004',
      name: 'Music Class',
      category: {
        id: 'cat_004',
        RU: 'Музыка',
        EN: 'Music'
      },
      media: []
    },
    address: {
      id: 'addr_004',
      value: '101 Pine St, Springfield'
    },
    date: '2024-05-09T05:58:03.245Z',
    numberOfSeats: 25,
    weekAndTime: {
      weekDay: 'THURSDAY',
      hourStart: 19,
      hourEnd: 20,
      minStart: 0,
      minEnd: 0
    },
    organizationId: 'org_004',
    isDone: true
  },
  {
    id: 'activity_005',
    leading: {
      id: 'leader_005',
      name: 'Robert',
      surname: 'Johnson'
    },
    isRegularActivity: true,
    preEntry: true,
    activity: {
      id: 'act_005',
      name: 'Dance Class',
      category: {
        id: 'cat_005',
        RU: 'Танцы',
        EN: 'Dance'
      },
      media: []
    },
    address: {
      id: 'addr_005',
      value: '202 Maple St, Springfield'
    },
    date: '2024-05-19T05:58:03.245Z',
    numberOfSeats: 20,
    weekAndTime: {
      weekDay: 'FRIDAY',
      hourStart: 18,
      hourEnd: 19,
      minStart: 0,
      minEnd: 0
    },
    organizationId: 'org_005',
    isDone: true
  },
  {
    id: 'activity_006',
    leading: {
      id: 'leader_006',
      name: 'Lisa',
      surname: 'Miller'
    },
    isRegularActivity: true,
    preEntry: true,
    activity: {
      id: 'act_006',
      name: 'Photography Class',
      category: {
        id: 'cat_006',
        RU: 'Фотография',
        EN: 'Photography'
      },
      media: []
    },
    address: {
      id: 'addr_006',
      value: '303 Cedar St, Springfield'
    },
    date: '2024-05-19T05:58:03.245Z',
    numberOfSeats: 12,
    weekAndTime: {
      weekDay: 'SATURDAY',
      hourStart: 14,
      hourEnd: 16,
      minStart: 0,
      minEnd: 0
    },
    organizationId: 'org_006',
    isDone: false
  },
  {
    id: 'activity_007',
    leading: {
      id: 'leader_007',
      name: 'David',
      surname: 'Martinez'
    },
    isRegularActivity: true,
    preEntry: true,
    activity: {
      id: 'act_007',
      name: 'Martial Arts Class',
      category: {
        id: 'cat_007',
        RU: 'Боевые искусства',
        EN: 'Martial Arts'
      },
      media: []
    },
    address: {
      id: 'addr_007',
      value: '404 Walnut St, Springfield'
    },
    date: '2024-05-19T05:58:03.245Z',
    numberOfSeats: 30,
    weekAndTime: {
      weekDay: 'SUNDAY',
      hourStart: 10,
      hourEnd: 12,
      minStart: 0,
      minEnd: 0
    },
    organizationId: 'org_007',
    isDone: true
  },
  {
    id: 'activity_008',
    leading: {
      id: 'leader_008',
      name: 'Sarah',
      surname: 'Wilson'
    },
    isRegularActivity: true,
    preEntry: true,
    activity: {
      id: 'act_008',
      name: 'Gardening Club',
      category: {
        id: 'cat_008',
        RU: 'Садоводство',
        EN: 'Gardening'
      },
      media: []
    },
    address: {
      id: 'addr_008',
      value: '505 Elm St, Springfield'
    },
    date: '2024-05-19T05:58:03.245Z',
    numberOfSeats: 10,
    weekAndTime: {
      weekDay: 'MONDAY',
      hourStart: 9,
      hourEnd: 11,
      minStart: 0,
      minEnd: 0
    },
    organizationId: 'org_008',
    isDone: false
  },
  {
    id: 'activity_009',
    leading: {
      id: 'leader_009',
      name: 'Paul',
      surname: 'Garcia'
    },
    isRegularActivity: true,
    preEntry: true,
    activity: {
      id: 'act_009',
      name: 'Chess Club',
      category: {
        id: 'cat_009',
        RU: 'Шахматы',
        EN: 'Chess'
      },
      media: []
    },
    address: {
      id: 'addr_009',
      value: '606 Ash St, Springfield'
    },
    date: '2024-05-19T05:58:03.245Z',
    numberOfSeats: 8,
    weekAndTime: {
      weekDay: 'TUESDAY',
      hourStart: 18,
      hourEnd: 20,
      minStart: 0,
      minEnd: 0
    },
    organizationId: 'org_009',
    isDone: true
  },
  {
    id: 'activity_010',
    leading: {
      id: 'leader_010',
      name: 'Anna',
      surname: 'Clark'
    },
    isRegularActivity: true,
    preEntry: true,
    activity: {
      id: 'act_010',
      name: 'Book Club',
      category: {
        id: 'cat_010',
        RU: 'Книги',
        EN: 'Books'
      },
      media: []
    },
    address: {
      id: 'addr_010',
      value: '707 Poplar St, Springfield'
    },
    date: '2024-05-19T05:58:03.245Z',
    numberOfSeats: 12,
    weekAndTime: {
      weekDay: 'WEDNESDAY',
      hourStart: 17,
      hourEnd: 18,
      minStart: 0,
      minEnd: 0
    },
    organizationId: 'org_010',
    isDone: true
  }
];
