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
import { getActivity } from '@/utils/api';
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
  const getActivityResponse = await getActivity({
    params: {
      city: cityId,
      limit: DEFAULT_ACTIVITIES_LIMIT,
      current: DEFAULT_ACTIVITIES_PAGE
    },
    config: {
      next: { revalidate: ACTIVITIES_REVALIDATION_TIME }
    }
  });

  if (!getActivityResponse.rows.length) return null;

  return (
    <section id='activities' className='container py-12'>
      <div className='flex items-center justify-between'>
        <Typography tag='h2' variant='h6' className='lg:text-4xl'>
          <I18nText path='landing.activities.title' />
        </Typography>
        <Link href={ROUTES.APP.ACTIVITIES} className={buttonVariants({ variant: 'link' })}>
          <Typography tag='p' variant='body1' className='py-0 xxsx:text-base'>
            <I18nText path='button.watchAll' />
          </Typography>
          <ChevronRightIcon className='text-muted-foreground' />
        </Link>
      </div>
      <div className='mt-4 flex flex-col items-center justify-center gap-8 sm:mt-16 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-3'>
        {getActivityResponse.rows.map((activity) => {
          const activityCover = activity.media.find((item) => item.flag === 'AVATAR')!;

          return (
            <ActivityCard>
              <ActivityCardImage src={activityCover.url} alt={activity.name} />
              <ActivityCardHeader>
                <ActivityCardCategory>{activity.category.RU}</ActivityCardCategory>
                <ActivityCardName>{activity.name}</ActivityCardName>
              </ActivityCardHeader>
              <ActivityCardDivider />
              <ActivityCardContent>
                <ActivityCardContentItem>
                  <UserRoundIcon className='size-6 stroke-muted-foreground' />
                  <I18nText
                    path='landing.activities.card.minimumAge'
                    values={{ age: activity.ageLimit[0] }}
                  />
                </ActivityCardContentItem>
                <ActivityCardContentItem>
                  <Clock4Icon className='size-6 stroke-muted-foreground' />
                  <I18nText
                    path='landing.activities.card.duration'
                    values={{ duration: activity.duration }}
                  />
                </ActivityCardContentItem>
              </ActivityCardContent>
            </ActivityCard>
          );
        })}
      </div>
    </section>
  );
};
