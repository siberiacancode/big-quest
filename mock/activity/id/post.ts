import type { RestRequestConfig } from 'mock-config-server';

export const postActivityById: RestRequestConfig = {
  path: '/activity/:id',
  method: 'post',
  routes: [
    {
      data: { message: 'success' },
      entities: { body: { organizationId: '1' } }
    }
  ]
};
