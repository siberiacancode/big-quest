import { useMutation } from '@tanstack/react-query';

import type { GetUserRequestConfig } from '../requests';
import { getUser } from '../requests';

export const useGetUserMutation = (
  settings?: MutationSettings<GetUserRequestConfig, typeof getUser>
) =>
  useMutation({
    mutationKey: ['getUser'],
    mutationFn: (requestConfig) =>
      getUser({ config: { ...settings?.config, ...requestConfig?.config } }),
    ...settings?.options
  });
