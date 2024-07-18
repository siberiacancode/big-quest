import type { InfiniteData, QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import type { AddressesListResponse } from '@/api-types';
import type { GetOrganizationAddressesParams } from '@/utils/api';
import { getOrganizationAddresses } from '@/utils/api';

export const useGetOrganizationAddressesInfiniteQuery = (
  params?: GetOrganizationAddressesParams,
  settings?: InfiniteQuerySettings<typeof getOrganizationAddresses>
) =>
  useInfiniteQuery<
    AddressesListResponse,
    any,
    InfiniteData<AddressesListResponse>,
    QueryKey,
    number
  >({
    queryKey: ['getOrganizationAddresses', params?.current, params?.limit],
    initialPageParam: params?.current ?? 1,
    queryFn: ({ pageParam }) =>
      getOrganizationAddresses({
        params: { ...params, current: pageParam },
        config: settings?.config
      }),
    getNextPageParam: (lastPage, pages) =>
      Math.ceil(lastPage.pagination.count / lastPage.pagination.limit) > pages.length
        ? pages.length + 1
        : undefined,
    ...settings?.options
  });
