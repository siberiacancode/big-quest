import { api } from '@/utils/api/instance';

interface PutActivityByIdParams {
  id: string;
}

export type PutActivityByIdRequestConfig = RequestConfig<PutActivityByIdParams>;

export const putActivityById = async ({ params, config }: PutActivityByIdRequestConfig) =>
  api.put(`activity/${params.id}`, params, config);
