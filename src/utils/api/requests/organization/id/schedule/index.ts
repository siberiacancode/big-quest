import { api } from '@/utils/api/instance';

interface GetOrganizationScheduleParams {
  id: string;
}

export type GetOrganizationScheduleRequestConfig = RequestConfig<GetOrganizationScheduleParams>;

export const getOrganizationSchedule = async ({
  params,
  config
}: GetOrganizationScheduleRequestConfig) =>
  api.get<OrganizationScheduleListPaginationResponse>(`organization/${params.id}/schedule`, config);
