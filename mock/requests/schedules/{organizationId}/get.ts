import { DATABASE } from 'mock/database';
import type { RestRequestConfig } from 'mock-config-server';

const DEFAULT_SCHEDULES_LIMIT = 10;
const DEFAULT_SCHEDULES_PAGE = 1;

export const getSchedulesByOrganizationId: RestRequestConfig = {
  path: '/schedules/:organizationId',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { dateStart, dateEnd } = request.query;

        let rows = DATABASE.SCHEDULES;

        if (typeof dateStart === 'string') {
          rows = rows.filter((schedule) => new Date(schedule.date) >= new Date(dateStart));
        }
        if (typeof dateEnd === 'string') {
          rows = rows.filter((schedule) => new Date(schedule.date) <= new Date(dateEnd));
        }

        const limit = request.query.limit ? Number(request.query.limit) : DEFAULT_SCHEDULES_LIMIT;
        const current = request.query.current
          ? Number(request.query.current)
          : DEFAULT_SCHEDULES_PAGE;

        rows = rows.slice((current - 1) * limit, current * limit);

        return {
          pagination: {
            current,
            limit,
            count: rows.length
          },
          rows
        };
      }
    }
  ]
};
