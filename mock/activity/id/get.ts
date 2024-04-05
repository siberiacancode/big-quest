import type { RestRequestConfig } from 'mock-config-server';

import { ACTIVITIES_DATABASE } from '../constants/data';

export const getActivityById: RestRequestConfig = {
  path: '/activity/:id',
  method: 'get',
  routes: [
    {
      data: {},
      entities: {
        params: {
          id: {
            checkMode: 'exists'
          }
        }
      },
      interceptors: {
        response: (_, { request, setStatusCode }) => {
          if (request.cookies.refreshToken && request.cookies.accessToken) {
            const { id } = request.params;
            return ACTIVITIES_DATABASE.find((activity) => activity.id === id);
          }

          setStatusCode(401);
          return { message: 'Unauthorized' };
        }
      }
    }
  ]
};
