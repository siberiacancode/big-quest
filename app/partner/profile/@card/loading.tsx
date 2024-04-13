import { Skeleton } from '@/components/ui/skeleton';

const PartnerProfileCardLoading = () => (
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
);

export default PartnerProfileCardLoading;
