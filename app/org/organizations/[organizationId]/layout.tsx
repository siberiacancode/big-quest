import { OrgBreadcrumbs } from 'app/org/components/OrgBreadcrumbs/OrgBreadcrumbs';

import { getOrganizationById } from '@/utils/api/requests';

import { OrganizationHeader } from './components/OrganizationHeader/OrganizationHeader';

interface OrganizationPageLayoutProps {
  params: { organizationId: string };
  children: React.ReactNode;
}

const OrganizationPageLayout = async ({ params, children }: OrganizationPageLayoutProps) => {
  const organization = await getOrganizationById({
    params: { id: params.organizationId }
  });

  return (
    <div className='bg-secondary px-4'>
      <OrgBreadcrumbs idBreadcrumbs={organization.name} />
      <div className='flex flex-col gap-4'>
        <OrganizationHeader organization={organization} />
        {children}
      </div>
    </div>
  );
};

export default OrganizationPageLayout;
