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

  if (!getActivityPublicResponse.rows.length) return null;

  return (
    <section id='activities' className='container mt-[72px] xxsx:mt-12'>
      <div className='flex items-center justify-between'>
        <Typography tag='h2' variant='h1' className='mdx:text-3xl xsx:text-[21px]'>
          <I18nText path='landing.activities.title' />
        </Typography>
        <Link href={ROUTES.LANDING.ROOT} className={buttonVariants({ variant: 'link' })}>
          <Typography tag='p' variant='body1' className='py-0 xxsx:text-base'>
            <I18nText path='button.watchAll' />
          </Typography>
          <ChevronRightIcon className='text-muted-foreground' />
        </Link>
      </div>
      <div className='mt-[72px] grid grid-cols-3 gap-x-10 gap-y-12 2lgx:gap-x-5 lgx:w-full 2mdx:mt-10 mdx:grid-cols-2 3smx:gap-x-2 3smx:gap-y-5 xxsx:mt-10 md:justify-between'>
        {getActivityPublicResponse.rows.slice(0, 6).map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </section>
  );
};
