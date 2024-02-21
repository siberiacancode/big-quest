import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddActivityParams } from '../requests/organization/addActivity';
import { postOrganizationAddActivity } from '../requests/organization/addActivity';

export const usePostOrganizationAddActivityMutation = (
  settings?: MutationSettings<PostOrganizationAddActivityParams, typeof postOrganizationAddActivity>
) =>
  useMutation({
    mutationKey: ['postOrganizationAddActivity'],
    mutationFn: (params) =>
      postOrganizationAddActivity({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
