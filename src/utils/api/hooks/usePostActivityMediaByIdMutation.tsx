import { useMutation } from '@tanstack/react-query';

import type { PostActivityMediaByIdRequestConfig } from '../requests';
import { postActivityMediaById } from '../requests';

export const usePostActivityMediaByIdMutation = (
  settings?: MutationSettings<PostActivityMediaByIdRequestConfig, typeof postActivityMediaById>
) =>
  useMutation({
    mutationKey: ['postActivityMediaById'],
    mutationFn: ({ params, config }) =>
      postActivityMediaById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
