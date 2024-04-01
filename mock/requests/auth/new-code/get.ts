import type { RestRequestConfig } from 'mock-config-server';

export const getAuthNewCodeConfig: RestRequestConfig = {
  path: '/auth/new-code/:email',
  method: 'get',
  routes: [
    {
      data: { success: true }
    }
  ]
};
