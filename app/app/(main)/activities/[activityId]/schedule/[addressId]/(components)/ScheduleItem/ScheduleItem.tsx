'use client';

import React from 'react';
import * as fns from 'date-fns';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { Calendar } from '@/components/ui/calendar';
import type { ExtendedScheduleResponse } from '@/utils/api';

import type { GroupedSchedule } from '../../../../(constants)/types';
import { groupTimesByDate } from '../../(helpers)/groupTimesByDate';
import { FreeTimeList } from '../FreeTimeList/FreeTimeList';

interface ScheduleItemProps {
  schedule: ExtendedScheduleResponse[];
}

export const ScheduleItem = ({ schedule }: ScheduleItemProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const groupedDates: GroupedSchedule[] = groupTimesByDate(schedule);

  const activeDateSchedule = date && groupedDates.find((group) => fns.isSameDay(group.date, date));

  return (
    <div className='mx-auto flex w-full max-w-[345px] flex-col items-center xs:mt-6 xs:rounded-[8px] md:mb-12 md:mt-0 md:max-w-none md:flex-row md:items-start md:gap-8'>
      <div className='flex w-full flex-col md:w-fit'>
        <Typography
          variant='h7'
          tag='h1'
          className='my-6 text-center font-semibold md:my-0 md:text-start'
        >
          <I18nText path='app.activity.schedule.title' />
        </Typography>

        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          schedules={groupedDates.map(({ date }) => date)}
          className='w-full max-w-[345px] rounded-md border md:mt-5'
        />
      </div>
      <div className='w-full'>
        <Typography variant='h7' tag='h1' className='mt-4 font-semibold md:mt-0'>
          <I18nText path='app.activity.schedule.time.title' />
        </Typography>
        <Typography variant='body3' tag='h1'>
          <I18nText path='app.activity.schedule.time.description' />
        </Typography>

        {activeDateSchedule && <FreeTimeList schedule={activeDateSchedule} />}
      </div>
    </div>
  );
};
