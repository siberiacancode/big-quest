import type { RestRequestConfig } from 'mock-config-server';

export const deleteFileById: RestRequestConfig = {
  path: '/file/:id',
  method: 'delete',
  routes: [
    {
      data: { message: 'success' }
    }
  ]
};
