import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getCategories: RestRequestConfig = {
  path: '/category',
  method: 'get',
  routes: [
    {
      data: () => DATABASE.CATEGORIES
    }
  ]
};
