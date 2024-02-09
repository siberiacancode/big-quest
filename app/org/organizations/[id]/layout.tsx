import { I18nText } from '@/components/common';
import { BreadcrumbItem, Breadcrumbs, Tabs } from '@/components/ui';
import { getOrganizationById } from '@/utils/api/requests';
import { ROUTES } from '@/utils/constants';

import { OrganizationHeader } from './components/OrganizationHeader/OrganizationHeader';
import { HEADER_OPTIONS } from './constants/navigations';

interface OrganizationPageLayoutProps {
  params: { id: string };
  children: React.ReactNode;
}

const OrganizationPageLayout = async ({ params, children }: OrganizationPageLayoutProps) => {
  const organization = await getOrganizationById({
    params
  });

  return (
    <div className='bg-secondary px-4'>
      <Breadcrumbs>
        <BreadcrumbItem href={ROUTES.ORG.ROOT}>
          <I18nText path='navigation.link.main' />
        </BreadcrumbItem>
        <BreadcrumbItem href={ROUTES.ORG.ORGANIZATIONS}>
          <I18nText path='navigation.link.organizations' />
        </BreadcrumbItem>
        <BreadcrumbItem href={ROUTES.ORG.ORGANIZATIONS}>{organization.name}</BreadcrumbItem>
      </Breadcrumbs>
      <div className='flex flex-col gap-4'>
        <Tabs defaultValue={HEADER_OPTIONS.PROFILE}>
          <OrganizationHeader organization={organization} />
        </Tabs>
        {children}
      </div>
    </div>
  );
};

export default OrganizationPageLayout;
