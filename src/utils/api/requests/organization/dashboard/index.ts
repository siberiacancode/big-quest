import { api } from '../../../instance';

export const getOrganizationDashboard = async (params?: RequestConfig) =>
  api.get<DashBoardResponse>('organization/dashboard', params?.config);
