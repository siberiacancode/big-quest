import type { UserResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export type GetUserMeRequestConfig = RequestConfig | void;

export const getUserMe = async (requestConfig?: GetUserMeRequestConfig) =>
  api.get<UserResponse>('user/me', requestConfig?.config);
