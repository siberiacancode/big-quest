import type { RestRequestConfig } from 'mock-config-server';

import { COOKIES } from '@/utils/constants/cookies';

export const getOrganizationByIdConfig: RestRequestConfig = {
  path: '/organization/:id',
  method: 'get',
  interceptors: {
    response: (data, { request, setStatusCode }) => {
      if (request.cookies[COOKIES.SESSION_ID]) {
        return data;
      }

      setStatusCode(401);
      return { message: 'Unauthorized' };
    }
  },
  routes: [
    {
      entities: { params: { id: 1 } },

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
        information: {
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
          checkingAccount: '00055165739881705595'
        },
        stage: 'REQUEST',
        type: 'PARTNER'
      }
    },
    {
      entities: { params: { id: 2 } },
      data: {
        contactName: 'Ольга',
        phone: 79998887766,
        email: 'abcdefjh1@mail.ru',
        site: 'www.risovashki_nsk.ru',
        social: ['https://wa.me/me', 'https://t.me/me', 'https://vk.com/me'],
        background: '',
        avatar: '',
        locality: 'г. Новосибирск',
        id: '2',
        name: 'ООО Рисовашки',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore',
        information: {
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
          checkingAccount: '00055165739881705595'
        },
        stage: 'REQUEST',
        type: 'PARTNER'
      }
    }
  ]
};
