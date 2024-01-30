import { useMutation } from '@tanstack/react-query';

import type { PostAuthLoginEmailParams } from '../requests';
import { postAuthLoginEmail } from '../requests';

export const usePostAuthLoginEmailMutation = (
  settings?: MutationSettings<PostAuthLoginEmailParams, typeof postAuthLoginEmail>
) =>
  useMutation({
    mutationKey: ['postAuthLoginEmail'],
    mutationFn: (params) =>
      postAuthLoginEmail({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
