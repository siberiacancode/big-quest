import { api } from '@/utils/api/instance';

export type PostOrganizationAddEmployeeParams = OrganizationEmployeeDto;

export type PostOrganizationAddEmployeeConfig = RequestConfig<PostOrganizationAddEmployeeParams>;

export const postOrganizationAddEmployee = async ({
  params,
  config
}: PostOrganizationAddEmployeeConfig) =>
  api.post(`organization/${params.organizationId}/addEmployee`, params, config);
