import { CalendarIcon } from 'lucide-react';

import { Typography } from '@/components/ui';

import type { FreeTime } from '../../(constants)/types';

interface FreeTimeItemProps {
  value: FreeTime;
}

export const FreeTimeItem = ({ value }: FreeTimeItemProps) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='flex max-w-[90px] items-center gap-3'>
        <CalendarIcon className='stroke-muted-foreground' />
        <Typography variant='sub6'>{value.date}</Typography>
      </div>

      <div className='flex gap-3'>
        {value.times.sort().map((time) => (
          <div className='text-light min-w-[53px] rounded-[8px] bg-taiga px-2 py-1 text-center text-white'>
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};
