import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';
import { getActivityPublic } from '@/utils/api';
import type { CITIES } from '@/utils/constants';
import { ROUTES } from '@/utils/constants';

import {
  ACTIVITIES_REVALIDATION_TIME,
  DEFAULT_ACTIVITIES_LIMIT,
  DEFAULT_ACTIVITIES_PAGE
} from '../../(constants)';

import { ActivityCard } from './components/ActivityCard/ActivityCard';

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

  return (
    <section id='activities' className='container mt-28'>
      <div className='flex items-center justify-between'>
        <Typography tag='h2' variant='h1' className='text-2xl md:text-[32px]'>
          <I18nText path='landing.activities.title' />
        </Typography>

        <Link href={ROUTES.LANDING.ROOT} className={buttonVariants({ variant: 'link' })}>
          <Typography tag='p' variant='h6'>
            <I18nText path='button.watchAll' />
          </Typography>
          <ChevronRightIcon />
        </Link>
      </div>
      <div className='mt-16 flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-3'>
        {getActivityPublicResponse.rows
          .filter((activity) => activity.cover)
          .map((activity) => (
            <ActivityCard key={activity.id} {...activity} cover={activity.cover!} />
          ))}
      </div>
    </section>
  );
};
