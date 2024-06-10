import type { AddressResponseDto } from '@/api-types';

export const convertLocalitiesToComboboxItems = (addresses: AddressResponseDto[]) =>
  addresses
    // .filter((address) => address.street && address.house)
    .map((address) => ({
      label: address.value,
      value: address
    }));
