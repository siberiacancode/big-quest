import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddAddressRequestConfig } from '../requests/organization/{id}/addAddress';
import { postOrganizationAddAddress } from '../requests/organization/{id}/addAddress';

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
