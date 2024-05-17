import type { CreateScheduleDto } from '@/api-types';
import { api } from '@/utils/api/instance';

export type PostScheduleParams = CreateScheduleDto;
export type PostScheduleRequestConfig = RequestConfig<PostScheduleParams>;

export const postSchedule = async ({ params, config }: PostScheduleRequestConfig) =>
  api.post('schedule', params, config);
