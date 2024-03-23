import type { RestRequestConfig } from 'mock-config-server';

export const putActivityMediaById: RestRequestConfig = {
  path: '/activity/media/:id',
  method: 'put',
  routes: [
    {
      data: { message: 'success' },
      entities: { body: { id: '1' } }
    }
  ]
};
