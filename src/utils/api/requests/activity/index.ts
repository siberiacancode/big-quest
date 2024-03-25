import { api } from '@/utils/api/instance';

export type GetActivitiesConfig = RequestConfig | void;

export const getActivity = async (requestConfig?: GetActivitiesConfig) =>
  api.get<ActivityWithPaginationResponse>('activity', requestConfig?.config);

export type PostActivityParams = CreateActivityDto;
export type PostActivityConfig = RequestConfig<PostActivityParams>;

export const postActivity = async ({ params, config }: PostActivityConfig) =>
  api.post<ActivityResponse>('activity', params, config);
