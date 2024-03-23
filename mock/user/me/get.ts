import type { RestRequestConfig } from 'mock-config-server';

export const getUserMe: RestRequestConfig = {
  path: '/user/me',
  method: 'get',
  routes: [
    {
      data: {
        id: '6280b394-7a6e-44b5-8d5e-a57f42901da6',
        email: 'superadmin@mail.ru',
        createdAt: '2024-03-23T15:07:06.599Z',
        updatedAt: '2024-03-23T15:07:06.599Z',
        roles: ['SUPERADMIN'],
        isBlocked: false,
        isActive: true,
        name: 'User',
        surname: 'Userovich',
        middleName: 'Userov',
        lastLogin: '2024-03-23T15:07:06.599Z',
        passportId: 'string',
        sex: 'MALE',
        avatar: 'string'
      }
    }
  ]
};
