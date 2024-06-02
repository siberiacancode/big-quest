import type { RestRequestConfig } from 'mock-config-server';

export const postFile: RestRequestConfig = {
  path: '/file',
  method: 'post',
  routes: [
    {
      data: '1'
    }
  ]
};
