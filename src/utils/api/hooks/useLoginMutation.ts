import { useMutation } from '@tanstack/react-query';

import { postLoginEmail } from '../requests/login/email';

export const useLoginMutation = (
  settings?: MutationSettings<LoginCredentials, typeof postLoginEmail>
) =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: (params) =>
      postLoginEmail({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
