'use server';

import { api } from '@/utils/api/instance';

export interface GetActivityPublicServerActionParams {
  limit?: number;
  current?: number;
  organizationId?: string;
  city?: string;
  category?: string;
  name?: string;
}

export type GetActivityPublicServerActionRequestConfig =
  RequestConfig<GetActivityPublicServerActionParams>;

export const getActivityPublicServerAction = async ({
  params,
  config
}: GetActivityPublicServerActionRequestConfig) =>
  api.get<ActivityWithPaginationResponse>('activity/public', {
    ...config,
    params: { ...config?.params, ...params }
  });
