import { api } from '@/utils/api/instance';

export type PostOrganizationRegisterParams = RegisterOrganizationDto;

export const postOrganizationRegister = async ({
  params,
  config
}: RequestParams<PostOrganizationRegisterParams>) =>
  api.post('organisation/register', params, config);
