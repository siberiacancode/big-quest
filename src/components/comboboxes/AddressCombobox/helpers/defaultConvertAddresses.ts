export const defaultConvertAddresses = (addresses: AddressResponseFixMe[]) =>
  addresses.map((address) => ({
    label: address.unrestrictedValue,
    value: address.unrestrictedValue
  }));
