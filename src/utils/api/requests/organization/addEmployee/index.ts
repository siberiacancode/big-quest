import { api } from '@/utils/api/instance';

export type PostOrganizationAddEmployeeParams = OrganizationEmployeeDto;

export const postOrganizationAddEmployee = async ({
  params,
  config
}: RequestParams<PostOrganizationAddEmployeeParams>) =>
  api.post(`organization/${params.organizationId}/addEmployee`, params, config);
