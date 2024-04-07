import { getOrganization, getOrganizationDashboard } from '@/utils/api';

import { OrgBreadcrumbs } from '../../(components)/OrgBreadcrumbs/OrgBreadcrumbs';

import { OrganizationsDashboard } from './(components)/OrganizationsDashboard/OrganizationsDashboard';
import { OrganizationsTable } from './(components)/OrganizationsTable/OrganizationsTable';

export interface OrganizationsPageProps {
  searchParams: SearchParams;
}

const DEFAULT_ORGANIZATIONS_LIMIT = '10';
const DEFAULT_ORGANIZATIONS_PAGE = '1';

const OrganizationsDashboardPage = async ({ searchParams }: OrganizationsPageProps) => {
  const [getOrganizationResponse, getOrganizationDashboardResponse] = await Promise.all([
    getOrganization({
      config: {
        params: {
          limit: DEFAULT_ORGANIZATIONS_LIMIT,
          current: DEFAULT_ORGANIZATIONS_PAGE,
          ...searchParams
        },
        cache: 'no-store'
      }
    }),
    getOrganizationDashboard({
      config: { cache: 'no-store' }
    })
  ]);

  return (
    <div className='bg-secondary px-4'>
      <OrgBreadcrumbs
        className='mb-5'
        ids={{ dashboard: { hidden: true }, organizations: { clickable: false } }}
      />
      <OrganizationsDashboard dashboard={getOrganizationDashboardResponse} />
      <OrganizationsTable
        organizations={getOrganizationResponse.rows}
        pagination={getOrganizationResponse.pagination}
      />
    </div>
  );
};

export default OrganizationsDashboardPage;
