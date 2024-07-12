import { useMutation } from '@tanstack/react-query';

import type { PutLegalAddressByIdRequestConfig } from '../requests';
import { putLegalAddressById } from '../requests';

export const usePutLegalAddressByIdMutation = (
  settings?: MutationSettings<PutLegalAddressByIdRequestConfig, typeof putLegalAddressById>
) =>
  useMutation({
    mutationKey: ['putLegalAddressById'],
    mutationFn: ({ params, config }) =>
      putLegalAddressById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
