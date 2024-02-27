import { api } from '@/utils/api/instance';

export type PostOrganizationAddUserParams = OrganizationEmployeeDto;

export type PostOrganizationAddUserConfig = RequestConfig<PostOrganizationAddUserParams>;

export const postOrganizationAddUser = async ({ params, config }: PostOrganizationAddUserConfig) =>
  api.post(`organization/add-user`, params, config);
