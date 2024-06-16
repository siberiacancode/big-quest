import Link from 'next/link';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
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
      <div
        className={cn(
          'h-fit min-h-screen bg-background p-0 pb-6 xs:mt-6 xs:min-h-fit xs:rounded-[8px] xs:p-6'
        )}
      >
        {isMobile && <CarouselMedia activity={getActivityByIdResponse} />}
        {!isMobile && <ActivityMedia activity={getActivityByIdResponse} />}
        <div className='px-[14px] xs:px-0'>
          <ActivityInfoCard activity={getActivityByIdResponse} />
          <div className='mt-4 space-y-4 md:space-y-8'>
            <div className='space-y-3'>
              <Typography tag='h5' variant='h7' className='text-sm md:text-lg'>
                <I18nText path='app.activity.description' />
              </Typography>
              <Typography variant='body2' className='mb-8 w-full text-muted-foreground'>
                {getActivityByIdResponse.description}
              </Typography>
            </div>
            {getScheduleByActivityIdResponse.rows && (
              <div className='space-y-3 xs:space-y-5'>
                <Typography tag='h5' variant='h7' className='text-sm md:text-lg'>
                  <I18nText path='app.activity.addresses' />
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
