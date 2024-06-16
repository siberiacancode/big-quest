import type { ScheduleResponse } from '@/api-types';

import type { AddressProps } from '../(constants)/types';

export const groupAddresses = (data: ScheduleResponse[]): AddressProps[] => {
  const groupedData = data.reduce((acc, item) => {
    const addressId = item.address!.id;
    if (!acc[addressId]) {
      acc[addressId] = { id: addressId, value: item.address?.value, details: item.details };
    }

    return acc;
  }, {});

  return Object.values(groupedData);
};
