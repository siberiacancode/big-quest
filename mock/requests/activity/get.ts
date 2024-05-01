import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getActivities: RestRequestConfig = {
  path: '/activity',
  method: 'get',
  routes: [
    {
      data: (request) => ({
        rows: DATABASE.ACTIVITIES,
        pagination: {
          limit: request.query.limit ?? 10,
          current: request.query.current ?? 1,
          count: DATABASE.ACTIVITIES.length
        }
      })
    }
  ]
};
