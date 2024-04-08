import type { RestRequestConfig } from 'mock-config-server';

export const postChangesConfig: RestRequestConfig = {
  path: '/changes',
  method: 'post',
  routes: [
    {
      data: {
        id: 'string',
        createdAt: '2024-03-28T01:17:21.037Z',
        author: {},
        criteria: 'string',
        old: {},
        new: {},
        action: 'string'
      }
    }
  ]
};
