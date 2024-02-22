import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationEditEmployeeParams } from '../requests/organization/editEmployee';
import { postOrganizationEditEmployee } from '../requests/organization/editEmployee';

export const usePostOrganizationEditEmployeeMutation = (
  settings?: MutationSettings<
    PostOrganizationEditEmployeeParams,
    typeof postOrganizationEditEmployee
  >
) =>
  useMutation({
    mutationKey: ['postOrganizationEditEmployee'],
    mutationFn: (params) =>
      postOrganizationEditEmployee({
        params,
        ...(settings?.config && { config: settings.config })
      }),
    ...settings?.options
  });
