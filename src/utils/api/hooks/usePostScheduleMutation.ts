import { useMutation } from '@tanstack/react-query';

import type { PostScheduleRequestConfig } from '../requests';
import { postSchedule } from '../requests';

export const usePostScheduleMutation = (
  settings?: MutationSettings<PostScheduleRequestConfig, typeof postSchedule>
) =>
  useMutation({
    mutationKey: ['PostSchedule'],
    mutationFn: ({ params, config }) =>
      postSchedule({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
