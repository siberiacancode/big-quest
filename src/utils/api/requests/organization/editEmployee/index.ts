import { api } from '@/utils/api/instance';

export type PostOrganizationEditEmployeeParams = OrganizationEmployeeDto;

export const postOrganizationEditEmployee = async ({
  params,
  config
}: RequestParams<PostOrganizationEditEmployeeParams>) =>
  api.put(`organization/${params.organizationId}/editEmployee`, params, config);
