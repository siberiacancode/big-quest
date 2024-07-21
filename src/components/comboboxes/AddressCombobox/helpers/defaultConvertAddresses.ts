import type { AddressResponseDto } from '@/api-types';

export const defaultConvertAddresses = <Option>(addresses: AddressResponseDto[]) =>
  addresses.map((address) => ({
    id: address.value,
    label: address.unrestrictedValue,
    value: address as Option
  }));
