'use client';

import React from 'react';
import { useDebounceCallback, useIntersectionObserver } from 'usehooks-ts';

import { useSearchParams } from '@/utils/hooks';

import { getActivityPublicServerAction } from '../actions/getPublicActivityServerAction';

const DEFAULT_ACTIVITIES_LIMIT = 6;
const DEFAULT_ACTIVITIES_PAGE = 1;
const SEARCH_INPUT_DELAY = 500;

export const useActivityCatalogPage = () => {
  const { searchParams, setSearchParam } = useSearchParams();
  const [isPending, startTransition] = React.useTransition();
  const [page, setPage] = React.useState(DEFAULT_ACTIVITIES_PAGE);
  const [activities, setActivities] = React.useState([] as ActivityResponse[]);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const category = searchParams.get('category') ?? '';
  const name = searchParams.get('name') ?? '';

  // const publicActivityResponse = await getActivityPublic({
  //   params: {
  //     limit: DEFAULT_ACTIVITIES_LIMIT,
  //     current: DEFAULT_ACTIVITIES_PAGE,
  //     ...searchParams
  //   }
  // });

  const onActivitySearchChange = useDebounceCallback((value: string) => {
    startTransition(() => {
      setSearchParam('name', value);
    });
  }, SEARCH_INPUT_DELAY);

  const onActivitySearchClear = () => {
    setSearchParam('name', '');
  };

  const onActivityCategorySelect = (category: string) => {
    startTransition(() => {
      setSearchParam('category', category);
    });
  };

  console.log('isPending', isPending);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5
  });

  const loadMoreActivities = async () => {
    const publicActivityResponse = await getActivityPublicServerAction({
      params: {
        limit: DEFAULT_ACTIVITIES_LIMIT,
        current: page,
        category,
        name
      }
    });
    setCanScrollNext(
      publicActivityResponse.pagination.limit * publicActivityResponse.pagination.current <=
        publicActivityResponse.pagination.count
    );
    setActivities([...activities, ...publicActivityResponse.rows]);
    setPage(page + 1);
  };

  React.useEffect(() => {
    if (isIntersecting && canScrollNext) {
      loadMoreActivities();
    }
  }, [isIntersecting]);

  // React.useEffect(() => {
  //   setActivities([]);
  //   setPage(DEFAULT_ACTIVITIES_PAGE);
  //   setCanScrollNext(true);
  //   loadMoreActivities();
  // }, [category]);

  // console.log('@activities', activities);

  // React.useEffect(() => {
  //   // setActivities([]);
  //   // setPage(DEFAULT_ACTIVITIES_PAGE);
  //   setCanScrollNext(true);
  // }, [category]);

  return {
    state: {
      // query: getChangesInfiniteQuery,
      category,
      name,
      activities,
      intresectionRef: ref
    },
    functions: {
      onActivitySearchChange,
      onActivitySearchClear,
      onActivityCategorySelect
    }
  };
};
