import { api } from '@/utils/api/instance';

export type GetUserProfileRequestConfig = RequestConfig | void;

export const getUserProfile = async (requestConfig?: GetUserProfileRequestConfig) =>
  api.get<UserProfileResponse>('user/profile', requestConfig?.config);
