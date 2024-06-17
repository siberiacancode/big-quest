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
    avatar: 'http://localhost:31299/api/1.0/static/admin/avatar.webp',
    media: [
      {
        id: '95b28a58-bf54-4538-a283-5a5bde1bf0da',
        flag: 'AVATAR',
        type: 'IMAGE',
        url: 'http://localhost:31299/api/1.0/static/admin/avatar.webp'
      }
    ],
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
    phone: 79999999998,
    avatar: 'http://localhost:31299/api/1.0/static/manager/avatar.png',
    media: [
      {
        id: '3895f70a-72e7-46ed-99d3-d4f0c6d7c716',
        flag: 'AVATAR',
        type: 'IMAGE',
        url: 'http://localhost:31299/api/1.0/static/manager/avatar.png'
      }
    ],
    passportId: 'passportId',
    sex: 'MALE',
    lastLogin: '2024-03-25T11:27:50.335Z',
    createdAt: '2024-03-25T11:08:17.464Z',
    updatedAt: '2024-03-25T11:27:50.336Z'
  },
  USER: {
    id: '98517124-277f-4af0-b82e-50d9bbe4ac12',
    email: 'chel1@mail.ru',
    isActive: true,
    isBlocked: false,
    roles: ['USER'],
    name: 'Сергей',
    surname: 'Киселев',
    phone: 79999999997,
    middleName: 'Сергеевич',
    avatar: 'http://localhost:31299/api/1.0/static/user/avatar.webp',
    media: [
      {
        id: 'b79d83be-1c37-4d8d-84f1-6eb8756b60c8',
        flag: 'AVATAR',
        type: 'IMAGE',
        url: 'http://localhost:31299/api/1.0/static/user/avatar.webp'
      }
    ],
    passportId: 'passportId_122',
    sex: 'MALE',
    lastLogin: '2024-03-25T11:27:50.335Z',
    createdAt: '2024-03-25T11:08:17.464Z',
    updatedAt: '2024-03-25T11:27:50.336Z'
  }
} satisfies Partial<Record<UserResponseRolesItem, UserResponse>>;
