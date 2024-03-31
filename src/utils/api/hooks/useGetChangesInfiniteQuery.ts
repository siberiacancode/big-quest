import type { InfiniteData, QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getPageCount } from '@/components/ui';

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
    initialPageParam: +params.current,
    queryFn: ({ pageParam }) =>
      getChanges({
        params: { ...params, current: String(pageParam) },
        config: {
          ...settings?.config
        }
      }),
    getNextPageParam: (lastPage, pages) =>
      getPageCount(lastPage.pagination.limit, lastPage.pagination.count) > pages.length
        ? pages.length + 1
        : undefined,
    ...settings?.options
  });
