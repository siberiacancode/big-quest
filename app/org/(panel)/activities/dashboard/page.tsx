import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs';
import { getActivities } from '@/utils/api';

import { ActivitiesDashboard } from './(components)/ActivitiesDashboard/ActivitiesDashboard';
import { ActivitiesTable } from './(components)/ActivitiesTable/ActivitiesTable';

export interface ActivitiesDashboardPageProps {
  searchParams: SearchParams;
}

const DEFAULT_ACTIVITIES_LIMIT = '10';
const DEFAULT_ACTIVITIES_PAGE = '1';

const ActivitiesDashboardPage = async ({ searchParams }: ActivitiesDashboardPageProps) => {
  const activitiesTableResponse = await getActivities({
    config: {
      params: {
        limit: DEFAULT_ACTIVITIES_LIMIT,
        current: DEFAULT_ACTIVITIES_PAGE,
        ...searchParams
      }
    }
  });

  return (
    <div className='bg-secondary px-4'>
      <Breadcrumbs ids={{ dashboard: { hidden: true }, organizations: { clickable: false } }} />
      <ActivitiesDashboard />
      <ActivitiesTable
        activities={activitiesTableResponse.rows}
        pagination={activitiesTableResponse.pagination}
      />
    </div>
  );
};

export default ActivitiesDashboardPage;
