import type { RestRequestConfig } from 'mock-config-server';

export const postActivityMediaById: RestRequestConfig = {
  path: '/activity/media/:id',
  method: 'post',
  routes: [
    {
      data: { message: 'success' },
      entities: { body: { id: '1' } }
    }
  ]
};
