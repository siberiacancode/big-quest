import { api } from '@/utils/api/instance';

interface UserProfileResponse {
  id: string;
  birthdate: string;
  userId: string;
  name: string;
  surname: string;
  code: string;
  avatar: string;
}

export type GetUserProfileRequestConfig = RequestConfig | void;

export const getUserProfile = async (requestConfig?: GetUserProfileRequestConfig) =>
  api.get<UserProfileResponse>('user/profile', requestConfig?.config);
