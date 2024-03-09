import { api } from '../../../instance';

export type GetUserRequestConfig = RequestConfig | void;

export const getUserMe = async (requestConfig?: GetUserRequestConfig) =>
  api.get<UserResponse>('user/me', requestConfig?.config);
