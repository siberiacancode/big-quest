import { api } from '@/utils/api/instance';

export interface GetActivityListParams {
  activity: string;
}

export type GetActivityListRequestConfig = RequestConfig<GetActivityListParams>;

export const getActivityList = async ({ params, config }: GetActivityListRequestConfig) =>
  api.get<$TSFIXME>('activity-list', {
    ...config,
    params: { ...config?.params, ...params }
  });
