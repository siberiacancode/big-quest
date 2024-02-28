import { api } from '@/utils/api/instance';

export type PostOrganizationAddUserParams = OrganizationEmployeeDto;

export type PostOrganizationAddUserConfig = {
  params: OrganizationEmployeeDto;
  config?: RequestOptions;
};

export const postOrganizationAddUser = async ({ params, config }: PostOrganizationAddUserConfig) =>
  api.post(`organization/add-user`, params, config);
