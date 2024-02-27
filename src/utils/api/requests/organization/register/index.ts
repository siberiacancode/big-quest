import { api } from '@/utils/api/instance';

export type PostOrganizationRegisterParams = RegisterOrganizationDto;

export type PostOrganizationRegisterRequestConfig = RequestConfig<PostOrganizationRegisterParams>;

export const postOrganizationRegister = async ({
  params,
  config
}: PostOrganizationRegisterRequestConfig) => api.post('organization/register', params, config);
