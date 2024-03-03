import type { RestRequestConfig } from 'mock-config-server';

export const postOrganizationByIdActivity: RestRequestConfig = {
  path: '/activity/1',
  method: 'post',
  routes: [
    {
      data: { message: 'success' },
      entities: { body: { organizationId: '1' } }
    }
  ]
};
