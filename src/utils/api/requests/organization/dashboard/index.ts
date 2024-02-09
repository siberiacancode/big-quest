import { api } from '../../../instance';

export const getOrganizationDashboard = async ({ config }: RequestParams) =>
  api.get<DashBoardResponse>('organization/dashboard', config);
