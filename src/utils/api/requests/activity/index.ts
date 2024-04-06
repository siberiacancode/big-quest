import { api } from '@/utils/api/instance';

export type GetActivitiesRequestConfig = RequestConfig | void;

export const getActivities = async (requestConfig?: GetActivitiesRequestConfig) =>
  api.get<ActivityWithPaginationResponse>('activity', requestConfig?.config);

export type PostActivityParams = CreateActivityDto;
export type PostActivityRequestConfig = RequestConfig<PostActivityParams>;

export const postActivity = async ({ params, config }: PostActivityRequestConfig) =>
  api.post<ActivityResponse>('activity', params, config);
