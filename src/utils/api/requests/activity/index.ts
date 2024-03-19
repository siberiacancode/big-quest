import { api } from '@/utils/api/instance';

export type GetActivityConfig = RequestConfig | void;

export const getActivity = async (requestConfig?: GetActivityConfig) =>
  api.get<ActivityWithPaginationResponse>('activity', requestConfig?.config);

export type PostActivityParams = CreateActivityDto;
export type PostActivityConfig = RequestConfig<PostActivityParams>;

export const postActivity = async ({ params, config }: PostActivityConfig) =>
  api.post<ActivityResponse>('activity', params, config);
