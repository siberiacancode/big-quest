import { useMutation } from '@tanstack/react-query';

import type { PostEmployeeRequestConfig, PutEmployeeRequestConfig } from '@/utils/api';
import { postEmployee, putEmployee } from '@/utils/api';

export const useActionEmployeeMutation = (
  settings?: MutationSettings<
    | (PostEmployeeRequestConfig & {
        action: 'add';
      })
    | (PutEmployeeRequestConfig & {
        action: 'edit';
      }),
    typeof postEmployee | typeof putEmployee
  >
) =>
  useMutation({
    mutationKey: ['employeeMutation'],
    mutationFn: ({ params, action, config }) => {
      if (action === 'edit') {
        return putEmployee({ params, config: { ...settings?.config, ...config } });
      }

      if (action === 'add') {
        return postEmployee({ params, config: { ...settings?.config, ...config } });
      }

      throw new Error('Invalid action');
    },
    ...settings?.options
  });
