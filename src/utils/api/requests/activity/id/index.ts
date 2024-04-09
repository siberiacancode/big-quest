import { api } from '@/utils/api/instance';

interface PutActivityByIdParams {
  id: string;
}

export type PutActivityByIdConfig = RequestConfig<PutActivityByIdParams>;

export const putActivityById = async ({ params, config }: PutActivityByIdConfig) =>
  api.put(`activity/${params.id}`, params, config);

interface GetActivityByIdParams {
  id: string;
}

export type GetActivityByIdConfig = RequestConfig<GetActivityByIdParams>;

export const getActivityById = async ({ params, config }: GetActivityByIdConfig) =>
  api.get(`activity/${params.id}`, config);
