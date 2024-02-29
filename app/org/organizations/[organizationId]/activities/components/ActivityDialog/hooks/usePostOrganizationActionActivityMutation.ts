import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddActivityConfig } from '@/utils/api';
import { postOrganizationAddActivity } from '@/utils/api';

export const usePostOrganizationActionActivityMutation = (
  settings?: MutationSettings<
    PostOrganizationAddActivityConfig & {
      action: 'add';
    },
    /* | (PostOrganizationEditActivityConfig & {
        action: 'edit';
      }) */ typeof postOrganizationAddActivity
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationActionActivityMutation'],
    mutationFn: ({ params, action, config }) => {
      /* if (action === 'edit') {
        return postOrganizationEditActivity({ params, config: { ...settings?.config, ...config } });
      }
*/
      if (action === 'add') {
        return postOrganizationAddActivity({ params, config: { ...settings?.config, ...config } });
      }

      throw new Error('Invalid action');
    },
    ...settings?.options
  });
