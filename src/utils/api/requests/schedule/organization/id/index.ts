import { api } from '@/utils/api/instance';

interface GetScheduleOrganizationByIdParams {
  id: string;
}

export type GetScheduleOrganizationByIdRequestConfig =
  RequestConfig<GetScheduleOrganizationByIdParams>;

export const getScheduleOrganizationById = async ({
  params,
  config
}: GetScheduleOrganizationByIdRequestConfig) =>
  api.get<SchedulesResponse>(`schedule/organization/${params.id}`, config);
