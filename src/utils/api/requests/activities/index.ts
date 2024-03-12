import { api } from '../../instance';

export type GetActivitiesRequestConfig = RequestConfig | void;

export const getActivities = async (requestConfig?: GetActivitiesRequestConfig) =>
  api.get<ActvitiesPaginationResponse>('activities', requestConfig?.config);
