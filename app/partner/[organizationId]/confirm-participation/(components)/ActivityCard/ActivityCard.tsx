import * as fns from 'date-fns';
import * as fnsLocale from 'date-fns/locale';
import { CalendarDaysIcon, Clock4Icon } from 'lucide-react';
import Image from 'next/image';

import activityBackground from '@/assets/images/background/activity.png';
import { Label, RadioGroupItem, Typography } from '@/components/ui';

interface ActivityCardProps {
  id: string;
  name: string;
  category: string;
  time: Time;
  avatar?: string;
}

export const ActivityCard = ({ id, name, category, time, avatar }: ActivityCardProps) => (
  <div>
    <RadioGroupItem value={id} id={id} className='peer sr-only ' />
    <Label
      htmlFor={id}
      className='flex items-center gap-3 rounded-md border-2 border-inherit px-4 py-[14px] peer-data-[state=checked]:border-[#ABCF38] [&:has([data-state=checked])]:border-[#ABCF38]'
    >
      <Image src={avatar ?? activityBackground} alt={name} className='size-10 rounded-lg' />
      <div className='flex grow flex-col gap-[2px]'>
        <Typography variant='sub4' className='font-bold'>
          {name}
        </Typography>
        <Typography variant='body4' className='text-muted-foreground'>
          {category}
        </Typography>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <CalendarDaysIcon className='size-3 text-muted-foreground' />
          <Typography variant='body4' className='text-muted-foreground'>
            {fns.format(new Date(), 'dd MMMM', { locale: fnsLocale.ru })}
          </Typography>
        </div>
        <div className='flex items-center gap-2'>
          <Clock4Icon className='size-3 text-muted-foreground' />
          <Typography variant='body4' className='text-muted-foreground'>
            {time.hour}: {time.minutes}
          </Typography>
        </div>
      </div>
    </Label>
  </div>
);
