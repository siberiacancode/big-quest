import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getLegalAddressByIdConfig: RestRequestConfig = {
  path: '/legal-address/:id',
  method: 'get',
  interceptors: {
    response: (_, { request }) =>
      DATABASE.ORGANIZATIONS.ADDRESSES.find((legalAddress) => legalAddress.id === request.params.id)
  },
  routes: [
    {
      data: null
    }
  ]
};
