import type { RestRequestConfig } from 'mock-config-server';

export const postActivity: RestRequestConfig = {
  path: '/activity',
  method: 'post',
  routes: [
    {
      data: {
        message: 'success'
      },
      entities: { body: { organizationId: '1' } }
    }
  ]
};
