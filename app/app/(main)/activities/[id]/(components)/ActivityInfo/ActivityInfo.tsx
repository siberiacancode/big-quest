import { Clock4Icon, UserRoundIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  ActivityCardCategory,
  ActivityCardContent,
  ActivityCardContentItem,
  ActivityCardDivider,
  ActivityCardHeader,
  ActivityCardHeaderTop,
  ActivityCardName,
  Typography
} from '@/components/ui';

export const ActivityInfo = ({ activity }: { activity: ActivityResponse }) => (
  <div className='mt-3 max-w-[483px]'>
    <ActivityCardHeader className='lg:gap-2'>
      <ActivityCardHeaderTop className='mb-0 mt-0'>
        <ActivityCardCategory>{activity.category}</ActivityCardCategory>
        {/* <div className='flex gap-2 lg:gap-4'>
                {activity.participants && (
                  <ActivityCardContentItem>
                    <UsersRoundIcon className='size-4 stroke-muted-foreground lg:size-5' />
                    <Typography tag='p' variant='body3' className='xsx:text-xs'>
                      {activity.participants}
                    </Typography>
                  </ActivityCardContentItem>
                )}
                {activity.likes && (
                  <ActivityCardContentItem>
                    <HeartIcon className='size-4 stroke-muted-foreground lg:size-5' />
                    <Typography tag='p' variant='body3' className='xsx:text-xs'>
                      {activity.likes}
                    </Typography>
                  </ActivityCardContentItem>
                )}
              </div> */}
      </ActivityCardHeaderTop>
      <ActivityCardName className='text-lg 2md:text-xl'>{activity.name}</ActivityCardName>
    </ActivityCardHeader>
    <ActivityCardContent className='mt-[11px]'>
      <div className='flex gap-[20px]'>
        {activity.ageLimit[0] && (
          <ActivityCardContentItem>
            <UserRoundIcon className='size-4 stroke-muted-foreground lg:size-5' />
            <Typography tag='p' variant='body3' className='text-gray-two'>
              <I18nText
                path='landing.activities.card.minimumAge'
                values={{ age: activity.ageLimit[0] }}
              />
            </Typography>
          </ActivityCardContentItem>
        )}
        {activity.duration && (
          <ActivityCardContentItem>
            <Clock4Icon className='size-4 stroke-muted-foreground lg:size-5' />
            <Typography tag='p' variant='body3' className='text-gray-two'>
              <I18nText
                path='landing.activities.card.duration'
                values={{ duration: activity.duration }}
              />
            </Typography>
          </ActivityCardContentItem>
        )}
      </div>
    </ActivityCardContent>
    <ActivityCardDivider className='mt-4' />
  </div>
);
