import type { RestRequestConfig } from 'mock-config-server';

export const putTariffConfig: RestRequestConfig = {
  path: '/tariff',
  method: 'put',
  routes: [
    {
      data: {
        id: 'string',
        freeActivity: 0,
        paidActivity: 0,
        periodMonth: 1,
        freeActivityPrice: 0,
        paidActivityPrice: 0,
        maxPricePaidActivity: 0,
        freeActivityNuts: 0,
        paidActivityNuts: 0,
        totalPrice: 0,
        status: 'ACTIVE'
      }
    }
  ]
};
