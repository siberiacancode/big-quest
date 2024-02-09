import { getOrganizationById } from '@/utils/api/requests/organization';

import {
  OrganizationProfileCard,
  OrganizationProfileJournal,
  OrganizationProfileStatistics
} from './components';

interface Props {
  params: { id: string };
}

const page = async ({ params }: Props) => {
  const organization = await getOrganizationById({
    config: { params }
  });

  return (
    <div className='mt-4 flex justify-center gap-[22px] smx:flex-col'>
      <OrganizationProfileCard organization={organization} />

      <div className='flex w-1/2 flex-col gap-[22px] smx:w-full'>
        <OrganizationProfileStatistics />
        <OrganizationProfileJournal />
      </div>
    </div>
  );
};

export default page;
