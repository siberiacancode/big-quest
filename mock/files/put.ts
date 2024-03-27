import type { RestRequestConfig } from 'mock-config-server';

export const putFilesById: RestRequestConfig = {
  path: '/files/:id',
  method: 'put',
  routes: [
    {
      data: { message: 'success' },
      entities: { body: { id: '1' } }
    }
  ]
};
