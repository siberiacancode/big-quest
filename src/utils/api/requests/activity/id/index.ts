import { api } from '@/utils/api/instance';

export interface GetActivityByIdParams {
  id: string | undefined;
}

export type GetActivityByIdRequestConfig = RequestConfig<GetActivityByIdParams>;

export const getActivityById = async ({ params, config }: GetActivityByIdRequestConfig) => {
  if (params.id) {
    return api.get<ActivityResponse>(`activity/${params.id}`, config);
  }
  return null;
};

interface PutActivityByIdParams {
  id: string;
}

export type PutActivityByIdRequestConfig = RequestConfig<PutActivityByIdParams>;

export const putActivityById = async ({ params, config }: PutActivityByIdRequestConfig) =>
  api.put(`activity/${params.id}`, params, config);
