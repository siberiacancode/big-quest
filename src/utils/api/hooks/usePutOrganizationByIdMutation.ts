import { useMutation } from '@tanstack/react-query';

import type { PutOrganizationByIdRequestConfig } from '../requests';
import { putOrganizationById } from '../requests';

export const usePutOrganizationByIdMutation = (
  settings?: MutationSettings<PutOrganizationByIdRequestConfig, typeof putOrganizationById>
) =>
  useMutation({
    mutationKey: ['putOrganizationById'],
    mutationFn: ({ params, config }) =>
      putOrganizationById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
