import { I18nText } from '@/components/common';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { getActivityById, getScheduleByActivityId } from '@/utils/api';
import { ROUTES } from '@/utils/constants';
import { getDevice } from '@/utils/helpers/server';

import { ActivityInfoCard } from './(components)/ActivityInfoCard/ActivityInfoCard';
import { ActivityMedia } from './(components)/ActivityMedia/ActivityMedia';
import { AddressItem } from './(components)/AddressItem/AddressItem';
import { CarouselMedia } from './(components)/CarouselMedia/CarouselMedia';
import { groupAddresses } from './(constants)/groupAddresses';

interface ActivityPageProps {
  params: { id: string };
}

const ActivityPage = async ({ params }: ActivityPageProps) => {
  const device = getDevice();
  const isMobile = device.type === 'mobile';

  const getActivityByIdResponse = await getActivityById({
    params: { id: params.id },
    config: {
      cache: 'no-store'
    }
  });

  const getScheduleByActivityIdResponse = await getScheduleByActivityId({
    params: { id: params.id },
    config: {
      cache: 'no-store'
    }
  });

  return (
    <section className='container p-0'>
      {!isMobile && (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className='list-none text-base'>
              <BreadcrumbLink href={ROUTES.APP.ACTIVITIES.ROOT}>
                <I18nText path='landing.activities.title' />
              </BreadcrumbLink>
              <BreadcrumbSeparator />
              <BreadcrumbPage>{getActivityByIdResponse.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
      <div
        className={cn(
          'bg-background p-6 xs:mt-6 xs:rounded-[8px]',
          isMobile && 'h-fit min-h-screen p-0 pb-6'
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
                  <AddressItem key={index} address={address} id={params.id} />
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
