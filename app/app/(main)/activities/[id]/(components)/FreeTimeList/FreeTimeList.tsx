import { CalendarIcon } from 'lucide-react';

import { Typography } from '@/components/ui';

import { FreeTimeItem } from '../FreeTimeItem/FreeTimeItem';

import { groupTimesByDate } from './(constants)/groupTimesByDate';

interface FreeTimeListProps {
  isMobile: boolean;
  schedule: Schedule;
}

export const FreeTimeList = ({ isMobile, schedule }: FreeTimeListProps) => {
  return (
    <>
      {!isMobile && (
        <div className='flex flex-wrap gap-3'>
          {schedule.nearestFreeTime?.map((time, index) => (
            <FreeTimeItem value={time} key={index} />
          ))}
        </div>
      )}
      {isMobile && schedule.nearestFreeTime && (
        <div className='flex flex-col gap-3'>
          {groupTimesByDate(schedule.nearestFreeTime).map((schedule) => (
            <div className='flex items-center gap-4'>
              <div className='flex max-w-[90px] items-center gap-3'>
                <CalendarIcon className='stroke-muted-foreground' />
                <Typography variant='sub6'>{schedule.date}</Typography>
              </div>
              <div className='flex gap-3'>
                {schedule.times.sort().map((time) => (
                  <div className='text-light min-w-[53px] rounded-[8px] bg-taiga px-2 py-1 text-center text-white'>
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
