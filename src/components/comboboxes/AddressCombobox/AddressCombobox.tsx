import React from 'react';
import { useDebounceCallback } from 'usehooks-ts';

import type { AddressResponseDto } from '@/api-types';
import type { ComboBoxItemType, ComboboxProps } from '@/components/ui';
import { Combobox } from '@/components/ui';
import { useGetAddressQuery } from '@/utils/api';

import { defaultConvertAddresses } from './helpers/defaultConvertAddresses';

interface AddressComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {
  convertAddresses?: (addresses: AddressResponseDto[]) => ComboBoxItemType[];
}

const LOCATION_SEARCH_DELAY = 600;

interface AddressComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {
  convertAddresses?: (addresses: AddressResponseDto[]) => ComboBoxItemType[];
  prefilledCity?: string;
}

export const AddressCombobox = ({
  convertAddresses = defaultConvertAddresses,
  prefilledCity,
  ...props
}: AddressComboboxProps) => {
  const [locationSearch, setLocationSearch] = React.useState('');
  const debouncedSetLocationSearch = useDebounceCallback(setLocationSearch, LOCATION_SEARCH_DELAY);

  const getAddressQuery = useGetAddressQuery(
    { address: prefilledCity ? `${prefilledCity} ${locationSearch}` : locationSearch },
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
