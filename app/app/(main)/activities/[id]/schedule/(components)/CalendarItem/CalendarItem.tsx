'use client';

import React from 'react';
import * as fns from 'date-fns';

import type { ScheduleResponse } from '@/api-types';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

import type { GroupedSchedule } from '../../../(constants)/types';
import { groupTimesByDate } from '../../(constants)/groupTimesByDate';
import { FreeTimeList } from '../FreeTimeList/FreeTimeList';

export const CalendarItem = ({ schedule }: { schedule: ScheduleResponse[] }) => {
  const groupedDates: GroupedSchedule[] = groupTimesByDate(schedule);

  const [date, setDate] = React.useState<Date | undefined>(new Date(groupedDates[0].date));

  const activeDateSchedule =
    date &&
    groupedDates.find(
      (group) =>
        fns.format(group.date.toString(), 'dd.MM.yy') === fns.format(date?.toString(), 'dd.MM.yy')
    );
  console.log(schedule, activeDateSchedule);
  return (
    <div
      className={cn(
        'bg-background p-6 xs:mt-6 xs:rounded-[8px]',
        true && 'mb-20 h-fit min-h-screen p-0 pb-6'
      )}
    >
      <Calendar mode='single' selected={date} onSelect={setDate} className='rounded-md border' />

      {activeDateSchedule && <FreeTimeList schedule={activeDateSchedule} />}
    </div>
  );
};
