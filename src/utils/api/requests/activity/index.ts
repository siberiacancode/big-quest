import { api } from '@/utils/api/instance';

export type GetActivityRequestConfig = RequestConfig | void;

export const getActivity = async (requestConfig?: GetActivityRequestConfig) =>
  api.get<ActivityWithPaginationResponse>('activity', requestConfig?.config);

export type PostActivityParams = CreateActivityDto;
export type PostActivityRequestConfig = RequestConfig<PostActivityParams>;

export const postActivity = async ({ params, config }: PostActivityRequestConfig) =>
  api.post<ActivityResponse>('activity', params, config);
