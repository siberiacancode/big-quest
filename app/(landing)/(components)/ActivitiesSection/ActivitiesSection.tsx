import { ChevronRightIcon, Clock4Icon, UserRoundIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import {
  ActivityCard,
  ActivityCardCategory,
  ActivityCardContent,
  ActivityCardContentItem,
  ActivityCardDivider,
  ActivityCardHeader,
  ActivityCardImage,
  ActivityCardName,
  buttonVariants,
  Typography
} from '@/components/ui';
import { getActivityPublic } from '@/utils/api';
import type { CITIES } from '@/utils/constants';
import { ROUTES } from '@/utils/constants';

import {
  ACTIVITIES_REVALIDATION_TIME,
  DEFAULT_ACTIVITIES_LIMIT,
  DEFAULT_ACTIVITIES_PAGE
} from '../../(constants)';

interface ActivitiesSectionProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
}

export const ActivitiesSection = async ({ cityId }: ActivitiesSectionProps) => {
  const getActivityPublicResponse = await getActivityPublic({
    params: {
      city: cityId,
      limit: DEFAULT_ACTIVITIES_LIMIT,
      current: DEFAULT_ACTIVITIES_PAGE
    },
    config: {
      next: { revalidate: ACTIVITIES_REVALIDATION_TIME }
    }
  });

  if (!getActivityPublicResponse.rows.length) return null;

  return (
    <section id='activities' className='container py-12'>
      <div className='flex items-center justify-between'>
        <Typography tag='h2' variant='h1' className='text-[21px] lg:text-4xl'>
          <I18nText path='landing.activities.title' />
        </Typography>
        <Link href={ROUTES.APP.ACTIVITIES} className={buttonVariants({ variant: 'link' })}>
          <Typography tag='p' variant='body1' className='py-0 xxsx:text-base'>
            <I18nText path='button.watchAll' />
          </Typography>
          <ChevronRightIcon className='text-muted-foreground' />
        </Link>
      </div>
      <div className='mt-10 grid grid-cols-3 gap-x-2 gap-y-5 md:justify-between lg:mt-[72px] lg:gap-x-10 lg:gap-y-12'>
        {getActivityPublicResponse.rows.map((activity) => {
          const activityMedia = activity.media?.find((media) => media.flag === 'COVER');

          return (
            <ActivityCard>
              {activityMedia && <ActivityCardImage src={activityMedia.url} alt={activity.name} />}
              {!activityMedia && (
                <div className='w-full rounded-[16px] bg-muted p-1/2 md:rounded-[30px]' />
              )}
              <ActivityCardHeader>
                <ActivityCardCategory>{activity.category}</ActivityCardCategory>
                <ActivityCardName>{activity.name}</ActivityCardName>
              </ActivityCardHeader>
              <ActivityCardDivider />
              <ActivityCardContent>
                {activity.ageLimit[0] && (
                  <ActivityCardContentItem>
                    <UserRoundIcon className='size-4 stroke-muted-foreground lg:size-6' />
                    <Typography tag='p' variant='body3' className='xsx:text-xs'>
                      <I18nText
                        path='landing.activities.card.minimumAge'
                        values={{ age: activity.ageLimit[0] }}
                      />
                    </Typography>
                  </ActivityCardContentItem>
                )}
                {activity.duration && (
                  <ActivityCardContentItem>
                    <Clock4Icon className='size-4 stroke-muted-foreground lg:size-6' />
                    <Typography tag='p' variant='body3' className='xsx:text-xs'>
                      <I18nText
                        path='landing.activities.card.duration'
                        values={{ duration: activity.duration }}
                      />
                    </Typography>
                  </ActivityCardContentItem>
                )}
              </ActivityCardContent>
            </ActivityCard>
          );
        })}
      </div>
    </section>
  );
};
