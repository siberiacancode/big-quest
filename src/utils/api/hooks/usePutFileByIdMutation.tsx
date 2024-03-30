import { useMutation } from '@tanstack/react-query';

import type { PutFileByIdRequestConfig } from '../requests';
import { putFileById } from '../requests';

export const usePutFileByIdMutation = (
  settings?: MutationSettings<PutFileByIdRequestConfig, typeof putFileById>
) =>
  useMutation({
    mutationKey: ['putFileById'],
    mutationFn: ({ params, config }) =>
      putFileById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
