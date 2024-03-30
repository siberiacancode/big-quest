import type { RestRequestConfig } from 'mock-config-server';

export const putFileById: RestRequestConfig = {
  path: '/file/:id',
  method: 'put',
  routes: [
    {
      data: { message: 'success' },
      entities: { body: { id: '1' } }
    }
  ]
};
