import type { ScheduleListResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export interface GetScheduleByActivityIdParams {
  id: string;
}

export type GetScheduleByActivityIdRequestConfig = RequestConfig<GetScheduleByActivityIdParams>;

export const getScheduleByActivityId = async ({
  params: { id, ...params },
  config
}: GetScheduleByActivityIdRequestConfig) =>
  api.get<ScheduleListResponse>(`schedule/${id}`, {
    ...config,
    params: { ...config?.params, ...params }
  });
