import type { AddressResponseDto } from '@/api-types';

export const defaultConvertAddresses = (addresses: AddressResponseDto[]) =>
  addresses.map((address) => ({
    label: address.unrestrictedValue,
    value: address
  }));
