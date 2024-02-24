import type { RestRequestConfig } from 'mock-config-server';

export const putOrganizationConfig: RestRequestConfig = {
  path: '/organization',
  method: 'put',
  routes: [
    {
      data: { success: true }
    }
  ]
};
