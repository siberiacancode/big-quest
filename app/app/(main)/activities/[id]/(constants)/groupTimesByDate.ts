import * as fns from 'date-fns';

import type { ScheduleResponse } from '@/api-types';

export const groupTimesByDate = (data: ScheduleResponse[]) => {
  const groupedData = data.reduce((acc, item) => {
    const formattedDate = fns.format(item.date, 'dd.MM.yy');
    const formattedTime = fns.format(item.date, 'HH:mm');

    if (!acc[formattedDate]) {
      acc[formattedDate] = { date: formattedDate, times: [] };
    }

    if (!acc[formattedDate].times.includes(formattedTime)) {
      acc[formattedDate].times.push(formattedTime);
    }

    return acc;
  }, {});

  return Object.values(groupedData);
};
