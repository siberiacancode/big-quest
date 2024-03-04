import { useMutation } from '@tanstack/react-query';

import type { PostActivityByIdConfig, PostActivityConfig } from '@/utils/api';
import { postActivity, postActivityById } from '@/utils/api';

export const usePostActionActivityMutation = (
  settings?: MutationSettings<
    | (PostActivityConfig & {
        action: 'add';
      })
    | (PostActivityByIdConfig & {
        action: 'edit';
      }),
    typeof postActivity | typeof postActivityById
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationActionActivityMutation'],
    mutationFn: ({ params, action, config }) => {
      if (action === 'edit') {
        return postActivityById({
          params: { ...params, id: '1' },
          config: { ...settings?.config, ...config }
        });
      }

      if (action === 'add') {
        return postActivity({ params, config: { ...settings?.config, ...config } });
      }

      throw new Error('Invalid action');
    },
    ...settings?.options
  });
