import type { AddressesResponse } from '@/api-types';

export const defaultConvertOrganizationsAddresses = (addresses: AddressesResponse[]) =>
  addresses.map((address) => ({
    label: address.cityWithType,
    value: address.cityWithType
  }));
