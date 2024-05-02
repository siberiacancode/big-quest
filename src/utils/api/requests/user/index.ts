import type { UserResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export type GetUserRequestConfig = RequestConfig | void;

export const getUser = async (requestConfig?: GetUserRequestConfig) =>
  api.get<UserResponse>('user', requestConfig?.config);

export type PutUserParams = Record<$TSFIXME, $TSFIXME>;

export type PutUserRequestConfig = RequestConfig<PutUserParams>;

export const putUser = async ({ params, config }: PutUserRequestConfig) =>
  api.put('user', params, config);
