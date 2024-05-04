import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getActivityById } from '@/utils/api';

import { AddressItem } from './(components)/AddressItem/AddressItem';

interface ActivitysPageProps {
  params: { activityId: string };
}

const ActivityPage = async ({ params }: ActivitysPageProps) => {
  const getActivityByIdResponse = await getActivityById({
    params: { id: params.activityId },
    config: {
      cache: 'no-store'
    }
  });

  console.log(getActivityByIdResponse);

  return (
    <section className='container py-[108px]'>
      <div>Тут breadcrumbs </div>
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
