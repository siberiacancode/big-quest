import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';
import { getDevice } from '@/utils/helpers/server';

interface SchedulePageLayoutPros {
  params: { activityId: string };
  children: React.ReactNode;
}

const SchedulePageLayout = ({ params, children }: SchedulePageLayoutPros) => {
  const { isMobile } = getDevice();
  return (
    <>
      {isMobile && (
        <Link
          href={ROUTES.APP.ACTIVITIES.ITEM(params.activityId)}
          className={cn(
            'absolute left-4 top-8 z-10 !size-8 bg-white lg:hidden',
            buttonVariants({ variant: 'outline', size: 'icon' })
          )}
        >
          <ChevronLeftIcon />
        </Link>
      )}
      {children}
    </>
  );
};

export default SchedulePageLayout;
