import { getOrganizationById, getOrganizationCurrent } from '@/utils/api/requests';

import { OrganizationHeader } from './(components)/OrganizationHeader/OrganizationHeader';

interface OrganizationPageLayoutProps {
  children: React.ReactNode;
}

const PartnerLayout = async ({ children }: OrganizationPageLayoutProps) => {
  const getOrganizationCurrentResponse = await getOrganizationCurrent({
    config: { cache: 'no-store' }
  });

  const getOrganizationByIdResponse = await getOrganizationById({
    params: { id: getOrganizationCurrentResponse.id },
    config: { cache: 'no-store' }
  });

  return (
    <main className='h-screen bg-secondary'>
      <div className='container px-20 py-10'>
        <div className='flex flex-col gap-4'>
          <OrganizationHeader organization={getOrganizationByIdResponse} />
          {children}
        </div>
      </div>
    </main>
  );
};

export default PartnerLayout;
