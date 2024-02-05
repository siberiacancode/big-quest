import { useMutation } from '@tanstack/react-query';

import type { PostAddOrganizationAddressParams } from '../requests/organization/addAddress';
import { postAddOrganizationAddress } from '../requests/organization/addAddress';

export const usePostAddOrganizationAddressMutation = (
  settings?: MutationSettings<PostAddOrganizationAddressParams, typeof postAddOrganizationAddress>
) =>
  useMutation({
    mutationKey: ['postAddOrganizationAddress'],
    mutationFn: (params) =>
      postAddOrganizationAddress({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
