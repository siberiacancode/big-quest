import { Skeleton } from '@/components/ui';

export const SelectScheduleSectionLoading = () => (
  <section className='flex h-full flex-col'>
    <Skeleton className='h-7 w-32' />
    <div className='mt-6 flex grow flex-col gap-2 '>
      <div className='flex items-center gap-3 rounded-md border-2 border-inherit px-4 py-[14px]'>
        <Skeleton className='size-10 rounded-lg' />
        <div className='flex grow flex-col gap-[2px]'>
          <Skeleton className='h-5 w-32' />
          <Skeleton className='h-3 w-32' />
        </div>
        <Skeleton className='h-9 w-14' />
      </div>
      <div className='flex items-center gap-3 rounded-md border-2 border-inherit px-4 py-[14px]'>
        <Skeleton className='size-10 rounded-lg' />
        <div className='flex grow flex-col gap-[2px]'>
          <Skeleton className='h-5 w-32' />
          <Skeleton className='h-3 w-32' />
        </div>
        <Skeleton className='h-9 w-14' />
      </div>
      <div className='flex items-center gap-3 rounded-md border-2 border-inherit px-4 py-[14px]'>
        <Skeleton className='size-10 rounded-lg' />
        <div className='flex grow flex-col gap-[2px]'>
          <Skeleton className='h-5 w-32' />
          <Skeleton className='h-3 w-32' />
        </div>
        <Skeleton className='h-9 w-14' />
      </div>
      <div className='flex items-center gap-3 rounded-md border-2 border-inherit px-4 py-[14px]'>
        <Skeleton className='size-10 rounded-lg' />
        <div className='flex grow flex-col gap-[2px]'>
          <Skeleton className='h-5 w-32' />
          <Skeleton className='h-3 w-32' />
        </div>
        <Skeleton className='h-9 w-14' />
      </div>
    </div>
  </section>
);
