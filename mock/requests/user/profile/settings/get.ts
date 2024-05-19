import type { RestRequestConfig } from 'mock-config-server';

export const getUserProfileSettingsConfig: RestRequestConfig = {
  path: '/user/profile/settings',
  method: 'get',
  routes: [
    {
      data: {
        id: '1',
        userId: 'jhg123123j',
        name: 'Пап',
        surname: 'Папов',
        role: 'PARENT',
        children: [
          {
            id: '10',
            userId: 'jhg1245453j',
            name: 'Сын',
            surname: 'Сынов',
            role: 'CHILD'
          },
          {
            id: '11',
            userId: 'jhg12547953j',
            name: 'Сын 2',
            surname: 'Сынов',
            role: 'CHILD'
          }
        ]
      }
    }
  ]
};
