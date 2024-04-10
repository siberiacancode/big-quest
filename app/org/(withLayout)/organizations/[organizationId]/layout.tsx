import { getOrganizationById } from '@/utils/api/requests';
import { ROUTES } from '@/utils/constants';

import { OrgBreadcrumbs } from '../../(components)/OrgBreadcrumbs/OrgBreadcrumbs';

import { OrganizationHeader } from './(components)/OrganizationHeader/OrganizationHeader';

interface OrganizationPageLayoutProps {
  params: { organizationId: string };
  children: React.ReactNode;
}

const OrganizationPageLayout = async ({ params, children }: OrganizationPageLayoutProps) => {
  const organization = await getOrganizationById({
    params: { id: params.organizationId }
  });

  return (
    <div className='bg-secondary'>
      <OrgBreadcrumbs
        className='mb-5'
        ids={{
          organizationId: { value: organization.name, clickable: false },
          organizations: { href: ROUTES.ORG.ORGANIZATIONS.DASHBOARD }
        }}
      />
      <div className='flex flex-col gap-4'>
        <OrganizationHeader organization={organization} />
        {children}
      </div>
    </div>
  );
};

export default OrganizationPageLayout;
