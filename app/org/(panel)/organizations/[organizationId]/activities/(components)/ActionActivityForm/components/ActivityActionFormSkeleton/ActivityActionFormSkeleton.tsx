import { Skeleton } from '@/components/ui';

export const ActivityActionFormSkeleton = () => (
  <div className='flex w-full flex-col rounded-lg border p-5'>
    <div className='flex justify-between gap-20 smx:flex-col smx:gap-2'>
      <div className='w-fit flex-1 space-y-3'>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-6 w-[100px]' />
          <Skeleton className='h-6 w-[220px]' />
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-6 w-[100px]' />
          <Skeleton className='h-16 w-[240px]' />
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-6 w-[200px]' />
          <Skeleton className='h-6 w-[100px]' />
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-6 w-[180px]' />
          <Skeleton className='h-6 w-[150px]' />
        </div>
      </div>
      <div className='flex-1 space-y-3'>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-6 w-[100px]' />
          <Skeleton className='h-6 w-[110px]' />
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-6 w-[80px]' />
          <Skeleton className='h-8 w-[110px]' />
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-6 w-[100px]' />
          <Skeleton className='h-6 w-[120px]' />
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-6 w-[200px]' />
          <Skeleton className='h-6 w-[110px]' />
        </div>
      </div>
    </div>
  </div>
);
