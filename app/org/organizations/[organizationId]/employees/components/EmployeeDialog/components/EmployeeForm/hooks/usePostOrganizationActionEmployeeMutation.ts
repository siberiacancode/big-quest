import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddUserConfig } from '@/utils/api';
import { postOrganizationAddUser, postOrganizationEditEmployee } from '@/utils/api';

export const usePostOrganizationActionEmployeeMutation = (
  settings?: MutationSettings<
    PostOrganizationAddUserConfig & {
      action: 'add' | 'edit';
    },
    typeof postOrganizationAddUser
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationActionEmployeeMutation'],
    mutationFn: ({ params, action, config }) => {
      if (action === 'edit') {
        return postOrganizationEditEmployee({ params, config: { ...settings?.config, ...config } });
      }

      if (action === 'add') {
        return postOrganizationAddUser({ params, config: { ...settings?.config, ...config } });
      }

      throw new Error('Invalid action');
    },
    ...settings?.options
  });
