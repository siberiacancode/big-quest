import { useQuery } from '@tanstack/react-query';

import { getUser } from '../requests/user';

export const useGetUserQuery = (settings?: QuerySettings<typeof getUser>) =>
  useQuery({
    queryKey: ['getUser'],
    queryFn: () => getUser({ ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
