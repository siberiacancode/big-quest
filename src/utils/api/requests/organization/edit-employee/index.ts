import { api } from '@/utils/api/instance';

export type PutOrganizationEditEmployeeParams = EditEmployeeDto;

export type PutOrganizationEditEmployeeRequestConfig =
  RequestConfig<PutOrganizationEditEmployeeParams>;

export const putOrganizationEditEmployee = async ({
  params,
  config
}: PutOrganizationEditEmployeeRequestConfig) =>
  api.put('organization/edit-employee', params, config);
