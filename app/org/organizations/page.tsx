import React from 'react';

import { getOrganization, getOrganizationDashboard } from '@/utils/api';

import { NextBreadcrumbs } from '../components/NextBreadcrumbs/NextBreadcrumbs';

import { OrganizationsDashboard } from './components/OrganizationsDashboard/OrganizationsDashboard';
import { OrganizationsTable } from './components/OrganizationsTable/OrganizationsTable';
import OrganizationsLoading from './loading';

export interface OrganizationsPageProps {
  searchParams: SearchParams;
}

const DEFAULT_ORGANIZATIONS_LIMIT = '10';
const DEFAULT_ORGANIZATIONS_PAGE = '1';

const OrganizationsPage = async ({ searchParams }: OrganizationsPageProps) => {
  const [organizationResponse, dashboardResponse] = await Promise.all([
    getOrganization({
      config: {
        params: {
          limit: DEFAULT_ORGANIZATIONS_LIMIT,
          current: DEFAULT_ORGANIZATIONS_PAGE,
          ...searchParams
        }
      }
    }),
    getOrganizationDashboard()
  ]);

  return (
    <div className='bg-secondary px-4'>
      <NextBreadcrumbs />
      <React.Suspense fallback={<OrganizationsLoading />}>
        <OrganizationsDashboard dashboard={dashboardResponse} />
        <OrganizationsTable
          organizations={organizationResponse.rows}
          pagination={organizationResponse.pagination}
        />
      </React.Suspense>
    </div>
  );
};

export default OrganizationsPage;
