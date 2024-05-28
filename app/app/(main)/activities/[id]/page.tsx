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
import { getActivityById } from '@/utils/api';
import { ROUTES } from '@/utils/constants';
import { getDevice } from '@/utils/helpers/server';

import { ActivityInfo } from './(components)/ActivityInfo/ActivityInfo';
import { ActivityMedia } from './(components)/ActivityMedia/ActivityMedia';

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

  return (
    <section className='container xsx:p-0 '>
      {!isMobile && (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className='list-none text-base'>
              <BreadcrumbLink href={ROUTES.APP.ACTIVITIES}>
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
          `bg-background p-6 xs:mt-6 xs:rounded-[8px]`,
          isMobile && 'mb-[80px] h-fit min-h-screen p-0 pb-6'
        )}
      >
        <ActivityMedia activity={getActivityByIdResponse} isMobile={isMobile} />
        <div className='px-[14px] xs:px-0'>
          <ActivityInfo activity={getActivityByIdResponse} />
          <div className='mt-4 space-y-4 md:space-y-8'>
            <div className='space-y-3'>
              <Typography tag='h5' variant='h7' className='text-sm md:text-lg'>
                <I18nText path='app.activity.description' />
              </Typography>
              <Typography variant='body2' className='mb-8 w-full text-muted-foreground'>
                {getActivityByIdResponse.description}
              </Typography>
            </div>
            <div className='space-y-3 xs:space-y-5'>
              <Typography tag='h5' variant='h7' className='text-sm md:text-lg'>
                <I18nText path='app.activity.addresses' />
              </Typography>
              {/* {getActivityByIdResponse.schedule?.map((schedule, index) => (
                <AddressItem key={index} schedule={schedule} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPage;
