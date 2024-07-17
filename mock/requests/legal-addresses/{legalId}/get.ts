import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getLegalAddressesByLegalIdConfig: RestRequestConfig = {
  path: '/legal-addresses/:legalId',
  method: 'get',
  routes: [
    {
      data: () => DATABASE.ORGANIZATIONS.ADDRESSES
    }
  ]
};
