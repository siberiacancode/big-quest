import { api } from '@/utils/api/instance';

export type PostAuthLoginEmailParams = LoginEmailDto;

export const postAuthLoginEmail = async ({
  params,
  config
}: RequestConfig<PostAuthLoginEmailParams>) => api.post('auth/login/email', params, config);
