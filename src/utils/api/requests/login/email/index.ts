import { api } from '@/utils/api/instance';

export interface PostLoginEmailParams {
  email: string;
  password: string;
}

export const postLoginEmail = async ({ params, config }: RequestParams<PostLoginEmailParams>) =>
  api.post('login/email', params, config);
