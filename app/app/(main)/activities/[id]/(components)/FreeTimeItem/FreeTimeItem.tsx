import { CalendarIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

interface FreeTimeItemProps {
  time: FreeTime;
}

export const FreeTimeItem = ({ time }: FreeTimeItemProps) => {
  const monthNumber = new Date(time.date).getMonth() + 1;
  const dayNumber = new Date(time.date).getDay() + 1;

  return (
    <div className='flex h-10 w-56 items-center justify-evenly rounded-lg border border-secondary '>
      <div className='flex items-center gap-2'>
        <CalendarIcon className='stroke-taiga' />
        <Typography variant='sub6' tag='p'>
          {time.time}
        </Typography>
      </div>
      <Typography variant='sub6' tag='p'>
        {dayNumber} <I18nText path={`month.${monthNumber}` as LocaleMessageId} />
      </Typography>
    </div>
  );
};
