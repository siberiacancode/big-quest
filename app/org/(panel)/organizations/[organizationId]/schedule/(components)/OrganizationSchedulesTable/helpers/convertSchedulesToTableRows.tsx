import * as fns from 'date-fns';
import { CheckIcon, XIcon } from 'lucide-react';

import type { ScheduleResponse } from '@/api-types';
import { addLeadingZero } from '@/utils/helpers';

export interface SchedulesTableRow {
  id: string;
  activity: string;
  address: string;
  leading: string;
  date: string;
  time: string;
  numberOfSeats: number;
  isDone: string | JSX.Element;
}

export const convertSchedulesToTableRows = (schedules: ScheduleResponse[]): SchedulesTableRow[] =>
  schedules.map((schedule) => {
    const weekAndTime = schedule.weekAndTime?.[0];
    const startTime = weekAndTime
      ? `${addLeadingZero(weekAndTime.hourStart)}:${addLeadingZero(weekAndTime.minStart)}`
      : '';
    const endTime =
      weekAndTime?.hourEnd !== undefined && weekAndTime.minEnd !== undefined
        ? `/${addLeadingZero(weekAndTime.hourEnd)}:${addLeadingZero(weekAndTime.minEnd)}`
        : '';

    return {
      id: schedule.id,
      activity: schedule.activity?.name ?? '-',
      address: schedule.address?.value ?? '-',
      leading: `${schedule.leading?.surname ?? ''} ${schedule.leading?.name ?? ''}` ?? '-',
      date: schedule.date ? fns.format(new Date(schedule.date), 'dd.MM.yy') : '-',
      numberOfSeats: schedule.numberOfSeats ?? 0,
      isDone: schedule.isDone ? <CheckIcon className='size-4' /> : <XIcon className='size-4' />,
      time: `${startTime}${endTime}`
    };
  });
