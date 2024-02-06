import type { Organization } from '@/utils/api/types/types';

import { Journal, ProfileInformation, Statistics } from './components';

interface ProfileProps {
  organization: Organization;
}

export const Profile = ({ organization }: ProfileProps) => {
  return (
    <div className='mt-4 flex justify-center gap-[22px] smx:flex-col'>
      <ProfileInformation organization={organization} />
      <div className='flex w-1/2 flex-col gap-[22px] smx:w-full'>
        {organization.type === 'PARTNER' && <Statistics />}
        <Journal />
      </div>
    </div>
  );
};
