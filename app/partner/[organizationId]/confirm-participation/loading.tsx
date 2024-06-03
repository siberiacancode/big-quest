import { Skeleton } from '@/components/ui';

import { SelectScheduleSectionLoading } from './(components)/SelectScheduleSection/SelectScheduleSectionLoading';

const OrganizationConfirmParticipationLoading = () => (
  <div>
    <Skeleton className='mx-auto h-8 w-36' />
    <Skeleton className='mt-8 h-7 w-32' />
    <div className='mt-6 flex items-center gap-3'>
      <Skeleton className='size-10 rounded-full' />
      <div className='flex grow flex-col justify-between'>
        <Skeleton className='h-5 w-32' />
        <Skeleton className='h-3 w-32' />
      </div>
    </div>
    <div className='mt-8 grow'>
      <SelectScheduleSectionLoading />
    </div>
  </div>
);

export default OrganizationConfirmParticipationLoading;
