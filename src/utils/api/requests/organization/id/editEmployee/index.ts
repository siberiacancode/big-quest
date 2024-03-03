import { api } from '@/utils/api/instance';

export type PostOrganizationEditEmployeeParams = OrganizationEmployeeDto;

export type PostOrganizationEditEmployeeConfig = RequestConfig<PostOrganizationEditEmployeeParams>;

export const postOrganizationEditEmployee = async ({
  params,
  config
}: PostOrganizationEditEmployeeConfig) =>
  api.put(`organization/${params.organizationId}/editEmployee`, params, config);
