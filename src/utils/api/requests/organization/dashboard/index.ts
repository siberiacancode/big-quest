import { api } from '../../../instance';

export const getOrganizationDashboard = async (params?: RequestParams) =>
  api.get<DashBoardResponse>('organization/dashboard', params?.config);
