import type { AddressResponseDto } from '@/api-types';
import type { ComboBoxOption } from '@/components/ui';

export const defaultConvertAddresses = <Option>(
  addresses: AddressResponseDto[]
): ComboBoxOption<Option>[] =>
  addresses.map((address) => ({
    id: address.value,
    label: address.unrestrictedValue,
    value: address as unknown as Option
  }));
