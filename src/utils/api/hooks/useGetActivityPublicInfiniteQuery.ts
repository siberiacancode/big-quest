import type { InfiniteData, QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import type { GetActivityPublicParams } from '../requests';
import { getActivityPublic } from '../requests';

export const useGetActivityPublicInfiniteQuery = (
  params: GetActivityPublicParams,
  settings?: InfiniteQuerySettings<typeof getActivityPublic>
) =>
  useInfiniteQuery<
    ActivityWithPaginationResponse,
    any,
    InfiniteData<ActivityWithPaginationResponse>,
    QueryKey,
    number
  >({
    queryKey: ['getActivityPublic', params.current, params.category, params.name],
    initialPageParam: params.current ?? 1,
    queryFn: ({ pageParam }) =>
      getActivityPublic({
        params: { ...params, current: pageParam },
        config: settings?.config
      }),
    getNextPageParam: (lastPage, pages) =>
      Math.ceil(lastPage.pagination.count / lastPage.pagination.limit) > pages.length
        ? pages.length + 1
        : undefined,
    ...settings?.options
  });
