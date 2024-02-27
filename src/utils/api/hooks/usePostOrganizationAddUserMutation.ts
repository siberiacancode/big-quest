import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddUserConfig } from '../requests';
import { postOrganizationAddUser } from '../requests';

export const usePostOrganizationAddUserMutation = (
  settings?: MutationSettings<PostOrganizationAddUserConfig, typeof postOrganizationAddUser>
) =>
  useMutation({
    mutationKey: ['postOrganizationAddUser'],
    mutationFn: ({ params, config }) =>
      postOrganizationAddUser({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
