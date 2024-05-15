import type { RestRequestConfig } from 'mock-config-server';

export const getUserByIdConfig: RestRequestConfig = {
  path: '/user/:id',
  method: 'get',
  routes: [
    {
      data: {
        id: '122',
        email: 'chel1@mail.ru',
        isActive: true,
        isBlocked: false,
        roles: ['USER'],
        name: 'Сергей',
        surname: 'Киселев',
        middleName: null,
        avatar: null,
        passportId: 'passportId_122',
        sex: null,
        age: 12,
        lastLogin: '2024-03-25T11:27:50.335Z',
        createdAt: '2024-03-25T11:08:17.464Z',
        updatedAt: '2024-03-25T11:27:50.336Z'
      }
    },
    {
      entities: { params: { id: '123' } },
      data: {
        id: '123',
        email: 'chel2@mail.ru',
        isActive: true,
        isBlocked: false,
        roles: ['USER'],
        name: 'Иван',
        surname: 'Иванов',
        middleName: null,
        avatar: null,
        passportId: 'passportId_123',
        sex: null,
        age: 22,
        lastLogin: '2024-03-25T11:27:50.335Z',
        createdAt: '2024-03-25T11:08:17.464Z',
        updatedAt: '2024-03-25T11:27:50.336Z'
      }
    }
  ]
};
