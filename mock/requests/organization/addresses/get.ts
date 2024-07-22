import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getOrganizationAddressesConfig: RestRequestConfig = {
  path: '/organization/addresses',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const rows = DATABASE.ORGANIZATIONS_ADDRESSES;

        const limit = typeof request.query.limit === 'string' ? +request.query.limit : 10;
        const current = typeof request.query.current === 'string' ? +request.query.current : 1;

        return {
          pagination: {
            limit,
            current,
            count: rows.length
          },
          rows: rows.slice((current - 1) * limit, current * limit)
        };
      }
    }
  ]
};
