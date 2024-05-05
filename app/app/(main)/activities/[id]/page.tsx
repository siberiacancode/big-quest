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

import { AddressItem } from './(components)/AddressItem/AddressItem';

interface ActivityPageProps {
  params: { activityId: string };
}

const ActivityPage = async ({ params }: ActivityPageProps) => {
  const getActivityByIdResponse = await getActivityById({
    params: { id: '1' },
    config: {
      cache: 'no-store'
    }
  });

  console.log(params.activityId);
  console.log(getActivityByIdResponse);

  return (
    <section className='container py-[108px]'>
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
      <div>Тут блок с картинками </div>
      <div className='space-y-5'>
        <Typography tag='h5' variant='h7'>
          <I18nText path='landing.adresses.title' />
        </Typography>
        {getActivityByIdResponse.schedule?.map((schedule, index) => (
          <AddressItem key={index} schedule={schedule} />
        ))}
      </div>
    </section>
  );
};

export default ActivityPage;
