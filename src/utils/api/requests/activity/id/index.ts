import { api } from '@/utils/api/instance';

interface PutActivityByIdParams {
  id: string;
}

export type PutActivityByIdConfig = RequestConfig<PutActivityByIdParams>;

export const putActivityById = async ({ params, config }: PutActivityByIdConfig) =>
  api.put(`activity/${params.id}`, params, config);
