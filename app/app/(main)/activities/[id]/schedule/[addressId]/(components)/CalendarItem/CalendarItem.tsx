'use client';

import React from 'react';
import * as fns from 'date-fns';

import type { ScheduleResponse } from '@/api-types';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
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
        'mx-auto mt-6 flex w-full max-w-[345px] flex-col items-center xs:rounded-[8px] md:mb-12 md:mt-0 md:max-w-none md:flex-row md:items-start md:gap-8',
        isMobile && 'flex-col'
      )}
    >
      <div className='flex w-full flex-col md:w-fit'>
        {!isMobile && (
          <Typography variant='h7' tag='h1' className='my-6 font-semibold md:my-0'>
            <I18nText path='app.activity.schedule.title' />
          </Typography>
        )}
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          schedules={groupedDates.map((date) => date.date)}
          className='w-full max-w-[345px] rounded-md border md:mt-5'
        />
      </div>
      <div className='w-full'>
        <Typography variant='h7' tag='h1' className='mt-4 font-semibold md:mt-0'>
          <I18nText path='app.activity.schedule.time.title' />
        </Typography>
        {!isMobile && (
          <Typography variant='body3' tag='h1' className=''>
            <I18nText path='app.activity.schedule.time.description' />
          </Typography>
        )}

        {activeDateSchedule && <FreeTimeList schedule={activeDateSchedule} />}
      </div>
    </div>
  );
};
