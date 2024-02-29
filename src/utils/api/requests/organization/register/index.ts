import { api } from '@/utils/api/instance';

export type PostOrganizationRegisterParams = RegisterOrganizationDto;

export const postOrganizationRegister = async ({
  params,
  config
}: RequestConfig<PostOrganizationRegisterParams>) =>
  api.post('organization/register', params, config);
