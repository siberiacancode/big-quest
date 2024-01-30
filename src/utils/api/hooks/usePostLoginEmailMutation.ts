import { useMutation } from '@tanstack/react-query';

import type { PostLoginEmailParams } from '../requests/auth/login/email';
import { postLoginEmail } from '../requests/auth/login/email';

export const usePostLoginEmailMutation = (
  settings?: MutationSettings<PostLoginEmailParams, typeof postLoginEmail>
) =>
  useMutation({
    mutationKey: ['postLoginEmail'],
    mutationFn: (params) =>
      postLoginEmail({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
