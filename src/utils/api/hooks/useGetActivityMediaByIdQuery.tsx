import { useQuery } from '@tanstack/react-query';

import { getActivityMediaById } from '../requests';
import type { GetActivityMediaByIdParams } from '../requests/activity/id/media';

export const useGetActivityMediaByIdQuery = (
  params: GetActivityMediaByIdParams,
  settings?: QuerySettings<typeof getActivityMediaById>
) =>
  useQuery({
    queryKey: ['getActivityMediaById', params.id],
    queryFn: () => getActivityMediaById({ params, config: settings?.config }),
    ...settings?.options
  });
