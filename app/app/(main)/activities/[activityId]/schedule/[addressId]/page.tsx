import React from 'react';

import { cn } from '@/lib/utils';
import { getScheduleByActivityId } from '@/utils/api';
import { getDevice } from '@/utils/helpers/server';

import { ScheduleItem } from './(components)/ScheduleItem/ScheduleItem';

interface SchedulePageProps {
  params: { activityId: string; addressId: string };
}

const SchedulePage = async ({ params }: SchedulePageProps) => {
  const { isMobile } = getDevice();

  const getScheduleByActivityIdResponse = await getScheduleByActivityId({
    params: { id: params.activityId },
    config: {
      cache: 'no-store'
    }
  });

  return (
    <section
      className={cn(
        'container relative mx-auto min-h-[677px] rounded-[8px] bg-white px-4 pt-4 md:min-h-fit md:px-6 md:py-6',
        isMobile && 'min-h-screen rounded-[0px]'
      )}
    >
      <ScheduleItem
        schedule={getScheduleByActivityIdResponse.rows.filter(
          (schedule) => schedule.address?.id === params.addressId
        )}
      />
    </section>
  );
};

export default SchedulePage;
