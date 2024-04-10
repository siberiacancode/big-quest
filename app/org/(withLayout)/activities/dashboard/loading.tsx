import { InfoCardSkeleton, Skeleton, TableSkeleton } from '@/components/ui';

const ActivitiesDashboardPageLoading = () => (
  <div className='bg-secondary px-4'>
    <div className='w-[170px] rounded-lg py-6' />
    <div className='flex flex-wrap gap-2 2smx:flex-col'>
      <div className='flex w-6/12 flex-wrap gap-2 2smx:w-full 2smx:flex-row'>
        <InfoCardSkeleton />
        <InfoCardSkeleton />
      </div>
      <InfoCardSkeleton itemsCount={3} className='w-5/12 2smx:w-full' />
    </div>
    <div className='mt-10 w-full rounded-md bg-background p-4'>
      <div className='mb-[23px] mt-[11px] flex w-full flex-wrap items-center gap-3 md:flex-nowrap md:items-center'>
        <Skeleton className='h-9 w-[180px] max-w-[180px] rounded-lg' />
        <Skeleton className='h-9 w-24 min-w-24 rounded-lg' />
        <Skeleton className='h-9 w-44 min-w-44 rounded-lg' />
        <Skeleton className='mx-2 inline-flex h-9 w-[116px] items-center rounded-lg md:ml-auto' />
      </div>
      <TableSkeleton />
      <div className='mt-8 flex w-full items-center justify-between mdx:flex-col'>
        <div className='mdx:pt-2'>
          <Skeleton className='h-5 w-32' />
        </div>
        <div className='flex flex-col-reverse items-center gap-2 py-3 md:flex-row'>
          <Skeleton className='h-5 w-32' />
          <div className='flex items-center gap-2'>
            <Skeleton className='h-8 w-12' />
            <Skeleton className='h-8 w-8' />
            <Skeleton className='h-8 w-8' />
            <Skeleton className='h-8 w-8' />
            <Skeleton className='h-8 w-12' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ActivitiesDashboardPageLoading;
