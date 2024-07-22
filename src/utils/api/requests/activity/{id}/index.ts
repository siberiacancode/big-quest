import type { ActivityResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export interface GetActivityByIdParams {
  id: string;
}

export type GetActivityByIdRequestConfig = RequestConfig<GetActivityByIdParams>;

export const getActivityById = async ({
  params: { id, ...params },
  config
}: GetActivityByIdRequestConfig) =>
  api.get<ActivityResponse>(`activity/${id}`, {
    ...config,
    params: { ...config?.params, ...params }
  });

interface PutActivityByIdParams {
  id: string;
}

export type PutActivityByIdRequestConfig = RequestConfig<PutActivityByIdParams>;

export const putActivityById = async ({ params, config }: PutActivityByIdRequestConfig) =>
  api.put(`activity/${params.id}`, params, config);

interface DeleteActivityByIdParams {
  id: string;
}

export type DeleteActivityByIdRequestConfig = RequestConfig<DeleteActivityByIdParams>;

export const deleteActivityById = async ({
  params: { id, ...params },
  config
}: PutActivityByIdRequestConfig) =>
  api.delete(`activity/${id}`, {
    ...config,
    params: { ...config?.params, ...params }
  });
