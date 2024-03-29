import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddScheduleRequestConfig } from '../requests/organization/id/add-schedule';
import { postOrganizationAddSchedule } from '../requests/organization/id/add-schedule';

export const usePostOrganizationAddScheduleMutation = (
  settings?: MutationSettings<
    PostOrganizationAddScheduleRequestConfig,
    typeof postOrganizationAddSchedule
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationAddSchedule'],
    mutationFn: ({ params, config }) =>
      postOrganizationAddSchedule({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
