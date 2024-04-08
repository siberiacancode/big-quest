import { useMutation } from '@tanstack/react-query';

import type { GetAuthNewCodeRequestConfig } from '../requests';
import { getAuthNewCode } from '../requests';

export const useGetAuthNewCodeMutation = (
  settings?: MutationSettings<GetAuthNewCodeRequestConfig, typeof getAuthNewCode>
) =>
  useMutation({
    mutationKey: ['getAuthNewCode'],
    mutationFn: ({ params, config }) =>
      getAuthNewCode({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
