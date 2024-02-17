import { useMutation } from '@tanstack/react-query';

import type { PutOrganizationParams } from '../requests';
import { putOrganization } from '../requests';

export const usePutOrganizationMutation = (
  settings?: MutationSettings<PutOrganizationParams, typeof putOrganization>
) =>
  useMutation({
    mutationKey: ['putOrganization'],
    mutationFn: (params) =>
      putOrganization({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
