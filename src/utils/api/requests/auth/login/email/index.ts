import type { LoginEmailDto, LoginResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export type PostAuthLoginEmailParams = LoginEmailDto;
export type PostAuthLoginEmailRequestConfig = RequestConfig<PostAuthLoginEmailParams>;

export const postAuthLoginEmail = async ({ params, config }: PostAuthLoginEmailRequestConfig) =>
  api.post<LoginResponse>('auth/login/email', params, config);
