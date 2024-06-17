import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getUserByIdConfig: RestRequestConfig = {
  path: '/user/:id',
  method: 'get',
  routes: [
    { data: DATABASE.USER.SUPERADMIN },
    {
      entities: { params: { id: '72372e1e-f8cc-4e56-9f4b-9840a94dbasd' } },
      data: DATABASE.USER.MANAGER
    },
    {
      entities: { params: { id: '98517124-277f-4af0-b82e-50d9bbe4ac12' } },
      data: DATABASE.USER.USER
    }
  ]
};
