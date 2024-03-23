import { api } from '@/utils/api/instance';

export interface GetActivityByIdParams {
  id: string;
}

export type GetActivityByIdConfig = RequestConfig<GetActivityByIdParams>;

export const getActivityById = async ({ params, config }: GetActivityByIdConfig) =>
  api.get<ActivityResponse>(`activity/${params.id}`, config);

interface PutActivityByIdParams {
  id: string;
}

export type PutActivityByIdConfig = RequestConfig<PutActivityByIdParams>;

export const putActivityById = async ({ params, config }: PutActivityByIdConfig) =>
  api.put(`activity/${params.id}`, params, config);
