import { api } from '@/utils/api/instance';

export type PostOrganizationAddEmployeeParams = AddEmployeeDto;

export type PostOrganizationAddEmployeeConfig = RequestConfig<PostOrganizationAddEmployeeParams>;

export const postOrganizationAddEmployee = async ({
  params,
  config
}: PostOrganizationAddEmployeeConfig) => api.post('organization/add-employee', params, config);
