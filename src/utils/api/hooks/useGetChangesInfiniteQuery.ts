import type { InfiniteData, QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getPageCount } from '@/components/ui';

import { getChanges } from '../requests';

export const DEFAULT_CHANGES_PAGE = 1;

export const useGetChangesInfiniteQuery = (settings?: InfiniteQuerySettings<typeof getChanges>) =>
  useInfiniteQuery<
    ChangesResponseWithPagination,
    any,
    InfiniteData<ChangesResponseWithPagination>,
    QueryKey,
    number
  >({
    queryKey: ['getChanges', settings?.config?.params?.current],
    initialPageParam: DEFAULT_CHANGES_PAGE,
    queryFn: ({ pageParam = DEFAULT_CHANGES_PAGE }) =>
      getChanges({
        config: {
          ...settings?.config,
          params: { ...settings?.config?.params, current: String(pageParam) }
        }
      }),
    getNextPageParam: (lastPage, pages) =>
      getPageCount(lastPage.pagination.limit, lastPage.pagination.count) > pages.length
        ? pages.length + 1
        : undefined,
    ...settings?.options
  });
