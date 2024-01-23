import type { RestRequestConfig } from 'mock-config-server';

import { COOKIE } from '@/utils/constants';

export const loginConfig: RestRequestConfig = {
  path: '/login/email',
  method: 'post',
  routes: [
    {
      data: { message: 'Неверный логин или пароль' },
      interceptors: {
        response: (data, params) => {
          console.log(params.request.body, data);

          params.setStatusCode(401);
          return data;
        }
      }
    },
    {
      data: { message: 'Неверный пароль' },
      entities: {
        body: {
          email: 'superadmin@mail.ru',
          password: {
            checkMode: 'exists'
          }
        }
      },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(400);

          return data;
        }
      }
    },
    {
      data: { accessToken: 'accessToken' },
      entities: {
        body: {
          email: 'superadmin@mail.ru',
          password: 'Pa$$w0rd'
        }
      },
      interceptors: {
        response: (data, { setCookie }) => {
          setCookie(COOKIE.REFRESH_TOKEN, 'refreshToken', {
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
