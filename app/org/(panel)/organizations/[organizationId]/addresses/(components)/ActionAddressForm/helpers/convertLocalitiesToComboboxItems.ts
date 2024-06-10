import type { AddressResponseDto } from '@/api-types';

export const convertLocalitiesToComboboxItems = (addresses: AddressResponseDto[]) =>
  addresses.map((address) => ({
    label: address.value,
    value: address
  }));
