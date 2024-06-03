import * as fns from 'date-fns';
import * as fnsLocale from 'date-fns/locale';
import { CalendarDaysIcon, Clock4Icon } from 'lucide-react';
import Image from 'next/image';

import type { Activity, WeekAndTimeEntityResponse } from '@/api-types';
import defaultActivityBackground from '@/assets/images/background/activity.png';
import { Typography } from '@/components/ui';
import { useI18n } from '@/utils/contexts';
import { addLeadingZero } from '@/utils/helpers';

interface ScheduleCardProps {
  weekAndTime?: WeekAndTimeEntityResponse;
  activity: Activity;
}

export const ScheduleCard = ({ weekAndTime, activity }: ScheduleCardProps) => {
  const i18n = useI18n();
  const activityAvatar = activity.media.find((item) => item.flag === 'AVATAR');

  return (
    <div className='flex w-full items-center gap-3 px-4 py-[14px]'>
      <Image
        src={activityAvatar?.url ?? defaultActivityBackground}
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
            {fns.format(new Date(), 'dd MMMM', { locale: fnsLocale[i18n.locale] })}
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
    </div>
  );
};
