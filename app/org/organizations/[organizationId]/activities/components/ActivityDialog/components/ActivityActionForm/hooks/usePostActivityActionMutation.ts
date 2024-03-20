import { useMutation } from '@tanstack/react-query';

import type { PostActivityConfig, PutActivityByIdConfig } from '@/utils/api';
import { postActivity, putActivityById } from '@/utils/api';

export const usePostActivityActionMutation = (
  settings?: MutationSettings<
    | (PostActivityConfig & {
        action: 'add';
      })
    | (PutActivityByIdConfig & {
        action: 'edit';
      }),
    typeof postActivity | typeof putActivityById
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationActivityActionMutation'],
    mutationFn: ({ params, action, config }) => {
      if (action === 'edit') {
        return putActivityById({
          params: { ...params },
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
