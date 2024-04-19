import React from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

import { useGetActivityPublicInfiniteQuery } from '@/utils/api/hooks';
import { useSearchParams } from '@/utils/hooks';

const DEFAULT_ACTIVITIES_LIMIT = 6;
const DEFAULT_ACTIVITIES_PAGE = 1;

export const useActivtyCatalogPage = () => {
  const { searchParams } = useSearchParams();

  const category = searchParams.get('category') ?? '';
  const name = searchParams.get('name') ?? '';

  const getChangesInfiniteQuery = useGetActivityPublicInfiniteQuery({
    current: DEFAULT_ACTIVITIES_PAGE,
    limit: DEFAULT_ACTIVITIES_LIMIT,
    category,
    name
  });

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5
  });

  React.useEffect(() => {
    if (
      isIntersecting &&
      getChangesInfiniteQuery.hasNextPage &&
      !getChangesInfiniteQuery.isFetchingNextPage
    ) {
      getChangesInfiniteQuery.fetchNextPage();
    }
  }, [isIntersecting, getChangesInfiniteQuery]);

  return {
    state: {
      query: getChangesInfiniteQuery,
      category,
      intresectionRef: ref
    }
  };
};
