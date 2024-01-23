import { useMutation } from '@tanstack/react-query';

import { postLogin } from '../requests/auth/login';

export const useLoginMutation = (settings?: MutationSettings<typeof postLogin>) =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: (credentials) => postLogin({ params: credentials, config: settings?.config }),
    ...settings?.options
  });
