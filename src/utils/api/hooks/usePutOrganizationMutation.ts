import { useMutation } from '@tanstack/react-query';

import type { PutOrganizationRequestConfig } from '../requests';
import { putOrganization } from '../requests';

export const usePutOrganizationMutation = (
  settings?: MutationSettings<PutOrganizationRequestConfig, typeof putOrganization>
) =>
  useMutation({
    mutationKey: ['putOrganization'],
    mutationFn: ({ params, config }) =>
      putOrganization({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
