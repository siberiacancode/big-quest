import { getOrganization, getOrganizationDashboard } from '@/utils/api';

import { OrgBreadcrumbs } from '../(components)/OrgBreadcrumbs/OrgBreadcrumbs';

import { OrganizationsDashboard } from './(components)/OrganizationsDashboard/OrganizationsDashboard';
import { OrganizationsTable } from './(components)/OrganizationsTable/OrganizationsTable';

export interface OrganizationsPageProps {
  searchParams: SearchParams;
}

const DEFAULT_ORGANIZATIONS_LIMIT = '10';
const DEFAULT_ORGANIZATIONS_PAGE = '1';

const OrganizationsPage = async ({ searchParams }: OrganizationsPageProps) => {
  const [organizationsResponse, organizationsDashboard] = await Promise.all([
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
      <OrgBreadcrumbs />
      <OrganizationsDashboard dashboard={organizationsDashboard} />
      <OrganizationsTable
        organizations={organizationsResponse.rows}
        pagination={organizationsResponse.pagination}
      />
    </div>
  );
};

export default OrganizationsPage;
