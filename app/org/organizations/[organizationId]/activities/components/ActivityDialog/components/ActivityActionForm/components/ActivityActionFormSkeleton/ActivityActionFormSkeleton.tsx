import { Skeleton } from '@/components/ui';

const ActivityActionFormSkeleton = () => (
  <div className='flex h-full flex-col gap-4 overflow-y-auto'>
    <div className='grid h-fit max-h-[600px] w-full grid-cols-3 gap-3 2smx:max-w-full 2smx:grid-cols-1 2smx:grid-rows-5 2smx:px-4 xsx:grid-rows-5 xsx:gap-2 xxsx:grid-rows-5'>
      <div className='relative col-span-2 max-h-[418px] max-w-[418px] 2smx:row-span-3 2smx:max-w-full xsx:row-span-3 xxsx:row-span-3 2sm:h-[418px]'>
        <Skeleton className='h-[418px] rounded-lg 2smx:h-[360px]' />
      </div>

      <div className='grid h-fit grid-cols-2 gap-2 2smx:row-span-2 2smx:grid-cols-4 2smx:grid-rows-1'>
        {Array(8)
          .fill({})
          .map((_, index) => (
            <Skeleton
              key={index}
              className='3smx:h-[85px] relative h-[100px] w-full xsx:h-[80px] xxsx:h-[60px]'
            />
          ))}
      </div>
    </div>
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
  </div>
);

export default ActivityActionFormSkeleton;
/*  <div className='relative flex w-full flex-col rounded-lg border p-5'>
      <Edit3Icon
        className='absolute right-4 top-4 hover:cursor-pointer'
        onClick={() => onEdit('edit')}
      />
      <div className='flex w-full justify-between gap-24 smx:flex-col smx:gap-2'>
        <div className='flex-1 space-y-3'>
          <div className='flex flex-col gap-2'>
            <Typography variant='sub1'>
              <I18nText path='field.title.label' />
            </Typography>
            <Typography variant='body1'>{activity.name}</Typography>
          </div>

          {activity.description && (
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.description.label' />
              </Typography>
              <Typography variant='body1'>{activity.description}</Typography>
            </div>
          )}
          <div className='flex flex-col gap-2'>
            <Typography variant='sub1'>
              <I18nText path='field.ageLimit.label' />
            </Typography>
            <Typography variant='body1'>
              <I18nText path='field.ageLimit.years' values={{ lowerAgeLimit, upperAgeLimit }} />
            </Typography>
          </div>

          <div className='flex flex-col gap-2'>
            <Typography variant='sub1'>
              <I18nText path='field.duration.label' />
            </Typography>
            <Typography variant='body1'>
              {activity.duration} <I18nText path='field.duration.minutes' />
              <I18nText
                path='field.duration.hours'
                values={{ hours: Math.ceil(activity.duration / 60) }}
              />
            </Typography>
          </div>
        </div>
        <div className='flex-1 space-y-3'>
          <div className='flex flex-col gap-2'>
            <Typography variant='sub1'>
              <I18nText path='field.category.label' />
            </Typography>
            <Typography variant='body1'>{activity.category}</Typography>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography variant='sub1'>
              <I18nText path='field.status.label' />
            </Typography>
            <Typography variant='sub4' className='w-fit rounded-md bg-secondary px-3 py-2'>
              <I18nText
                path={
                  `organization.activities.status.${activity.status.toLowerCase()}` as LocaleMessageId
                }
              />
            </Typography>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography variant='sub1'>
              <I18nText path='field.price.label' />
            </Typography>
            <Typography variant='body1'>
              {activity.price} <I18nText path='field.price.currency' />
            </Typography>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography variant='sub1'>
              <I18nText path='field.replay.label' />
            </Typography>

            <Typography variant='body1'>
              <I18nText path={`field.replay.option.${activity.replay}`} />
            </Typography>
          </div>
        </div>
      </div>
    </div> */
