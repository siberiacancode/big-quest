import { CalendarDaysIcon, Clock4Icon } from 'lucide-react';
import Image from 'next/image';

import activityBackground from '@/assets/images/background/activity.png';
import { RadioGroupItem, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

interface ActivityCardProps {
  id: string;
  name: string;
  category: string;
  time: Time;
  avatar?: string;
}

export const ActivityCard = ({ id, name, category, time, avatar }: ActivityCardProps) => (
  <div className={cn('flex items-center gap-3 px-4 py-[14px]')}>
    <RadioGroupItem value={id} id={id} className='peer sr-only ' />
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
          {time.hour}: {time.minutes}
        </Typography>
      </div>
      <div className='flex items-center gap-2'>
        <Clock4Icon className='size-3 text-muted-foreground' />
        <Typography variant='body4' className='text-muted-foreground'>
          {time.hour}: {time.minutes}
        </Typography>
      </div>
    </div>
  </div>
);
