import React from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

import type { AddressesResponse } from '@/api-types';
import type { ComboBoxItemType, ComboboxProps } from '@/components/ui';
import { Combobox } from '@/components/ui';
import { useGetOrganizationAddressesInfiniteQuery } from '@/utils/api';

import { defaultConvertOrganizationsAddresses } from './helpers/defaultConvertOrganizationsAddresses';

interface AddressComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {
  convertAddresses?: (addresses: AddressesResponse[]) => ComboBoxItemType[];
}

export const OrganizationsAddressesCombobox = ({
  convertAddresses = defaultConvertOrganizationsAddresses,
  ...props
}: AddressComboboxProps) => {
  const getOrganizationAddressesInfiniteQuery = useGetOrganizationAddressesInfiniteQuery();

  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    onChange: (isIntersecting) => {
      if (isIntersecting && getOrganizationAddressesInfiniteQuery.hasNextPage) {
        getOrganizationAddressesInfiniteQuery.fetchNextPage();
      }
    }
  });

  return (
    <Combobox
      {...props}
      items={
        getOrganizationAddressesInfiniteQuery.data
          ? convertAddresses(
              getOrganizationAddressesInfiniteQuery.data.pages.flatMap((page) => page.rows)
            )
          : []
      }
      loading={getOrganizationAddressesInfiniteQuery.isLoading}
      intersectionRef={ref}
    />
  );
};
