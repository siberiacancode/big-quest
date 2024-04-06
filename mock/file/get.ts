import type { RestRequestConfig } from 'mock-config-server';

export const getFileById: RestRequestConfig = {
  path: '/file/:id',
  method: 'get',
  routes: [
    {
      // почему-то не отрабатывает параметр file: '../',
      // надо сделать полуечние файла по id
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
            return 'здесь должен быть файл';
          }

          setStatusCode(401);
          return { message: 'Unauthorized' };
        }
      }
    }
  ]
};
