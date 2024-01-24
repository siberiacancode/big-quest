import { api } from '@/utils/api/instance';

export const postLoginEmail = async ({ params, config }: RequestParams<LoginCredentials>) =>
  api.post<LoginResponse>('login/email', params, config);
