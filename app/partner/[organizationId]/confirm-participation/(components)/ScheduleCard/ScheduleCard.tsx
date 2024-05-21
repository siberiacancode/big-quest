import * as fns from 'date-fns';
import * as fnsLocale from 'date-fns/locale';
import { CalendarDaysIcon, Clock4Icon } from 'lucide-react';
import Image from 'next/image';

import type { Activity, WeekAndTimeEntityResponse } from '@/api-types';
import activityBackground from '@/assets/images/background/activity.png';
import { Label, Typography } from '@/components/ui';
import { addLeadingZero } from '@/utils/helpers';

interface ScheduleCardProps {
  id: string;
  weekAndTime?: WeekAndTimeEntityResponse;
  activity: Activity;
}

export const ScheduleCard = ({ id, weekAndTime, activity }: ScheduleCardProps) => (
  <Label
    htmlFor={id}
    className='flex items-center gap-3 rounded-md border-2 border-inherit px-4 py-[14px] peer-data-[state=checked]:border-[#ABCF38] [&:has([data-state=checked])]:border-[#ABCF38]'
  >
    <Image
      src={activity.media.find((item) => item.flag === 'AVATAR')?.url ?? activityBackground}
      alt={activity.name}
      className='size-10 rounded-lg'
    />
    <div className='flex grow flex-col gap-[2px]'>
      <Typography variant='sub4' className='font-bold'>
        {activity.name}
      </Typography>
      <Typography variant='body4' className='text-muted-foreground'>
        {activity.category.RU}
      </Typography>
    </div>
    <div className='flex shrink-0 flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <CalendarDaysIcon className='size-3 text-muted-foreground' />
        <Typography variant='body4' className='text-muted-foreground'>
          {fns.format(new Date(), 'dd MMMM', { locale: fnsLocale.ru })}
        </Typography>
      </div>
      {!!weekAndTime && (
        <div className='flex items-center gap-2'>
          <Clock4Icon className='size-3 text-muted-foreground' />
          <Typography variant='body4' className='text-muted-foreground'>
            {addLeadingZero(weekAndTime.hourStart)}:{addLeadingZero(weekAndTime.minStart)}
          </Typography>
        </div>
      )}
    </div>
  </Label>
);
