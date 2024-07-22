import { api } from '@/utils/api/instance';

interface GetOrganizationEmployeesParams {
  id: string;
}

export type GetOrganizationEmployeesRequestConfig = RequestConfig<GetOrganizationEmployeesParams>;

export const getOrganizationEmployees = async ({
  params,
  config
}: GetOrganizationEmployeesRequestConfig) =>
  api.get<$TSFIXME>(`/organization/${params.id}/employees`, config);
