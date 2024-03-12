import type { RestRequestConfig } from 'mock-config-server';

export const getActivityDashboardConfig: RestRequestConfig = {
  path: '/activities/dashboard',
  method: 'get',
  routes: [
    {
      data: {
        total: {
          total: 740,
          growthPerMonth: 10
        },
        active: {
          total: 560,
          growthPerMonth: 180
        },
        moderation: 26,
        draft: 10,
        edit: 13
      }
    }
  ]
};
