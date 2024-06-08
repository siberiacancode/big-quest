import { getDevice } from '@/utils/helpers/server';

import { ActivitiesBreadcrumbs } from '../(components)/ActivitiesBreadcrumbs/ActivitiesBreadcrumbs';

interface ActivityLayoutProps {
  children: React.ReactNode;
}

const ActivityLayout = ({ children }: ActivityLayoutProps) => {
  const device = getDevice();
  const isMobile = device.type === 'mobile';

  return (
    <div>
      {!isMobile && <ActivitiesBreadcrumbs />}
      {children}
    </div>
  );
};

export default ActivityLayout;
