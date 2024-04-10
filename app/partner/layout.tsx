import { getOrganizationById } from '@/utils/api/requests';

import { OrganizationHeader } from './(components)/OrganizationHeader/OrganizationHeader';

interface OrganizationPageLayoutProps {
  children: React.ReactNode;
}

const PartnerOrganizationLayout = async ({ children }: OrganizationPageLayoutProps) => {
  const organizationId = '1';

  const organization = await getOrganizationById({
    params: { id: organizationId }
  });

  return (
    <div className='bg-secondary'>
      <div className='flex flex-col gap-4 px-[181px] py-10 2lgx:px-[64px] 2mdx:px-[32px]'>
        <OrganizationHeader organization={organization} />
        {children}
      </div>
    </div>
  );
};

export default PartnerOrganizationLayout;
