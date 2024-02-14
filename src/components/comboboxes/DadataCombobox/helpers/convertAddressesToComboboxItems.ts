import type { ComboBoxItemType } from '@/components/ui';

export const convertAddressesToComboboxItems = (
  addresses?: AddressResponse[]
): ComboBoxItemType[] =>
  addresses?.map((address) => ({
    label: address.unrestrictedValue,
    value: address.unrestrictedValue
  })) ?? [];
