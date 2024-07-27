import { ChevronLeftIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getActivityById, getScheduleByActivityId } from '@/utils/api';
import { ROUTES } from '@/utils/constants';
import { getDevice } from '@/utils/helpers/server';

import { ActivityInfoCard } from './(components)/ActivityInfoCard/ActivityInfoCard';
import { ActivityMedia } from './(components)/ActivityMedia/ActivityMedia';
import { AddressItem } from './(components)/AddressItem/AddressItem';
import { CarouselMedia } from './(components)/CarouselMedia/CarouselMedia';
import { groupAddresses } from './(helpers)/groupAddresses';

interface ActivityPageProps {
  params: { activityId: string };
}

export async function generateMetadata({ params }: ActivityPageProps): Promise<Metadata> {
  const getActivityByIdResponse = await getActivityById({
    params: { id: params.activityId },
    config: {
      cache: 'no-store'
    }
  });

  return {
    title: `Большой Квест | ${getActivityByIdResponse.name}`,
    description: `Большой Квест | ${getActivityByIdResponse.name}`
  };
}

const ActivityPage = async ({ params }: ActivityPageProps) => {
  const { isMobile } = getDevice();

  const getActivityByIdResponse = await getActivityById({
    params: { id: params.activityId },
    config: {
      cache: 'no-store'
    }
  });

  const getScheduleByActivityIdResponse = await getScheduleByActivityId({
    params: { id: params.activityId },
    config: {
      cache: 'no-store'
    }
  });

  return (
    <section className='container p-0'>
      {isMobile && (
        <Link
          href={ROUTES.APP.ACTIVITIES.ROOT}
          className={cn(
            'absolute left-4 top-8 z-10 !size-8 bg-white lg:hidden',
            buttonVariants({ variant: 'outline', size: 'icon' })
          )}
        >
          <ChevronLeftIcon />
        </Link>
      )}
      <div className='h-fit min-h-screen rounded-[8px] bg-background p-0 pb-6 xs:mt-6 xs:min-h-fit xs:p-6'>
        <CarouselMedia className='xs:hidden' activity={getActivityByIdResponse} />
        <ActivityMedia
          className='hidden w-full flex-col gap-4 xs:flex md:flex-row 2md:gap-6'
          activity={getActivityByIdResponse}
        />
        <div className='px-[14px] xs:px-0'>
          <ActivityInfoCard activity={getActivityByIdResponse} />
          <div className='mt-4 space-y-4 md:space-y-8'>
            <div className='space-y-3'>
              <Typography tag='h5' variant='h7' className='text-sm md:text-lg'>
                <I18nText path='page.app.activity.description' />
              </Typography>
              <Typography variant='body2' className='mb-8 w-full text-muted-foreground'>
                {getActivityByIdResponse.description}
              </Typography>
            </div>
            {getScheduleByActivityIdResponse.rows && (
              <div className='space-y-3 xs:space-y-5'>
                <Typography tag='h5' variant='h7' className='text-sm md:text-lg'>
                  <I18nText path='page.app.activity.addresses' />
                </Typography>
                {groupAddresses(getScheduleByActivityIdResponse.rows).map((address, index) => (
                  <Link
                    key={index}
                    href={ROUTES.APP.ACTIVITIES.SCHEDULE(params.activityId, address.id)}
                    className='flex w-full items-center justify-between gap-3 rounded-lg border border-border p-3 hover:bg-secondary'
                  >
                    <AddressItem address={address} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPage;
