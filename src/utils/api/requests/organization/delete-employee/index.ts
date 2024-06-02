import { api } from '@/utils/api/instance';

export type DeleteOrganizationDeleteEmployeeParams = Record<$TSFIXME, $TSFIXME>;

export type DeleteOrganizationDeleteEmployeeRequestConfig =
  RequestConfig<DeleteOrganizationDeleteEmployeeParams>;

export const deleteOrganizationDeleteEmployee = async ({
  params,
  config
}: DeleteOrganizationDeleteEmployeeRequestConfig) =>
  api.delete(`organization/delete-employee/${params.id}`, config);
