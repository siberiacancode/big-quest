import type { ScheduleControllerGetScheduleByOrganizationParams } from '@/api-types';
import { api } from '@/utils/api/instance';

interface GetScheduleByOrganizationIdParams
  extends ScheduleControllerGetScheduleByOrganizationParams {
  organizationId: string;
}

export type GetScheduleByOrganizationIdRequestConfig =
  RequestConfig<GetScheduleByOrganizationIdParams>;

export const getScheduleByOrganizationId = async ({
  params: { organizationId, ...params },
  config
}: GetScheduleByOrganizationIdRequestConfig) =>
  api.get<$TSFIXME>(`schedule/${organizationId}`, {
    ...config,
    params: { ...config?.params, ...params }
  });
