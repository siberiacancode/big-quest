import { api } from '@/utils/api/instance';

export type PostOrganizationAddEmployeeParams = Record<$TSFIXME, $TSFIXME>;

export type PostOrganizationAddEmployeeRequestConfig =
  RequestConfig<PostOrganizationAddEmployeeParams>;

export const postOrganizationAddEmployee = async ({
  params,
  config
}: PostOrganizationAddEmployeeRequestConfig) =>
  api.post('organization/add-employee', params, config);
