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
          setCookie(COOKIES.SESSION_ID, 'superadmin', {
            httpOnly: true,
            maxAge: 36000000,
            path: '/'
          });

          return data;
        }
      }
    },
    {
      data: {},
      entities: {
        body: {
          email: 'partner@mail.ru',
          password: '123456'
        }
      },
      interceptors: {
        response: (data, { setCookie }) => {
          setCookie(COOKIES.SESSION_ID, 'partner', {
            httpOnly: true,
            maxAge: 36000000,
            path: '/'
          });

          return data;
        }
      }
    }
  ]
};
