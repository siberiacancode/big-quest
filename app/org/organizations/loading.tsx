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
    <div className='mt-10 w-full rounded-md bg-background p-4'>
      <div className='flex w-full flex-wrap py-4 md:flex-nowrap'>
        <div className='flex w-2/3 items-center mdx:flex-wrap'>
          <Skeleton className='h-9 w-2/6 max-w-sm rounded-lg' />
          <Skeleton className='m-2 h-9 w-1/6 rounded-lg' />
          <Skeleton className='m-2 h-9 w-2/6 rounded-lg' />
        </div>
        <Skeleton className='mx-2 h-9 w-[116px] rounded-lg md:ml-auto' />
      </div>
      <div className='w-full rounded-md '>
        <div className='w-full caption-bottom rounded-lg border border-secondary'>
          <div className='flex h-12 border-b border-secondary bg-secondary' />
          <div className='flex flex-col border-secondary [&_div:last-child]:border-0'>
            {Array(10)
              .fill({})
              .map((_, index) => (
                <div
                  key={index}
                  className='flex border-b border-secondary [&_div:last-child]:border-0'
                >
                  <div className='flex items-center p-4 pr-0 align-middle'>
                    <Skeleton className='h-4 w-4 rounded-sm align-middle' />
                  </div>
                  <div className='flex w-36 items-center p-4 align-middle'>
                    <Skeleton className='mx-4 h-4 w-full' />
                  </div>
                  <div className='flex w-56 items-center p-4 align-middle'>
                    <Skeleton className='mx-4 h-4 w-full' />
                  </div>
                  <div className='flex w-36 items-center p-4 align-middle'>
                    <Skeleton className='mx-4 h-4 w-full' />
                  </div>
                  <div className='flex w-32 items-center p-4 align-middle'>
                    <Skeleton className='mx-4 h-4 w-full' />
                  </div>
                  <div className='flex w-44 items-center p-4 align-middle'>
                    <Skeleton className='mx-4 h-4 w-full' />
                  </div>
                  <div className='flex w-36 items-center p-4 align-middle'>
                    <Skeleton className='mx-4 h-4 w-full' />
                  </div>
                  <div className=' w-8 p-4 align-middle'>
                    <Skeleton className='h-8 w-8 rounded-sm align-middle' />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-between mdx:flex-col'>
        <div className='mdx:pt-2'>
          <Skeleton className='h-5 w-28' />
        </div>
        <div className='flex flex-col-reverse items-center justify-end gap-2 space-x-2 py-3 md:flex-row'>
          <Skeleton className='h-10 w-1/3' />
          <div className='flex items-center gap-2'>
            <Skeleton className='h-5 w-32' />
            <Skeleton className='h-8 w-12 px-3' />
            <Skeleton className='h-8 w-8' />
            <Skeleton className='h-8 w-8' />
            <Skeleton className='h-8 w-8 rounded-lg' />
            <Skeleton className='h-8 w-12 px-3' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OrganizationsPageLoading;
