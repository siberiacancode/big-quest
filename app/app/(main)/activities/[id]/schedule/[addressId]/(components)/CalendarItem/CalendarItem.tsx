'use client';

import React from 'react';
import * as fns from 'date-fns';

import type { ScheduleResponse } from '@/api-types';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

import type { GroupedSchedule } from '../../../../(constants)/types';
import { groupTimesByDate } from '../../(constants)/groupTimesByDate';
import { FreeTimeList } from '../FreeTimeList/FreeTimeList';

export const CalendarItem = ({
  schedule,
  isMobile
}: {
  schedule: ScheduleResponse[];
  isMobile: boolean;
}) => {
  const groupedDates: GroupedSchedule[] = groupTimesByDate(schedule);

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const activeDateSchedule = date && groupedDates.find((group) => fns.isSameDay(group.date, date));

  console.log(schedule, activeDateSchedule);

  return (
    <div
      className={cn(
        'flex-col: mt-6 flex w-full items-center bg-background xs:rounded-[8px] md:flex-row',
        isMobile && 'flex-col'
      )}
    >
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        schedules={groupedDates.map((date) => date.date)}
        className='w-full max-w-[345px] rounded-md border'
      />

      {activeDateSchedule && <FreeTimeList schedule={activeDateSchedule} />}
    </div>
  );
};
