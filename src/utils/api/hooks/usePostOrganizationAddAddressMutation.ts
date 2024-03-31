import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddAddressRequestConfig } from '../requests';
import { postOrganizationAddAddress } from '../requests';

export const usePostOrganizationAddAddressMutation = (
  settings?: MutationSettings<
    PostOrganizationAddAddressRequestConfig,
    typeof postOrganizationAddAddress
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationAddAddress'],
    mutationFn: ({ params, config }) =>
      postOrganizationAddAddress({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
