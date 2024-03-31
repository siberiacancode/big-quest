import type { RestRequestConfig } from 'mock-config-server';

export const getUserMeConfig: RestRequestConfig = {
  path: '/user/me',
  method: 'get',
  routes: [
    {
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
    }
  ]
};
