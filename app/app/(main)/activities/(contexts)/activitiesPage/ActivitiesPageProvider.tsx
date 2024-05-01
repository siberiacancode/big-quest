'use client';

import React from 'react';
import { useDebounceCallback } from 'usehooks-ts';

import type { ActivityResponse, CategoryResponse, PaginationResponse } from '@/api-types';
import { useSearchParams } from '@/utils/hooks';

import { handleLoadActivitiesMore } from '../../(actions)/handleLoadActivitiesMore';
import { DEFAULT_ACTIVITIES_LIMIT } from '../../(constants)';

import { ActivitiesPageContext } from './ActivitiesPageContext';

export interface ActivitiesPageProviderProps {
  children: React.ReactNode;
  defaultActivitiesPage: {
    categories: CategoryResponse[];
    activities: ActivityResponse[];
    pagination: PaginationResponse;
  };
}

const SEARCH_INPUT_DELAY = 500;

export const ActivitiesPageProvider = ({
  children,
  defaultActivitiesPage
}: ActivitiesPageProviderProps) => {
  const { setSearchParam, searchParams } = useSearchParams();
  const [page, setPage] = React.useState(1);
  const [activities, setActivities] = React.useState<ActivityResponse[]>(
    defaultActivitiesPage.activities
  );
  const [isPending, startTransition] = React.useTransition();

  const onCategoryClick = (category: string) =>
    startTransition(() => {
      setSearchParam('category', category);
    });

  const onSearchChange = useDebounceCallback(
    (value: string) =>
      startTransition(() => {
        setSearchParam('name', value);
      }),
    SEARCH_INPUT_DELAY
  );

  const onSearchClear = () =>
    startTransition(() => {
      setSearchParam('name', '');
    });

  const loadActivitiesMore = () => {
    if (isPending || defaultActivitiesPage.pagination.count <= activities.length) return;

    startTransition(async () => {
      const newPage = page + 1;
      const newActivities = await handleLoadActivitiesMore({
        params: {
          limit: DEFAULT_ACTIVITIES_LIMIT,
          current: newPage,
          ...searchParams.entries()
        }
      });
      setPage(newPage);
      setActivities([...activities, ...newActivities.rows]);
    });
  };

  React.useEffect(() => {
    setActivities(defaultActivitiesPage.activities);
  }, [defaultActivitiesPage.activities]);

  const value = React.useMemo(
    () => ({
      isLoading: isPending,
      onCategoryClick,
      onSearchChange,
      onSearchClear,
      loadActivitiesMore,
      ...defaultActivitiesPage,
      activities
    }),
    [isPending, onCategoryClick]
  );

  return <ActivitiesPageContext.Provider value={value}>{children}</ActivitiesPageContext.Provider>;
};
