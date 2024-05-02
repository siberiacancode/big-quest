import type {
  ActivityControllerGetPublicActivitysParams,
  ActivityWithPaginationResponse
} from '@/api-types';
import { api } from '@/utils/api/instance';

export type GetActivityPublicParams = ActivityControllerGetPublicActivitysParams;
export type GetActivityPublicRequestConfig =
  RequestConfig<ActivityControllerGetPublicActivitysParams>;

export const getActivityPublic = async ({ params, config }: GetActivityPublicRequestConfig) =>
  api.get<ActivityWithPaginationResponse>('activity/public', {
    ...config,
    params: { ...config?.params, ...params }
  });
