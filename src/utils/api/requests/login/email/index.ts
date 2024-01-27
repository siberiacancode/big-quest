import { api } from '@/utils/api/instance';

export const postLoginEmail = async ({ params, config }: RequestParams<LoginEmailCredentials>) =>
  api.post('login/email', params, config);
