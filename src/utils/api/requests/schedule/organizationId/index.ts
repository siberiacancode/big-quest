import type {
  ScheduleControllerGetScheduleByOrganizationParams,
  ScheduleListResponse
} from '@/api-types';
import { api } from '@/utils/api/instance';

interface GetSchedulesByOrganizationIdParams
  extends ScheduleControllerGetScheduleByOrganizationParams {
  organizationId: string;
}

export type GetSchedulesByOrganizationIdRequestConfig =
  RequestConfig<GetSchedulesByOrganizationIdParams>;

export const getSchedulesByOrganizationId = async ({
  params: { organizationId, ...params },
  config
}: GetSchedulesByOrganizationIdRequestConfig) =>
  api.get<ScheduleListResponse>(`schedules/${organizationId}`, {
    ...config,
    params: { ...config?.params, ...params }
  });
