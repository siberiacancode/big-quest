import { useMutation } from '@tanstack/react-query';

import type { PostChangesRequestConfig } from '../requests';
import { postChanges } from '../requests';

export const usePostChangesMutation = (
  settings?: MutationSettings<PostChangesRequestConfig, typeof postChanges>
) =>
  useMutation({
    mutationKey: ['postChanges'],
    mutationFn: ({ params, config }) =>
      postChanges({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
