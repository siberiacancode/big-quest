import type { RestRequestConfig } from 'mock-config-server';

export const putUserConfig: RestRequestConfig = {
  path: '/user',
  method: 'put',
  routes: [
    {
      data: { success: true }
    }
  ]
};
