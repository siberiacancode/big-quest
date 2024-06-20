import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

export const getEmployeeConfig: RestRequestConfig = {
  path: '/changes',
  method: 'get',
  routes: [
    {
      data: (request) => {
        // TODO add name and position filters
        // const { name, position } = request.query;

        const rows = DATABASE.ORGANIZATIONS.EMPLOYEES;

        // TODO add name and position filters
        // if (typeof name === 'string') {
        //   rows = rows.filter((employee) =>
        //     (employee.firstName + employee.middleName + employee.lastName)
        //       .toLowerCase()
        //       .includes(name.toLowerCase())
        //   );
        // }

        // if (typeof position === 'string') {
        //   rows = rows.filter((employee) => employee.position === position);
        // }

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
