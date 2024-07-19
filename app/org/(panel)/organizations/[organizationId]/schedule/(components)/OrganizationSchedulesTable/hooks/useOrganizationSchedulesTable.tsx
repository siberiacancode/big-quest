import React from 'react';
import type { DateRange } from 'react-day-picker';
import * as fns from 'date-fns';
import { useDebounceCallback } from 'usehooks-ts';

import { DatePickerWithRange, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';
import { useSearchParams } from '@/utils/hooks';

const ACTIVITY_INPUT_DELAY = 500;
const DATE_RANGE_INPUT_DELAY = 100;

export const useOrganizationSchedulesTable = () => {
  const i18n = useI18n();
  const { searchParams, setSearchParams, setSearchParam } = useSearchParams();
  const [isPending, startTransition] = React.useTransition();

  const activityFilter = searchParams.get('activity');
  const dateStartFilter = searchParams.get('dateStart');
  const dateEndFilter = searchParams.get('dateEnd');

  const dateRange = {
    from: dateStartFilter ? new Date(dateStartFilter) : undefined,
    to: dateEndFilter ? new Date(dateEndFilter) : undefined
  };

  const onPaginationClick = (page: number) =>
    startTransition(() => setSearchParam('current', String(page)));

  const onActivityFilterChange = useDebounceCallback(
    (value: string) =>
      startTransition(() =>
        setSearchParams([
          { key: 'activity', value },
          { key: 'current', value: '1' }
        ])
      ),
    ACTIVITY_INPUT_DELAY
  );

  const onDateRangeChange = useDebounceCallback((dateRange?: DateRange) => {
    if (dateRange) {
      setSearchParams([
        {
          key: 'dateStart',
          value: dateRange.from ? fns.format(dateRange.from, 'yyyy-MM-dd') : ''
        },
        {
          key: 'dateEnd',
          value: dateRange.to ? fns.format(dateRange.to, 'yyyy-MM-dd') : ''
        },
        { key: 'current', value: '1' }
      ]);
    }
  }, DATE_RANGE_INPUT_DELAY);

  const toolbar = React.useCallback(
    () => [
      <Input
        placeholder={i18n.formatMessage({ id: 'field.filter.placeholder' })}
        defaultValue={activityFilter ?? ''}
        onChange={(event) => onActivityFilterChange(event.target.value)}
        className='max-w-[180px]'
      />,
      <DatePickerWithRange onSelect={onDateRangeChange} value={dateRange} />
    ],
    [onActivityFilterChange, activityFilter, onDateRangeChange, dateRange]
  );

  return {
    state: { toolbar, isLoading: isPending },
    functions: { onPaginationClick }
  };
};
