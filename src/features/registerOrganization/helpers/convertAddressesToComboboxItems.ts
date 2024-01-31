import type { ComboBoxItemType } from '@/components/ui';

export const convertAddressesToComboboxItems = (
  addresses?: AddressResponse[]
): ComboBoxItemType[] =>
  addresses?.map((address) => {
    const fullName = `${address.country}, ${address.region}, ${address.city}, ${address.street}, ${address.house}, ${address.flat}`;

    return {
      label: fullName,
      value: fullName
    };
  }) ?? [];
