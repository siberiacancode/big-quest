import type { AddressResponseDto } from '@/api-types';

export const convertLocationsToComboboxItems = (addresses: AddressResponseDto[]) =>
  addresses
    .filter(
      (address) =>
        address.city && !address.street && !address.house && !address.flat && address.cityWithType
    )
    .map((address) => ({
      label: address.cityWithType,
      value: address.cityWithType
    }));
