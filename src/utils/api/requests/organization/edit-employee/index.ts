import { api } from '@/utils/api/instance';

export type PostOrganizationEditEmployeeParams = EditEmployeeDto;

export type PostOrganizationEditEmployeeConfig = RequestConfig<PostOrganizationEditEmployeeParams>;

export const postOrganizationEditEmployee = async ({
  params,
  config
}: PostOrganizationEditEmployeeConfig) => api.put(`organization/edit-employee`, params, config);
