import type { InfiniteData, QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import type { ActivityWithPaginationResponse } from '@/api-types';

import type { GetActivityParams } from '../requests';
import { getActivity } from '../requests';

export const useGetActivityInfiniteQuery = (
  params: GetActivityParams,
  settings?: InfiniteQuerySettings<typeof getActivity>
) =>
  useInfiniteQuery<
    ActivityWithPaginationResponse,
    any,
    InfiniteData<ActivityWithPaginationResponse>,
    QueryKey,
    number
  >({
    queryKey: ['getActivityList', ...Object.values(params)],
    initialPageParam: params.current ?? 1,
    queryFn: ({ pageParam }) =>
      getActivity({
        params: { ...params, current: pageParam },
        config: settings?.config
      }),
    getNextPageParam: (lastPage, pages) =>
      Math.ceil(lastPage.pagination.count / lastPage.pagination.limit) > pages.length
        ? pages.length + 1
        : undefined,
    ...settings?.options
  });
