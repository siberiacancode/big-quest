import type { RestRequestConfig } from 'mock-config-server';

export const putActivityById: RestRequestConfig = {
  path: '/activity/:id',
  method: 'put',
  routes: [
    {
      data: { message: 'success' },
      entities: { body: { organizationId: '1' } }
    }
  ]
};
