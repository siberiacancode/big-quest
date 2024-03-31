import { api } from '@/utils/api/instance';

export interface GetActivityByIdParams {
  id: string | undefined;
}

export type GetActivityByIdConfig = RequestConfig<GetActivityByIdParams>;

export const getActivityById = async ({ params, config }: GetActivityByIdConfig) => {
  if (params.id) {
    return api.get<ActivityResponse>(`activity/${params.id}`, config);
  }
  return null;
};

interface PutActivityByIdParams {
  id: string;
}

export type PutActivityByIdConfig = RequestConfig<PutActivityByIdParams>;

export const putActivityById = async ({ params, config }: PutActivityByIdConfig) =>
  api.put(`activity/${params.id}`, params, config);
