import type { UserResponse, UserResponseRolesItem } from '@/api-types';

export const USER = {
  SUPERADMIN: {
    id: '77672e1e-f8cc-4e56-9f4b-9840a94dbbca',
    email: 'superadmin@mail.ru',
    isActive: true,
    isBlocked: false,
    roles: ['SUPERADMIN'],
    name: 'Admin',
    surname: 'Super',
    middleName: 'Middle',
    phone: 79999999999,
    media: [],
    avatar: '/avatar.png',
    passportId: 'passportId',
    sex: 'MALE',
    lastLogin: '2024-03-25T11:27:50.335Z',
    createdAt: '2024-03-25T11:08:17.464Z',
    updatedAt: '2024-03-25T11:27:50.336Z'
  },
  MANAGER: {
    id: '72372e1e-f8cc-4e56-9f4b-9840a94dbasd',
    email: 'partner@mail.ru',
    isActive: true,
    isBlocked: false,
    roles: ['MANAGER'],
    name: 'Partner',
    surname: 'Partner',
    middleName: 'Middle',
    phone: 79999999999,
    media: [],
    avatar: '/avatar.png',
    passportId: 'passportId',
    sex: 'MALE',
    lastLogin: '2024-03-25T11:27:50.335Z',
    createdAt: '2024-03-25T11:08:17.464Z',
    updatedAt: '2024-03-25T11:27:50.336Z'
  }
} satisfies Partial<Record<UserResponseRolesItem, UserResponse>>;
