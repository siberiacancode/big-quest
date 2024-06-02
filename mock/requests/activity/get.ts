import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getActivities: RestRequestConfig = {
  path: '/activity',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { name, category } = request.query;

        let rows = DATABASE.ACTIVITY_LIST;

        if (typeof name === 'string') {
          rows = rows.filter((activity) =>
            activity.name.toLowerCase().includes(name.toLowerCase())
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
