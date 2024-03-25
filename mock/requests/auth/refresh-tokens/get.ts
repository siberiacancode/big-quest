import type { RestRequestConfig } from 'mock-config-server';

import { COOKIES } from '@/utils/constants/cookies';

export const getAuthRefreshTokensConfig: RestRequestConfig = {
  path: '/auth/refresh-tokens',
  method: 'get',
  routes: [
    {
      data: null,
      interceptors: {
        response: (data, { request, setCookie, setStatusCode }) => {
          if (request.cookies[COOKIES.REFRESH_TOKEN] && request.cookies[COOKIES.ACCESS_TOKEN]) {
            setCookie(COOKIES.REFRESH_TOKEN, COOKIES.REFRESH_TOKEN, {
              httpOnly: true,
              maxAge: 360000,
              path: '/'
            });
            setCookie(COOKIES.ACCESS_TOKEN, COOKIES.ACCESS_TOKEN, {
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
