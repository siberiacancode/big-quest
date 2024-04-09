import { useMutation } from '@tanstack/react-query';

import type { PutUserRequestConfig } from '@/utils/api';
import { putUser } from '@/utils/api';

export const usePutUserMutation = (
  settings?: MutationSettings<PutUserRequestConfig, typeof putUser>
) =>
  useMutation({
    mutationKey: ['putUserMutation'],
    mutationFn: ({ params, config }) => {
      putUser({ params, config: { ...settings?.config, ...config } });

      throw new Error('Invalid action');
    },
    ...settings?.options
  });
