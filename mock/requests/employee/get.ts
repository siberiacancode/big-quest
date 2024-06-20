import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getEmployeeConfig: RestRequestConfig = {
  path: '/employee',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { search, position } = request.query;

        let rows = DATABASE.ORGANIZATIONS.EMPLOYEES;

        if (typeof search === 'string') {
          rows = rows.filter((employee) =>
            (employee.firstName + employee.middleName + employee.lastName)
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        }

        if (typeof position === 'string') {
          rows = rows.filter((employee) => employee.position === position);
        }

        return {
          pagination: {
            limit: request.query.limit ?? 10,
            current: request.query.current ?? 1,
            count: rows.length
          },
          rows
        };
      }
    }
  ]
};
