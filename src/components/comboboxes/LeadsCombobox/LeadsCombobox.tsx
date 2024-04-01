import React from 'react';
import { useDebounceCallback } from 'usehooks-ts';

import type { ComboboxProps } from '@/components/ui';
import { Combobox } from '@/components/ui';
import { useGetLeadsQuery } from '@/utils/api';

import { defaultConvertLeads } from './helpers/defaultConvertLeads';

interface LeadsComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {}

const LEADS_SEARCH_DELAY = 200;

export const LeadsCombobox = ({ ...props }: LeadsComboboxProps) => {
  const [leadSearch, setLeadSearch] = React.useState('');
  const debouncedSetActivitySearch = useDebounceCallback(setLeadSearch, LEADS_SEARCH_DELAY);

  const getLeadListQuery = useGetLeadsQuery(
    { fullname: leadSearch },
    {
      options: { enabled: leadSearch.length > 2 }
    }
  );

  return (
    <Combobox
      {...props}
      items={getLeadListQuery.data ? defaultConvertLeads(getLeadListQuery.data) : []}
      onSearchChange={debouncedSetActivitySearch}
      loading={getLeadListQuery.isLoading}
    />
  );
};
