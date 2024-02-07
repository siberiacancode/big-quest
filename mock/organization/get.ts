import type { RestRequestConfig } from 'mock-config-server';

export const organizationGetConfig: RestRequestConfig = {
  path: '/organization',
  method: 'get',
  routes: [
    {
      data: [
        {
          rows: [
            {
              id: 1,
              name: 'Organization 1',
              stage: 'CONCLUSION',
              type: 'PARTNER',
              description: 'Описание'
            }
          ],
          pagination: { current: 5, count: 100, limit: 10 }
        }
      ]
    }
  ]
};
