import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddAddressRequestConfig } from '../requests/organization/id/add-address';
import { postOrganizationAddAddress } from '../requests/organization/id/add-address';

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
