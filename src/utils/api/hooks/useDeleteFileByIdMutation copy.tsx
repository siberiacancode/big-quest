import { useMutation } from '@tanstack/react-query';

import type { DeleteFileByIdRequestConfig } from '../requests';
import { deleteFileById } from '../requests';

export const useDeleteFileByIdMutation = (
  settings?: MutationSettings<DeleteFileByIdRequestConfig, typeof deleteFileById>
) =>
  useMutation({
    mutationKey: ['DeleteFileById'],
    mutationFn: ({ params, config }) =>
      deleteFileById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
