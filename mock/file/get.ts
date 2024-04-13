import type { RestRequestConfig } from 'mock-config-server';

import { FILES_DATABASE } from './constants/data';

export const getFileById: RestRequestConfig = {
  path: '/file/:id',
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
            const index = parseInt(id, 10) - 1; // Преобразуем id в индекс массива
            return FILES_DATABASE[index];
          }

          setStatusCode(401);
          return { message: 'Unauthorized' };
        }
      }
    }
  ]
};
