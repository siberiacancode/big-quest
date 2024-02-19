import { api } from '@/utils/api/instance';

interface GetOrganizationEmployeesParams {
  id: string;
}

export const getOrganizationEmployees = async ({
  params,
  config
}: RequestParams<GetOrganizationEmployeesParams>) =>
  api.get<EmployeeDto[]>(`/organization/${params.id}/employees`, config);
