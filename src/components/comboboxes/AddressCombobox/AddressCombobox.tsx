import React from 'react';
import { useDebounceCallback } from 'usehooks-ts';

import type { ComboBoxItemType, ComboboxProps } from '@/components/ui';
import { Combobox } from '@/components/ui';
import { useGetAddressQuery } from '@/utils/api';

import { defaultConvertAddresses } from './helpers/defaultConvertAddresses';

interface AddressComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {
  convertAddresses?: (addresses: AddressResponse[]) => ComboBoxItemType[];
}

const LOCATION_SEARCH_DELAY = 600;

export const AddressCombobox = ({
  convertAddresses = defaultConvertAddresses,
  ...props
}: AddressComboboxProps) => {
  const [locationSearch, setLocationSearch] = React.useState('');
  const debouncedSetLocationSearch = useDebounceCallback(setLocationSearch, LOCATION_SEARCH_DELAY);

  const getAddressQuery = useGetAddressQuery(
    { address: locationSearch },
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
