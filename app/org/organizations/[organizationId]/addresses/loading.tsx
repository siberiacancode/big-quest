import { Skeleton } from '@/components/ui/skeleton';

const loading = () => (
  <div className='gap-5 2xlx:grid-cols-2 xlx:flex xlx:flex-wrap 2xl:grid-cols-3 xl:grid'>
    {Array(7)
      .fill({})
      .map((_, index) => (
        <div
          className='flex min-h-72 min-w-[340px] flex-1 flex-col space-y-3 rounded bg-background p-4'
          key={index}
        >
          <Skeleton className='h-4 rounded-xl' />
          <div className='space-y-4'>
            <div className='flex justify-between gap-3'>
              <Skeleton className='h-4 flex-1' />
              <Skeleton className='h-4 flex-1' />
            </div>
            <div className='flex justify-between gap-3'>
              <Skeleton className='h-4 flex-1' />
              <Skeleton className='h-4 flex-1' />
            </div>
            <div className='flex justify-between gap-3'>
              <Skeleton className='h-4 flex-1' />
              <Skeleton className='h-4 flex-1' />
            </div>
            <div className='flex justify-between gap-3'>
              <Skeleton className='h-4 flex-1' />
              <Skeleton className='h-4 flex-1' />
            </div>
            <div className='flex justify-between gap-3'>
              <Skeleton className='h-4 flex-1' />
              <Skeleton className='h-4 flex-1' />
            </div>
          </div>
        </div>
      ))}
  </div>
);

export default loading;
