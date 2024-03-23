import { api } from '@/utils/api/instance';

export interface GetActivityMediaByIdParams {
  id: string;
}

export type GetActivityMediaByIdConfig = RequestConfig<GetActivityMediaByIdParams>;

export const getActivityMediaById = async ({ params, config }: GetActivityMediaByIdConfig) =>
  api.get<MediaResponse[]>(`activity/media/${params.id}`, config);

interface PutActivityMediaByIdParams {
  id: string;
}

export type PutActivityMediaByIdConfig = RequestConfig<PutActivityMediaByIdParams>;

export const putActivityMediaById = async ({ params, config }: PutActivityMediaByIdConfig) =>
  api.put(`activity/media/${params.id}`, params, config);
