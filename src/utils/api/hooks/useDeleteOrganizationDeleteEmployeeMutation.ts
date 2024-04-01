import { useMutation } from '@tanstack/react-query';

import type { DeleteOrganizationDeleteEmployeeRequestConfig } from '../requests';
import { deleteOrganizationDeleteEmployee } from '../requests';

export const useDeleteOrganizationDeleteEmployeeMutation = (
  settings?: MutationSettings<
    DeleteOrganizationDeleteEmployeeRequestConfig,
    typeof deleteOrganizationDeleteEmployee
  >
) =>
  useMutation({
    mutationKey: ['deleteOrganizationDeleteEmployee'],
    mutationFn: ({ params, config }) =>
      deleteOrganizationDeleteEmployee({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
