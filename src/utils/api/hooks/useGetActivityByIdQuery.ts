import { useQuery } from '@tanstack/react-query';

import type { GetActivityByIdParams } from '../requests';
import { getActivityById } from '../requests';

export const useGetActivityByIdQuery = (
  params: GetActivityByIdParams,
  settings?: QuerySettings<typeof getActivityById>
) =>
  useQuery({
    queryKey: ['getActivityById', params.id],
    queryFn: () => getActivityById({ params, config: settings?.config }),
    ...settings?.options
  });
