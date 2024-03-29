import { api } from '@/utils/api/instance';

export type PostOrganizationAddScheduleParams = OrganizationScheduleDto;
export type PostOrganizationAddScheduleRequestConfig =
  RequestConfig<PostOrganizationAddScheduleParams>;

export const postOrganizationAddSchedule = async ({
  params: { organizationId, ...params },
  config
}: PostOrganizationAddScheduleRequestConfig) =>
  api.post(`organization/${organizationId}/add-schedule`, params, config);
