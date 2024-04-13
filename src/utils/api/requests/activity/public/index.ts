import { api } from '@/utils/api/instance';

export interface GetActivityPublicParams {
  limit?: number;
  current?: number;
  organizationId?: string;
  city?: string;
  category?: string;
  name?: string;
}
export type GetActivityPublicRequestConfig = RequestConfig<GetActivityPublicParams>;

export const getActivityPublic = async (requestConfig?: GetActivityPublicRequestConfig) =>
  api.get<ActivityWithPaginationResponse>('activity/public', requestConfig?.config);
