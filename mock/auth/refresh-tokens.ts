import type { RestRequestConfig } from 'mock-config-server';

export const refreshTokensConfig: RestRequestConfig = {
  path: '/refresh-tokens',
  method: 'post',
  routes: [
    {
      data: null,
      interceptors: {
        response: (data, { request, setCookie, setStatusCode }) => {
          if (
            request.cookies.refreshToken &&
            request.cookies.accessToken &&
            request.headers.authorization === `Bearer ${request.cookies.accessToken}`
          ) {
            setCookie('refreshToken', 'refreshToken2', {
              httpOnly: true,
              maxAge: 360000,
              path: '/'
            });
            setCookie('accessToken', 'accessToken2', {
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
