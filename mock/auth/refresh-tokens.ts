import type { RestRequestConfig } from 'mock-config-server';

import { COOKIE } from '@/utils/constants';

export const refreshTokensConfig: RestRequestConfig = {
  path: '/refresh-tokens',
  method: 'post',
  routes: [
    {
      data: { message: 'Неизвестный токен' },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(401);
          return data;
        }
      }
    },
    {
      data: {
        accessToken: 'accessToken2'
      },
      entities: {
        body: {
          token: 'refreshToken'
        }
      },
      interceptors: {
        response: (data, { setCookie }) => {
          setCookie(COOKIE.REFRESH_TOKEN, 'refreshToken2', {
            httpOnly: true,
            maxAge: 360000,
            path: '/'
          });

          return data;
        }
      }
    }
  ]
};
