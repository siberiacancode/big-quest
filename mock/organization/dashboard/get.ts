import type { RestRequestConfig } from 'mock-config-server';

export const getOrganizationDashboardConfig: RestRequestConfig = {
  path: '/organization/dashboard',
  method: 'get',
  routes: [
    {
      data: {
        partners: {
          total: 100,
          growthPerMonth: 50
        },
        sponsors: {
          total: 20,
          growthPerMonth: 10
        },
        applications: 120,
        negotiation: 10,
        tariffChange: 1
      }
    }
  ]
};
