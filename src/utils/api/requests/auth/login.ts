import { api } from '../../instance';

export const postLogin = async ({ params, config }: RequestParams<LoginCredentials>) =>
  api.post<LoginResponse>('login/email', params, config);
