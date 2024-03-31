import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const postLegalAddressConfig: RestRequestConfig = {
  path: '/legal-address',
  method: 'post',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.ORGANIZATIONS.LEGAL_ADDRESSES.push({ id: Math.random(), ...request.body });
      return data;
    }
  },
  routes: [
    {
      data: true
    }
  ]
};
