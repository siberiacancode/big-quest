import type { Pagination, ScheduleResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

// TODO - убрать типы когда бэк обновит
export interface ExtendedScheduleResponse extends ScheduleResponse {
  employeeNumber: string;
  start?: string;
}

export interface TempExtendedScheduleListResponse {
  pagination: Pagination;
  rows: ExtendedScheduleResponse[];
}

export interface GetScheduleByActivityIdParams {
  id: string;
}

export type GetScheduleByActivityIdRequestConfig = RequestConfig<GetScheduleByActivityIdParams>;

export const getScheduleByActivityId = async ({
  params: { id, ...params },
  config
}: GetScheduleByActivityIdRequestConfig) =>
  api.get<TempExtendedScheduleListResponse>(`schedule/${id}`, {
    ...config,
    params: { ...config?.params, ...params }
  });
