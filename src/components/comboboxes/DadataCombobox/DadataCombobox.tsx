import React from 'react';
import { useDebounceCallback } from 'usehooks-ts';

import { Combobox, type ComboboxProps } from '@/components/ui';
import { useGetDadataQuery } from '@/utils/api';
import { convertAddressesToComboboxItems } from '@/utils/helpers';

interface DadataComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {}

const LOCATION_SEARCH_DELAY = 600;

export const DadataCombobox = (props: DadataComboboxProps) => {
  const [locationSearch, setLocationSearch] = React.useState('');
  const debouncedSetLocationSearch = useDebounceCallback(setLocationSearch, LOCATION_SEARCH_DELAY);

  const getDadata = useGetDadataQuery({
    config: { params: { address: locationSearch } },
    options: { enabled: locationSearch.length > 3 }
  });

  return (
    <Combobox
      {...props}
      items={convertAddressesToComboboxItems(getDadata.data)}
      onSearchChange={debouncedSetLocationSearch}
      loading={getDadata.isLoading}
    />
  );
};
