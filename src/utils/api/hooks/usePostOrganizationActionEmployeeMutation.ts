import { useMutation } from '@tanstack/react-query';

import type {
  PostOrganizationAddEmployeeConfig,
  PostOrganizationEditEmployeeConfig
} from '../requests';
import { postOrganizationAddEmployee, postOrganizationEditEmployee } from '../requests';

export const usePostOrganizationActionEmployeeMutation = (
  settings?: MutationSettings<
    | (PostOrganizationAddEmployeeConfig & {
        action: 'add';
      })
    | (PostOrganizationEditEmployeeConfig & {
        action: 'edit';
      }),
    typeof postOrganizationAddEmployee
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationActionEmployeeMutation'],
    mutationFn: ({ params, action, config }) => {
      if (action === 'edit') {
        return postOrganizationEditEmployee({ params, config: { ...settings?.config, ...config } });
      }

      if (action === 'add') {
        return postOrganizationAddEmployee({ params, config: { ...settings?.config, ...config } });
      }

      throw new Error('Invalid action');
    },
    ...settings?.options
  });
