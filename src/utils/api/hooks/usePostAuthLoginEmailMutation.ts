import { useMutation } from '@tanstack/react-query';

import type { PostAuthLoginEmailRequestConfig } from '../requests';
import { postAuthLoginEmail } from '../requests';

export const usePostAuthLoginEmailMutation = (
  settings?: MutationSettings<PostAuthLoginEmailRequestConfig, typeof postAuthLoginEmail>
) =>
  useMutation({
    mutationKey: ['postAuthLoginEmail'],
    mutationFn: ({ params, config }) =>
      postAuthLoginEmail({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
