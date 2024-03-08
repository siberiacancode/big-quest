export const defaultConvertAddresses = (addresses: AddressResponse[]) =>
  addresses.map((address) => ({
    label: address.unrestrictedValue,
    value: address.unrestrictedValue
  }));
