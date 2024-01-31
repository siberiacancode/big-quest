import { api } from '@/utils/api/instance';

export interface PostAuthLoginEmailParams {
  email: string;
  password: string;
}

export const postAuthLoginEmail = async ({
  params,
  config
}: RequestParams<PostAuthLoginEmailParams>) => api.post('auth/login/email', params, config);
