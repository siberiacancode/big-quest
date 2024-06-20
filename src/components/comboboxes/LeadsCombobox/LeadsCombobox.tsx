import React from 'react';
import { useDebounceCallback, useIntersectionObserver } from 'usehooks-ts';

import type { ComboboxProps } from '@/components/ui';
import { Combobox } from '@/components/ui';
import { useGetEmployeeInfiniteQuery } from '@/utils/api';

import { defaultConvertLeads } from './helpers/defaultConvertLeads';

interface LeadsComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {
  organizationId: string;
}

const LEADS_SEARCH_DELAY = 200;

export const LeadsCombobox = ({ organizationId, ...props }: LeadsComboboxProps) => {
  const [leadSearch, setLeadSearch] = React.useState('');
  const debouncedSetActivitySearch = useDebounceCallback(setLeadSearch, LEADS_SEARCH_DELAY);

  // TODO add name and position filters
  const getEmployeeInfiniteQuery = useGetEmployeeInfiniteQuery({ organizationId });

  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    onChange: (isIntersecting) => {
      if (isIntersecting) getEmployeeInfiniteQuery.fetchNextPage();
    }
  });

  return (
    <>
      <Combobox
        {...props}
        items={
          getEmployeeInfiniteQuery.data
            ? defaultConvertLeads(getEmployeeInfiniteQuery.data.pages.flatMap((page) => page.rows))
            : []
        }
        onSearchChange={debouncedSetActivitySearch}
        loading={getEmployeeInfiniteQuery.isLoading}
      />
      <div ref={ref} />
    </>
  );
};
