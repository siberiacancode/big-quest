import type { RestRequestConfig } from 'mock-config-server';

import { ACTIVITIES_DATABASE } from './constants/data';

export const getActivities: RestRequestConfig = {
  path: '/activity',
  method: 'get',
  routes: [
    {
      data: {
        rows: ACTIVITIES_DATABASE,
        pagination: { current: 1, limit: 10, organizationId: 1 }
      }
    }
  ]
};
