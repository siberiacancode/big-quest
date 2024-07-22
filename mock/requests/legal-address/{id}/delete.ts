import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const deleteLegalAddressByIdConfig: RestRequestConfig = {
  path: '/legal-address/:id',
  method: 'delete',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.ORGANIZATIONS.ADDRESSES = DATABASE.ORGANIZATIONS.ADDRESSES.filter(
        (legalAddress) => legalAddress.id !== request.params.id
      );
      return data;
    }
  },
  routes: [
    {
      data: true
    }
  ]
};
