import { useMutation } from '@tanstack/react-query';

import type { PostAuthLoginEmailRequestConfig } from '../requests/auth/login/email';
import { postAuthLoginEmail } from '../requests/auth/login/email';

export const usePostAuthLoginEmailMutation = (
  settings?: MutationSettings<PostAuthLoginEmailRequestConfig, typeof postAuthLoginEmail>
) =>
  useMutation({
    mutationKey: ['postAuthLoginEmail'],
    mutationFn: ({ params, config }) =>
      postAuthLoginEmail({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
