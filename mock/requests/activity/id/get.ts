import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getActivityById: RestRequestConfig = {
  path: '/activity/:id',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { id } = request.params;
        return DATABASE.ACTIVITIES.find((activity) => activity.id === id);
      },
      entities: {
        params: {
          id: {
            checkMode: 'exists'
          }
        }
      }
    }
  ]
};
