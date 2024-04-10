import type { RestRequestConfig } from 'mock-config-server';

export const putOrganizationByIdConfig: RestRequestConfig = {
  path: '/organization/:id',
  method: 'put',
  routes: [
    {
      data: {
        locality: 'г. Новосибирск',
        name: 'ООО Рисовашки',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore',
        information: { contactName: 'asdas', phone: '+7 (999) 999-99-99', social: [] },
        requisites: {
          bank: 'ПАО Сбербанк',
          bik: '044525225',
          checkingAccount: '111.22.333.4.5555.6666666'
        },
        id: '1'
      }
    }
  ]
};
