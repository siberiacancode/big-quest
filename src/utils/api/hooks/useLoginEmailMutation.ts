import { useMutation } from '@tanstack/react-query';

import { PostLoginEmailParams, postLoginEmail } from '../requests/login/email';

export const useLoginEmailMutation = (
  settings?: MutationSettings<PostLoginEmailParams, typeof postLoginEmail>
) =>
  useMutation({
    mutationKey: ['postLoginEmail'],
    mutationFn: (params) =>
      postLoginEmail({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
