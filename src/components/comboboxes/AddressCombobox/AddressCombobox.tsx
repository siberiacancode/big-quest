import React from 'react';
import { useDebounceCallback } from 'usehooks-ts';

import type { ComboBoxItemType, ComboboxProps } from '@/components/ui';
import { Combobox } from '@/components/ui';
import { useGetAddressQuery } from '@/utils/api';

interface AddressComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {
  convertAddressesToComboboxItems: (addresses: AddressResponse[]) => ComboBoxItemType[];
}

const LOCATION_SEARCH_DELAY = 600;

export const AddressCombobox = ({
  convertAddressesToComboboxItems,
  ...props
}: AddressComboboxProps) => {
  const [locationSearch, setLocationSearch] = React.useState('');
  const debouncedSetLocationSearch = useDebounceCallback(setLocationSearch, LOCATION_SEARCH_DELAY);

  const getAddress = useGetAddressQuery({
    config: { params: { address: locationSearch } },
    options: { enabled: locationSearch.length > 3 }
  });

  return (
    <Combobox
      {...props}
      items={getAddress.data ? convertAddressesToComboboxItems(getAddress.data) : []}
      onSearchChange={debouncedSetLocationSearch}
      loading={getAddress.isLoading}
    />
  );
};
