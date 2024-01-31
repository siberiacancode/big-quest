import type { RestRequestConfig } from 'mock-config-server';

export const refreshTokensConfig: RestRequestConfig = {
  path: '/auth/refresh-tokens',
  method: 'get',
  routes: [
    {
      data: null,
      interceptors: {
        response: (data, { request, setCookie, setStatusCode }) => {
          if (request.cookies.refreshToken && request.cookies.accessToken) {
            setCookie('refreshToken', 'refreshToken', {
              httpOnly: true,
              maxAge: 360000,
              path: '/'
            });
            setCookie('accessToken', 'accessToken', {
              httpOnly: true,
              maxAge: 360000,
              path: '/'
            });
          } else {
            setStatusCode(401);
            return { message: 'Невалидный токен' };
          }

          return data;
        }
      }
    }
  ]
};
