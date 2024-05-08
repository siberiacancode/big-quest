import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getUserMeConfig: RestRequestConfig = {
  path: '/user/me',
  method: 'get',
  routes: [
    {
      data: () => DATABASE.USER.SUPERADMIN
    },
    {
      entities: {
        query: {
          email: 'partner@mail.ru'
        }
      },
      data: () => DATABASE.USER.MANAGER
    }
  ]
};
