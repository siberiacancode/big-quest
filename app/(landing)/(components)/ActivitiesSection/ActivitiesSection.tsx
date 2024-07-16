import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import {
  ActivityCard,
  ActivityCardCategory,
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
    <section id='activities' className='container max-w-[1160px] py-12'>
      <div className='mb-8 flex items-center justify-between'>
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
      <div className='grid grid-cols-2 gap-x-5 gap-y-5 lgx:w-full md:grid-cols-3 md:gap-x-10 md:gap-y-8'>
        {getActivityResponse.rows.map((activity) => {
          const activityCover = activity.media.find((item) => item.flag === 'AVATAR')!;

          return (
            <ActivityCard>
              <ActivityCardImage
                src={activityCover.url}
                alt={activity.name}
                className='rounded-[12px] md:rounded-[30px]'
              />
              <ActivityCardHeader>
                <ActivityCardName className='text-gray-one'>{activity.name}</ActivityCardName>
                <ActivityCardCategory>{activity.category.RU}</ActivityCardCategory>
              </ActivityCardHeader>
            </ActivityCard>
          );
        })}
      </div>
    </section>
  );
};
