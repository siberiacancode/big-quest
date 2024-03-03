import { useMutation } from '@tanstack/react-query';

import type {
  PostOrganizationAddActivityConfig,
  PostOrganizationEditActivityConfig
} from '@/utils/api';
import { postOrganizationAddActivity, postOrganizationEditActivity } from '@/utils/api';

export const usePostOrganizationActionActivityMutation = (
  settings?: MutationSettings<
    | (PostOrganizationAddActivityConfig & {
        action: 'add';
      })
    | (PostOrganizationEditActivityConfig & {
        action: 'edit';
      }),
    typeof postOrganizationAddActivity | typeof postOrganizationEditActivity
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationActionActivityMutation'],
    mutationFn: ({ params, action, config }) => {
      if (action === 'edit') {
        return postOrganizationEditActivity({
          params: { ...params, id: '1' },
          config: { ...settings?.config, ...config }
        });
      }

      if (action === 'add') {
        return postOrganizationAddActivity({ params, config: { ...settings?.config, ...config } });
      }

      throw new Error('Invalid action');
    },
    ...settings?.options
  });
