import { Clock4Icon, UserRoundIcon } from 'lucide-react';

import type { ActivityResponse } from '@/api-types';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

interface ActivityInfoCardProps {
  activity: ActivityResponse;
}

export const ActivityInfoCard = ({ activity }: ActivityInfoCardProps) => (
  <div className='mt-3 max-w-[483px]'>
    <div className='lg:gap-2'>
      <div className='mb-0 mt-0'>
        <div>{activity.category.RU}</div>
        {/* <div className='flex gap-2 lg:gap-4'>
                {activity.participants && (
                  <div>
                    <UsersRoundIcon className='size-4 stroke-muted-foreground lg:size-5' />
                    <Typography tag='p' variant='body3' className='xsx:text-xs'>
                      {activity.participants}
                    </Typography>
                  </Typography>
                )}
                {activity.likes && (
                  <Typography>
                    <HeartIcon className='size-4 stroke-muted-foreground lg:size-5' />
                    <Typography tag='p' variant='body3' className='xsx:text-xs'>
                      {activity.likes}
                    </Typography>
                  </Typography>
                )}
              </div> */}
      </div>
      <Typography className='text-lg font-semibold 2md:text-xl'>{activity.name}</Typography>
    </div>
    <div className='mt-[11px]'>
      <div className='flex gap-[20px] lg:gap-3'>
        {activity.ageLimit[0] && (
          <div className='flex gap-1'>
            <UserRoundIcon className='size-4 stroke-muted-foreground lg:size-5' />
            <Typography tag='p' variant='body3' className='text-gray-two'>
              <I18nText
                path='page.landing.activities.card.minimumAge'
                values={{ age: activity.ageLimit[0] }}
              />
            </Typography>
          </div>
        )}
        {activity.duration && (
          <div className='flex gap-1 lg:gap-3'>
            <Clock4Icon className='size-4 stroke-muted-foreground lg:size-5' />
            <Typography tag='p' variant='body3' className='text-gray-two'>
              <I18nText
                path='page.landing.activities.card.duration'
                values={{ duration: activity.duration }}
              />
            </Typography>
          </div>
        )}
      </div>
      <div className='mt-4 h-[1px] w-full bg-muted' />
    </div>
  </div>
);
