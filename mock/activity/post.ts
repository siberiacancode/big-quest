import type { RestRequestConfig } from 'mock-config-server';

export const postOrganizationActivity: RestRequestConfig = {
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
