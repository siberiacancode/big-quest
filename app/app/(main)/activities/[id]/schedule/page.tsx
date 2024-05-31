import React from 'react';
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getScheduleByActivityId } from '@/utils/api';
import { ROUTES } from '@/utils/constants';
import { getDevice } from '@/utils/helpers/server';

import { CalendarItem } from './(components)/CalendarItem/CalendarItem';

interface SchedulePageProps {
  params: { id: string };
}

const SchedulePage = async ({ params }: SchedulePageProps) => {
  const device = getDevice();
  const isMobile = device.type === 'mobile';
  const getScheduleByActivityIdResponse = await getScheduleByActivityId({
    params: { id: params.id },
    config: {
      cache: 'no-store'
    }
  });

  return (
    <section className='container relative bg-white p-4'>
      {isMobile && (
        <>
          <Link
            href={ROUTES.APP.ACTIVITIES.ID(params.id)}
            className={cn(
              'absolute left-4 top-8 z-10 !size-8 bg-white lg:hidden',
              buttonVariants({ variant: 'outline', size: 'icon' })
            )}
          >
            <ChevronLeftIcon />
          </Link>
          <Typography tag='h1' className='text-center font-semibold'>
            <I18nText path='app.activity.schedule.title' />
          </Typography>
        </>
      )}
      <div className='pt-[40px]'>
        <CalendarItem schedule={getScheduleByActivityIdResponse.rows} />
      </div>
    </section>
  );
};

export default SchedulePage;
