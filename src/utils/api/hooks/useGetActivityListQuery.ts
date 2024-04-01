import { useQuery } from '@tanstack/react-query';

import type { GetActivityListParams } from '../requests';
import { getActivityList } from '../requests';

export const useGetActivityListQuery = (
  params: GetActivityListParams,
  settings?: QuerySettings<typeof getActivityList>
) =>
  useQuery({
    queryKey: ['getActivityList', params.activity],
    queryFn: () => getActivityList({ params, config: settings?.config }),
    ...settings?.options
  });
