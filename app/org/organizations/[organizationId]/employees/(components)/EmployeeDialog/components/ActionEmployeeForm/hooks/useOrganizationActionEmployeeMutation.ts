import { useMutation } from '@tanstack/react-query';

import type {
  PostOrganizationAddEmployeeRequestConfig,
  PutOrganizationEditEmployeeRequestConfig
} from '@/utils/api';
import { postOrganizationAddEmployee, putOrganizationEditEmployee } from '@/utils/api';

export const useOrganizationActionEmployeeMutation = (
  settings?: MutationSettings<
    | (PostOrganizationAddEmployeeRequestConfig & {
        action: 'add';
      })
    | (PutOrganizationEditEmployeeRequestConfig & {
        action: 'edit';
      }),
    typeof putOrganizationEditEmployee | typeof postOrganizationAddEmployee
  >
) =>
  useMutation({
    mutationKey: ['organizationActionEmployeeMutation'],
    mutationFn: ({ params, action, config }) => {
      if (action === 'edit') {
        return putOrganizationEditEmployee({ params, config: { ...settings?.config, ...config } });
      }

      if (action === 'add') {
        return postOrganizationAddEmployee({ params, config: { ...settings?.config, ...config } });
      }

      throw new Error('Invalid action');
    },
    ...settings?.options
  });
