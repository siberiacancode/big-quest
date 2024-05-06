import { useQuery } from '@tanstack/react-query';

import { getActivity } from '../requests';

export const useGetActivitiesQuery = (settings?: QuerySettings<typeof getActivity>) =>
  useQuery({
    queryKey: ['getActivities'],
    queryFn: () => getActivity({ config: settings?.config }),
    ...settings?.options
  });
