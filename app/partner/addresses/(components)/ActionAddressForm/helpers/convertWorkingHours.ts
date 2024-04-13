import type { WorkingHour } from '../../../(constants)/types';
import type { ActionAddressSchema } from '../constants/actionAddressSchema';

export const convertWorkingHours = (workingHours: WorkingHour[]) =>
  workingHours.reduce(
    (acc, workingHour, index) => {
      const { from, to } = workingHour;
      acc[index] = {
        ...workingHour,
        time: { from: `${from.hour}:${from.minutes}`, to: `${to.hour}:${to.minutes}` }
      };
      return acc;
    },
    {} as ActionAddressSchema['workingHours']
  );
