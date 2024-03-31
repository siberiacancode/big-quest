import { Skeleton } from '@/components/ui/skeleton';

const OrganizationProfileChangesLoading = () => (
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
);

export default OrganizationProfileChangesLoading;
