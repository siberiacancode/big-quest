import type { AddressResponseDto } from '@/api-types';

export const convertAddressesToComboboxItems = (addresses: AddressResponseDto[]) =>
  addresses
    .filter(
      (address) =>
        address.city && !address.street && !address.house && !address.flat && address.cityWithType
    )
    .map((address) => ({
      id: address.value,
      label: address.cityWithType,
      value: address.cityWithType
    }));
