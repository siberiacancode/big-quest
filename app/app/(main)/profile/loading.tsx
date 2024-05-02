import { Card, CardContent, Skeleton } from '@/components/ui';

const AppProfileLoading = () => (
  <div className='px-5 py-9'>
    <div className='flex items-center justify-between'>
      <Skeleton className='h-7 w-32' />
      <Skeleton className='size-8' />
    </div>
    <div className='mt-6'>
      <Card className='shadow-sm'>
        <CardContent className='px-5 py-8'>
          <div className='flex gap-4'>
            <Skeleton className='size-20 rounded-full' />
            <div className='flex flex-col justify-center gap-2'>
              <Skeleton className='h-4 w-32' />
              <Skeleton className='h-4 w-32' />
              <Skeleton className='h-4 w-32' />
            </div>
          </div>

          <div className='mt-6 flex gap-4'>
            <Card className='basis-1/2'>
              <CardContent className='flex items-center justify-center gap-3 px-3 py-[18px]'>
                <Skeleton className='size-8' />
                <Skeleton className='size-8' />
              </CardContent>
            </Card>
            <Card className='basis-1/2'>
              <CardContent className='flex items-center justify-center gap-3 px-3 py-[18px]'>
                <Skeleton className='size-8' />
                <Skeleton className='size-8' />
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default AppProfileLoading;
