import { useMutation } from '@tanstack/react-query';

import type { PostFileRequestConfig } from '../requests';
import { postFile } from '../requests';

export const usePostFileMutation = (
  settings?: MutationSettings<PostFileRequestConfig, typeof postFile>
) =>
  useMutation({
    mutationKey: ['postFile'],
    mutationFn: ({ params, config }) =>
      postFile({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
