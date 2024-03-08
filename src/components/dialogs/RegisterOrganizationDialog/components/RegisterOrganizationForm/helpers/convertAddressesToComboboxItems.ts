export const convertAddressesToComboboxItems = (addresses: AddressResponse[]) =>
  addresses
    .filter((address) => address.city && !address.street && !address.house && !address.flat)
    .map((address) => ({
      label: address.value,
      value: address.unrestrictedValue
    }));
