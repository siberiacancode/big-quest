import { api } from '@/utils/api/instance';

export type PostOrganizationAddEmployeeParams = AddEmployeeDto;

export type PostOrganizationAddEmployeeRequestConfig =
  RequestConfig<PostOrganizationAddEmployeeParams>;

export const postOrganizationAddEmployee = async ({
  params,
  config
}: PostOrganizationAddEmployeeRequestConfig) =>
  api.post('organization/add-employee', params, config);
