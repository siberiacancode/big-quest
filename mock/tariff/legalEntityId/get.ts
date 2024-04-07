import type { RestRequestConfig } from 'mock-config-server';

export const getTariffByLegalEntityIdConfig: RestRequestConfig = {
  path: '/tariff/:legalEntityId',
  method: 'get',
  interceptors: {
    response: (data, { request, setStatusCode }) => {
      if (request.cookies.refreshtoken && request.cookies.accessToken) {
        return data;
      }

      setStatusCode(401);
      return { message: 'Unauthorized' };
    }
  },
  routes: [
    {
      entities: {
        params: { legalEntityId: 1 }
      },
      data: {
        id: '1',
        freeActivity: 50,
        paidActivity: 1,
        freeActivityPrice: '1000',
        paidActivityPrice: '1200',
        maxPricePaidActivity: '500',
        freeActivityNuts: 10,
        paidActivityNuts: 10,
        totalPrice: '1000',
        discount: 0.2,
        createdAt: '2024-03-25T11:08:20.317Z',
        updatedAt: '2024-03-25T11:08:20.317Z',
        periodMonth: 0,
        dateStart: '2024-03-25T11:08:20.317Z',
        dateEnd: '2024-03-25T11:08:20.317Z',
        status: 'ACTIVE'
      }
    },
    {
      entities: {
        params: { legalEntityId: 2 }
      },
      data: {
        id: '2',
        freeActivity: 100,
        paidActivity: 90,
        freeActivityPrice: '1000',
        paidActivityPrice: '1200',
        maxPricePaidActivity: '500',
        freeActivityNuts: 10,
        paidActivityNuts: 10,
        totalPrice: '0',
        discount: 0,
        createdAt: '2024-03-25T11:08:20.317Z',
        updatedAt: '2024-03-25T11:08:20.317Z',
        periodMonth: 0,
        dateStart: '2024-03-25T11:08:20.317Z',
        dateEnd: null,
        status: 'ACTIVE'
      }
    }
  ]
};
