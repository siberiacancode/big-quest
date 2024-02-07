import { Journal, OrganizationProfileCard, Statistics } from './components';

interface OrganizationProfileProps {
  organization: OrganizationResponse;
}

export const OrganizationProfile = ({ organization }: OrganizationProfileProps) => (
  <div className='mt-4 flex justify-center gap-[22px] smx:flex-col'>
    <OrganizationProfileCard organization={organization} />
    <div className='flex w-1/2 flex-col gap-[22px] smx:w-full'>
      {organization.type === 'PARTNER' && <Statistics />}
      <Journal />
    </div>
  </div>
);
