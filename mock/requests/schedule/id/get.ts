import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getScheduleByActivityIdConfig: RestRequestConfig = {
  path: '/schedule/:id',
  method: 'get',
  routes: [
    {
      entities: { params: { id: { checkMode: 'exists' } } },
      data: () => {
        return { rows: DATABASE.SCHEDULE };
      }
    }
  ]
};
