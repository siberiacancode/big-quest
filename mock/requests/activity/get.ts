import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getActivities: RestRequestConfig = {
  path: '/activity',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { query, category } = request.query;

        let rows = DATABASE.ACTIVITIES;

        if (typeof query === 'string') {
          rows = rows.filter((activity) =>
            activity.name.toLowerCase().includes(query.toLowerCase())
          );
        }

        if (typeof category === 'string') {
          rows = rows.filter((activity) =>
            activity.category.RU.toLowerCase().includes(category.toLowerCase())
          );
        }

        return {
          pagination: {
            limit: request.query.limit ?? 10,
            current: request.query.current ?? 1,
            count: rows.length
          },
          rows
        };
      }
    }
  ]
};
