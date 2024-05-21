import type { UserResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

interface GetUserByIdParams {
  id: string;
}

export type GetUserByIdRequestConfig = RequestConfig<GetUserByIdParams>;

export const getUserById = async ({ params, config }: GetUserByIdRequestConfig) =>
  api.get<UserResponse>(`user/${params.id}`, config);
