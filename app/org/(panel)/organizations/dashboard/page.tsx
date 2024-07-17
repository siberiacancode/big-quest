import { notFound } from 'next/navigation';

import { getOrganization } from '@/utils/api';

import { OrgBreadcrumbs } from '../../(components)/OrgBreadcrumbs/OrgBreadcrumbs';

import { OrganizationsDashboard } from './(components)/OrganizationsDashboard/OrganizationsDashboard';
import { OrganizationsTable } from './(components)/OrganizationsTable/OrganizationsTable';

export interface OrganizationsPageProps {
  searchParams: SearchParams;
}

const DEFAULT_ORGANIZATIONS_LIMIT = 10;
const DEFAULT_ORGANIZATIONS_PAGE = 1;

const OrganizationsDashboardPage = async ({ searchParams }: OrganizationsPageProps) => {
  const getOrganizationResponse = await getOrganization({
    params: {
      limit: DEFAULT_ORGANIZATIONS_LIMIT,
      current: DEFAULT_ORGANIZATIONS_PAGE,
      ...searchParams
    },
    config: { cache: 'no-store' }
  });

  if ('message' in getOrganizationResponse) return notFound();

  return (
    <div className='bg-secondary p-4 lg:p-8'>
      <OrgBreadcrumbs
        className='mb-4'
        ids={{ dashboard: { hidden: true }, organizations: { clickable: false } }}
      />
      <OrganizationsDashboard />
      <OrganizationsTable
        organizations={getOrganizationResponse.rows}
        pagination={getOrganizationResponse.pagination}
      />
    </div>
  );
};

export default OrganizationsDashboardPage;
