import type { AddressResponseDto } from '@/api-types';

export const convertLocalitiesToComboboxItems = (addresses: AddressResponseDto[]) =>
  addresses
    // .filter(
    //   (address) =>
    //     address.city && !address.street && !address.house && !address.flat && address.cityWithType
    // )
    .map((address) => ({
      label: address.street,
      value: address.street
    }));
