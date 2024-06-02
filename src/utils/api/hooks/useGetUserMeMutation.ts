import { useMutation } from '@tanstack/react-query';

import type { GetUserMeRequestConfig } from '../requests';
import { getUserMe } from '../requests';

export const useGetUserMeMutation = (
  settings?: MutationSettings<GetUserMeRequestConfig, typeof getUserMe>
) =>
  useMutation({
    mutationKey: ['getUserMe'],
    mutationFn: (requestConfig) =>
      getUserMe({ config: { ...settings?.config, ...requestConfig?.config } }),
    ...settings?.options
  });
