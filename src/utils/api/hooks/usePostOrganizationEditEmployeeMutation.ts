import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationEditEmployeeConfig } from '../requests/organization/editEmployee';
import { postOrganizationEditEmployee } from '../requests/organization/editEmployee';

export const usePostOrganizationEditEmployeeMutation = (
  settings?: MutationSettings<
    PostOrganizationEditEmployeeConfig,
    typeof postOrganizationEditEmployee
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationEditEmployee'],
    mutationFn: ({ params, config }) =>
      postOrganizationEditEmployee({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
