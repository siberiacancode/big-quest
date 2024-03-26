import { useMutation } from '@tanstack/react-query';

import type {
  PostOrganizationAddEmployeeRequestConfig,
  PostOrganizationEditEmployeeRequestConfig
} from '@/utils/api';
import { postOrganizationAddEmployee, postOrganizationEditEmployee } from '@/utils/api';

export const usePostOrganizationActionEmployeeMutation = (
  settings?: MutationSettings<
    | (PostOrganizationAddEmployeeRequestConfig & {
        action: 'add';
      })
    | (PostOrganizationEditEmployeeRequestConfig & {
        action: 'edit';
      }),
    typeof postOrganizationEditEmployee | typeof postOrganizationAddEmployee
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
