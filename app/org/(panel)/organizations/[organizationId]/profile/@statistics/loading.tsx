import { InfoCardSkeleton } from '@/components/ui';

const OrganizationProfileStatisticsLoading = () => (
  <div className='flex flex-1 gap-6'>
    <InfoCardSkeleton className='w-1/2' />
    <InfoCardSkeleton className='w-1/2' />
  </div>
);

export default OrganizationProfileStatisticsLoading;
