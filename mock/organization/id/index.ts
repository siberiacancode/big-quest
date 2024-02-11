import type { RestRequestConfig } from 'mock-config-server';

export const organizationByIdConfig: RestRequestConfig = {
  path: '/organization/:id',
  method: 'get',
  routes: [
    {
      data: {
        contactName: 'Ольга',
        phone: 79998887766,
        email: 'abcdefjh1@mail.ru',
        site: 'www.risovashki_nsk.ru',
        social: ['https://wa.me/me', 'https://t.me/me', 'https://vk.com/me'],
        background: '',
        avatar: '',
        locality: 'г. Новосибирск',
        id: '1',
        name: 'ООО Рисовашки',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore',
        legalInfo: {
          postAddress: 'Иванов Иван Иванович г. Москва ул. Ленина, д. 10, кв. 20 101000',
          fullNameOfTheLegalEntity: 'ООО “Рисовашки',
          legalAddress: 'ООО “Рисовашки”',
          inn: '563565286576',
          kpp: '543565286',
          ogrn: '1117746019885'
        },
        requisites: {
          bank: 'ПАО Сбербанк',
          bik: '044525225',
          checkingAccount: '111.22.333.4.5555.6666666'
        },
        stage: 'REQUEST',
        type: 'PARTNER'
      },
      entities: { params: { id: 1 } },
      interceptors: {
        response: (data, { request, setStatusCode }) => {
          if (request.cookies.refreshToken && request.cookies.accessToken) {
            return data;
          }
          return data;
          setStatusCode(401);
          return { message: 'Unauthorized' };
        }
      }
    }
  ]
};
