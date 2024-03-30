import { api } from '@/utils/api/instance';

interface PostActivityMediaByIdParams {
  id: string;
}

export type PostActivityMediaByIdRequestConfig = RequestConfig<PostActivityMediaByIdParams>;

export const postActivityMediaById = async ({
  params,
  config
}: PostActivityMediaByIdRequestConfig) => api.post(`activity/media/${params.id}`, params, config);
