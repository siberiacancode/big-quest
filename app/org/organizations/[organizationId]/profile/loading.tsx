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
      <div className='h-48 flex-1 space-y-4 rounded bg-background p-8 px-6'>
        <Skeleton className='h-12 rounded-xl' />
        <div className='flex gap-3'>
          <Skeleton className='h-16 w-1/3 rounded-xl' />
          <Skeleton className='h-16 w-1/3 rounded-xl' />
          <Skeleton className='h-16 w-1/3 rounded-xl' />
        </div>
      </div>
      <div className='flex flex-1 gap-6'>
        <div className='w-1/2 space-y-6 rounded bg-background p-4'>
          <Skeleton className='h-8 w-full rounded-xl' />
          <div className='space-y-3'>
            <Skeleton className='h-16 w-1/3 rounded-xl' />
            <Skeleton className='h-4 w-1/2 rounded-xl' />
          </div>
        </div>
        <div className='w-1/2 space-y-6 rounded bg-background p-4'>
          <Skeleton className='h-8 w-full rounded-xl' />
          <Skeleton className='h-16 w-1/3 rounded-xl' />
        </div>
      </div>
      <div className='flex h-fit min-h-72 min-w-[340px] flex-1 flex-col space-y-3 rounded bg-background p-6'>
        <div className='space-y-7'>
          <Skeleton className='h-20 rounded-xl' />
          <Skeleton className='h-5 rounded-xl' />
        </div>
        <div className='space-y-4 pt-6'>
          <Skeleton className='h-4 w-3/12 rounded-xl' />
          <Skeleton className='h-8 w-full rounded-xl' />
        </div>
        <div className='space-y-4 pt-6'>
          <Skeleton className='h-4 w-3/12 rounded-xl' />
          <Skeleton className='h-8 w-full rounded-xl' />
        </div>
      </div>
    </div>
  </div>
);

export default OrganizationProfileLoading;
