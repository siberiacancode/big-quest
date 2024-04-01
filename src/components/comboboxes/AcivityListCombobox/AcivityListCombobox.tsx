import React from 'react';
import { useDebounceCallback } from 'usehooks-ts';

import type { ComboboxProps } from '@/components/ui';
import { Combobox } from '@/components/ui';
import { useGetActivityListQuery } from '@/utils/api/hooks/useGetActivityListQuery';

import { defaultConvertActivities } from './helpers/defaultConvertActivities';

interface AddressComboboxProps
  extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {}

const ACTIVITY_SEARCH_DELAY = 200;

export const AcivityListCombobox = ({ ...props }: AddressComboboxProps) => {
  const [activitySearch, setActivitySearch] = React.useState('');
  const debouncedSetActivitySearch = useDebounceCallback(setActivitySearch, ACTIVITY_SEARCH_DELAY);

  const getActivityListQuery = useGetActivityListQuery(
    { activity: activitySearch },
    {
      options: { enabled: activitySearch.length > 2 }
    }
  );

  return (
    <Combobox
      {...props}
      items={getActivityListQuery.data ? defaultConvertActivities(getActivityListQuery.data) : []}
      onSearchChange={debouncedSetActivitySearch}
      loading={getActivityListQuery.isLoading}
    />
  );
};
