import { useMutation } from '@tanstack/react-query';

import type { DeleteEmployeeRequestConfig } from '../requests';
import { deleteEmployee } from '../requests';

export const useDeleteEmployeeMutation = (
  settings?: MutationSettings<DeleteEmployeeRequestConfig, typeof deleteEmployee>
) =>
  useMutation({
    mutationKey: ['deleteEmployee'],
    mutationFn: ({ params, config }) =>
      deleteEmployee({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
