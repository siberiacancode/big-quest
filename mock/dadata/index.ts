import type { RestRequestConfig } from 'mock-config-server';

export const dadataConfig: RestRequestConfig = {
  path: '/dadata',
  method: 'get',
  routes: [
    {
      data: [{ success: true }]
    }
  ]
};
