import { useQuery } from '@tanstack/react-query';

import type { GetLeadsParams } from '../requests';
import { getLeads } from '../requests';

export const useGetLeadsQuery = (
  params: GetLeadsParams,
  settings?: QuerySettings<typeof getLeads>
) =>
  useQuery({
    queryKey: ['getLeads', params.fullname],
    queryFn: () => getLeads({ params, config: settings?.config }),
    ...settings?.options
  });
