import { useQuery } from '@tanstack/react-query';

import type { GetAddressParams } from '../requests';
import { getAddress } from '../requests';

export const useGetAddressQuery = (
  params: GetAddressParams,
  settings?: QuerySettings<typeof getAddress>
) =>
  useQuery({
    queryKey: ['getAddress', params.address],
    queryFn: () => getAddress({ params, config: settings?.config }),
    ...settings?.options
  });
