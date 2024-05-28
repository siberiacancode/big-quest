import { useQuery } from '@tanstack/react-query';

import { getActivityById } from '../requests';
import type { GetActivityByIdParams } from '../requests/activity/id';

export const useGetActivityByIdQuery = (
  params: GetActivityByIdParams,
  settings?: QuerySettings<typeof getActivityById>
) =>
  useQuery({
    queryKey: ['getActivityById', params.id],
    queryFn: () => getActivityById({ params, config: settings?.config }),
    ...settings?.options
  });
