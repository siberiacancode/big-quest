import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getOrganization } from '@/utils/api';
import { getI18n } from '@/utils/contexts/i18n/getI18n';

import { OrgBreadcrumbs } from '../../(components)/OrgBreadcrumbs/OrgBreadcrumbs';

import { OrganizationsDashboard } from './(components)/OrganizationsDashboard/OrganizationsDashboard';
import { OrganizationsTable } from './(components)/OrganizationsTable/OrganizationsTable';

export const generateMetadata = async (): Promise<Metadata> => {
  const i18n = await getI18n('ru');

  return {
    title: `${i18n.formatMessage({ id: 'metadata.page.org' })} | ${i18n.formatMessage({ id: 'metadata.page.org.dashboard' })}`,
    description: `${i18n.formatMessage({ id: 'metadata.page.org' })} | ${i18n.formatMessage({ id: 'metadata.page.org.dashboard' })}`
  };
};

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
    <>
      <OrgBreadcrumbs ids={{ dashboard: { hidden: true }, organizations: { clickable: false } }} />
      <OrganizationsDashboard />
      <OrganizationsTable
        organizations={getOrganizationResponse.rows}
        pagination={getOrganizationResponse.pagination}
      />
    </>
  );
};

export default OrganizationsDashboardPage;
