import { useMutation } from '@tanstack/react-query';

import type { PostLegalAddressRequestConfig, PutLegalAddressByIdRequestConfig } from '@/utils/api';
import { postLegalAddress, putLegalAddressById } from '@/utils/api';

export const useOrganizationActionAddressMutation = (
  settings?: MutationSettings<
    | (PostLegalAddressRequestConfig & {
        action: 'add';
      })
    | (PutLegalAddressByIdRequestConfig & {
        action: 'edit';
      }),
    typeof postLegalAddress | typeof putLegalAddressById
  >
) =>
  useMutation({
    mutationKey: ['organizationActionAddressMutation'],
    mutationFn: ({ params, action, config }) => {
      if (action === 'add') {
        return postLegalAddress({ params, config: { ...settings?.config, ...config } });
      }

      if (action === 'edit') {
        return putLegalAddressById({ params, config: { ...settings?.config, ...config } });
      }

      throw new Error('Invalid action');
    },
    ...settings?.options
  });
