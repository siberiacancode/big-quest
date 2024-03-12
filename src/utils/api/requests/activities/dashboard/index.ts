import { api } from '@/utils/api/instance';

export type GetActivitiesDashboardRequestConfig = RequestConfig | void;

export const getActivitiesDashboard = async (requestConfig?: GetActivitiesDashboardRequestConfig) =>
  api.get<ActivitiesDashBoardResponse>('activities/dashboard', requestConfig?.config);
