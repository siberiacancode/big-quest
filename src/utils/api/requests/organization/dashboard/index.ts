import { api } from '@/utils/api/instance';

export type GetOrganizationDashboardRequestConfig = RequestConfig | void;

export const getOrganizationDashboard = async (
  requestConfig?: GetOrganizationDashboardRequestConfig
) => api.get<DashBoardResponse>('organization/dashboard', requestConfig?.config);
