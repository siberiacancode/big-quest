import { api } from '@/utils/api/instance';

export type GetActivitiesTableRequestConfig = RequestConfig | void;

export const getActivitiesTable = async (requestConfig?: GetActivitiesTableRequestConfig) =>
  api.get<ActivitiesPaginationResponse>('activities', requestConfig?.config);
