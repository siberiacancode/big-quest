import type { ConfirmParticipationDto, ConfirmParticipationResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export type PostScheduleConfirmParams = ConfirmParticipationDto;
export type PostScheduleConfirmRequestConfig = RequestConfig<PostScheduleConfirmParams>;

export const postScheduleConfirm = async ({ params, config }: PostScheduleConfirmRequestConfig) =>
  api.post<ConfirmParticipationResponse>('schedule/confirm', params, config);
