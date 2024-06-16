import { getDevice } from '@/utils/helpers/server';

import { ActivitiesBreadcrumbs } from '../(components)/ActivitiesBreadcrumbs/ActivitiesBreadcrumbs';

interface ActivityLayoutProps {
  children: React.ReactNode;
  params: { activityId: string; addressId: string };
}

const ActivityLayout = ({ children, params }: ActivityLayoutProps) => {
  const { isMobile } = getDevice();

  return (
    <div>
      <ActivitiesBreadcrumbs isMobile={isMobile} activityId={params.activityId} />

      {children}
    </div>
  );
};

export default ActivityLayout;
