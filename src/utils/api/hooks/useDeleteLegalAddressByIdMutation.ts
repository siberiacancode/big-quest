import { useMutation } from '@tanstack/react-query';

import type { DeleteLegalAddressByIdRequestConfig } from '../requests';
import { deleteLegalAddressById } from '../requests';

export const useDeleteLegalAddressByIdMutation = (
  settings?: MutationSettings<DeleteLegalAddressByIdRequestConfig, typeof deleteLegalAddressById>
) =>
  useMutation({
    mutationKey: ['deleteLegalAddressById'],
    mutationFn: ({ params, config }) =>
      deleteLegalAddressById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
