import type { RestRequestConfig } from 'mock-config-server';

export const postOrganizationRegister: RestRequestConfig = {
  path: '/organization/register',
  method: 'post',
  routes: [
    {
      data: { success: true }
    }
  ]
};
