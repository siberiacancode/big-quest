import { Skeleton } from '@/components/ui/skeleton';

const AddressesLoading = () => (
  <>
    <div className='flex justify-between'>
      <Skeleton className='h-8 w-28 bg-background' />
      <Skeleton className='h-8 w-36 bg-background' />
    </div>

    <div className='gap-5 2xlx:grid-cols-2 xlx:flex xlx:flex-wrap 2xl:grid-cols-3 xl:grid'>
      {Array(5)
        .fill({})
        .map((_, index) => (
          <div
            className='flex min-h-72 min-w-[340px] flex-1 flex-col space-y-3 rounded bg-background p-6'
            key={index}
          >
            <div className='flex justify-end'>
              <Skeleton className='float-right h-6 w-6 rounded-full pb-3' />
            </div>

            <div className='space-y-4'>
              <div className='flex justify-between gap-3'>
                <Skeleton className='h-5 flex-1' />
                <Skeleton className='h-5 flex-1' />
              </div>
              <div className='flex justify-between gap-3'>
                <Skeleton className='h-5 flex-1' />
                <Skeleton className='h-5 flex-1' />
              </div>
              <div className='flex justify-between gap-3'>
                <Skeleton className='h-5 flex-1' />
                <Skeleton className='h-5 flex-1' />
              </div>
              <div className='flex justify-between gap-3'>
                <Skeleton className='h-5 flex-1' />
                <Skeleton className='h-5 flex-1' />
              </div>
              <div className='flex justify-between gap-3'>
                <Skeleton className='h-5 flex-1' />
                <Skeleton className='h-10 flex-1' />
              </div>
            </div>
          </div>
        ))}
    </div>
  </>
);

export default AddressesLoading;
