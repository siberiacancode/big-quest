import React from 'react';
import { useDebounceCallback } from 'usehooks-ts';

import type { AddressResponseDto } from '@/api-types';
import type { ComboBoxOption, ComboboxProps } from '@/components/ui';
import { Combobox } from '@/components/ui';
import { useGetAddressQuery } from '@/utils/api';

const LOCATION_SEARCH_DELAY = 600;

interface AddressComboboxProps<Option>
  extends Omit<ComboboxProps<Option>, 'items' | 'onSearchChange' | 'loading'> {
  convertAddresses: (addresses: AddressResponseDto[]) => ComboBoxOption<Option>[];
  prefix?: string;
}

export const AddressCombobox = <Option,>({
  convertAddresses,
  prefix,
  ...props
}: AddressComboboxProps<Option>) => {
  const [locationSearch, setLocationSearch] = React.useState('');
  const debouncedSetLocationSearch = useDebounceCallback(setLocationSearch, LOCATION_SEARCH_DELAY);

  const getAddressQuery = useGetAddressQuery(
    { address: prefix ? `${prefix} ${locationSearch}` : locationSearch },
    {
      options: { enabled: locationSearch.length > 3 }
    }
  );

  return (
    <Combobox
      {...props}
      items={getAddressQuery.data ? convertAddresses(getAddressQuery.data) : []}
      onSearchChange={debouncedSetLocationSearch}
      loading={getAddressQuery.isLoading}
    />
  );
};
