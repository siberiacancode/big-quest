import type { ScheduleControllerGetSchedulesParams, ScheduleListResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export type GetSchedulesParams = ScheduleControllerGetSchedulesParams;

export type GetSchedulesRequestConfig = RequestConfig<GetSchedulesParams>;

export const getSchedules = async ({
  params: { organizationId, ...params },
  config
}: GetSchedulesRequestConfig) =>
  api.get<ScheduleListResponse>('schedules', {
    ...config,
    params: { ...config?.params, ...params }
  });
