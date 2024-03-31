import React from 'react';
import type { DateRange } from 'react-day-picker';
import { useDebounceCallback } from 'usehooks-ts';

import { DatePickerWithRange, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';
import { useSearchParams } from '@/utils/hooks';

const FILTER_INPUT_DELAY = 500;

export const useOrganizationScheduleTable = () => {
  const i18n = useI18n();
  const { searchParams, setSearchParams, setSearchParam } = useSearchParams();
  const [isPending, startTransition] = React.useTransition();

  const activityFilter = searchParams.get('activity');
  const fromFilter = searchParams.get('from');
  const toFilter = searchParams.get('to');

  const defaultDate = {
    from: fromFilter ? new Date(fromFilter) : undefined,
    to: toFilter ? new Date(toFilter) : undefined
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
    FILTER_INPUT_DELAY
  );

  const onDateRangeChange = useDebounceCallback((dateRange: DateRange | undefined) => {
    if (dateRange) {
      console.log('Selected date range:', dateRange);
      setSearchParams([
        { key: 'from', value: dateRange.from?.toISOString() ?? '' },
        { key: 'to', value: dateRange.to?.toISOString() ?? '' },
        { key: 'current', value: '1' }
      ]);
    }
  }, FILTER_INPUT_DELAY);

  const toolbar = React.useCallback(
    () => [
      <Input
        placeholder={i18n.formatMessage({ id: 'field.filter.placeholder' })}
        defaultValue={activityFilter ?? ''}
        onChange={(event) => onActivityFilterChange(event.target.value)}
        className='max-w-[180px]'
      />,

      <DatePickerWithRange onSelect={onDateRangeChange} value={defaultDate} />
    ],
    [onActivityFilterChange, activityFilter]
  );

  return {
    state: { toolbar, isLoading: isPending },
    functions: { onPaginationClick }
  };
};
