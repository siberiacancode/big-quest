import { useMutation } from '@tanstack/react-query';

import type { GetUserRequestConfig } from '../requests';
import { getUserMe } from '../requests';

export const useGetUserMeMutation = (
  settings?: MutationSettings<GetUserRequestConfig, typeof getUserMe>
) =>
  useMutation({
    mutationKey: ['getUserMe'],
    mutationFn: (requestConfig) =>
      getUserMe({ config: { ...settings?.config, ...requestConfig?.config } }),
    ...settings?.options
  });
