import { api } from '@/utils/api/instance';

export type GetActivitiesRequestConfig = RequestConfig | void;

export const getActivities = async (requestConfig?: GetActivitiesRequestConfig) =>
  api.get<$TSFIXME>('activities', requestConfig?.config);
