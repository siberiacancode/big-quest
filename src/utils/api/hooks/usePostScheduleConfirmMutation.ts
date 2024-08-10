import { useMutation } from '@tanstack/react-query';

import type { PostScheduleConfirmRequestConfig } from '../requests';
import { postScheduleConfirm } from '../requests';

export const usePostScheduleConfirmMutation = (
  settings?: MutationSettings<PostScheduleConfirmRequestConfig, typeof postScheduleConfirm>
) =>
  useMutation({
    mutationKey: ['postScheduleConfirm'],
    mutationFn: ({ params, config }) =>
      postScheduleConfirm({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
