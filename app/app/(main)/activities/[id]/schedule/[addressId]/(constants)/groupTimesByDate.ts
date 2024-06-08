import * as fns from 'date-fns';

import type { ScheduleResponse } from '@/api-types';

import type { GroupedSchedule } from '../../../(constants)/types';

export const groupTimesByDate = (data: ScheduleResponse[]): GroupedSchedule[] => {
  const groupedData = data.reduce((acc, item) => {
    const formattedDate = fns.format(item.date, 'dd.MM.yy');
    const formattedTimeStart = `${item.weekAndTime?.hourStart}:${item.weekAndTime?.minStart}`;
    const formattedTimeEnd =
      item.weekAndTime?.hourEnd !== 0 && `${item.weekAndTime?.hourEnd}:${item.weekAndTime?.minEnd}`;

    if (!acc[formattedDate]) {
      acc[formattedDate] = { date: item.date, times: [], info: [] };
    }

    if (!acc[formattedDate].times.includes(item.weekAndTime)) {
      acc[formattedDate].times.push({
        start: formattedTimeStart,
        end: formattedTimeEnd
      });
      acc[formattedDate].info.push({ ...item, start: formattedTimeStart });
    }

    return acc;
  }, {});

  return Object.values(groupedData);
};
