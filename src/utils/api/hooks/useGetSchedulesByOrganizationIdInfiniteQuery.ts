import type { InfiniteData, QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import type { ScheduleListResponse } from '@/api-types';

import type { GetSchedulesByOrganizationIdParams } from '../requests';
import { getSchedulesByOrganizationId } from '../requests';

export const useGetSchedulesByOrganizationIdInfiniteQuery = (
  params: GetSchedulesByOrganizationIdParams,
  settings?: InfiniteQuerySettings<typeof getSchedulesByOrganizationId>
) =>
  useInfiniteQuery<ScheduleListResponse, any, InfiniteData<ScheduleListResponse>, QueryKey, number>(
    {
      queryKey: ['getSchedulesByOrganizationId', params.current],
      initialPageParam: params.current ?? 1,
      queryFn: ({ pageParam }) =>
        getSchedulesByOrganizationId({
          params: { ...params, current: pageParam },
          config: settings?.config
        }),
      getNextPageParam: (lastPage, pages) =>
        Math.ceil(lastPage.pagination.count / lastPage.pagination.limit) > pages.length
          ? pages.length + 1
          : undefined,
      ...settings?.options
    }
  );
