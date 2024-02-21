import { useMutation } from '@tanstack/react-query';

import { postOrganizationAddEmployee, type PostOrganizationAddEmployeeParams } from '../requests';

export const usePostOrganizationAddEmployeeMutation = (
  settings?: MutationSettings<PostOrganizationAddEmployeeParams, typeof postOrganizationAddEmployee>
) =>
  useMutation({
    mutationKey: ['postOrganizationAddEmployee'],
    mutationFn: (params) =>
      postOrganizationAddEmployee({
        params,
        ...(settings?.config && { config: settings.config })
      }),
    ...settings?.options
  });
