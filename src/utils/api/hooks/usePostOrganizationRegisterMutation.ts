import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationRegisterParams } from '../requests';
import { postOrganizationRegister } from '../requests';

export const usePostOrganizationRegisterMutation = (
  settings?: MutationSettings<PostOrganizationRegisterParams, typeof postOrganizationRegister>
) =>
  useMutation({
    mutationKey: ['postOrganizationRegister'],
    mutationFn: (params) =>
      postOrganizationRegister({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
