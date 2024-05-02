import { useMutation } from '@tanstack/react-query';

import type { PostActivityRequestConfig, PutActivityByIdRequestConfig } from '@/utils/api';
import { postActivity, putActivityById } from '@/utils/api';

export const useActionActivityMutation = (
  settings?: MutationSettings<
    | (PostActivityRequestConfig & {
        action: 'add';
      })
    | (PutActivityByIdRequestConfig & {
        action: 'edit';
      }),
    typeof postActivity | typeof putActivityById
  >
) =>
  useMutation({
    mutationKey: ['actionActivityMutation'],
    mutationFn: ({ params, action, config }) => {
      if (action === 'edit') {
        return putActivityById({
          params,
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
