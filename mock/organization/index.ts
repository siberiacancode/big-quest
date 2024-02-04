import type { RestRequestConfig } from 'mock-config-server';

export const organizationByIdConfig: RestRequestConfig = {
  path: '/organization/1',
  method: 'get',
  routes: [
    {
      data: {
        id: '1',
        name: 'ООО Рисовашки',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore',
        inn: '563565286576',
        information: {
          contactName: 'Ольга',
          phone: '+ 7 (999)000-11-22',
          email: 'abcdefjh1@mail.ru',
          site: 'www.risovashki_nsk.ru',
          city: 'г. Новосибирск',
          social: 'string',
          fullNameOfTheLegalEntity: 'ООО “Рисовашки”',
          legalAddress: ' ООО “Рисовашки”',
          postAggress: 'Иванов Иван Иванович г. Москва ул. Ленина, д. 10, кв. 20 101000',
          inn: '563565286576',
          kpp: '543565286',
          ogrn: '1117746019885'
        },
        addresses: [
          {
            locality: 'г. Новосибирск',
            street: 'ул. Некрасова',
            house: '36',
            details: '3 этаж, вход с ТЦ ',
            workingHours: [null]
          }
        ],
        requisites: {
          bank: 'ПАО Сбербанк',
          bik: '044525225',
          checkingAccount: '111.22.333.4.5555.6666666'
        },
        stage: 'REQUEST',
        type: 'PARTNER',
        createdAt: 'PARTNER',
        updatedAt: 'PARTNER'
      },
      interceptors: {
        response: (data, { request, setStatusCode }) => {
          if (
            request.path.includes('/1') &&
            request.cookies.refreshToken &&
            request.cookies.accessToken
          ) {
            return data;
          }
          setStatusCode(404);
          return { message: 'Не удалось найти организацию по ID = 1' };
        }
      }
    }
  ]
};
