import type { WorkingHour } from '../../../(constants)/types';
import type { ActionAddressSchema } from '../constants/actionAddressSchema';

export const convertWorkingHours = (workingHours: WorkingHour[]) =>
  workingHours.reduce(
    (acc, workingHour, index) => {
      const { from, to } = workingHour;
      acc[index] = {
        ...workingHour,
        time: {
          from: from ? `${from.hour}:${from.minutes}` : '00:00',
          to: to ? `${to.hour}:${to.minutes}` : '00:00'
        }
      };
      return acc;
    },
    {} as ActionAddressSchema['workingHours']
  );
