import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const putLegalAddressByIdConfig: RestRequestConfig = {
  path: '/legal-address/:id',
  method: 'put',
  interceptors: {
    response: (_, { request }) => {
      DATABASE.ORGANIZATIONS.LEGAL_ADDRESSES = DATABASE.ORGANIZATIONS.LEGAL_ADDRESSES.map(
        (legalAddress) => {
          if (legalAddress.id === request.params.id) return request.body;
          return legalAddress;
        }
      );

      return request.body;
    }
  },
  routes: [
    {
      data: null
    }
  ]
};
