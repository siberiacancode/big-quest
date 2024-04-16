import { useMutation } from '@tanstack/react-query';

import type { PutActivityByIdRequestConfig } from '../requests';
import { putActivityById } from '../requests';

export const usePutActivityByIdMutation = (
  settings?: MutationSettings<PutActivityByIdRequestConfig, typeof putActivityById>
) =>
  useMutation({
    mutationKey: ['putActivityById'],
    mutationFn: ({ params, config }) =>
      putActivityById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
