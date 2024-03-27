import { useMutation } from '@tanstack/react-query';

import type { PutFilesByIdRequestConfig } from '../requests';
import { putFilesById } from '../requests';

export const usePutFilesByIdMutation = (
  settings?: MutationSettings<PutFilesByIdRequestConfig, typeof putFilesById>
) =>
  useMutation({
    mutationKey: ['putFilesById'],
    mutationFn: ({ params, config }) =>
      putFilesById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
