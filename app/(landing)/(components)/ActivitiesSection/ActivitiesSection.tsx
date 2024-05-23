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
    <section id='activities' className='container mt-28'>
      <div className='flex items-center justify-between'>
        <Typography tag='h2' variant='h1' className='text-2xl md:text-[32px]'>
          <I18nText path='landing.activities.title' />
        </Typography>
        <Link href={ROUTES.APP.ACTIVITIES} className={buttonVariants({ variant: 'link' })}>
          <Typography tag='p' variant='h6'>
            <I18nText path='button.watchAll' />
          </Typography>
          <ChevronRightIcon />
        </Link>
      </div>
      <div className='mt-16 flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-3'>
        {getActivityPublicResponse.rows.map((activity) => (
          <ActivityCard>
            {/* Временное решение до мержа релиза */}
            <ActivityCardImage src={activity.media[0].url} alt={activity.name} />
            <ActivityCardHeader>
              <ActivityCardCategory>{activity.category}</ActivityCardCategory>
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
        ))}
      </div>
    </section>
  );
};
