import * as fns from 'date-fns';

import type { ScheduleResponse } from '@/api-types';

import type { GroupedSchedule } from '../../../(constants)/types';

export const groupTimesByDate = (data: ScheduleResponse[]): GroupedSchedule[] => {
  const groupedData = data.reduce((acc, item) => {
    const formattedDate = fns.format(item.date, 'dd.MM.yy');
    const formattedTime = fns.format(item.date, 'HH:mm');

    if (!acc[formattedDate]) {
      acc[formattedDate] = { date: item.date, times: [], info: [] };
    }

    if (!acc[formattedDate].times.includes(formattedTime)) {
      acc[formattedDate].times.push(formattedTime);
      acc[formattedDate].info.push({ ...item, formattedTime });
    }

    return acc;
  }, {});

  return Object.values(groupedData);
};
