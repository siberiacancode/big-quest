import { api } from '@/utils/api/instance';

export type GetActivityPublicRequestConfig = RequestConfig | void;

export const getActivityPublic = async (requestConfig?: GetActivityPublicRequestConfig) =>
  api.get<ActivityWithPaginationResponse>('activity/public', requestConfig?.config);
