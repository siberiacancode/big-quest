import type {
  ActivityControllerGetPublicActivitysParams,
  ActivityResponse,
  ActivityWithPaginationResponse,
  CreateActivityDto
} from '@/api-types';
import { api } from '@/utils/api/instance';

export type GetActivityParams = ActivityControllerGetPublicActivitysParams;
export type GetActivityRequestConfig = RequestConfig<GetActivityParams>;

export const getActivity = async ({ params, config }: GetActivityRequestConfig) =>
  api.get<ActivityWithPaginationResponse>('activity', {
    ...config,
    params: { ...config?.params, ...params }
  });

export type PostActivityParams = CreateActivityDto;
export type PostActivityRequestConfig = RequestConfig<PostActivityParams>;

export const postActivity = async ({ params, config }: PostActivityRequestConfig) =>
  api.post<ActivityResponse>('activity', params, config);
