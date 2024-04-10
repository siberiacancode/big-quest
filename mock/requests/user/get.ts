import type { RestRequestConfig } from 'mock-config-server';

import { COOKIES } from '@/utils/constants/cookies';

export const getUserMeConfig: RestRequestConfig = {
  path: '/user',
  method: 'get',
  routes: [
    {
      entities: {
        cookies: {
          [COOKIES.SESSION_ID]: 'superadmin'
        }
      },
      data: {
        id: '77672e1e-f8cc-4e56-9f4b-9840a94dbbca',
        email: 'superadmin@mail.ru',
        isActive: true,
        isBlocked: false,
        roles: ['SUPERADMIN'],
        name: 'Admin',
        surname: 'Super',
        middleName: null,
        avatar: null,
        passportId: 'passportId',
        sex: null,
        lastLogin: '2024-03-25T11:27:50.335Z',
        createdAt: '2024-03-25T11:08:17.464Z',
        updatedAt: '2024-03-25T11:27:50.336Z'
      }
    },
    {
      entities: {
        cookies: {
          [COOKIES.SESSION_ID]: 'partner'
        }
      },
      data: {
        id: '72372e1e-f8cc-4e56-9f4b-9840a94dbasd',
        email: 'partner@mail.ru',
        isActive: true,
        isBlocked: false,
        roles: ['MANAGER'],
        name: 'Partner',
        surname: 'Partner',
        middleName: null,
        avatar: null,
        passportId: 'passportId',
        sex: null,
        lastLogin: '2024-03-25T11:27:50.335Z',
        createdAt: '2024-03-25T11:08:17.464Z',
        updatedAt: '2024-03-25T11:27:50.336Z'
      }
    }
  ]
};
