import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getCategories: RestRequestConfig = {
  path: '/category',
  method: 'get',
  routes: [
    {
      data: (request) => {
        return {
          pagination: {
            limit: request.query.limit ?? 10,
            current: request.query.current ?? 1,
            count: DATABASE.CATEGORIES.length
          },
          rows: DATABASE.CATEGORIES
        };
      }
    }
  ]
};
