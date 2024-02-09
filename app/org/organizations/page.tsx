import { Suspense } from 'react';

import { I18nText } from '@/components/common';
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui';
import { getOrganization, getOrganizationDashboard } from '@/utils/api';
import { ROUTES } from '@/utils/constants';

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
    getOrganizationDashboard({})
  ]);

  return (
    <div className='bg-secondary px-4'>
      <Breadcrumbs>
        <BreadcrumbItem href={ROUTES.ORG.ROOT}>
          <I18nText path='navigation.link.main' />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <I18nText path='navigation.link.organizations' />
        </BreadcrumbItem>
      </Breadcrumbs>
      {/* Что-то работу саспенаса я не увидел, может что-то не понимаю */}
      <Suspense key={JSON.stringify(searchParams)} fallback={<OrganizationsLoading />}>
        <OrganizationsDashboard dashboard={dashboardResponse} />
        <OrganizationsTable
          organizations={organizationResponse.rows}
          pagination={organizationResponse.pagination}
        />
      </Suspense>
    </div>
  );
};

export default OrganizationsPage;
