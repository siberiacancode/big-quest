import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationRegisterRequestConfig } from '../requests/organization/register';
import { postOrganizationRegister } from '../requests/organization/register';

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
