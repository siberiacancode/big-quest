import type { RestRequestConfig } from 'mock-config-server';

import { COOKIES } from '@/utils/constants/cookies';

export const postAuthLoginEmailConfig: RestRequestConfig = {
  path: '/auth/login/email',
  method: 'post',
  routes: [
    {
      data: { message: 'Неверный логин или пароль' },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(401);
          return data;
        }
      }
    },
    {
      data: {},
      entities: {
        body: {
          email: 'superadmin@mail.ru',
          password: '123456'
        }
      },
      interceptors: {
        response: (data, { setCookie }) => {
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
    }
  ]
};
