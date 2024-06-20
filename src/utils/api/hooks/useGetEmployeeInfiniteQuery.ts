import type { InfiniteData, QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import type { EmployeeListResponse } from '@/api-types';
import type { GetEmployeeParams } from '@/utils/api';
import { getEmployee } from '@/utils/api';

export const useGetEmployeeInfiniteQuery = (
  params: GetEmployeeParams,
  settings?: InfiniteQuerySettings<typeof getEmployee>
) =>
  useInfiniteQuery<EmployeeListResponse, any, InfiniteData<EmployeeListResponse>, QueryKey, number>(
    {
      queryKey: ['getEmployee', params.current, params.limit, params.organizationId],
      initialPageParam: params.current ?? 1,
      queryFn: ({ pageParam }) =>
        getEmployee({
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
