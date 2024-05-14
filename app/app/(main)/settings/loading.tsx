import { Skeleton } from '@/components/ui';

const AppProfileSettingsLoading = () => (
  <div>
    <Skeleton className='mx-auto h-7 w-32' />
    <div className='mt-5 flex w-full items-center'>
      <Skeleton className='size-14 rounded-full' />
      <div className='ml-4 mr-6 flex-grow'>
        <Skeleton className='h-4 w-36' />
        <Skeleton className='mt-2 h-4 w-36' />
      </div>
      <Skeleton className='size-8' />
    </div>

    <hr className='mx-auto mb-3 mt-5 w-[90%] opacity-50' />
    <div>
      <Skeleton className='h-4 w-36' />
      <div className='mt-3 flex items-center gap-4 px-[6px] py-3'>
        <Skeleton className='size-8' />
        <Skeleton className='h-5 w-36 px-[6px] py-3' />
      </div>
    </div>
    <hr className='mx-auto my-3 w-[90%] opacity-50' />
    <div>
      <Skeleton className='h-4 w-36' />
      <div className='mt-3 flex items-center gap-4 px-[6px] py-3'>
        <Skeleton className='size-8' />
        <Skeleton className='h-5 w-36 flex-grow px-[6px] py-3' />
        <Skeleton className='h-7 w-14' />
      </div>
      <div className='mt-3 flex items-center gap-4 px-[6px] py-3'>
        <Skeleton className='size-8' />
        <Skeleton className='h-5 w-36 flex-grow px-[6px] py-3' />
        <Skeleton className='h-7 w-14' />
      </div>
    </div>
    <hr className='mx-auto mb-4 mt-3 w-[90%] opacity-50' />
    <div>
      <Skeleton className='h-4 w-36' />
      <div className='mt-3 flex items-center gap-4 px-[6px] py-3'>
        <Skeleton className='size-8' />
        <Skeleton className='h-5 w-36 flex-grow px-[6px] py-3' />
      </div>
    </div>
  </div>
);

export default AppProfileSettingsLoading;
