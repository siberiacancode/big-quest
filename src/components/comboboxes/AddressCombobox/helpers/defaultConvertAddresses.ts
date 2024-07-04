import type { AddressResponseDto } from '@/api-types';

export const defaultConvertAddresses = (addresses: AddressResponseDto[]) =>
  addresses.map((address) => ({
    id: address.value,
    label: address.unrestrictedValue,
    value: address
  }));
