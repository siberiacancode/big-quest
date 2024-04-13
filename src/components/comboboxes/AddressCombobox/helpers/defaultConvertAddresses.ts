export const defaultConvertAddresses = (addresses: AddressResponseDto[]) =>
  addresses.map((address) => ({
    label: address.unrestrictedValue,
    value: address.unrestrictedValue
  }));
