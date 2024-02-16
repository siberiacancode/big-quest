import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddAddressParams } from '../requests/organization/addAddress';
import { postOrganizationAddAddress } from '../requests/organization/addAddress';

export const usePostOrganizationAddAddressMutation = (
  settings?: MutationSettings<PostOrganizationAddAddressParams, typeof postOrganizationAddAddress>
) =>
  useMutation({
    mutationKey: ['postOrganizationAddAddress'],
    mutationFn: (params) =>
      postOrganizationAddAddress({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
