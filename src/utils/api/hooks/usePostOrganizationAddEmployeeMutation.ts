import { useMutation } from '@tanstack/react-query';

import type { PostOrganizationAddEmployeeConfig } from '../requests';
import { postOrganizationAddEmployee } from '../requests';

export const usePostOrganizationAddEmployeeMutation = (
  settings?: MutationSettings<PostOrganizationAddEmployeeConfig, typeof postOrganizationAddEmployee>
) =>
  useMutation({
    mutationKey: ['postOrganizationAddEmployee'],
    mutationFn: ({ params, config }) =>
      postOrganizationAddEmployee({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
