export const convertLocalitiesToComboboxItems = (addresses: AddressResponse[]) =>
  addresses
    .filter(
      (address) =>
        address.city && !address.street && !address.house && !address.flat && address.cityWithType
    )
    .map((address) => ({
      label: address.cityWithType,
      value: address.cityWithType
    }));
