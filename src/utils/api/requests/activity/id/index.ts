import { api } from '@/utils/api/instance';

interface PostActivityByIdParams {
  id: string;
}

export type PostActivityByIdConfig = RequestConfig<PostActivityByIdParams>;

export const postActivityById = async ({ params, config }: PostActivityByIdConfig) =>
  api.post(`activity/${params.id}`, params, config);
