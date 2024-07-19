import type { InfiniteData, QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import type { ChangesResponseWithPagination } from '@/api-types';

import type { GetChangesParams } from '../requests';
import { getChanges } from '../requests';

export const useGetChangesInfiniteQuery = (
  params: GetChangesParams,
  settings?: InfiniteQuerySettings<typeof getChanges>
) =>
  useInfiniteQuery<
    ChangesResponseWithPagination,
    any,
    InfiniteData<ChangesResponseWithPagination>,
    QueryKey,
    number
  >({
    queryKey: ['getChanges', params.current],
    initialPageParam: params.current ?? 1,
    queryFn: ({ pageParam }) =>
      getChanges({
        params: { ...params, current: pageParam },
        config: settings?.config
      }),
    getNextPageParam: (lastPage, pages) =>
      Math.ceil(lastPage.pagination.count / lastPage.pagination.limit) > pages.length
        ? pages.length + 1
        : undefined,
    ...settings?.options
  });
