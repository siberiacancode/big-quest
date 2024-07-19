import React from 'react';
import { useDebounceCallback, useIntersectionObserver } from 'usehooks-ts';

import type { ComboboxProps } from '@/components/ui';
import { Combobox } from '@/components/ui';
import { useGetActivityInfiniteQuery } from '@/utils/api';

import { defaultConvertActivities } from './helpers/defaultConvertActivities';

interface ActivitiesComboboxProps
  extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {
  organizationId: string;
}

const ACTIVITY_SEARCH_DELAY = 200;

export const ActivitiesCombobox = ({ organizationId, ...props }: ActivitiesComboboxProps) => {
  const [query, setQuery] = React.useState('');
  const debouncedSetQuery = useDebounceCallback(setQuery, ACTIVITY_SEARCH_DELAY);
  const getActivityInfiniteQuery = useGetActivityInfiniteQuery({ query, organizationId });

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5
  });

  React.useEffect(() => {
    if (isIntersecting) getActivityInfiniteQuery.fetchNextPage();
  }, [isIntersecting]);

  return (
    <>
      <Combobox
        {...props}
        items={
          getActivityInfiniteQuery.data
            ? defaultConvertActivities(
                getActivityInfiniteQuery.data.pages.flatMap((page) => page.rows)
              )
            : []
        }
        onSearchChange={debouncedSetQuery}
        loading={getActivityInfiniteQuery.isFetchingNextPage}
      />
      <div ref={ref} />
    </>
  );
};
