import { api } from '@/utils/api/instance';

export type GetActivitiesDashboardRequestConfig = RequestConfig | void;

export const getActivitiesDashboard = async (requestConfig?: GetActivitiesDashboardRequestConfig) =>
  api.get<$TSFIXME>('activities/dashboard', requestConfig?.config);
