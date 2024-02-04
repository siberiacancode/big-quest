import { useQuery } from '@tanstack/react-query';

import { getOrganizationById } from '../requests/organization';

export const useGetOrganizationByIdQuery = (
  params,
  settings?: QuerySettings<typeof getOrganizationById>
) =>
  useQuery({
    queryKey: ['getOrganizationById'],
    queryFn: () =>
      getOrganizationById({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
