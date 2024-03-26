import { api } from '@/utils/api/instance';

export type PostOrganizationEditEmployeeParams = EditEmployeeDto;

export type PostOrganizationEditEmployeeRequestConfig =
  RequestConfig<PostOrganizationEditEmployeeParams>;

export const postOrganizationEditEmployee = async ({
  params,
  config
}: PostOrganizationEditEmployeeRequestConfig) =>
  api.put('organization/edit-employee', params, config);
