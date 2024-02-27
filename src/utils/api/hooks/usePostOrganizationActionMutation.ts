import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddUserConfig } from '../requests';
import { postOrganizationAddUser } from '../requests';
import { postOrganizationEditEmployee } from '../requests/organization/editEmployee';

export const usePostOrganizationActionMutation = (
  settings?: MutationSettings<PostOrganizationAddUserConfig, typeof postOrganizationAddUser>
) =>
  useMutation({
    mutationKey: ['postOrganizationActionUser'],
    mutationFn: ({ params, action, config }) => {
      console.log(action); // Здесь всегда undefinded приходит, надо пофиксить
      const mutationConfig =
        action === 'add' ? postOrganizationAddUser : postOrganizationEditEmployee;
      return mutationConfig({ params, config: { ...settings?.config, ...config } });
    },
    ...settings?.options
  });
