import { getActivities } from '@/utils/api';

import { OrgBreadcrumbs } from '../components/OrgBreadcrumbs/OrgBreadcrumbs';

import { ActivitiesDashboard } from './components/ActivitiesDashboard/ActivitiesDashboard';
import { ActivitiesTable } from './components/ActivitiesTable/ActivitiesTable';

export interface ActivitiesPageProps {
  searchParams: SearchParams;
}

const DEFAULT_ORGANIZATIONS_LIMIT = '10';
const DEFAULT_ORGANIZATIONS_PAGE = '1';

const ActivitiesPage = async ({ searchParams }: ActivitiesPageProps) => {
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
      <OrgBreadcrumbs />
      <ActivitiesDashboard />
      <ActivitiesTable
        actvities={activitiesTableResponse.rows}
        pagination={activitiesTableResponse.pagination}
      />
    </div>
  );
};

export default ActivitiesPage;
