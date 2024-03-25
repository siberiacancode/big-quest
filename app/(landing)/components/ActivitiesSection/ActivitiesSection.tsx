import { ChevronRightIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

import { ActivityCard } from './components/ActivityCard/ActivityCard';
import { activities } from './constants/activities';

export const ActivitiesSection = () => (
  <section id='activities' className='px-16 py-14 mdx:px-11 mdx:py-10 xsx:px-5'>
    <div className='flex justify-between smx:flex-col smx:items-center'>
      <Typography tag='h2' variant='h1' className='xsx:text-[25px]'>
        <I18nText path='landing.activities.title' />
      </Typography>
      <div className='flex items-center gap-3 hover:cursor-pointer hover:underline'>
        <Typography tag='p' variant='h6' className=''>
          <I18nText path='landing.activities.watchAll' />
        </Typography>
        <ChevronRightIcon />
      </div>
    </div>
    <div className='mt-[72px] grid grid-cols-4 gap-x-12 gap-y-12 xlx:grid-cols-3 lgx:grid-cols-2 mdx:mt-11 smx:mt-8 smx:flex smx:flex-col smx:items-center smx:gap-y-8'>
      {activities.map((activity, index) => (
        <ActivityCard key={index} {...activity} />
      ))}
    </div>
  </section>
);
