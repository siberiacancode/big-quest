import { InfoCardSkeleton } from '@/components/ui';
import { Skeleton } from '@/components/ui/skeleton';

const OrganizationProfileLoading = () => (
  <div className='flex w-full flex-wrap gap-6'>
    <div className='flex h-fit min-h-72 min-w-[340px] flex-1 flex-col space-y-3 rounded bg-background p-7'>
      <div className='space-y-7'>
        <Skeleton className='h-6 rounded-xl' />
        <Skeleton className='h-5 rounded-xl' />
      </div>
      <div className='space-y-4 pt-6'>
        <Skeleton className='h-4 w-5/12 rounded-xl' />
        <Skeleton className='h-4 w-5/12 rounded-xl' />
        <Skeleton className='h-4 w-5/12 rounded-xl' />
        <Skeleton className='h-4 w-5/12 rounded-xl' />
        <Skeleton className='h-4 w-5/12 rounded-xl' />
        <Skeleton className='h-4 w-4/12 rounded-xl' />
      </div>
      <div className='space-y-6 pt-5'>
        <Skeleton className='h-6 w-10/12 rounded-xl' />
        <Skeleton className='h-6 w-10/12 rounded-xl' />
      </div>
    </div>
    <div className='flex-1 space-y-6'>
      <InfoCardSkeleton multiplyBlockCount={3} className='pt-6' />
      <div className='flex flex-1 gap-6'>
        <InfoCardSkeleton withDescription className='w-1/2' />
        <InfoCardSkeleton className='w-1/2' />
      </div>
      <div className='flex h-fit min-h-72 flex-1 flex-col space-y-3 rounded bg-background p-6'>
        <div className='space-y-7'>
          <div className='flex items-end gap-3'>
            <Skeleton className='h-20 w-full rounded-xl'>
              <Skeleton className='m-3 h-7 w-32 rounded-xl bg-background' />
            </Skeleton>
            <Skeleton className='h-8 w-8 rounded-xl' />
          </div>
          <Skeleton className='h-7 w-32 rounded-xl' />
        </div>

        <div className='w-full'>
          <div className='w-full space-y-4'>
            <div className='flex gap-5'>
              <Skeleton className='h-auto w-2 rounded-xl' />
              <div className='w-full space-y-3 pb-10 pt-4'>
                <Skeleton className='h-7 w-3/12 rounded-xl' />
                <Skeleton className='h-10 w-full rounded-xl' />
              </div>
            </div>
          </div>
          <div className='w-full space-y-4'>
            <div className='flex gap-5'>
              <Skeleton className='h-auto w-2 rounded-xl' />
              <div className='w-full space-y-3 pb-10 pt-4'>
                <Skeleton className='h-7 w-3/12 rounded-xl' />
                <Skeleton className='h-10 w-full rounded-xl' />
              </div>
            </div>
          </div>
          <div className='w-full space-y-4'>
            <div className='flex gap-5'>
              <Skeleton className='h-auto w-2 rounded-xl' />
              <div className='w-full space-y-3 pb-10 pt-4'>
                <Skeleton className='h-7 w-3/12 rounded-xl' />
                <Skeleton className='h-10 w-full rounded-xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OrganizationProfileLoading;
