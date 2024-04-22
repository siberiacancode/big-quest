import type { RestRequestConfig } from 'mock-config-server';

export const getUserProfileConfig: RestRequestConfig = {
  path: '/user/profile',
  method: 'get',
  routes: [
    {
      data: {
        id: '72ffc9af-2185-44db-a962-ad749525505c',
        name: 'Arthur',
        surname: 'Morgan',
        birthdate: '1863-03-25T11:08:20.317Z',
        code: '1899b',
        userID: '@123vch',
        avatar: 'http://localhost:31299/api/1.0/static/employees/avatar.webp'
      }
    }
  ]
};
