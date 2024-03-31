export const convertLocationsToComboboxItems = (addresses: AddressResponseFixMe[]) =>
  addresses
    .filter(
      (address) =>
        address.city && !address.street && !address.house && !address.flat && address.cityWithType
    )
    .map((address) => ({
      label: address.cityWithType,
      value: address.cityWithType
    }));
