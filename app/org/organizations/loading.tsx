import { Skeleton } from '@/components/ui/skeleton';

const OrganizationsPageLoading = () => (
  <div className='bg-secondary px-4'>
    <div className='mb-4 h-6 w-[170px] rounded-lg' />
    <div className='flex flex-wrap gap-3'>
      <div className='flex flex-auto flex-col gap-2 rounded-lg bg-background p-6 shadow-sm'>
        <div className='mb-1 flex justify-between'>
          <Skeleton className='h-8 w-3/5 rounded-lg' />
          <Skeleton className='h-9 w-9 rounded-full' />
        </div>
        <Skeleton className='h-9 w-1/3 rounded-lg' />
        <Skeleton className='h-4 w-1/2 rounded-lg' />
      </div>
      <div className='flex flex-auto flex-col gap-2 rounded-lg bg-background p-6 shadow-sm'>
        <div className='mb-1 flex justify-between'>
          <Skeleton className='h-8 w-3/5 rounded-lg' />
          <Skeleton className='h-9 w-9 rounded-full' />
        </div>
        <Skeleton className='h-9 w-1/3 rounded-lg' />
        <Skeleton className='h-4 w-1/2 rounded-lg' />
      </div>
      <div className='flex w-6/12 flex-col gap-2 rounded-lg bg-background p-6 shadow-sm'>
        <div className='mb-1 flex justify-between'>
          <Skeleton className='h-8 w-2/5 rounded-lg' />
          <Skeleton className='h-9 w-9 rounded-full' />
        </div>
        <div className='flex justify-between'>
          <div className='flex w-1/4 flex-col gap-2'>
            <Skeleton className='h-9 w-5/6 rounded-lg' />
            <Skeleton className='h-4 rounded-lg' />
          </div>
          <div className='flex w-1/4 flex-col gap-2'>
            <Skeleton className='h-9 w-5/6 rounded-lg' />
            <Skeleton className='h-4 rounded-lg' />
          </div>
          <div className='flex w-1/4 flex-col gap-2'>
            <Skeleton className='h-9 w-5/6 rounded-lg' />
            <Skeleton className='h-4 rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OrganizationsPageLoading;
