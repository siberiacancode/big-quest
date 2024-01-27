import type { RestRequestConfig } from 'mock-config-server';

export const loginEmailConfig: RestRequestConfig = {
  path: '/login/email',
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
          password: '22'
        }
      },
      interceptors: {
        response: (data, { setCookie }) => {
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
