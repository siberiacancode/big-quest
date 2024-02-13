import { getOrganizationById } from '@/utils/api/requests';

import { OrganizationProfileCard } from './components/OrganizationProfileCard/OrganizationProfileCard';
import { OrganizationProfileJournal } from './components/OrganizationProfileJournal/OrganizationProfileJournal';
import { OrganizationProfileStatistics } from './components/OrganizationProfileStatistics/OrganizationProfileStatistics';

interface OrganizationProfilePageProps {
  params: { organizationId: string };
}

const OrganizationProfilePage = async ({ params }: OrganizationProfilePageProps) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 100000);
  });
  const organization = await getOrganizationById({
    params: { id: params.organizationId }
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

export default OrganizationProfilePage;
