import { getDictionary } from 'app/dictionaries';
import type { Metadata, ResolvingMetadata } from 'next';

import { getOrganizationById } from '@/utils/api/requests';
import { ROUTES } from '@/utils/constants';
import { getPathnameFromMetadataState } from '@/utils/helpers';

import { OrgBreadcrumbs } from '../../(components)/OrgBreadcrumbs/OrgBreadcrumbs';

import { OrganizationHeader } from './(components)/OrganizationHeader/OrganizationHeader';

interface OrganizationPageLayoutProps {
  params: { organizationId: string };
  children: React.ReactNode;
}

export async function generateMetadata(
  { params }: OrganizationPageLayoutProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const dictionary = await getDictionary('ru');
  const organization = await getOrganizationById({
    params: { id: params.organizationId }
  });

  const pathname = getPathnameFromMetadataState(parent);
  const pathnameParts = pathname.split('/');
  const lastPart = pathnameParts[pathnameParts.length - 1];

  return {
    title: `${dictionary['metadata.page.org']} | ${organization.name} | ${dictionary[`metadata.page.org.${lastPart}`]}`
  };
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
