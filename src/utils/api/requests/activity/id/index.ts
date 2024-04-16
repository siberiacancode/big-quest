import { api } from '@/utils/api/instance';

interface PutActivityByIdParams {
  id: string;
}

interface GetActivityByIdParams {
  id: string;
}

export type PutActivityByIdRequestConfig = RequestConfig<PutActivityByIdParams>;
export type GetActivityByIdRequestConfig = RequestConfig<GetActivityByIdParams>;

export const putActivityById = async ({ params, config }: PutActivityByIdRequestConfig) =>
  api.put(`activity/${params.id}`, params, config);

export const getActivityById = async ({ params, config }: GetActivityByIdRequestConfig) =>
  api.get<ActivityResponse>(`activity/${params.id}`, config);
