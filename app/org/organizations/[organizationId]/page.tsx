import { getOrganizationById } from '@/utils/api/requests';

import { OrganizationProfileCard } from './(components)/OrganizationProfileCard/OrganizationProfileCard';
import { OrganizationProfileJournal } from './(components)/OrganizationProfileJournal/OrganizationProfileJournal';
import { OrganizationProfileStatistics } from './(components)/OrganizationProfileStatistics/OrganizationProfileStatistics';

interface OrganizationProfilePageProps {
  params: { organizationId: string };
}

const OrganizationPage = async ({ params }: OrganizationProfilePageProps) => {
  const organization = await getOrganizationById({
    params: { id: params.organizationId },
    config: { cache: 'no-cache' }
  });

  return (
    <div className='flex justify-center gap-[22px] smx:flex-col'>
      <OrganizationProfileCard organization={organization} />
      <div className='flex w-1/2 flex-col gap-[22px] smx:w-full'>
        <OrganizationProfileStatistics />
        <OrganizationProfileJournal />
      </div>
    </div>
  );
};

export default OrganizationPage;
