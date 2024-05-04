import { CalendarIcon } from 'lucide-react';

import { Typography } from '@/components/ui';

interface FreeTimeItemProps {
  time: FreeTimeDto;
}

export const FreeTimeItem = ({ time }: FreeTimeItemProps) => {
  const formattedDate = new Date(time.date).toLocaleDateString();

  return (
    <div className='flex gap-3 rounded-lg border border-secondary p-4'>
      <CalendarIcon className='stroke-taiga' />
      <Typography variant='body2' tag='p'>
        {formattedDate}
      </Typography>
      <Typography variant='body2' tag='p'>
        {time.time}
      </Typography>
    </div>
  );
};
