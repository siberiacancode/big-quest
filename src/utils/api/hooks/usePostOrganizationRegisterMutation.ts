import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationRegisterRequestConfig } from '../requests';
import { postOrganizationRegister } from '../requests';

export const usePostOrganizationRegisterMutation = (
  settings?: MutationSettings<
    PostOrganizationRegisterRequestConfig,
    typeof postOrganizationRegister
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationRegister'],
    mutationFn: ({ params, config }) =>
      postOrganizationRegister({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
