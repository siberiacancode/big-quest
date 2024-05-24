import { CalendarIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

interface FreeTimeItemProps {
  value: FreeTime;
}

export const FreeTimeItem = ({ value }: FreeTimeItemProps) => {
  const monthNumber = new Date(value.date).getMonth();
  const dayNumber = new Date(value.date).getDay();

  return (
    <div className='flex h-10 w-56 items-center justify-between rounded-lg border border-secondary px-[30px] '>
      <div className='flex items-center gap-2'>
        <CalendarIcon className='stroke-taiga' />
        <Typography variant='sub6' tag='p'>
          {value.time}
        </Typography>
      </div>
      <Typography variant='sub6' tag='p'>
        {dayNumber} <I18nText path={`month.${monthNumber + 1}` as LocaleMessageId} />
      </Typography>
    </div>
  );
};
