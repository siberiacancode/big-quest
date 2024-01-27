import { useMutation } from '@tanstack/react-query';

import { postLoginEmail } from '../requests/login/email';

export const useLoginEmailMutation = (
  settings?: MutationSettings<LoginEmailCredentials, typeof postLoginEmail>
) =>
  useMutation({
    mutationKey: ['postLoginEmail'],
    mutationFn: (params) =>
      postLoginEmail({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
