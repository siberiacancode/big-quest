import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

import { ActivityCard } from './components/ActivityCard/ActivityCard';
import { activities } from './constants/activities';

export const ActivitiesSection = () => (
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
    <div className='mt-[72px] grid grid-cols-4 gap-x-5 gap-y-12 xlx:grid-cols-3 lgx:grid-cols-2 mdx:mt-11 smx:mt-8 smx:flex smx:flex-col smx:items-center smx:gap-y-8'>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} {...activity} />
      ))}
    </div>
  </section>
);
