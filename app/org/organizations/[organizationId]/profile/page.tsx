import { getOrganizationById } from '@/utils/api/requests';

import { OrganizationProfileCard } from './(components)/OrganizationProfileCard/OrganizationProfileCard';
import { OrganizationProfileChanges } from './(components)/OrganizationProfileChanges/OrganizationProfileChanges';
import { OrganizationProfileStatistics } from './(components)/OrganizationProfileStatistics/OrganizationProfileStatistics';
import { OrganizationProfileTariff } from './(components)/OrganizationProfileTariff/OrganizationProfileTariff';

interface OrganizationProfilePageProps {
  params: { organizationId: string };
}

const OrganizationProfilePage = async ({ params }: OrganizationProfilePageProps) => {
  const organization = await getOrganizationById({
    params: { id: params.organizationId },
    config: { cache: 'no-cache' }
  });

  console.log('#organization', organization);

  return (
    <div className='flex justify-center gap-[22px] smx:flex-col'>
      <OrganizationProfileCard organization={organization} />
      <div className='flex w-1/2 flex-col gap-[22px] smx:w-full'>
        <OrganizationProfileTariff organization={organization} />
        <OrganizationProfileStatistics />
        <OrganizationProfileChanges organization={organization} />
      </div>
    </div>
  );
};

export default OrganizationProfilePage;
