'use client';

import React from 'react';

import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import type { GroupedSchedule } from '../../../../(constants)/types';
import { FreeTimeItem } from '../FreeTimeItem/FreeTimeItem';

interface FreeTimeListProps {
  schedule: GroupedSchedule;
}

export const FreeTimeList = ({ schedule }: FreeTimeListProps) => {
  const [activeTime, setActiveTime] = React.useState<string>();

  const activeInfo = activeTime && schedule.info.find((info) => info.formattedTime === activeTime);

  console.log(activeInfo);

  return (
    <div className='mt-4 w-full space-y-4 md:space-y-8 '>
      {schedule && (
        <div className='flex flex-wrap gap-3'>
          {schedule.times.map((time, index) => (
            <FreeTimeItem
              time={time}
              key={index}
              className={cn(activeTime === time && 'bg-taiga text-white')}
              onClick={() => setActiveTime(time)}
            />
          ))}
        </div>
      )}
      {activeInfo && (
        <div className='pb-[120px]'>
          {!activeInfo?.preEntry && (
            <div>
              <Typography variant='body2'>Свободное посещение</Typography>
              <Typography variant='body2'>Запись не требуется</Typography>
            </div>
          )}

          {activeInfo?.preEntry && (
            <div>
              <Typography variant='body2'>По предварительной записи </Typography>
              <Typography variant='body2'>Номер телефона: +{activeInfo?.employeeNumber}</Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
