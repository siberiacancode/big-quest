import { getActivities } from '@/utils/api';

import { OrgBreadcrumbs } from '../../(components)/OrgBreadcrumbs/OrgBreadcrumbs';

import { ActivitiesDashboard } from './(components)/ActivitiesDashboard/ActivitiesDashboard';
import { ActivitiesTable } from './(components)/ActivitiesTable/ActivitiesTable';

export interface ActivitiesDashboardPageProps {
  searchParams: SearchParams;
}

const DEFAULT_ORGANIZATIONS_LIMIT = '10';
const DEFAULT_ORGANIZATIONS_PAGE = '1';

const ActivitiesDashboardPage = async ({ searchParams }: ActivitiesDashboardPageProps) => {
  const activitiesTableResponse = await getActivities({
    config: {
      params: {
        limit: DEFAULT_ORGANIZATIONS_LIMIT,
        current: DEFAULT_ORGANIZATIONS_PAGE,
        ...searchParams
      }
    }
  });

  return (
    <div className='bg-secondary px-4'>
      <OrgBreadcrumbs ids={{ dashboard: { hidden: true }, organizations: { clickable: false } }} />
      <ActivitiesDashboard />
      <ActivitiesTable
        actvities={activitiesTableResponse.rows}
        pagination={activitiesTableResponse.pagination}
      />
    </div>
  );
};

export default ActivitiesDashboardPage;
