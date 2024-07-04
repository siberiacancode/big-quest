import type { AddressResponseDto } from '@/api-types';

export const convertLocalitiesToComboboxItems = (addresses: AddressResponseDto[]) =>
  addresses.map((address) => ({
    id: address.value,
    label: address.value,
    value: address
  }));
