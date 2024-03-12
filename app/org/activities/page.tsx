import { getActivitiesDashboard } from '@/utils/api/requests/activities/dashboard';

import { OrgBreadcrumbs } from '../components/OrgBreadcrumbs/OrgBreadcrumbs';

import { ActivitiesDashboard } from './components/ActivitiesDashboard/ActivitiesDashboard';

const ActivitiesPage = async () => {
  const activitiesDashboard = await getActivitiesDashboard();

  return (
    <div className='bg-secondary px-4'>
      <OrgBreadcrumbs />
      <ActivitiesDashboard dashboard={activitiesDashboard} />
    </div>
  );
};

export default ActivitiesPage;
