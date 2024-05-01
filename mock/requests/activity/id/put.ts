import type { RestRequestConfig } from 'mock-config-server';

export const putActivityById: RestRequestConfig = {
  path: '/activity/:id',
  method: 'put',
  routes: [
    {
      data: { message: 'success' },
      entities: {
        params: {
          id: {
            checkMode: 'exists'
          }
        },
        body: {
          organizationId: {
            checkMode: 'exists'
          }
        }
      }
    }
  ]
};
