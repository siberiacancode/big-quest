import { useQuery } from '@tanstack/react-query';

import { getAddress } from '../requests/address';

export const useGetAddressQuery = (settings?: QuerySettings<typeof getAddress>) =>
  useQuery({
    queryKey: ['getAddress', settings?.config?.params.address],
    queryFn: () => getAddress({ config: settings?.config }),
    ...settings?.options
  });
