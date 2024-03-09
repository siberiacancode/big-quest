import { useMutation } from '@tanstack/react-query';

import type { PostAuthLoginEmailParams } from '../requests/auth/login/email';
import { postAuthLoginEmail } from '../requests/auth/login/email';

export const usePostAuthLoginEmailMutation = (
  settings?: MutationSettings<PostAuthLoginEmailParams, typeof postAuthLoginEmail>
) =>
  useMutation({
    mutationKey: ['postAuthLoginEmail'],
    mutationFn: (params) =>
      postAuthLoginEmail({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
