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
import { getActivityById } from '@/utils/api';
import { ROUTES } from '@/utils/constants';

import { ActivityInfo } from './(components)/ActivityInfo/ActivityInfo';
import { ActivityMedia } from './(components)/ActivityMedia/ActivityMedia';
import { AddressItem } from './(components)/AddressItem/AddressItem';

interface ActivityPageProps {
  params: { id: string };
}

const ActivityPage = async ({ params }: ActivityPageProps) => {
  const getActivityByIdResponse = await getActivityById({
    params: { id: params.id },
    config: {
      cache: 'no-store'
    }
  });

  return (
    <section className='container'>
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
      <div className='mt-6 bg-background p-6 2sm:rounded-[8px]'>
        <ActivityMedia activity={getActivityByIdResponse} />
        <ActivityInfo activity={getActivityByIdResponse} />
        <Typography variant='body2' className='mb-8 mt-6 w-full text-muted-foreground'>
          {getActivityByIdResponse.description}
        </Typography>
        <div className='space-y-5'>
          <Typography tag='h5' variant='h7'>
            <I18nText path='landing.adresses.title' />
          </Typography>
          {getActivityByIdResponse.schedule?.map((schedule, index) => (
            <AddressItem key={index} schedule={schedule} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityPage;
