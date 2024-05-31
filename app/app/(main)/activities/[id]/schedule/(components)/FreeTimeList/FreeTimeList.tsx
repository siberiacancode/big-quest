'use client';

import React from 'react';

import { cn } from '@/lib/utils';

import type { GroupedSchedule } from '../../../(constants)/types';
import { FreeTimeItem } from '../FreeTimeItem/FreeTimeItem';

interface FreeTimeListProps {
  schedule: GroupedSchedule;
}

export const FreeTimeList = ({ schedule }: FreeTimeListProps) => {
  const [activeTime, setActiveTime] = React.useState<string>();

  const activeInfo = activeTime && schedule.info.find((info) => info.formattedTime === activeTime);

  console.log(activeInfo);

  return (
    <div className='mt-4 space-y-4 md:space-y-8'>
      {schedule && (
        <div className='space-y-3 xs:space-y-5'>
          {schedule.times.map((time, index) => (
            <FreeTimeItem
              time={time}
              key={index}
              className={cn(activeTime === time && 'bg-taiga')}
              onClick={() => setActiveTime(time)}
            />
          ))}
        </div>
      )}
      {activeInfo && <div> jhghjghj{activeInfo.preEntry && 'fffff'}</div>}
    </div>
  );
};
