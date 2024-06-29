import React from 'react';

import { getScheduleByActivityId } from '@/utils/api';

import { ScheduleItem } from './(components)/ScheduleItem/ScheduleItem';

interface SchedulePageProps {
  params: { activityId: string; addressId: string };
}

const SchedulePage = async ({ params }: SchedulePageProps) => {
  const getScheduleByActivityIdResponse = await getScheduleByActivityId({
    params: { id: params.activityId },
    config: {
      cache: 'no-store'
    }
  });

  return (
    <section className='container relative mx-auto min-h-[665px] rounded-[8px] bg-white px-4 pt-4 md:px-6 md:py-6'>
      <ScheduleItem
        schedule={getScheduleByActivityIdResponse.rows.filter(
          (schedule) => schedule.address?.id === params.addressId
        )}
      />
    </section>
  );
};

export default SchedulePage;
