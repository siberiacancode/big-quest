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
  params: { id: string; addressId: string };
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
    <section
      className={cn(
        'container relative mx-auto  min-h-[677px] rounded-[8px] bg-white px-4 md:min-h-fit md:px-6 md:py-6',
        isMobile && 'min-h-screen rounded-[0px]'
      )}
    >
      {isMobile && (
        <div className='pt-[42px]'>
          <Link
            href={ROUTES.APP.ACTIVITIES.ID(params.id)}
            className={cn(
              'absolute left-4 top-8 z-10 !size-8 bg-white lg:hidden',
              buttonVariants({ variant: 'outline', size: 'icon' })
            )}
          >
            <ChevronLeftIcon />
          </Link>
          <Typography variant='h5' tag='h1' className='text-center font-semibold'>
            <I18nText path='app.activity.schedule.title' />
          </Typography>
        </div>
      )}

      <CalendarItem
        schedule={getScheduleByActivityIdResponse.rows.filter(
          (schedule) => schedule.address?.id === params.addressId
        )}
        isMobile={isMobile}
      />
    </section>
  );
};

export default SchedulePage;
